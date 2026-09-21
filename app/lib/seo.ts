import { SITE_URL, PHONE, EMAIL, OFFICE_METROS } from "./site";

// Central structured-data (JSON-LD) helpers. Only verifiable facts are emitted
// — no fabricated addresses, ratings, or reviews (which risk Google penalties).

const LINKEDIN = "https://www.linkedin.com/company/94152534/";
const FACEBOOK = "https://www.facebook.com/MetropoAssociatesLLC/";

/* Third-party profiles, listed so Google can join them to this entity — the
 * mechanism by which an off-site reputation (the BBB rating below) counts
 * towards the business rather than floating unattached.
 *
 * Both were confirmed to be this company before being added, per the rule at
 * the top of this file: the BBB profile names Patrick Novick as Managing
 * Member, and the Glassdoor entry matches on Orlando FL, founded 2014, and
 * staffing. Profiles that merely share the name are deliberately absent —
 * "Metro Associates" is not a distinctive string, and pointing sameAs at
 * another company's page is worse than listing nothing.
 *
 * Known to exist but NOT listed, because they couldn't be confirmed as this
 * company: a second Glassdoor employer id (E1015125) and two Indeed company
 * pages. Those are duplicate listings that need claiming and merging from
 * inside those accounts anyway. */
const BBB = "https://www.bbb.org/us/fl/altamonte-springs/profile/employment-agencies/metro-associates-engineering-of-fl-llc-0733-90259297";
const GLASSDOOR = "https://www.glassdoor.com/Overview/Working-at-Metro-Associates-MA-EI_IE8899812.11,30.htm";

// Organization identity reused as the `provider` on every Service schema.
export const ORG = {
  "@type": "EmploymentAgency",
  "@id": `${SITE_URL}/#organization`,
  name: "Metro Associates",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/og.jpg`,
  telephone: PHONE,
  email: EMAIL,
  /* Deliberately no `address`.
   *
   * This is a national service-area business — nine desks placing across the
   * US — not a storefront, and Schema.org/Google both expect a service-area
   * business to describe where it *serves* rather than assert a location it
   * doesn't trade from. The two addresses on file would each make things
   * worse: one is residential (a privacy exposure that can't be undone once
   * indexed), the other a mail suite (Google suspends Business Profiles that
   * use virtual offices). Omitting it is the accurate model, not a gap.
   *
   * The country stays first as the honest headline; the metros the site
   * itself publishes on /contact follow, so the entity's actual footprint is
   * machine-readable and the city landing pages have something to anchor to. */
  areaServed: [
    { "@type": "Country", name: "United States" },
    ...OFFICE_METROS.map((o) => ({
      "@type": "City" as const,
      name: `${o.city}, ${o.state}`,
    })),
  ],
  sameAs: [LINKEDIN, FACEBOOK, BBB, GLASSDOOR],
  /* No `aggregateRating` here, deliberately. Google discounts and can
     penalise self-serving rating markup — a business rating itself. The BBB
     grade is surfaced in the footer as a linked claim a visitor can check
     instead, which is what it's actually worth. */
  /* No guarantee claim here. It used to end "backed by a placement
     guarantee", which put the claim into the Organization schema on every
     page carrying it, including the homepage, where the client asked for it
     to be removed entirely. Structured data counts: it is what an assistant
     reads to describe the firm.

     That removal stopped at the schema and the homepage cards, and seventeen
     copies of the claim survived in this file's city FAQ answers and in the
     CTA on five city templates and /why-us. They are gone now, for the same
     reason and one more: Terms section 6 says the opposite. "Any staffing
     guarantees, replacement terms, or fees are governed solely by a separate
     written agreement between Metro Associates and the applicable client."
     A page asserting a standing guarantee while the Terms deny one is a
     claim the firm cannot stand behind if anyone holds it to it.

     What replaced them describes process rather than outcome, which is the
     same test the /why-us block was rewritten to (see components/WhyUs.tsx):
     screening against a state's licensure requirements and verifying
     credentials before a resume is sent are things the site already says it
     does elsewhere and can show. Nothing now promises a result. */
  description:
    "National staffing and executive search firm for civil, transportation (DOT), MEP, water, structural and municipal engineering, placing licensed PEs, inspectors and construction leaders across fifty US metros.",
};

export function organizationSchema() {
  return { "@context": "https://schema.org", ...ORG };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Metro Associates",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// Per-location professional service (drives local/rich results for "<discipline>
// recruiter <city>" queries).
export function serviceSchema(opts: {
  serviceName: string;
  description: string;
  path: string;
  areaCity: string;
  areaState: string;
  /* Surrounding communities the metro's desk covers, named in areaServed so
     the schema says the same thing the visible copy does. Only the towns
     already written into the page, never an invented catchment. */
  alsoServes?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}${opts.path}#service`,
    name: opts.serviceName,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: opts.areaCity },
      ...(opts.alsoServes ?? []).map((name) => ({ "@type": "City", name })),
      { "@type": "State", name: opts.areaState },
    ],
    serviceType: opts.serviceName,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** Deterministically picks one of several variants for a given seed (e.g. a
 *  city slug). Same seed always yields the same variant — stable across
 *  builds/requests — but different cities land on different phrasing instead
 *  of every page in a vertical sharing byte-identical boilerplate paragraphs,
 *  which is what triggers Google's duplicate/thin-content filters at scale. */
export function pickVariant<T>(seed: string, variants: readonly T[]): T {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return variants[Math.abs(hash) % variants.length];
}

export interface FaqItem { q: string; a: string }

/* A stable anchor for one question.
 *
 * Derived from the question text rather than stored, so adding a question
 * cannot leave a hand-written id behind, and so the slug is legible in a URL
 * an assistant or a colleague pastes: /faq/civil-engineering#how-does-pe-
 * licensure-transfer-between-states. Trailing words are dropped past a limit
 * because the whole question is often a sentence, but enough of the opening
 * survives to identify the entry.
 */
export function faqSlug(q: string, max = 9): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .join("-");
}

/* Slugs for a whole group, guaranteed unique within it.
 *
 * Two questions in one group can open with the same nine words; a numeric
 * suffix keeps the second one addressable rather than silently stealing the
 * first one's anchor.
 */
export function faqSlugs(faqs: FaqItem[]): string[] {
  const seen = new Map<string, number>();
  return faqs.map((f) => {
    const base = faqSlug(f.q);
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return n === 0 ? base : `${base}-${n + 1}`;
  });
}

/* pageUrl gives every question its own @id and url.
 *
 * Google stopped showing FAQ rich results in May 2026, so this markup exists
 * for the retrieval crawlers behind AI answers. Those cite a URL. Without a
 * per-question anchor the best any of them can offer is the top of a page
 * holding eight answers, which is a worse citation and a worse landing for
 * the reader who follows it.
 */
export function faqSchema(faqs: FaqItem[], pageUrl?: string) {
  const slugs = faqSlugs(faqs);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { "@id": pageUrl, url: pageUrl } : {}),
    mainEntity: faqs.map((f, i) => ({
      "@type": "Question",
      ...(pageUrl
        ? { "@id": `${pageUrl}#${slugs[i]}`, url: `${pageUrl}#${slugs[i]}` }
        : {}),
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// ── City-specific FAQ copy (also rendered visibly on the page) ───────────────

export function civilFaqs(c: {
  city: string; state: string; abbr: string; region: string; dot: string;
  /* Optional deep-market fields (see lib/cities). Where a metro has them,
     they produce FAQ answers that are genuinely about that place rather than
     the same four answers with the city name swapped — which is both better
     for the reader and the difference between a page Google indexes and one
     it files as a duplicate. */
  agencies?: string[];
  licensure?: string;
  hiringFocus?: { role: string; why: string }[];
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:civil:1`, [
    `Yes. Metro Associates is a specialized civil engineering recruiter serving ${c.city} and ${c.region}. We place licensed Professional Engineers (PEs), project managers, and technical specialists on transportation, bridge, water, and construction programs across the metro.`,
    `Yes, ${c.city} is one of the metros we actively recruit for. We source licensed PEs, project managers, and technical specialists across ${c.region} for transportation, bridge, water, and construction work.`,
    `Yes. We run an active civil engineering search practice in ${c.city} and throughout ${c.region}, placing PEs, project managers, and technical specialists into transportation, bridge, water, and construction programs.`,
    `Yes. Metro Associates recruits civil engineering talent for ${c.city} and the wider ${c.region} market, licensed PEs, project managers, and technical specialists working on transportation, bridge, water, and construction programs.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:civil:2`, [
    `We fill roles including Civil Project Manager (PE), Senior Transportation Engineer, Structural/Bridge Engineer, Water Resources Engineer, Traffic/ITS Engineer, Geotechnical Engineer, and Construction Manager, from a single hire to a full project team.`,
    `Common searches in ${c.city} include Civil Project Manager (PE), Senior Transportation Engineer, Structural/Bridge Engineer, Water Resources Engineer, Traffic/ITS Engineer, and Geotechnical Engineer, whether it's one hire or a full project team.`,
    `Our ${c.city} placements span Civil Project Manager (PE), Senior Transportation Engineer, Structural/Bridge Engineer, Water Resources Engineer, Traffic/ITS Engineer, Geotechnical Engineer, and Construction Manager roles.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:civil:3`, [
    `Because we maintain a national pipeline of pre-vetted engineers, we typically deliver a shortlist of qualified ${c.abbr} candidates within days rather than weeks.`,
    `Our national pipeline of pre-vetted engineers means a shortlist of qualified ${c.abbr} candidates is usually days away, not weeks.`,
    `Most ${c.city} searches move fast: our pre-vetted national pipeline typically produces a qualified shortlist within days of the brief.`,
  ]);
  const dotAnswer = pickVariant(`${c.city}:civil:4`, [
    `Yes. We understand NCEES comity and multi-state PE licensure, and we recruit specifically for ${c.dot}, federal agencies, and publicly funded capital programs throughout ${c.state}.`,
    `Yes, NCEES comity and multi-state PE licensure are part of how we screen. We recruit specifically for ${c.dot}, federal agencies, and publicly funded capital programs across ${c.state}.`,
    `Yes. Candidates are screened against ${c.dot}'s and ${c.state}'s licensure requirements, with fluency in NCEES comity for engineers holding PE licenses in multiple states.`,
  ]);
  /* Written from the metro's own research, so these four vary by substance
     rather than by phrasing. Appended rather than replacing the general
     answers above: the generic questions are still the ones most people
     arrive asking. */
  const local: FaqItem[] = [];

  if (c.hiringFocus && c.hiringFocus.length > 0) {
    local.push({
      q: `Which civil engineering roles are hardest to fill in ${c.city}?`,
      a:
        `${c.hiringFocus.map((h) => h.role).join(", ")}. ` +
        `${c.hiringFocus[0].why} These are the searches where a national pipeline ` +
        `matters most, because the local market alone rarely clears them.`,
    });
  }

  if (c.agencies && c.agencies.length > 0) {
    local.push({
      q: `Which agencies run civil engineering work in ${c.city}?`,
      a:
        `Most publicly funded work in the metro is let by ${c.agencies.slice(0, -1).join(", ")} and ` +
        `${c.agencies[c.agencies.length - 1]}. We screen for experience on those programs specifically, ` +
        `because prior work under an owner is what shortens a candidate's ramp-up on the next project ` +
        `for them.`,
    });
  }

  if (c.licensure) {
    local.push({
      q: `What licensure does a civil engineer need to work in ${c.state}?`,
      a: c.licensure,
    });
  }

  return [
    { q: `Do you place civil engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What civil engineering roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    ...local,
    { q: `How quickly can you fill a civil engineering position in ${c.city}?`, a: speedAnswer },
    { q: `Do you recruit licensed PEs for ${c.dot} and public infrastructure projects?`, a: dotAnswer },
  ];
}

export function mepFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:mep:1`, [
    `Yes. Metro Associates is a specialized MEP engineering recruiter serving ${c.city} and ${c.region}, placing licensed mechanical, electrical, and plumbing PEs, project managers, and commissioning specialists on complex building projects.`,
    `Yes, we run an active MEP search practice in ${c.city} and across ${c.region}, sourcing licensed mechanical, electrical, and plumbing PEs, project managers, and commissioning specialists.`,
    `Yes. We recruit MEP engineering talent for ${c.city} and the broader ${c.region} market, from licensed mechanical/electrical/plumbing PEs to commissioning specialists on complex building projects.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:mep:2`, [
    `We fill MEP Project Manager (PE), Senior Mechanical/HVAC Engineer, Electrical Engineer, Plumbing & Fire Protection Engineer, Building Automation/Controls Engineer, Energy & Sustainability Engineer, and Commissioning Agent roles.`,
    `Common ${c.city} searches include MEP Project Manager (PE), Senior Mechanical/HVAC Engineer, Electrical Engineer, Plumbing & Fire Protection Engineer, Building Automation/Controls Engineer, and Commissioning Agent.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:mep:3`, [
    `With a national pipeline of pre-vetted MEP professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days of the brief.`,
    `Our pre-vetted national MEP pipeline usually means a qualified ${c.abbr} shortlist within days, not weeks.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:mep:4`, [
    `Yes. We recruit MEP talent for high-rise, healthcare, life-science, data center, and mission-critical facilities, engineers fluent in ASHRAE, NEC, and NFPA standards and reviewed under ${c.authority}.`,
    `Yes. Candidates for high-rise, healthcare, life-science, data center, and mission-critical work are screened for ASHRAE, NEC, and NFPA fluency, matched against ${c.authority}'s code requirements.`,
  ]);
  return [
    { q: `Do you place MEP engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What MEP roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill an MEP position in ${c.city}?`, a: speedAnswer },
    { q: `Do you recruit for data center, healthcare, and mission-critical MEP work?`, a: authorityAnswer },
  ];
}

export function waterFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:water:1`, [
    `Yes. Metro Associates is a specialized water and wastewater engineering recruiter serving ${c.city} and ${c.region}, placing licensed PEs, process engineers, and construction inspection specialists on treatment, distribution, and collection-system programs.`,
    `Yes, we actively recruit water and wastewater engineers for ${c.city} and ${c.region}, from licensed PEs to process engineers and construction inspection specialists.`,
    `Yes. Our water and wastewater search practice covers ${c.city} and ${c.region}, placing PEs, process engineers, and inspection specialists on treatment, distribution, and collection-system work.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:water:2`, [
    `We fill Water/Wastewater Project Engineer (PE), Senior Process Engineer, Water Resources Engineer, Utility/Pipeline Design Engineer, SCADA/Controls Engineer, and Director of Water/Wastewater Engineering roles.`,
    `Typical ${c.city} searches include Water/Wastewater Project Engineer (PE), Senior Process Engineer, Water Resources Engineer, Utility/Pipeline Design Engineer, and SCADA/Controls Engineer.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:water:3`, [
    `With a national pipeline of pre-vetted water and wastewater professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days of the brief.`,
    `Our pre-vetted national pipeline usually puts a qualified ${c.abbr} shortlist in front of you within days, not weeks.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:water:4`, [
    `Yes. We recruit engineers fluent in NPDES permitting, SCADA and instrumentation, and utility infrastructure rehabilitation, reviewed under ${c.authority} and ${c.state}'s regulatory requirements.`,
    `Yes. Candidates are screened for NPDES permitting, SCADA/instrumentation, and utility rehabilitation experience, matched against ${c.authority} and ${c.state}'s regulatory requirements.`,
  ]);
  return [
    { q: `Do you place water and wastewater engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What water/wastewater roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill a water/wastewater position in ${c.city}?`, a: speedAnswer },
    { q: `Do you recruit for NPDES permitting and utility compliance work?`, a: authorityAnswer },
  ];
}

export function ceiFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:cei:1`, [
    `Yes. Metro Associates is a specialized CEI (Construction Engineering & Inspection) recruiter serving ${c.city} and ${c.region}, placing certified inspectors, resident engineers, and QA/QC specialists on materials testing, bridge, and roadway inspection programs.`,
    `Yes, our CEI search practice covers ${c.city} and ${c.region}, placing certified inspectors, resident engineers, and QA/QC specialists on materials testing, bridge, and roadway inspection work.`,
    `Yes. We recruit CEI talent for ${c.city} and the wider ${c.region} market: certified inspectors, resident engineers, and QA/QC specialists on materials testing, bridge, and roadway programs.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:cei:2`, [
    `We fill CEI Inspector, Senior Construction Inspector, Resident Engineer, Materials Testing Technician/QA Manager, Bridge Inspector, and CEI Project Manager roles.`,
    `Common ${c.city} searches include CEI Inspector, Senior Construction Inspector, Resident Engineer, Materials Testing Technician/QA Manager, and Bridge Inspector.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:cei:3`, [
    `With a national pipeline of pre-vetted, certification-verified inspection professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days of the brief.`,
    `Our pre-vetted, certification-verified national pipeline usually means a qualified ${c.abbr} shortlist within days, not weeks.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:cei:4`, [
    `Yes. Every candidate's NICET, ACI materials-testing, and NBIS bridge-inspection credentials are confirmed before they reach you, matched against ${c.authority}'s construction and inspection standards.`,
    `Yes. NICET, ACI materials-testing, and NBIS bridge-inspection credentials are verified before any candidate reaches you, matched to ${c.authority}'s inspection standards.`,
  ]);
  return [
    { q: `Do you place CEI and construction inspectors in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What CEI roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill a CEI position in ${c.city}?`, a: speedAnswer },
    { q: `Do you verify NICET, ACI, and bridge-inspection certifications?`, a: authorityAnswer },
  ];
}

export function municipalFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:municipal:1`, [
    `Yes. Metro Associates is a specialized municipal engineering recruiter serving ${c.city} and ${c.region}, placing licensed PEs, city engineers, and public works leaders for cities, towns, and the consultants who serve them.`,
    `Yes, we run an active municipal engineering search practice in ${c.city} and ${c.region}, placing licensed PEs, city engineers, and public works leaders.`,
    `Yes. We recruit municipal engineering talent for ${c.city} and the wider ${c.region} market, for cities, towns, and the consulting firms that serve them.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:municipal:2`, [
    `We fill Municipal Engineer (PE), City/Town Engineer, Public Works Director, Site/Civil Development Engineer, Capital Projects Engineer, and Director of Public Works/Engineering roles.`,
    `Common ${c.city} searches include Municipal Engineer (PE), City/Town Engineer, Public Works Director, Site/Civil Development Engineer, and Capital Projects Engineer.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:municipal:3`, [
    `With a national pipeline of pre-vetted municipal engineering professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days of the brief.`,
    `Our pre-vetted national pipeline usually means a qualified ${c.abbr} shortlist within days, not weeks.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:municipal:4`, [
    `Yes. We're fluent in public bidding and procurement processes, capital improvement plan (CIP) cycles, and grant-compliant hiring timelines (SRF, CDBG, ARPA) as administered by ${c.authority}.`,
    `Yes. Public bidding and procurement, capital improvement plan (CIP) cycles, and grant-compliant timelines (SRF, CDBG, ARPA) under ${c.authority} are part of how we plan every search.`,
  ]);
  return [
    { q: `Do you place municipal engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What municipal engineering roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill a municipal engineering position in ${c.city}?`, a: speedAnswer },
    { q: `Do you understand municipal procurement and grant-funded hiring timelines?`, a: authorityAnswer },
  ];
}


/* ------------------------------------------------------------------
   Search-result metadata that actually fits the result.

   Audited across all 280 live URLs: no exact duplicate title and no
   exact duplicate description anywhere — but 218 of 280 titles ran past
   60 characters and 277 of 280 descriptions past 160, which is where
   Google truncates. Everything after that point was written for nobody.
   And once the city name was removed, all 49 city pages in a hub shared
   one title skeleton, so what varied was a substitution rather than a
   sentence.

   These two composers fix both. `fitTitle` drops the brand rather than
   overflow — Google often appends the site name anyway. `fitDescription`
   takes clauses in priority order and keeps the ones that fit, so a city
   whose authority is "Metropolitan Water Reclamation District of Greater
   Chicago (MWRD)" loses the final clause instead of the whole line being
   cut mid-word.
   ------------------------------------------------------------------ */

/** Title capped at 60 characters, brand appended only if it fits. */
export function fitTitle(core: string, brand = "Metro Associates"): string {
  const withBrand = `${core} | ${brand}`;
  if (withBrand.length <= 60) return withBrand;
  if (core.length <= 60) return core;
  return core.slice(0, 57).trimEnd() + "…";
}

/** Clauses in priority order; keeps those that fit inside `max`. */
export function fitDescription(clauses: string[], max = 158): string {
  let out = "";
  for (const clause of clauses) {
    const next = out ? `${out} ${clause}` : clause;
    if (next.length > max) break;
    out = next;
  }
  /* Never return nothing: a first clause longer than the cap is better
     truncated than dropped. */
  if (!out && clauses.length) return clauses[0].slice(0, max - 1).trimEnd() + "…";
  return out;
}

/** First candidate that fits, in priority order; last one truncated if none do. */
export function pickTitle(candidates: string[], max = 60): string {
  for (const c of candidates) if (c.length <= max) return c;
  const last = candidates[candidates.length - 1] ?? "";
  return last.slice(0, max - 1).trimEnd() + "…";
}
