/* Related-market linking, shared by all six discipline hubs.
 *
 * The problem this solves, measured rather than assumed:
 *
 * Every city page used to end with a link to all 49 sibling cities in its
 * own hub. Comparing /mep-engineering-recruiter/boston-ma against
 * /mep-engineering-recruiter/buffalo-ny with a 6-word shingle test, 800 of
 * 1,087 words were identical, and that link list was one of the largest
 * single blocks in it — 84 words, character for character the same on all
 * fifty pages. Same-hub/different-city overlap sat at 71-74%, while
 * same-city/different-hub sat at 32-37%, barely above the ~30% floor that
 * the shared header and footer alone produce. So the duplication ran
 * entirely along the city axis, and this block was a measurable part of it.
 *
 * It was also poor linking on its own terms. Forty-nine links pointing
 * everywhere spread the page's internal signal evenly and say nothing about
 * which page matters; and there was no link at all from Boston MEP to Boston
 * Civil, even though those are the same market and the same buyer.
 *
 * So: a regional slice of the same discipline, plus the same city in the
 * other disciplines. Both vary per page, which is the point — a block that
 * differs city to city stops being boilerplate.
 *
 * Every hub carries an identical slug list (verified: the fifty slugs hash
 * the same across all five data files), so a cross-hub link is always valid.
 */

import { CITIES } from "./cities";
import { MEP_CITIES } from "./mep";
import { WATER_CITIES } from "./waterWastewater";
import { CEI_CITIES } from "./ceiInspection";
import { MUNICIPAL_CITIES } from "./municipalEngineering";

/** The six discipline hubs, by URL segment. */
export const HUBS = [
  { segment: "civil-engineering-recruiter", label: "Civil engineering", short: "Civil" },
  { segment: "mep-engineering-recruiter", label: "MEP engineering", short: "MEP" },
  { segment: "water-wastewater-recruiter", label: "Water & wastewater", short: "Water" },
  { segment: "cei-inspection-recruiter", label: "CEI & inspection", short: "CEI" },
  { segment: "municipal-engineering-recruiter", label: "Municipal engineering", short: "Municipal" },
] as const;

export type HubSegment = (typeof HUBS)[number]["segment"];

/* US Census divisions. Standard, factual, and the right granularity here:
   the `region` field already on each city is editorial ("the Lowcountry",
   "the Gateway region") and splits fifty cities across thirty-six values,
   most of them singletons — useless for grouping. These nine put 3-10
   cities in each bucket. */
const DIVISIONS: { name: string; states: string[] }[] = [
  { name: "New England", states: ["CT", "MA", "ME", "NH", "RI", "VT"] },
  { name: "the Mid-Atlantic", states: ["NJ", "NY", "PA"] },
  { name: "the Great Lakes", states: ["IL", "IN", "MI", "OH", "WI"] },
  { name: "the Upper Midwest", states: ["IA", "KS", "MN", "MO", "ND", "NE", "SD"] },
  { name: "the South Atlantic", states: ["DC", "DE", "FL", "GA", "MD", "NC", "SC", "VA", "WV"] },
  { name: "the Mid-South", states: ["AL", "KY", "MS", "TN"] },
  { name: "the South Central US", states: ["AR", "LA", "OK", "TX"] },
  { name: "the Mountain West", states: ["AZ", "CO", "ID", "MT", "NM", "NV", "UT", "WY"] },
  { name: "the Pacific West", states: ["AK", "CA", "HI", "OR", "WA"] },
];

const DIVISION_BY_STATE = new Map<string, string>();
for (const d of DIVISIONS) for (const s of d.states) DIVISION_BY_STATE.set(s, d.name);

/** The Census division a state abbreviation belongs to. */
export function divisionOf(abbr: string): string {
  return DIVISION_BY_STATE.get(abbr.toUpperCase()) ?? "the United States";
}

export type MarketLink = { slug: string; city: string; abbr: string };

/**
 * Cities in the same Census division, current one excluded.
 *
 * Falls back to the nearest thing available rather than rendering an empty
 * block: a division holding only this city yields the whole list minus
 * itself, capped, so the page still links somewhere useful.
 */
export function nearbyMarkets<T extends MarketLink>(
  all: T[],
  current: T,
  limit = 12,
): { division: string; markets: T[] } {
  const division = divisionOf(current.abbr);
  const inDivision = all.filter(
    (x) => x.slug !== current.slug && divisionOf(x.abbr) === division,
  );
  const markets = inDivision.length > 0 ? inDivision : all.filter((x) => x.slug !== current.slug);
  return { division, markets: markets.slice(0, limit) };
}

/** The same city on the other discipline hubs. */
/* The same city on the other hubs.
 *
 * Presence-checked rather than assumed. The five hubs carried an identical
 * fifty-slug list, so linking blind was safe right up until the first market
 * that exists on one hub and not the others (Riverside, added to civil for
 * Inland Empire demand that has no MEP or CEI equivalent). Linking blind
 * there would have produced four 404s on every such page, which is the one
 * kind of internal link worse than none. */
export function siblingDisciplines(currentHub: HubSegment, slug: string) {
  return HUBS.filter(
    (h) => h.segment !== currentHub && HUB_DATA[h.segment].some((c) => c.slug === slug),
  ).map((h) => ({
    ...h,
    href: `/${h.segment}/${slug}`,
  }));
}


/* Every hub already carries five verified, city-specific program entries
   per city — 25 per metro across the five files — and each page was showing
   only its own five. The other twenty were sitting unused in the repo while
   the pages padded themselves with hub boilerplate instead.

   This surfaces them: on the MEP page for Boston, what the civil, water, CEI
   and municipal practices are seeing in Boston. It is real content, already
   written and checked, genuinely specific to the city, and different on
   every hub — the opposite of the blocks that were removed. It also gives an
   engineer looking at one discipline a picture of the wider market, which is
   a fair reason for it to be on the page at all. */
const HUB_DATA: Record<HubSegment, { slug: string; localPrograms: string[] }[]> = {
  "civil-engineering-recruiter": CITIES,
  "mep-engineering-recruiter": MEP_CITIES,
  "water-wastewater-recruiter": WATER_CITIES,
  "cei-inspection-recruiter": CEI_CITIES,
  "municipal-engineering-recruiter": MUNICIPAL_CITIES,
};

export type OtherHubPrograms = {
  segment: HubSegment;
  label: string;
  short: string;
  href: string;
  programs: string[];
};

/** What the other disciplines are working on in this city. */
export function otherHubPrograms(
  currentHub: HubSegment,
  slug: string,
  perHub = 3,
): OtherHubPrograms[] {
  return HUBS.filter((h) => h.segment !== currentHub)
    .map((h) => {
      const city = HUB_DATA[h.segment].find((x) => x.slug === slug);
      return {
        segment: h.segment,
        label: h.label,
        short: h.short,
        href: `/${h.segment}/${slug}`,
        programs: city ? city.localPrograms.slice(0, perHub) : [],
      };
    })
    .filter((h) => h.programs.length > 0);
}
