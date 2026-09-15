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
    agencies: [
      "ODOT Division 4",
      "Oklahoma City Public Works",
      "Oklahoma Turnpike Authority",
      "Oklahoma City Water Utilities Trust",
      "EMBARK",
      "Will Rogers International Airport",
    ],
    marketDetail: [
      "Oklahoma City funds an unusual amount of its own civil infrastructure through voter-approved capital programs rather than waiting on state and federal cycles, which gives the metro a steadier stream of streets, drainage, park and utility work than its size suggests. For engineers that means municipal design volume is more predictable here, and the agencies letting it expect consultants who can carry a project from concept through construction administration.",
      "The physical conditions are the other half. Expansive clay soils move with moisture and are hard on pavements, foundations and buried pipe, so subgrade treatment and pavement design get attention that engineers from other regions treat as routine. Severe weather adds a hardening and resilience dimension to public facilities, and the flat terrain means drainage design works with very little natural fall.",
    ],
    hiringFocus: [
      {
        role: "Municipal & streets design engineers",
        why: "Locally funded capital programs keep street, drainage and utility design volume steadier than the state cycle alone would.",
      },
      {
        role: "Geotechnical & pavement engineers",
        why: "Expansive clay is the region's defining subsurface problem and governs pavement and foundation design.",
      },
      {
        role: "Drainage & stormwater engineers",
        why: "Flat terrain with minimal fall makes conveyance and detention design demanding on nearly every site.",
      },
      {
        role: "Construction administration engineers",
        why: "Owners here expect consultants to stay through construction, which makes field-capable engineers harder to find than designers.",
      },
    ],
    licensure:
      "Oklahoma licenses through the State Board of Licensure for Professional Engineers and Land Surveyors, and comity on an NCEES record is the standard route for an out-of-state PE. Oklahoma also requires a certificate of authorization for firms practicing engineering in the state, which is the step out-of-state consultancies most often miss when they open an office here. ODOT and the turnpike authority each maintain their own consultant prequalification.",
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
    agencies: [
      "SCDOT District 6",
      "Charleston County Transportation Development",
      "City of Charleston Department of Public Service",
      "Charleston Water System",
      "South Carolina Ports Authority",
      "Berkeley-Charleston-Dorchester Council of Governments",
    ],
    marketDetail: [
      "Charleston's civil engineering is organized around water that is rising and ground that does not drain. The peninsula floods on tides that are not storms, the response has run to deep drainage tunnels and pump stations, and every project in the older city has to reconcile modern hydraulic requirements with a historic fabric that constrains what can be dug, routed or raised. Drainage and resilience are the region's defining specialisms.",
      "Outside the peninsula the market is growth and freight. Lowcountry soils are soft and often require ground improvement or deep foundations, the port and its inland connections generate sustained heavy-load roadway and rail work, and the suburban counties are expanding fast enough to keep land development, arterial extension and utility trunk design continuously busy.",
    ],
    hiringFocus: [
      {
        role: "Drainage & coastal resilience engineers",
        why: "Tidal flooding and a built drainage and pumping response make hydraulics a permanent regional program.",
      },
      {
        role: "Geotechnical engineers",
        why: "Soft Lowcountry soils make ground improvement and deep foundation design a routine requirement rather than an exception.",
      },
      {
        role: "Roadway & freight corridor engineers",
        why: "Port growth drives heavy-load pavement, bridge and connector work across the region.",
      },
      {
        role: "Land development engineers",
        why: "Rapid suburban expansion in the surrounding counties keeps grading, utility and entitlement volume high.",
      },
    ],
    licensure:
      "South Carolina licenses through the Board of Registration for Professional Engineers and Surveyors within the Department of Labor, Licensing and Regulation, and comity on an NCEES record is the usual route. Coastal work adds a second layer beyond the license: the state's coastal zone program governs construction near the shoreline, and familiarity with that permitting regime is frequently what a hiring manager is actually testing for in this market.",
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
    agencies: [
      "NJDOT",
      "NJ TRANSIT",
      "Port Authority of NY & NJ",
      "Newark Department of Engineering",
      "New Jersey Turnpike Authority",
      "Passaic Valley Sewerage Commission",
    ],
    marketDetail: [
      "Newark sits at the densest freight and transport junction in the region: an international airport, one of the busiest container ports on the east coast, the Northeast Corridor rail line and two major toll roads all inside a few miles. The civil engineering that follows is almost entirely about rebuilding and expanding capacity in a corridor that has no spare land, which puts a premium on staging, utility coordination and engineers who can work inside an operating facility.",
      "The second characteristic is legacy. This is old industrial ground, so brownfield conditions, contaminated soils and remediation requirements attach to a large share of sites, and the buried water and sewer network is old enough that replacement rather than repair is often the honest answer. Combined sewer obligations on the Passaic and the harbor keep wet weather engineering on the program continuously.",
    ],
    hiringFocus: [
      {
        role: "Site civil engineers with brownfield experience",
        why: "Legacy industrial contamination attaches to a large share of developable land and changes how a site is engineered.",
      },
      {
        role: "Water & sewer replacement engineers",
        why: "An old buried network and combined sewer obligations make renewal and wet weather design a standing program.",
      },
      {
        role: "Construction-phase engineers for live facilities",
        why: "Airport, port and rail work is built around operations that cannot stop, which is a distinct discipline from design.",
      },
      {
        role: "Roadway & freight corridor engineers",
        why: "Port and airport traffic loads keep heavy-duty pavement, ramp and connector work continuous in constrained right of way.",
      },
    ],
    licensure:
      "New Jersey licenses through the State Board of Professional Engineers and Land Surveyors within the Division of Consumer Affairs, and comity on an NCEES record is the normal route. In this metro the bigger practical question is usually multi-jurisdiction reach: the Port Authority is bi-state and a great deal of regional work spans the New York line, so engineers who hold both New Jersey and New York licenses can be staffed on more of the market.",
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
    agencies: [
      "Caltrans District 4",
      "San Francisco Municipal Transportation Agency",
      "San Francisco Public Works",
      "San Francisco Public Utilities Commission",
      "BART",
      "Port of San Francisco",
    ],
    marketDetail: [
      "Seismic performance is the organizing principle of civil engineering in the Bay Area. Active faults on both sides of the bay, large areas of engineered fill that will liquefy, and an infrastructure stock that predates current standards have made assessment, retrofit and replacement a permanent program rather than a response to any single event. Geotechnical and structural judgment about existing conditions is the scarcest capability in this market.",
      "Sea level and the waterfront are the second driver. The seawall, the low-lying fill districts and the region's wastewater and stormwater outfalls all sit at elevations that are being reconsidered, which has turned coastal engineering and drainage into long-horizon capital programs. Layered on top is a regulatory and entitlement environment slow enough that permitting fluency is itself a hiring criterion.",
    ],
    hiringFocus: [
      {
        role: "Geotechnical engineers with liquefaction experience",
        why: "Large areas of engineered fill make ground behavior the decisive design question on waterfront and infill sites.",
      },
      {
        role: "Seismic retrofit & structural assessment engineers",
        why: "An older infrastructure stock in an active seismic region keeps evaluation and strengthening continuously funded.",
      },
      {
        role: "Coastal & sea level adaptation engineers",
        why: "Seawall and low-lying shoreline programs are long-horizon capital work with few engineers experienced in them.",
      },
      {
        role: "Permitting-fluent civil engineers",
        why: "Approval timelines here are long enough that regulatory navigation is a distinct and valued professional skill.",
      },
    ],
    licensure:
      "California licenses civil engineers through the Board for Professional Engineers, Land Surveyors and Geologists, and it is not a straightforward comity state: applicants must pass California-specific examinations in seismic principles and engineering surveying in addition to the national exams, so an out-of-state PE cannot simply transfer. California also issues separate authorities for structural and geotechnical engineering beyond the civil license, which matters for anyone expected to seal that work.",
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
    agencies: [
      "Caltrans District 11",
      "San Diego Engineering & Capital Projects",
      "San Diego County Department of Public Works",
      "San Diego Association of Governments",
      "San Diego County Water Authority",
      "Port of San Diego",
    ],
    marketDetail: [
      "San Diego's terrain does more to shape its civil engineering than its climate does. The city is cut by canyons and mesas, which means steep slopes, retaining structures, canyon crossings and slope stability analysis attach to a large share of projects, and the coastal edge adds bluff erosion and shoreline protection as their own line of work. Grading and geotechnical design carry more weight here than in a flat metro of the same size.",
      "Water supply is the other constant. The region imports most of what it uses, and the engineering response has been a sustained program of storage, conveyance, desalination and potable reuse that runs independently of the construction cycle. Between that and a border region generating its own cross-border infrastructure and freight work, water resources and roadway engineers both find steady demand.",
    ],
    hiringFocus: [
      {
        role: "Geotechnical & slope stability engineers",
        why: "Canyon and mesa terrain makes slope analysis and retaining design a routine project driver rather than a specialty call.",
      },
      {
        role: "Water resources & potable reuse engineers",
        why: "Import dependence has made recycling, storage and conveyance a permanent regional program.",
      },
      {
        role: "Coastal & shoreline protection engineers",
        why: "Bluff erosion and beach management are continuing obligations with a small local pool of experienced designers.",
      },
      {
        role: "Roadway & freight corridor engineers",
        why: "Border crossings and port traffic keep heavy-load corridor and connector work on a steady cycle.",
      },
    ],
    licensure:
      "California licenses through the Board for Professional Engineers, Land Surveyors and Geologists, and the state requires its own seismic principles and engineering surveying examinations in addition to the national exams, so an out-of-state PE does not transfer by comity alone. Given how much local work is slope and foundation driven, the separate California geotechnical engineer authority is worth confirming for any candidate expected to seal that analysis.",
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
    agencies: [
      "TxDOT San Antonio District",
      "San Antonio Public Works",
      "San Antonio Water System",
      "VIA Metropolitan Transit",
      "Bexar County Public Works",
      "San Antonio River Authority",
    ],
    marketDetail: [
      "The Edwards Aquifer recharge zone runs under a large part of the San Antonio metro, and it governs development in a way no other constraint here does. Work over the recharge zone carries its own state protection plan requirements, water quality controls and construction restrictions, which means site civil and stormwater engineers in this market spend real time on a regulatory regime that does not exist elsewhere in Texas.",
      "Flooding is the second defining condition. This part of Texas produces some of the most intense rainfall in the country on ground that sheds it quickly, and the regional response has been a long program of channel improvement, detention and flood control alongside the river authority's watershed work. Add sustained growth along the corridor toward Austin and the demand runs across drainage, roadway and land development at once.",
    ],
    hiringFocus: [
      {
        role: "Stormwater engineers with recharge zone experience",
        why: "Aquifer protection requirements make water quality design a regulated specialism unique to this part of the state.",
      },
      {
        role: "Drainage & flood control engineers",
        why: "Extreme rainfall intensity on fast-shedding ground keeps channel, detention and flood mitigation work continuous.",
      },
      {
        role: "Land development engineers",
        why: "Sustained corridor growth drives high volumes of grading, utility and entitlement work.",
      },
      {
        role: "Roadway & interchange design engineers",
        why: "Interstate capacity and arterial extension follow the same growth and stay consistently funded.",
      },
    ],
    licensure:
      "Texas licenses through the Board of Professional Engineers and Land Surveyors, and comity on an NCEES record is the normal route for an individual. Texas also registers firms: a company offering engineering services in the state needs its own registration, which is the requirement out-of-state consultancies most often overlook. TxDOT maintains separate consultant prequalification by work category on top of both.",
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
    agencies: [
      "TxDOT Austin District",
      "City of Austin Public Works",
      "Austin Water",
      "Capital Metro",
      "Central Texas Regional Mobility Authority",
      "Travis County Transportation and Natural Resources",
    ],
    marketDetail: [
      "Austin combines the fastest sustained growth of any large Texas metro with some of the most restrictive local environmental rules in the state. Development over the contributing and recharge zones of the aquifer that feeds the city's springs carries water quality requirements, impervious cover limits and a watershed ordinance regime that shapes site design from the first sketch. Civil engineers who know that framework are materially more employable here than equally qualified engineers who do not.",
      "The second driver is capacity. A single interstate carries most of the region's north to south traffic and is being reconstructed through the center of the city, a regional mobility authority runs its own toll corridor program, and transit expansion is being built into the same constrained rights of way. Flash flooding on the Colorado and its tributaries keeps drainage design in the middle of all of it.",
    ],
    hiringFocus: [
      {
        role: "Site civil engineers with watershed ordinance experience",
        why: "Local water quality and impervious cover rules govern site design and are specific enough to be their own expertise.",
      },
      {
        role: "Drainage & floodplain engineers",
        why: "Flash flood exposure on the region's creeks makes hydraulic modeling and floodplain work a constant requirement.",
      },
      {
        role: "Roadway & corridor reconstruction engineers",
        why: "Rebuilding the region's main north to south corridor under traffic is the largest sustained transportation program here.",
      },
      {
        role: "Land development engineers",
        why: "Growth continues to outpace infrastructure, keeping grading, utility and entitlement design in heavy demand.",
      },
    ],
    licensure:
      "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity on an NCEES record the usual individual route and a separate firm registration required for companies offering engineering services in the state. In Austin specifically, the credential hiring managers probe hardest is not the license but whether the engineer has taken projects through the city's watershed and site development review, which is slower and more prescriptive than most Texas jurisdictions.",
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
    agencies: [
      "FDOT District 2",
      "City of Jacksonville Public Works",
      "JEA",
      "Jacksonville Transportation Authority",
      "JAXPORT",
      "St. Johns River Water Management District",
    ],
    marketDetail: [
      "Jacksonville is a low, flat, coastal city built around a tidal river, and that combination puts drainage and storm resilience at the center of its civil engineering. Storm surge reaches well inland along the St. Johns, the water table is high, and much of the older city drains through systems sized for a different era, so conveyance upgrades, pump stations and shoreline work are continuous rather than episodic.",
      "The port and the road network carry the rest of the market. Container and vehicle traffic drive heavy-load pavement, rail connection and interchange work, and the region's outward growth keeps arterial extension, utility trunk mains and a long-running program of converting septic areas onto the public sewer system busy. Sandy soils and high groundwater complicate every excavation that gets deep.",
    ],
    hiringFocus: [
      {
        role: "Drainage & storm resilience engineers",
        why: "Low elevation, high water table and tidal surge make conveyance and pumping design a permanent regional need.",
      },
      {
        role: "Water & sewer extension engineers",
        why: "Converting septic areas onto public sewer is a sustained utility program with steady design volume.",
      },
      {
        role: "Roadway & freight corridor engineers",
        why: "Port traffic keeps heavy-load pavement, interchange and rail connection work continuously funded.",
      },
      {
        role: "Geotechnical engineers",
        why: "Sandy soils with shallow groundwater make dewatering and foundation design a recurring project risk.",
      },
    ],
    licensure:
      "Florida licenses through the Board of Professional Engineers, and comity on an NCEES record is the standard route for an out-of-state PE. FDOT prequalifies consultants by work type and the district here lets a large share of the regional program, so prior FDOT delivery is usually checked alongside the license. Coastal construction also falls under the state's coastal construction control line permitting, which is its own body of knowledge.",
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
    agencies: [
      "FDOT District 5",
      "Orange County Public Works",
      "City of Orlando Transportation Engineering",
      "Central Florida Expressway Authority",
      "Orlando Utilities Commission",
      "Greater Orlando Aviation Authority",
    ],
    marketDetail: [
      "Central Florida's ground is limestone under sand, which makes sinkhole risk and karst drainage a genuine design consideration rather than a regional curiosity. Combined with a high water table and almost no topographic relief, it means stormwater is managed through retention and infiltration systems on nearly every site, and geotechnical investigation carries weight on projects that would be routine elsewhere.",
      "The transportation market is unusually layered. A state district, a regional expressway authority with its own toll program, county and city departments and an aviation authority all let work in the same metro, and the tourism corridor generates constrained, high-visibility projects that have to be staged around continuous visitor traffic. Sustained population growth keeps arterial, utility and land development volume high across all of it.",
    ],
    hiringFocus: [
      {
        role: "Stormwater & retention design engineers",
        why: "Flat terrain, high groundwater and infiltration-based treatment put pond and conveyance design on nearly every site.",
      },
      {
        role: "Geotechnical engineers with karst experience",
        why: "Limestone and sinkhole risk make subsurface investigation a design driver rather than a formality.",
      },
      {
        role: "Roadway & tolled corridor engineers",
        why: "A regional expressway authority runs its own continuous capital program alongside the state district.",
      },
      {
        role: "Land development engineers",
        why: "Sustained growth keeps grading, utility and entitlement design volume among the highest in the state.",
      },
    ],
    licensure:
      "Florida licenses through the Board of Professional Engineers, with comity on an NCEES record the normal route for an out-of-state PE. The layered ownership in this metro makes prequalification the practical gate: the state district and the regional expressway authority each maintain their own consultant arrangements, and which of those an engineer has delivered under tends to decide hiring more than the license transfer does.",
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
    agencies: [
      "PennDOT District 11-0",
      "Pittsburgh Department of Mobility and Infrastructure",
      "Allegheny County Department of Public Works",
      "ALCOSAN",
      "Pittsburgh Water and Sewer Authority",
      "Pittsburgh Regional Transit",
    ],
    marketDetail: [
      "Pittsburgh has more bridges than any comparable American city, spread across a state district, a county department and the city itself, and most of them are old. Inspection, load rating, rehabilitation and replacement are therefore not a project category here but the base load of the regional civil market, and engineers who can assess an existing structure and design an intervention into it are the hardest people to hire.",
      "Terrain and legacy ground conditions supply the rest. Steep hillsides make landslide risk and retaining structure design a routine part of roadway work, historic mining beneath parts of the county raises subsidence as a real design question, and a combined sewer system across the region carries wet weather obligations that have funded a sustained conveyance and storage program.",
    ],
    hiringFocus: [
      {
        role: "Bridge inspection & rehabilitation engineers",
        why: "An unusually large and aging structure inventory under three owners makes structural assessment the region's base workload.",
      },
      {
        role: "Geotechnical engineers with slope and mine subsidence experience",
        why: "Steep hillsides and historic mining make ground stability a recurring design driver rather than an occasional check.",
      },
      {
        role: "Wastewater & conveyance engineers",
        why: "Regional combined sewer obligations fund a long-running storage and conveyance program needing hydraulic depth.",
      },
      {
        role: "Construction-phase engineers",
        why: "Structure replacement on constrained hillside sites under traffic is a staging problem as much as a design one.",
      },
    ],
    licensure:
      "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, and comity on an NCEES record is the normal route. PennDOT operates its own consultant qualification process and publishes structure-specific requirements, so for bridge work in this market the questions that decide a hire are usually about inspection qualification and prior district experience rather than the license itself.",
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
    agencies: [
      "ODOT District 8",
      "Cincinnati Department of Transportation and Engineering",
      "Metropolitan Sewer District of Greater Cincinnati",
      "Hamilton County Engineer",
      "Greater Cincinnati Water Works",
      "Cincinnati/Northern Kentucky International Airport",
    ],
    marketDetail: [
      "Cincinnati's civil engineering is defined by hillsides and by a sewer consent decree. The city is built on steep slopes cut by ravines, which makes landslide risk, retaining walls and slope stabilization a normal part of roadway and site work, and the regional sewer district carries one of the more demanding wet weather programs in the country, funding years of separation, storage and conveyance design.",
      "The Ohio River adds the third element. Interstate traffic crosses here on structures carrying far more load than they were designed for, the corridor work that follows is long-running and heavily staged, and the metro reaches into Kentucky and Indiana, so regional projects routinely involve more than one state's standards and more than one DOT.",
    ],
    hiringFocus: [
      {
        role: "Geotechnical & slope stabilization engineers",
        why: "Hillside terrain makes landslide risk and retaining design a standing requirement on roadway and site projects.",
      },
      {
        role: "Wastewater & conveyance engineers",
        why: "A major consent decree program funds sustained separation, storage and hydraulic design work.",
      },
      {
        role: "Bridge design & rehabilitation engineers",
        why: "River crossings carrying interstate traffic well beyond original design assumptions keep structural work continuous.",
      },
      {
        role: "Multi-state licensed civil engineers",
        why: "A tri-state metro means regional projects cross jurisdictions and single-state licensure limits what an engineer can seal.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the usual route. Because this metro extends into Kentucky and Indiana, engineers working the full region frequently hold two or three licenses, and that breadth is a common differentiator in hiring here. ODOT maintains consultant prequalification by work type alongside the license.",
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
    agencies: [
      "ODOT District 12",
      "City of Cleveland Division of Engineering and Construction",
      "Northeast Ohio Regional Sewer District",
      "Cuyahoga County Department of Public Works",
      "Greater Cleveland Regional Transit Authority",
      "Cleveland Water",
    ],
    marketDetail: [
      "Cleveland's largest sustained civil program is underground. The regional sewer district is delivering a long-running consent decree response built around large diameter storage tunnels and green infrastructure, which concentrates tunneling, hydraulic modeling and conveyance expertise locally and keeps a wide group of civil engineers employed across design and construction phases for years at a time.",
      "Above ground, the region is a reconstruction market shaped by a hard climate. Freeze-thaw on a Great Lakes shoreline shortens the life of pavements and bridge decks, the Cuyahoga's crossings include movable structures with their own inspection and rehabilitation regime, and shoreline erosion along Lake Erie is a continuing obligation. Legacy industrial land adds brownfield conditions to a significant share of redevelopment sites.",
    ],
    hiringFocus: [
      {
        role: "Wastewater & tunnel conveyance engineers",
        why: "A large consent decree program built on storage tunnels gives the region unusual depth of demand for hydraulic specialists.",
      },
      {
        role: "Bridge inspection & rehabilitation engineers",
        why: "An aging inventory including movable structures in a freeze-thaw climate keeps assessment and repair continuous.",
      },
      {
        role: "Stormwater & green infrastructure engineers",
        why: "Green infrastructure is a funded component of the regional wet weather response rather than an optional add-on.",
      },
      {
        role: "Site civil engineers with brownfield experience",
        why: "Legacy industrial ground attaches remediation and soil management requirements to much of the redevelopment market.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, and comity on an NCEES record is the standard route for an out-of-state PE. ODOT prequalifies consultants by work category and the regional sewer district runs its own procurement, so hiring managers generally weigh prior delivery under those two systems more heavily than the license transfer itself.",
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
    agencies: [
      "MoDOT St. Louis District",
      "Metropolitan St. Louis Sewer District",
      "City of St. Louis Board of Public Service",
      "St. Louis County Department of Transportation",
      "Bi-State Development / Metro Transit",
      "St. Louis Lambert International Airport",
    ],
    marketDetail: [
      "The regional sewer district runs one of the largest wet weather programs in the country, and it is the single most reliable source of civil engineering work in this metro. Separation, storage, treatment capacity and green infrastructure are funded over a horizon measured in decades rather than budget cycles, which gives hydraulic modelers and conveyance designers a local market that does not rise and fall with construction generally.",
      "The rivers shape everything else. St. Louis sits at the confluence of the Mississippi and Missouri, which means levees, floodplain management and a set of major crossings with long inspection and rehabilitation obligations, and it means the metro spans into Illinois so a good deal of regional work involves two states' standards. Alluvial and loess soils add settlement and slope questions to projects near the bluffs and the floodplain alike.",
    ],
    hiringFocus: [
      {
        role: "Wastewater & conveyance engineers",
        why: "A decades-long regional wet weather program makes hydraulic design the most durable specialism in the metro.",
      },
      {
        role: "Bridge inspection & rehabilitation engineers",
        why: "Major river crossings with long service lives keep structural assessment and repair continuously funded.",
      },
      {
        role: "Floodplain & levee engineers",
        why: "A confluence location makes flood risk management a permanent obligation rather than a project type.",
      },
      {
        role: "Dual-licensed civil engineers",
        why: "The metro reaches into Illinois, so single-state licensure limits which regional projects an engineer can seal.",
      },
    ],
    licensure:
      "Missouri licenses through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects, and comity on an NCEES record is the normal route. Because the metro extends across the Mississippi, engineers covering the full region commonly carry Illinois registration as well, and both states also require a corporate authorization for firms offering engineering services, which out-of-state consultancies routinely overlook.",
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
    agencies: [
      "NCDOT Division 5",
      "City of Raleigh Engineering Services",
      "Raleigh Water",
      "Wake County Facilities Design & Construction",
      "GoTriangle",
      "Raleigh-Durham Airport Authority",
    ],
    marketDetail: [
      "The Triangle has grown faster than its infrastructure for long enough that land development and roadway capacity are the region's two largest civil engineering categories, and they run together: new subdivisions and campuses need arterial connections, water and sewer trunk extension and intersection capacity that the county network was never sized for. The outer loop and the arterial network feeding it keep design and construction-phase work continuous.",
      "Nutrient regulation is the constraint that makes this market distinctive. The reservoirs supplying the region carry nutrient management strategies that impose real limits on nitrogen and phosphorus leaving a site, so stormwater treatment is not a box-ticking exercise here but a design driver with measurable targets. Piedmont clay soils and moderate relief add their own drainage and erosion control demands on top.",
    ],
    hiringFocus: [
      {
        role: "Stormwater & nutrient management engineers",
        why: "Reservoir nutrient strategies impose measurable treatment targets that shape site design across the region.",
      },
      {
        role: "Land development engineers",
        why: "Sustained growth makes grading, utility and entitlement design the highest-volume category in the Triangle.",
      },
      {
        role: "Roadway & intersection capacity engineers",
        why: "An arterial network built for a smaller region needs continuous widening, signalization and interchange work.",
      },
      {
        role: "Water & sewer extension engineers",
        why: "Trunk main and treatment capacity have to be extended ahead of development rather than alongside it.",
      },
    ],
    licensure:
      "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, and comity on an NCEES record is the usual route for an individual. North Carolina also licenses firms, so a company offering engineering services needs its own certificate with a licensee in responsible charge. NCDOT maintains consultant prequalification by work category alongside both.",
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
    agencies: [
      "District Department of Transportation",
      "DC Water",
      "WMATA",
      "National Park Service",
      "Federal Highway Administration Eastern Federal Lands",
      "DC Department of Energy and Environment",
    ],
    marketDetail: [
      "Washington is the only American metro where a federal land manager is a routine project stakeholder. Large parts of the street and park network sit on National Park Service land, federal design review applies to work in the monumental core, and security requirements shape streetscape and perimeter design in ways that do not arise elsewhere. Engineers here spend real time on approvals, and fluency in that process is a hiring criterion in its own right.",
      "Underground, the water utility is delivering a large tunnel program to control combined sewer overflows into the rivers, and the buried water network is old enough that replacement is a continuing obligation. Add a transit system in sustained rebuilding and a metro that spreads across two states, and the demand runs across tunnels, hydraulics, structures and urban roadway at the same time.",
    ],
    hiringFocus: [
      {
        role: "Wastewater & tunnel engineers",
        why: "A large combined sewer control program built on deep tunnels concentrates hydraulic and underground expertise locally.",
      },
      {
        role: "Urban roadway & streetscape engineers",
        why: "Work in the federal core carries design review and security requirements that ordinary street design does not.",
      },
      {
        role: "Permitting & federal coordination engineers",
        why: "National Park Service land and federal review make approvals a specialist skill rather than an administrative step.",
      },
      {
        role: "Multi-jurisdiction licensed engineers",
        why: "The metro spans Maryland and Virginia, so regional work regularly needs more than a District license.",
      },
    ],
    licensure:
      "The District licenses through its Board of Professional Engineering, and comity on an NCEES record is the normal route. The practical reality here is that the District is small and the metro is not: most engineers working this market hold District, Maryland and Virginia licenses together, because a regional project will cross at least two of them. Federal work adds its own qualification requirements independent of state licensure.",
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
    agencies: [
      "CTDOT District 1",
      "Metropolitan District Commission",
      "Hartford Department of Public Works",
      "CTtransit",
      "Connecticut Airport Authority",
      "Capitol Region Council of Governments",
    ],
    marketDetail: [
      "Central Connecticut is a rebuilding market. The interstate structures carrying traffic through and around Hartford were built early, the elevated sections in particular are at the end of their intended lives, and replacing them means working in a constrained river corridor under live traffic. Bridge engineering and construction staging are the most consistently funded skills in the region.",
      "The regional water and sewer authority supplies the second stream of work. A combined system serving the older communities carries overflow reduction obligations that have funded a long program of separation, storage and treatment upgrades, and the Connecticut River itself keeps floodplain and levee questions on the table. Freeze-thaw on New England pavements and decks shortens asset life across the board.",
    ],
    hiringFocus: [
      {
        role: "Bridge & structural rehabilitation engineers",
        why: "Early-built elevated interstate structures at the end of their service lives make replacement design the region's core workload.",
      },
      {
        role: "Wastewater & separation engineers",
        why: "Combined sewer obligations fund a sustained program of storage, separation and treatment design.",
      },
      {
        role: "Construction-phase engineers",
        why: "Structure replacement in a constrained river corridor under live traffic is a staging discipline as much as a design one.",
      },
      {
        role: "Floodplain & drainage engineers",
        why: "A major river through the metro keeps floodplain analysis and drainage capacity work continuously relevant.",
      },
    ],
    licensure:
      "Connecticut licenses through the State Board of Examiners for Professional Engineers and Land Surveyors within the Department of Consumer Protection, and comity on an NCEES record is the standard route. Connecticut is small enough that engineers working the wider market often hold Massachusetts or New York registration alongside it, and CTDOT runs its own consultant prequalification by work category.",
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
    agencies: [
      "NMDOT District 3",
      "Albuquerque Metropolitan Arroyo Flood Control Authority",
      "City of Albuquerque Municipal Development",
      "Albuquerque Bernalillo County Water Utility Authority",
      "ABQ RIDE",
      "Mid-Region Council of Governments",
    ],
    marketDetail: [
      "Albuquerque manages stormwater through a network of arroyos and engineered channels overseen by a dedicated regional flood control authority, and that institution shapes the local civil market. Desert hydrology produces short, violent runoff events on ground that absorbs very little, so channel capacity, grade control and sediment management are specialist concerns with local design criteria rather than generic drainage work.",
      "Water supply is the other permanent theme. The region draws on both the Rio Grande and a groundwater aquifer under long-term management, which keeps conveyance, reuse, aquifer recharge and conservation infrastructure on the program independent of the construction cycle. Roadway work concentrates on the two interstates crossing at the center of the city and the arterial network spreading toward the mesa edges.",
    ],
    hiringFocus: [
      {
        role: "Drainage & arroyo channel engineers",
        why: "A dedicated regional flood control authority with its own criteria makes desert hydraulics a local specialism.",
      },
      {
        role: "Water resources & reuse engineers",
        why: "Managed groundwater and river supply keep conveyance, recharge and conservation work permanently funded.",
      },
      {
        role: "Roadway & interchange engineers",
        why: "Two interstates crossing at the city center and arterial expansion toward the mesas sustain design volume.",
      },
      {
        role: "Geotechnical engineers",
        why: "Collapsible and wind-deposited soils around the valley make foundation and subgrade behavior a recurring design question.",
      },
    ],
    licensure:
      "New Mexico licenses through the State Board of Licensure for Professional Engineers and Professional Surveyors, and comity on an NCEES record is the usual route for an individual. Firms offering engineering services in the state must also be registered with the board. Because so much of the local program runs through the regional flood control authority and the water utility authority, prior work under their design standards tends to matter as much as the license.",
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
    agencies: [
      "ALDOT East Central Region",
      "Jefferson County Department of Environmental Services",
      "Birmingham Department of Transportation",
      "Birmingham Water Works Board",
      "Birmingham-Jefferson County Transit Authority",
      "Birmingham-Shuttlesworth International Airport",
    ],
    marketDetail: [
      "Birmingham sits in the Appalachian foothills, and the ridges and valleys that gave the city its industry also give its civil engineers their hardest problems. Steep grades, rock close to the surface in places and karst limestone elsewhere make earthwork, blasting, retaining structures and sinkhole risk a routine part of roadway and site design rather than exceptional conditions.",
      "The county sewer system is the region's other defining feature. Overflow control obligations have driven a sustained program of rehabilitation, capacity and treatment work, and the buried network is old enough that condition assessment and trenchless renewal are continuing specialisms. Interstate reconstruction through the center of the city adds heavily staged structural and roadway work on top.",
    ],
    hiringFocus: [
      {
        role: "Geotechnical engineers with karst experience",
        why: "Limestone and sinkhole risk through the valley make subsurface investigation a design driver on many sites.",
      },
      {
        role: "Wastewater & rehabilitation engineers",
        why: "County sewer overflow obligations fund a continuing program of capacity, renewal and treatment design.",
      },
      {
        role: "Roadway & structural engineers",
        why: "Interstate reconstruction through the city center is staged, structural and long-running.",
      },
      {
        role: "Site civil engineers for steep terrain",
        why: "Foothill topography makes grading, retaining and drainage design harder here than in a flat metro of similar size.",
      },
    ],
    licensure:
      "Alabama licenses through the Board of Licensure for Professional Engineers and Land Surveyors, and comity on an NCEES record is the standard route for an individual. Alabama also requires a certificate of authorization for firms practicing engineering in the state. ALDOT maintains its own consultant prequalification, and for the county sewer program prior delivery under that owner is usually checked directly.",
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
    agencies: [
      "TDOT Region 4",
      "City of Memphis Division of Engineering",
      "Memphis Light, Gas and Water",
      "Memphis Area Transit Authority",
      "Memphis-Shelby County Airport Authority",
      "Shelby County Department of Public Works",
    ],
    marketDetail: [
      "Memphis is the one large American city outside the west coast where seismic design genuinely governs. The New Madrid seismic zone runs nearby, the ground is deep alluvial and loess soil that amplifies shaking and is liquefaction prone, and the Mississippi River crossings are lifeline structures. That combination makes seismic assessment and geotechnical analysis a standing requirement rather than a coastal preoccupation.",
      "The rest of the market is freight. Memphis is a national logistics hub with an air cargo operation, rail yards and interstate corridors converging on it, which drives heavy-load pavement design, intermodal site work and interchange capacity continuously. Flat terrain and a high water table make drainage and dewatering recurring complications on all of it.",
    ],
    hiringFocus: [
      {
        role: "Geotechnical engineers with liquefaction experience",
        why: "Deep alluvial soils in a seismic zone make ground behavior a decisive design question on major structures.",
      },
      {
        role: "Bridge & seismic assessment engineers",
        why: "River crossings are lifeline structures in an active seismic zone, keeping evaluation and retrofit work funded.",
      },
      {
        role: "Freight & heavy-load pavement engineers",
        why: "A national logistics hub generates continuous intermodal, yard and corridor design at loads ordinary pavements do not see.",
      },
      {
        role: "Drainage engineers",
        why: "Flat terrain with a high water table makes conveyance, detention and dewatering a constant project constraint.",
      },
    ],
    licensure:
      "Tennessee licenses through the Board of Architectural and Engineering Examiners within the Department of Commerce and Insurance, with comity on an NCEES record the normal route. Because the metro reaches into Mississippi and Arkansas, engineers covering the full region frequently hold more than one license, and TDOT prequalifies consultants by work category alongside the license requirement.",
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
    agencies: [
      "Nebraska DOT District 2",
      "Omaha Public Works",
      "Metropolitan Utilities District",
      "Papio-Missouri River Natural Resources District",
      "Omaha Metro Transit",
      "Omaha Airport Authority",
    ],
    marketDetail: [
      "Omaha's largest civil program is its combined sewer overflow response, a long-running and expensive obligation that has funded separation, storage and treatment work across the older parts of the city for years and shows no sign of finishing. It gives the metro a deeper bench of hydraulic and conveyance demand than a city of this size would otherwise carry.",
      "The Missouri River and the loess bluffs above it supply the second set of problems. Flood risk management, levee integrity and bank stabilization are permanent obligations managed with a regional natural resources district, and loess is a soil that stands vertically until it gets wet, which makes slope stability and erosion control design a real concern on the bluff sites where much of the city sits.",
    ],
    hiringFocus: [
      {
        role: "Wastewater & separation engineers",
        why: "A long-running combined sewer program funds sustained conveyance, storage and treatment design.",
      },
      {
        role: "Floodplain & levee engineers",
        why: "Missouri River flood risk is managed continuously through a regional district rather than project by project.",
      },
      {
        role: "Geotechnical engineers with loess experience",
        why: "Loess bluffs behave unusually when saturated, making slope stability and erosion control a local specialism.",
      },
      {
        role: "Roadway & arterial design engineers",
        why: "Westward growth keeps arterial extension, interchange and utility corridor work on a steady cycle.",
      },
    ],
    licensure:
      "Nebraska licenses through the Board of Engineers and Architects, and comity on an NCEES record is the usual route for an individual. Firms must also hold a certificate of authorization to offer engineering services in the state. Because the metro crosses into Iowa, engineers working both sides of the river commonly carry Iowa registration alongside Nebraska.",
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
    agencies: [
      "ITD District 3",
      "Ada County Highway District",
      "City of Boise Public Works",
      "Valley Regional Transit",
      "Boise Airport",
      "Idaho Department of Water Resources",
    ],
    marketDetail: [
      "Boise has an institutional arrangement that exists almost nowhere else: a single countywide highway district owns, designs and maintains essentially all local roads across the metro rather than each city doing its own. For engineers that concentrates local roadway work under one owner with one set of standards, and prior experience with that district's processes is worth more here than an equivalent record elsewhere would be.",
      "Water is the other defining feature, in two forms. A dense network of irrigation canals and laterals predates the suburbs and now runs through them, so development has to be engineered around live water rights and conveyance that cannot simply be relocated. The Boise River adds floodplain management on top, and the region's growth rate keeps land development, arterial capacity and utility extension consistently busy.",
    ],
    hiringFocus: [
      {
        role: "Land development engineers",
        why: "Sustained population growth makes grading, utility and entitlement design the highest-volume local category.",
      },
      {
        role: "Roadway engineers familiar with the county highway district",
        why: "A single countywide owner for local roads concentrates the work and makes its standards a practical credential.",
      },
      {
        role: "Drainage & irrigation coordination engineers",
        why: "A working canal network running through developing land makes water rights and conveyance a routine design constraint.",
      },
      {
        role: "Floodplain & river engineers",
        why: "Boise River flood management shapes what can be built along a large share of the valley floor.",
      },
    ],
    licensure:
      "Idaho licenses through the Board of Licensure of Professional Engineers and Professional Land Surveyors, and comity on an NCEES record is the normal route for an individual. Firms offering engineering services in the state need their own certificate of authorization. Locally, the county highway district publishes its own design standards and approval process, and familiarity with those is usually probed alongside the license.",
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
    agencies: [
      "RIDOT",
      "Narragansett Bay Commission",
      "Providence Department of Public Works",
      "Rhode Island Public Transit Authority",
      "Rhode Island Airport Corporation",
      "Rhode Island Infrastructure Bank",
    ],
    marketDetail: [
      "Rhode Island carries one of the most deteriorated bridge inventories in the country relative to its size, and the state has organized a sustained replacement and rehabilitation program around it. For civil engineers that makes structural assessment, load rating and replacement design the most reliable work in the market, and it means construction-phase engineering on structures carrying live traffic is in continuous demand.",
      "The bay supplies the second program. A combined sewer control effort built around deep storage tunnels has been running for years, keeping tunneling and hydraulic expertise concentrated locally, and the coastline adds storm surge, hurricane barrier maintenance and shoreline protection as permanent obligations. Old mill and industrial land across the valley attaches brownfield conditions to much of the redevelopment market.",
    ],
    hiringFocus: [
      {
        role: "Bridge inspection & replacement engineers",
        why: "A statewide structure replacement program built on a deteriorated inventory is the most durable demand in the market.",
      },
      {
        role: "Wastewater & tunnel engineers",
        why: "A deep storage tunnel program for combined sewer control concentrates hydraulic and underground expertise locally.",
      },
      {
        role: "Coastal & storm surge engineers",
        why: "Shoreline protection and hurricane barrier obligations are continuing rather than episodic.",
      },
      {
        role: "Site civil engineers with brownfield experience",
        why: "Former mill and industrial land carries remediation requirements through much of the redevelopment market.",
      },
    ],
    licensure:
      "Rhode Island licenses through the Board of Registration for Professional Engineers, and comity on an NCEES record is the standard route. The state is small enough that most engineers working the wider market hold Massachusetts or Connecticut registration as well. RIDOT runs its own consultant prequalification, and for the bridge program inspection qualification is typically checked alongside the license.",
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
    agencies: [
      "NYSDOT Region 5",
      "Buffalo Sewer Authority",
      "City of Buffalo Department of Public Works",
      "Niagara Frontier Transportation Authority",
      "Erie County Department of Public Works",
      "New York State Thruway Authority",
    ],
    marketDetail: [
      "Western New York is a hard climate for infrastructure. Lake-effect snow, heavy salt use and a long freeze-thaw season shorten the life of pavements, joints and bridge decks, which makes materials durability, deck rehabilitation and drainage design a larger share of the workload than in a milder region. Much of the highway and structure inventory dates from the same era and is reaching replacement together.",
      "The sewer authority's overflow control plan supplies the other long-running program, built around a mix of storage, separation and an unusually committed green infrastructure component that keeps stormwater designers busy year to year. Legacy industrial land along the waterfront and the river adds brownfield conditions to much of the redevelopment market, and the border crossings generate their own freight and inspection-facility work.",
    ],
    hiringFocus: [
      {
        role: "Bridge rehabilitation & deck engineers",
        why: "Freeze-thaw and heavy salt exposure shorten structure life and keep assessment and repair continuously funded.",
      },
      {
        role: "Stormwater & green infrastructure engineers",
        why: "The regional overflow control plan leans heavily on green infrastructure, making it funded design work rather than an add-on.",
      },
      {
        role: "Site civil engineers with brownfield experience",
        why: "Waterfront and riverside industrial legacy attaches remediation requirements to much of the redevelopment market.",
      },
      {
        role: "Roadway reconstruction engineers",
        why: "A highway inventory built in one era is reaching the end of its life together, concentrating reconstruction demand.",
      },
    ],
    licensure:
      "New York licenses through the State Education Department's Office of the Professions, and most out-of-state PEs transfer by comity on an NCEES record. The gate that bites harder in practice is agency prequalification: NYSDOT and the Thruway Authority each maintain their own consultant arrangements, and for a border metro, familiarity with federal facility requirements can matter alongside the state license.",
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
