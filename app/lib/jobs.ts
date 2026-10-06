import { CAREERS_URL, JOB_FEED_URL } from "./site";

/* Live jobs, read from the Top Echelon careers-page XML feed.
 *
 * WHY A FEED AND NOT THE PORTAL HTML
 *
 * This used to parse the portal's rendered job table: `<tr>` rows, a
 * `title-link` anchor, `chiclet-loc`, and job type read out of the first and
 * second `jobTable-meta` cells by position. Every one of those is a styling
 * decision belonging to a third party, and a restyle would have emptied the
 * whole jobs section — on a build that still succeeded, because the parse
 * degrades to an empty list rather than throwing.
 *
 * Top Echelon publishes the same 28 roles as an XML feed intended for exactly
 * this ("Build a Careers Page on Your Website"). It carries the title,
 * description, city, state, country, posting date, job id and type flags as
 * named fields, so nothing here depends on how the portal looks.
 *
 * The descriptions now arrive with the listing, so nothing a page actually
 * needs depends on a second request. A detail page still makes one, but only
 * to pick up the human reference described below, and it renders in full
 * without it.
 *
 * Checked before switching: the feed's 28 job ids are exactly the portal's 28,
 * and the slugs computed from the feed titles are identical to the slugs the
 * scraper produced for all 28 — so no role URL changed and nothing needed a
 * redirect.
 *
 * WHAT THE FEED DOES NOT CARRY
 *
 * Remote type ("On-Site") and the human reference ("FL232-2745162") exist only
 * in the portal's HTML. Both are still read from there, but as best-effort
 * enrichment: if that markup changes they go quietly missing and every page
 * still renders in full from the feed. The difference from before is that
 * these are now the optional extras rather than the load-bearing parse.
 *
 * WHY THESE PAGES EXIST
 *
 * Thirty-nine engineering roles, each several hundred words of specific,
 * regularly-refreshed writing about real work in real metros, living on the
 * hosted portal (jobs.metroassoc.com since Oct 2026; careers.topechelon.com
 * before that). Every topical and freshness signal that content produces
 * accrues to the portal's host rather than to this one, while this site links
 * out to it. Mirroring the roles here puts the substance on the domain that is
 * trying to rank for it.
 *
 * Moving the portal onto our own subdomain does not change that. A subdomain
 * is a separate host as far as search is concerned, and the pages are still
 * rendered by the ATS. The branding is the win; the mirror is still the SEO.
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
  /* On the summary rather than only the detail because the feed carries it for
     every role in the one response. Under the old scraper this was a per-job
     page fetch, so the index could not sort or show a date without twenty-eight
     extra requests; now it costs nothing. */
  datePosted: string | null;
};

export type JobDetail = JobSummary & {
  descriptionHtml: string;
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

/* The feed gives the state as a two-letter code; the pages have always shown
   the full name ("Other roles in Connecticut", and the state headings on the
   jobs index), so it is expanded back here. Falls through to whatever the feed
   said if it is ever something other than a US state, which keeps a Canadian
   or overseas posting readable instead of blank. */
const STATE_NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", DC: "District of Columbia",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana",
  ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan",
  MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota",
  OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee",
  TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia", WA: "Washington",
  WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming", PR: "Puerto Rico",
};

function expandState(code: string): string {
  const key = code.trim().toUpperCase();
  return STATE_NAMES[key] ?? code.trim();
}

/** Text of one XML element, CDATA unwrapped. Empty string when absent. */
function field(xml: string, name: string): string {
  const m = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  if (!m) return "";
  const raw = m[1].replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "");
  return raw.trim();
}

function isYes(xml: string, name: string): boolean {
  return field(xml, name).toLowerCase() === "yes";
}

/* The portal's own vocabulary, rebuilt from the feed's three booleans so the
   chips read exactly as they did when they were scraped out of the table. */
function jobTypeFrom(xml: string): string {
  if (isYes(xml, "directhire")) return "Direct Hire";
  if (isYes(xml, "contract")) return "Contract";
  if (isYes(xml, "temptoperm")) return "Contract to Hire";
  return "";
}

/* Remote type lives only in the portal's markup. Best effort: one request,
   cached like everything else, and an empty map if anything about it changed.
   Nothing downstream treats a missing value as an error. */
async function remoteTypes(): Promise<Map<string, string>> {
  const out = new Map<string, string>();
  try {
    const res = await fetch(CAREERS_URL, {
      next: { revalidate: REVALIDATE },
      headers: { "User-Agent": "metroassoc.com job sync" },
    });
    if (!res.ok) return out;
    const html = await res.text();
    for (const row of html.match(/<tr>[\s\S]*?<\/tr>/g) ?? []) {
      const id = row.match(/href="[^"]*\/jobs\/([a-f0-9-]+)"/)?.[1];
      if (!id) continue;
      const metas = [...row.matchAll(/class="jobTable-meta"[^>]*>([\s\S]*?)<\/td>/g)].map((m) =>
        tidy(stripTags(m[1])),
      );
      if (metas[1]) out.set(id, metas[1]);
    }
  } catch {
    /* leave it empty */
  }
  return out;
}

/** All jobs currently on the portal. Empty if the feed cannot be read. */
export async function listJobs(): Promise<JobSummary[]> {
  let xml: string;
  try {
    const res = await fetch(JOB_FEED_URL, {
      next: { revalidate: REVALIDATE },
      headers: { "User-Agent": "metroassoc.com job sync" },
    });
    if (!res.ok) return [];
    xml = await res.text();
  } catch {
    return [];
  }

  const remote = await remoteTypes();
  const jobs: JobSummary[] = [];

  for (const [, block] of xml.matchAll(/<job>([\s\S]*?)<\/job>/g)) {
    const id = field(block, "jobid");
    const title = tidy(decodeEntities(field(block, "positiontitle")));
    if (!id || !title) continue;

    const city = tidy(decodeEntities(field(block, "city")));
    const state = expandState(decodeEntities(field(block, "state")));

    jobs.push({
      id,
      slug: jobSlug(title, id),
      title,
      location: [city, state].filter(Boolean).join(", "),
      city,
      state,
      jobType: jobTypeFrom(block),
      remoteType: remote.get(id) ?? "",
      datePosted: field(block, "dateposted") || null,
    });
  }

  return jobs;
}

/** One job from the same feed. Null if it is gone from the portal. */
export async function getJob(slug: string): Promise<JobDetail | null> {
  let xml: string;
  try {
    const res = await fetch(JOB_FEED_URL, {
      next: { revalidate: REVALIDATE },
      headers: { "User-Agent": "metroassoc.com job sync" },
    });
    if (!res.ok) return null;
    xml = await res.text();
  } catch {
    return null;
  }

  const summary = (await listJobs()).find((j) => j.slug === slug);
  if (!summary) return null;

  const block =
    [...xml.matchAll(/<job>([\s\S]*?)<\/job>/g)]
      .map((m) => m[1])
      .find((b) => field(b, "jobid") === summary.id) ?? "";

  const url = `${CAREERS_URL}/jobs/${summary.id}`;

  /* The human reference ("FL232-2745162") is printed on the portal page and
     nowhere in the feed. Worth one request for the page a candidate might
     quote it from, but not worth failing over: the feed's job id already
     backs the schema identifier. */
  let reference: string | null = null;
  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE },
      headers: { "User-Agent": "metroassoc.com job sync" },
    });
    if (res.ok) {
      const html = await res.text();
      reference =
        stripTags(html.match(/<strong>ID<\/strong><span>([\s\S]*?)<\/span>/)?.[1] ?? "") || null;
    }
  } catch {
    /* fall through to the id below */
  }

  return {
    ...summary,
    descriptionHtml: sanitizeHtml(field(block, "description")),
    reference: reference ?? summary.id,
    applyUrl: url,
  };
}

/** Plain text, for meta descriptions and previews. */
export function jobExcerpt(html: string, words = 32): string {
  const text = stripTags(html);
  const cut = text.split(/\s+/).slice(0, words).join(" ");
  return cut.length < text.length ? `${cut}...` : text;
}
