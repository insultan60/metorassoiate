// Data for the programmatic "Municipal Engineering Recruiter — {City}" pages.
// Parallel to lib/cities.ts (civil) and lib/mep.ts (MEP), but focused on
// public-sector work: city/county public works, capital improvement planning,
// site/civil development review, and municipal utilities — NOT state DOT
// highway work or private land-development engineering. Each city carries
// unique copy (marketNote + local work) so pages are not thin/duplicate
// content; shared content is reused across all.
//
// Same 50 metros as lib/cities.ts and lib/mep.ts, so every civil city page
// has a Municipal Engineering counterpart at the same slug.

export interface MunicipalCity {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  authority: string; // local DPW / city engineering / permitting authority referenced in copy
  marketNote: string; // unique subhead / intro sentence for this metro
  localPrograms: string[];

  /* Deep-market fields, the same four civil carries and for the same reason:
     without them a city page is roughly 700 words of shared framing with the
     name swapped, which is the profile Google files under "Crawled, currently
     not indexed". These carry the part that is genuinely about the place.

     All optional, so the set can be filled in market by market rather than all
     fifty at once. Written to stay true: named public owners and durable
     characteristics of the work, no dates, no dollar figures, and no claims
     about who is hiring this quarter. */

  /** Who owns or lets the work in this metro. */
  agencies?: string[];
  /** Two paragraphs on what the engineering here consists of. */
  marketDetail?: string[];
  /** What firms are short of, and the local reason why. */
  hiringFocus?: { role: string; why: string }[];
  /** Licensure and prequalification as they bite in this state. */
  licensure?: string; // city/county-specific municipal engineering project types
}

export const MUNICIPAL_CITIES: MunicipalCity[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    authority: "New York City Department of Design and Construction (DDC)",
    marketNote:
      "As steward of one of the largest municipal capital portfolios in the country, DDC and DEP are rebuilding water mains, wastewater plants, and streets across all five boroughs under a multi-year capital plan that runs into the billions.",
    localPrograms: [
      "DDC citywide street & water main reconstruction",
      "DEP wastewater treatment plant capital upgrades",
      "Vision Zero pedestrian safety & complete streets",
      "Five-borough site plan & development review",
      "Five-borough library & playground renovations",
    ],
    agencies: [
      "NYC Department of Design & Construction",
      "NYC Department of Transportation",
      "NYC Department of Environmental Protection",
      "NYC Parks",
      "NYC Economic Development Corporation",
    ],
    marketDetail: [
      "New York separates who owns the asset from who builds it. A large share of the city's capital work is designed and delivered by the Department of Design and Construction on behalf of the agency that will own it, which means a municipal engineer here is usually working to another agency's standards through a delivery organisation with its own. Knowing how that hand-off works is a practical skill and it is not one that transfers from a city where public works does everything itself.",
      "The engineering itself is dominated by the right of way. Street reconstruction in this city means sequencing work around water mains, sewers, gas, steam, private utility ducts and a subway beneath some of it, on streets that cannot be closed. Utility coordination is not a supporting task here; it is most of the design problem.",
    ],
    hiringFocus: [
      {
        role: "Street reconstruction engineers",
        why: "Rebuilding a street in a dense, fully occupied right of way is a coordination problem before it is a pavement one, and few markets train engineers to that level of congestion.",
      },
      {
        role: "Utility coordination engineers",
        why: "Multiple private and public utilities occupy the same trench, and resolving that before construction is what keeps a capital programme on schedule.",
      },
      {
        role: "Pedestrian accessibility engineers",
        why: "Ramp and crossing upgrades run continuously across a very large intersection inventory, and the detailing is standard-driven rather than discretionary.",
      },
      {
        role: "Drainage engineers for combined systems",
        why: "Street projects are also stormwater projects here, so the roadway engineer has to answer to the sewer obligation as well.",
      },
    ],
    licensure: "New York licenses engineers through the State Education Department's Office of the Professions, with transfer for most out-of-state PEs on an NCEES record. The gate that matters more in practice is agency prequalification: the design and construction, transportation and environmental protection departments each maintain their own consultant arrangements, so which of them a candidate has actually worked under is the first thing a hiring manager here checks.",
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "City of Los Angeles Bureau of Engineering (BOE)",
    marketNote:
      "With Measure HLA mandating hundreds of miles of new bus and bike infrastructure and the 2028 Olympics driving a citywide capital push, LA's Bureau of Engineering is staffing one of the busiest municipal project pipelines in the country.",
    localPrograms: [
      "Measure HLA complete-streets implementation",
      "2028 Olympics venue-corridor infrastructure program",
      "LA Sanitation sewer system rehabilitation",
      "Site plan review for infill & TOD development",
      "LA Recreation & Parks capital bond projects",
    ],
    agencies: [
      "LA Bureau of Engineering",
      "LA Bureau of Street Services",
      "Los Angeles County Public Works",
      "LA Sanitation & Environment",
      "LA Department of Transportation",
    ],
    marketDetail: [
      "Los Angeles splits municipal engineering across bureaus rather than concentrating it in one department, so design, street maintenance, sanitation and transportation each hold part of what a single public works department would own elsewhere. For an engineer that means the employer and the standards depend on which bureau's programme the work sits in.",
      "Two obligations shape the workload. Pedestrian accessibility repair runs as a court-supervised programme across an enormous sidewalk inventory, which makes ADA design a sustained speciality rather than a checklist item. Alongside it, the regional municipal stormwater permit makes every street and public site a potential place to capture runoff, which is why so much roadway work here carries a water quality component.",
    ],
    hiringFocus: [
      {
        role: "Pedestrian accessibility engineers",
        why: "A sidewalk repair obligation of this size runs for decades, and the design work is continuous rather than project-driven.",
      },
      {
        role: "Stormwater capture & MS4 compliance engineers",
        why: "The regional permit turns public land into treatment opportunity, so runoff capture design is attached to work that would otherwise be pure roadway.",
      },
      {
        role: "Street & pavement rehabilitation engineers",
        why: "An arterial network of this size keeps resurfacing and reconstruction on a permanent cycle.",
      },
      {
        role: "Seismic retrofit engineers for municipal assets",
        why: "Bridges, buildings and buried infrastructure all carry retrofit obligations that a lower-seismicity market never generates.",
      },
    ],
    licensure: "California does not grant civil PE licensure by simple comity: the state board requires its own application, and civil applicants sit California-specific seismic principles and engineering surveying examinations, so an engineer moving here should plan for that. Public agency work also runs through bureau-specific consultant lists, and for street and sidewalk programmes those lists matter as much as the licence.",
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "Chicago Department of Water Management",
    marketNote:
      "Chicago is in the middle of replacing roughly 400,000 lead service lines, the largest municipal lead-line replacement program in the nation, alongside CDOT's ongoing protected-bikeway build-out.",
    localPrograms: [
      "Citywide lead service line replacement program",
      "CDOT protected bike lane & complete streets",
      "Deep Tunnel-adjacent stormwater capital work",
      "Subdivision & site development plan review",
      "Chicago Park District field house renovations",
    ],
    agencies: [
      "Chicago Department of Transportation",
      "Chicago Department of Water Management",
      "Cook County Department of Transportation & Highways",
      "Chicago Department of Assets, Information & Services",
      "Illinois Department of Transportation, District 1",
    ],
    marketDetail: [
      "Municipal work in Chicago is increasingly one combined job. Because the city is replacing lead service lines on a statutory schedule, and because opening a street is expensive, service replacement is coordinated with resurfacing, water main renewal and sewer work in the same block, which makes the municipal engineer a programme coordinator as much as a designer.",
      "Above ground, the distinctive work is the street grid itself: protected bikeway build-out, viaduct clearances under an extensive rail network, and an alley system large enough that permeable alley design became a recognised local speciality. The regular grid makes projects repeatable, which shifts the value from bespoke design toward delivering standard details reliably at volume.",
    ],
    hiringFocus: [
      {
        role: "Coordinated street & utility programme engineers",
        why: "Lead service replacement, water main renewal and resurfacing are packaged into single street projects, so engineers who can plan across all three are the constraint.",
      },
      {
        role: "Bikeway & complete streets designers",
        why: "Protected facility build-out is continuous and the geometric detailing is specific to this city's standards.",
      },
      {
        role: "Viaduct & structure clearance engineers",
        why: "A dense freight and transit rail network crosses the street grid constantly, and clearance and drainage under those structures is recurring work.",
      },
      {
        role: "Permeable pavement & green alley designers",
        why: "The alley network gave the city a stormwater tool few others have at scale, and the design vocabulary is local.",
      },
    ],
    licensure: "Illinois licenses through the Department of Financial and Professional Regulation and is one of the states that issues a Structural Engineer licence entirely separately from the PE, which matters for viaduct and bridge work. City and county programmes run through their own consultant prequalification, and for federally funded work the state transportation department's prequalification applies on top.",
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    authority: "City of Houston Public Works",
    marketNote:
      "Still working through a multi-billion-dollar bond program passed after Hurricane Harvey, Houston Public Works is funding flood-mitigation, drainage, and street rebuilding projects across nearly every part of the city.",
    localPrograms: [
      "Complete Communities street & drainage bond program",
      "Harvey-driven flood mitigation & detention basins",
      "Water/wastewater capital improvement program",
      "Plat & site plan review for rapid annexation growth",
      "Houston Parks Board trail & greenspace program",
    ],
    agencies: [
      "Houston Public Works",
      "Harris County Engineering Department",
      "Harris County Flood Control District",
      "Texas Department of Transportation, Houston District",
      "Municipal utility districts across the region",
    ],
    marketDetail: [
      "Drainage is the municipal engineering problem in Houston, and it is attached to every street. The region is flat, drains slowly and floods on a schedule it plans around, so a roadway project here is expected to improve conveyance or provide detention rather than simply replace pavement, and a dedicated drainage and streets funding stream keeps that work continuous.",
      "The second feature is institutional. Much of the developed area outside the city is served by municipal utility districts, each an independent public body with its own engineer, so the regional market contains a large number of small public clients alongside the city and the county. That produces a different career shape from a metro where one department lets nearly everything.",
    ],
    hiringFocus: [
      {
        role: "Drainage & detention design engineers",
        why: "Street projects carry a conveyance obligation here, so hydraulics is core roadway work rather than a separate discipline.",
      },
      {
        role: "Hydrologic & hydraulic modellers",
        why: "Design decisions are argued and approved through models, and defending one in review is the skill firms actually hire for.",
      },
      {
        role: "Municipal utility district engineers",
        why: "A large number of independent districts each need engineering support, which is a distinctive and durable source of demand in this region.",
      },
      {
        role: "Subsidence-aware infrastructure engineers",
        why: "Ground movement changes drainage grades over time, so design has to account for a datum that does not stay still.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders, and it registers firms as well as individuals, so a consultancy needs its own registration before it can offer services. For district work the practical credential is experience as a district engineer, which is a defined role here rather than an informal one.",
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    authority: "City of Phoenix Engineering & Water Services Department",
    marketNote:
      "As one of the fastest-growing large cities in the country, Phoenix is extending water, sewer, and street infrastructure into newly annexed territory while investing heavily in water-reuse systems to manage a drought-constrained supply.",
    localPrograms: [
      "Water reuse & drought-resiliency infrastructure",
      "Annexation-driven utility extension program",
      "Street & complete-streets bond program",
      "Subdivision plat & site plan review",
      "Desert park & municipal pool capital projects",
    ],
    agencies: [
      "Phoenix Street Transportation Department",
      "Phoenix Water Services",
      "Maricopa County Department of Transportation",
      "City of Mesa Engineering",
      "City of Scottsdale Capital Projects",
    ],
    marketDetail: [
      "The Phoenix metro is built on a regular arterial grid across many adjacent cities, which makes municipal engineering here unusually programmatic: the same intersection, drainage and pavement problems recur across jurisdictions that share standards but let work separately. An engineer's experience transfers easily between cities in this valley in a way it does not in most regions.",
      "Heat is the distinctive design input. Pavement selection, surface treatments, shade at crossings and material durability are all evaluated against a thermal environment that few other American markets design for, and cool pavement and heat mitigation work have moved from pilot to routine programme here.",
    ],
    hiringFocus: [
      {
        role: "Pavement & materials engineers",
        why: "Extreme surface temperatures change how pavements are specified and how long they last, which makes materials judgement locally specific.",
      },
      {
        role: "Arterial & intersection design engineers",
        why: "A valley-wide grid of major arterials keeps capacity and safety work continuous across many jurisdictions.",
      },
      {
        role: "Stormwater & flood control engineers",
        why: "Desert drainage is a problem of rare, intense events and washes rather than continuous flow, which is a different design case from a temperate metro.",
      },
      {
        role: "Heat mitigation & shade infrastructure engineers",
        why: "Cool surfacing and shaded pedestrian infrastructure have become funded programmes here rather than experiments.",
      },
    ],
    licensure: "Arizona registers engineers through the Board of Technical Registration, which accepts comity applications from PEs licensed elsewhere. Because the valley's cities share design standards to a considerable degree, prior work for any one of them is generally recognised by the others, which makes this an easier market to move within than most once a candidate is established.",
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia Water Department / Streets Department",
    marketNote:
      "Philadelphia's Green City, Clean Waters program, a 25-year, multi-billion-dollar green stormwater infrastructure plan to control combined sewer overflows, remains one of the largest municipal environmental infrastructure commitments in the country.",
    localPrograms: [
      "Green City, Clean Waters stormwater program",
      "Combined sewer overflow capital upgrades",
      "Vision Zero complete-streets implementation",
      "Site plan review for TOD & infill corridors",
      "Fairmount Park & rec-center renovation program",
    ],
    agencies: [
      "Philadelphia Streets Department",
      "Philadelphia Water Department",
      "PennDOT District 6",
      "Delaware Valley Regional Planning Commission",
      "SEPTA",
    ],
    marketDetail: [
      "Philadelphia's municipal engineering is shaped by the fact that its combined sewer obligation is being met above ground. Green infrastructure in the public right of way means street and sidewalk projects routinely carry stormwater function, so the roadway engineer has to design a tree trench or a permeable surface that also works as a street and can be maintained as one.",
      "The city's age is the other constraint. A street network laid out long before the utilities beneath it, a substantial inventory of city-owned bridges, and narrow rights of way in the older districts all mean reconstruction here is a fitting exercise, not a clean-sheet one.",
    ],
    hiringFocus: [
      {
        role: "Green stormwater infrastructure designers",
        why: "Runoff control is delivered in the right of way here, so this is roadway work with a water obligation attached rather than a separate speciality.",
      },
      {
        role: "Municipal bridge engineers",
        why: "The city owns a sizeable bridge inventory of its own, distinct from the state system, and it carries a continuous inspection and repair cycle.",
      },
      {
        role: "Street reconstruction engineers",
        why: "Narrow historic rights of way and buried utilities of unknown vintage make reconstruction a constrained design problem.",
      },
      {
        role: "Traffic & complete streets engineers",
        why: "Safety-driven redesign of arterial corridors is a sustained programme across the city.",
      },
    ],
    licensure: "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity for NCEES record holders. Work with federal-aid funding runs through PennDOT's prequalification in addition to the city's own, so candidates with both are meaningfully easier to place.",
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    authority: "City of Dallas Department of Public Works",
    marketNote:
      "Dallas voters approved a major bond package funding street reconstruction, flood control, and park improvements, and the city's Development Services team is processing a heavy load of plat and site-plan applications tied to metroplex growth.",
    localPrograms: [
      "Bond-funded street reconstruction program",
      "Plat & site plan review for metroplex growth",
      "Dallas Water Utilities main replacement program",
      "Complete streets & sidewalk gap closure",
      "Park & municipal facility bond projects",
    ],
    agencies: [
      "Dallas Public Works",
      "Dallas Water Utilities",
      "North Central Texas Council of Governments",
      "Texas Department of Transportation, Dallas District",
      "Collin and Denton county municipalities",
    ],
    marketDetail: [
      "North Texas runs two municipal markets at once. Inside Dallas the work is renewal: bond-funded street reconstruction, alley rehabilitation and utility replacement in an established grid. In the collar cities to the north it is expansion, where growth means new thoroughfares, land development review and infrastructure sized for population that has not arrived yet.",
      "Those two demand different engineers, and firms here often staff for both. The renewal side rewards utility coordination and construction phasing judgement; the growth side rewards speed on subdivision review, thoroughfare design and the traffic analysis that goes with approving development.",
    ],
    hiringFocus: [
      {
        role: "Street reconstruction & rehabilitation engineers",
        why: "Bond-funded renewal inside the city is a continuous programme with its own standards and phasing constraints.",
      },
      {
        role: "Land development review engineers",
        why: "Fast-growing collar cities need public-side engineers who can review and approve private development at volume.",
      },
      {
        role: "Thoroughfare & traffic engineers",
        why: "Growth areas are still building their arterial networks, which is design work that established metros no longer generate.",
      },
      {
        role: "Utility coordination engineers",
        why: "Street renewal is constrained by what is buried beneath it, and resolving that early is what keeps projects on programme.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders and registration required for the firm as well as the individual. In the growth cities, city engineer and development review roles are frequently the public-sector entry point, and experience on either side of the review counter is valued by the other.",
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    authority: "City of Atlanta Department of Watershed Management",
    marketNote:
      "Atlanta remains under a federal consent decree to overhaul its aging combined sewer system, one of the largest ongoing capital commitments in the Southeast, running alongside the Renew Atlanta infrastructure bond.",
    localPrograms: [
      "Consent-decree sewer system rehabilitation program",
      "Renew Atlanta bond infrastructure projects",
      "BeltLine-adjacent complete streets corridors",
      "Land disturbance & site development review",
      "Recreation center renovations across the city",
    ],
    agencies: [
      "Atlanta Department of Transportation",
      "Atlanta Department of Watershed Management",
      "Fulton County Public Works",
      "DeKalb County Public Works",
      "Georgia Department of Transportation",
    ],
    marketDetail: [
      "Atlanta's municipal programme is organised around corridors rather than around a grid. Complete street conversions, trail and greenway corridors and the ring of former rail alignment being converted around the city all treat a route as a single project with transport, drainage, structures and public realm inside it, which suits engineers who can work across disciplines rather than deep in one.",
      "Underneath that, the city's sewer obligations mean roadway projects frequently carry stormwater and sewer scope. Topography matters here too: the terrain is steeper than most southeastern metros, so grading and drainage design carry more weight in what would otherwise be routine street work.",
    ],
    hiringFocus: [
      {
        role: "Complete streets & corridor designers",
        why: "Corridor-scale projects combine roadway, drainage and public realm in one design, which is a broader brief than standard street work.",
      },
      {
        role: "Trail & greenway engineers",
        why: "Converted rail alignments and greenways are a sustained local project type with their own structural and drainage problems.",
      },
      {
        role: "Drainage engineers for hilly terrain",
        why: "Steeper topography makes grading and conveyance a real constraint rather than a formality.",
      },
      {
        role: "Traffic safety engineers",
        why: "Arterial safety redesign is a continuing programme across the city and the counties around it.",
      },
    ],
    licensure: "Georgia licenses through the Board of Professional Engineers and Land Surveyors, with comity for engineers licensed elsewhere. Federally funded corridor work runs through the state transportation department's prequalification categories, and because so much municipal work here is delivered that way, those categories often decide which firms can staff a project at all.",
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "City of Miami Office of Capital Improvements",
    marketNote:
      "The Miami Forever Bond is funding a wave of sea-level-rise resiliency work: stormwater pump stations, seawalls, and drainage upgrades, as the city adapts its municipal infrastructure to South Florida's flooding risk.",
    localPrograms: [
      "Miami Forever Bond resiliency capital program",
      "Stormwater pump station & seawall projects",
      "Site plan review for high-density development",
      "Complete streets & multimodal corridor projects",
      "Waterfront park & municipal facility upgrades",
    ],
    agencies: [
      "Miami-Dade Transportation & Public Works",
      "City of Miami Capital Improvements",
      "Miami Beach Public Works",
      "South Florida Water Management District",
      "Florida Department of Transportation, District 6",
    ],
    marketDetail: [
      "This is the American market where sea level rise is already a construction programme rather than a planning horizon. Roads are being raised, stormwater pump stations installed behind them and drainage systems converted from gravity to pumped operation, most visibly in Miami Beach, because a tidal cycle now pushes water back up through outfalls that used to drain freely.",
      "That changes the ordinary municipal job. Setting a road grade becomes a question about neighbouring private property, groundwater and future tide levels; a drainage design becomes a pumping and power-supply design. Engineers here are expected to reason about a datum that is moving, which is not something most municipal training covers.",
    ],
    hiringFocus: [
      {
        role: "Road raising & resiliency engineers",
        why: "Raising streets against tidal flooding is a project type that barely exists elsewhere in the country and has to be learned locally.",
      },
      {
        role: "Stormwater pump station engineers",
        why: "Converting gravity drainage to pumped systems makes pump station design a core municipal skill here rather than a specialist one.",
      },
      {
        role: "Coastal drainage & tidal backflow engineers",
        why: "Outfalls that admit tide as readily as they discharge runoff require control measures that inland design never considers.",
      },
      {
        role: "Utility relocation engineers",
        why: "Raising a road moves everything buried beneath it, which makes relocation design part of nearly every project.",
      },
    ],
    licensure: "Florida licenses through the Board of Professional Engineers, with licensure by endorsement for engineers already licensed elsewhere on an equivalent basis. Drainage and water use consents run through the regional water management district rather than the municipality, so familiarity with that permitting route is a practical requirement for anyone leading design here.",
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "Seattle Department of Transportation (SDOT)",
    marketNote:
      "Seattle is executing the voter-approved Move Seattle levy while Seattle Public Utilities works through the massive Ship Canal combined sewer overflow tunnel, two of the largest municipal capital projects in the Pacific Northwest.",
    localPrograms: [
      "Move Seattle levy bridge & street program",
      "Ship Canal combined sewer overflow tunnel",
      "Land use & site development review",
      "Vision Zero complete streets projects",
      "Community center & branch library upgrades",
    ],
    agencies: [
      "Seattle Department of Transportation",
      "Seattle Public Utilities",
      "King County Road Services",
      "Sound Transit",
      "Washington State Department of Transportation",
    ],
    marketDetail: [
      "Seattle's municipal engineering is a topography problem. Steep grades, unstable slopes and a waterfront edge mean retaining structures, slope stabilisation and drainage design appear in ordinary street projects, and geotechnical judgement carries further here than it does in a flat city.",
      "The city also owns a substantial bridge and structure inventory whose condition is publicly tracked, which keeps assessment and replacement work continuous. Alongside that, green stormwater infrastructure in the right of way is standard practice rather than an option, because the same street project is usually also part of the drainage obligation.",
    ],
    hiringFocus: [
      {
        role: "Retaining wall & slope stabilisation engineers",
        why: "Steep terrain puts structural earth retention into routine street projects, which is unusual in municipal work.",
      },
      {
        role: "Municipal bridge & structure engineers",
        why: "The city's own bridge inventory carries a continuing inspection, repair and replacement programme distinct from the state system.",
      },
      {
        role: "Green stormwater infrastructure designers",
        why: "Runoff control in the right of way is the default approach here, so roadway engineers are expected to design it.",
      },
      {
        role: "Multimodal corridor designers",
        why: "Transit, bicycle and pedestrian priority are designed into arterial projects from the start rather than added later.",
      },
    ],
    licensure: "Washington registers engineers through the Board of Registration for Professional Engineers and Land Surveyors, with comity for equivalent licences. The state's environmental review process applies to municipal projects as well as large ones, so engineers who can carry a scheme through that review are consistently more employable here than those who have only designed to a standard.",
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    authority: "Denver Department of Transportation & Infrastructure (DOTI)",
    marketNote:
      "The voter-approved Elevate Denver bond is funding street, bridge, and facility upgrades citywide, even as DOTI's development review teams manage one of the heaviest infill-permitting workloads in the Mountain West.",
    localPrograms: [
      "Elevate Denver bond infrastructure program",
      "Vision Zero pedestrian-safety complete streets program",
      "Site development review for infill growth",
      "Denver Water main coordination projects",
      "Parks & Recreation facility renovation program",
    ],
    agencies: [
      "Denver Department of Transportation & Infrastructure",
      "Denver Water",
      "Mile High Flood District",
      "Colorado Department of Transportation",
      "Adams and Arapahoe county public works",
    ],
    marketDetail: [
      "Denver consolidated transport and infrastructure into a single department, which means street, drainage, bridge and public realm work is programmed together rather than negotiated between separate bureaus. For an engineer that makes the municipal job broader here than in cities where each asset class has its own department.",
      "The distinctive technical work is drainage. A regional flood district sets criteria across the metro, and major outfall projects have reshaped whole neighbourhoods to move water that the original street grid was never designed to carry. Sidewalk condition has also become a city-funded programme rather than an adjacent-owner obligation, which turned a maintenance backlog into engineered work.",
    ],
    hiringFocus: [
      {
        role: "Storm drainage & outfall engineers",
        why: "Regional criteria and major outfall schemes make drainage a leading discipline here rather than a supporting one.",
      },
      {
        role: "Sidewalk & accessibility programme engineers",
        why: "Moving sidewalk repair onto the city's books converted a backlog into a continuous design and delivery programme.",
      },
      {
        role: "Multimodal & Vision Zero designers",
        why: "Arterial safety redesign is funded as a standing programme across the city.",
      },
      {
        role: "Municipal bridge engineers",
        why: "City-owned structures over rail, water and highway need their own inspection and rehabilitation cycle.",
      },
    ],
    licensure: "Colorado licenses through the State Board of Licensure for Architects, Professional Engineers and Professional Land Surveyors, with comity for equivalent licences. Drainage design across the metro follows the regional flood district's criteria manual rather than each city's own, so familiarity with that document is effectively a local qualification.",
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    authority: "City of Boston Public Works Department",
    marketNote:
      "Climate Ready Boston is driving a wave of coastal-resiliency and flood-adaptation capital planning, layered on top of the city's ongoing complete-streets and water/sewer rehabilitation commitments.",
    localPrograms: [
      "Climate Ready Boston resiliency planning",
      "Complete streets & Vision Zero implementation",
      "Boston Water and Sewer main rehabilitation",
      "Site plan review for dense infill development",
      "Branch library & municipal building upgrades",
    ],
    agencies: [
      "Boston Public Works Department",
      "Boston Transportation Department",
      "Boston Water & Sewer Commission",
      "Massachusetts Department of Transportation",
      "Massachusetts Bay Transportation Authority",
    ],
    marketDetail: [
      "Boston's street network predates almost everything buried under it, and that is the defining condition of municipal engineering here. Rights of way are narrow and irregular, utility records for the oldest districts are incomplete, and a large share of the ground is filled land, so reconstruction involves discovering the existing condition as much as designing the new one.",
      "Climate adaptation now sits on top of that. A low-lying waterfront with a significant tidal range has made shoreline protection, elevated street sections and drainage backflow prevention part of the city's ordinary capital work rather than a separate resiliency programme.",
    ],
    hiringFocus: [
      {
        role: "Street reconstruction engineers",
        why: "Narrow historic rights of way over filled ground make reconstruction a constrained and investigative design problem.",
      },
      {
        role: "Coastal resiliency & shoreline engineers",
        why: "Waterfront protection has become part of the standing capital programme rather than a set of special projects.",
      },
      {
        role: "Utility coordination engineers",
        why: "Incomplete records for very old infrastructure make locating and sequencing utilities the main project risk.",
      },
      {
        role: "Geotechnical-aware municipal engineers",
        why: "Filled land and high groundwater affect foundations, trenching and settlement in ways a rock-founded city never deals with.",
      },
    ],
    licensure: "Massachusetts licenses through the Board of Registration of Professional Engineers and Land Surveyors, with comity for equivalent out-of-state licences. Federally funded municipal work runs through the state transportation department's prequalification, and because so many city projects are delivered with that funding, the two qualifications are usually sought together.",
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    authority: "City of Minneapolis Public Works Department",
    marketNote:
      "Minneapolis 2040's zoning reforms have pushed site-plan review volume to record levels, while the city's Municipal State Aid street program and lake-protection stormwater rules keep engineering demand steady year-round.",
    localPrograms: [
      "Minneapolis 2040 zoning-driven site plan review",
      "Municipal State Aid street reconstruction program",
      "Chain-of-lakes stormwater protection program",
      "Complete streets & protected bikeway projects",
      "Neighborhood rec-center renovation program",
    ],
    agencies: [
      "Minneapolis Public Works",
      "Hennepin County Transportation",
      "Metropolitan Council",
      "Minnesota Department of Transportation",
      "Minneapolis Park & Recreation Board",
    ],
    marketDetail: [
      "Minneapolis rebuilds streets as whole-corridor projects, replacing pavement, water main, sewer and sidewalk in one pass on a planned cycle rather than patching each separately. That structure makes the municipal engineer a coordinator across utilities from the start, and it means design work here comes in complete, repeatable packages.",
      "Climate sets the engineering parameters. Frost depth governs how deep everything is buried, freeze and thaw governs how pavements are built and how long they last, and a short construction season compresses delivery into part of the year, which shapes phasing and contract structure as much as it shapes design.",
    ],
    hiringFocus: [
      {
        role: "Full-reconstruction corridor engineers",
        why: "Rebuilding pavement and all buried utilities in one project needs engineers who can hold several disciplines at once.",
      },
      {
        role: "Cold climate pavement & materials engineers",
        why: "Freeze and thaw cycling drives specification and service life in ways warmer markets never model.",
      },
      {
        role: "Protected bikeway designers",
        why: "The city builds separated facilities as standard, and the winter maintenance requirement changes the geometry.",
      },
      {
        role: "Stormwater treatment engineers",
        why: "Lake and river water quality rules mean street projects carry treatment obligations rather than just conveyance.",
      },
    ],
    licensure: "Minnesota licenses through the Board of Architecture, Engineering, Land Surveying, Landscape Architecture, Geoscience and Interior Design, with comity for equivalent licences. Watershed districts have real regulatory authority over stormwater here in addition to the city and the state, so a design has to satisfy a body that is easy to overlook if a candidate has not worked in the state before.",
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    authority: "City of Detroit Water and Sewerage Department",
    marketNote:
      "Detroit's green stormwater infrastructure retrofit program is tackling a legacy combined sewer system while the city repurposes thousands of vacant parcels into new development, keeping site-review demand high.",
    localPrograms: [
      "Green stormwater infrastructure retrofit program",
      "Vacant-lot & neighborhood site development review",
      "Water main & lead service line replacement",
      "Neighborhood street reconstruction program",
      "Recreation center & park revitalization projects",
    ],
    agencies: [
      "Detroit Department of Public Works",
      "Detroit Water & Sewerage Department",
      "Wayne County Department of Public Services",
      "Michigan Department of Transportation",
      "Great Lakes Water Authority",
    ],
    marketDetail: [
      "Detroit is engineering a street and utility network built for a much larger population than it now serves, and that is a genuinely unusual municipal problem. Decisions about which infrastructure to renew, which to reduce and how to serve areas with scattered occupancy are engineering questions here rather than hypotheticals, and they have no equivalent in a growing city.",
      "The obligations that do not scale down are the ones driving current work. Lead service line replacement runs to a state rule stricter than the federal one and applies regardless of how many houses remain on a block, while combined sewers and basement flooding keep collection capacity a live public issue across the city.",
    ],
    hiringFocus: [
      {
        role: "Lead service line replacement engineers",
        why: "State rules impose an annual replacement rate on every system, which makes this permanent programme work rather than a project.",
      },
      {
        role: "Collection system & surcharge engineers",
        why: "Combined sewers and basement backup make hydraulic capacity a continuing public commitment.",
      },
      {
        role: "Asset renewal & prioritisation engineers",
        why: "Deciding what to renew across an oversized network is a data and prioritisation discipline in its own right.",
      },
      {
        role: "Street lighting & public realm engineers",
        why: "Rebuilding city-wide lighting and streetscape has been a distinct, sustained municipal programme here.",
      },
    ],
    licensure: "Michigan licenses through the Department of Licensing and Regulatory Affairs, with comity for equivalent out-of-state licences. The state's lead and copper rule is stricter than the federal standard, so an engineer arriving from elsewhere should expect the compliance framework to require more than the one they trained under, and programme experience under it is asked for by name.",
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    authority: "City of Charlotte Engineering & Property Management Department",
    marketNote:
      "Charlotte's Strategic Mobility Plan bond is funding a decade of street and multimodal projects, while rapid annexation across the metro keeps the city's subdivision and site-plan review teams at capacity.",
    localPrograms: [
      "Strategic Mobility Plan bond infrastructure program",
      "Annexation-driven subdivision & site plan review",
      "Charlotte Water main extension program",
      "Complete streets & sidewalk connectivity program",
      "Greenway & municipal facility capital projects",
    ],
    agencies: [
      "Charlotte Department of Transportation",
      "Charlotte Water",
      "Mecklenburg County Storm Water Services",
      "North Carolina Department of Transportation",
      "Town engineering departments across Mecklenburg County",
    ],
    marketDetail: [
      "Charlotte's municipal work is driven by growth, and the review counter is where much of it happens. Development volume means public-side engineers spend a large share of their time assessing private infrastructure that the city will eventually own, which makes review and standards judgement a career track here rather than a junior duty.",
      "Stormwater is the other defining strand. The county runs a well-established surface water programme with post-construction controls, stream buffers and a substantial restoration workload, so street and site projects carry water quality obligations and stream work is a recognised local speciality.",
    ],
    hiringFocus: [
      {
        role: "Land development review engineers",
        why: "Sustained growth means the public side needs engineers who can review private infrastructure to adoption standard at volume.",
      },
      {
        role: "Stormwater & post-construction control engineers",
        why: "County water quality rules attach treatment obligations to nearly every project.",
      },
      {
        role: "Stream restoration engineers",
        why: "Buffer and restoration requirements have made natural channel design a routine part of the local programme.",
      },
      {
        role: "Thoroughfare & corridor designers",
        why: "A metro still building out its arterial network generates design work that mature cities no longer produce.",
      },
    ],
    licensure: "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, with comity for equivalent licences, and it licenses firms as well: a company needs its own certificate of authorisation before offering engineering services in the state. State transportation department prequalification applies to federally funded municipal work on top of the city's own arrangements.",
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    authority: "Metro Nashville Department of Public Works",
    marketNote:
      "Nashville's voter-approved Choose How You Move transportation program is funding sidewalks, signals, and transit corridors as Metro struggles to keep infrastructure pace with one of the country's fastest-growing populations.",
    localPrograms: [
      "Choose How You Move transportation program",
      "Rapid-growth subdivision & site plan review",
      "Metro Water Services main replacement program",
      "Sidewalk gap-closure & neighborhood complete streets",
      "Metro Parks greenway capital projects",
    ],
    agencies: [
      "Metro Nashville Department of Public Works",
      "Nashville DOT & Multimodal Infrastructure",
      "Metro Water Services",
      "Metro Planning Department",
      "Williamson County Highway Department",
      "Rutherford County Planning",
    ],
    marketDetail: [
      "Nashville operates as a consolidated city and county government, so a single metropolitan authority runs public works, water, planning and permitting across the whole of Davidson County rather than dividing them among a city and a set of townships. For a municipal engineer that means broader responsibility and fewer jurisdictional handoffs, but it also means the department carries urban core, suburban and semi-rural infrastructure in one portfolio.",
      "The pressure comes from growth landing outside that boundary. Williamson, Rutherford and Wilson counties are absorbing much of the region's expansion, and their public works and planning departments are staffing up to handle development review, road standards and utility extension at a volume they were never structured for. That has made experienced review engineers and small-jurisdiction public works leadership genuinely scarce across the region.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Suburban counties are reviewing subdivision and site plans at volumes their departments were not staffed for.",
      },
      {
        role: "City & county engineers",
        why: "Growing jurisdictions around the metro need engineers who can run a small public works program end to end.",
      },
      {
        role: "Capital projects engineers",
        why: "A consolidated metropolitan government carries urban, suburban and rural infrastructure in one capital program.",
      },
      {
        role: "Stormwater program engineers",
        why: "Karst geology and combined sewer in the core make local drainage and water quality programs technically demanding.",
      },
    ],
    licensure:
      "Tennessee licenses engineers through the Board of Architectural and Engineering Examiners, and comity on an NCEES record is the usual route for an out-of-state PE. Municipal roles typically require the license because the position seals plans and approvals, and many jurisdictions also expect familiarity with the state's stormwater permitting and local design standards, which vary between the consolidated metro and the surrounding counties.",
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    authority: "Portland Bureau of Transportation (PBOT)",
    marketNote:
      "Portland's Fixing Our Streets paving levy funds a backlog of pavement work, while the Bureau of Environmental Services maintains the city's landmark green-stormwater infrastructure built to relieve the Big Pipe combined sewer system.",
    localPrograms: [
      "Fixing Our Streets paving levy program",
      "Green stormwater infrastructure maintenance",
      "Land division & site development review",
      "Vision Zero complete streets corridor projects",
      "Community center capital renovation program",
    ],
    agencies: [
      "Portland Bureau of Transportation",
      "Portland Bureau of Environmental Services",
      "Portland Permitting & Development",
      "Multnomah County Transportation Division",
      "Metro",
      "Washington County Land Use & Transportation",
    ],
    marketDetail: [
      "Portland recently restructured its city government, moving away from a commission system in which elected officials ran individual bureaus toward a professional administrator overseeing them. For municipal engineers that changes how capital programs are prioritized and defended, and it has put a premium on people who can manage a bureau's program under a conventional management structure rather than a political one.",
      "Regionally, Oregon's land use framework makes municipal engineering unusually planning-driven. An elected regional government administers the urban growth boundary, which determines where infrastructure can be extended at all, so capital planning, concurrency and development review are tied to land use decisions made above the city level. Engineers here spend more time in that process than their counterparts in most states.",
    ],
    hiringFocus: [
      {
        role: "Capital program managers",
        why: "A restructured city government has increased demand for professional program management within bureaus.",
      },
      {
        role: "Development review & land use engineers",
        why: "The regional growth boundary ties infrastructure extension directly to land use decisions.",
      },
      {
        role: "Stormwater program engineers",
        why: "Green infrastructure requirements are embedded in local standards rather than offered as alternatives.",
      },
      {
        role: "Transportation planning engineers",
        why: "Multimodal and safety programs are built into the region's planning framework rather than added on.",
      },
    ],
    licensure:
      "Oregon licenses engineers through the State Board of Examiners for Engineering and Land Surveying, with comity on an NCEES record the normal route. Municipal engineering positions generally require the license, and Oregon's separate structural registration matters for anyone sealing structural work. Familiarity with the state's land use framework is checked as closely as the license in most senior public sector roles here.",
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    authority: "City of Las Vegas Department of Public Works",
    marketNote:
      "As master-planned communities keep expanding into the valley, Las Vegas Public Works and the regional flood control district are running parallel capital programs for drainage, streets, and utility extension.",
    localPrograms: [
      "Regional flood control district drainage projects",
      "Master-planned community site plan review",
      "Street & complete-streets capital program",
      "Municipal water/wastewater capital improvements",
      "Municipal pool & park capital projects",
    ],
    agencies: [
      "City of Las Vegas Department of Public Works",
      "Clark County Public Works",
      "City of Henderson Public Works",
      "City of North Las Vegas Public Works",
      "Clark County Regional Flood Control District",
      "Regional Transportation Commission of Southern Nevada",
    ],
    marketDetail: [
      "The Las Vegas valley is not one city. The resort corridor and a large share of the population sit in unincorporated Clark County rather than inside any municipality, so county public works carries responsibilities that elsewhere would belong to a city, and several substantial cities operate alongside it. Engineers here need to know which jurisdiction's standards apply before anything else.",
      "Two regional bodies pull the pieces together: a flood control district that sets drainage criteria and funds the channel and detention system valley-wide, and a transportation commission that funds and coordinates roadway and transit work across jurisdictions. That makes regional coordination and interlocal agreement work a real part of a municipal engineer's job here rather than an occasional task.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Continuous outward growth across several jurisdictions keeps subdivision and site review volume high.",
      },
      {
        role: "Drainage & flood control engineers",
        why: "Regional drainage criteria govern design valley-wide and form their own body of local knowledge.",
      },
      {
        role: "Capital projects engineers",
        why: "Regional funding for roadway and transit work is delivered through individual jurisdictions' capital programs.",
      },
      {
        role: "City & county engineers",
        why: "Multiple substantial jurisdictions in one valley each need engineers who can run a public works program.",
      },
    ],
    licensure:
      "Nevada licenses engineers by branch through the State Board of Professional Engineers and Land Surveyors, so a municipal engineer needs the branch matching the work they seal, usually civil. Comity on an NCEES record is the usual route once the branch is settled. Regional flood control criteria and the transportation commission's design standards are the local knowledge that most often distinguishes candidates.",
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    authority: "City of Columbus Department of Public Service",
    marketNote:
      "Intel's mega-fab campus east of Columbus has triggered a wave of annexation and utility-extension work, while the city's Blueprint Columbus program separates aging combined sewers across older neighborhoods.",
    localPrograms: [
      "Intel-corridor utility extension & annexation work",
      "Blueprint Columbus sewer separation program",
      "Site plan & subdivision review for rapid growth",
      "Complete streets & sidewalk program",
      "Columbus Recreation & Parks capital projects",
    ],
    agencies: [
      "Columbus Department of Public Service",
      "Columbus Department of Public Utilities",
      "Columbus Department of Building & Zoning Services",
      "Franklin County Engineer",
      "Delaware County Engineer",
      "Mid-Ohio Regional Planning Commission",
    ],
    marketDetail: [
      "Columbus has grown its municipal boundary steadily by tying water and sewer service to annexation, which is unusual among large American cities and makes utility extension a land use instrument as well as an engineering one. Municipal engineers here therefore work at the intersection of service capacity, annexation agreements and development timing in a way their counterparts in landlocked cities do not.",
      "Ohio also gives counties an elected county engineer with statutory responsibility for roads and bridges outside municipalities, which creates a distinct career track and a set of offices that hire steadily. With large industrial and residential development landing in the surrounding counties, those offices and the townships around them are absorbing review and capital delivery volume well beyond their historic scale.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Large-scale growth in surrounding counties is generating subdivision and site review volume beyond historic capacity.",
      },
      {
        role: "Utility extension & capacity planning engineers",
        why: "Water and sewer service drives annexation, making extension planning a strategic municipal function.",
      },
      {
        role: "County highway & bridge engineers",
        why: "Ohio's statutory county engineer offices carry road and bridge responsibility and hire on their own track.",
      },
      {
        role: "Capital projects engineers",
        why: "Public infrastructure has to be delivered on the schedule new development sets rather than the city's own.",
      },
    ],
    licensure:
      "Ohio licenses engineers through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route. The elected county engineer position is statutory and requires both professional engineer and professional surveyor registration in Ohio, which is an unusual dual requirement and a real constraint on who can hold those roles.",
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    authority: "Salt Lake City Engineering Division",
    marketNote:
      "The city's Funding Our Future sales-tax initiative is rebuilding streets and replacing aging water pipe citywide, even as Silicon Slopes growth along the Wasatch Front drives steady site-plan review demand.",
    localPrograms: [
      "Funding Our Future streets bond program",
      "Water pipe replacement capital program",
      "Site plan review for Silicon Slopes growth",
      "Complete streets & bikeway network expansion",
      "Community center & rec-facility upgrades",
    ],
    agencies: [
      "Salt Lake City Engineering Division",
      "Salt Lake County Public Works",
      "Salt Lake City Department of Public Utilities",
      "West Valley City Public Works",
      "Sandy City Public Works",
      "Wasatch Front Regional Council",
    ],
    marketDetail: [
      "The valley is divided among a central city, a large county public works organization and a ring of substantial suburban cities, several of which have grown large enough to run full engineering departments of their own. That fragmentation means standards differ across short distances and a regional project touches several jurisdictions, so interlocal coordination is a standing part of municipal practice here.",
      "Two regional pressures shape the capital programs. Water is the first: supply constraint and the lake's decline have pushed conservation, secondary water metering and system efficiency onto municipal agendas that used to be about capacity alone. Seismic risk is the second, making assessment and replacement of buried pipe, reservoirs and essential facilities a recurring line in city capital plans.",
    ],
    hiringFocus: [
      {
        role: "City engineers",
        why: "Several substantial suburban cities each run their own engineering departments and compete for the same people.",
      },
      {
        role: "Water system & conservation engineers",
        why: "Supply constraint has moved metering, efficiency and conservation into core municipal capital work.",
      },
      {
        role: "Seismic assessment & replacement engineers",
        why: "Fault proximity makes buried infrastructure survivability a recurring item in city capital plans.",
      },
      {
        role: "Development review engineers",
        why: "Continued valley growth keeps subdivision and site review volume high across jurisdictions.",
      },
    ],
    licensure:
      "Utah licenses engineers through the Division of Professional Licensing and its Professional Engineers and Land Surveyors board, with comity on an NCEES record the normal path. Municipal roles generally require the license, and because standards differ between the county, the central city and the suburban cities, local familiarity with a specific jurisdiction's manual is often what separates candidates.",
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    authority: "City of Kansas City Public Works Department",
    marketNote:
      "Kansas City's Smart Sewer program, built under a federal consent decree, is one of the largest combined sewer overflow control programs in the Midwest, running for another two decades of capital work.",
    localPrograms: [
      "Smart Sewer consent-decree overflow program",
      "Street preservation capital improvement program",
      "Site plan & plat review for two-state growth",
      "Complete streets & sidewalk gap program",
      "KC Parks & Recreation facility projects",
    ],
    agencies: [
      "Kansas City Public Works",
      "Johnson County Public Works",
      "City of Overland Park Public Works",
      "Jackson County Public Works",
      "Mid-America Regional Council",
      "Unified Government of Wyandotte County and Kansas City, Kansas",
    ],
    marketDetail: [
      "This metro is unusually fragmented even by American standards: two states, several counties and well over a hundred municipalities, including one consolidated city and county government on the Kansas side. Municipal engineers here spend real time on interlocal agreements and on reconciling standards that differ between neighboring jurisdictions, and a regional planning council does the coordination work that a single authority would elsewhere.",
      "The capital agenda is dominated by aging infrastructure. A large inherited street network, a long-running sewer overflow program and a substantial bridge inventory all compete for the same local funding, which makes asset management, condition assessment and prioritization central municipal skills rather than optional refinements. Cross-border licensure is close to a practical necessity for anyone working the whole region.",
    ],
    hiringFocus: [
      {
        role: "City engineers",
        why: "A metro of many separate municipalities means many small engineering departments hiring from the same pool.",
      },
      {
        role: "Asset management & prioritization engineers",
        why: "Competing capital needs on limited local funding make condition assessment and prioritization central.",
      },
      {
        role: "Dual-licensed municipal engineers",
        why: "A bi-state metro means an engineer sealing work across the region needs registration in both states.",
      },
      {
        role: "Stormwater program engineers",
        why: "A long-running sewer overflow program puts local drainage and water quality work on every jurisdiction's agenda.",
      },
    ],
    licensure:
      "Missouri licenses through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects and Kansas through its Board of Technical Professions, and comity registration in both is close to a practical requirement for municipal engineers working across the state line. Both states also require corporate authorization for firms providing engineering services to local governments.",
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    authority: "City of Indianapolis Department of Public Works",
    marketNote:
      "DigIndy, the city's 28-mile deep-tunnel system for combined sewer overflow control, is one of the largest public works projects in Indianapolis history, alongside a steady thoroughfare-plan street rebuilding program.",
    localPrograms: [
      "DigIndy deep tunnel overflow control program",
      "Thoroughfare plan street reconstruction program",
      "Site development review for Lilly-corridor growth",
      "Complete streets & sidewalk expansion program",
      "Municipal facility ADA upgrade program",
    ],
    agencies: [
      "Indianapolis Department of Public Works",
      "Indianapolis Department of Metropolitan Development",
      "Citizens Energy Group",
      "Hamilton County Highway Department",
      "City of Fishers Engineering",
      "Indianapolis Metropolitan Planning Organization",
    ],
    marketDetail: [
      "Indianapolis consolidated its city and county governments decades ago, so a single public works department covers almost all of Marion County while a handful of separately incorporated towns retain their own. That scale gives municipal engineers here a large and varied portfolio, and it means the department is effectively a county-sized organization with a city's political structure.",
      "The suburban ring is where the growth and the hiring pressure are. Hamilton County and the fast-growing cities within it have built substantial engineering departments in a short time, and they compete directly with each other and with consultants for people who can run development review, manage capital delivery and hold the standards. Flat terrain makes drainage review unusually consequential in that work.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Fast-growing suburban cities are reviewing subdivision and site plans at high and sustained volume.",
      },
      {
        role: "City engineers",
        why: "Newly substantial suburban municipalities have built engineering departments and compete for the same people.",
      },
      {
        role: "Stormwater & drainage engineers",
        why: "Flat terrain with minimal fall makes local drainage review and detention design consequential.",
      },
      {
        role: "Capital projects engineers",
        why: "A consolidated city and county carries a large, varied capital program across urban and suburban infrastructure.",
      },
    ],
    licensure:
      "Indiana licenses engineers through the State Board of Registration for Professional Engineers, administered by the Professional Licensing Agency, with comity on an NCEES record the usual route. Municipal positions generally require the license, and county surveyor and drainage board processes in Indiana give local drainage law a role in review that engineers new to the state are often unfamiliar with.",
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    authority: "City of Milwaukee Department of Public Works",
    marketNote:
      "Milwaukee's aging combined sewer network and freeway-adjacent street corridors drive a steady rehabilitation cycle, layered on top of industrial-site redevelopment along the Menomonee Valley.",
    localPrograms: [
      "Combined sewer system rehabilitation program",
      "Complete streets reconstruction program",
      "Menomonee Valley industrial site plan review",
      "Milwaukee Water Works main replacement program",
      "Regional parks facility coordination projects",
    ],
    agencies: [
      "Milwaukee Department of Public Works",
      "Milwaukee County Department of Transportation",
      "Milwaukee Metropolitan Sewerage District",
      "City of Wauwatosa Engineering",
      "Waukesha County Department of Public Works",
      "Southeastern Wisconsin Regional Planning Commission",
    ],
    marketDetail: [
      "Wisconsin's strong home rule tradition has left southeastern Wisconsin with many small, long-established municipalities each running its own public works department, so the region has an unusual number of city and village engineer positions relative to its population. Standards vary between them, and a regional planning commission provides the coordination that no single authority does.",
      "The infrastructure itself is old and the climate is hard on it. Streets, water mains and sewers laid generations ago are reaching replacement together, freeze-thaw accelerates deterioration, and a regional sewerage district sets stormwater and wet weather expectations that member communities have to meet locally. Asset management and prioritized replacement are therefore the core of most municipal capital programs here.",
    ],
    hiringFocus: [
      {
        role: "City & village engineers",
        why: "Strong home rule leaves many small municipalities each running their own engineering department.",
      },
      {
        role: "Asset management & replacement engineers",
        why: "Infrastructure laid in one era is reaching replacement together under freeze-thaw deterioration.",
      },
      {
        role: "Stormwater program engineers",
        why: "Regional wet weather expectations have to be met through local ordinances and capital work.",
      },
      {
        role: "Development review engineers",
        why: "Growth in the western suburbs sustains subdivision and site plan review volume.",
      },
    ],
    licensure:
      "Wisconsin licenses engineers through the Department of Safety and Professional Services, with comity on an NCEES record the standard route. Municipal roles generally require the license, and because state-level plan review applies to many water and sewer works, familiarity with that submission process is a practical requirement alongside registration in most city engineer positions.",
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    authority: "City of Richmond Department of Public Utilities",
    marketNote:
      "Richmond is executing a long-term combined sewer overflow control plan while data-center growth just south of the city pushes utility-extension and site-plan demand across Chesterfield-adjacent corridors.",
    localPrograms: [
      "Combined sewer overflow long-term control plan",
      "Data-center-corridor utility extension projects",
      "Site plan & subdivision review for utility-district growth",
      "Complete streets & sidewalk program",
      "Recreation center & library renovation program",
    ],
    agencies: [
      "Richmond Department of Public Works",
      "Richmond Department of Public Utilities",
      "Henrico County Department of Public Works",
      "Chesterfield County Transportation",
      "Richmond Department of Planning and Development Review",
      "Richmond Regional Transportation Planning Organization",
    ],
    marketDetail: [
      "Virginia is one of the few states where cities are legally independent of the counties around them, so Richmond and the surrounding counties are peer jurisdictions rather than parts of a hierarchy. Each runs its own public works, utilities and review functions with no county layer above the city, which makes regional coordination a matter of negotiation between equals and gives each jurisdiction a complete engineering organization.",
      "Virginia is also unusual in that the state maintains most secondary roads in its counties rather than leaving them to local government, which shifts what a county engineer here actually does toward utilities, drainage, site development review and capital facilities. Chesapeake Bay obligations put stormwater quality and erosion control at the center of local regulatory work across every jurisdiction.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Independent cities and counties each run complete review functions, and suburban growth keeps volume high.",
      },
      {
        role: "Stormwater & erosion control program engineers",
        why: "Bay watershed obligations make local water quality regulation a substantial ongoing municipal function.",
      },
      {
        role: "Utility engineers",
        why: "With the state maintaining most secondary roads, local departments are weighted toward water, sewer and drainage.",
      },
      {
        role: "Capital projects engineers",
        why: "Each independent jurisdiction delivers its own facilities and infrastructure program.",
      },
    ],
    licensure:
      "Virginia licenses engineers through the Board for Architects, Professional Engineers, Land Surveyors, Certified Interior Designers and Landscape Architects, with comity on an NCEES record the usual route. Municipal roles generally require the license, and the state's stormwater and erosion control programs carry their own certifications that local government engineers are commonly expected to hold alongside it.",
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    authority: "City of Baltimore Department of Public Works",
    marketNote:
      "Baltimore is midway through a consent-decree-driven overhaul of its sewer system, one of the largest capital commitments in city history, while aging water mains across older neighborhoods keep replacement crews busy.",
    localPrograms: [
      "Federal consent-decree sewer rehabilitation program",
      "Water main replacement capital program",
      "Site plan review for waterfront redevelopment",
      "Complete streets & sidewalk program",
      "Playground & neighborhood park renovation program",
    ],
    agencies: [
      "Baltimore City Department of Public Works",
      "Baltimore City Department of Transportation",
      "Baltimore County Department of Public Works",
      "Howard County Department of Public Works",
      "Anne Arundel County Department of Public Works",
      "Baltimore Metropolitan Council",
    ],
    marketDetail: [
      "Baltimore City sits outside any county, so it carries the full range of municipal responsibility on its own while the surrounding counties operate as large, separate public works organizations. The city's infrastructure is also much older than theirs, which means its engineering agenda is dominated by renewal, condition assessment and managing failure risk in systems that predate modern records.",
      "The surrounding counties face a different problem: sustained suburban growth, development review at volume, and watershed obligations that apply to every acre. Chesapeake Bay nutrient and sediment requirements give local stormwater programs measurable targets, which has made municipal water quality work a technical function with reporting obligations rather than an administrative one.",
    ],
    hiringFocus: [
      {
        role: "Asset renewal & condition assessment engineers",
        why: "An exceptionally old city network makes prioritized renewal and failure risk management the core agenda.",
      },
      {
        role: "Stormwater program engineers",
        why: "Bay watershed obligations give local water quality programs measurable targets and reporting duties.",
      },
      {
        role: "Development review engineers",
        why: "Suburban county growth sustains subdivision and site plan review volume across the region.",
      },
      {
        role: "Capital projects engineers",
        why: "The city and each surrounding county run separate, substantial capital delivery programs.",
      },
    ],
    licensure:
      "Maryland licenses engineers through the State Board for Professional Engineers under the Department of Labor, with comity on an NCEES record the standard route. Municipal positions generally require the license, and the state's sediment control and stormwater management programs carry their own approval processes that local government engineers administer and are expected to know in detail.",
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    authority: "City of New Orleans Department of Public Works",
    marketNote:
      "Below sea level and prone to subsidence, New Orleans runs an unusually heavy drainage and pump-station capital program through the Sewerage & Water Board, paired with constant street and catch-basin reconstruction.",
    localPrograms: [
      "Sewerage & Water Board pump station upgrades",
      "Subsidence-driven street & catch basin repair",
      "Site plan & subdivision review for redevelopment parcels",
      "Resiliency-corridor complete streets projects",
      "NORD park & playground renovation program",
    ],
    agencies: [
      "New Orleans Department of Public Works",
      "Sewerage and Water Board of New Orleans",
      "Jefferson Parish Department of Public Works",
      "New Orleans Office of Resilience and Sustainability",
      "Regional Planning Commission",
      "St. Tammany Parish Department of Engineering",
    ],
    marketDetail: [
      "New Orleans is a consolidated city and parish, and it splits municipal engineering between a public works department responsible for streets and a separate board responsible for water, sewer and drainage. That division is unusual and consequential: street reconstruction and underground utility renewal have to be coordinated across two organizations with different governance, and the interaction between them shapes how projects are actually delivered.",
      "Subsidence makes ordinary municipal work extraordinary. Streets settle unevenly, buried pipe breaks and moves, and drainage that was designed to fall in one direction may no longer do so, which means survey, grade and condition information ages quickly and has to be re-established rather than assumed. Resilience funding has made adaptation a standing category in the capital program.",
    ],
    hiringFocus: [
      {
        role: "Street & utility coordination engineers",
        why: "Splitting streets and underground utilities between two organizations makes coordination a delivery-critical skill.",
      },
      {
        role: "Drainage & subsidence-aware design engineers",
        why: "Ground movement invalidates existing grade and drainage assumptions, requiring them to be re-established.",
      },
      {
        role: "Resilience & adaptation program engineers",
        why: "Flood and subsidence adaptation is a standing capital category rather than an occasional project.",
      },
      {
        role: "Capital projects engineers",
        why: "Large recovery and renewal programs need delivery capacity across streets, drainage and facilities.",
      },
    ],
    licensure:
      "Louisiana licenses engineers through the Professional Engineering and Land Surveying Board, with comity on an NCEES record the usual route for an individual, and firms providing services to local government need a certificate of authorization with a resident professional in responsible charge. Municipal roles generally require the license, and familiarity with the split of responsibility between the city and the water board is essential local knowledge.",
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    authority: "Louisville Metro Public Works & Assets Department",
    marketNote:
      "Louisville MSD's federal consent decree for sewer overflow control remains one of the region's largest capital programs, running alongside Metro's Move Louisville complete-streets initiative.",
    localPrograms: [
      "MSD consent-decree sewer overflow program",
      "Move Louisville complete streets implementation",
      "Site plan & subdivision review for logistics growth",
      "Street resurfacing capital program",
      "Louisville Metro Parks facility renovations",
    ],
    agencies: [
      "Louisville Metro Public Works and Assets",
      "Louisville and Jefferson County Metropolitan Sewer District",
      "Louisville Metro Develop Louisville",
      "Oldham County Fiscal Court",
      "Bullitt County Planning",
      "Kentuckiana Regional Planning and Development Agency",
    ],
    marketDetail: [
      "Louisville merged its city and county governments into a single metro government, so one organization now carries public works and asset responsibility across the whole of Jefferson County while a number of small incorporated cities within it retain limited functions. Municipal engineers here therefore work at county scale with urban, suburban and rural infrastructure in the same portfolio.",
      "Water, sewer and drainage sit with a separate metropolitan sewer district rather than with the metro government, which splits responsibility for what happens in the same street between two organizations. Coordinating street reconstruction with the district's consent decree work is a permanent feature of capital delivery here, and karst conditions make drainage and excavation locally unpredictable.",
    ],
    hiringFocus: [
      {
        role: "Capital projects engineers",
        why: "A merged metro government delivers a county-scale program spanning urban, suburban and rural infrastructure.",
      },
      {
        role: "Street & utility coordination engineers",
        why: "Splitting roads and sewers between two organizations makes coordinated delivery a core competence.",
      },
      {
        role: "Stormwater & drainage engineers",
        why: "Karst conditions make local drainage behavior unpredictable and design judgment locally specific.",
      },
      {
        role: "Development review engineers",
        why: "Growth in the surrounding counties sustains subdivision and site plan review volume.",
      },
    ],
    licensure:
      "Kentucky licenses engineers through the State Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the normal route, and engineers working the wider metro frequently hold Indiana registration as well. Municipal roles generally require the license, and understanding the division of responsibility between the metro government and the sewer district is essential local knowledge.",
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    authority: "City of Oklahoma City Public Works Department",
    marketNote:
      "MAPS 4, Oklahoma City's voter-approved sales-tax capital program, is funding streets, sidewalks, parks, and public facilities citywide, one of the most sweeping municipal capital plans in the South Central US.",
    localPrograms: [
      "MAPS 4 capital infrastructure program",
      "Street & sidewalk reconstruction program",
      "Utilities Department water/wastewater capital work",
      "Site plan & plat review for suburban growth",
      "MAPS 4-funded library & senior-center projects",
    ],
    agencies: [
      "Oklahoma City Public Works Department",
      "Oklahoma City Water Utilities Trust",
      "Oklahoma City Planning Department",
      "Association of Central Oklahoma Governments",
      "Cleveland County",
      "City of Edmond Engineering",
    ],
    marketDetail: [
      "Oklahoma City funds much of its public infrastructure through temporary voter-approved sales taxes spent as the money arrives rather than through long-term borrowing. That changes how municipal engineering works here: programs are scoped to a defined revenue stream with a defined end date, delivery schedules are tied to collections, and engineers are expected to manage scope against money in a way debt-funded programs do not require.",
      "The city also covers an enormous land area, much of it low density, which stretches the street, drainage and utility network over far more miles per resident than a compact city of similar population. Maintenance obligations, pavement management and the cost of extending service are correspondingly larger, and expansive clay subgrades shorten the life of everything built on them.",
    ],
    hiringFocus: [
      {
        role: "Capital program managers",
        why: "Pay-as-you-go voter-approved programs require scope managed against a defined revenue stream and deadline.",
      },
      {
        role: "Pavement & asset management engineers",
        why: "An unusually large street network per resident makes maintenance prioritization a central municipal function.",
      },
      {
        role: "Development review engineers",
        why: "Continued outward growth across the metro sustains subdivision and site plan review volume.",
      },
      {
        role: "Drainage & stormwater engineers",
        why: "Flat terrain and clay soils make local drainage design and detention review consequential.",
      },
    ],
    licensure:
      "Oklahoma licenses engineers through the State Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the standard route and a certificate of authorization required for firms serving local government. Municipal roles generally require the license, and familiarity with the city's own design standards and the state's stormwater permitting is expected alongside it.",
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    authority: "City of Charleston Department of Public Service",
    marketNote:
      "The Church Creek drainage basin program is Charleston's response to chronic tidal flooding, and it runs alongside sea-level-rise seawall work and careful infrastructure retrofits within the historic peninsula district.",
    localPrograms: [
      "Church Creek drainage basin flood mitigation program",
      "Sea-level-rise seawall & resiliency capital work",
      "Historic-district infrastructure retrofit review",
      "Site plan review for coastal growth corridor",
      "Waterfront park & marina facility upgrades",
    ],
    agencies: [
      "City of Charleston Department of Public Service",
      "Charleston County Public Works",
      "Town of Mount Pleasant Engineering",
      "City of North Charleston Public Works",
      "Charleston Water System",
      "Berkeley-Charleston-Dorchester Council of Governments",
    ],
    marketDetail: [
      "The Charleston region is governed by several substantial and separate jurisdictions across three counties, each running its own public works and review functions, which means regional problems have to be solved by agreement rather than by authority. A council of governments does the coordinating, and municipal engineers here spend real time in interlocal work that a single-jurisdiction metro would not require.",
      "Sea level and tidal flooding have reorganized municipal priorities. Drainage, pumping, road raising and the long-horizon question of which areas can be defended have moved from the engineering department's routine work to the center of local political debate, which means municipal engineers are expected to explain and defend technical judgments in public far more than is typical. Historic district review constrains what can be built in the old city.",
    ],
    hiringFocus: [
      {
        role: "Drainage & flood resilience engineers",
        why: "Tidal flooding has made drainage and adaptation the central municipal engineering question in the region.",
      },
      {
        role: "City & town engineers",
        why: "Several separate substantial jurisdictions each run their own engineering departments.",
      },
      {
        role: "Development review engineers",
        why: "Rapid suburban growth across three counties sustains high subdivision and site plan volume.",
      },
      {
        role: "Capital program managers",
        why: "Adaptation and drainage programs require scope, funding and public explanation managed together.",
      },
    ],
    licensure:
      "South Carolina licenses engineers through the Board of Registration for Professional Engineers and Surveyors within the Department of Labor, Licensing and Regulation, with comity on an NCEES record the usual route. Municipal roles generally require the license, and the state's coastal zone program and stormwater permitting add approval processes local government engineers administer directly.",
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    authority: "City of Newark Department of Water and Sewer Utilities",
    marketNote:
      "Newark's rapid, nationally cited lead service line replacement program swapped out tens of thousands of lines in just a few years, and the city continues to coordinate heavy port-adjacent utility work.",
    localPrograms: [
      "Rapid citywide lead line replacement program",
      "Port-adjacent infrastructure & utility coordination",
      "Site plan review for transit-oriented redevelopment",
      "Complete streets & sidewalk improvement program",
      "Recreation center capital renovation program",
    ],
    agencies: [
      "Newark Department of Engineering",
      "Newark Department of Water and Sewer Utilities",
      "Essex County Department of Public Works",
      "City of Jersey City Division of Engineering",
      "North Jersey Transportation Planning Authority",
      "New Jersey Department of Community Affairs",
    ],
    marketDetail: [
      "New Jersey has more separate municipalities than almost any state its size, and each one is expected to have a municipal engineer, which creates an unusual number of small public engineering appointments alongside a handful of large city departments. Many are held by consultants serving several towns at once, so the career path here runs through consulting as often as through direct employment.",
      "The legal framework is unusually prescriptive. Local public contracting rules, a state-administered uniform construction code and formal municipal land use procedures govern how work is bid, reviewed and approved, so a municipal engineer here is as much an administrator of statutory process as a technical designer. Old infrastructure, contaminated ground and lead service line obligations dominate the technical agenda.",
    ],
    hiringFocus: [
      {
        role: "Municipal engineers",
        why: "A very large number of separate municipalities each require an appointed engineer, often serving several at once.",
      },
      {
        role: "Water & sewer renewal engineers",
        why: "Old buried networks and lead service line obligations dominate the local capital agenda.",
      },
      {
        role: "Development review engineers",
        why: "Formal municipal land use procedures make site plan and subdivision review a statutory function.",
      },
      {
        role: "Capital program & procurement specialists",
        why: "Prescriptive local public contracting rules make bidding and administration a specialist competence.",
      },
    ],
    licensure:
      "New Jersey licenses engineers through the State Board of Professional Engineers and Land Surveyors within the Division of Consumer Affairs, with comity on an NCEES record the normal route. Municipal engineer appointments require the license, and familiarity with the state's local public contracts law, municipal land use law and uniform construction code is what most distinguishes candidates for these roles.",
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    authority: "San Francisco Public Works",
    marketNote:
      "The Sewer System Improvement Program is a multi-decade, multi-billion-dollar rebuild of San Francisco's combined sewer and stormwater infrastructure, one of the largest municipal capital programs on the West Coast.",
    localPrograms: [
      "Sewer System Improvement Program capital projects",
      "Vision Zero complete streets implementation",
      "Site plan review for dense urban infill",
      "Street resurfacing & paving capital program",
      "SF Rec & Park facility renovation program",
    ],
    agencies: [
      "San Francisco Public Works",
      "San Francisco Municipal Transportation Agency",
      "San Francisco Public Utilities Commission",
      "San Francisco Planning Department",
      "Port of San Francisco",
      "San Francisco Department of Building Inspection",
    ],
    marketDetail: [
      "San Francisco is a consolidated city and county and a charter city, and it keeps an unusually large engineering organization in house, designing and managing much of its own capital work rather than contracting all of it out. That makes the public sector itself a major employer of municipal engineers here, with career structures and specialisms that exist inside government rather than in consultancies.",
      "The constraints are regulatory and political rather than technical. Environmental review, public engagement and design approval processes are lengthy and contested, voter-approved bonds fund much of the capital program, and a project's schedule is usually determined by approvals rather than construction. Engineers who can carry a project through that process are valued at least as highly as those who can design it.",
    ],
    hiringFocus: [
      {
        role: "Municipal capital project engineers",
        why: "An unusually large in-house engineering organization designs and delivers much of the city's own work.",
      },
      {
        role: "Environmental review & entitlement engineers",
        why: "Approval processes rather than construction typically determine project schedules here.",
      },
      {
        role: "Seismic & resilience engineers",
        why: "An old building and infrastructure stock in an active seismic region drives continuing assessment and retrofit.",
      },
      {
        role: "Public engagement-capable engineers",
        why: "Contested projects require technical judgments to be explained and defended publicly.",
      },
    ],
    licensure:
      "California licenses engineers through the Board for Professional Engineers, Land Surveyors and Geologists and does not grant straightforward comity, so an out-of-state PE must satisfy California-specific examination requirements before holding a position that seals work. Municipal roles also expect familiarity with the state's environmental review statute, which governs how public projects are approved.",
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    authority: "City of San Diego Engineering & Capital Projects Department",
    marketNote:
      "San Diego's Pure Water program is building a major potable-reuse system to diversify the city's water supply, while a large deferred-maintenance backlog keeps street-repair crews and engineers busy citywide.",
    localPrograms: [
      "Pure Water potable reuse infrastructure program",
      "Street repair & resurfacing backlog program",
      "Site plan review for coastal infill development",
      "Complete streets & mobility corridor projects",
      "Library & park facility capital projects",
    ],
    agencies: [
      "San Diego Engineering & Capital Projects Department",
      "San Diego County Department of Public Works",
      "City of Chula Vista Engineering",
      "San Diego Association of Governments",
      "San Diego Development Services Department",
      "Port of San Diego",
    ],
    marketDetail: [
      "San Diego runs an unusually formalized community planning structure, with dozens of recognized neighborhood groups that review projects and infrastructure proposals before they reach the council. For municipal engineers that means public process is a scheduled part of nearly every project rather than an occasional hurdle, and the ability to present and defend a design outside a technical setting is a working requirement.",
      "The physical work is shaped by terrain and by deferred maintenance. Canyon topography makes street, drainage and retaining infrastructure more complex and more expensive than in a flat city, and a substantial backlog of street and storm drain renewal has made asset management and prioritization a central municipal function rather than a background one.",
    ],
    hiringFocus: [
      {
        role: "Capital projects engineers",
        why: "A large city capital program with a maintenance backlog needs sustained delivery capacity.",
      },
      {
        role: "Asset management & prioritization engineers",
        why: "A substantial street and storm drain renewal backlog makes prioritization a central municipal function.",
      },
      {
        role: "Development review engineers",
        why: "Formal community planning review makes site and infrastructure review a structured, public process.",
      },
      {
        role: "Drainage & slope infrastructure engineers",
        why: "Canyon terrain makes storm drain, retaining and slope infrastructure unusually complex.",
      },
    ],
    licensure:
      "California licenses engineers through the Board for Professional Engineers, Land Surveyors and Geologists without straightforward comity, so an out-of-state PE faces California-specific examination requirements before sealing work. Municipal roles also require working knowledge of the state environmental review statute and, given local terrain, often the separate geotechnical authority.",
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    authority: "City of San Antonio Public Works Department",
    marketNote:
      "A recent voter-approved bond is funding street and drainage improvements across San Antonio, while SAWS extends water and sewer trunk lines to keep pace with growth along the city's northern and southern edges.",
    localPrograms: [
      "Bond-funded street & drainage program",
      "SAWS utility main extension coordination",
      "Site plan & plat review for growth corridors",
      "Complete streets & sidewalk program",
      "Library & recreation bond-funded projects",
    ],
    agencies: [
      "San Antonio Public Works Department",
      "San Antonio Water System",
      "Bexar County Public Works",
      "San Antonio Development Services Department",
      "Alamo Area Metropolitan Planning Organization",
      "City of New Braunfels Engineering",
    ],
    marketDetail: [
      "San Antonio is the largest American city run under a council and professional city manager arrangement, and it owns both its water utility and its electric utility. That concentration means municipal engineering, utility engineering and capital planning sit closer together here than in cities that depend on investor-owned utilities, and coordination between street work and utility work is an internal matter rather than a negotiation.",
      "Voter-approved bond programs fund much of the capital work on a recurring cycle, which gives the department a predictable rhythm of scoping, design and delivery. Aquifer recharge zone rules constrain development over a large part of the metro, so municipal review here includes a regulatory layer that does not exist in most Texas jurisdictions.",
    ],
    hiringFocus: [
      {
        role: "Capital program & bond delivery engineers",
        why: "Recurring voter-approved bond cycles create a predictable rhythm of scoping, design and delivery.",
      },
      {
        role: "Development review engineers with recharge zone knowledge",
        why: "Aquifer protection rules add a regulatory layer to review that most Texas jurisdictions lack.",
      },
      {
        role: "Drainage & flood control engineers",
        why: "Extreme rainfall intensity makes local drainage design and floodplain review consequential.",
      },
      {
        role: "Utility coordination engineers",
        why: "City ownership of water and electric utilities makes integrated street and utility delivery an internal function.",
      },
    ],
    licensure:
      "Texas licenses engineers through the Board of Professional Engineers and Land Surveyors, with comity on an NCEES record the usual individual route and separate registration required for firms serving local government. Municipal roles generally require the license, and familiarity with the aquifer protection plan requirements and the city's own design manual is expected alongside it.",
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    authority: "City of Austin Public Works Department",
    marketNote:
      "Austin's voter-approved mobility bond is funding major corridor construction citywide, and the Development Services Department is processing a record volume of site-plan and subdivision applications tied to tech-driven growth.",
    localPrograms: [
      "Mobility bond corridor construction program",
      "Site plan & subdivision review for tech-driven growth",
      "Austin Water main extension & capacity upgrades",
      "Complete streets & urban trail program",
      "Austin Parks & Recreation facility capital program",
    ],
    agencies: [
      "Austin Public Works Department",
      "Austin Water",
      "Austin Transportation and Public Works",
      "Austin Development Services Department",
      "Travis County Transportation and Natural Resources",
      "Capital Area Metropolitan Planning Organization",
    ],
    marketDetail: [
      "Austin has among the most prescriptive local development rules in Texas, covering water quality, impervious cover, tree protection and critical environmental features, and those rules are administered through a review process that is slower and more detailed than the state norm. Municipal review engineers here carry genuine regulatory authority, and their judgments shape what gets built more than in most Texas cities.",
      "The city also owns its water and electric utilities and runs a council and city manager government, so capital planning, utility extension and land use decisions are made within one organization. Growth has outrun infrastructure for years, which puts constant pressure on review timelines and on the capital program to catch up with development that has already happened.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Prescriptive local environmental rules give municipal reviewers real regulatory authority over what gets built.",
      },
      {
        role: "Capital program managers",
        why: "Infrastructure lagging behind growth puts sustained pressure on capital delivery capacity.",
      },
      {
        role: "Drainage & floodplain engineers",
        why: "Flash flood exposure on the region's creeks makes local floodplain regulation technically demanding.",
      },
      {
        role: "Utility planning engineers",
        why: "City ownership of water and electric utilities ties service extension directly to land use decisions.",
      },
    ],
    licensure:
      "Texas licenses engineers through the Board of Professional Engineers and Land Surveyors, with firm registration required separately for consultants serving local government. Municipal roles generally require the license, but the differentiator in Austin is practical familiarity with the city's watershed regulations and site development review, which is more prescriptive than anywhere else in the state.",
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    authority: "City of Jacksonville Public Works Department",
    marketNote:
      "Jacksonville's septic-to-sewer conversion program is tackling water-quality issues left by decades of unincorporated development, even as the city's broad geographic footprint keeps annexation-driven growth steady.",
    localPrograms: [
      "Septic-to-sewer conversion capital program",
      "Site plan review for annexation-driven growth",
      "Street resurfacing & drainage capital program",
      "Complete streets & sidewalk build-out program",
      "Community center & aquatic facility upgrades",
    ],
    agencies: [
      "Jacksonville Public Works Department",
      "JEA",
      "City of Jacksonville Planning and Development Department",
      "Jacksonville Transportation Authority",
      "St. Johns River Water Management District",
      "City of Jacksonville Beach Public Works",
    ],
    marketDetail: [
      "Jacksonville consolidated with its county decades ago and covers an exceptionally large land area, so one municipal organization is responsible for urban core streets, suburban subdivisions, rural roads and a coastline. That breadth makes the department's portfolio unusually varied and stretches maintenance obligations over far more centerline miles per resident than a compact city carries.",
      "Two programs dominate the capital agenda. Converting neighborhoods from septic systems onto public sewer is a long-running, expensive commitment driven by water quality, and drainage improvement in a low, flat city with a high water table is continuous. Both are delivered street by street in existing neighborhoods, which makes public communication and construction impact management part of the engineering job.",
    ],
    hiringFocus: [
      {
        role: "Capital projects engineers",
        why: "Septic conversion and drainage programs are delivered street by street across an enormous service area.",
      },
      {
        role: "Drainage & stormwater engineers",
        why: "Low elevation, flat terrain and a high water table make local drainage improvement continuous.",
      },
      {
        role: "Development review engineers",
        why: "A consolidated government reviews everything from urban infill to rural subdivision in one organization.",
      },
      {
        role: "Pavement & asset management engineers",
        why: "An exceptionally large street network per resident makes maintenance prioritization central.",
      },
    ],
    licensure:
      "Florida licenses engineers through the Board of Professional Engineers, with comity on an NCEES record the standard route. Municipal roles generally require the license, and local government engineers here are expected to know the Florida Building Code's wind provisions, the regional water management district's permitting, and state stormwater rules, all of which they administer or apply directly.",
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    authority: "City of Orlando Public Works Department",
    marketNote:
      "Orlando's lake-heavy topography drives an unusually active stormwater resiliency program, while tourism-corridor growth and steady residential development keep the city's site-plan review teams at full capacity.",
    localPrograms: [
      "Lake-basin stormwater resiliency program",
      "Tourism-corridor infrastructure capital projects",
      "Site plan review for rapid residential growth",
      "Complete streets & sidewalk investment program",
      "Recreation & aquatic facility capital projects",
    ],
    agencies: [
      "Orlando Public Works Department",
      "Orange County Public Works",
      "City of Orlando Transportation Engineering",
      "Central Florida Tourism Oversight District",
      "Osceola County Public Works",
      "Orlando Utilities Commission",
    ],
    marketDetail: [
      "Central Florida's municipal landscape includes something almost unique: a special district covering the main tourism area that has historically exercised many of the powers of a local government, including its own infrastructure standards and permitting. Alongside it sit a large county public works organization, several cities and a municipally owned utility, so which rules apply depends on precisely where a site sits.",
      "Growth is the constant. Subdivision and commercial review volumes are among the highest in the country, impact fee programs fund much of the infrastructure that follows, and utility and roadway extension has to be planned ahead of development rather than in response to it. Karst geology and a high water table make local drainage review technically demanding on every site.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Sustained growth keeps subdivision and commercial site review volume among the highest in the country.",
      },
      {
        role: "Stormwater & drainage review engineers",
        why: "Karst geology and a high water table make pond and conveyance review technically demanding.",
      },
      {
        role: "Capital & impact fee program engineers",
        why: "Growth-funded infrastructure requires programs planned and financed ahead of the development they serve.",
      },
      {
        role: "Roadway & mobility engineers",
        why: "Arterial capacity and connectivity have to be extended continuously across several jurisdictions.",
      },
    ],
    licensure:
      "Florida licenses engineers through the Board of Professional Engineers, with comity on an NCEES record the normal route. Municipal roles generally require the license, and because standards differ between the county, the cities and the special district, knowing which jurisdiction's manual governs a given site is essential working knowledge here.",
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    authority: "City of Pittsburgh Department of Mobility and Infrastructure (DOMI)",
    marketNote:
      "Pittsburgh's hillside terrain and hundreds of aging bridges and retaining walls drive a steady landslide-mitigation and structural capital program, while PWSA works through its own lead service line replacement effort.",
    localPrograms: [
      "PWSA lead service line replacement program",
      "Hillside stormwater & landslide mitigation projects",
      "Bridge & retaining wall capital program",
      "Complete streets & paving program",
      "Neighborhood park & rec-facility upgrades",
    ],
    agencies: [
      "Pittsburgh Department of Mobility and Infrastructure",
      "Allegheny County Department of Public Works",
      "Pittsburgh Water",
      "ALCOSAN",
      "Southwestern Pennsylvania Commission",
      "Pittsburgh Department of Permits, Licenses and Inspections",
    ],
    marketDetail: [
      "Allegheny County contains well over a hundred separate municipalities, most of them small, and each is responsible for its own streets, stormwater and sewage planning. That fragmentation creates a large number of part-time and shared municipal engineer appointments, usually held by consultants serving several boroughs at once, and it makes regional problems difficult to solve without councils of governments doing the coordination.",
      "Pennsylvania also requires municipalities to maintain official sewage facilities plans and to update them when development is proposed, which gives municipal engineers a statutory planning role that does not exist in most states. Combined with steep terrain, landslide-prone slopes and a regional wet weather program every municipality must contribute to, the local engineering agenda is unusually regulatory.",
    ],
    hiringFocus: [
      {
        role: "Municipal engineers serving multiple boroughs",
        why: "Extreme fragmentation creates many small appointments typically held by consultants covering several at once.",
      },
      {
        role: "Sewage facilities planning engineers",
        why: "State law requires official sewage plans and updates, giving municipal engineers a statutory planning duty.",
      },
      {
        role: "Stormwater program engineers",
        why: "Every municipality must contribute to a regional wet weather program through local ordinances and projects.",
      },
      {
        role: "Geotechnical & slope-aware municipal engineers",
        why: "Landslide-prone hillsides make slope stability a recurring municipal liability and design concern.",
      },
    ],
    licensure:
      "Pennsylvania licenses engineers through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity on an NCEES record the normal route. Municipal engineer appointments require the license, and familiarity with the state's sewage facilities planning process and municipalities planning code is what most distinguishes candidates for these roles.",
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    authority: "City of Cincinnati Department of Transportation and Engineering (DOTE)",
    marketNote:
      "MSD's Lick Run watershed project turned a piped urban creek into daylighted green infrastructure, a nationally recognized model for controlling combined sewer overflow that continues to expand across the city.",
    localPrograms: [
      "Greater Cincinnati MSD consent-decree overflow program",
      "Lick Run watershed green-infrastructure project",
      "Street reconstruction & paving capital program",
      "Site plan & subdivision review for urban infill",
      "Park & recreation center renovation program",
    ],
    agencies: [
      "Cincinnati Department of Transportation and Engineering",
      "Hamilton County Engineer",
      "Metropolitan Sewer District of Greater Cincinnati",
      "Cincinnati Buildings and Inspections",
      "Ohio-Kentucky-Indiana Regional Council of Governments",
      "Cincinnati Stormwater Management Utility",
    ],
    marketDetail: [
      "Hamilton County is divided among dozens of separate political subdivisions, and Ohio's elected county engineer holds statutory responsibility for roads and bridges outside the municipalities. That combination produces a distinctive institutional map: a large city department, a statutory county office and many small village and township organizations, all with their own standards and all hiring from the same regional pool.",
      "Hillside terrain gives municipal engineering here a liability dimension that flatter cities do not face. Landslides affect public streets and private property alike, retaining structures are part of the ordinary street inventory, and slope stability is a recurring call on the capital budget. The regional sewer program adds obligations that individual municipalities have to meet through local work.",
    ],
    hiringFocus: [
      {
        role: "Municipal & township engineers",
        why: "Dozens of separate subdivisions each need engineering support and hire from the same regional pool.",
      },
      {
        role: "Geotechnical & slope-aware municipal engineers",
        why: "Landslide risk affecting public streets makes slope stability a recurring municipal responsibility.",
      },
      {
        role: "County highway & bridge engineers",
        why: "Ohio's statutory county engineer office carries road and bridge responsibility outside municipalities.",
      },
      {
        role: "Stormwater program engineers",
        why: "Regional sewer obligations have to be met through local ordinances and municipal projects.",
      },
    ],
    licensure:
      "Ohio licenses engineers through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route. The elected county engineer position is statutory and requires registration as both a professional engineer and a professional surveyor in Ohio, an unusual dual requirement that materially limits who is eligible.",
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    authority: "City of Cleveland Department of Public Works",
    marketNote:
      "Cleveland's Complete and Green Streets policy is reshaping corridor design citywide, while Cleveland Water works through an aging distribution network that serves much of Northeast Ohio beyond the city limits.",
    localPrograms: [
      "Complete and Green Streets implementation",
      "Cleveland Water main replacement program",
      "Site plan review for lakefront redevelopment",
      "Bridge & culvert rehabilitation program",
      "Cleveland lakefront park & marina upgrades",
    ],
    agencies: [
      "Cleveland Department of Public Works",
      "Cuyahoga County Department of Public Works",
      "Northeast Ohio Regional Sewer District",
      "City of Cleveland Division of Engineering and Construction",
      "Northeast Ohio Areawide Coordinating Agency",
      "Cuyahoga County Engineer",
    ],
    marketDetail: [
      "Cuyahoga County is divided among dozens of separate municipalities, and many of them serve fewer residents than the infrastructure they inherited was built for. That gives municipal engineering here an unusual character: the central question is often how to maintain, consolidate or decommission assets sized for a larger population rather than how to extend the network.",
      "The climate compounds it. Freeze-thaw and heavy salt use destroy pavements, joints and buried pipe faster than in milder regions, and the construction season is short, so maintenance programs have to be prioritized carefully against a narrow annual window. A regional sewer district sets stormwater and wet weather obligations that each community has to deliver locally.",
    ],
    hiringFocus: [
      {
        role: "Asset management & right-sizing engineers",
        why: "Infrastructure built for a larger population makes maintenance, consolidation and decommissioning the core question.",
      },
      {
        role: "Municipal & city engineers",
        why: "Many separate communities each need engineering leadership and draw from the same regional pool.",
      },
      {
        role: "Pavement & maintenance program engineers",
        why: "Freeze-thaw damage and a short season make prioritization within a narrow annual window critical.",
      },
      {
        role: "Stormwater program engineers",
        why: "Regional wet weather obligations must be delivered through local ordinances and community projects.",
      },
    ],
    licensure:
      "Ohio licenses engineers through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route. The statutory county engineer role requires dual registration as a professional engineer and professional surveyor, and municipal positions generally require the engineering license plus familiarity with Ohio EPA plan approval for water and sewer works.",
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    authority: "City of St. Louis Street Department",
    marketNote:
      "MSD's Project Clear consent-decree program is a multi-billion-dollar, multi-decade capital effort to eliminate sewer overflows across the metro, running alongside redevelopment-driven site-plan review near the Cortex innovation district.",
    localPrograms: [
      "Project Clear consent-decree sewer program",
      "Street & sidewalk capital reconstruction program",
      "Cortex-district site plan review",
      "Complete streets & bikeway expansion",
      "Recreation facility renovation & ADA upgrades",
    ],
    agencies: [
      "City of St. Louis Board of Public Service",
      "St. Louis County Department of Transportation",
      "Metropolitan St. Louis Sewer District",
      "St. Louis City Street Department",
      "East-West Gateway Council of Governments",
      "St. Charles County Highway Department",
    ],
    marketDetail: [
      "St. Louis City separated from St. Louis County more than a century ago and has been independent of it ever since, while the county itself is divided among dozens of separate municipalities, many of them small. The result is one of the most fragmented local government landscapes in the country: a city with no county above it, and a county full of towns each running or contracting its own engineering function.",
      "The infrastructure question is not growth but decline. Streets, sewers and water mains were built for a considerably larger population, and much of the municipal engineering agenda is about maintaining, consolidating or retiring assets rather than extending them. A single regional sewer district covering city and county provides the one genuinely unified piece of the picture.",
    ],
    hiringFocus: [
      {
        role: "Municipal & city engineers",
        why: "A county divided among dozens of small municipalities creates many separate engineering appointments.",
      },
      {
        role: "Asset management & consolidation engineers",
        why: "Infrastructure built for a larger population makes maintenance and retirement decisions the core agenda.",
      },
      {
        role: "Stormwater program engineers",
        why: "Regional sewer obligations have to be delivered through local ordinances and municipal projects.",
      },
      {
        role: "Development review engineers",
        why: "Growth in the outer counties sustains subdivision and site plan review volume there.",
      },
    ],
    licensure:
      "Missouri licenses engineers through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects, with comity on an NCEES record the usual route and corporate authorization required for firms serving local government. Because the metro extends into Illinois, engineers working the full region often hold both registrations.",
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    authority: "City of Raleigh Engineering Services Department",
    marketNote:
      "As one of the fastest-growing cities in the Research Triangle, Raleigh's Engineering Services team is managing a record backlog of subdivision and site-plan applications alongside a steadily expanding public-utilities capacity program.",
    localPrograms: [
      "Research Triangle growth-driven site plan review",
      "Public utilities capacity expansion program",
      "Sidewalk gap-closure & complete streets program",
      "Stormwater capital improvement program",
      "Greenway & park capital improvement program",
    ],
    agencies: [
      "Raleigh Engineering Services Department",
      "Wake County",
      "Town of Cary Engineering",
      "Town of Apex Engineering",
      "NCDOT Division 5",
      "Capital Area Metropolitan Planning Organization",
    ],
    marketDetail: [
      "North Carolina is unusual in that the state maintains nearly all roads outside municipal limits rather than leaving them to counties, so county government here has no highway department in the sense most states would recognize. Municipal engineering is concentrated in the towns and cities, which maintain the streets inside their own limits and absorb new ones as they annex or as subdivisions are accepted.",
      "That structure meets extraordinary growth. Towns around Raleigh have gone from small to substantial within a generation, building engineering departments from very little while reviewing subdivision and site plans at a rate that outpaces their staffing. Reservoir nutrient rules add measurable stormwater obligations to every one of those reviews, giving local engineers real regulatory authority.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "Towns are reviewing subdivision and site plans at volumes far beyond their historic staffing.",
      },
      {
        role: "Town & city engineers",
        why: "Rapidly grown municipalities are building engineering departments and competing for the same people.",
      },
      {
        role: "Stormwater program engineers",
        why: "Reservoir nutrient rules give local stormwater review measurable targets and regulatory weight.",
      },
      {
        role: "Capital projects engineers",
        why: "Infrastructure and facilities have to be delivered on the schedule growth sets rather than the town's own.",
      },
    ],
    licensure:
      "North Carolina licenses engineers through the Board of Examiners for Engineers and Surveyors, with comity on an NCEES record the usual individual route, and the state licenses firms separately. Municipal roles require the license, and because the state maintains roads outside municipal limits, local engineers deal with NCDOT encroachment and acceptance processes constantly.",
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    authority: "District Department of Transportation (DDOT)",
    marketNote:
      "DC Water's Clean Rivers Project, a tunnel-based combined sewer overflow control system, is one of the largest environmental infrastructure programs in the country and runs for another decade alongside DDOT's streetscape work.",
    localPrograms: [
      "DC Clean Rivers combined sewer tunnel program",
      "Vision Zero complete streets & signal upgrades",
      "Site plan review for federal-adjacent development",
      "Streetscape & sidewalk capital program",
      "Recreation & municipal facility capital program",
    ],
    agencies: [
      "District Department of Transportation",
      "DC Water",
      "DC Department of Energy and Environment",
      "DC Department of Buildings",
      "Advisory Neighborhood Commissions",
      "Metropolitan Washington Council of Governments",
    ],
    marketDetail: [
      "The District is simultaneously a city and its own state transportation department, receiving federal highway funds and administering them itself with no state layer above and no county layer below. That gives its transportation agency an unusual combination of responsibilities, from residential alley reconstruction through to federal-aid highway projects, all in one organization.",
      "Neighborhood commissions elected at very small scale have a formal advisory role in local decisions, so municipal engineers present and defend proposals to them routinely. Add federal land ownership across much of the street and park network and a regional council coordinating across three jurisdictions, and public process and interagency negotiation take up more of the job here than almost anywhere else.",
    ],
    hiringFocus: [
      {
        role: "Federal-aid program engineers",
        why: "The District administers federal highway funds itself, combining state and city transportation functions.",
      },
      {
        role: "Public engagement-capable municipal engineers",
        why: "Formally constituted neighborhood commissions require proposals to be presented and defended routinely.",
      },
      {
        role: "Capital projects engineers",
        why: "One organization delivers everything from alley reconstruction to federal-aid highway work.",
      },
      {
        role: "Interagency coordination engineers",
        why: "Federal land ownership and a three-jurisdiction region make negotiation a standing part of delivery.",
      },
    ],
    licensure:
      "The District licenses engineers through its Board of Professional Engineering, with comity on an NCEES record the normal route, and engineers working the wider region commonly hold Maryland and Virginia registration too. Municipal roles generally require the license, and federal-aid program administration adds its own procedural requirements independent of licensure.",
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    authority: "City of Hartford Department of Public Works",
    marketNote:
      "The Metropolitan District Commission's regional sewer separation program is replacing decades-old combined infrastructure beneath Hartford, even as the city pushes a downtown-revitalization streetscape effort.",
    localPrograms: [
      "MDC sewer separation capital program",
      "Downtown Hartford streetscape & revitalization program",
      "Street & sidewalk reconstruction program",
      "Water main replacement coordination",
      "Municipal building & park renovation program",
    ],
    agencies: [
      "Hartford Department of Public Works",
      "Metropolitan District Commission",
      "Capitol Region Council of Governments",
      "Town of West Hartford Engineering",
      "Connecticut Department of Transportation",
      "Connecticut Department of Energy and Environmental Protection",
    ],
    marketDetail: [
      "Connecticut abolished county government decades ago, so there is no layer between the state and its towns. Every municipality, however small, is responsible for its own roads, drainage, land use review and capital facilities, and regional councils of governments provide whatever coordination exists. That produces a large number of town engineer positions and a strong reliance on consultants serving several towns each.",
      "The infrastructure is old and the population is not growing, so the agenda is renewal rather than extension. Streets, drainage and buried utilities laid generations ago are failing together under freeze-thaw, a regional water authority handles water and sewer for many communities, and towns compete for the same limited state and federal funding to address backlogs they cannot fund locally.",
    ],
    hiringFocus: [
      {
        role: "Town engineers",
        why: "With no county layer, every municipality carries full engineering responsibility regardless of size.",
      },
      {
        role: "Asset renewal & funding-application engineers",
        why: "Aging infrastructure and limited local funding make grant-ready project development a core skill.",
      },
      {
        role: "Drainage & stormwater engineers",
        why: "Freeze-thaw damage and permit obligations make local drainage renewal a continuing program.",
      },
      {
        role: "Development review engineers",
        why: "Municipal land use review sits entirely with the towns, each applying its own regulations.",
      },
    ],
    licensure:
      "Connecticut licenses engineers through the State Board of Examiners for Professional Engineers and Land Surveyors within the Department of Consumer Protection, with comity on an NCEES record the standard route. Town engineer roles require the license, and because the state is small, engineers serving multiple municipalities frequently hold Massachusetts or Rhode Island registration as well.",
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    authority: "City of Albuquerque Municipal Development Department",
    marketNote:
      "Albuquerque's arroyo-fed flash-flood risk keeps the city's flood-control capital program unusually active, while aging water and sewer mains across the older core continue a steady replacement cycle.",
    localPrograms: [
      "Arroyo flood-control capital improvement program",
      "Water/sewer main replacement program",
      "Site plan & subdivision review for desert-edge growth",
      "Complete streets & multimodal corridor upgrades",
      "Community center & senior-center upgrades",
    ],
    agencies: [
      "City of Albuquerque Municipal Development Department",
      "Albuquerque Metropolitan Arroyo Flood Control Authority",
      "Albuquerque Bernalillo County Water Utility Authority",
      "Bernalillo County Public Works",
      "Mid-Region Council of Governments",
      "City of Rio Rancho Public Works",
    ],
    marketDetail: [
      "Albuquerque has moved several municipal functions into joint or regional bodies rather than keeping them inside the city. Water and sewer are run by an authority governed jointly by the city and county, and drainage is the responsibility of a separate regional flood control authority with its own board, staff, criteria and funding. A municipal engineer here therefore works across institutions rather than within one department.",
      "The physical setting shapes the rest. Development spreads onto mesa land where arroyos have to be crossed or contained, water availability constrains where growth can be served at all, and long-standing land and water tenure arrangements in parts of New Mexico add a legal dimension to infrastructure projects that engineers arriving from other states do not expect.",
    ],
    hiringFocus: [
      {
        role: "Drainage & arroyo engineers",
        why: "A separate regional flood control authority with its own criteria makes local drainage a distinct discipline.",
      },
      {
        role: "Municipal capital projects engineers",
        why: "Delivery spans city, county and joint authorities rather than sitting within a single department.",
      },
      {
        role: "Development review engineers",
        why: "Growth onto mesa land requires review of arroyo crossings, grading and service availability.",
      },
      {
        role: "Water service planning engineers",
        why: "Supply constraint makes whether growth can be served a threshold question for municipal review.",
      },
    ],
    licensure:
      "New Mexico licenses engineers through the State Board of Licensure for Professional Engineers and Professional Surveyors, and firms serving local government must register with the board as well. Municipal roles require the license, and the regional flood control authority and water utility authority each publish their own design criteria that engineers are expected to know alongside the city's.",
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    authority: "City of Birmingham Department of Transportation",
    marketNote:
      "A downtown revitalization push is driving new streetscape and public-realm investment in Birmingham, layered on top of a citywide street resurfacing program and Birmingham Water Works' main-replacement schedule.",
    localPrograms: [
      "Downtown revitalization streetscape program",
      "Street resurfacing capital improvement program",
      "Site plan review for redevelopment corridors",
      "Birmingham Water Works main replacement coordination",
      "Streetscape-adjacent park & facility upgrades",
    ],
    agencies: [
      "Birmingham Department of Transportation",
      "Jefferson County Roads and Transportation",
      "Jefferson County Department of Environmental Services",
      "Birmingham Planning, Engineering and Permits",
      "Regional Planning Commission of Greater Birmingham",
      "City of Hoover Engineering",
    ],
    marketDetail: [
      "Alabama grants its local governments comparatively limited home rule, so municipalities often need state legislative authorization for actions that would be routine elsewhere, including certain taxes and fees. That constrains how local infrastructure gets funded and makes municipal engineers unusually dependent on grant programs and county arrangements rather than on locally raised revenue.",
      "The county's sewer debt legacy has left an enduring caution about large capital commitments, which pushes the region toward rehabilitation and incremental improvement. Jefferson County is divided among dozens of separate municipalities of very different sizes, each with its own standards, and hillside terrain with karst below makes local drainage, slope and excavation questions harder than the metro's size suggests.",
    ],
    hiringFocus: [
      {
        role: "Municipal engineers",
        why: "Dozens of separate municipalities of varying size each require engineering support and standards.",
      },
      {
        role: "Grant-funded capital program engineers",
        why: "Limited local revenue authority makes grant development and administration a core municipal skill.",
      },
      {
        role: "Stormwater & drainage engineers",
        why: "Hillside terrain over karst makes local drainage and slope questions technically demanding.",
      },
      {
        role: "Asset rehabilitation engineers",
        why: "Caution about large capital commitments favors incremental rehabilitation over replacement.",
      },
    ],
    licensure:
      "Alabama licenses engineers through the Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the standard individual route and a certificate of authorization required for firms serving local government. Municipal roles require the license, and familiarity with the state's limits on local fiscal authority is practical knowledge for anyone managing a capital program here.",
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    authority: "City of Memphis Division of Public Works",
    marketNote:
      "Accelerate Memphis, the city's aggressive paving initiative, is repairing thousands of lane-miles of deteriorated streets while Memphis works through a federally mandated sanitary sewer overflow consent decree.",
    localPrograms: [
      "Accelerate Memphis paving capital program",
      "Sanitary sewer overflow consent-decree program",
      "Site plan & subdivision review for warehouse-corridor growth",
      "Complete streets & sidewalk repair program",
      "Memphis park & recreation facility renovations",
    ],
    agencies: [
      "City of Memphis Division of Public Works",
      "Shelby County Department of Public Works",
      "Memphis Light, Gas and Water",
      "Memphis and Shelby County Division of Planning and Development",
      "Memphis Urban Area Metropolitan Planning Organization",
      "City of Germantown Engineering",
    ],
    marketDetail: [
      "Memphis owns a utility that provides electricity, natural gas and water together, which almost no other American city does. That puts three networks under one municipal organization and makes coordination between street work and utility work an internal matter, while giving the city an unusual degree of control over service extension and, with it, over where growth can practically be served.",
      "The city has also reversed direction on its boundary, releasing outlying areas rather than annexing, which is rare and has real engineering consequences: deciding what infrastructure to retain, transfer or abandon, and how to serve a footprint that shrank. Flat terrain and a high water table make local drainage a continuing problem, and suburban municipalities in the county run their own departments.",
    ],
    hiringFocus: [
      {
        role: "Municipal utility coordination engineers",
        why: "City ownership of electric, gas and water together makes integrated street and utility delivery an internal function.",
      },
      {
        role: "Asset management & transition engineers",
        why: "A shrinking municipal footprint requires decisions about retaining, transferring or abandoning infrastructure.",
      },
      {
        role: "Drainage & stormwater engineers",
        why: "Flat terrain with a high water table makes local drainage a continuing municipal problem.",
      },
      {
        role: "City engineers for suburban municipalities",
        why: "Separate municipalities in the county each run their own engineering departments and standards.",
      },
    ],
    licensure:
      "Tennessee licenses engineers through the Board of Architectural and Engineering Examiners within the Department of Commerce and Insurance, with comity on an NCEES record the usual route. Municipal roles require the license, and because the metro reaches into Mississippi and Arkansas, engineers serving the wider region frequently hold more than one registration.",
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    authority: "City of Omaha Public Works Department",
    marketNote:
      "Omaha is under a federal mandate to eliminate combined sewer overflows into the Missouri River, one of the largest capital undertakings in the city's history, running alongside a steady suburban-growth subdivision workload.",
    localPrograms: [
      "Combined sewer overflow federal-mandate program",
      "Street & arterial capital improvement program",
      "Site plan & subdivision review for suburban growth",
      "Complete streets & trail connectivity program",
      "Riverfront park & recreation facility upgrades",
    ],
    agencies: [
      "Omaha Public Works Department",
      "Douglas County Engineer",
      "Metropolitan Utilities District",
      "Papio-Missouri River Natural Resources District",
      "Metropolitan Area Planning Agency",
      "City of Bellevue Public Works",
    ],
    marketDetail: [
      "Nebraska lets developers form sanitary and improvement districts to finance and build infrastructure in unincorporated areas, which are later annexed by the city. That mechanism shapes municipal engineering across this metro: a great deal of street, sewer and water infrastructure is built to district standards by private developers and inspected, accepted and eventually absorbed by the city, so review and acceptance carry long-term consequences.",
      "Alongside that, the city's combined sewer overflow obligations are unusually large relative to its ratepayer base, which has made affordability an explicit constraint on municipal capital planning. A natural resources district handles regional flood risk and watershed work, adding another institution municipal engineers coordinate with rather than command.",
    ],
    hiringFocus: [
      {
        role: "Development review & acceptance engineers",
        why: "Infrastructure built by improvement districts is later absorbed by the city, making review consequential long term.",
      },
      {
        role: "Capital program & affordability-focused engineers",
        why: "A large sewer obligation on a modest ratepayer base makes cost an explicit planning constraint.",
      },
      {
        role: "Stormwater & watershed engineers",
        why: "Regional flood risk work sits with a natural resources district requiring continuous coordination.",
      },
      {
        role: "Municipal engineers",
        why: "Separate municipalities across the metro each run their own engineering and review functions.",
      },
    ],
    licensure:
      "Nebraska licenses engineers through the Board of Engineers and Architects, with comity on an NCEES record the usual individual route and a certificate of authorization required for firms serving local government. Municipal roles require the license, and familiarity with the sanitary and improvement district mechanism is essential local knowledge for anyone doing review or acceptance work here.",
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    authority: "City of Boise Public Works Department",
    marketNote:
      "Rapid in-migration has pushed Boise's subdivision and site-plan review workload to record levels, while the city expands its water-renewal and reuse infrastructure to keep pace with growth in a water-limited region.",
    localPrograms: [
      "Water renewal & reuse infrastructure expansion",
      "Rapid-growth subdivision & site plan review",
      "Street & sidewalk capital improvement program",
      "Complete streets & multimodal trail projects",
      "Greenbelt & municipal facility capital projects",
    ],
    agencies: [
      "City of Boise Public Works",
      "Ada County Highway District",
      "City of Meridian Public Works",
      "Boise Planning and Development Services",
      "Community Planning Association of Southwest Idaho",
      "Idaho Department of Environmental Quality",
    ],
    marketDetail: [
      "The defining fact of municipal engineering in this valley is that the cities do not own their streets. A single countywide highway district holds, designs, builds and maintains essentially all local roads across the metro, while the cities retain water, sewer, planning and land use. That division is almost unique in the United States and it means every development project is reviewed by two separate organizations with separate standards.",
      "Growth makes that split consequential. Development review volume is high and sustained, and coordinating a subdivision's streets with its utilities means aligning two agencies' requirements and schedules. The irrigation canal network running through developing land adds a third set of interests, since the districts operating it have rights that predate the suburbs.",
    ],
    hiringFocus: [
      {
        role: "Development review engineers",
        why: "High growth plus a split between street and utility authorities makes review coordination a constant task.",
      },
      {
        role: "City engineers for water & sewer",
        why: "Cities retain utilities while streets sit elsewhere, concentrating municipal engineering on buried infrastructure.",
      },
      {
        role: "Roadway engineers at the highway district",
        why: "A single countywide authority designs and builds all local roads, concentrating that work in one organization.",
      },
      {
        role: "Irrigation coordination engineers",
        why: "Canal districts hold rights predating development and must be engineered around in every project.",
      },
    ],
    licensure:
      "Idaho licenses engineers through the Board of Licensure of Professional Engineers and Professional Land Surveyors, with comity on an NCEES record the normal individual route and a certificate of authorization required for firms. Municipal roles require the license, and knowing which of the city or the highway district governs a given element is the first piece of local knowledge anyone needs here.",
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    authority: "City of Providence Department of Public Works",
    marketNote:
      "The Narragansett Bay Commission's combined sewer overflow abatement program is one of the largest environmental infrastructure efforts in Rhode Island, running alongside Providence's downtown and waterfront streetscape revitalization.",
    localPrograms: [
      "Narragansett Bay Commission CSO abatement program",
      "Downtown streetscape revitalization program",
      "Site plan review for downtown & waterfront redevelopment",
      "Street resurfacing & sidewalk reconstruction program",
      "Narragansett waterfront recreation facility projects",
    ],
    agencies: [
      "Providence Department of Public Works",
      "Narragansett Bay Commission",
      "Rhode Island Department of Transportation",
      "Providence Water Supply Board",
      "Rhode Island Department of Environmental Management",
      "City of Warwick Department of Public Works",
    ],
    marketDetail: [
      "Rhode Island has no county government at all, so its cities and towns carry every local function themselves with the state directly above them. In a state this small that produces an unusually flat institutional structure: municipalities deal with state agencies directly, and regional functions such as wastewater treatment and water supply are handled by separate authorities rather than by a county.",
      "The infrastructure is old and the tax base is limited. Streets, drainage and buried utilities date from an industrial era that has passed, mill buildings are being converted to new uses with utility demands their neighborhoods were not built for, and coastal exposure adds flooding and storm surge to the local agenda. Grant and state revolving fund applications are a routine part of getting anything built.",
    ],
    hiringFocus: [
      {
        role: "Municipal engineers",
        why: "With no county layer, every city and town carries full engineering responsibility directly.",
      },
      {
        role: "Asset renewal & funding-application engineers",
        why: "Old infrastructure and a limited tax base make grant-ready project development a core competence.",
      },
      {
        role: "Drainage & coastal flooding engineers",
        why: "Coastal exposure adds surge and flooding to an already heavy drainage renewal agenda.",
      },
      {
        role: "Development review engineers",
        why: "Mill conversion brings utility and access demands the surrounding neighborhoods were never designed for.",
      },
    ],
    licensure:
      "Rhode Island licenses engineers through the Board of Registration for Professional Engineers, with comity on an NCEES record the standard route, and most engineers working the wider market also hold Massachusetts or Connecticut registration. Municipal roles require the license, and the state's coastal management council adds a permitting body local engineers deal with directly.",
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    authority: "City of Buffalo Department of Public Works",
    marketNote:
      "Buffalo's Rain Check green-infrastructure program is a nationally cited model for reducing combined sewer overflow, and it runs alongside a broader waterfront and downtown revitalization capital push.",
    localPrograms: [
      "Rain Check green stormwater infrastructure program",
      "Waterfront revitalization capital projects",
      "Buffalo street reconstruction & paving program",
      "Site plan review for infill redevelopment",
      "Waterfront & downtown facility renovation projects",
    ],
    agencies: [
      "City of Buffalo Department of Public Works",
      "Erie County Department of Public Works",
      "Buffalo Sewer Authority",
      "Greater Buffalo Niagara Regional Transportation Council",
      "Town of Amherst Engineering",
      "New York State Department of Environmental Conservation",
    ],
    marketDetail: [
      "Erie County is divided into a city, many towns and villages within those towns, each an independent government with its own highway and engineering responsibilities. New York's structure means a village and the town surrounding it both maintain roads, so coordination between overlapping jurisdictions is a routine feature of municipal work here rather than an exception.",
      "The central engineering problem is infrastructure sized for a larger population in a climate that destroys it quickly. Lake-effect snow, heavy salt use and a long freeze-thaw season shorten the life of pavements and buried pipe, the construction season is short, and municipalities are maintaining networks built when the region held considerably more people. Prioritization and asset management therefore dominate capital planning.",
    ],
    hiringFocus: [
      {
        role: "Asset management & prioritization engineers",
        why: "Networks built for a larger population in a destructive climate make prioritization the central capital question.",
      },
      {
        role: "Municipal & town engineers",
        why: "Overlapping towns and villages each carry independent highway and engineering responsibilities.",
      },
      {
        role: "Stormwater program engineers",
        why: "Regional overflow obligations and state permitting are delivered through local ordinances and projects.",
      },
      {
        role: "Pavement & maintenance program engineers",
        why: "A short season and severe freeze-thaw damage make maintenance scheduling and materials choices critical.",
      },
    ],
    licensure:
      "New York licenses engineers through the State Education Department's Office of the Professions, and most out-of-state PEs transfer by comity on an NCEES record. Municipal roles require the license, and local government engineers here administer state stormwater permitting and deal with the Department of Environmental Conservation's approval processes as a routine part of the job.",
  },
];

export function getMunicipalCity(slug: string): MunicipalCity | undefined {
  return MUNICIPAL_CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every Municipal Engineering city page ──────────

export const MUNICIPAL_EXPERTISE = [
  "Municipal Infrastructure Design (roads, water, sewer)",
  "Site / Civil Development Engineering",
  "Public Works & Capital Improvement Planning",
  "Municipal Utility Engineering",
  "Parks, Facilities & Municipal Buildings",
  "Land Development & Subdivision Review",
  "Municipal Stormwater & Drainage Compliance",
  "Grant-Funded Infrastructure Programs (SRF, ARPA, CDBG)",
];

export const MUNICIPAL_SKILLS = [
  "AutoCAD Civil 3D",
  "Bentley OpenRoads / MicroStation",
  "ArcGIS / municipal GIS systems",
  "Municipal permitting software (Accela, eBuilder, Tyler Technologies)",
  "Cityworks / Lucity (asset management)",
  "HEC-RAS / stormwater modeling",
  "Bluebeam Revu",
  "Professional Engineer (PE) license",
  "APWA Certified Public Infrastructure Inspector (CPII)",
  "Municipal code & zoning fluency",
  "Grant/funding compliance (SRF, CDBG, ARPA)",
  "Public bidding & procurement processes",
  "Capital improvement plan (CIP) development",
  "MS4 stormwater permit compliance",
  "ADA / PROWAG right-of-way accessibility compliance",
  "MUTCD traffic engineering standards",
  "OSHA 10/30-Hour",
  "Utility coordination & easement research",
  "Public infrastructure asset lifecycle management",
  "Council / board presentation & public engagement",
];

export const MUNICIPAL_ROLES = [
  "Municipal Engineer (PE)",
  "City / Town Engineer",
  "Public Works Director",
  "Site / Civil Development Engineer",
  "Capital Projects Engineer",
  "Municipal Utilities Engineer",
  "Land Development Review Engineer",
  "Assistant City Engineer",
  "Municipal Project Manager",
  "Director of Public Works / Engineering",
];

export const MUNICIPAL_SALARIES = [
  { role: "Engineering Technician / Public Works Inspector", range: "$52,000 – $72,000" },
  { role: "Municipal Engineer (EIT)", range: "$65,000 – $88,000" },
  { role: "Stormwater / MS4 Program Engineer", range: "$85,000 – $120,000" },
  { role: "Assistant City Engineer", range: "$95,000 – $132,000" },
  { role: "Licensed PE / City Engineer (Mid-Level)", range: "$98,000 – $140,000" },
  { role: "Capital Improvement Program Manager", range: "$110,000 – $150,000" },
  { role: "Public Works Director", range: "$135,000 – $175,000+" },
  { role: "Director of Engineering (Municipality)", range: "$160,000 – $210,000+" },
];

export const MUNICIPAL_WHY = [
  { title: "National Talent Pipeline", body: "Access to a vast database of 50,000+ pre-vetted engineering professionals." },
  { title: "Multi-State Licensing Expertise", body: "We understand NCEES comity and the complexities of multi-state PE licensure." },
  { title: "Passive Candidate Acquisition", body: "Our recruiters reach high-performers who are not actively on job boards." },
  { title: "Scalable Staffing Solutions", body: "From a single city engineer to an entire public works department build-out." },
  { title: "Public-Sector Process Fluency", body: "Fluency in municipal procurement, capital-plan funding cycles, and grant-compliant hiring timelines." },
];
