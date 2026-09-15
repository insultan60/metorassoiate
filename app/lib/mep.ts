// Data for the programmatic "MEP Engineering Recruiter — {City}" pages.
// Parallel to lib/cities.ts (civil), but MEP-specific: Mechanical, Electrical &
// Plumbing engineering for buildings, data centers, healthcare, and industry —
// NOT highways/bridges. Each city carries unique copy (marketNote + local work)
// so pages are not thin/duplicate content; shared content is reused across all.
//
// Same 50 metros as lib/cities.ts, so every civil city page has an MEP
// counterpart at the same slug.

export interface MepCity {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  authority: string; // local code / permitting authority referenced in copy
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
  licensure?: string; // city/state-specific MEP-heavy project types
}

export const MEP_CITIES: MepCity[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    authority: "NYC DOB",
    marketNote:
      "From Midtown high-rises to the outer-borough life-science boom, we place licensed mechanical, electrical, and plumbing engineers on the building systems and decarbonization programs reshaping the New York metro.",
    localPrograms: [
      "Local Law 97 building decarbonization & retrofits",
      "High-rise commercial and mixed-use MEP systems",
      "Hospital & life-science facility infrastructure",
      "Data center and mission-critical power & cooling",
      "Airport terminal MEP (JFK & LaGuardia redevelopment)",
    ],
    agencies: [
      "NYC Department of Buildings",
      "NYC Health + Hospitals",
      "Dormitory Authority of the State of New York",
      "MTA Construction & Development",
      "Port Authority of NY & NJ",
    ],
    marketDetail: [
      "New York's carbon cap on large buildings is the single largest driver of MEP work in the city. Existing buildings have to meet declining emissions limits or pay, which has turned decarbonisation retrofit into a standing commercial market rather than a sustainability exercise: heating plant replacement, electrification, submetering and the energy modelling needed to prove compliance.",
      "The building stock makes that harder than it sounds. Much of the city is served by steam, floor-to-floor heights leave little room for new distribution, and work has to be staged around occupied tenancies. Engineers who can fit a modern system into a pre-war building without a shutdown are doing the thing this market actually needs.",
    ],
    hiringFocus: [
      {
        role: "Decarbonisation & electrification engineers",
        why: "Emissions limits apply to existing buildings, so retrofit design is a compliance requirement with a deadline rather than an option.",
      },
      {
        role: "Energy modellers",
        why: "Compliance is demonstrated through modelling, which makes the modeller part of the legal case rather than a design support role.",
      },
      {
        role: "High-rise mechanical engineers",
        why: "Tall-building distribution, riser design and pressure zoning are specialised and the local stock demands them constantly.",
      },
      {
        role: "Healthcare & life science MEP engineers",
        why: "Hospital and laboratory systems carry redundancy and air change requirements that ordinary commercial work never involves.",
      },
    ],
    licensure: "New York licenses through the State Education Department's Office of the Professions, with transfer for most out-of-state PEs on an NCEES record. What governs day to day is the Department of Buildings: filing requires a licensed professional to take responsibility for the design, and familiarity with the filing process and the department's expectations is treated by employers as a qualification in its own right, separate from the licence.",
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "LADBS",
    marketNote:
      "Across the LA basin, we place mechanical, electrical, and plumbing engineers on the studio, hospital, and high-rise projects driving one of the country's largest MEP markets, plus a Title 24 code that keeps electrification front and center.",
    localPrograms: [
      "Title 24 electrification & decarbonization retrofits",
      "Studio, soundstage, and entertainment-campus MEP",
      "Hospital and life-science facility infrastructure",
      "High-rise residential and mixed-use MEP systems",
      "LAX modernization mechanical & electrical scopes",
    ],
    agencies: [
      "LA Department of Building & Safety",
      "California Department of Health Care Access & Information",
      "Los Angeles Unified School District",
      "Los Angeles World Airports",
      "Los Angeles County Public Works",
    ],
    marketDetail: [
      "California's energy code sets the terms for MEP design here, and it has been pushing electrification and stringent efficiency requirements for years, so an engineer working in this state is designing to a standard well ahead of the national model codes. That experience is portable outward but the reverse is not: engineers arriving from lighter-code states usually have ground to make up.",
      "The other defining feature is who reviews healthcare work. Hospital construction in California is reviewed by a dedicated state authority rather than the local building department, on its own timescale and to its own standards, which makes healthcare MEP a specialism with a distinct career path in this market.",
    ],
    hiringFocus: [
      {
        role: "Healthcare MEP engineers",
        why: "State-level hospital plan review is a separate regime, and engineers who have carried projects through it are valued accordingly.",
      },
      {
        role: "Title 24 compliance & energy engineers",
        why: "The state energy code is demanding enough that compliance is a design discipline rather than a checkbox.",
      },
      {
        role: "Studio & entertainment facility engineers",
        why: "Soundstages and production facilities have acoustic, power and cooling requirements that do not appear in ordinary commercial work.",
      },
      {
        role: "Mission-critical power & cooling engineers",
        why: "Data centre and broadcast infrastructure need redundancy design that general building engineers rarely practise.",
      },
    ],
    licensure: "California does not grant PE licensure by simple comity: the state board requires its own application process. Mechanical and electrical engineers are licensed as such by title, and fire protection engineering is a separate licensed discipline here, which matters when a project needs sealed life-safety design. Healthcare work is additionally gated by the state's hospital plan review authority rather than by the city.",
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "Chicago DOB",
    marketNote:
      "In Chicagoland, we staff the mechanical, electrical, and controls engineers behind the region's hospital systems, data-center corridor, and high-rise commercial towers.",
    localPrograms: [
      "Elk Grove / Chicagoland data-center build-outs",
      "Hospital and academic-medical-center MEP",
      "High-rise commercial and mixed-use systems",
      "Building Energy Rating Ordinance compliance",
      "O'Hare terminal MEP and airfield electrical",
    ],
    agencies: [
      "Chicago Department of Buildings",
      "Chicago Public Schools",
      "Cook County Department of Capital Planning",
      "University of Chicago & Northwestern facilities",
      "Illinois Capital Development Board",
    ],
    marketDetail: [
      "Chicago's high-rise stock is old enough that most mechanical work here is replacement inside an occupied building, and the city's energy code has tightened to the point where a like-for-like replacement often no longer complies. That combination puts a premium on engineers who can design a compliant system into a building that was not built for one.",
      "Outside the core, the suburban corridor has become one of the country's larger concentrations of data centre capacity, which gives the region a second and quite separate MEP market built on redundancy, cooling and electrical distribution at scale rather than on tenant comfort.",
    ],
    hiringFocus: [
      {
        role: "High-rise retrofit mechanical engineers",
        why: "Replacing plant in an occupied tower to a tightened energy code is the region's most common and most constrained problem.",
      },
      {
        role: "Mission-critical electrical engineers",
        why: "The suburban data centre cluster needs distribution and redundancy design that ordinary commercial work does not develop.",
      },
      {
        role: "Energy code compliance engineers",
        why: "A stricter local code than the state model means compliance decisions are made locally and have to be argued locally.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Large academic medical centres run continuous capital programmes with their own systems standards.",
      },
    ],
    licensure: "Illinois licenses professional engineers through the Department of Financial and Professional Regulation and separately licenses structural engineers, which occasionally matters for equipment support design. Chicago operates its own building and energy code rather than adopting the state model unchanged, so design experience elsewhere in Illinois is not the same as experience inside the city, and employers here distinguish between the two.",
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    authority: "City of Houston Permitting Center",
    marketNote:
      "Home to the Texas Medical Center, the largest medical complex in the world, Houston runs one of the country's most demanding healthcare and energy-facility MEP markets.",
    localPrograms: [
      "Texas Medical Center hospital & research MEP",
      "Petrochemical and energy-facility power systems",
      "High-rise commercial and mixed-use MEP",
      "Data center design-build",
      "Port of Houston industrial infrastructure",
    ],
    agencies: [
      "Houston Permitting Center",
      "Texas Medical Center institutions",
      "Harris County Engineering Department",
      "Houston Independent School District",
      "Port Houston",
    ],
    marketDetail: [
      "Healthcare is the anchor of MEP work in Houston. The medical district here is one of the largest concentrations of hospitals and research institutions anywhere, and it runs a continuous capital programme, so hospital mechanical and electrical design is a mainstream career in this city rather than a niche.",
      "Climate sets the technical problem. High humidity for much of the year makes latent load and dehumidification, not sensible cooling, the thing that decides whether a system works, and getting that wrong produces mould and pressurisation problems rather than merely discomfort. Engineers who have designed in dry-climate markets frequently have to relearn this.",
    ],
    hiringFocus: [
      {
        role: "Healthcare MEP engineers",
        why: "A very large medical district generates sustained demand for hospital systems design with its own codes and redundancy requirements.",
      },
      {
        role: "Humidity control & dehumidification specialists",
        why: "Latent load governs system selection in this climate, and mistakes show up as building damage rather than as complaints.",
      },
      {
        role: "Mission-critical & industrial MEP engineers",
        why: "Data centres and process-adjacent facilities need power and cooling design at industrial scale.",
      },
      {
        role: "Commissioning engineers",
        why: "Systems this complex are only proven at handover, and measured performance is what owners here increasingly ask for.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders, and requires the engineering firm to be registered as well as the individual. Texas does not adopt a statewide energy code as aggressive as California's or New York's, so the binding constraints here are more often the owner's own standards, particularly in healthcare, than the municipal code.",
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    authority: "City of Phoenix Planning & Development",
    marketNote:
      "With TSMC and Intel investing tens of billions in the Valley, Phoenix has become a national hub for semiconductor and hyperscale data-center MEP work.",
    localPrograms: [
      "Semiconductor fab mechanical & electrical (TSMC, Intel)",
      "Hyperscale data-center power & cooling",
      "Hospital and life-science facility infrastructure",
      "High-rise and master-planned commercial MEP",
      "Sky Harbor airport terminal systems",
    ],
    agencies: [
      "Phoenix Development Services",
      "Maricopa County Planning & Development",
      "Arizona State University facilities",
      "Banner Health & regional health systems",
      "City of Chandler & Mesa development services",
    ],
    marketDetail: [
      "Semiconductor manufacturing has changed this market. Large fabrication facilities and their supply chains need process utilities, ultra-pure water, specialty exhaust, cleanroom air handling and electrical capacity on an industrial scale, and that work needs engineers whose experience is closer to process plant design than to commercial buildings.",
      "For everything else, heat is the design driver. Peak cooling loads, equipment derating, condenser performance and the consequences of a cooling failure are all more severe here than in temperate markets, which makes redundancy and equipment selection judgement locally specific.",
    ],
    hiringFocus: [
      {
        role: "Semiconductor & cleanroom MEP engineers",
        why: "Fabrication facilities need process utility design that very few building engineers have done.",
      },
      {
        role: "Mission-critical cooling engineers",
        why: "Extreme ambient conditions make data centre and critical facility cooling design harder here than almost anywhere else.",
      },
      {
        role: "Central plant engineers",
        why: "Campus and institutional cooling at this scale is a plant design problem rather than a building one.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous expansion with their own systems standards.",
      },
    ],
    licensure: "Arizona registers engineers through the Board of Technical Registration, which accepts comity applications from PEs licensed elsewhere. The credential that most affects employability here is not the licence but the building type: fabrication and mission-critical experience commands a different market from commercial work, and firms recruit for the two separately.",
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia L&I",
    marketNote:
      "Anchored by Penn, CHOP, and a dense academic-medical corridor, Philadelphia recruits MEP engineers for some of the most complex hospital and life-science builds in the Mid-Atlantic.",
    localPrograms: [
      "Academic medical center & hospital MEP",
      "Life-science and lab-space build-outs",
      "Higher-education campus infrastructure",
      "High-rise commercial and mixed-use systems",
      "Building energy-benchmarking compliance retrofits",
    ],
    agencies: [
      "Philadelphia Department of Licenses & Inspections",
      "University of Pennsylvania & Drexel facilities",
      "Children's Hospital of Philadelphia & regional health systems",
      "Pennsylvania Department of General Services",
      "SEPTA",
    ],
    marketDetail: [
      "Laboratory and life science work is the distinctive strand here. The city's cell and gene therapy cluster has driven conversion of older commercial and industrial buildings into research and manufacturing space, which is a demanding MEP problem: high air change rates, containment, redundancy and vibration control fitted into structures never designed for any of it.",
      "The institutional base is the other half of the market. Large universities and health systems run their own continuous capital programmes with in-house standards, so a significant share of local MEP careers is spent working repeatedly for the same handful of owners.",
    ],
    hiringFocus: [
      {
        role: "Laboratory & life science MEP engineers",
        why: "Containment, air change and redundancy requirements make lab design a distinct discipline from commercial work.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run rolling capital programmes with their own systems standards.",
      },
      {
        role: "Adaptive reuse mechanical engineers",
        why: "Converting older buildings to research use means fitting demanding systems into structures with no allowance for them.",
      },
      {
        role: "Commissioning engineers",
        why: "Laboratory and healthcare systems have to be proven to perform, not merely installed.",
      },
    ],
    licensure: "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity for NCEES record holders. Philadelphia administers its own licensing and inspections process, and for laboratory and healthcare work the more demanding review is often the owner's own standards rather than the municipal one, so institutional experience is what employers screen for.",
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    authority: "City of Dallas Development Services",
    marketNote:
      "Across the Dallas–Fort Worth metroplex, we place MEP engineers on the corporate-campus, data-center, and hospital projects fueling one of the nation's fastest-growing commercial markets.",
    localPrograms: [
      "Corporate headquarters campus MEP",
      "Data-center design-build (DFW corridor)",
      "Hospital and healthcare-system infrastructure",
      "High-rise commercial and mixed-use systems",
      "DFW Airport terminal mechanical & electrical",
    ],
    agencies: [
      "Dallas Development Services",
      "Texas Department of Licensing & Regulation",
      "Dallas Independent School District",
      "Regional health systems across North Texas",
      "DFW International Airport",
    ],
    marketDetail: [
      "North Texas is one of the largest data centre markets in the country, and that shapes the local MEP profession more than any other single factor. Mission-critical work here is not an occasional project type but a career: electrical distribution, redundancy topology, cooling at density and the commissioning regime that goes with proving all of it.",
      "Alongside that, sustained corporate relocation has kept large office, campus and mixed-use development in continuous delivery, which supports a broad conventional building services market underneath the critical facilities work.",
    ],
    hiringFocus: [
      {
        role: "Mission-critical electrical engineers",
        why: "Data centre distribution and redundancy design is the region's signature MEP speciality and demand for it is deep.",
      },
      {
        role: "Critical facility cooling engineers",
        why: "High-density cooling is a distinct design problem from comfort cooling and needs separate experience.",
      },
      {
        role: "Commissioning & Cx authorities",
        why: "Critical facilities are only accepted once proven under load, which makes commissioning a first-class role here.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems expand continuously and design to their own standards.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders and registration required for the firm as well. Accessibility review for most public buildings runs through the state licensing department rather than the city, which is a step engineers arriving from other states routinely overlook.",
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    authority: "City of Atlanta Office of Buildings",
    marketNote:
      "In metro Atlanta, we recruit MEP talent for the film/studio, data-center, and hospital-system projects behind the Southeast's busiest production and logistics hub.",
    localPrograms: [
      "Film & television studio campus MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "High-rise commercial and mixed-use systems",
      "Hartsfield-Jackson airport terminal MEP",
    ],
    agencies: [
      "Atlanta Office of Buildings",
      "Georgia Department of Community Affairs",
      "Emory Healthcare & regional health systems",
      "Georgia Institute of Technology facilities",
      "Hartsfield-Jackson Atlanta International Airport",
    ],
    marketDetail: [
      "Two building types define this market and neither is conventional office work. The region has become a significant data centre location, bringing mission-critical electrical and cooling design with it, and the state's film industry has produced purpose-built studio campuses whose power, acoustic and ventilation requirements are unlike anything in commercial practice.",
      "Underneath both, the climate makes humidity control the recurring technical issue. Long, humid shoulder seasons mean dehumidification and building pressurisation decide whether a building performs, particularly in the institutional and healthcare work that forms the market's steady base.",
    ],
    hiringFocus: [
      {
        role: "Mission-critical MEP engineers",
        why: "Data centre growth in the region has created sustained demand for redundancy and cooling design at density.",
      },
      {
        role: "Studio & production facility engineers",
        why: "Purpose-built film facilities have acoustic, power and ventilation requirements that ordinary commercial work does not develop.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous capital programmes to their own systems standards.",
      },
      {
        role: "Humidity control specialists",
        why: "Latent load and pressurisation govern building performance in this climate more than sensible cooling does.",
      },
    ],
    licensure: "Georgia licenses through the Board of Professional Engineers and Land Surveyors, with comity for engineers licensed elsewhere, and the state adopts its energy and mechanical codes with Georgia-specific amendments that local officials apply closely. For institutional and healthcare work the owner's standards are usually the more demanding review.",
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "Miami-Dade RER",
    marketNote:
      "Across South Florida, we place mechanical, electrical, and plumbing engineers on the high-rise residential, hospitality, and hospital projects reshaping the Miami skyline.",
    localPrograms: [
      "High-rise residential and hospitality MEP",
      "Hurricane-resilient backup power & critical systems",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "PortMiami and marine-terminal electrical",
    ],
    agencies: [
      "Miami-Dade Regulatory & Economic Resources",
      "City of Miami Building Department",
      "Jackson Health System & regional hospitals",
      "Miami-Dade County Public Schools",
      "Miami-Dade Aviation Department",
    ],
    marketDetail: [
      "South Florida runs the most demanding wind provisions in the country. The high velocity hurricane zone covering this county and its neighbour imposes design and product approval requirements that apply nowhere else, and they reach into MEP directly: rooftop equipment restraint, louvre and intake protection, generator and fuel system resilience, and the approval status of the products specified.",
      "Humidity is the second constant. Continuous latent load makes dehumidification and pressurisation the design questions that decide whether a building stays free of mould, and in high-rise residential, which dominates development here, those decisions are made at a scale that makes errors expensive.",
    ],
    hiringFocus: [
      {
        role: "High-rise residential MEP engineers",
        why: "Residential towers dominate development here and their distribution, ventilation and pressurisation problems are specific to that form.",
      },
      {
        role: "Hurricane-resilience MEP engineers",
        why: "Equipment restraint, protection and product approval under the high velocity zone are requirements unique to this region.",
      },
      {
        role: "Dehumidification specialists",
        why: "Latent load is continuous here, and controlling it is what keeps buildings serviceable.",
      },
      {
        role: "Emergency power engineers",
        why: "Residential and healthcare buildings carry standby power obligations that a storm season tests in practice.",
      },
    ],
    licensure: "Florida licenses through the Board of Professional Engineers, with licensure by endorsement for engineers already licensed elsewhere. The distinctive local requirement is product approval: components used in the high velocity hurricane zone need county or state approval, so specification here is constrained in a way it is nowhere else, and engineers unfamiliar with that regime find their designs rejected rather than merely questioned.",
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "Seattle DCI",
    marketNote:
      "In the Puget Sound region, we recruit MEP engineers for the tech-campus, life-science, and high-rise projects built to one of the country's strictest energy codes.",
    localPrograms: [
      "Tech-campus mechanical & electrical (Amazon, Microsoft)",
      "Life-science and lab-space build-outs",
      "Seattle Energy Code compliance & electrification",
      "High-rise commercial and mixed-use systems",
      "Sea-Tac airport terminal MEP",
    ],
    agencies: [
      "Seattle Department of Construction & Inspections",
      "University of Washington & Fred Hutch facilities",
      "Seattle Children's & regional health systems",
      "Port of Seattle",
      "Sound Transit",
    ],
    marketDetail: [
      "Seattle's energy code is among the most demanding in the country and has moved decisively against fossil fuel heating in new buildings, which makes heat pump design, thermal storage and electrical capacity planning the ordinary content of MEP work here rather than an advanced option.",
      "The building types that dominate are laboratory and healthcare. A large research and biotech cluster needs containment, air change and redundancy design, and doing that inside an aggressive energy code is genuinely harder than doing either alone, which is why lab-plus-code experience is the profile firms here compete for.",
    ],
    hiringFocus: [
      {
        role: "Electrification & heat pump engineers",
        why: "Local code has effectively made electrified heating the default, so this is mainstream design work rather than a speciality.",
      },
      {
        role: "Laboratory MEP engineers",
        why: "The research cluster needs containment and air change design that ordinary commercial work does not develop.",
      },
      {
        role: "Energy modellers",
        why: "Compliance with a stringent code is demonstrated by modelling, which makes the modeller central to approval.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous capital programmes with their own standards.",
      },
    ],
    licensure: "Washington registers engineers through the Board of Registration for Professional Engineers and Land Surveyors, with comity for equivalent licences. Seattle enforces its own energy code, stricter than the state's, so experience elsewhere in Washington is not equivalent to experience inside the city and employers here make that distinction explicitly.",
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    authority: "Denver CPD",
    marketNote:
      "Across the Front Range, we place MEP engineers on the hospital, higher-education, and data-center projects supporting metro Denver's rapid commercial growth.",
    localPrograms: [
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus MEP",
      "Data-center design-build",
      "High-rise commercial and mixed-use systems",
      "Denver International Airport terminal MEP",
    ],
    agencies: [
      "Denver Community Planning & Development",
      "UCHealth & regional health systems",
      "University of Colorado facilities",
      "Denver International Airport",
      "Colorado State Buildings Program",
    ],
    marketDetail: [
      "Denver has adopted a building performance standard that requires existing commercial buildings to reach energy targets over time, which has turned retrofit and electrification into a compliance-driven market here in the same way carbon caps have in New York, and it is the main source of MEP work in the existing stock.",
      "Altitude is the technical detail engineers arriving from sea level most often get wrong. Reduced air density changes fan and compressor performance, combustion, ventilation rates and equipment capacity, so catalogue selections have to be corrected rather than taken at face value, and reviewers here expect to see that the correction was made.",
    ],
    hiringFocus: [
      {
        role: "Building performance & retrofit engineers",
        why: "Energy targets on existing buildings make retrofit design a scheduled obligation for owners rather than a discretionary project.",
      },
      {
        role: "Altitude-experienced mechanical engineers",
        why: "Equipment derating at this elevation changes selection and sizing, and it is a routine source of error for engineers new to the market.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous expansion to their own systems standards.",
      },
      {
        role: "Mission-critical engineers",
        why: "Data centre and critical facility work in the region needs redundancy design that general practice does not develop.",
      },
    ],
    licensure: "Colorado licenses through the State Board of Licensure for Architects, Professional Engineers and Professional Land Surveyors, with comity for equivalent licences. Denver enforces its own energy and performance requirements beyond the state code, so an engineer's experience is assessed by which jurisdiction they have filed in, not merely by which state licensed them.",
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    authority: "Boston ISD",
    marketNote:
      "Home to the Kendall Square biotech cluster and a world-class hospital network, Boston is one of the country's most demanding markets for life-science and healthcare MEP.",
    localPrograms: [
      "Kendall Square life-science and lab-space MEP",
      "Academic medical center & hospital infrastructure",
      "Higher-education campus systems",
      "High-rise commercial and mixed-use MEP",
      "Building emissions reduction (BERDO-style) retrofits",
    ],
    agencies: [
      "Boston Inspectional Services Department",
      "Mass General Brigham & regional health systems",
      "Harvard & MIT facilities",
      "Massachusetts Division of Capital Asset Management",
      "Massport",
    ],
    marketDetail: [
      "This region holds the largest concentration of laboratory space in the country, and laboratory MEP is its defining technical discipline. High air change rates, fume hood containment, redundancy, vibration criteria and the energy consequences of moving that much air make lab design a specialism that engineers build entire careers inside.",
      "The state's stretch and specialised energy codes push new buildings toward very low emissions, which collides directly with laboratory ventilation demands. Reconciling those two is the hardest routine problem in this market and the reason experienced lab engineers here are difficult to replace.",
    ],
    hiringFocus: [
      {
        role: "Laboratory MEP engineers",
        why: "The region's research cluster is the largest in the country and lab systems are a discipline of their own.",
      },
      {
        role: "Energy code & decarbonisation engineers",
        why: "Stretch code requirements apply on top of the base code, and reconciling them with lab loads is the local design challenge.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Major academic medical centres run continuous capital programmes with demanding systems standards.",
      },
      {
        role: "Commissioning engineers",
        why: "Laboratory and healthcare systems are accepted on measured performance rather than on installation alone.",
      },
    ],
    licensure: "Massachusetts licenses through the Board of Registration of Professional Engineers and Land Surveyors, with comity for equivalent licences. Municipalities may adopt the state's stretch or specialised energy code, so which code applies depends on the town as well as the state, and an engineer's familiarity with the adopting jurisdiction matters as much as the licence.",
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    authority: "Minneapolis Regulatory Services",
    marketNote:
      "In the Twin Cities, we staff the mechanical, electrical, and controls engineers behind the region's healthcare-system, data-center, and high-rise commercial projects.",
    localPrograms: [
      "Healthcare-system and hospital infrastructure",
      "Data-center design-build",
      "High-rise commercial and mixed-use systems",
      "Higher-education campus MEP",
      "MSP airport terminal mechanical & electrical",
    ],
    agencies: [
      "Minneapolis Community Planning & Economic Development",
      "Minnesota Department of Labor & Industry",
      "Regional health systems across the Twin Cities",
      "University of Minnesota facilities",
      "Metropolitan Airports Commission",
    ],
    marketDetail: [
      "Heating design carries more weight here than cooling, which inverts the priorities of most American MEP markets. Design temperatures well below zero make heating capacity, freeze protection, glycol systems, ventilation preheat and building envelope interaction the questions that decide whether a system works, and getting them wrong causes damage rather than discomfort.",
      "Healthcare is the market's institutional anchor, with large systems running continuous capital programmes, while the connected skyway network downtown creates pressurisation and infiltration conditions between buildings that engineers elsewhere never encounter.",
    ],
    hiringFocus: [
      {
        role: "Cold climate mechanical engineers",
        why: "Heating capacity, freeze protection and preheat design govern system performance here in a way cooling-led markets never require.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Large regional health systems run rolling capital programmes to their own standards.",
      },
      {
        role: "Central plant & district energy engineers",
        why: "Campus and downtown heating is delivered at plant scale rather than building by building.",
      },
      {
        role: "Commissioning engineers",
        why: "Systems that must work through a severe winter are proven in commissioning rather than assumed.",
      },
    ],
    licensure: "Minnesota licenses through the Board of Architecture, Engineering, Land Surveying, Landscape Architecture, Geoscience and Interior Design, with comity for equivalent licences. The state administers its building and energy code centrally through the Department of Labor and Industry rather than leaving it to each municipality, which makes code experience more portable within Minnesota than it is in states where every city amends.",
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    authority: "Detroit BSEED",
    marketNote:
      "Across metro Detroit, we recruit MEP engineers for the automotive-plant, hospital, and higher-education projects central to the region's manufacturing and healthcare base.",
    localPrograms: [
      "Automotive plant mechanical & electrical systems",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus MEP",
      "Data-center design-build",
      "Detroit Metro airport terminal systems",
    ],
    agencies: [
      "Detroit Buildings, Safety Engineering & Environmental Department",
      "Michigan Department of Licensing & Regulatory Affairs",
      "Henry Ford Health & regional health systems",
      "Automotive and battery manufacturers across south east Michigan",
      "Wayne State University facilities",
    ],
    marketDetail: [
      "Industrial work anchors MEP practice in south east Michigan. Automotive plants and, increasingly, battery and electrified powertrain facilities need process utilities, compressed air, exhaust, high-capacity electrical distribution and ventilation designed for manufacturing rather than occupancy, which is a different profession from commercial building services.",
      "The second strand is adaptive reuse. A large stock of substantial older buildings being brought back into service means fitting modern systems into structures with no provision for them, under a cold-climate heating requirement that leaves little margin for a compromised design.",
    ],
    hiringFocus: [
      {
        role: "Industrial & manufacturing MEP engineers",
        why: "Plant utilities and process ventilation are a distinct discipline that the region's manufacturing base demands continuously.",
      },
      {
        role: "High-capacity electrical engineers",
        why: "Battery and electrified manufacturing facilities need distribution design at a scale commercial work never reaches.",
      },
      {
        role: "Adaptive reuse mechanical engineers",
        why: "Older buildings returning to service need systems fitted where none were designed for, in a demanding climate.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous capital programmes with their own systems standards.",
      },
    ],
    licensure: "Michigan licenses through the Department of Licensing and Regulatory Affairs, with comity for equivalent out-of-state licences. Industrial work is often governed by the owner's engineering standards and by process safety requirements rather than by the building code alone, so manufacturing experience is assessed separately from commercial credentials by employers here.",
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    authority: "Charlotte-Mecklenburg Code Enforcement",
    marketNote:
      "In Charlotte, we place MEP engineers on the banking-campus, data-center, and hospital projects driving one of the Southeast's fastest-growing commercial markets.",
    localPrograms: [
      "Corporate & banking headquarters campus MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "High-rise commercial and mixed-use systems",
      "Charlotte Douglas airport terminal MEP",
    ],
    agencies: [
      "Charlotte-Mecklenburg Code Enforcement",
      "North Carolina Department of Insurance, Engineering Division",
      "Atrium Health & Novant Health facilities",
      "Financial sector corporate campuses",
      "Charlotte Douglas International Airport",
    ],
    marketDetail: [
      "Charlotte's MEP market rests on two owner types. The banking sector's presence has produced large corporate campuses and, with them, the trading floors, operations centres and standby power arrangements that financial infrastructure requires, while the state's data centre growth has brought mission-critical work into the region alongside it.",
      "Healthcare is the steady third. Two large hospital systems run continuous capital programmes across the metro, which supports a reliable base of institutional MEP work underneath the more cyclical corporate and critical facility markets.",
    ],
    hiringFocus: [
      {
        role: "Mission-critical electrical engineers",
        why: "Financial operations centres and data centres both need redundancy and standby design that general practice does not develop.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Two large hospital systems expand continuously to their own systems standards.",
      },
      {
        role: "Corporate campus mechanical engineers",
        why: "Large single-owner campuses are designed and operated to standards that persist across many projects.",
      },
      {
        role: "Commissioning engineers",
        why: "Critical and healthcare facilities are accepted on demonstrated performance rather than on installation.",
      },
    ],
    licensure: "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, with comity for equivalent licences, and requires the firm to hold its own certificate of authorisation before offering engineering services. The state reviews building plans centrally through the Department of Insurance for many project types, which is an approval route engineers arriving from other states do not expect.",
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    authority: "Metro Nashville Codes Department",
    marketNote:
      "Home to HCA Healthcare and a booming hospitality sector, Nashville recruits MEP engineers for healthcare-HQ, hospital, and high-rise hospitality projects at a fast pace.",
    localPrograms: [
      "Healthcare headquarters & hospital-system MEP",
      "Hospitality and high-rise mixed-use systems",
      "Data-center design-build",
      "Higher-education campus infrastructure",
      "Nashville International airport terminal MEP",
    ],
    agencies: [
      "Metro Nashville Codes Department",
      "Vanderbilt University Medical Center",
      "Metro Nashville Public Schools",
      "Metropolitan Nashville Airport Authority",
      "Tennessee State Building Commission",
      "Nashville Electric Service",
    ],
    marketDetail: [
      "Nashville is a healthcare town in a way few other metros are, and that fact sets the MEP agenda. Hospital operators and their corporate offices are headquartered here, which means a steady stream of acute care, outpatient and medical office work, and hospital systems carry requirements ordinary commercial buildings never touch: pressure relationships between spaces, air change rates, medical gas, isolation rooms and essential electrical systems with their own separation and testing regime.",
      "The second stream is hospitality and mixed use. Hotels and residential towers built for a tourist economy have their own plant, riser and acoustics problems, and the humid climate makes latent load rather than sensible load the harder half of the design. Dehumidification, condensate management and envelope interaction get more engineering attention here than in a dry market of the same size.",
    ],
    hiringFocus: [
      {
        role: "Healthcare mechanical engineers",
        why: "Hospital pressurization, air change and medical gas requirements are a regulated specialism the local market runs on.",
      },
      {
        role: "Electrical engineers with essential power experience",
        why: "Healthcare essential electrical systems carry separation, redundancy and testing rules ordinary commercial work never involves.",
      },
      {
        role: "Plumbing & medical gas engineers",
        why: "Medical gas design and certification is a distinct qualification and the hospital pipeline here needs it constantly.",
      },
      {
        role: "Commissioning agents",
        why: "Healthcare and hospitality owners both require performance verification, and commissioning is a testing discipline rather than a design one.",
      },
    ],
    licensure:
      "Tennessee licenses engineers through the Board of Architectural and Engineering Examiners within the Department of Commerce and Insurance, and out-of-state PEs generally transfer by comity on an NCEES record. For MEP work the license is rarely the obstacle: healthcare projects are reviewed against state health facility requirements as well as the building code, so experience with that review, and with medical gas certification where it applies, is what hiring managers actually test.",
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    authority: "Portland BDS",
    marketNote:
      "In the Portland metro's Silicon Forest, we place MEP engineers on the semiconductor, healthcare, and decarbonization-driven retrofit projects central to the region.",
    localPrograms: [
      "Semiconductor fab mechanical & electrical (Hillsboro)",
      "Hospital and healthcare-system infrastructure",
      "Building electrification & decarbonization retrofits",
      "High-rise commercial and mixed-use systems",
      "Data-center design-build",
    ],
    agencies: [
      "Portland Bureau of Development Services",
      "Oregon Health & Science University",
      "Portland Public Schools",
      "Port of Portland",
      "Oregon Building Codes Division",
      "Energy Trust of Oregon",
    ],
    marketDetail: [
      "Oregon runs one of the more demanding energy codes in the country, and Portland layers local expectations on top, so MEP engineers here spend real time on envelope and system performance, energy modeling and the documentation that proves compliance. Electrification and heat pump design have moved from alternative to default on a large share of projects, which rewards engineers who can size and control them rather than fall back on combustion.",
      "Two local building characteristics make the work distinctive. Mass timber construction is genuinely common here, and exposed structure with no ceiling void forces mechanical, electrical and sprinkler routing to be coordinated as an architectural element rather than hidden. Seismic restraint of ducts, pipes, equipment and electrical distribution is also a real design task in a subduction zone, not a specification note.",
    ],
    hiringFocus: [
      {
        role: "Energy modelers & performance engineers",
        why: "A stringent state energy code makes compliance modeling part of the design deliverable rather than a consultancy add-on.",
      },
      {
        role: "Heat pump & electrification engineers",
        why: "Electrified heating is the default approach locally, which requires sizing and control skills combustion design does not build.",
      },
      {
        role: "MEP engineers experienced in mass timber",
        why: "Exposed structure with no ceiling void turns service routing into a coordination problem solved at design stage.",
      },
      {
        role: "Seismic restraint & commissioning engineers",
        why: "Nonstructural bracing of building services is a genuine design requirement in a subduction zone.",
      },
    ],
    licensure:
      "Oregon licenses through the State Board of Examiners for Engineering and Land Surveying, and comity on an NCEES record is the normal route for an out-of-state PE. Oregon also maintains a separate structural engineer registration, which matters for anyone sealing the seismic bracing design that accompanies building services here. Local practice adds energy code documentation requirements that sit alongside the license rather than within it.",
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    authority: "Clark County Building Department",
    marketNote:
      "In the Las Vegas valley, we recruit MEP engineers for the resort-casino, arena, and hospitality projects behind one of the most mechanically complex building markets in the country.",
    localPrograms: [
      "Resort-casino and hospitality MEP",
      "Arena and large-venue mechanical & electrical",
      "Data-center design-build",
      "High-rise residential and mixed-use systems",
      "Harry Reid airport terminal MEP",
    ],
    agencies: [
      "Clark County Building Department",
      "Clark County School District",
      "Las Vegas Convention and Visitors Authority",
      "Harry Reid International Airport",
      "University of Nevada Las Vegas",
      "NV Energy",
    ],
    marketDetail: [
      "The resort corridor gives Las Vegas MEP work at a scale that exists almost nowhere else. A single property can combine a hotel tower, a casino floor, theaters, convention space, kitchens and a central plant serving all of it, which means chilled water distribution, thermal storage, kitchen ventilation and smoke control are designed at a size most engineers never encounter. The buildings also never close, so retrofit is staged around continuous operation.",
      "Climate sets the second agenda. Cooling dominates the year, peak demand is brutal and dry air makes evaporative approaches viable that would not work in a humid market, so plant selection, condenser water strategy and water consumption trade off against each other in ways that are specific to the desert. Data centers have added a second large cooling load with its own reliability requirements on top.",
    ],
    hiringFocus: [
      {
        role: "Central plant & chilled water engineers",
        why: "Resort-scale district cooling and thermal storage are designed at a size few engineers get exposure to.",
      },
      {
        role: "Mission critical electrical engineers",
        why: "Data centers and continuously operating resorts both demand redundancy, switching and testing beyond commercial norms.",
      },
      {
        role: "Smoke control & life safety engineers",
        why: "Large assembly, casino and atrium spaces require modeled smoke control and special inspection.",
      },
      {
        role: "Commissioning agents",
        why: "Systems this large are only proven by testing, and owners here treat verification as contractual rather than optional.",
      },
    ],
    licensure:
      "Nevada licenses through the State Board of Professional Engineers and Land Surveyors, and it licenses by branch rather than generally, so mechanical and electrical are separate registrations. This matters more for MEP than for any other discipline: an engineer arriving from a state with an undifferentiated PE needs the branch that matches what they intend to seal. Comity on an NCEES record is the usual route once the branch is settled.",
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    authority: "Columbus Building & Zoning Services",
    marketNote:
      "With Intel's multibillion-dollar chip campus underway, central Ohio has become one of the fastest-growing semiconductor and data-center MEP markets in the country.",
    localPrograms: [
      "Intel semiconductor mega-fab mechanical & electrical",
      "Hyperscale data-center power & cooling",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus MEP",
      "High-rise commercial and mixed-use systems",
    ],
    agencies: [
      "Columbus Building & Zoning Services",
      "The Ohio State University",
      "Nationwide Children's Hospital",
      "Ohio Facilities Construction Commission",
      "Columbus City Schools",
      "AEP Ohio",
    ],
    marketDetail: [
      "Large semiconductor and advanced manufacturing investment has given central Ohio an industrial MEP market that did not exist here a decade ago. Process facilities of that type need cleanroom air handling, process cooling, specialty gas and chemical distribution, and electrical capacity at a scale closer to a small utility than a building, and the local supply of engineers who have done that work is thin relative to demand.",
      "Alongside it, data centers have concentrated in the region for power availability and land, which adds a second reliability-driven cooling and electrical market. The more conventional side, university, healthcare and school construction, remains steady, and a continental climate with real heating and cooling seasons means plant design has to work hard at both ends of the year rather than optimizing for one.",
    ],
    hiringFocus: [
      {
        role: "Industrial & cleanroom MEP engineers",
        why: "Advanced manufacturing needs process utilities and contamination control that ordinary commercial MEP experience does not cover.",
      },
      {
        role: "Mission critical mechanical & electrical engineers",
        why: "Data center concentration has created sustained demand for redundancy, cooling and power distribution specialists.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Hospital pressurization and air change requirements remain a steady, regulated local workload.",
      },
      {
        role: "Commissioning agents",
        why: "Industrial and mission critical owners both verify performance by test, which is a distinct skill from design.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route. For MEP the differentiator is rarely the license: industrial and mission critical owners run their own qualification and vendor approval processes, and state facility work goes through the Ohio Facilities Construction Commission, so prior delivery under those is usually what decides a hire.",
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    authority: "SLC Building Services",
    marketNote:
      "Along the Wasatch Front's Silicon Slopes, we place MEP engineers on the tech-campus, healthcare, and data-center projects supporting the region's rapid growth.",
    localPrograms: [
      "Silicon Slopes tech-campus MEP",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Higher-education campus systems",
      "Salt Lake City International airport terminal MEP",
    ],
    agencies: [
      "Salt Lake City Building Services",
      "University of Utah Health",
      "Intermountain Health",
      "Salt Lake City International Airport",
      "Utah Division of Facilities Construction and Management",
      "Rocky Mountain Power",
    ],
    marketDetail: [
      "Seismic restraint of building services is a real design task here rather than a specification note. The Wasatch fault runs along the populated edge of the valley, and hospitals and other essential facilities carry requirements for ducts, piping, equipment anchorage and electrical distribution to remain functional after an event. Engineers who understand nonstructural bracing and the certification that goes with it are genuinely scarce.",
      "The climate offers an opportunity most markets do not have. Dry air makes evaporative and hybrid cooling strategies viable, which changes plant selection and water use trade-offs, while cold winters mean heating plant and freeze protection still have to be designed properly. Healthcare systems headquartered locally and a rebuilt airport keep a steady pipeline of technically demanding work.",
    ],
    hiringFocus: [
      {
        role: "Seismic restraint & essential facility engineers",
        why: "Post-event operability requirements for hospitals make nonstructural bracing a regulated design discipline here.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Locally headquartered hospital systems generate continuous pressurization, air change and medical gas work.",
      },
      {
        role: "Mechanical engineers with evaporative cooling experience",
        why: "A dry climate makes plant strategies viable that engineers from humid markets have never designed.",
      },
      {
        role: "Commissioning agents",
        why: "Essential facilities are proven operable by testing, which owners here require contractually.",
      },
    ],
    licensure:
      "Utah licenses through the Division of Professional Licensing and its Professional Engineers and Land Surveyors board, and comity on an NCEES record is the normal path. For MEP the substantive questions tend to be about healthcare facility review and seismic bracing certification rather than the license transfer, and state facility projects run through their own construction management division with separate qualification requirements.",
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    authority: "KCMO Codes Administration",
    marketNote:
      "Across the Kansas City metro, we recruit MEP engineers for the data-center, hospital, and animal-health-corridor projects powering the region's two-state commercial base.",
    localPrograms: [
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Animal-health & life-science facility MEP",
      "Higher-education campus systems",
      "KCI airport terminal mechanical & electrical",
    ],
    agencies: [
      "KCMO Codes Administration",
      "The University of Kansas Health System",
      "Children's Mercy Kansas City",
      "Kansas City Aviation Department",
      "Johnson County Facilities",
      "Evergy",
    ],
    marketDetail: [
      "Kansas City's MEP market is shaped by the same bi-state split that defines its civil work. Two states, two sets of amendments to the codes and two licensing boards mean an engineer who can seal on both sides of the line is usable on more of the market, and firms here organize around that fact rather than treating it as an inconvenience.",
      "The work itself concentrates in healthcare, animal health and life science, and a growing data center presence drawn by power availability. Hospital systems on both sides of the state line run continuous capital programs with the pressurization, medical gas and essential power requirements that come with them, while laboratory and vivarium work adds containment, exhaust and redundancy requirements that ordinary commercial design never addresses.",
    ],
    hiringFocus: [
      {
        role: "Dual-licensed mechanical & electrical engineers",
        why: "A bi-state metro means single-state registration limits which projects an engineer can seal.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Hospital systems on both sides of the line run continuous capital programs with regulated air and gas requirements.",
      },
      {
        role: "Laboratory & containment engineers",
        why: "Life science and animal health work needs exhaust, containment and redundancy that commercial design does not.",
      },
      {
        role: "Mission critical electrical engineers",
        why: "Data center growth has added sustained demand for redundant power distribution and switching design.",
      },
    ],
    licensure:
      "Missouri licenses through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects, and Kansas through its Board of Technical Professions. Comity registration in both is close to a practical requirement in this metro, and it is the most common licensure question raised in MEP searches here. Both states also require corporate authorization for firms offering engineering services.",
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    authority: "Indianapolis DBNS",
    marketNote:
      "Home to Eli Lilly's expanding manufacturing base, Indianapolis recruits MEP engineers for life-science, hospital, and data-center projects at a rapidly growing pace.",
    localPrograms: [
      "Life-science and pharmaceutical-manufacturing MEP",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "High-rise commercial and mixed-use systems",
      "Indianapolis International airport terminal MEP",
    ],
    agencies: [
      "Indianapolis Department of Business and Neighborhood Services",
      "IU Health",
      "Indianapolis Public Schools",
      "Indianapolis Airport Authority",
      "Indiana Department of Administration",
      "AES Indiana",
    ],
    marketDetail: [
      "Pharmaceutical and life science manufacturing anchors the technical end of this market. Facilities of that type are validated environments: air classification, pressure cascades, clean utilities, water systems and the documentation that proves they perform as specified are all engineered to a standard commercial work never approaches, and the local engineers who have done it are a small and well-known group.",
      "Around that sits a broad conventional market. Hospital systems run continuous capital programs, the region's logistics role keeps large warehouse and distribution facilities coming with their own lighting, ventilation and power demands, and a continental climate means both heating and cooling plant have to be designed properly rather than one being an afterthought.",
    ],
    hiringFocus: [
      {
        role: "Pharmaceutical & validated environment engineers",
        why: "Life science manufacturing needs classified air, clean utilities and validation documentation that commercial MEP does not.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Hospital capital programs sustain demand for pressurization, air change and medical gas design.",
      },
      {
        role: "Industrial & warehouse electrical engineers",
        why: "Large distribution facilities carry lighting, power and ventilation loads that need dedicated design attention.",
      },
      {
        role: "Commissioning & validation specialists",
        why: "Regulated facilities are accepted on documented performance, making verification a distinct professional track.",
      },
    ],
    licensure:
      "Indiana licenses through the State Board of Registration for Professional Engineers, administered by the Professional Licensing Agency, and comity on an NCEES record is the usual route. For regulated pharmaceutical and healthcare facilities the license is only the entry ticket: owners run their own qualification processes and expect documented experience with validated environments, which is what actually decides most senior MEP hires here.",
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    authority: "Milwaukee DNS",
    marketNote:
      "Across metro Milwaukee, we place MEP engineers on the industrial-manufacturing, hospital, and higher-education projects central to the region's economy.",
    localPrograms: [
      "Industrial and manufacturing-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "Mitchell International airport terminal MEP",
    ],
    agencies: [
      "Milwaukee Department of Neighborhood Services",
      "Froedtert & the Medical College of Wisconsin",
      "Milwaukee Public Schools",
      "Marquette University",
      "Milwaukee Mitchell International Airport",
      "We Energies",
    ],
    marketDetail: [
      "Milwaukee is a cold climate market with an old building stock, and that combination defines its MEP work. Heating plant, freeze protection, and the behavior of building envelopes through a long winter drive design decisions that a southern engineer would treat as secondary, while a large inventory of pre-war commercial and industrial buildings means retrofit, steam system conversion and fitting modern systems into constrained floor-to-floor heights are routine rather than exceptional.",
      "The technical demand concentrates in healthcare and in food and beverage manufacturing. Hospital systems and the academic medical centre run continuous capital work with the regulated air and power requirements that follow, and the region's processing plants need refrigeration, sanitary design and process ventilation that general commercial experience does not prepare an engineer for.",
    ],
    hiringFocus: [
      {
        role: "Healthcare mechanical engineers",
        why: "An academic medical center and regional hospital systems sustain regulated pressurization and air change work.",
      },
      {
        role: "Retrofit & existing building engineers",
        why: "An old, constrained building stock makes fitting modern systems into it the region's most common MEP challenge.",
      },
      {
        role: "Industrial refrigeration & process engineers",
        why: "Food and beverage manufacturing needs refrigeration and sanitary design outside ordinary commercial practice.",
      },
      {
        role: "Heating plant & controls engineers",
        why: "A long heating season makes plant sizing, staging and control a first-order design problem rather than a detail.",
      },
    ],
    licensure:
      "Wisconsin licenses through the Department of Safety and Professional Services, and comity on an NCEES record is standard for an out-of-state PE. Wisconsin's plan review for building services is handled at state level for many project types rather than purely locally, so familiarity with that submission process is a practical differentiator in MEP hiring alongside the license itself.",
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    authority: "Richmond PDR",
    marketNote:
      "Just south of the country's largest data-center market, Richmond has become an overflow hub for hyperscale and enterprise data-center MEP work.",
    localPrograms: [
      "Hyperscale and enterprise data-center MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "High-rise commercial and mixed-use systems",
      "Richmond International airport terminal MEP",
    ],
    agencies: [
      "Richmond Department of Planning and Development Review",
      "VCU Health System",
      "Virginia Department of General Services",
      "Henrico County Building Inspections",
      "Richmond Public Schools",
      "Dominion Energy",
    ],
    marketDetail: [
      "Virginia's data center market has been spreading south from the northern corridor, and Richmond's land and power availability have made it a growing destination. That work is electrical engineering first: utility coordination, substation and switchgear capacity, redundancy topology and the cooling systems that go with high density racks, all designed to reliability standards that ordinary commercial buildings do not carry.",
      "The established side of the market is institutional. State government facilities, an academic medical center and pharmaceutical manufacturing all run continuous programs with their own requirements, from hospital pressurization to classified environments and clean utilities. The humid climate keeps latent load and dehumidification a real design concern across all of it.",
    ],
    hiringFocus: [
      {
        role: "Mission critical electrical engineers",
        why: "Data center growth makes redundant power distribution, switchgear and utility coordination the fastest-growing local demand.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "An academic medical center runs continuous capital work under regulated air and gas requirements.",
      },
      {
        role: "Pharmaceutical & clean utility engineers",
        why: "Local manufacturing needs classified environments and validated systems that commercial design does not.",
      },
      {
        role: "Mechanical engineers with dehumidification experience",
        why: "A humid climate makes latent load the harder half of the cooling design on most buildings.",
      },
    ],
    licensure:
      "Virginia licenses through the Board for Architects, Professional Engineers, Land Surveyors, Certified Interior Designers and Landscape Architects within the Department of Professional and Occupational Regulation, and comity on an NCEES record is the usual route. State facility work goes through the Department of General Services with its own standards and approval process, and data center owners run private qualification regimes, so both sit alongside the license in hiring.",
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    authority: "Baltimore DHCD Permits",
    marketNote:
      "Home to Johns Hopkins, Baltimore recruits MEP engineers for some of the most complex academic-medical and life-science infrastructure in the country.",
    localPrograms: [
      "Johns Hopkins & academic medical center MEP",
      "Life-science and lab-space build-outs",
      "Port and industrial-facility electrical",
      "Higher-education campus systems",
      "Data-center design-build",
    ],
    agencies: [
      "Baltimore Department of Housing and Community Development",
      "Johns Hopkins Medicine",
      "University of Maryland Medical System",
      "Baltimore City Public Schools",
      "Maryland Department of General Services",
      "BGE",
    ],
    marketDetail: [
      "Baltimore's MEP market is anchored by research medicine at a level very few cities carry. Teaching hospitals and their laboratories combine acute care requirements with research containment: pressure cascades, once-through air, fume hood and exhaust design, vivarium environments and redundancy for equipment that cannot be allowed to fail. Engineers with genuine laboratory experience are the scarcest people in this market.",
      "The building stock supplies the other half of the difficulty. Much of the city is old, many institutional campuses still distribute steam, and floor-to-floor heights in historic buildings leave little room for modern distribution. A great deal of the work is therefore retrofit into occupied buildings, staged so that clinical or research operations never stop.",
    ],
    hiringFocus: [
      {
        role: "Laboratory & research facility engineers",
        why: "Containment, fume hood exhaust and vivarium environments are a specialism the local research market runs on.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Major teaching hospitals run continuous capital programs under regulated air, gas and essential power requirements.",
      },
      {
        role: "Retrofit engineers for occupied buildings",
        why: "Most work here is inserted into operating facilities with constrained ceiling space and legacy steam distribution.",
      },
      {
        role: "Commissioning agents",
        why: "Research and clinical environments are accepted on measured performance rather than on design intent.",
      },
    ],
    licensure:
      "Maryland licenses through the State Board for Professional Engineers under the Department of Labor, and comity on an NCEES record is the standard route. Because the metro sits close to the District and Virginia, engineers working the wider region frequently carry more than one registration. For institutional work, hospital and university owners run their own design standards and approval processes that matter as much as the license.",
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    authority: "NOLA One Stop Permits",
    marketNote:
      "Along the Louisiana Gulf Coast, we place MEP engineers on the hospitality, hospital, and critical-power projects built to withstand the region's hurricane-driven resiliency demands.",
    localPrograms: [
      "Hospitality and high-rise mixed-use MEP",
      "Hurricane-resilient backup power & critical systems",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Louis Armstrong airport terminal MEP",
    ],
    agencies: [
      "New Orleans Department of Safety and Permits",
      "Ochsner Health",
      "LCMC Health",
      "Louisiana Facility Planning and Control",
      "Louis Armstrong International Airport",
      "Entergy New Orleans",
    ],
    marketDetail: [
      "Humidity governs mechanical design in New Orleans more completely than temperature does. Latent load dominates, dehumidification has to be engineered deliberately rather than treated as a by-product of cooling, and buildings that get it wrong develop mold and envelope problems quickly. Engineers arriving from drier markets consistently underestimate how much of the design effort this absorbs.",
      "Resilience is the second requirement, and it is unusually literal here. Flood risk pushes electrical rooms, generators and mechanical plant above grade or onto upper floors, hospitals and other critical facilities have to keep operating through a storm and its aftermath, and emergency power design is sized for days rather than hours. That shapes not just equipment selection but where in the building the plant can go at all.",
    ],
    hiringFocus: [
      {
        role: "Mechanical engineers with dehumidification expertise",
        why: "Latent load dominates the climate, and buildings designed without deliberate humidity control fail quickly.",
      },
      {
        role: "Emergency & standby power engineers",
        why: "Critical facilities are expected to run through a storm and its aftermath, which changes how generation is sized and sited.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Regional hospital systems combine regulated air requirements with storm resilience obligations.",
      },
      {
        role: "Engineers experienced in elevated plant design",
        why: "Flood risk relocates electrical and mechanical plant above grade, which constrains layout from the first sketch.",
      },
    ],
    licensure:
      "Louisiana licenses through the Professional Engineering and Land Surveying Board, and comity on an NCEES record is the usual route for an individual. Louisiana also licenses firms: a company practicing engineering in the state needs a certificate of authorization with a designated resident professional in responsible charge, which catches out-of-state MEP consultancies opening an office here more often than it catches individuals.",
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    authority: "Louisville Metro Codes & Regulations",
    marketNote:
      "Home to UPS Worldport, one of the largest automated logistics facilities in the world, Louisville recruits MEP engineers for major logistics, healthcare, and manufacturing projects.",
    localPrograms: [
      "UPS Worldport & logistics-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Louisville airport terminal systems",
    ],
    agencies: [
      "Louisville Metro Codes and Regulations",
      "Norton Healthcare",
      "UofL Health",
      "Jefferson County Public Schools",
      "Louisville Muhammad Ali International Airport",
      "LG&E",
    ],
    marketDetail: [
      "Louisville's distinctive MEP demand comes from logistics at an unusual scale. A major air cargo sorting operation and the warehousing around it require conveyor-heavy power distribution, high bay lighting and ventilation, and systems designed around a facility that runs overnight at full tilt and has no tolerance for downtime. That is a different engineering problem from an office building and the experience does not transfer easily either way.",
      "The conventional market is healthcare and manufacturing. Two hospital systems run continuous capital programs with the regulated air, medical gas and essential power requirements attached, and the region's distilling and food processing plants need process ventilation, refrigeration and hazardous area electrical design. A humid continental climate keeps both dehumidification and heating plant genuinely in play.",
    ],
    hiringFocus: [
      {
        role: "Industrial & logistics electrical engineers",
        why: "Large sorting and distribution facilities carry power, lighting and controls loads outside commercial experience.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Two hospital systems sustain regulated pressurization, air change and medical gas design work.",
      },
      {
        role: "Process & hazardous area engineers",
        why: "Distilling and food processing require classified electrical and process ventilation design most engineers never touch.",
      },
      {
        role: "Commissioning agents",
        why: "Facilities that cannot afford downtime are accepted on tested performance rather than on drawings.",
      },
    ],
    licensure:
      "Kentucky licenses through the State Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the normal route. Because the metro reaches across the river into Indiana, MEP engineers covering the full region frequently hold both. Healthcare projects are reviewed against state health facility standards in addition to the building code, which is the review that most often catches engineers new to the market.",
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    authority: "OKC Development Services",
    marketNote:
      "In central Oklahoma, we recruit MEP engineers for the healthcare, energy-sector, and data-center projects supporting Oklahoma City's growing commercial base.",
    localPrograms: [
      "Hospital and healthcare-system infrastructure",
      "Energy-sector facility mechanical & electrical",
      "Data-center design-build",
      "Higher-education campus systems",
      "Will Rogers airport terminal MEP",
    ],
    agencies: [
      "OKC Development Services",
      "OU Health",
      "INTEGRIS Health",
      "Oklahoma City Public Schools",
      "Tinker Air Force Base",
      "OG&E",
    ],
    marketDetail: [
      "Severe weather shapes building services here in a way it does not in most of the country. Safe rooms and hardened shelter areas in schools and public buildings need ventilation, power and lighting that stay available when the rest of the building may not, and critical facilities are designed around the assumption that the grid will fail. Emergency power, transfer arrangements and the separation of essential loads get more attention than the metro's size would suggest.",
      "The technical base is healthcare and federal aviation maintenance. Hospital systems run continuous capital programs with regulated pressurization, medical gas and essential electrical requirements, while the depot maintenance work at the air base brings hangar ventilation, compressed air, industrial power and fuel systems that sit well outside commercial practice. The climate swings hard in both directions, so plant has to be sized honestly for heating and cooling alike.",
    ],
    hiringFocus: [
      {
        role: "Emergency & standby power engineers",
        why: "Severe weather makes continuity of essential loads a design requirement rather than an owner preference.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Hospital capital programs sustain regulated air change, pressurization and medical gas work.",
      },
      {
        role: "Industrial & hangar systems engineers",
        why: "Aviation maintenance facilities need ventilation, compressed air and fuel systems outside commercial experience.",
      },
      {
        role: "Federal facility MEP engineers",
        why: "Military work carries its own criteria and security requirements that commercial design does not prepare an engineer for.",
      },
    ],
    licensure:
      "Oklahoma licenses through the State Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the standard route for an individual. Firms also need a certificate of authorization to practice in the state. Federal work at the air base sits outside state licensure for approval purposes but carries its own design criteria and clearance requirements, which is usually the harder qualification to satisfy.",
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    authority: "Charleston County Building Services",
    marketNote:
      "Home to Boeing's South Carolina campus, Charleston recruits MEP engineers for aerospace-manufacturing, hospitality, and hospital projects across a fast-growing coastal market.",
    localPrograms: [
      "Boeing & aerospace-manufacturing facility MEP",
      "Hospitality and high-rise mixed-use systems",
      "Hospital and healthcare-system infrastructure",
      "Port and industrial-facility electrical",
      "Higher-education campus systems",
    ],
    agencies: [
      "Charleston County Building Services",
      "MUSC Health",
      "Charleston County School District",
      "Joint Base Charleston",
      "Charleston Water System",
      "Dominion Energy South Carolina",
    ],
    marketDetail: [
      "Charleston is hot, humid and coastal, which makes moisture the central mechanical problem. Latent load dominates, envelope and system have to be designed together or buildings develop mold, and salt air shortens the life of exposed equipment, coils and electrical enclosures enough that material selection becomes a real design decision rather than a specification default.",
      "The historic district adds a constraint almost no other market imposes at this intensity. Architectural review governs what can be seen from the street, which pushes equipment, louvers, flues and service routing into concealed positions and rules out approaches that would be routine elsewhere. Alongside that, an academic medical center and large aerospace manufacturing give the region a technical workload in regulated and industrial environments.",
    ],
    hiringFocus: [
      {
        role: "Mechanical engineers with humidity control expertise",
        why: "Latent load and moisture risk dominate design in a hot coastal climate.",
      },
      {
        role: "MEP engineers experienced in historic buildings",
        why: "Architectural review restricts where equipment and services can go, which has to be solved at design stage.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "An academic medical center runs continuous capital work under regulated air and medical gas requirements.",
      },
      {
        role: "Industrial & aerospace facility engineers",
        why: "Large manufacturing operations need compressed air, process ventilation and power at a scale commercial design does not cover.",
      },
    ],
    licensure:
      "South Carolina licenses through the Board of Registration for Professional Engineers and Surveyors within the Department of Labor, Licensing and Regulation, and comity on an NCEES record is the usual route. For MEP, the reviews that matter locally sit alongside the license: healthcare projects go through state facility review, and work in the historic district is subject to architectural approval that materially constrains the engineering.",
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    authority: "Newark UCC Division",
    marketNote:
      "In northern New Jersey, we recruit MEP engineers for the data-center, port-industrial, and hospital projects serving the greater New York–Newark corridor.",
    localPrograms: [
      "Data-center design-build (northern NJ corridor)",
      "Port and industrial-facility electrical",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Newark Liberty airport terminal MEP",
    ],
    agencies: [
      "Newark Uniform Construction Code Division",
      "University Hospital",
      "Port Authority of NY & NJ",
      "Rutgers University",
      "Newark Board of Education",
      "PSE&G",
    ],
    marketDetail: [
      "New Jersey administers construction through a statewide uniform code with separately licensed subcode officials for building, electrical, plumbing, fire and elevator, so an MEP project is reviewed by specialists in each trade rather than by a single plan examiner. Engineers who know how that review is structured get through it faster, and those who do not tend to discover the difference on their first submission.",
      "The work itself is airport, healthcare, higher education and pharmaceutical. Terminal projects are built around operations that never stop and carry baggage systems, jet bridge power and life safety at an unusual scale; hospitals and universities run continuous capital programs; and the state's pharmaceutical corridor brings classified environments and clean utilities. An old, dense building stock means much of it is retrofit rather than new build.",
    ],
    hiringFocus: [
      {
        role: "MEP engineers fluent in the state uniform code",
        why: "Trade-specific subcode review means submissions are examined by specialists, which changes how documents must be prepared.",
      },
      {
        role: "Aviation & transport facility engineers",
        why: "Terminal work is staged around continuous operations and carries systems commercial buildings do not have.",
      },
      {
        role: "Pharmaceutical & clean utility engineers",
        why: "The regional pharmaceutical base needs classified environments and validated systems.",
      },
      {
        role: "Retrofit engineers for occupied buildings",
        why: "A dense old building stock makes inserting modern systems into working buildings the common case.",
      },
    ],
    licensure:
      "New Jersey licenses through the State Board of Professional Engineers and Land Surveyors within the Division of Consumer Affairs, and comity on an NCEES record is the normal route. Because the Port Authority is bi-state and much regional work crosses into New York, MEP engineers covering the full market often hold both registrations. The state's subcode review structure is a practical requirement layered on top of the license.",
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    authority: "SF DBI",
    marketNote:
      "Across the Bay Area, we place MEP engineers on the tech-headquarters, life-science, and high-rise projects at the center of one of the country's most demanding, code-heavy building markets.",
    localPrograms: [
      "Tech-headquarters campus mechanical & electrical",
      "Life-science and lab-space build-outs (UCSF)",
      "High-rise commercial and mixed-use systems",
      "Building performance & decarbonization retrofits",
      "SFO airport terminal MEP",
    ],
    agencies: [
      "San Francisco Department of Building Inspection",
      "UCSF",
      "California Department of Health Care Access and Information",
      "San Francisco Unified School District",
      "San Francisco Public Utilities Commission",
      "PG&E",
    ],
    marketDetail: [
      "California's energy standards are the most demanding in the country and San Francisco layers local requirements on top, including a push toward all-electric new construction. That makes energy modeling, heat pump design and compliance documentation core deliverables rather than specialist extras, and it means an engineer's fluency with the state standards is checked directly in hiring.",
      "Two other factors make this a technically deep market. Hospital projects are reviewed by a dedicated state agency with its own submission, inspection and seismic anchorage regime that is slower and stricter than ordinary building review, and the region's biotechnology base generates laboratory work with containment, fume hood exhaust and redundancy requirements. Seismic bracing of ducts, pipes and equipment applies across all of it.",
    ],
    hiringFocus: [
      {
        role: "Energy modelers & all-electric design engineers",
        why: "State energy standards and local electrification rules make compliance design a central deliverable.",
      },
      {
        role: "Healthcare engineers with state hospital review experience",
        why: "Hospital projects go through a separate state agency whose process is a specialism in itself.",
      },
      {
        role: "Laboratory & biotech facility engineers",
        why: "Containment, exhaust and redundancy requirements in research buildings are outside commercial practice.",
      },
      {
        role: "Seismic restraint engineers",
        why: "Nonstructural bracing of building services is a genuine design task in this seismic region.",
      },
    ],
    licensure:
      "California licenses through the Board for Professional Engineers, Land Surveyors and Geologists and is not a straightforward comity state, so an out-of-state PE cannot simply transfer. For MEP specifically, California also recognizes mechanical and electrical as their own licensed branches, and hospital work adds a state agency review with its own approval requirements that sits entirely outside the licensing question.",
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    authority: "San Diego DSD",
    marketNote:
      "Home to one of the largest biotech clusters in the country, San Diego recruits MEP engineers for life-science, hospital, and high-rise projects across Southern California's southern gateway.",
    localPrograms: [
      "Biotech and life-science lab-space MEP",
      "Hospital and healthcare-system infrastructure",
      "High-rise residential and mixed-use systems",
      "Higher-education campus systems",
      "San Diego International Airport terminal MEP",
    ],
    agencies: [
      "San Diego Development Services Department",
      "UC San Diego Health",
      "Naval Facilities Engineering Systems Command Southwest",
      "San Diego Unified School District",
      "California Department of Health Care Access and Information",
      "SDG&E",
    ],
    marketDetail: [
      "San Diego's climate is the mildest of any large American market, and good engineers exploit it. Economizer hours, natural and mixed mode ventilation and low cooling loads make strategies viable that would be impossible in a hot humid metro, and the state energy standards actively reward designs that take advantage of them. The trade-off is that sloppy design is penalised heavily by the same code.",
      "The technical demand is concentrated in two places. The region's biotechnology cluster generates laboratory work with containment, exhaust, process gas and redundancy requirements, and the Navy's presence brings federal facility work built to its own criteria with security and commissioning expectations that differ from commercial practice. Healthcare adds a third stream under separate state review.",
    ],
    hiringFocus: [
      {
        role: "Laboratory & life science engineers",
        why: "A large biotech cluster needs containment, exhaust and process utility design outside commercial experience.",
      },
      {
        role: "Federal & military facility engineers",
        why: "Navy work follows its own design criteria and security requirements rather than commercial norms.",
      },
      {
        role: "Energy modelers & mixed mode design engineers",
        why: "A mild climate makes ventilation-led strategies viable, and the state energy standards reward getting them right.",
      },
      {
        role: "Healthcare engineers with state hospital review experience",
        why: "Hospital projects carry a separate state approval process that is a specialism of its own.",
      },
    ],
    licensure:
      "California licenses through the Board for Professional Engineers, Land Surveyors and Geologists, with mechanical and electrical recognized as their own branches, and it does not grant straightforward comity to an out-of-state PE. Federal work on the bases sits outside state licensure for approval but carries its own design criteria and clearance requirements, which is frequently the harder credential to obtain.",
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    authority: "San Antonio DSD",
    marketNote:
      "Home to a major military medical and cybersecurity presence, San Antonio recruits MEP engineers for healthcare, military-facility, and data-center projects across South Texas.",
    localPrograms: [
      "Military and federal-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Higher-education campus systems",
      "San Antonio International Airport terminal MEP",
    ],
    agencies: [
      "San Antonio Development Services Department",
      "University Health",
      "Joint Base San Antonio",
      "CPS Energy",
      "Northside Independent School District",
      "Texas Department of Licensing and Regulation",
    ],
    marketDetail: [
      "San Antonio carries one of the largest concentrations of military installations in the country, and that gives the local MEP market a federal character. Work on the bases follows its own unified criteria rather than the commercial codes, with separate expectations for redundancy, physical security, antiterrorism standoff and commissioning, and engineers who have delivered under them are a distinct and sought-after group.",
      "The civilian market centers on healthcare and, increasingly, data centers. The medical district runs continuous hospital and research capital work with the regulated air, gas and essential power requirements attached, while cheap power and land have drawn mission critical facilities whose cooling and electrical demands are their own discipline. A hot humid climate means dehumidification and peak cooling design matter on all of it.",
    ],
    hiringFocus: [
      {
        role: "Federal & military facility MEP engineers",
        why: "Base work follows unified federal criteria with security and redundancy expectations commercial design does not cover.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "A large medical district sustains regulated pressurization, air change and medical gas design.",
      },
      {
        role: "Mission critical mechanical & electrical engineers",
        why: "Data center growth has created steady demand for redundant cooling and power distribution design.",
      },
      {
        role: "Mechanical engineers with dehumidification experience",
        why: "A hot humid climate makes latent load the harder half of cooling design across building types.",
      },
    ],
    licensure:
      "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity on an NCEES record the normal individual route and a separate firm registration for companies offering engineering services. Texas also runs accessibility review through a state agency on most public projects. Federal work on the installations follows its own criteria and clearance requirements independent of state licensure.",
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    authority: "Austin DSD",
    marketNote:
      "With Tesla, Samsung, and Apple all expanding in Central Texas, Austin has become one of the fastest-growing semiconductor and tech-campus MEP markets in the country.",
    localPrograms: [
      "Semiconductor fab mechanical & electrical (Samsung)",
      "Tech-campus and corporate headquarters MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Austin-Bergstrom airport terminal MEP",
    ],
    agencies: [
      "Austin Development Services Department",
      "Austin Energy",
      "Ascension Seton",
      "The University of Texas at Austin",
      "Austin Independent School District",
      "Travis County Facilities",
    ],
    marketDetail: [
      "Semiconductor manufacturing has made Austin an industrial MEP market as much as a commercial one. Fabrication facilities need cleanroom air handling, ultrapure water, specialty and bulk gas distribution, process cooling and electrical capacity on a scale closer to infrastructure than to buildings, and the pool of engineers who have actually delivered that work is small relative to how much of it the region now has.",
      "The city also runs its own municipal utility with a long-established green building program, which means energy performance expectations are set locally rather than only by state code, and projects are assessed against them. Add a hot climate with a long cooling season, a growing data center presence and continuous university and healthcare capital work, and the demand runs from process utilities through to conventional commercial design.",
    ],
    hiringFocus: [
      {
        role: "Semiconductor & cleanroom MEP engineers",
        why: "Fabrication facilities need contamination control and process utilities that commercial experience does not develop.",
      },
      {
        role: "Mission critical mechanical & electrical engineers",
        why: "Data center growth sustains demand for redundant cooling and power distribution specialists.",
      },
      {
        role: "Energy modelers & green building engineers",
        why: "A municipal utility green building program sets performance expectations assessed project by project.",
      },
      {
        role: "Healthcare & higher education mechanical engineers",
        why: "University and hospital capital programs run continuously alongside the industrial work.",
      },
    ],
    licensure:
      "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity on an NCEES record the usual individual route and firm registration required separately. In Austin the practical differentiator for MEP is rarely the license: the municipal utility's energy program and the city's development review are more prescriptive than most Texas jurisdictions, and industrial owners run their own qualification processes on top.",
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    authority: "Jacksonville Building Inspection Division",
    marketNote:
      "Home to Mayo Clinic Jacksonville, we recruit MEP engineers for healthcare, port-industrial, and hospitality projects across North Florida's largest city.",
    localPrograms: [
      "Mayo Clinic & academic medical center MEP",
      "Port and industrial-facility electrical",
      "Hospitality and high-rise mixed-use systems",
      "Data-center design-build",
      "JAXPORT and marine-terminal infrastructure",
    ],
    agencies: [
      "Jacksonville Building Inspection Division",
      "Mayo Clinic Florida",
      "Baptist Health",
      "Duval County Public Schools",
      "NAVFAC Southeast",
      "JEA",
    ],
    marketDetail: [
      "Wind governs a great deal of MEP design in coastal Florida. Rooftop equipment, louvers, screens and any service penetration through the envelope have to be rated, anchored and documented against design wind pressures, and product approval is a formal part of the submission rather than an afterthought. Engineers new to the state routinely underestimate how much of the design record this consumes.",
      "Humidity and resilience take care of the rest. Latent load dominates the cooling season, dehumidification has to be deliberate, and critical facilities are expected to keep operating through a storm, which drives emergency power sizing and the siting of plant above expected flood levels. Healthcare systems and a significant Navy presence supply the technically demanding end of the workload.",
    ],
    hiringFocus: [
      {
        role: "Mechanical engineers with hurricane-rated equipment experience",
        why: "Wind rating, anchorage and product approval for rooftop plant are a formal part of the submission here.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Major hospital systems run continuous capital work under regulated air and medical gas requirements.",
      },
      {
        role: "Emergency & standby power engineers",
        why: "Critical facilities are expected to operate through storms, which changes how generation is sized and sited.",
      },
      {
        role: "Federal & naval facility engineers",
        why: "Navy work follows its own criteria with security and commissioning expectations outside commercial practice.",
      },
    ],
    licensure:
      "Florida licenses through the Board of Professional Engineers, and comity on an NCEES record is the standard route for an out-of-state PE. The Florida Building Code's product approval and wind design requirements sit alongside the license as the knowledge that actually decides whether an MEP submission survives review, and healthcare projects carry separate state facility review on top.",
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    authority: "Orlando Permitting Services",
    marketNote:
      "In our home market of Central Florida, we place MEP engineers on the theme-park, hospitality, and hospital projects behind one of the most mechanically complex entertainment markets in the world.",
    localPrograms: [
      "Theme-park and entertainment-campus MEP",
      "Hospitality and high-rise mixed-use systems",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Orlando International Airport (MCO) terminal MEP",
    ],
    agencies: [
      "Orlando Permitting Services",
      "AdventHealth",
      "Orlando Health",
      "Orange County Public Schools",
      "Greater Orlando Aviation Authority",
      "Orlando Utilities Commission",
    ],
    marketDetail: [
      "The entertainment and hospitality economy gives Orlando MEP work that exists in very few places. Attraction and show environments carry ride power, special effects, themed lighting and life safety in spaces that are neither ordinary assembly nor ordinary industrial, and the hotel and convention stock is large enough that central plants, district chilled water and kitchen ventilation are designed at genuine scale.",
      "The other half is healthcare, and it is unusually concentrated: two large hospital systems run continuous capital programs across the region, bringing regulated pressurization, air change, medical gas and essential electrical work. Underneath everything sits a hot humid climate where latent load dominates and where wind rating of rooftop equipment is a formal submission requirement rather than a detail.",
    ],
    hiringFocus: [
      {
        role: "Central plant & district cooling engineers",
        why: "Hotel, convention and attraction campuses are served at a scale that makes plant design its own specialism.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Two large hospital systems run continuous regulated capital work across the region.",
      },
      {
        role: "Entertainment & special venue electrical engineers",
        why: "Show power, ride systems and themed environments sit outside both commercial and industrial norms.",
      },
      {
        role: "Mechanical engineers with humidity and wind design experience",
        why: "Latent load dominates the climate and rooftop equipment must be rated and documented against wind pressures.",
      },
    ],
    licensure:
      "Florida licenses through the Board of Professional Engineers, with comity on an NCEES record the normal route. For MEP work here the Florida Building Code's wind and product approval requirements, and state health facility review on hospital projects, are what most often separate engineers who can carry a job through approval from those who cannot, rather than the license itself.",
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    authority: "Pittsburgh PLI",
    marketNote:
      "Home to UPMC and a strong university research base, Pittsburgh recruits MEP engineers for hospital, life-science, and higher-education projects across Western Pennsylvania.",
    localPrograms: [
      "UPMC & academic medical center MEP",
      "Life-science and research-lab build-outs (CMU, Pitt)",
      "Higher-education campus systems",
      "Data-center design-build",
      "Pittsburgh International Airport terminal MEP",
    ],
    agencies: [
      "Pittsburgh Department of Permits, Licenses and Inspections",
      "UPMC",
      "University of Pittsburgh",
      "Carnegie Mellon University",
      "Pittsburgh Public Schools",
      "Duquesne Light",
    ],
    marketDetail: [
      "Healthcare and research dominate this market to an unusual degree. A very large hospital system and two major research universities run continuous capital programs, and the work spans acute care with its regulated pressurization and essential power through to laboratories with containment, fume hood exhaust, vivarium environments and the redundancy that irreplaceable research equipment demands.",
      "The building stock makes it harder. Much of the city is old, many institutional campuses still distribute steam, and floor-to-floor heights in pre-war buildings leave very little room for modern distribution. A long heating season means plant, freeze protection and control sequences have to work properly through winter, and most projects are inserted into buildings that stay occupied throughout.",
    ],
    hiringFocus: [
      {
        role: "Laboratory & research facility engineers",
        why: "Two research universities and a large hospital system make containment and exhaust design a core local specialism.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "A very large regional hospital system sustains continuous regulated air, gas and essential power work.",
      },
      {
        role: "Retrofit & steam conversion engineers",
        why: "Old campuses with legacy steam distribution and tight ceiling space make retrofit the common case.",
      },
      {
        role: "Commissioning agents",
        why: "Clinical and research environments are accepted on measured performance rather than design intent.",
      },
    ],
    licensure:
      "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, and comity on an NCEES record is the normal route. For MEP the substantive gate is institutional: the hospital system and the universities each maintain their own design standards and approval processes, and prior work delivered under them is usually what decides a senior hire.",
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    authority: "Cincinnati Buildings & Inspections",
    marketNote:
      "Home to Procter & Gamble and Cincinnati Children's, we recruit MEP engineers for consumer-goods, healthcare, and higher-education projects across greater Cincinnati.",
    localPrograms: [
      "Consumer-goods headquarters & manufacturing MEP",
      "Cincinnati Children's & hospital-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "CVG airport terminal mechanical & electrical",
    ],
    agencies: [
      "Cincinnati Buildings and Inspections",
      "Cincinnati Children's Hospital Medical Center",
      "UC Health",
      "Cincinnati Public Schools",
      "Cincinnati/Northern Kentucky International Airport",
      "Duke Energy Ohio",
    ],
    marketDetail: [
      "Cincinnati's technical MEP demand comes from research medicine and from corporate research laboratories. A major pediatric research hospital and the consumer products laboratories in the region both need classified and controlled environments, fume hood and specialty exhaust, process utilities and redundancy for equipment that cannot be interrupted, which is a very different engineering problem from commercial office work.",
      "The conventional market runs alongside it: hospital capital programs, schools, and a stock of older commercial and industrial buildings that need systems fitted into constrained spaces. Hillside sites complicate service entry and equipment placement more than engineers expect, and a continental climate means heating and cooling plant both have to be designed properly rather than one dominating.",
    ],
    hiringFocus: [
      {
        role: "Laboratory & research facility engineers",
        why: "Research medicine and corporate laboratories both need controlled environments and specialty exhaust design.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Hospital capital programs sustain regulated pressurization, air change and medical gas work.",
      },
      {
        role: "Retrofit engineers for existing buildings",
        why: "An older building stock on constrained hillside sites makes fitting modern systems the common challenge.",
      },
      {
        role: "Commissioning agents",
        why: "Research and clinical spaces are handed over on tested performance, which is a separate discipline from design.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the usual route. Because the metro reaches into Kentucky and Indiana, MEP engineers covering the full region often hold more than one registration, and the major institutional owners here run their own design standards that matter alongside the license.",
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    authority: "Cleveland Building & Housing Department",
    marketNote:
      "Home to the Cleveland Clinic, one of the world's leading academic medical centers, Cleveland recruits MEP engineers for hospital, manufacturing, and higher-education projects.",
    localPrograms: [
      "Cleveland Clinic & academic medical center MEP",
      "Manufacturing-facility mechanical & electrical",
      "Higher-education campus systems",
      "Data-center design-build",
      "Cleveland Hopkins airport terminal MEP",
    ],
    agencies: [
      "Cleveland Department of Building and Housing",
      "Cleveland Clinic",
      "University Hospitals",
      "Cleveland Metropolitan School District",
      "NASA Glenn Research Center",
      "Cleveland Public Power",
    ],
    marketDetail: [
      "Few metros this size carry as much clinical and research building as Cleveland. Two major hospital systems run continuous capital programs, and the work spans operating theatres, imaging, isolation and research laboratories, all of which carry regulated pressure relationships, air change rates, medical gas and essential electrical systems with separation and testing requirements ordinary buildings never involve.",
      "The climate and the building stock supply the difficulty. A long, cold, lake-influenced winter makes heating plant, freeze protection and control sequencing first-order design problems, and much of the institutional estate is old enough to still distribute steam with very little room above ceilings. Legacy industrial buildings being converted add their own power, ventilation and envelope challenges.",
    ],
    hiringFocus: [
      {
        role: "Healthcare mechanical engineers",
        why: "Two major hospital systems make regulated clinical air and gas design the region's deepest MEP specialism.",
      },
      {
        role: "Laboratory & research facility engineers",
        why: "Research buildings need containment, exhaust and redundancy outside commercial practice.",
      },
      {
        role: "Heating plant & controls engineers",
        why: "A long lake-effect winter makes plant sizing, staging and freeze protection a first-order problem.",
      },
      {
        role: "Retrofit & steam conversion engineers",
        why: "Old institutional estates with legacy steam and tight ceiling voids make retrofit the common case.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, and comity on an NCEES record is the standard route for an out-of-state PE. For MEP the decisive credential is usually institutional rather than statutory: the two hospital systems each publish their own design standards and approval processes, and prior delivery under them carries more weight in hiring than the license transfer.",
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    authority: "St. Louis Building Division",
    marketNote:
      "Anchored by BJC Healthcare, Washington University Medicine, and the Cortex innovation district, St. Louis recruits MEP engineers for healthcare and life-science projects across a two-state market.",
    localPrograms: [
      "BJC / Washington University Medicine MEP",
      "Cortex life-science and lab-space build-outs",
      "Manufacturing-facility mechanical & electrical",
      "Higher-education campus systems",
      "St. Louis Lambert airport terminal MEP",
    ],
    agencies: [
      "St. Louis Building Division",
      "BJC HealthCare",
      "Washington University in St. Louis",
      "St. Louis Public Schools",
      "St. Louis Lambert International Airport",
      "Ameren Missouri",
    ],
    marketDetail: [
      "Research medicine and plant science give St. Louis a laboratory market out of proportion to its size. A major academic medical center and the region's agricultural science institutions need containment suites, fume hood and specialty exhaust, vivarium environments and controlled growth chambers where temperature, humidity and lighting are the experiment rather than the comfort condition. That last category is genuinely unusual and the engineers who have designed it are few.",
      "The conventional side is hospital capital work and a large stock of older buildings. Institutional campuses here still run steam distribution, historic commercial buildings have tight floor-to-floor heights, and a continental climate means heating and cooling plant both need proper attention. Most projects are retrofits into buildings that stay in use throughout.",
    ],
    hiringFocus: [
      {
        role: "Laboratory & controlled environment engineers",
        why: "Research medicine and plant science need containment, exhaust and growth chamber design outside commercial practice.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "A large academic medical center runs continuous regulated air, gas and essential power work.",
      },
      {
        role: "Retrofit & steam conversion engineers",
        why: "Older institutional campuses with legacy steam and tight ceiling voids make retrofit the common case.",
      },
      {
        role: "Commissioning agents",
        why: "Research and clinical environments are accepted on measured performance rather than design intent.",
      },
    ],
    licensure:
      "Missouri licenses through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects, with comity on an NCEES record the usual route, and firms need corporate authorization to offer engineering services. Because the metro reaches into Illinois, MEP engineers covering the full region frequently hold both registrations, and the major institutional owners run their own design standards alongside.",
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    authority: "Raleigh Development Services",
    marketNote:
      "At the center of Research Triangle Park, one of the country's largest life-science and biotech hubs, Raleigh recruits MEP engineers for lab, data-center, and hospital projects at scale.",
    localPrograms: [
      "Research Triangle Park life-science & lab MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "RDU airport terminal mechanical & electrical",
    ],
    agencies: [
      "Raleigh Development Services",
      "WakeMed Health & Hospitals",
      "North Carolina State University",
      "Wake County Public School System",
      "North Carolina Department of Administration",
      "Duke Energy Progress",
    ],
    marketDetail: [
      "Biomanufacturing is what makes this market technically distinctive. The research and production facilities in the Triangle are validated environments: classified air, clean utilities including purified water and clean steam, pressure cascades, and documentation proving the systems perform as specified and will keep doing so. It is a regulated discipline with its own vocabulary, and engineers who have delivered it command a premium here.",
      "Around that runs a fast-growing conventional market. University and hospital capital programs are continuous, data centers have followed power availability into the region, and sustained population growth keeps commercial and institutional work steady. The climate is humid enough that latent load and dehumidification are real design concerns rather than afterthoughts across all of it.",
    ],
    hiringFocus: [
      {
        role: "Biomanufacturing & validated environment engineers",
        why: "Classified air, clean utilities and validation documentation are the region's defining technical demand.",
      },
      {
        role: "Laboratory & research facility engineers",
        why: "University and corporate research buildings need containment and specialty exhaust design.",
      },
      {
        role: "Mission critical mechanical & electrical engineers",
        why: "Data center growth in the region has created sustained redundancy and cooling demand.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Hospital capital programs sustain regulated pressurization, air change and medical gas work.",
      },
    ],
    licensure:
      "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, with comity on an NCEES record the usual individual route, and the state also licenses firms, so a company offering engineering services needs its own certificate with a licensee in responsible charge. For biomanufacturing work, owner qualification and documented validation experience usually matter more in hiring than the license itself.",
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    authority: "DC DOB",
    marketNote:
      "In the National Capital region, we recruit MEP engineers for the federal-facility, hospital, and data-center projects supporting one of the country's most security-driven infrastructure markets.",
    localPrograms: [
      "Federal facility mechanical, electrical & security systems",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Higher-education campus systems",
      "Reagan National & Dulles airport terminal MEP",
    ],
    agencies: [
      "DC Department of Buildings",
      "General Services Administration",
      "Smithsonian Institution",
      "George Washington University Hospital",
      "DC Public Schools",
      "Pepco",
    ],
    marketDetail: [
      "Federal work gives this market a character no other city has. Government buildings carry security, resilience and commissioning requirements set by federal criteria rather than commercial codes, and museum and collection environments demand tight, stable temperature and humidity control with redundancy, because the consequence of drift is damage to objects rather than discomfort. Both are specialisms with a small local talent pool.",
      "The District also runs one of the more aggressive energy and emissions frameworks in the country, with performance standards applying to existing buildings rather than only new construction. That has turned retrofit, electrification and measured performance into ongoing commercial work. The height limit compounds it: with no room to build upward, mechanical plant competes for space with lettable area on every project.",
    ],
    hiringFocus: [
      {
        role: "Federal facility MEP engineers",
        why: "Government work follows its own criteria for security, redundancy and commissioning rather than commercial norms.",
      },
      {
        role: "Museum & collection environment engineers",
        why: "Stable tight humidity and temperature control for collections is a specialism with very few practitioners.",
      },
      {
        role: "Existing building performance & electrification engineers",
        why: "Performance standards applying to existing buildings make retrofit a standing regulatory market.",
      },
      {
        role: "Mechanical engineers experienced in constrained plant space",
        why: "Height limits force plant to compete with lettable area, making spatial efficiency a design driver.",
      },
    ],
    licensure:
      "The District licenses through its Board of Professional Engineering, with comity on an NCEES record the normal route. Most MEP engineers working this market hold District, Maryland and Virginia registration together, because a regional portfolio will cross at least two. Federal work adds its own qualification and clearance requirements that sit entirely outside state or district licensure.",
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    authority: "Hartford Development Services",
    marketNote:
      "Home to a dense concentration of insurance-industry headquarters, Hartford recruits MEP engineers for corporate-campus, hospital, and higher-education projects across central Connecticut.",
    localPrograms: [
      "Insurance headquarters campus MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "Bradley International Airport terminal MEP",
    ],
    agencies: [
      "Hartford Development Services",
      "Hartford HealthCare",
      "UConn Health",
      "Hartford Public Schools",
      "Connecticut Department of Administrative Services",
      "Eversource",
    ],
    marketDetail: [
      "Hartford's technical MEP work sits in two places: healthcare and aerospace manufacturing. Hospital systems and the state academic medical center run continuous capital programs with regulated pressurization, medical gas and essential power, while the region's aerospace plants need compressed air, process ventilation, test cell systems and classified electrical design that commercial experience does not develop.",
      "The commercial stock is the other story. A downtown built for an insurance industry in a different era leaves a large inventory of older office buildings, many still on steam, now being renovated or converted with modern systems fitted into tight ceiling spaces. A long New England heating season means plant, freeze protection and controls have to be designed for winter first.",
    ],
    hiringFocus: [
      {
        role: "Healthcare mechanical engineers",
        why: "Regional hospital systems and an academic medical center sustain regulated air, gas and essential power work.",
      },
      {
        role: "Industrial & aerospace facility engineers",
        why: "Manufacturing and test facilities need process ventilation and classified electrical design outside commercial practice.",
      },
      {
        role: "Retrofit & building conversion engineers",
        why: "An older downtown office stock being renovated makes fitting modern systems into constrained buildings routine.",
      },
      {
        role: "Heating plant & controls engineers",
        why: "A long heating season makes plant sizing, staging and freeze protection a first-order design problem.",
      },
    ],
    licensure:
      "Connecticut licenses through the State Board of Examiners for Professional Engineers and Land Surveyors within the Department of Consumer Protection, and comity on an NCEES record is the standard route. The state is small enough that engineers working the wider market usually hold Massachusetts or New York registration as well, and healthcare projects carry state facility review alongside ordinary building approval.",
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    authority: "Albuquerque Planning Department",
    marketNote:
      "Home to Sandia National Laboratories and Kirtland Air Force Base, Albuquerque recruits MEP engineers for federal-lab, healthcare, and higher-education projects across New Mexico.",
    localPrograms: [
      "National laboratory & federal-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "Albuquerque International Sunport terminal MEP",
    ],
    agencies: [
      "Albuquerque Planning Department",
      "Sandia National Laboratories",
      "UNM Health",
      "Albuquerque Public Schools",
      "Kirtland Air Force Base",
      "PNM",
    ],
    marketDetail: [
      "Altitude is a design factor here that engineers from lower elevations routinely miss. At over five thousand feet the air is thinner, which derates fans, compressors, generators and combustion equipment and changes ventilation and pressurization calculations. Equipment selected from sea level performance data will underperform, and catching that is a matter of local judgment rather than code compliance.",
      "The dry climate is the corresponding opportunity: evaporative and hybrid cooling are genuinely viable and widely used, which makes plant strategy and water consumption a live trade-off rather than a settled question. On the technical side, national laboratory and federal installation work brings classified facilities, specialty research environments and security requirements that sit well outside commercial practice, alongside a steady academic healthcare program.",
    ],
    hiringFocus: [
      {
        role: "Mechanical engineers experienced at altitude",
        why: "Thin air derates fans, compressors and combustion equipment, and sea level selections underperform here.",
      },
      {
        role: "Evaporative & hybrid cooling engineers",
        why: "A dry climate makes water-based cooling strategies viable and turns water use into a design trade-off.",
      },
      {
        role: "National laboratory & federal facility engineers",
        why: "Research and installation work carries classified environments and security criteria commercial design does not cover.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "The academic medical center runs continuous regulated air, gas and essential power work.",
      },
    ],
    licensure:
      "New Mexico licenses through the State Board of Licensure for Professional Engineers and Professional Surveyors, and firms offering engineering services must also register with the board. Comity on an NCEES record is the usual individual route. Laboratory and installation work follows federal criteria and clearance requirements independent of state licensure, and that clearance is often the slower credential to obtain.",
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    authority: "Birmingham Planning, Engineering & Permits",
    marketNote:
      "Home to UAB Medicine, a major academic medical center, Birmingham recruits MEP engineers for hospital, higher-education, and manufacturing projects across the Deep South.",
    localPrograms: [
      "UAB Medicine & academic medical center MEP",
      "Higher-education campus systems",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Birmingham-Shuttlesworth airport terminal MEP",
    ],
    agencies: [
      "Birmingham Planning, Engineering and Permits",
      "UAB Medicine",
      "Birmingham City Schools",
      "Jefferson County Facilities",
      "Birmingham-Shuttlesworth International Airport",
      "Alabama Power",
    ],
    marketDetail: [
      "One academic medical center dominates this market. It combines acute and specialist clinical care with a large research estate, which means the local MEP workload runs from operating theatres, imaging and isolation through to laboratories with containment, fume hood exhaust and vivarium environments. For a metro of this size, the concentration of regulated and technically demanding building services is unusual.",
      "Beyond the campus, the market is conventional and constrained by its stock. Much of the commercial core is old, floor-to-floor heights are tight, and steam distribution persists in places, so retrofit dominates. The humid subtropical climate makes latent load the harder half of cooling design, and buildings that ignore it develop moisture problems quickly.",
    ],
    hiringFocus: [
      {
        role: "Healthcare mechanical engineers",
        why: "A large academic medical center makes regulated clinical air and gas design the region's core MEP demand.",
      },
      {
        role: "Laboratory & research facility engineers",
        why: "The research estate needs containment, specialty exhaust and redundancy outside commercial practice.",
      },
      {
        role: "Retrofit engineers for existing buildings",
        why: "An older commercial core with tight ceiling space makes inserting modern systems the usual challenge.",
      },
      {
        role: "Mechanical engineers with dehumidification experience",
        why: "A humid climate makes deliberate moisture control essential rather than incidental to cooling.",
      },
    ],
    licensure:
      "Alabama licenses through the Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the standard individual route, and firms need a certificate of authorization to practice in the state. Healthcare work is reviewed against state health facility requirements in addition to the building code, and the dominant institutional owner runs its own design standards that matter alongside the license.",
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    authority: "Memphis Construction Code Enforcement",
    marketNote:
      "Home to the FedEx World Hub and St. Jude Children's Research Hospital, Memphis recruits MEP engineers for major logistics and healthcare projects across the Mid-South.",
    localPrograms: [
      "FedEx World Hub & logistics-facility MEP",
      "St. Jude & academic medical center infrastructure",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Memphis International Airport terminal MEP",
    ],
    agencies: [
      "Memphis Construction Code Enforcement",
      "St. Jude Children's Research Hospital",
      "Methodist Le Bonheur Healthcare",
      "Memphis-Shelby County Schools",
      "Memphis-Shelby County Airport Authority",
      "Memphis Light, Gas and Water",
    ],
    marketDetail: [
      "Memphis combines two demanding and quite different MEP markets. The first is clinical research: a major research hospital campus needs classified and controlled environments, containment, specialty exhaust and redundancy for equipment and samples that cannot be allowed to fail, held to standards well beyond ordinary healthcare.",
      "The second is temperature-controlled logistics. The city's role as a national air cargo hub has made it a center for pharmaceutical and medical distribution, which means cold chain warehousing with tight, validated temperature control, monitoring, alarm and backup power across very large floor areas. That is refrigeration and controls engineering rather than comfort HVAC, and the experience does not transfer from commercial work.",
    ],
    hiringFocus: [
      {
        role: "Research facility & containment engineers",
        why: "A major clinical research campus needs controlled environments and redundancy beyond standard healthcare practice.",
      },
      {
        role: "Cold chain & refrigeration engineers",
        why: "Pharmaceutical distribution requires validated temperature control and monitoring across very large facilities.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Regional hospital systems sustain regulated pressurization, air change and medical gas work.",
      },
      {
        role: "Standby power & controls engineers",
        why: "Validated cold storage and research environments both depend on power continuity and alarmed monitoring.",
      },
    ],
    licensure:
      "Tennessee licenses through the Board of Architectural and Engineering Examiners within the Department of Commerce and Insurance, with comity on an NCEES record the normal route. Because the metro reaches into Mississippi and Arkansas, engineers covering the full region frequently hold more than one registration. Healthcare and validated facility work both add owner and regulatory review that sits alongside the license.",
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    authority: "Omaha Planning Department",
    marketNote:
      "Home to several Fortune 500 insurance and finance headquarters, Omaha recruits MEP engineers for corporate-campus, data-center, and hospital projects across the Great Plains.",
    localPrograms: [
      "Corporate & finance headquarters campus MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Eppley Airfield terminal mechanical & electrical",
    ],
    agencies: [
      "Omaha Planning Department",
      "Nebraska Medicine",
      "Children's Nebraska",
      "Omaha Public Schools",
      "Offutt Air Force Base",
      "Omaha Public Power District",
    ],
    marketDetail: [
      "Reliable, comparatively inexpensive power and a low natural disaster profile have made the Omaha region a significant data center corridor, and that is now the most technically demanding MEP work in the market. Redundant electrical topology, switchgear, generation, and cooling systems designed for high density loads are engineered to availability targets that ordinary commercial buildings never carry.",
      "Healthcare supplies the other technical stream, including biocontainment capability that is genuinely rare, alongside conventional acute care with its regulated pressurization and essential power requirements. Underneath both, a cold continental winter means heating plant, freeze protection and economizer control have to be designed properly, and the same cold climate is part of why data center cooling works well here.",
    ],
    hiringFocus: [
      {
        role: "Mission critical mechanical & electrical engineers",
        why: "A regional data center corridor demands redundancy, switchgear and high density cooling design.",
      },
      {
        role: "Healthcare & containment engineers",
        why: "Regional hospital systems include biocontainment capability with pressure and exhaust requirements that are rare anywhere.",
      },
      {
        role: "Heating plant & economizer control engineers",
        why: "A cold continental climate makes winter plant and free cooling control a first-order design concern.",
      },
      {
        role: "Federal facility MEP engineers",
        why: "Military installation work follows its own criteria and security requirements outside commercial practice.",
      },
    ],
    licensure:
      "Nebraska licenses through the Board of Engineers and Architects, with comity on an NCEES record the usual individual route, and firms need a certificate of authorization to offer engineering services. Because the metro crosses into Iowa, engineers working both sides of the river commonly carry Iowa registration. Data center and federal owners each run private qualification processes on top of the license.",
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    authority: "Boise Planning & Development Services",
    marketNote:
      "Home to Micron's global headquarters, Boise has become a fast-growing semiconductor and data-center MEP market in the Intermountain West.",
    localPrograms: [
      "Micron semiconductor fab mechanical & electrical",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Boise Airport terminal MEP",
    ],
    agencies: [
      "Boise Planning and Development Services",
      "St. Luke's Health System",
      "Saint Alphonsus Health System",
      "Boise School District",
      "Idaho Division of Public Works",
      "Idaho Power",
    ],
    marketDetail: [
      "Semiconductor manufacturing is the technical anchor of this market. Fabrication and related facilities need cleanroom air handling, ultrapure water, bulk and specialty gas distribution, process cooling and electrical capacity at industrial scale, and because the regional pool of engineers with that experience is small, it is consistently the hardest capability to hire for in the valley.",
      "Everything else is growth. Two hospital systems run competing capital programs, commercial and institutional construction follows a population expanding faster than almost anywhere in the country, and a dry climate with cold winters and hot summers means both evaporative cooling strategies and real heating plant are in play. Much of the conventional work is new build rather than retrofit, which is unusual and shapes what local engineers are practiced at.",
    ],
    hiringFocus: [
      {
        role: "Semiconductor & cleanroom MEP engineers",
        why: "Fabrication facilities need contamination control and process utilities the local talent pool is thin on.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "Two competing hospital systems run continuous regulated capital programs.",
      },
      {
        role: "Mechanical engineers with evaporative cooling experience",
        why: "A dry climate makes water-based cooling viable and changes plant strategy from humid market defaults.",
      },
      {
        role: "Commercial & institutional MEP engineers",
        why: "Sustained population growth keeps new build volume high across schools, offices and civic buildings.",
      },
    ],
    licensure:
      "Idaho licenses through the Board of Licensure of Professional Engineers and Professional Land Surveyors, with comity on an NCEES record the normal individual route, and firms offering engineering services need their own certificate of authorization. State facility work runs through the Division of Public Works with its own standards, and industrial owners maintain private qualification processes alongside the license.",
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    authority: "Providence Inspection & Standards",
    marketNote:
      "Home to Brown University and a growing life-science sector, Providence recruits MEP engineers for hospital, higher-education, and lab-space projects across Rhode Island.",
    localPrograms: [
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems (Brown, RISD)",
      "Life-science and lab-space build-outs",
      "Data-center design-build",
      "T.F. Green airport terminal MEP",
    ],
    agencies: [
      "Providence Department of Inspection and Standards",
      "Brown University Health",
      "Brown University",
      "Providence Public Schools",
      "Rhode Island Department of Administration",
      "Rhode Island Energy",
    ],
    marketDetail: [
      "Providence is a conversion market. The city is full of nineteenth century mill and industrial buildings being turned into housing, laboratories, offices and institutional space, and that work is unusually demanding for MEP engineers: heavy timber and masonry structures with no service voids, single glazing, no existing distribution worth keeping, and heritage constraints on what can be seen or penetrated.",
      "The technical demand comes from medicine and higher education. A regional hospital system and a research university run continuous capital programs, bringing clinical air and gas requirements alongside laboratory containment and exhaust. A cold coastal winter makes heating plant and freeze protection first-order concerns, and salt air shortens the life of exposed equipment near the bay.",
    ],
    hiringFocus: [
      {
        role: "Mill conversion & adaptive reuse engineers",
        why: "Nineteenth century structures with no service voids make routing and plant siting the central design problem.",
      },
      {
        role: "Laboratory & research facility engineers",
        why: "University and hospital research space needs containment and specialty exhaust design.",
      },
      {
        role: "Healthcare mechanical engineers",
        why: "A regional hospital system runs continuous regulated air, gas and essential power work.",
      },
      {
        role: "Heating plant & controls engineers",
        why: "A cold coastal winter makes plant sizing, freeze protection and control sequencing decisive.",
      },
    ],
    licensure:
      "Rhode Island licenses through the Board of Registration for Professional Engineers, and comity on an NCEES record is the standard route. The state is small enough that most engineers working the wider market also hold Massachusetts or Connecticut registration. Healthcare projects carry state facility review in addition to local building approval, and historic conversions add preservation review that constrains the engineering directly.",
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    authority: "Buffalo Permit & Inspection Services",
    marketNote:
      "Anchored by the Buffalo Niagara Medical Campus, we place MEP engineers on the hospital, higher-education, and manufacturing projects revitalizing Western New York.",
    localPrograms: [
      "Buffalo Niagara Medical Campus MEP",
      "Higher-education campus systems",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Buffalo Niagara International Airport terminal MEP",
    ],
    agencies: [
      "Buffalo Permit and Inspection Services",
      "Kaleida Health",
      "Roswell Park Comprehensive Cancer Center",
      "University at Buffalo",
      "Buffalo Public Schools",
      "National Grid",
    ],
    marketDetail: [
      "The medical campus is the center of technical MEP work in Buffalo. A regional hospital system, a comprehensive cancer center and a university medical school sit together, which concentrates clinical air and gas requirements alongside research laboratory containment, specialty exhaust and the redundancy that irreplaceable research material demands. Very little else in western New York matches that technical intensity.",
      "Climate and policy shape the rest. Lake-effect winters make heating plant, snow and ice management at intakes and discharges, and freeze protection genuinely difficult, while state energy policy is pushing electrification and heat pump retrofit into a building stock that is old, masonry and often still on steam. Reconciling those two facts is the recurring engineering problem in this market.",
    ],
    hiringFocus: [
      {
        role: "Healthcare & research facility engineers",
        why: "A concentrated medical campus makes clinical and laboratory design the region's deepest MEP specialism.",
      },
      {
        role: "Heat pump & electrification retrofit engineers",
        why: "State policy pushes electrification into an old masonry building stock still running on steam.",
      },
      {
        role: "Heating plant & freeze protection engineers",
        why: "Lake-effect winters make intake, discharge and freeze protection design harder than in milder markets.",
      },
      {
        role: "Retrofit engineers for existing buildings",
        why: "Most of the workable stock is old, constrained and occupied, making insertion rather than new build the norm.",
      },
    ],
    licensure:
      "New York licenses through the State Education Department's Office of the Professions, and most out-of-state PEs transfer by comity on an NCEES record. For MEP the practical layer on top is state energy code compliance documentation, which is more demanding than in neighboring states, and institutional owners on the medical campus run their own design standards that matter alongside the license.",
  },
];

export function getMepCity(slug: string): MepCity | undefined {
  return MEP_CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every MEP city page ─────────────────────────────

export const MEP_EXPERTISE = [
  "Mechanical & HVAC Systems Engineering (ASHRAE Standards)",
  "Electrical Power & Distribution Design (NEC / IEEE)",
  "Plumbing & Fire Protection Engineering (NFPA)",
  "Building Automation & Controls (BAS / BMS)",
  "Energy Modeling & Sustainability (LEED / ASHRAE 90.1)",
  "Data Center & Mission-Critical MEP",
  "Building Commissioning (Cx) & Retro-Commissioning",
];

// Tool, certification, and code-fluency skills we screen for — distinct from
// MEP_EXPERTISE (discipline areas) and MEP_ROLES (job titles). Shared across
// every MEP city page rather than varying by market: what changes city to
// city is the *work* (see localPrograms), not which CAD package or code a
// licensed MEP engineer is expected to know.
export const MEP_SKILLS = [
  "Autodesk Revit MEP",
  "AutoCAD MEP",
  "Navisworks (BIM coordination & clash detection)",
  "Trane TRACE 700 / TRACE 3D Plus",
  "Carrier HAP (Hourly Analysis Program)",
  "eQUEST / EnergyPlus energy modeling",
  "ETAP / SKM power systems analysis",
  "AGi32 lighting design",
  "Bluebeam Revu",
  "Autodesk Construction Cloud / BIM 360",
  "Building automation (Niagara, Siemens, JCI Metasys)",
  "Professional Engineer (PE) license",
  "LEED AP / LEED Green Associate",
  "ASHRAE certification (BEMP / CEM)",
  "NICET certification (fire protection)",
  "HVAC load calculations & system design",
  "Electrical power distribution & short-circuit studies",
  "Fire protection system design (NFPA 13 / 14)",
  "Commissioning (Cx) per ASHRAE Guideline 0 / 1",
  "Code compliance: NEC, IMC, IPC, ASHRAE 90.1",
];

export const MEP_ROLES = [
  "MEP Project Manager (PE)",
  "Senior Mechanical / HVAC Engineer",
  "Electrical Engineer (Power & Lighting)",
  "Plumbing & Fire Protection Engineer",
  "Building Automation / Controls Engineer",
  "Energy & Sustainability Engineer",
  "Commissioning Engineer / Agent (CxA)",
  "MEP BIM / Revit Coordinator",
  "Director of MEP / Engineering Lead",
];

export const MEP_SALARIES = [
  { role: "MEP Designer / Revit Modeler", range: "$60,000 – $88,000" },
  { role: "Mechanical / Electrical Engineer (EIT)", range: "$70,000 – $95,000" },
  { role: "Commissioning (Cx) Engineer", range: "$85,000 – $125,000" },
  { role: "Fire Protection Engineer (PE)", range: "$100,000 – $145,000" },
  { role: "Licensed MEP PE (Mid-Level)", range: "$105,000 – $155,000" },
  { role: "Data Center Electrical Engineer (PE)", range: "$125,000 – $175,000" },
  { role: "Senior MEP Project Manager", range: "$145,000 – $195,000+" },
  { role: "Director of MEP Engineering", range: "$180,000 – $260,000+" },
];

export const MEP_WHY = [
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
    body: "From a single PE to an entire MEP team for a multi-year project.",
  },
  {
    title: "Codes & Standards Fluency",
    body: "Fluency in ASHRAE, NEC, NFPA, and IECC requirements for complex building projects.",
  },
];
