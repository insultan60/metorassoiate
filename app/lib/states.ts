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
  {
    slug: "indiana",
    state: "Indiana",
    abbr: "IN",
    region: "Indiana and the Midwest freight corridors",
    marketNote:
      "Indiana is a crossroads state, and its engineering work follows the freight that crosses it. We recruit for the interstate and logistics work in the north and centre of the state, the suburban growth ring around Indianapolis, and the county and municipal programs in between.",
    marketDetail: [
      "More interstate mileage converges on Indiana than its size would explain, and the consequences run through most of the civil work here. Distribution and logistics development drives site and land development design, heavy truck volumes drive pavement and interchange work, and the rail and intermodal network that moves the same freight adds grade separation and crossing design. Engineers who have worked on freight corridors and large flat-site development are in demand in a way they are not in states whose growth is residential.",
      "The second engine is the ring north of Indianapolis. Carmel, Fishers, Westfield and the surrounding townships have added population and commercial development quickly, and they have done it with a distinctive municipal engineering culture: Carmel's roundabout network is the best-known example of a town setting its own design standards and expecting consultants to work to them. That makes local knowledge worth more here than a portable skill set, and it is a frequent reason a strong out-of-state candidate still needs support to land.",
    ],
    agencies: [
      "Indiana Department of Transportation (INDOT)",
      "Indiana Finance Authority and the state revolving loan programs",
      "Indianapolis Department of Public Works and Citizens Energy Group",
      "County highway departments and county surveyors, which let a large share of bridge work",
      "Municipal engineering departments in the Indianapolis growth ring",
      "Indiana Department of Environmental Management (IDEM) on the permitting side",
    ],
    hiringFocus: [
      {
        role: "Land development and site civil engineers",
        why: "Distribution, logistics and commercial development is the volume work here, and it needs engineers comfortable with large flat sites, grading and stormwater rather than roadway geometry.",
      },
      {
        role: "Transportation and traffic engineers",
        why: "Freight volumes on the interstate network push interchange, pavement and grade-separation work, and traffic engineers with INDOT experience are a small pool.",
      },
      {
        role: "Water and wastewater engineers",
        why: "Indianapolis has run long-horizon combined sewer and storage work, and the smaller systems across the state are upgrading through the state loan programs at the same time.",
      },
      {
        role: "Bridge inspectors and load rating engineers",
        why: "Indiana's bridge inventory is split across ninety-two counties as well as the state, so inspection is continuous, locally let, and staffed through consultants.",
      },
    ],
    licensure:
      "Indiana licensure runs through the state board under the Professional Licensing Agency, and comity for an engineer already licensed elsewhere is usually straightforward. The sharper constraint here is prequalification rather than licence: INDOT and the larger counties maintain consultant prequalification by work type, and a firm hiring to win that work often needs a specific category covered, which narrows who counts as a qualified candidate well beyond holding a PE.",
    faqs: [
      {
        q: "Do you recruit across all of Indiana or only Indianapolis?",
        a: "All of it. Our desk sits in Indianapolis because that is where the greatest concentration of consultant and state work is, but we place across the northern interstate corridors, the growth ring townships and the county programs statewide.",
      },
      {
        q: "What kind of engineering roles do you fill in Indiana?",
        a: "Civil and land development, transportation and traffic, water and wastewater, municipal engineering, bridge inspection and load rating, and construction inspection. Land development and transportation carry the most volume.",
      },
      {
        q: "Does a candidate need an Indiana PE licence?",
        a: "For client-facing design work, yes, or a clear route by comity. For firms hiring to pursue INDOT or county work, consultant prequalification categories often matter as much as the licence itself, and we screen for both.",
      },
      {
        q: "Is there a fee for job seekers in Indiana?",
        a: "No. Metro Associates is always 100% free for job seekers. Our fees are paid by the hiring firm.",
      },
    ],
  },
  {
    slug: "new-jersey",
    state: "New Jersey",
    abbr: "NJ",
    region: "New Jersey and the New York and Philadelphia metros",
    marketNote:
      "New Jersey packs more infrastructure, more regulation and more competing employers into less space than almost anywhere else we recruit. We cover the whole state, including the firms whose work sits inside the New York and Philadelphia programs rather than the state's own.",
    marketDetail: [
      "Two features set the engineering here apart. The first is density: the network is old, heavily used and almost entirely rebuilt rather than extended, so the work is rehabilitation, replacement and capacity under live traffic and live rail. The second is the environmental regime. New Jersey runs site remediation through a licensed professional rather than purely through agency review, which makes contaminated-site work a distinct career track with its own credential, and brownfield redevelopment a routine part of site civil work rather than a specialism.",
      "The state also sits between two of the country's largest construction markets, and that shapes hiring more than any single program. A firm in Newark is competing for candidates with firms billing New York rates, and a firm in Camden with Philadelphia. Coastal exposure adds a third strand: shoreline communities have been designing for storm surge and flooding since Sandy, and stormwater, resilience and coastal structures work now runs through projects that would once have been purely roadway or municipal.",
    ],
    agencies: [
      "New Jersey Department of Transportation (NJDOT)",
      "New Jersey Turnpike Authority and the South Jersey Transportation Authority",
      "NJ TRANSIT, and the Port Authority of New York and New Jersey",
      "County engineers, who let a substantial share of road and bridge work",
      "Appointed municipal engineers, a model used widely across the state",
      "New Jersey Department of Environmental Protection (NJDEP) and the licensed site remediation regime",
    ],
    hiringFocus: [
      {
        role: "Rail and transit engineers",
        why: "NJ TRANSIT, the Port Authority and the freight network mean a large volume of work around live track, and the engineers who have done it are shared with New York.",
      },
      {
        role: "Environmental and remediation engineers",
        why: "The state's licensed remediation model makes this a credentialed track rather than a general skill, so the qualified pool is defined by the credential and is small.",
      },
      {
        role: "Stormwater and coastal resilience engineers",
        why: "Shoreline and inland flood design is now attached to projects of every type, and the rule changes have outpaced the number of engineers fluent in them.",
      },
      {
        role: "Municipal engineers",
        why: "The appointed municipal engineer model means consultants hold standing roles for towns, which rewards engineers who can carry an ordinance, a council meeting and a design at once.",
      },
    ],
    licensure:
      "A New Jersey PE is the baseline for client-facing design, and comity from New York or Pennsylvania is common enough to be routine. Remediation is the exception worth knowing: contaminated-site work is signed by a licensed site remediation professional, a separate credential with its own route, and a firm hiring for that work is hiring for the credential rather than for years of experience. We establish which of the two a role actually needs before putting anyone forward.",
    faqs: [
      {
        q: "Do you recruit across all of New Jersey?",
        a: "Yes, north and south, including firms whose work sits inside New York or Philadelphia programs. Our Newark desk is the largest but the state is small enough that candidates move freely across it.",
      },
      {
        q: "What kind of engineering roles do you fill in New Jersey?",
        a: "Civil and site development, rail and transit, bridge and structural, water and wastewater, stormwater and resilience, environmental and remediation, municipal engineering, and construction inspection.",
      },
      {
        q: "Does a candidate need a New Jersey PE licence?",
        a: "For client-facing design work, yes, or a clear route by comity. For remediation work the relevant credential is the licensed site remediation professional, which is separate from the PE, and we screen for whichever the role actually requires.",
      },
      {
        q: "Is there a fee for job seekers in New Jersey?",
        a: "No. Metro Associates is always 100% free for job seekers. Our fees are paid by the hiring firm.",
      },
    ],
  },
  {
    slug: "new-mexico",
    state: "New Mexico",
    abbr: "NM",
    region: "New Mexico and the desert Southwest",
    marketNote:
      "Water defines engineering in New Mexico, and the federal presence defines who is hiring for it. We recruit across the Albuquerque and Santa Fe corridor, the long rural highway network, and the laboratory and federal facility work that sits alongside both.",
    marketDetail: [
      "Almost every strand of civil work here runs back to water. Supply comes from a combination of the Rio Grande and groundwater that is managed rather than abundant, which makes reuse, aquifer recharge and conservation design mainstream rather than progressive. Drainage is the same problem inverted: monsoon rainfall arrives fast onto ground that does not absorb it, so arroyo and flood control structures do work that a storm sewer does elsewhere. An engineer who has designed for water scarcity and flash flooding in the same career is the profile firms here are short of.",
      "The second feature is federal. The national laboratories and the military and federal facilities around them are among the largest engineering employers in the state, and they hire on different terms from a consultancy: slower, credential-heavy, and often requiring a clearance that takes time a project schedule does not have. Firms competing with them for the same engineers lose candidates to stability and benefits, and win them on the variety of work, which is worth knowing before an offer is made.",
    ],
    agencies: [
      "New Mexico Department of Transportation (NMDOT)",
      "Albuquerque Bernalillo County Water Utility Authority",
      "Albuquerque Metropolitan Arroyo Flood Control Authority and the regional conservancy districts",
      "City of Albuquerque, City of Santa Fe and the county public works departments",
      "The national laboratories and federal facilities, and the Bureau of Reclamation on water",
      "Office of the State Engineer on water rights and appropriation",
    ],
    hiringFocus: [
      {
        role: "Water resources engineers",
        why: "Supply, reuse and recharge design is the state's defining engineering problem, and the engineers who understand both the hydrology and the water rights regime are few.",
      },
      {
        role: "Drainage and flood control engineers",
        why: "Arroyo and monsoon design is unlike storm sewer design elsewhere, so the skill is largely learned in-state and the pool is correspondingly local.",
      },
      {
        role: "Transportation engineers for rural corridors",
        why: "Long distances and low volumes change the design and the maintenance economics, and engineers whose experience is urban do not transfer directly.",
      },
      {
        role: "Engineers eligible for federal clearance",
        why: "Laboratory and federal facility work needs engineers who are clearable, and the timeline for obtaining one means an already-cleared candidate is worth a premium.",
      },
    ],
    licensure:
      "New Mexico licenses engineers and surveyors through a single state board, and comity from Arizona, Texas or Colorado is well-trodden. Water is where the paperwork gets particular: work touching supply or appropriation runs through the Office of the State Engineer, and familiarity with that process is a real qualification rather than a line on a resume. For laboratory and federal work, clearance eligibility is often the binding constraint rather than the licence, and it is worth settling before an interview rather than after.",
    faqs: [
      {
        q: "Do you recruit across all of New Mexico?",
        a: "Yes. Albuquerque and the Santa Fe corridor carry the most consultant work, and we also place into the rural highway programs and the laboratory and federal facility work across the state.",
      },
      {
        q: "What kind of engineering roles do you fill in New Mexico?",
        a: "Water resources, drainage and flood control, civil and site development, transportation, municipal engineering, and construction inspection, as well as engineers for laboratory and federal facility programs.",
      },
      {
        q: "Does a candidate need a New Mexico PE licence?",
        a: "For client-facing design work, yes, or a clear route by comity. For water work, familiarity with the Office of the State Engineer process matters alongside the licence, and for federal work clearance eligibility often matters more.",
      },
      {
        q: "Is there a fee for job seekers in New Mexico?",
        a: "No. Metro Associates is always 100% free for job seekers. Our fees are paid by the hiring firm.",
      },
    ],
  },
  {
    slug: "new-york",
    state: "New York",
    abbr: "NY",
    region: "New York State, from the five boroughs to the Southern Tier",
    marketNote:
      "New York is really two engineering markets that happen to share a state government, and a firm hiring in one is not competing for the same people as a firm hiring in the other. We recruit across both: the metropolitan programs downstate and the state, county and municipal work upstate.",
    marketDetail: [
      "Downstate, the work is dense, deep and heavily owner-driven. Transit and rail capital programs, water supply and sewer tunnels, bridges and tunnels under multiple authorities, and building and site work governed by a city code and filing regime of its own. The engineers who are fluent in that environment, in live-track access, in deep urban excavation, in filing and special inspection, are expensive and rarely need to move, and a firm that wants them is bidding against every other firm in the region.",
      "Upstate is a different proposition and is often mistaken for a smaller version of the same one. The inventory is a large rural and small-city highway, bridge and water network, let by NYSDOT regions, counties and municipalities, and served by consultancies that are small enough that one engineer's departure is a capability gap. Candidates there are more willing to move for the right role and less willing to move downstate than hiring managers assume, and salary expectations between the two halves of the state do not meet in the middle.",
    ],
    agencies: [
      "New York State Department of Transportation (NYSDOT) and its regional offices",
      "Metropolitan Transportation Authority, with New York City Transit, the Long Island Rail Road and Metro-North",
      "Port Authority of New York and New Jersey, and the New York State Thruway Authority",
      "New York City Department of Design and Construction, Department of Environmental Protection and Department of Transportation",
      "County highway departments and city engineering offices across upstate New York",
      "New York Power Authority and the state revolving loan programs on the water side",
    ],
    hiringFocus: [
      {
        role: "Rail and transit engineers",
        why: "The capital programs downstate run continuously, and the engineers with live-track and third-rail experience are a closed pool that every firm in the region is approaching.",
      },
      {
        role: "Construction inspection staff",
        why: "NYSDOT runs inspection through consultants across every region, so the demand is statewide, year-round and largely independent of the design cycle.",
      },
      {
        role: "Bridge and structural engineers",
        why: "The inventory is among the oldest and largest in the country, which makes rehabilitation, load rating and inspection experience more valuable here than new design.",
      },
      {
        role: "Water and wastewater engineers",
        why: "Supply and sewer work downstate and system upgrades upstate are running at the same time, drawing on the same small group of process engineers.",
      },
    ],
    licensure:
      "A New York PE is the baseline for client-facing design, and the state's requirements are among the stricter ones for comity, so an engineer licensed elsewhere should not be assumed to be a short formality. Downstate adds a second layer: certain filings and inspections in New York City require a licensed professional registered for that purpose, which is a qualification distinct from the licence itself. Establishing which of these a role actually needs, before a shortlist, saves the most time of any screen we run in this state.",
    faqs: [
      {
        q: "Do you recruit downstate, upstate, or both?",
        a: "Both, and we treat them as separate markets because they are. Compensation, candidate mobility and the kind of experience that counts all differ between the metropolitan programs and the state, county and municipal work upstate.",
      },
      {
        q: "What kind of engineering roles do you fill in New York?",
        a: "Rail and transit, bridge and structural, civil and site development, water and wastewater, municipal engineering, and construction inspection, which is the most continuous demand of the group.",
      },
      {
        q: "Does a candidate need a New York PE licence?",
        a: "For client-facing design work, yes. New York is stricter than most states on comity, so a licence held elsewhere is worth checking rather than assuming, and some New York City filing and inspection roles need a further registration on top of the PE.",
      },
      {
        q: "Is there a fee for job seekers in New York?",
        a: "No. Metro Associates is always 100% free for job seekers, downstate and upstate alike. Our fees are paid by the hiring firm.",
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
