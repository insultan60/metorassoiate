import { CITIES } from "./cities";

/* State-level market pages.
 *
 * WHY THESE EXIST
 *
 * The old WordPress site had state pages. The rebuild has city pages and
 * discipline hubs but nothing between them, and Google is still crawling the
 * old state URLs years later, which is as clear a statement of demand as the
 * data gets. Today those URLs redirect to the largest city in the state, so a
 * search for a Connecticut recruiter lands on a page about Hartford and says
 * nothing about the rest of the state.
 *
 * They also close a gap on the jobs side. Roles come in from towns no site
 * would ever build a page for - Hamden, Escondido, Hoffman Estates - and had
 * nowhere to be listed but the jobs index. A state page covers all of them.
 *
 * WHAT GOES IN ONE
 *
 * Only what is true of the state and not of its largest city: who lets the
 * work statewide, what the engineering consists of across the whole state,
 * and which of our city desks sit inside it. No dates, no dollar figures and
 * no claims about who is hiring this quarter, for the same reason the city
 * pages avoid them: a page that needs maintaining to stay honest will not get
 * it.
 *
 * Written one state at a time on purpose. Five templated pages with the state
 * name swapped in is the thin-content pattern these are meant to replace.
 */

export interface StateMarket {
  slug: string;
  state: string;
  abbr: string;
  /** Reads after "across" in the hero. */
  region: string;
  /** The hero sentence. One paragraph, specific to the state. */
  marketNote: string;
  /** Two paragraphs on what the engineering here consists of. */
  marketDetail: string[];
  /** Public owners that actually let the work, statewide. */
  agencies: string[];
  /** What firms are short of here, and the local reason why. */
  hiringFocus: { role: string; why: string }[];
  /** Licensure as it bites in this state. */
  licensure: string;
  faqs: { q: string; a: string }[];
}

export const STATES: StateMarket[] = [
  {
    slug: "connecticut",
    state: "Connecticut",
    abbr: "CT",
    region: "Connecticut and the New York metropolitan fringe",
    marketNote:
      "Connecticut carries more rail, bridge and coastal infrastructure than a state its size would suggest, and the firms that work on it compete for the same licensed engineers as Boston and New York. We recruit across the whole state, not only the Hartford corridor.",
    marketDetail: [
      "The engineering here is weighted toward rebuilding rather than greenfield work. Connecticut's highway and rail network was largely built out decades ago, so the volume sits in bridge rehabilitation and replacement, viaduct and interchange reconstruction, movable bridge work along the coast, and the drainage and resilience work that comes with a shoreline on Long Island Sound. Firms staffing this need engineers who are comfortable designing around live traffic and live rail, which is a different skill from designing on an open site.",
      "The state is also unusually compact, which changes who a firm can hire. An engineer living in New Haven is within commuting distance of work in Hartford, Bridgeport, Stamford and, for many, New York City. That widens the pool for a Connecticut firm and it widens the competition: the same candidate is being approached by firms in three markets, and a Connecticut offer is being measured against a New York one.",
    ],
    agencies: [
      "Connecticut Department of Transportation (CTDOT)",
      "CTrail and the Metro-North New Haven Line",
      "Connecticut Port Authority and Connecticut Airport Authority",
      "Municipal public works in Hartford, New Haven, Bridgeport and Stamford",
      "Regional water and sewer authorities rather than city utilities in much of the state",
    ],
    hiringFocus: [
      {
        role: "Bridge and structural engineers",
        why: "The inventory is old and coastal, so rehabilitation, load rating and movable-bridge experience are worth more here than new-build design.",
      },
      {
        role: "Rail and transit engineers",
        why: "Few states of this population have three commuter rail services running through them, and the pool of engineers who have worked around live track is correspondingly small.",
      },
      {
        role: "Drainage and resilience engineers",
        why: "Shoreline communities are designing for flooding and storm surge, which pulls stormwater and coastal engineering into projects that used to be purely roadway.",
      },
      {
        role: "Construction inspection staff",
        why: "State and municipal programs run inspection through consultants, and the work is continuous rather than project-shaped, so firms staff it year round.",
      },
    ],
    licensure:
      "Most client-facing work in Connecticut asks for a PE licensed in the state, or an engineer eligible to be licensed by comity on a timetable the client can live with. For candidates moving in from New York or Massachusetts that is usually a matter of paperwork rather than re-examination, and it is worth establishing early: it is the single most common reason an otherwise strong candidate cannot be put forward.",
    faqs: [
      {
        q: "Do you recruit across all of Connecticut or only Hartford?",
        a: "All of it. We run a Hartford desk because that is where the largest concentration of state and consultant work sits, but the state is small enough that candidates and roles move freely between Hartford, New Haven, Bridgeport, Stamford and the smaller towns, and we place across all of them.",
      },
      {
        q: "What kind of engineering roles do you fill in Connecticut?",
        a: "Civil, bridge and structural, transportation and rail, water and wastewater, municipal engineering, and construction inspection. The weighting is toward bridge, rail and drainage work, which is what the state's existing infrastructure demands.",
      },
      {
        q: "Does a candidate need a Connecticut PE licence?",
        a: "For most client-facing design work, yes, or a clear route to one by comity. We establish licence status and reciprocity early rather than at offer stage, because it is the most common thing that stops a strong candidate progressing.",
      },
      {
        q: "Is there a fee for job seekers in Connecticut?",
        a: "No. Metro Associates is always 100% free for job seekers, in Connecticut and everywhere else. Our fees are paid by the hiring firm.",
      },
    ],
  },
];

export function getState(slug: string): StateMarket | undefined {
  return STATES.find((s) => s.slug === slug);
}

/** Our city desks that sit inside this state, for the internal links. */
export function citiesInState(abbr: string) {
  return CITIES.filter((c) => c.abbr === abbr);
}
