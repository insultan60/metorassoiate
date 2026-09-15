// City landing-page data for the programmatic "Civil Engineering Recruiter — {City}"
// pages. Each city carries genuinely city-specific copy (market note + local
// programs) so the pages are not thin/duplicate content. Shared content (roles,
// salaries, expertise) lives below and is reused across every city.

export interface City {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  dot: string; // state DOT shorthand referenced in the copy
  marketNote: string; // unique subhead / intro sentence for this metro
  localPrograms: string[]; // city/state-specific infrastructure programs

  /* Deep-market fields — the difference between a page about a city and a
     template with the city's name substituted in.
     
     Every city page shares roughly 700 words of framing; before these
     existed, only ~380 words differed between one metro and the next, which
     is the profile Google files under "Crawled - currently not indexed".
     These four carry the part that is genuinely about the place: who lets
     the work, what the engineering actually consists of there, what firms
     are short of, and what it takes to be allowed to sign or bid.

     All optional. A city without them renders exactly as before, so the set
     can be filled in market by market instead of all fifty at once. Written
     to stay true: named public owners and durable program characteristics,
     no dates, no dollar figures, no claims about who is hiring this quarter. */

  /** Public owners that actually let the work in this metro. */
  agencies?: string[];
  /** Two paragraphs on what the engineering here consists of. */
  marketDetail?: string[];
  /** What firms are short of, and the local reason why. */
  hiringFocus?: { role: string; why: string }[];
  /** Licensure and prequalification as they bite in this state. */
  licensure?: string;
}

export const CITIES: City[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    dot: "NYSDOT",
    marketNote:
      "From the five boroughs to the Hudson Valley, we place licensed civil and transportation engineers on the bridge, transit, and resiliency programs reshaping the New York metro.",
    localPrograms: [
      "NYSDOT & NYCDOT bridge and roadway programs",
      "MTA transit capital and station modernization",
      "Gateway Program & Hudson River tunnel works",
      "Coastal storm-risk and resiliency infrastructure",
      "JFK & LaGuardia airport redevelopment",
    ],
    agencies: [
      "NYSDOT Region 11",
      "NYC DOT",
      "MTA Construction & Development",
      "Port Authority of NY & NJ",
      "NYC DEP",
      "NYC DDC",
    ],
    marketDetail: [
      "New York is a rehabilitation market before it is a greenfield one. Engineers here spend their careers on assets that already exist, East River crossings, elevated highway structures, a water and sewer network a century old in places, and a subway that has to keep carrying passengers while it is rebuilt around them. That shapes who gets hired: staging, maintenance of traffic and constructability judgement are worth as much as design throughput, because almost nothing is built on an empty site.",
      "The second driver is water. Combined-sewer overflow obligations, shoreline protection along the coast, and the upstate supply system keep hydraulic and resiliency engineers in demand on a cycle of their own, independent of whatever the highway program is doing in a given year.",
    ],
    hiringFocus: [
      { role: "Bridge rehabilitation & inspection engineers", why: "The metro's river crossings and elevated structures run a continuous inspection and repair cycle, so NBIS-qualified team leaders rarely reach the open market." },
      { role: "Construction-phase and resident engineers", why: "Work is built under live traffic and around running transit, which puts a premium on engineers who can sequence staging rather than only design the end state." },
      { role: "Drainage & coastal resiliency engineers", why: "Combined-sewer programs and shoreline protection have made hydraulics a standing line item here rather than a project-by-project need." },
      { role: "Transit and rail structural engineers", why: "Station reconstruction and tunnel work need people comfortable assessing existing conditions and designing phased interventions into them." },
    ],
    licensure:
      "New York licenses engineers through the State Education Department's Office of the Professions, and most out-of-state PEs transfer by comity on an NCEES record rather than by re-examination. The gate that bites harder in practice is agency prequalification: NYSDOT, the MTA and the city agencies each run their own approved-consultant arrangements, so which agencies a candidate has actually worked under often matters more to a hiring manager than the license itself.",
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    dot: "Caltrans",
    marketNote:
      "Across the LA basin and Southern California, we connect firms with PEs and project leads driving freeway, transit, and water-supply programs at metro scale.",
    localPrograms: [
      "Caltrans District 7 highway & interchange projects",
      "LA Metro rail and transit expansion",
      "Water recycling & groundwater replenishment",
      "Seismic retrofit and bridge rehabilitation",
      "LAX modernization and automated people-mover works",
    ],
    agencies: [
      "Caltrans District 7",
      "LA Metro",
      "LADOT",
      "LA Bureau of Engineering",
      "LADWP",
      "LA County Public Works",
      "Los Angeles World Airports",
    ],
    marketDetail: [
      "Seismic design is the constant in Southern California. Retrofit and performance-based assessment run underneath almost everything structural here, and an engineer who has only designed for gravity and wind elsewhere has real ground to make up. It is also why the retrofit backlog on bridges and older buildings keeps structural demand steady even when new build slows.",
      "Water is the other half of the market. Recycled water, groundwater replenishment and supply resiliency are long-horizon programs driven by allocation limits rather than by growth, so water-resources engineers here work on treatment and conveyance schemes that outlast several transport funding cycles.",
    ],
    hiringFocus: [
      { role: "Seismic retrofit & bridge structural engineers", why: "The regional retrofit backlog is measured in decades, and performance-based seismic assessment is scarcer than general structural design." },
      { role: "Water resources & recycled-water engineers", why: "Replenishment and reuse programs are driven by supply limits, so this demand does not track the construction cycle." },
      { role: "Traffic & ITS engineers", why: "Freeway and arterial operations work continues between capital programs, and corridor management is a permanent function here." },
      { role: "Construction managers for work under traffic", why: "Freeway rehabilitation across the basin is staged around closures, which is a scheduling discipline as much as an engineering one." },
    ],
    licensure:
      "California is one of the few states where a civil PE from elsewhere cannot simply transfer in: the state adds its own Seismic Principles and Engineering Surveying examinations on top of the national PE, and comity applicants still have to sit them. It is worth planning around when recruiting out of state, an otherwise ideal candidate may be months away from being able to seal drawings. Consultant work additionally runs through Caltrans and county prequalification.",
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    dot: "IDOT",
    marketNote:
      "In Chicagoland and across the Midwest, we staff the transportation, structural, and water teams behind the region's expressway, transit, and waterway programs.",
    localPrograms: [
      "IDOT & CDOT expressway and bridge programs",
      "CTA & Metra transit modernization",
      "Deep Tunnel (TARP) and stormwater systems",
      "Freight rail and intermodal infrastructure",
      "O'Hare terminal and airfield expansion",
    ],
    agencies: [
      "IDOT District 1",
      "Chicago DOT",
      "Illinois Tollway",
      "CTA",
      "Metra",
      "Metropolitan Water Reclamation District",
    ],
    marketDetail: [
      "Chicago's civil work is dominated by an ageing expressway and bridge inventory that has to be rebuilt in place, and by the density of freight rail crossing the region. The largest rail hub in the country. Grade separation, structure clearance and railroad coordination come up here in a way they simply do not in most metros, and engineers who have negotiated with the railroads carry a premium.",
      "Underneath that sits the deep-tunnel stormwater system and a combined-sewer network serving a flat, heavily paved basin. Hydraulic engineers work at a scale of conveyance few regions match, and urban flooding keeps the work on the books regardless of what the transport program is doing.",
    ],
    hiringFocus: [
      { role: "Structural engineers holding an Illinois SE", why: "Illinois issues a Structural Engineer license separate from the PE, so structural leads on many projects need the SE specifically, a licensing detail that catches out-of-state hires." },
      { role: "Rail & grade-separation engineers", why: "Freight density makes railroad coordination a routine part of roadway projects here, and the experience does not transfer from most other markets." },
      { role: "Hydraulic & stormwater engineers", why: "A flat basin, combined sewers and the deep-tunnel system keep conveyance design continuously in demand." },
      { role: "Construction inspection staff fluent in IDOT documentation", why: "State-funded work carries documentation standards inspectors are expected to know before they arrive on site." },
    ],
    licensure:
      "Illinois is the licensing outlier engineers most often trip over: the state issues a Structural Engineer (SE) license distinct from the PE, and structural work of consequence calls for the SE rather than a PE alone. Recruiting a structural lead from a state where the PE covers structural practice means budgeting for that gap. Consultant selection on state work runs through IDOT prequalification by work type.",
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    dot: "TxDOT",
    marketNote:
      "Along the Gulf Coast, we place civil, drainage, and construction professionals on the flood-control, highway, and energy-infrastructure programs central to greater Houston.",
    localPrograms: [
      "TxDOT Houston District highway & interchange work",
      "Harris County flood-control and drainage",
      "Coastal spine and storm-surge protection",
      "Port of Houston and industrial infrastructure",
      "METRO transit and regional mobility projects",
    ],
    agencies: [
      "TxDOT Houston District",
      "Harris County Flood Control District",
      "City of Houston Public Works",
      "METRO",
      "Port Houston",
    ],
    marketDetail: [
      "Drainage is the Houston market. The metro sits flat, drains slowly and floods on a schedule the region plans around, so detention design, channel conveyance and hydrologic and hydraulic modeling are core competencies rather than a specialism bolted onto roadway work. Engineers who can build and defend an H&H model in a review meeting are the ones firms compete for.",
      "The second engine is industrial. The ship-channel petrochemical corridor and port infrastructure generate civil and structural work with a different rhythm from public transport programs, owner-driven, schedule-led, and largely indifferent to the state highway funding cycle.",
    ],
    hiringFocus: [
      { role: "Hydrologic & hydraulic modeling engineers", why: "Flood-control work is model-led, and defending a hydraulic model is the scarcest skill in the metro." },
      { role: "Drainage & detention designers", why: "Regional detention and channel improvement programs run continuously rather than in bursts." },
      { role: "Roadway designers fluent in TxDOT standards", why: "District work is standards-heavy, and engineers who already know them start producing months sooner." },
      { role: "Construction inspection staff", why: "Sustained highway and drainage construction keeps field inspection demand ahead of supply across the district." },
    ],
    licensure:
      "Texas licenses engineers through TBPELS, and firms offering engineering services need their own registration, not only the individuals. On state work, TxDOT precertification by work category decides who can be on a team at all, so a candidate's precertification history is a practical hiring signal alongside the license.",
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    dot: "ADOT",
    marketNote:
      "In the fast-growing Phoenix metro, we help firms scale civil and transportation teams for the freeway, water, and development programs keeping pace with the Valley's expansion.",
    localPrograms: [
      "ADOT & Maricopa freeway and loop programs",
      "Valley Metro light-rail extensions",
      "Water resources and long-term supply planning",
      "Master-planned community infrastructure",
      "Sky Harbor airport capital projects",
    ],
    agencies: [
      "ADOT",
      "Maricopa County DOT",
      "City of Phoenix Street Transportation",
      "Phoenix Water Services",
      "Valley Metro",
      "Sky Harbor",
    ],
    marketDetail: [
      "Phoenix is one of the few large metros where a civil engineer still spends most of their time on greenfield work. Master-planned community infrastructure, freeway loops and arterial extensions into open desert mean site civil, grading and utility design at volumes older metros no longer generate, and the pace of subdivision work sets the tempo of the local market.",
      "Water is the constraint that shapes everything else. Assured water supply rules mean a development's engineering has to answer a supply question before it answers a drainage one, which gives water-resources engineers a gatekeeping role here that they do not have in wetter states.",
    ],
    hiringFocus: [
      { role: "Land development & site civil engineers", why: "Sustained greenfield growth keeps grading, paving and utility design in demand at a volume most metros no longer see." },
      { role: "Water resources engineers", why: "Assured water supply requirements put a supply assessment at the front of the development process rather than the end." },
      { role: "Roadway & freeway designers", why: "The loop and arterial programs are long-running and standards-driven." },
      { role: "Utility coordination specialists", why: "Rapid greenfield build-out makes wet and dry utility coordination a schedule bottleneck rather than a detail." },
    ],
    licensure:
      "Arizona registers engineers through the Board of Technical Registration, with comity available on an NCEES record. What distinguishes this market is water: assured water supply rules make groundwater and supply credentials genuinely valuable rather than a nice-to-have, and ADOT prequalification governs access to state highway work.",
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    dot: "PennDOT",
    marketNote:
      "Across the Philadelphia region and the Mid-Atlantic, we recruit the bridge, transit, and water engineers supporting one of the nation's oldest and busiest infrastructure networks.",
    localPrograms: [
      "PennDOT District 6 bridge & roadway programs",
      "SEPTA transit rebuilding and modernization",
      "Combined-sewer overflow and water-quality work",
      "I-95 reconstruction and corridor projects",
      "Regional rail and freight upgrades",
    ],
    agencies: [
      "PennDOT District 6",
      "DVRPC",
      "SEPTA",
      "Philadelphia Water Department",
      "Philadelphia Streets Department",
      "PhilaPort",
    ],
    marketDetail: [
      "Philadelphia is a bridge market. The regional inventory is old, dense and heavily used, and corridor reconstruction along I-95 has kept structural design, staging and inspection teams occupied for years at a stretch. Engineers here are used to rebuilding structures over live traffic and active rail, which is a different discipline from designing a new crossing on open ground.",
      "The distinctive civil work is stormwater. The city's green stormwater infrastructure program is among the most developed in the country, and it has created a local specialism (fitting bioretention, permeable surfaces and inlet modifications into constrained streets) that transfers well and is hard to hire in from elsewhere.",
    ],
    hiringFocus: [
      { role: "Bridge design & inspection engineers", why: "An old, dense structure inventory means rehabilitation and inspection continue regardless of the new-build program." },
      { role: "Green stormwater infrastructure designers", why: "The city's program has made retrofit stormwater design a genuine local specialism with few experienced practitioners." },
      { role: "Construction inspection staff fluent in PennDOT documentation", why: "State-funded work carries documentation requirements inspectors are expected to know on day one." },
      { role: "Rail & transit structural engineers", why: "Transit rebuilding needs structural assessment of assets that have to stay in service throughout." },
    ],
    licensure:
      "Pennsylvania registration transfers by comity for most PEs, but the practical gate for consultant work is PennDOT's ECMS prequalification, firms and staff are qualified by work code, so a candidate's ECMS history tells a hiring manager immediately which project types they can be billed against.",
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    dot: "TxDOT",
    marketNote:
      "Throughout the Dallas–Fort Worth metroplex, we place PEs and project managers on the tollway, transit, and mobility programs powering North Texas growth.",
    localPrograms: [
      "TxDOT Dallas & NTTA tollway programs",
      "DART light-rail and Silver Line transit",
      "Trinity River corridor and flood management",
      "Regional managed-lane and mobility projects",
      "DFW Airport capital improvements",
    ],
    agencies: [
      "TxDOT Dallas District",
      "North Texas Tollway Authority",
      "DART",
      "NCTCOG",
      "DFW Airport",
      "City of Dallas Public Works",
    ],
    marketDetail: [
      "North Texas is a managed-lane and tollway market, and it delivers much of its work through design-build and comprehensive development agreements. That changes what firms need: engineers who can produce at pursuit pace, price risk and work alongside a contractor from the start, rather than hand a finished set over the wall. Pursuit experience is a real differentiator on a CV here.",
      "Underneath the corridor programs, suburban growth keeps land development and municipal engineering busy across the collar counties, giving the metro two distinct hiring markets that rarely compete for the same people.",
    ],
    hiringFocus: [
      { role: "Roadway & managed-lane designers", why: "Corridor and tollway programs are the region's defining work and run on multi-year schedules." },
      { role: "Design-build pursuit engineers", why: "Alternative delivery is standard here, and engineers who have worked inside a pursuit team are scarce relative to demand." },
      { role: "Land development engineers", why: "Collar-county growth sustains a second market largely independent of the highway program." },
      { role: "Construction inspection and materials staff", why: "Sustained construction volume keeps field roles open across several districts at once." },
    ],
    licensure:
      "Texas licenses through TBPELS and requires firm registration alongside individual licensure. TxDOT precertification decides team eligibility on state work, and because so much North Texas work is alternatively delivered, contractors weigh design-build experience nearly as heavily as the license itself.",
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    dot: "GDOT",
    marketNote:
      "In metro Atlanta and across the Southeast, we connect firms with civil and transportation talent for the interstate, transit, and water programs driving the region's rapid growth.",
    localPrograms: [
      "GDOT interstate and interchange programs (Major Mobility)",
      "MARTA transit expansion",
      "Combined-sewer and watershed improvements",
      "Managed lanes and regional mobility",
      "Hartsfield-Jackson airport modernization",
    ],
    agencies: [
      "GDOT",
      "State Road & Tollway Authority",
      "MARTA",
      "Atlanta DOT",
      "DeKalb County Watershed Management",
      "Hartsfield-Jackson",
    ],
    marketDetail: [
      "Atlanta's highway work is concentrated in managed lanes and interchange reconstruction on the interstates converging on the city, which means large, long-duration corridor projects and the staging discipline that goes with rebuilding roads that cannot be closed.",
      "The quieter but steadier market is sewer. Consent-decree-driven capacity and rehabilitation programs across the metro counties have kept collection-system engineers working for years, and that work is obligation-led rather than growth-led. It continues through downturns.",
    ],
    hiringFocus: [
      { role: "Managed lane & interchange designers", why: "The region's mobility program is built around complex interchanges rebuilt under traffic." },
      { role: "Sewer rehabilitation & capacity engineers", why: "Consent-decree obligations fund this work on a schedule that does not follow the economy." },
      { role: "Water resources & watershed engineers", why: "Watershed improvement programs across the metro counties run alongside the sewer work." },
      { role: "Construction inspection staff", why: "Long corridor projects need inspection teams sustained across multi-year schedules." },
    ],
    licensure:
      "Georgia licenses engineers through its state board, with comity on an NCEES record. Access to state work runs through GDOT prequalification by work class, so a candidate's prequalified areas are a fair proxy for the project types they can lead once they arrive.",
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    dot: "FDOT",
    marketNote:
      "Across South Florida, we recruit the drainage, coastal, and transportation engineers tackling the resiliency, highway, and transit programs unique to the Miami region.",
    localPrograms: [
      "FDOT District 6 highway and bridge programs",
      "Sea-level-rise and stormwater resiliency",
      "SMART Plan transit corridors",
      "PortMiami and marine infrastructure",
      "Water and wastewater capital upgrades",
    ],
    agencies: [
      "FDOT District 6",
      "Miami-Dade Transportation & Public Works",
      "Miami-Dade Water & Sewer",
      "South Florida Water Management District",
      "PortMiami",
      "City of Miami Public Works",
    ],
    marketDetail: [
      "South Florida engineering is shaped by water arriving from three directions at once: rainfall on flat, porous ground, tide pushing back up the outfalls, and a groundwater table close enough to the surface to limit what can be buried. Drainage design here is a tidal problem, not just a rainfall one, and engineers who have only sized systems for gravity discharge inland find the assumptions do not hold.",
      "The saltwater environment then governs everything structural. Corrosion protection, concrete cover and materials selection are first-order design decisions on bridges and marine structures, and durability detailing is a specialism the market pays for rather than a box to tick.",
    ],
    hiringFocus: [
      { role: "Stormwater & resiliency engineers", why: "Tidal influence and a high water table make drainage design a specialist problem rather than a routine calculation." },
      { role: "Coastal & marine structural engineers", why: "Bridges and port structures in saltwater need durability detailing that few inland engineers have practised." },
      { role: "CEI inspectors with FDOT qualifications", why: "State construction work requires program-specific qualification, so qualified inspectors are hired straight off other projects." },
      { role: "Water & wastewater capacity engineers", why: "Treatment and conveyance upgrades run on regulatory timelines independent of the transport program." },
    ],
    licensure:
      "Florida licenses engineers through FBPE, with comity available on an NCEES record. Two Florida-specific credentials matter more day to day: FDOT's construction training qualifications gate who can hold materials and inspection roles on state work, and threshold-building projects require a licensed special inspector. Both are worth checking on a CV before an interview rather than after an offer.",
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    dot: "WSDOT",
    marketNote:
      "In the Puget Sound region and across the Pacific Northwest, we place civil, structural, and geotechnical engineers on the transit, bridge, and seismic programs defining Seattle's infrastructure.",
    localPrograms: [
      "WSDOT highway, ferry, and bridge programs",
      "Sound Transit light-rail expansion",
      "Seismic retrofit and resilient structures",
      "Fish-passage and environmental restoration",
      "Sea-Tac airport modernization",
    ],
    agencies: [
      "WSDOT",
      "Sound Transit",
      "Seattle DOT",
      "King County",
      "Port of Seattle",
      "Seattle Public Utilities",
    ],
    marketDetail: [
      "Geotechnics drives the Puget Sound market. Soft soils, liquefaction risk, steep slopes and deep foundations sit under nearly every structural decision, and seismic demand is high enough that retrofit and resilient design are routine rather than exceptional. Engineers who can read a geotechnical report and design to it are worth more here than their years suggest.",
      "The distinctive civil program is fish passage. Replacing culverts that block salmon migration has created sustained hydraulic and structural work across the state, with a design vocabulary (stream simulation, channel-spanning structures) that barely exists in other markets and is therefore hard to hire in.",
    ],
    hiringFocus: [
      { role: "Geotechnical & seismic engineers", why: "Soft soils and high seismic demand make geotechnical judgement a constraint on nearly every project." },
      { role: "Fish-passage & hydraulic designers", why: "The culvert replacement program is long-running and uses design methods rarely practised elsewhere." },
      { role: "Structural engineers holding a Washington SE", why: "Washington issues a Structural Engineer license separate from the PE for significant structures." },
      { role: "Marine & waterfront engineers", why: "Ferry terminals, port structures and shoreline work are a permanent feature of this market." },
    ],
    licensure:
      "Washington is one of the few states with a separate Structural Engineer (SE) license alongside the PE, which matters when hiring structural leads from states where the PE covers that work. Comity is available on an NCEES record for the PE itself, and consultant access to state highway work runs through WSDOT's agreements and rosters.",
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    dot: "CDOT",
    marketNote:
      "Across the Front Range and the Mountain West, we place civil and transportation engineers on the highway, transit, and water programs supporting metro Denver's rapid growth.",
    localPrograms: [
      "CDOT I-70 and Front Range highway programs",
      "RTD transit and FasTracks corridors",
      "Water storage and supply resiliency",
      "Denver International Airport expansion",
      "Flood control and urban stormwater projects",
    ],
    agencies: [
      "CDOT",
      "RTD",
      "Denver Public Works",
      "Denver Water",
      "Mile High Flood District",
      "Denver International Airport",
    ],
    marketDetail: [
      "Front Range work splits between fast urban growth and mountain corridor engineering, and the two ask for different engineers. Mountain highway work brings geohazards, avalanche paths, rockfall mitigation and construction seasons short enough to dictate the design, none of which shows up on a flat-metro CV.",
      "Water is the long game. Storage, supply resiliency and drought planning are structural features of engineering in a headwaters state, and the regional flood district gives urban drainage a formal, well-defined framework that engineers here work inside from their first year.",
    ],
    hiringFocus: [
      { role: "Highway designers with mountain corridor experience", why: "Geohazards and short construction seasons make mountain work a distinct discipline from urban roadway design." },
      { role: "Water resources & supply engineers", why: "Storage and drought resiliency are permanent programs in a headwaters state." },
      { role: "Drainage engineers fluent in the regional flood criteria", why: "Urban drainage here is designed to a well-defined regional framework that takes time to learn." },
      { role: "Construction inspection staff", why: "Compressed construction seasons concentrate demand for field staff into a short window each year." },
    ],
    licensure:
      "Colorado licenses engineers through its state board with comity on an NCEES record, and access to state highway work runs through CDOT prequalification. Practical experience with mountain corridor design and the regional drainage criteria tends to weigh more with hiring managers here than any additional credential.",
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    dot: "MassDOT",
    marketNote:
      "Throughout Greater Boston and New England, we recruit the bridge, transit, and coastal engineers modernizing one of the country's oldest and most complex infrastructure networks.",
    localPrograms: [
      "MassDOT bridge and Accelerated Bridge programs",
      "MBTA transit modernization and Green Line works",
      "Coastal resiliency and sea-level adaptation",
      "Allston I-90 multimodal project",
      "Water and sewer (MWRA) capital upgrades",
    ],
    agencies: [
      "MassDOT",
      "MBTA",
      "MWRA",
      "Boston Water & Sewer Commission",
      "Massport",
      "Boston Public Works",
    ],
    marketDetail: [
      "Boston builds in a dense, historic city on ground that was largely made by filling tidal flats. Deep excavation next to buildings founded on timber piles, groundwater levels that have to be maintained rather than simply drawn down, and constrained sites make geotechnical and support-of-excavation expertise unusually valuable here.",
      "The bridge program has pushed accelerated construction hard: prefabricated elements, weekend closures, slide-in replacements. Engineers who have designed for that kind of delivery, where the schedule constrains the detailing, are a distinct group from those who have only done conventional staged construction.",
    ],
    hiringFocus: [
      { role: "Bridge engineers with accelerated construction experience", why: "Weekend and prefabricated replacements are standard here, and they constrain design in ways conventional staging does not." },
      { role: "Geotechnical & support-of-excavation engineers", why: "Building on filled ground beside pile-founded historic structures makes this the region's binding technical constraint." },
      { role: "Transit structural engineers", why: "Transit rebuilding requires structural work on assets that must stay in service." },
      { role: "Coastal resiliency engineers", why: "Harbour-edge adaptation is now a standing program rather than a study." },
    ],
    licensure:
      "Massachusetts registers engineers through its state board with comity on an NCEES record. Consultant access to state work runs through MassDOT prequalification, and for bridge roles specifically, hiring managers look for experience with accelerated construction and night or weekend staging as much as for the license.",
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    dot: "MnDOT",
    marketNote:
      "In the Twin Cities and across the Upper Midwest, we staff the transportation, structural, and water teams behind the region's bridge, transit, and river-corridor programs.",
    localPrograms: [
      "MnDOT highway and bridge programs",
      "Metro Transit light-rail and BRT lines",
      "Mississippi River corridor and lock infrastructure",
      "Stormwater and clean-water initiatives",
      "MSP airport capital projects",
    ],
    agencies: [
      "MnDOT Metro District",
      "Metro Transit",
      "Metropolitan Council",
      "Minneapolis Public Works",
      "local watershed districts",
    ],
    marketDetail: [
      "The Twin Cities take bridge inspection and load rating more seriously than almost any other market in the country, and that culture shows up in hiring: inspection credentials and rating experience carry weight here that they do not always carry elsewhere, and the work is funded steadily rather than in bursts.",
      "Cold is the other design constraint. Frost depth, freeze-thaw durability and a short construction season shape pavement, foundation and drainage design, and the watershed district structure gives clean-water work a formal local framework that engineers are expected to know.",
    ],
    hiringFocus: [
      { role: "Bridge inspection & load rating engineers", why: "Inspection and rating are funded continuously here, and qualified team leaders are held onto." },
      { role: "Hydraulic & watershed engineers", why: "Watershed districts run their own programs, which keeps clean-water design in demand year-round." },
      { role: "Transit corridor designers", why: "Light rail and bus rapid transit corridors are long-duration programs across the metro." },
      { role: "Municipal roadway engineers", why: "City and county reconstruction work continues on a steady annual cycle regardless of state programs." },
    ],
    licensure:
      "Minnesota licenses engineers through its state board with comity on an NCEES record. MnDOT prequalifies consultants by work type, and in this market NBIS bridge inspection credentials and load rating experience are among the most portable things a candidate can hold.",
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    dot: "MDOT",
    marketNote:
      "Across metro Detroit and the Great Lakes region, we connect firms with civil and transportation talent for the freeway, bridge, and water programs rebuilding regional infrastructure.",
    localPrograms: [
      "MDOT freeway reconstruction (I-75 / I-94) programs",
      "Gordie Howe International Bridge corridor",
      "Great Lakes water and drainage systems",
      "Regional transit and mobility projects",
      "Detroit Metro airport improvements",
    ],
    agencies: [
      "MDOT Metro Region",
      "Great Lakes Water Authority",
      "Detroit Public Works",
      "Wayne County",
      "Regional Transit Authority",
    ],
    marketDetail: [
      "Southeast Michigan is a reconstruction market. The freeway network is being rebuilt corridor by corridor rather than extended, which puts the emphasis on staging, utility relocation and maintaining access to neighbourhoods and industry through multi-year projects.",
      "Water is regional and ageing. The Great Lakes Water Authority system serves a large share of the state's population through infrastructure that needs rehabilitation rather than expansion, and combined sewers in the older cores make capacity and separation work a continuing program.",
    ],
    hiringFocus: [
      { role: "Roadway & freeway reconstruction engineers", why: "Corridor rebuilds under traffic are the defining project type in the region." },
      { role: "Water & sewer rehabilitation engineers", why: "A large, ageing regional system generates renewal work independent of growth." },
      { role: "Structural engineers for bridge rehabilitation", why: "Freeway reconstruction carries a heavy structures component across the corridors." },
      { role: "Construction inspection staff", why: "Multi-year reconstruction projects need inspection teams sustained across full seasons." },
    ],
    licensure:
      "Michigan licenses engineers through the state's licensing department with comity on an NCEES record, and MDOT prequalification governs consultant access to state work. Experience with staged reconstruction under traffic tends to be the practical differentiator between candidates who otherwise look alike on paper.",
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    dot: "NCDOT",
    marketNote:
      "In Charlotte and across the Carolinas, we place PEs and project leads on the highway, transit, and development programs driving one of the Southeast's fastest-growing metros.",
    localPrograms: [
      "NCDOT highway and interchange programs",
      "CATS LYNX light-rail expansion",
      "Stormwater and greenway infrastructure",
      "Regional managed-lane projects",
      "Charlotte Douglas airport expansion",
    ],
    agencies: [
      "NCDOT Division 10",
      "Charlotte Area Transit System",
      "Charlotte Water",
      "Charlotte DOT",
      "Mecklenburg County Storm Water Services",
      "Charlotte Douglas International",
    ],
    marketDetail: [
      "Charlotte is a growth market, and growth engineering is its own discipline: subdivision and site civil work, arterial widening ahead of demand, and utility extension into land that had none. The volume is steady enough that land development experience is the most reliably transferable thing on a CV here.",
      "The counterweight is stormwater. The county's storm water services program gives drainage and stream restoration work a formal structure and a continuing budget, so the discipline does not rise and fall with the development cycle the way it does in less organised markets.",
    ],
    hiringFocus: [
      { role: "Land development & site civil engineers", why: "Sustained regional growth keeps subdivision and site design the largest single source of civil work." },
      { role: "Roadway & managed lane designers", why: "Corridor widening and managed lane projects run on long state schedules." },
      { role: "Stormwater & stream restoration engineers", why: "The county program funds this work continuously rather than project by project." },
      { role: "Utility relocation coordinators", why: "Rapid growth makes relocation a critical-path activity on most corridor projects." },
    ],
    licensure:
      "North Carolina licenses engineers through its state board with comity on an NCEES record, and firms providing engineering services also need a license to practice. NCDOT prequalification governs state work, and in this market land development and site civil experience is often weighed as heavily as public-sector project history.",
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    dot: "TDOT",
    marketNote:
      "Throughout Middle Tennessee, we recruit the transportation, structural, and water engineers supporting Nashville's booming highway, transit, and infrastructure programs.",
    localPrograms: [
      "TDOT highway and bridge programs",
      "Choose How You Move transit initiatives",
      "Cumberland River and flood management",
      "Roadway and mobility improvements",
      "Nashville International airport expansion",
    ],
    agencies: [
      "TDOT Region 3",
      "Nashville DOT & Multimodal Infrastructure",
      "Metro Water Services",
      "WeGo Public Transit",
      "Metropolitan Nashville Airport Authority",
      "Williamson County Highway Department",
    ],
    marketDetail: [
      "Nashville's civil work is driven by a road network built for a much smaller city. Three interstates converge inside the loop, and the growth that keeps arriving lands in Williamson, Rutherford and Wilson counties, which means the engineering is as much about suburban arterials, interchange capacity and utility extension as it is about anything downtown. Roadway and traffic engineers who can work a corridor study through to construction documents are the steady demand here.",
      "The ground itself sets the second agenda. Middle Tennessee sits on limestone, so karst features, sinkholes and a fast route from surface to groundwater shape drainage design, foundations and stormwater quality treatment in a way engineers arriving from other markets consistently underestimate. Add the Cumberland River and a combined sewer system in the old core, and hydraulics and geotechnical judgment stay in demand regardless of the highway program.",
    ],
    hiringFocus: [
      {
        role: "Roadway & corridor design engineers",
        why: "Suburban growth keeps arterial widening and interchange work continuous, which is the bulk of the region's design volume.",
      },
      {
        role: "Geotechnical engineers with karst experience",
        why: "Limestone and sinkhole risk make subsurface investigation a project-shaping activity here rather than a routine one.",
      },
      {
        role: "Stormwater & drainage engineers",
        why: "Rapid-transmission karst geology and combined sewer in the old core put water quality treatment on nearly every site.",
      },
      {
        role: "Construction-phase engineers",
        why: "Widening under live traffic on constrained corridors needs people who can sequence staging rather than only design an end state.",
      },
    ],
    licensure:
      "Tennessee licenses engineers through the Board of Architectural and Engineering Examiners within the Department of Commerce and Insurance, and out-of-state PEs generally transfer by comity on an NCEES record rather than by re-examination. The practical gate is prequalification rather than the license: TDOT maintains its own consultant prequalification by work category, and Metro Nashville runs separate on-call rosters, so which categories a candidate's firm already holds often matters more to a hiring manager than the license itself.",
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    dot: "ODOT",
    marketNote:
      "In the Portland metro and across the Pacific Northwest, we place civil, structural, and seismic engineers on the bridge, transit, and resiliency programs shaping the region.",
    localPrograms: [
      "ODOT bridge and highway programs",
      "TriMet MAX light-rail projects",
      "Seismic retrofit and resilient structures",
      "Willamette River crossings and corridors",
      "Water and stormwater capital upgrades",
    ],
    agencies: [
      "ODOT Region 1",
      "Portland Bureau of Transportation",
      "Multnomah County Transportation Division",
      "TriMet",
      "Portland Bureau of Environmental Services",
      "Port of Portland",
    ],
    marketDetail: [
      "Portland is a seismic retrofit market as much as a transportation one. The region sits in the Cascadia subduction zone, and the older Willamette River bridges, much of the county-owned inventory among them, were designed long before current ground motion expectations. That makes structural assessment, retrofit design and lifeline route planning a standing category of work rather than a periodic one, and it rewards engineers who are comfortable evaluating existing structures rather than only designing new ones.",
      "The second driver is water and land use. Combined sewer separation and stormwater management carry real regulatory weight here, green infrastructure is a default rather than an alternative, and Oregon's urban growth boundary pushes development inward onto constrained infill sites. Civil engineers in this market spend more of their time on site hydraulics, permitting and fitting work into existing right of way than the same engineers would in a greenfield metro.",
    ],
    hiringFocus: [
      {
        role: "Bridge & seismic retrofit engineers",
        why: "An aging river crossing inventory in a subduction zone keeps assessment and retrofit design continuously funded.",
      },
      {
        role: "Stormwater & green infrastructure designers",
        why: "Treatment requirements and combined sewer obligations put water quality design on nearly every project.",
      },
      {
        role: "Transit and multimodal corridor engineers",
        why: "Light rail, bus priority and active transportation are built into the region's planning framework rather than treated as add-ons.",
      },
      {
        role: "Land use & permitting-fluent civil engineers",
        why: "The urban growth boundary makes entitlement and infill constraint navigation part of the engineering, not a separate step.",
      },
    ],
    licensure:
      "Oregon licenses through the State Board of Examiners for Engineering and Land Surveying, and comity on an NCEES record is the normal route for an out-of-state PE. Oregon is one of the states that maintains a separate structural engineer registration on top of the civil PE, which matters for anyone expecting to seal work on significant buildings or bridges, and ODOT keeps its own consultant prequalification by discipline, so agency-side experience is usually checked alongside the license.",
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    dot: "NDOT",
    marketNote:
      "In the Las Vegas valley, we help firms scale civil and transportation teams for the freeway, water, and development programs keeping pace with Southern Nevada's growth.",
    localPrograms: [
      "NDOT & RTC freeway and interchange programs (Project Neon)",
      "RTC transit and mobility corridors",
      "Water resources and Colorado River supply",
      "Flood-control and desert stormwater systems",
      "Harry Reid airport capital projects",
    ],
    agencies: [
      "NDOT District 1",
      "Regional Transportation Commission of Southern Nevada",
      "Clark County Public Works",
      "Clark County Regional Flood Control District",
      "Las Vegas Valley Water District",
      "Southern Nevada Water Authority",
    ],
    marketDetail: [
      "Flood control is the discipline that defines civil engineering in the Las Vegas valley. A desert catchment with hard ground and steep alluvial fans turns an infrequent storm into a fast, destructive flow, and the regional response has been a built system of detention basins and lined channels that has to be extended every time development moves outward. Hydrology and hydraulic design here are a specialism with local rules, not a generic skill imported from a wetter market.",
      "The rest of the work follows growth. The valley expands outward into new master-planned areas, which means arterial extension, utility trunk mains and interchange capacity on a repeating cycle, while the resort corridor and the airport generate their own constrained, high-visibility projects where construction has to happen without interrupting an economy that runs continuously. Water scarcity sits underneath all of it and keeps conservation and reuse infrastructure permanently on the program.",
    ],
    hiringFocus: [
      {
        role: "Drainage & flood control engineers",
        why: "The regional detention and channel system is extended with development, and its design criteria are local enough to be their own expertise.",
      },
      {
        role: "Roadway & interchange design engineers",
        why: "Outward growth keeps arterial extension and freeway capacity work on a continuous cycle.",
      },
      {
        role: "Water resources & reuse engineers",
        why: "Supply constraint makes conservation, recycling and delivery infrastructure a permanent rather than cyclical program.",
      },
      {
        role: "Construction-phase engineers for live corridors",
        why: "Resort corridor and airport work is staged around an operation that never closes, which is a scheduling skill as much as a technical one.",
      },
    ],
    licensure:
      "Nevada licenses through the State Board of Professional Engineers and Land Surveyors, and it is one of the states that licenses by branch, so a PE is registered in civil, structural or another discipline rather than generally. An engineer arriving from a state with undifferentiated licensure needs to confirm the branch matches the work they intend to seal. Comity on an NCEES record is the usual route, and NDOT and Clark County both run their own consultant prequalification alongside it.",
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    dot: "Ohio DOT",
    marketNote:
      "Across central Ohio, we staff the transportation, structural, and water teams behind Columbus's fast-expanding highway, transit, and infrastructure programs.",
    localPrograms: [
      "Ohio DOT highway and interchange programs",
      "COTA transit and LinkUS corridors",
      "Water and sewer (Blueprint Columbus) upgrades",
      "Regional roadway and mobility projects",
      "Rickenbacker & John Glenn airport infrastructure",
    ],
    agencies: [
      "ODOT District 6",
      "Columbus Department of Public Service",
      "Columbus Department of Public Utilities",
      "Franklin County Engineer",
      "Central Ohio Transit Authority",
      "Columbus Regional Airport Authority",
    ],
    marketDetail: [
      "Central Ohio is absorbing large-scale industrial investment on what was recently farmland, and the civil engineering that follows is unglamorous and enormous: arterial reconstruction, water and sewer trunk extension, grade separations and the interchange capacity to carry freight to sites that had none of it. Site development and public infrastructure design run together here in a way they do not in a built-out metro, and engineers who can carry both are unusually valuable.",
      "Inside the city the work is different again. The sewer system carries a long-running wet weather program, which keeps hydraulic modeling, sewer separation and green infrastructure design continuously staffed, and the downtown freeway network is being reworked in stages under traffic. Flat terrain and heavy clay soils shape drainage and pavement design across the whole region.",
    ],
    hiringFocus: [
      {
        role: "Site development & land development engineers",
        why: "Large industrial and residential growth on greenfield land makes grading, utility and entitlement work the region's highest-volume category.",
      },
      {
        role: "Water & sewer infrastructure engineers",
        why: "A standing wet weather program and trunk main extension to new development run in parallel and both need hydraulic depth.",
      },
      {
        role: "Roadway & freight corridor engineers",
        why: "New industrial load requires arterial reconstruction and grade separation that the existing network was never sized for.",
      },
      {
        role: "Construction-phase and utility coordination engineers",
        why: "Rebuilding urban freeway and arterial under traffic makes staging and utility conflict resolution a senior role.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route for an out-of-state PE. ODOT maintains consultant prequalification by work type and the city and county engineers keep their own on-call arrangements, so the question a hiring manager usually asks is which of those the candidate has already delivered under, rather than whether the license will transfer.",
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    dot: "UDOT",
    marketNote:
      "Along the Wasatch Front, we place civil and transportation engineers on the highway, transit, and water programs supporting the Salt Lake City region's rapid expansion.",
    localPrograms: [
      "UDOT highway and interchange programs",
      "UTA TRAX and FrontRunner transit",
      "Great Salt Lake and water-resources planning",
      "Seismic and resilient-structure programs",
      "Salt Lake City International airport rebuild",
    ],
    agencies: [
      "UDOT Region 2",
      "Utah Transit Authority",
      "Salt Lake City Department of Public Utilities",
      "Salt Lake City Engineering Division",
      "Salt Lake City International Airport",
      "Salt Lake County Public Works",
    ],
    marketDetail: [
      "Two hazards shape this market. The Wasatch fault runs along the eastern edge of the valley, which makes seismic design and the retrofit of older structures and buried utilities a permanent line of work, and the Great Salt Lake's decline has turned water supply, conveyance and conservation into an engineering problem with political urgency behind it. Both keep specialists busy independently of the highway program.",
      "The transportation work itself is concentrated on a narrow north to south corridor between the mountains and the lake, which means capacity has to be found within constrained right of way rather than by building outward. That favors engineers comfortable with reconstruction, transit integration and staged construction, and the airport's rebuild has kept a steady demand for landside civil and utility work alongside it.",
    ],
    hiringFocus: [
      {
        role: "Water resources & conveyance engineers",
        why: "Supply constraint and lake decline have made water infrastructure a standing regional priority rather than a project category.",
      },
      {
        role: "Seismic & structural retrofit engineers",
        why: "An active fault along the populated edge of the valley keeps assessment and strengthening of existing assets continuously funded.",
      },
      {
        role: "Roadway reconstruction engineers",
        why: "A geographically constrained corridor means capacity comes from rebuilding what exists, under traffic.",
      },
      {
        role: "Transit corridor & multimodal engineers",
        why: "Rail and bus expansion along the same constrained corridor is the region's main answer to growth.",
      },
    ],
    licensure:
      "Utah licenses through the Division of Professional Licensing and its Professional Engineers and Land Surveyors board, and comity on an NCEES record is the normal path. UDOT runs its own consultant prequalification by work category, so for most civil roles the license transfer is straightforward and the meaningful credential is whether the candidate has delivered under UDOT or UTA processes before.",
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    dot: "MoDOT",
    marketNote:
      "Across the Kansas City metro and the Heartland, we place civil and transportation engineers on the highway, bridge, and transit programs connecting the region's two-state market.",
    localPrograms: [
      "MoDOT highway and bridge programs",
      "KC Streetcar and RideKC transit expansion",
      "Missouri River crossings and levee systems",
      "Regional stormwater and water-quality work",
      "KCI airport terminal and airfield projects",
    ],
    agencies: [
      "MoDOT Kansas City District",
      "Kansas City Public Works",
      "KCATA",
      "Kansas City Aviation Department",
      "Johnson County Public Works",
      "Mid-America Regional Council",
    ],
    marketDetail: [
      "Kansas City's defining civil engineering characteristic is that it is two states. The metro spans the Missouri and Kansas line, work is let by agencies on both sides, and engineers who hold licenses in both are materially more useful than engineers who hold one. That duality runs through everything: two DOTs, two sets of design standards, two prequalification regimes and a regional planning body that has to reconcile them.",
      "The work itself is dominated by aging river crossings, a large inherited arterial network and a long-running sewer program. The Missouri and Kansas rivers cut the metro into pieces connected by bridges that are well into their service lives, and the combined sewer system carries wet weather obligations that keep hydraulic modeling and separation design continuously staffed.",
    ],
    hiringFocus: [
      {
        role: "Dual-licensed civil engineers",
        why: "A bi-state metro lets work from agencies on both sides, and a single-state license limits which projects an engineer can seal.",
      },
      {
        role: "Bridge design & rehabilitation engineers",
        why: "Two major rivers and an aging crossing inventory keep structural assessment and replacement work continuous.",
      },
      {
        role: "Wastewater & stormwater engineers",
        why: "A long-running wet weather program makes sewer hydraulics and separation design a standing regional need.",
      },
      {
        role: "Roadway & arterial reconstruction engineers",
        why: "A large inherited street network reaching the end of its life generates steady reconstruction volume in both states.",
      },
    ],
    licensure:
      "Missouri licenses through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects, and Kansas through its Board of Technical Professions. Because the metro straddles the line, comity registration in both is close to a practical requirement for anyone sealing work across the region, and it is the single most common licensure question raised in searches here. MoDOT and KDOT each maintain separate consultant prequalification on top of the license.",
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    dot: "INDOT",
    marketNote:
      "In central Indiana, we recruit the transportation, structural, and water engineers supporting Indianapolis's interstate, transit, and infrastructure programs.",
    localPrograms: [
      "INDOT interstate and interchange programs",
      "IndyGo bus-rapid-transit corridors",
      "White River corridor and flood management",
      "DigIndy stormwater tunnel system",
      "Indianapolis International airport projects",
    ],
    agencies: [
      "INDOT Greenfield District",
      "Indianapolis Department of Public Works",
      "Citizens Energy Group",
      "IndyGo",
      "Indianapolis Airport Authority",
      "Hamilton County Highway Department",
    ],
    marketDetail: [
      "The largest single driver of civil engineering in Indianapolis has been the deep tunnel program built to meet the city's combined sewer overflow obligations. Work at that scale creates a local concentration of tunnel, conveyance and hydraulic expertise, and the surface restoration, sewer separation and green infrastructure that accompany it keep a much broader group of civil engineers occupied for years at a time.",
      "Above ground, the region is flat, which sounds simple and is not: drainage design has very little natural fall to work with, detention is a constant requirement, and pavement design contends with freeze-thaw on heavy soils. The interstate network converging on the city has been rebuilt in stages under traffic, and suburban growth to the north keeps arterial and utility extension work steady.",
    ],
    hiringFocus: [
      {
        role: "Wastewater & conveyance engineers",
        why: "A large ongoing sewer program makes hydraulic modeling and conveyance design the region's deepest specialism.",
      },
      {
        role: "Stormwater & drainage engineers",
        why: "Flat terrain with minimal fall makes detention and drainage design unusually demanding on every site.",
      },
      {
        role: "Roadway & interchange engineers",
        why: "Staged reconstruction of the interstate network under traffic keeps design and construction-phase work continuous.",
      },
      {
        role: "Land development engineers",
        why: "Suburban growth north of the city drives sustained demand for grading, utility and entitlement design.",
      },
    ],
    licensure:
      "Indiana licenses through the State Board of Registration for Professional Engineers, administered by the Professional Licensing Agency, and comity on an NCEES record is the usual route for an out-of-state PE. INDOT prequalifies consultants by work type and the city and utility run their own selection processes, so the credential that decides most hires is which of those the candidate has already worked under.",
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    dot: "WisDOT",
    marketNote:
      "Across metro Milwaukee and the Great Lakes region, we connect firms with civil and transportation talent for the freeway, bridge, and water programs modernizing regional infrastructure.",
    localPrograms: [
      "WisDOT freeway and bridge reconstruction (I-94) programs",
      "MCTS and regional transit projects",
      "Lake Michigan water and harbor infrastructure",
      "Deep-tunnel and stormwater systems",
      "Mitchell International airport improvements",
    ],
    agencies: [
      "WisDOT Southeast Region",
      "Milwaukee Department of Public Works",
      "Milwaukee Metropolitan Sewerage District",
      "Milwaukee County Transit System",
      "Port Milwaukee",
      "Milwaukee County Department of Transportation",
    ],
    marketDetail: [
      "Milwaukee runs one of the more ambitious urban water programs in the country. Deep tunnel storage, aggressive green infrastructure and a watershed-scale approach to wet weather have made the region a place where stormwater and wastewater engineering are treated as a single discipline, and where engineers with modeling and green infrastructure design experience have a deeper local market than metro size alone would suggest.",
      "The transportation side is a reconstruction market. The freeway system through the metro was built early and is being rebuilt segment by segment under traffic, the lakefront structures carry heavy maintenance obligations, and freeze-thaw on a Great Lakes climate shortens pavement and bridge deck life. Very little of this is greenfield work, so the valued skill is assessing and replacing what is already carrying load.",
    ],
    hiringFocus: [
      {
        role: "Stormwater & green infrastructure engineers",
        why: "A watershed-scale wet weather program treats surface water design as a core discipline rather than a site detail.",
      },
      {
        role: "Freeway reconstruction engineers",
        why: "An early-built interstate system is being replaced in stages while carrying traffic, which is the region's largest transportation category.",
      },
      {
        role: "Bridge inspection & rehabilitation engineers",
        why: "Freeze-thaw and a Great Lakes climate shorten structure life and keep assessment and repair continuous.",
      },
      {
        role: "Wastewater conveyance engineers",
        why: "Deep tunnel storage and separation work require hydraulic depth that generic civil experience does not cover.",
      },
    ],
    licensure:
      "Wisconsin licenses through the Department of Safety and Professional Services, and comity on an NCEES record is standard for an out-of-state PE. WisDOT maintains its own consultant qualification by work category and the sewerage district runs separate procurement, so hiring managers tend to weigh prior delivery under those systems more heavily than the license transfer itself.",
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    dot: "VDOT",
    marketNote:
      "Throughout the Richmond region and the Mid-Atlantic, we place PEs and project leads on the highway, bridge, and transit programs serving one of the East Coast's key corridors.",
    localPrograms: [
      "VDOT highway and interchange programs",
      "I-64 and I-95 corridor improvements",
      "GRTC Pulse bus-rapid-transit",
      "James River crossings and stormwater work",
      "Richmond International airport projects",
    ],
    agencies: [
      "VDOT Richmond District",
      "Richmond Department of Public Works",
      "Richmond Department of Public Utilities",
      "Chesterfield County Transportation",
      "Henrico County Department of Public Works",
      "GRTC Transit System",
    ],
    marketDetail: [
      "Richmond sits at the point where two interstates cross and where the James River drops over the fall line, and both facts drive the engineering. The interchange and corridor work that comes with a major freight crossroads is continuous, while the river's geology gives the city steep banks, rock close to the surface and a combined sewer system discharging into a waterway with real regulatory attention on it.",
      "That regulatory attention is the second driver. Chesapeake Bay nutrient and sediment obligations reach every jurisdiction in the watershed, which turns stormwater quality design, stream restoration and sewer separation into a standing program rather than a project type. Suburban Chesterfield and Henrico add a steady flow of land development and arterial work alongside it.",
    ],
    hiringFocus: [
      {
        role: "Stormwater quality & stream restoration engineers",
        why: "Bay watershed obligations make nutrient and sediment control a continuing regulatory requirement across every jurisdiction.",
      },
      {
        role: "Combined sewer & wet weather engineers",
        why: "Separation and overflow control on a monitored river keep hydraulic modeling and conveyance design continuously funded.",
      },
      {
        role: "Interchange & corridor design engineers",
        why: "A major freight crossroads keeps freeway capacity and interchange reconstruction on a steady cycle.",
      },
      {
        role: "Land development engineers",
        why: "Suburban county growth generates consistent grading, utility and entitlement volume outside the city line.",
      },
    ],
    licensure:
      "Virginia licenses through the Board for Architects, Professional Engineers, Land Surveyors, Certified Interior Designers and Landscape Architects within the Department of Professional and Occupational Regulation, and comity on an NCEES record is the usual route. VDOT runs consultant prequalification by work category, and because so much local work is stormwater compliance driven, familiarity with Virginia's stormwater management program is often checked alongside the license.",
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    dot: "MDOT SHA",
    marketNote:
      "In the Baltimore region, we recruit the bridge, transit, and water engineers rebuilding a historic port-city infrastructure network across the Mid-Atlantic.",
    localPrograms: [
      "MDOT SHA highway and bridge programs",
      "Key Bridge replacement and harbor crossings",
      "MTA transit and regional corridors",
      "Port of Baltimore and marine infrastructure",
      "Water and wastewater capital upgrades",
    ],
    agencies: [
      "MDOT State Highway Administration District 4",
      "Baltimore City Department of Transportation",
      "MDOT Maryland Transit Administration",
      "Baltimore City Department of Public Works",
      "Maryland Transportation Authority",
      "Maryland Port Administration",
    ],
    marketDetail: [
      "Baltimore's civil engineering is dominated by crossings and by buried infrastructure that is very old. The harbor is spanned and tunneled by structures that carry regional and interstate traffic, and their inspection, rehabilitation and replacement is a continuous engineering program with a toll authority, a state district and a city department all holding pieces of it. Engineers who can assess an existing structure and design an intervention into it are what this market is short of.",
      "Below the streets, the water and sewer network includes some of the oldest mains in the country, and the city carries long-running wet weather obligations on a harbor that drains to the Chesapeake. That combination keeps conveyance design, condition assessment and rehabilitation methods such as trenchless replacement in steady demand, and it means utility conflict work sits on nearly every roadway project in the older core.",
    ],
    hiringFocus: [
      {
        role: "Bridge & tunnel rehabilitation engineers",
        why: "Harbor crossings under multiple owners run continuous inspection and repair cycles that need engineers fluent in existing structures.",
      },
      {
        role: "Water & sewer rehabilitation engineers",
        why: "One of the oldest buried networks in the country makes condition assessment and trenchless renewal a standing specialism.",
      },
      {
        role: "Stormwater & Bay compliance engineers",
        why: "Chesapeake watershed obligations put nutrient and sediment control on projects across the region.",
      },
      {
        role: "Utility coordination & construction-phase engineers",
        why: "Dense, old and poorly recorded underground infrastructure makes conflict resolution a senior role on urban roadway work.",
      },
    ],
    licensure:
      "Maryland licenses through the State Board for Professional Engineers under the Department of Labor, and comity on an NCEES record is the standard route for an out-of-state PE. The layered ownership in this metro means prequalification matters more than usual: the state highway administration, the transportation authority, the transit administration and the city each maintain their own consultant arrangements, so prior work under a specific owner is often the decisive credential.",
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    dot: "LADOTD",
    marketNote:
      "Along the Louisiana Gulf Coast, we place civil, drainage, and coastal engineers on the flood-protection, highway, and resiliency programs central to greater New Orleans.",
    localPrograms: [
      "LADOTD highway and bridge programs",
      "Hurricane and storm-surge protection systems",
      "Coastal restoration and levee infrastructure",
      "Drainage and pump-station modernization",
      "Louis Armstrong airport and port projects",
    ],
    agencies: [
      "LADOTD District 02",
      "Sewerage and Water Board of New Orleans",
      "US Army Corps of Engineers New Orleans District",
      "Coastal Protection and Restoration Authority",
      "Port of New Orleans",
      "New Orleans Regional Transit Authority",
    ],
    marketDetail: [
      "No other American metro puts civil engineering so directly in charge of whether the city stays habitable. Flood risk reduction, levee and floodwall systems, interior drainage and pumping, and coastal restoration beyond the city are not projects here but permanent infrastructure obligations, and they are shared across a federal district, a state coastal authority and a city utility. Engineers with hydraulics, geotechnical or water resources depth have a market that does not track the general construction cycle.",
      "The ground makes everything harder. Soft compressible soils and ongoing subsidence mean deep foundations are routine, settlement governs design in ways it does not elsewhere, and buried utilities move. That gives local geotechnical judgment unusual weight, and it is the reason engineers who have worked in this soil profile are difficult to substitute with equivalent experience from another region.",
    ],
    hiringFocus: [
      {
        role: "Geotechnical engineers",
        why: "Soft soils and active subsidence make foundation and settlement analysis decisive on almost every project.",
      },
      {
        role: "Hydraulics & drainage engineers",
        why: "Interior drainage and pumping are permanent operating infrastructure, not periodic capital work.",
      },
      {
        role: "Coastal & water resources engineers",
        why: "Levee, floodwall and restoration programs run continuously across federal, state and local owners.",
      },
      {
        role: "Construction-phase engineers for water infrastructure",
        why: "Work built into a live flood protection and drainage system demands people who can accept and document it under operational constraints.",
      },
    ],
    licensure:
      "Louisiana licenses through the Professional Engineering and Land Surveying Board, and comity on an NCEES record is the usual route for an individual PE. Louisiana also licenses firms: a company practicing engineering in the state needs a certificate of authorization with a designated resident professional in responsible charge, which catches out-of-state firms opening an office here more often than it catches individuals.",
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    dot: "KYTC",
    marketNote:
      "Across the Louisville metro and the Ohio Valley, we staff the transportation, structural, and water teams behind the region's bridge, highway, and river-corridor programs.",
    localPrograms: [
      "KYTC highway and bridge programs",
      "Ohio River crossings and corridor projects",
      "TARC transit and mobility improvements",
      "Stormwater and combined-sewer (MSD) work",
      "Louisville airport and logistics infrastructure",
    ],
    agencies: [
      "KYTC District 5",
      "Louisville Metro Public Works",
      "Louisville and Jefferson County Metropolitan Sewer District",
      "Transit Authority of River City",
      "Louisville Regional Airport Authority",
      "Kentucky Transportation Cabinet Division of Structural Design",
    ],
    marketDetail: [
      "The Ohio River sets the transportation agenda. Crossings between Kentucky and Indiana carry interstate traffic on structures with long maintenance and rehabilitation obligations, and the interchange where three interstates meet downtown has been rebuilt and continues to be reworked in stages. Bridge engineering and construction-phase work under live traffic are the region's most durable demands.",
      "Underground, the metropolitan sewer district carries a consent decree that has funded tunnel storage and a sustained program of separation and conveyance improvement, while karst geology across parts of the county complicates drainage, foundations and any excavation that gets deep. Between the two, hydraulic and geotechnical specialists hold value here well beyond what the metro's size would suggest.",
    ],
    hiringFocus: [
      {
        role: "Bridge design & rehabilitation engineers",
        why: "Ohio River crossings and an aging structure inventory keep assessment and repair work continuous.",
      },
      {
        role: "Wastewater & conveyance engineers",
        why: "A consent decree program funds tunnel storage and separation work that needs genuine hydraulic depth.",
      },
      {
        role: "Geotechnical engineers with karst experience",
        why: "Limestone conditions across the county make subsurface risk a design driver rather than a routine check.",
      },
      {
        role: "Construction-phase engineers",
        why: "Interchange and river crossing work is staged under live interstate traffic, which is a distinct skill from design.",
      },
    ],
    licensure:
      "Kentucky licenses through the State Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the normal route. Because the metro reaches across the river into Indiana, engineers working the full region frequently carry both Kentucky and Indiana licenses, and the Transportation Cabinet maintains its own consultant prequalification by category alongside the license requirement.",
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    dot: "Oklahoma DOT",
    marketNote:
      "In central Oklahoma, we recruit the highway, structural, and water engineers supporting Oklahoma City's fast-growing transportation and infrastructure programs.",
    localPrograms: [
      "Oklahoma DOT highway and bridge programs",
      "MAPS and regional mobility projects",
      "Streetcar and transit corridors",
      "Stormwater and floodplain management",
      "Will Rogers airport capital projects",
    ],
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    dot: "SCDOT",
    marketNote:
      "Across the Charleston region and the South Carolina Lowcountry, we place civil, coastal, and transportation engineers on the highway, bridge, and resiliency programs shaping a fast-growing coastal market.",
    localPrograms: [
      "SCDOT highway and bridge programs",
      "Lowcountry Rapid Transit corridor",
      "Coastal flooding and drainage resiliency",
      "Port of Charleston and harbor deepening",
      "Regional roadway and mobility projects",
    ],
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    dot: "NJDOT",
    marketNote:
      "In northern New Jersey and the greater New York–Newark corridor, we recruit the bridge, transit, and civil engineers modernizing one of the nation's densest infrastructure networks.",
    localPrograms: [
      "NJDOT highway and bridge programs",
      "NJ TRANSIT rail and Portal Bridge works",
      "Gateway Program regional rail investments",
      "Port and industrial corridor infrastructure",
      "Newark Liberty airport redevelopment",
    ],
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    dot: "Caltrans",
    marketNote:
      "Across the Bay Area, we place civil, structural, and seismic engineers on the bridge, transit, and water-reliability programs that keep one of the country's most complex regions moving.",
    localPrograms: [
      "Caltrans District 4 highway & bridge programs",
      "BART core-capacity and transit expansion",
      "Seismic retrofit of bridges and structures",
      "Regional water and seismic reliability programs",
      "SFO airport modernization",
    ],
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    dot: "Caltrans",
    marketNote:
      "In the San Diego region, we connect firms with PEs and project leads driving the freeway, transit, and water-recycling programs shaping Southern California's southern gateway.",
    localPrograms: [
      "Caltrans District 11 freeway & interchange work",
      "MTS trolley and transit expansion",
      "Pure Water San Diego recycling program",
      "Coastal rail realignment and bluff stabilization",
      "San Diego International Airport redevelopment",
    ],
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    dot: "TxDOT",
    marketNote:
      "Throughout San Antonio and South Texas, we staff the transportation, drainage, and water teams behind the highway, flood-control, and aquifer programs central to the region's growth.",
    localPrograms: [
      "TxDOT San Antonio District highway programs",
      "VIA Metropolitan Transit rapid corridors",
      "San Antonio River and flood-control tunnels",
      "Edwards Aquifer water-resource projects",
      "San Antonio International Airport expansion",
    ],
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    dot: "TxDOT",
    marketNote:
      "In fast-growing Central Texas, we help firms scale civil and transportation teams for the highway, transit, and water programs keeping pace with the Austin metro's expansion.",
    localPrograms: [
      "TxDOT I-35 Capital Express highway program",
      "Project Connect light-rail and transit",
      "Colorado River and watershed management",
      "Regional water and utility infrastructure",
      "Austin-Bergstrom airport expansion",
    ],
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    dot: "FDOT",
    marketNote:
      "Across Jacksonville and North Florida, we recruit the bridge, drainage, and transportation engineers supporting the highway, resiliency, and port programs of the region's largest city.",
    localPrograms: [
      "FDOT District 2 highway and bridge programs",
      "JTA transit and Ultimate Urban Circulator",
      "St. Johns River crossings and resiliency",
      "Coastal and stormwater drainage upgrades",
      "JAXPORT and marine infrastructure",
    ],
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    dot: "FDOT",
    marketNote:
      "In our home market of Central Florida, we place civil and transportation engineers on the interstate, toll, and transit programs driving one of the nation's fastest-growing metros.",
    localPrograms: [
      "FDOT I-4 Ultimate & Beyond corridor program",
      "SunRail commuter-rail expansion",
      "Central Florida Expressway (CFX) toll programs",
      "Water and reclaimed-water capital projects",
      "Orlando International Airport (MCO) expansion",
    ],
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    dot: "PennDOT",
    marketNote:
      "In Pittsburgh and Western Pennsylvania, we recruit the bridge, structural, and water engineers rebuilding a historic three-rivers infrastructure network.",
    localPrograms: [
      "PennDOT District 11 bridge and roadway programs",
      "Pittsburgh Regional Transit busway and rail work",
      "Three-rivers bridge rehabilitation and replacement",
      "ALCOSAN combined-sewer water-quality program",
      "Pittsburgh International Airport modernization",
    ],
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    dot: "Ohio DOT",
    marketNote:
      "Across greater Cincinnati and the Ohio Valley, we connect firms with civil and transportation talent for the bridge, transit, and river-corridor programs modernizing the region.",
    localPrograms: [
      "Ohio DOT & Brent Spence Bridge corridor program",
      "Metro / SORTA transit and bus-rapid-transit",
      "Ohio River crossings and floodwall systems",
      "MSD combined-sewer and water-quality upgrades",
      "CVG airport capital projects",
    ],
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    dot: "Ohio DOT",
    marketNote:
      "In Cleveland and Northeast Ohio, we staff the transportation, structural, and water teams behind the freeway, transit, and lakefront programs rebuilding regional infrastructure.",
    localPrograms: [
      "Ohio DOT freeway and bridge programs",
      "GCRTA rail and transit modernization",
      "Cuyahoga River and lakefront infrastructure",
      "Project Clean Lake stormwater program",
      "Cleveland Hopkins airport improvements",
    ],
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    dot: "MoDOT",
    marketNote:
      "Throughout the St. Louis metro, we place civil and transportation engineers on the bridge, levee, and transit programs serving a two-state Mississippi River market.",
    localPrograms: [
      "MoDOT & IDOT Mississippi River bridge programs",
      "MetroLink light-rail expansion",
      "Levee, floodwall, and river-corridor systems",
      "MSD combined-sewer and stormwater program",
      "St. Louis Lambert airport modernization",
    ],
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    dot: "NCDOT",
    marketNote:
      "Across the Research Triangle, we place PEs and project leads on the highway, transit, and water programs driving one of the Southeast's fastest-growing regions.",
    localPrograms: [
      "NCDOT highway and interchange programs",
      "GoTriangle commuter-rail and BRT corridors",
      "Neuse River basin and stormwater work",
      "Regional water and utility expansion",
      "RDU airport capital improvements",
    ],
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    dot: "DDOT",
    marketNote:
      "In the National Capital region, we recruit the bridge, transit, and water engineers supporting one of the country's most heavily used federal and municipal infrastructure networks.",
    localPrograms: [
      "DDOT roadway and bridge programs",
      "WMATA Metrorail and transit capital work",
      "Federal facility and security infrastructure",
      "Anacostia River and Clean Rivers tunnel program",
      "Reagan National & Dulles airport projects",
    ],
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    dot: "CTDOT",
    marketNote:
      "Across central Connecticut and New England, we place civil, structural, and water engineers on the highway, transit, and flood-control programs modernizing the region.",
    localPrograms: [
      "CTDOT highway and bridge programs",
      "CTfastrak BRT and Hartford Line rail",
      "Connecticut River and flood-control systems",
      "Clean Water Fund and utility upgrades",
      "Bradley International Airport improvements",
    ],
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    dot: "NMDOT",
    marketNote:
      "In Albuquerque and across New Mexico, we help firms scale civil and transportation teams for the highway, transit, and water-resource programs serving the high-desert Southwest.",
    localPrograms: [
      "NMDOT highway and interchange programs",
      "ABQ RIDE and Rail Runner transit corridors",
      "Rio Grande water-resource and drainage work",
      "AMAFCA arroyo flood-control systems",
      "Albuquerque International Sunport projects",
    ],
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    dot: "ALDOT",
    marketNote:
      "Throughout the Birmingham metro and the Deep South, we recruit the bridge, highway, and water engineers supporting the region's interstate and utility infrastructure programs.",
    localPrograms: [
      "ALDOT highway and I-59/20 bridge programs",
      "BJCTA transit and mobility projects",
      "Cahaba and Black Warrior watershed work",
      "Regional water and sewer upgrades",
      "Birmingham-Shuttlesworth airport improvements",
    ],
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    dot: "TDOT",
    marketNote:
      "In Memphis and the Mid-South, we place civil, drainage, and transportation engineers on the highway, levee, and logistics-infrastructure programs central to a major river and freight hub.",
    localPrograms: [
      "TDOT highway and I-55 Mississippi River bridge work",
      "MATA transit and mobility improvements",
      "Wolf River and Mississippi levee systems",
      "Stormwater and drainage capital program",
      "Memphis International Airport modernization",
    ],
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    dot: "NDOT",
    marketNote:
      "Across the Omaha metro and the Great Plains, we staff the transportation, structural, and water teams behind the highway, transit, and river-corridor programs serving the region.",
    localPrograms: [
      "NDOT highway and interchange programs",
      "ORBT bus-rapid-transit and mobility",
      "Missouri River crossings and levee systems",
      "Combined-sewer overflow (CSO) program",
      "Eppley Airfield capital projects",
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    dot: "ITD",
    marketNote:
      "In the fast-growing Boise metro and the Intermountain West, we place civil and transportation engineers on the highway, transit, and water programs keeping pace with the region's expansion.",
    localPrograms: [
      "ITD highway and interchange programs",
      "Valley Regional Transit corridors",
      "Boise River and flood-management work",
      "Regional water and utility infrastructure",
      "Boise Airport expansion projects",
    ],
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    dot: "RIDOT",
    marketNote:
      "Across Providence and Rhode Island, we recruit the bridge, coastal, and water engineers delivering one of New England's most ambitious statewide bridge-repair programs.",
    localPrograms: [
      "RIDOT RhodeWorks bridge and highway program",
      "RIPTA transit and multimodal projects",
      "Providence River and coastal resiliency",
      "Narragansett Bay water-quality program",
      "T.F. Green airport improvements",
    ],
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    dot: "NYSDOT",
    marketNote:
      "In Buffalo and Western New York, we place civil, structural, and water engineers on the highway, transit, and waterfront programs revitalizing the region's infrastructure.",
    localPrograms: [
      "NYSDOT Buffalo region highway and bridge programs",
      "NFTA Metro Rail extension and transit",
      "Lake Erie and Niagara River infrastructure",
      "Buffalo Sewer combined-sewer program",
      "Buffalo Niagara International Airport projects",
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every city page (and the national hub) ──────────

export const EXPERTISE = [
  "Transportation & Highway Engineering (AASHTO Standards)",
  "Bridge & Structural Engineering",
  "Water, Wastewater & Environmental Engineering",
  "Aviation & Airport Infrastructure (FAA Regulations)",
  "Federal & Defense Infrastructure (USACE / NAVFAC)",
  "Energy & Renewable Infrastructure",
  "Construction Engineering & Inspection (CEI)",
];

// Tool, certification, and code-fluency skills we screen for — distinct from
// EXPERTISE (discipline areas) and ROLES (job titles). Shared across every
// civil city page rather than varying by market, matching the same call made
// for the MEP pages (see MEP_SKILLS in lib/mep.ts).
export const SKILLS = [
  "AutoCAD Civil 3D",
  "Bentley MicroStation / OpenRoads Designer",
  "Bentley InRoads",
  "ArcGIS / geospatial analysis",
  "HEC-RAS hydrology & hydraulics modeling",
  "HEC-HMS",
  "Bentley SewerGEMS / WaterGEMS",
  "Synchro / SimTraffic",
  "PTV Vissim traffic simulation",
  "STAAD.Pro / RISA structural analysis",
  "Pavement design software (e.g. MicroPaver)",
  "Professional Engineer (PE) license",
  "Professional Traffic Operations Engineer (PTOE)",
  "Certified Floodplain Manager (CFM)",
  "OSHA 30-Hour certification",
  "NICET certification (construction inspection)",
  "AASHTO design standards fluency",
  "FHWA / State DOT design manual fluency",
  "Erosion & sediment control (SWPPP) design",
  "Construction engineering & inspection (CEI)",
];

export const ROLES = [
  "Civil Project Manager (PE)",
  "Senior Transportation Engineer",
  "Structural / Bridge Engineer",
  "Water Resources & Drainage Engineer",
  "Traffic & ITS Engineer",
  "Geotechnical Engineer",
  "Construction Manager & Resident Engineer",
  "VP of Infrastructure / Office Lead",
  "BIM & VDC Specialists",
];

export const SALARIES = [
  { role: "Civil Designer / CAD Technician", range: "$55,000 – $78,000" },
  { role: "Civil Engineer (EIT)", range: "$70,000 – $95,000" },
  { role: "Project Engineer (Pre-PE)", range: "$82,000 – $108,000" },
  { role: "Traffic & ITS Engineer (PE)", range: "$100,000 – $140,000" },
  { role: "Licensed PE (Mid-Level)", range: "$105,000 – $150,000" },
  { role: "Geotechnical Engineer (PE)", range: "$108,000 – $152,000" },
  { role: "Senior Project Manager", range: "$140,000 – $190,000+" },
  { role: "Regional Director", range: "$175,000 – $250,000+" },
];

export const WHY = [
  {
    title: "National Talent Pipeline",
    body: "Access to a vast database of 50,000+ pre-vetted engineering professionals.",
  },
  {
    title: "Multi-State Licensing Expertise",
    body: "We understand NCEES comity and the complexities of multi-state PE licensure.",
  },
  {
    title: "Passive Candidate Acquisition",
    body: "Our recruiters reach high-performers who are not actively on job boards.",
  },
  {
    title: "Scalable Staffing Solutions",
    body: "From a single PE to an entire project team for a multi-year contract.",
  },
  {
    title: "Federal & State Compliance",
    body: "Fluency in hiring requirements for FHWA, FAA, and major State DOT projects.",
  },
];
