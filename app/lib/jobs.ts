import { CAREERS_URL } from "./site";

/* Live jobs, read from the Top Echelon portal.
 *
 * WHY THESE PAGES EXIST
 *
 * Thirty-nine engineering roles, each several hundred words of specific,
 * regularly-refreshed writing about real work in real metros, currently live
 * only on careers.topechelon.com. Every topical and freshness signal that
 * content produces accrues to that domain rather than to this one, while this
 * site links out to it. Mirroring the roles here puts the substance on the
 * domain that is trying to rank for it.
 *
 * The portal already publishes valid JobPosting structured data on each job
 * page, so this is not a case of adding markup that was missing. It is a case
 * of the content sitting on the wrong domain.
 *
 * HOW IT READS THEM
 *
 * The listing is parsed from the portal's jobs table, which is server
 * rendered. Each detail page is read from its own JSON-LD block rather than
 * from its markup: the portal publishes the authoritative title, description,
 * posting date, identifier and location there, and a JSON contract survives a
 * restyle that would break a selector.
 *
 * Everything degrades to an empty list rather than throwing. If the portal is
 * unreachable or its markup changes shape, the jobs index shows its fallback
 * and the rest of the site is unaffected; a build must not fail because a
 * third party changed a class name.
 */

const REVALIDATE = 3600; // an hour; these change daily at most

export type JobSummary = {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  state: string;
  jobType: string;
  remoteType: string;
};

export type JobDetail = JobSummary & {
  descriptionHtml: string;
  datePosted: string | null;
  reference: string | null;
  applyUrl: string;
};

/* The site does not use em dashes (they read as machine-written, and the
   rest of this site had 246 of them removed). Titles arrive from the ATS
   with them, so they are normalised on the way in rather than left to look
   like the one place nobody checked. */
function tidy(s: string): string {
  return s
    .replace(/\s*—\s*/g, " - ")
    .replace(/–/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&nbsp;/g, " ");
}

function stripTags(s: string): string {
  return decodeEntities(s.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

export function jobSlug(title: string, id: string): string {
  const base = tidy(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 9)
    .join("-");
  /* The id suffix is what makes the slug unique. Two "Senior Project Manager"
     roles in different states would otherwise collide, and the ATS is free to
     post the same title as often as it likes. */
  return `${base}-${id.slice(0, 8)}`;
}

/* A conservative allowlist. The description is third-party HTML written by
   whoever typed the job into the ATS, so it is rendered only after everything
   that could execute or navigate has been removed. Formatting tags survive
   because the descriptions are genuinely structured - headings, lists, bold -
   and flattening them to text would make them harder to read than the portal. */
const ALLOWED = new Set([
  "p", "br", "strong", "b", "em", "i", "u", "ul", "ol", "li",
  "h3", "h4", "h5", "hr", "div", "span", "table", "tr", "td", "th", "tbody", "thead",
]);

export function sanitizeHtml(html: string): string {
  let out = html
    // whole elements that must never survive, contents included
    .replace(/<(script|style|iframe|object|embed|form|input|button|svg)[\s\S]*?<\/\1>/gi, "")
    .replace(/<(script|style|iframe|object|embed|form|input|button|svg)[^>]*\/?>/gi, "");

  out = out.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g, (tag, name: string) => {
    const lower = name.toLowerCase();
    if (!ALLOWED.has(lower)) return "";
    // Keep the tag, drop every attribute: no href, no style, no on* handler,
    // and nothing left that could carry javascript: or data: anywhere.
    return tag.startsWith("</") ? `</${lower}>` : `<${lower}>`;
  });

  return out;
}

/** Map the portal's own job-type vocabulary onto schema.org employmentType. */
export function employmentType(jobType: string): string | null {
  const t = jobType.toLowerCase();
  if (t.includes("direct") || t.includes("full")) return "FULL_TIME";
  if (t.includes("part")) return "PART_TIME";
  if (t.includes("contract")) return "CONTRACTOR";
  if (t.includes("temp")) return "TEMPORARY";
  if (t.includes("intern")) return "INTERN";
  return null;
}

/** All jobs currently on the portal. Empty if it cannot be read. */
export async function listJobs(): Promise<JobSummary[]> {
  let html: string;
  try {
    const res = await fetch(CAREERS_URL, {
      next: { revalidate: REVALIDATE },
      headers: { "User-Agent": "metroassoc.com job sync" },
    });
    if (!res.ok) return [];
    html = await res.text();
  } catch {
    return [];
  }

  const rows = html.match(/<tr>[\s\S]*?<\/tr>/g) ?? [];
  const jobs: JobSummary[] = [];

  for (const row of rows) {
    const link = row.match(
      /<a[^>]+class="title-link"[^>]+href="[^"]*\/jobs\/([a-f0-9-]+)"[^>]*>([\s\S]*?)<\/a>/,
    );
    if (!link) continue;

    const id = link[1];
    const title = tidy(stripTags(link[2]));
    if (!title) continue;

    const loc = tidy(stripTags(row.match(/class="chiclet-loc"[^>]*>([\s\S]*?)<\//)?.[1] ?? ""));
    const metas = [...row.matchAll(/class="jobTable-meta"[^>]*>([\s\S]*?)<\/td>/g)].map((m) =>
      tidy(stripTags(m[1])),
    );

    const comma = loc.lastIndexOf(",");
    jobs.push({
      id,
      slug: jobSlug(title, id),
      title,
      location: loc,
      city: comma > 0 ? loc.slice(0, comma).trim() : loc,
      state: comma > 0 ? loc.slice(comma + 1).trim() : "",
      jobType: metas[0] ?? "",
      remoteType: metas[1] ?? "",
    });
  }

  return jobs;
}

/** One job, read from its own JSON-LD. Null if it is gone from the portal. */
export async function getJob(slug: string): Promise<JobDetail | null> {
  const summary = (await listJobs()).find((j) => j.slug === slug);
  if (!summary) return null;

  const url = `${CAREERS_URL}/jobs/${summary.id}`;
  let html: string;
  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE },
      headers: { "User-Agent": "metroassoc.com job sync" },
    });
    if (!res.ok) return null;
    html = await res.text();
  } catch {
    return null;
  }

  let data: Record<string, unknown> = {};
  const block = html.match(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/,
  )?.[1];
  if (block) {
    try {
      data = JSON.parse(block) as Record<string, unknown>;
    } catch {
      data = {};
    }
  }

  const rawDescription =
    typeof data.description === "string"
      ? data.description
      : html.match(/class="job-description"[^>]*>([\s\S]*?)<\/p>\s*<\//)?.[1] ?? "";

  const identifier = data.identifier as { value?: string } | undefined;
  const reference =
    stripTags(
      html.match(/<strong>ID<\/strong><span>([\s\S]*?)<\/span>/)?.[1] ?? "",
    ) || null;

  return {
    ...summary,
    title: typeof data.title === "string" ? tidy(data.title) : summary.title,
    descriptionHtml: sanitizeHtml(rawDescription),
    datePosted: typeof data.datePosted === "string" ? data.datePosted : null,
    reference: reference ?? (identifier?.value ?? null),
    applyUrl: url,
  };
}

/** Plain text, for meta descriptions and previews. */
export function jobExcerpt(html: string, words = 32): string {
  const text = stripTags(html);
  const cut = text.split(/\s+/).slice(0, words).join(" ");
  return cut.length < text.length ? `${cut}...` : text;
}
