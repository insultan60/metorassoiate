// Data for the programmatic "Water & Wastewater Engineering Recruiter — {City}" pages.
// Parallel to lib/cities.ts (civil) and lib/mep.ts (MEP), but focused on
// treatment plants, distribution/collection systems, and utility capital
// programs — NOT buildings or highways. Each city carries unique copy
// (marketNote + local work) so pages are not thin/duplicate content;
// shared content is reused across all.
//
// Same 50 metros as lib/cities.ts and lib/mep.ts, so every civil/MEP city
// page has a water/wastewater counterpart at the same slug.

export interface WaterCity {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  authority: string; // local water/wastewater regulatory or utility authority referenced in copy
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
  licensure?: string; // city/state-specific water/wastewater-heavy project types
}

export const WATER_CITIES: WaterCity[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    authority: "NYC DEP",
    marketNote:
      "New York's water system spans a 19-reservoir Catskill/Delaware watershed and 14 in-city treatment plants, and DEP's Long Term Control Plan for combined sewer overflows keeps design and construction demand for wastewater engineers elevated for the next decade.",
    localPrograms: [
      "Newtown Creek WWTP upgrade & digester program",
      "CSO Long Term Control Plan tunnel & storage projects",
      "Catskill/Delaware watershed filtration avoidance program",
      "Lead service line inventory & replacement",
      "Hunts Point & Coney Island plant resiliency upgrades",
    ],
    agencies: [
      "NYC Department of Environmental Protection",
      "NYC Department of Design & Construction",
      "Nassau County Department of Public Works",
      "Westchester County Environmental Facilities",
      "Suffolk County Water Authority",
      "NY State Environmental Facilities Corporation",
    ],
    marketDetail: [
      "New York runs one of the few large unfiltered surface supplies in the country. The Catskill and Delaware watersheds are protected rather than filtered, under a determination the city has to keep earning, so a good deal of the water-side engineering here is watershed and conveyance work rather than treatment plant work. The Delaware Aqueduct bypass is the clearest example: a supply repair carried out at tunnel scale, which is not a project type most metros generate at all.",
      "The wastewater side is a combined system with fourteen in-city treatment plants and a long-term control plan for overflows, which keeps hydraulic modelling, storage tunnels and green infrastructure running as a continuous programme. Plant work is dominated by upgrade and resiliency rather than new build, and since Sandy a share of it is specifically about keeping process trains running through a flood.",
    ],
    hiringFocus: [
      {
        role: "Collection system & CSO modellers",
        why: "Long-term control plan work is argued in models before it is built, so engineers who can defend an InfoWorks or SWMM result to a regulator are the constraint rather than designers.",
      },
      {
        role: "Treatment process engineers for plant upgrades",
        why: "Fourteen plants in continuous rehabilitation means process work is almost always retrofit into a live train, which is a different skill from designing a plant on a clear site.",
      },
      {
        role: "Tunnel & deep structure engineers",
        why: "Both the supply repairs and the overflow storage are tunnel projects, and the pool of engineers who have worked at that scale is small nationally.",
      },
      {
        role: "Coastal resiliency & plant hardening engineers",
        why: "Waterfront treatment plants have to stay in service through a surge event, which pulls in engineers comfortable with both process and flood protection.",
      },
    ],
    licensure: "New York licenses engineers through the State Education Department's Office of the Professions, and most out-of-state PEs transfer on an NCEES record rather than by re-examination. Treatment operators are certified separately, by the Department of Health on the water side and the Department of Environmental Conservation on the wastewater side, which matters when a role spans design and operations support. As with the civil market here, agency prequalification with DEP and DDC often carries more weight with a hiring manager than the licence itself.",
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "LA Sanitation & Environment (LASAN)",
    marketNote:
      "Following the 2021 Hyperion plant failure, Los Angeles committed to Operation NEXT, full water recycling of the Hyperion plant's effluent by the mid-2030s, driving one of the largest potable-reuse engineering programs in the nation.",
    localPrograms: [
      "Operation NEXT potable reuse & advanced treatment",
      "Hyperion Water Reclamation Plant modernization",
      "Groundwater replenishment & spreading grounds expansion",
      "Stormwater capture & LA River greenway projects",
      "Lead service line & aging pipe replacement",
    ],
    agencies: [
      "LA Department of Water & Power",
      "LA Sanitation & Environment",
      "Los Angeles County Sanitation Districts",
      "Metropolitan Water District of Southern California",
      "West Basin Municipal Water District",
    ],
    marketDetail: [
      "Reuse is the defining engineering problem in this basin. Imported supply from the Colorado River and the State Water Project is the part of the portfolio nobody can rely on, so the response has been to treat wastewater as a supply: Operation NEXT at Hyperion and Pure Water Southern California between Metropolitan and the county districts are both, in engineering terms, very large advanced treatment programmes attached to existing plants.",
      "That pushes the skill profile toward membranes and advanced oxidation rather than conventional secondary treatment, and toward the regulatory work that goes with them. Potable reuse in California is permitted against detailed state criteria, so the engineer who can carry a treatment train through Division of Drinking Water review is doing something distinct from process design.",
    ],
    hiringFocus: [
      {
        role: "Potable reuse & advanced treatment engineers",
        why: "Every major supply programme in the basin is a reuse programme, and the design experience it needs was rare before these projects created demand for it.",
      },
      {
        role: "Membrane and AWT process specialists",
        why: "Microfiltration, reverse osmosis and UV advanced oxidation are the core of these trains, and the operating knowledge behind them is still concentrated in a handful of careers.",
      },
      {
        role: "Large-diameter conveyance engineers",
        why: "Purified water has to be moved from the plant to where it recharges or is used, which makes pipeline design a programme-critical path rather than a supporting discipline.",
      },
      {
        role: "Regulatory & permitting engineers",
        why: "Reuse approval is a documentation exercise as much as a design one, and firms are short of engineers who have actually taken a project through it.",
      },
    ],
    licensure: "California does not grant civil PE licensure by simple comity. The Board for Professional Engineers, Land Surveyors and Geologists requires a state application, and civil applicants sit California-specific examinations in seismic principles and engineering surveying that no other state uses, so an out-of-state PE should expect the transfer to take real time. Treatment and distribution operators are certified by the State Water Resources Control Board on a separate grade structure.",
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "Metropolitan Water Reclamation District of Greater Chicago (MWRD)",
    marketNote:
      "Chicago's Deep Tunnel and Reservoir Plan (TARP), anchored by the massive McCook Reservoir, remains one of the largest stormwater-capture civil works programs ever built, and MWRD continues to hire process and conveyance engineers to operate and expand it.",
    localPrograms: [
      "TARP Deep Tunnel & McCook Reservoir operations",
      "Stickney Water Reclamation Plant process upgrades",
      "Combined sewer overflow reduction program",
      "Lead service line replacement (Chicago's lead pipe legacy)",
      "Calumet & North Side plant nutrient removal upgrades",
    ],
    agencies: [
      "Metropolitan Water Reclamation District of Greater Chicago",
      "Chicago Department of Water Management",
      "DuPage County Public Works",
      "Lake County Public Works",
      "Illinois Environmental Protection Agency",
    ],
    marketDetail: [
      "The Tunnel and Reservoir Plan shapes the wastewater market here more than any treatment plant does. A hundred-odd miles of deep tunnel feeding reservoirs at McCook and Thornton is a system whose engineering questions are hydraulic and geotechnical rather than biological, and the reclamation district's plants at the end of it operate at a scale few others do.",
      "On the drinking water side the defining programme is lead service line replacement. Illinois requires full replacement on a statutory schedule and Chicago holds the largest inventory of any city in the country, which turns what looks like a construction problem into a sustained engineering one: inventory verification, material determination, service-side design and coordination across the street grid.",
    ],
    hiringFocus: [
      {
        role: "Lead service line programme engineers",
        why: "A replacement programme of this size runs for decades and needs engineers who can manage inventory, verification and design at street-by-street scale rather than project by project.",
      },
      {
        role: "Tunnel & hydraulic engineers",
        why: "The deep tunnel system keeps generating conveyance and control questions, and that experience does not transfer readily from ordinary collection system work.",
      },
      {
        role: "Nutrient recovery process engineers",
        why: "Phosphorus recovery at reclamation district scale is unusual enough that the operating experience sits with a small number of people.",
      },
      {
        role: "Collection system modellers",
        why: "Separating what the tunnels can take from what the local sewers deliver is a modelling problem the region runs continuously.",
      },
    ],
    licensure: "Illinois licenses through the Department of Financial and Professional Regulation, and it is one of the states that issues a Structural Engineer licence entirely separate from the PE, which matters for the structural side of plant and tunnel work. Water and wastewater operators are certified by the Illinois EPA. Lead service line work also carries its own reporting obligations under state law, so programme experience is often asked for by name.",
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    authority: "Houston Public Works",
    marketNote:
      "Houston is mid-stream on a multibillion-dollar EPA consent decree to rehabilitate its sanitary sewer system after decades of overflows, creating sustained demand for collection-system and CEI engineers across the city's 6,700+ miles of sewer lines.",
    localPrograms: [
      "EPA sanitary sewer overflow consent decree program",
      "69th Street & Sims Bayou WWTP upgrades",
      "Trenchless sewer rehabilitation (CIPP) citywide",
      "Harvey-driven stormwater & flood resiliency design",
      "Lead service line inventory & replacement",
    ],
    agencies: [
      "Houston Public Works",
      "Harris County Flood Control District",
      "Gulf Coast Water Authority",
      "San Jacinto River Authority",
      "North Harris County Regional Water Authority",
      "Texas Commission on Environmental Quality",
    ],
    marketDetail: [
      "Houston is converting off groundwater, and that single fact drives most of the water engineering here. Subsidence district limits on pumping mean the region has to take surface water instead, which is why the Northeast Water Purification Plant expansion is one of the largest treatment projects in the country and why large-diameter transmission work is close to permanent.",
      "The wastewater side is a consent decree market. A federal agreement covering sanitary sewer overflows commits the city to sustained assessment and rehabilitation of a very large collection system across flat, wet, and in places subsiding ground, so condition assessment, rehabilitation design and capacity work outweigh new plant construction.",
    ],
    hiringFocus: [
      {
        role: "Surface water treatment process engineers",
        why: "The conversion from groundwater created demand for treatment design at a scale the local market had not previously needed.",
      },
      {
        role: "Large-diameter transmission engineers",
        why: "Moving treated surface water across the region is the physical form the conversion takes, and pipeline design at that diameter is its own specialism.",
      },
      {
        role: "Collection system rehabilitation engineers",
        why: "Consent decree obligations are met through assessment and rehabilitation programmes, which need engineers who work in condition data as much as in drawings.",
      },
      {
        role: "Instrumentation & SCADA engineers",
        why: "Decree reporting depends on measured performance, so monitoring and controls are part of the compliance case rather than an afterthought.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, which grants comity to NCEES records, and requires the firm itself to hold registration before it can offer engineering services, so a candidate's previous employer's registration status is sometimes part of the conversation. Water and wastewater operators are licensed separately by the TCEQ on a graded structure.",
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    authority: "City of Phoenix Water Services Department",
    marketNote:
      "With Colorado River shortages forcing Arizona's first-ever water cutbacks, Phoenix is fast-tracking direct and indirect potable reuse projects around its 91st Avenue treatment plant to secure a drought-resilient supply.",
    localPrograms: [
      "91st Avenue WWTP advanced purification & reuse",
      "Colorado River shortage contingency & supply planning",
      "Groundwater recharge & aquifer storage projects",
      "New River / Agua Fria pipeline extensions",
      "SCADA modernization for citywide water system",
    ],
    agencies: [
      "City of Phoenix Water Services",
      "Salt River Project",
      "Central Arizona Project",
      "City of Scottsdale Water",
      "Arizona Department of Environmental Quality",
    ],
    marketDetail: [
      "Phoenix engineers water against an allocation rather than against demand. Colorado River shortage conditions reduce what the Central Arizona Project can deliver, so the engineering response is storage, recovery and reuse: recharging water underground when it is available and recovering it when it is not, which makes aquifer storage a core competency rather than a specialism.",
      "The second strand is advanced purification. Scottsdale has operated purification to drinking water standards for years and the wider region is moving the same way, so treatment work here tends toward the membrane and advanced oxidation end. Reclaimed water is also a power-sector input in this region, which gives the reuse question an industrial dimension most metros do not have.",
    ],
    hiringFocus: [
      {
        role: "Advanced water purification engineers",
        why: "Purification to potable standards is where the region's supply strategy is heading, and the design pool with genuine experience of it is small.",
      },
      {
        role: "Recharge & recovery engineers",
        why: "Underground storage is how this region banks water, and designing and permitting it is unlike surface storage work.",
      },
      {
        role: "Distribution system modellers",
        why: "Blending sources of very different quality across a large distribution network is a water quality problem before it is a hydraulic one.",
      },
      {
        role: "Water resources planners",
        why: "Allocation-driven planning means supply strategy and engineering design are decided together rather than in sequence.",
      },
    ],
    licensure: "Arizona registers engineers through the Board of Technical Registration, which accepts comity applications from PEs licensed elsewhere. Operators are certified by ADEQ. The credential that carries unusual weight in this market is not a licence at all: familiarity with Arizona's assured water supply and recharge permitting regime, because a design that cannot be permitted under it is not a design this state can use.",
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia Water Department (PWD)",
    marketNote:
      "Philadelphia's Green City, Clean Waters program, a 25-year EPA-approved green-infrastructure alternative to a traditional CSO consent decree, has made PWD a national model, and a steady source of stormwater and green-infrastructure design work.",
    localPrograms: [
      "Green City, Clean Waters green stormwater infrastructure",
      "Northeast & Southwest WPCP upgrades",
      "Combined sewer overflow reduction design",
      "Lead service line replacement program",
      "Delaware River intake & source-water protection",
    ],
    agencies: [
      "Philadelphia Water Department",
      "Aqua Pennsylvania",
      "Bucks County Water & Sewer Authority",
      "DELCORA",
      "Pennsylvania Department of Environmental Protection",
    ],
    marketDetail: [
      "Green City, Clean Waters made Philadelphia the reference case for meeting a combined sewer obligation with green infrastructure rather than with tunnels. That decision has a hiring consequence that has lasted: the city needs engineers who can design bioretention, permeable paving and inlet modifications into constrained streets and then demonstrate the runoff reduction, which is a different discipline from sizing storage.",
      "The supply side is river-sourced, drawing on the Delaware and the Schuylkill, and that puts source water quality at the centre of the treatment question. Salt line movement in the estuary and emerging contaminant monitoring both push work toward engineers who can connect what happens in the watershed to what the plant has to remove.",
    ],
    hiringFocus: [
      {
        role: "Green stormwater infrastructure designers",
        why: "The city's programme is the largest of its kind, and the design vocabulary it uses barely exists in metros that chose storage instead.",
      },
      {
        role: "Combined sewer modellers",
        why: "Green infrastructure has to be shown to work in a model before it is credited against the obligation, which makes modelling the evidence base for the whole programme.",
      },
      {
        role: "Source water & emerging contaminant engineers",
        why: "River supply means treatment design has to answer to what the watershed sends downstream, including contaminants now being regulated for the first time.",
      },
      {
        role: "Treatment process engineers",
        why: "Plant renewal runs alongside the stormwater programme and competes for the same limited pool of process people.",
      },
    ],
    licensure: "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity for holders of an NCEES record. Water and wastewater operators are certified by PA DEP. For consultants the practical gate is often the city's own qualification process, since the stormwater programme is delivered through long-running frameworks rather than one-off procurements.",
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    authority: "Dallas Water Utilities",
    marketNote:
      "Dallas Water Utilities serves nearly two dozen wholesale customers across the Metroplex from a multi-reservoir system, and rapid North Texas growth is driving a wave of new transmission-main and treatment-plant-expansion work.",
    localPrograms: [
      "Elm Fork & East Side WTP capacity expansion",
      "Trinity River wastewater interceptor upgrades",
      "Wholesale transmission main extensions (Metroplex growth)",
      "Lead service line inventory & replacement",
      "Central Wastewater Treatment Plant nutrient upgrades",
    ],
    agencies: [
      "Dallas Water Utilities",
      "North Texas Municipal Water District",
      "Trinity River Authority",
      "Tarrant Regional Water District",
      "Upper Trinity Regional Water District",
    ],
    marketDetail: [
      "North Texas is one of the few places in the country still building major raw water supply. Bois d'Arc Lake is the first substantial new reservoir the state has completed in decades, and the Integrated Pipeline Project moves water across the region at a diameter that most utilities never design for, so reservoir, intake and transmission work is genuinely available here in a way it is not elsewhere.",
      "The regional wholesale structure is the other defining feature. Districts supply member cities rather than customers directly, which means the engineering is dominated by large conveyance, pump stations and system-wide planning, and the client is usually a district with its own standards rather than a municipality.",
    ],
    hiringFocus: [
      {
        role: "Large-diameter pipeline engineers",
        why: "Regional transmission at this scale is a continuous programme here, and design experience at that diameter is scarce nationally.",
      },
      {
        role: "Reservoir & dam engineers",
        why: "New raw water storage is rare in the United States, so the number of engineers who have delivered any is correspondingly small.",
      },
      {
        role: "Treatment plant process engineers",
        why: "New supply has to be treated, and plant expansion follows reservoir delivery on a predictable lag.",
      },
      {
        role: "Regional system planners",
        why: "Wholesale districts plan supply across many member cities at once, which is a modelling and forecasting role rather than a design one.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders, and requires the engineering firm itself to be registered. Operators are licensed by the TCEQ. Because so much work here is let by regional districts rather than cities, prior experience under a specific district's design standards is often what a hiring manager is actually screening for.",
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    authority: "Atlanta Department of Watershed Management",
    marketNote:
      "Atlanta has spent more than two decades and over $2 billion under a federal consent decree rebuilding its sewer system, and the department's capital program remains one of the busiest wastewater engineering markets in the Southeast.",
    localPrograms: [
      "Federal consent decree sewer rehabilitation program",
      "RM Clayton & Utoy Creek WRC upgrades",
      "Combined sewer overflow tunnel maintenance",
      "Lead service line replacement",
      "Chattahoochee River intake resiliency upgrades",
    ],
    agencies: [
      "City of Atlanta Department of Watershed Management",
      "DeKalb County Watershed Management",
      "Gwinnett County Department of Water Resources",
      "Cobb County Water System",
      "Georgia Environmental Protection Division",
    ],
    marketDetail: [
      "Atlanta's water engineering has been shaped by federal consent decrees for a generation. Meeting them produced deep rock tunnels and a raw water storage quarry that gave the city a supply buffer it never had, and it turned sewer assessment and rehabilitation into permanent programmes rather than projects, in the city and in DeKalb County alongside it.",
      "Growth is the second driver, and it pulls in a different direction. The northern counties run some of the larger and more technically advanced systems in the southeast, so the metro supports both heavy rehabilitation work in the older core and capacity expansion further out, which is unusual in one labour market.",
    ],
    hiringFocus: [
      {
        role: "Sewer rehabilitation & condition assessment engineers",
        why: "Decree compliance is delivered through assessment and rehabilitation programmes that have run long enough to be a career rather than a project.",
      },
      {
        role: "Tunnel & pump station engineers",
        why: "The storage and conveyance solutions chosen here were deep structures, and that experience is held by relatively few engineers.",
      },
      {
        role: "Programme managers for consent decree delivery",
        why: "Reporting to a federal decree is a discipline of its own, and firms are short of people who have done it under one.",
      },
      {
        role: "Treatment process engineers",
        why: "Rehabilitation in the core and expansion in the collar counties compete for the same process people.",
      },
    ],
    licensure: "Georgia licenses through the Board of Professional Engineers and Land Surveyors, with comity available to PEs licensed elsewhere. Operators are certified by the state EPD. Because much of the region's work is let under decree-driven programmes, the question a hiring manager usually asks first is which owner's programme a candidate has worked inside, not which state issued the licence.",
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "Miami-Dade Water and Sewer Department (WASD)",
    marketNote:
      "Under a federal consent decree and Florida's ocean-outfall legislation, Miami-Dade WASD is spending billions to eliminate ocean discharges and harden its three regional plants against sea-level rise and storm surge.",
    localPrograms: [
      "Ocean outfall elimination & reuse conversion",
      "Central District WWTP resiliency & upgrade program",
      "Consent decree collection-system rehabilitation",
      "Saltwater intrusion & wellfield protection",
      "Lead service line inventory & replacement",
    ],
    agencies: [
      "Miami-Dade Water & Sewer Department",
      "South Florida Water Management District",
      "Broward County Water & Wastewater Services",
      "Florida Department of Environmental Protection",
    ],
    marketDetail: [
      "South Florida is engineering its way off ocean outfalls. State law requires the region's utilities to stop discharging treated effluent to the ocean and to reuse a substantial share of it instead, which converts what would elsewhere be an incremental upgrade programme into a wholesale rebuild of how the region handles wastewater.",
      "Underneath that sits geology. The Biscayne Aquifer is shallow, permeable and vulnerable to saltwater intrusion, and the water table is close enough to the surface that sea level rise shows up as a drainage and infiltration problem before it shows up as flooding. Deep injection wells, force main renewal and pump station resiliency are consequences of that setting rather than choices.",
    ],
    hiringFocus: [
      {
        role: "Reuse & advanced treatment engineers",
        why: "Outfall elimination has to be met largely through reuse, which makes advanced treatment design the critical path for the whole region.",
      },
      {
        role: "Force main & pump station rehabilitation engineers",
        why: "A low, flat, corrosive setting puts pressurised collection infrastructure under conditions that shorten its life and keep renewal continuous.",
      },
      {
        role: "Resiliency engineers for coastal utilities",
        why: "Groundwater rise affects infiltration and pump station operation, so resiliency here is an everyday design input rather than a special study.",
      },
      {
        role: "Injection well & subsurface disposal engineers",
        why: "Deep injection is part of how this region disposes of what it cannot reuse, and the design and permitting experience is regionally specific.",
      },
    ],
    licensure: "Florida licenses through the Board of Professional Engineers, which offers endorsement to engineers already licensed elsewhere on an equivalent basis. Operators are certified by FDEP. The regionally specific credential is familiarity with the water management district's permitting regime, since drainage and water use consents run through it rather than through the municipality.",
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "King County Wastewater Treatment Division / Seattle Public Utilities",
    marketNote:
      "The newly completed Ship Canal Water Quality Project, a 2.7-mile deep storage tunnel, anchors Seattle's ongoing combined sewer overflow control program alongside King County's regional plant upgrades.",
    localPrograms: [
      "Ship Canal Water Quality Project tunnel operations",
      "West Point Treatment Plant upgrades",
      "Combined sewer overflow control program",
      "Cedar & Tolt watershed source protection",
      "Lead service line replacement",
    ],
    agencies: [
      "Seattle Public Utilities",
      "King County Wastewater Treatment Division",
      "Cascade Water Alliance",
      "Washington State Department of Ecology",
      "Washington State Department of Health",
    ],
    marketDetail: [
      "Combined sewer control is the region's defining wastewater programme, and Seattle has chosen storage at tunnel scale to deliver it. That gives the market a steady supply of deep conveyance and hydraulic work, alongside the treatment and pumping needed to empty storage back into the system after a storm.",
      "The constraint that makes this market distinctive is ecological. Salmon recovery obligations run through everything: outfall siting, water quality limits, fish passage at supply infrastructure and the timing of in-water work. Engineers here are expected to design to those constraints from the outset rather than to treat permitting as a downstream step.",
    ],
    hiringFocus: [
      {
        role: "Conveyance & storage tunnel engineers",
        why: "Overflow control here is being delivered as deep storage, and that experience does not transfer readily from surface collection work.",
      },
      {
        role: "Hydraulic modellers",
        why: "Sizing storage against a permit obligation is a modelling exercise the region runs continuously as the programme proceeds.",
      },
      {
        role: "Treatment process engineers",
        why: "Regional plants are in an upgrade cycle at the same time as the storage programme, competing for the same people.",
      },
      {
        role: "Permitting-literate water resources engineers",
        why: "Endangered species and water quality obligations shape design here, so engineers who can carry a scheme through that review are valued above pure designers.",
      },
    ],
    licensure: "Washington registers engineers through the Board of Registration for Professional Engineers and Land Surveyors, with comity for equivalent out-of-state licences. Water system operators are certified by the Department of Health and wastewater operators by Ecology, which is a split worth knowing when a role touches both. Familiarity with the state's environmental review process is frequently listed alongside the licence itself.",
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    authority: "Denver Water / Metro Wastewater Reclamation District",
    marketNote:
      "Denver Water's Lead Reduction Program, a nationally watched initiative replacing tens of thousands of lead service lines at no cost to residents, has made the metro one of the most active lead-line engineering markets in the country.",
    localPrograms: [
      "Lead Reduction Program service line replacement",
      "Robert W. Hite Treatment Facility upgrades",
      "Gross Reservoir expansion conveyance projects",
      "Front Range transmission main extensions",
      "Stormwater & South Platte River resiliency design",
    ],
    agencies: [
      "Denver Water",
      "Metro Water Recovery",
      "Aurora Water",
      "Northern Water",
      "Colorado Department of Public Health & Environment",
    ],
    marketDetail: [
      "Denver Water's lead reduction programme is the most distinctive engineering work in this metro. The utility was allowed to accelerate physical replacement of lead service lines in place of the chemical treatment normally required, which means the compliance case rests on a construction and engineering programme rather than on a treatment change, and it has run at scale ever since.",
      "The rest of the market divides between supply and nutrients. Storage expansion on the supply side reflects a front range that keeps growing against a fixed snowpack, while state nutrient rules have pushed the regional wastewater authority through a long sequence of process upgrades, and Aurora's indirect potable reuse system gives the metro a reuse track as well.",
    ],
    hiringFocus: [
      {
        role: "Lead service line programme engineers",
        why: "Replacing service lines as a compliance strategy is unusual, and the engineers who have run one at city scale are correspondingly rare.",
      },
      {
        role: "Nutrient removal process engineers",
        why: "State nutrient limits have driven successive plant upgrades, and biological nutrient removal experience is the specific thing firms ask for.",
      },
      {
        role: "Dam & reservoir engineers",
        why: "Storage expansion on the front range is a dam engineering problem, and there are few active projects nationally to learn it on.",
      },
      {
        role: "Reuse & water quality engineers",
        why: "Indirect potable reuse in the metro means supply planning and treatment design are decided together.",
      },
    ],
    licensure: "Colorado licenses through the State Board of Licensure for Architects, Professional Engineers and Professional Land Surveyors, with comity for equivalent licences. Operators are certified by CDPHE. Water rights are the local complication: a design that assumes water is available has to be reconciled with a prior appropriation system, so engineers who understand how that constrains a scheme are treated as more useful than those who do not.",
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    authority: "Massachusetts Water Resources Authority (MWRA)",
    marketNote:
      "Three decades after the Boston Harbor cleanup made Deer Island one of the largest treatment plants in the country, MWRA's aging-infrastructure and PFAS-monitoring programs are driving the next generation of capital work across greater Boston.",
    localPrograms: [
      "Deer Island Treatment Plant infrastructure renewal",
      "Quabbin/Wachusett aqueduct rehabilitation",
      "PFAS monitoring & emerging-contaminant compliance",
      "Combined sewer overflow reduction program",
      "Lead service line replacement",
    ],
    agencies: [
      "Massachusetts Water Resources Authority",
      "Boston Water & Sewer Commission",
      "Massachusetts Department of Environmental Protection",
      "Massachusetts Clean Water Trust",
    ],
    marketDetail: [
      "The regional authority runs one of the largest wastewater treatment plants in the country at Deer Island, built under a federal court order to clean up the harbour, and supplies drinking water to dozens of communities from a protected, largely unfiltered system. That combination gives engineers here exposure to both ends of the business at a scale very few metros can offer.",
      "Most current work is renewal rather than construction. The plant is now old enough that asset renewal is the dominant programme, the distribution and collection systems are among the oldest in the country, and combined sewer control continues alongside both, which favours engineers comfortable working inside existing infrastructure.",
    ],
    hiringFocus: [
      {
        role: "Plant process & asset renewal engineers",
        why: "Renewing a plant of this scale while it stays in service is a different problem from designing one, and the people who have done it are few.",
      },
      {
        role: "Deep rock tunnel engineers",
        why: "The region's supply and outfall infrastructure is tunnelled, and maintaining and extending it needs experience that is scarce nationally.",
      },
      {
        role: "Combined sewer & hydraulic engineers",
        why: "Overflow control in an old combined system is a continuing obligation rather than a finished programme.",
      },
      {
        role: "Corrosion control & lead engineers",
        why: "Old distribution systems make water chemistry a public health question, and that expertise sits with a small group.",
      },
    ],
    licensure: "Massachusetts licenses through the Board of Registration of Professional Engineers and Land Surveyors, with comity for equivalent out-of-state licences. Operators are certified by MassDEP. Much of the region's work is procured by the regional authority under its own qualification arrangements, so which of its programmes a candidate has worked on is usually the first thing a hiring manager checks.",
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    authority: "Metropolitan Council Environmental Services (MCES)",
    marketNote:
      "Metropolitan Council Environmental Services operates one of the upper Midwest's largest treatment systems out of the Metro Plant in St. Paul, and Twin Cities utilities are ramping up PFAS treatment ahead of new EPA drinking-water limits.",
    localPrograms: [
      "Metro Plant (St. Paul) process upgrades",
      "PFAS treatment & emerging-contaminant compliance",
      "Mississippi River intake resiliency projects",
      "Lead service line replacement (statewide mandate)",
      "Interceptor sewer rehabilitation program",
    ],
    agencies: [
      "Metropolitan Council Environmental Services",
      "Minneapolis Public Works",
      "Saint Paul Regional Water Services",
      "Minnesota Pollution Control Agency",
      "Minnesota Department of Health",
    ],
    marketDetail: [
      "Wastewater in this metro is regional. The Metropolitan Council owns the interceptor network and the treatment plants that serve both cities and the suburbs around them, so the work is dominated by large interceptor rehabilitation and plant renewal rather than by municipal-scale collection design.",
      "Two things make the technical problem local. The first is cold: process design, buried depth and construction seasons all answer to a climate that freezes hard, and a plant designed for a temperate state does not simply transfer. The second is contamination, particularly the perfluorinated compounds found in parts of the east metro, which has made treatment for emerging contaminants a live design question rather than a future one.",
    ],
    hiringFocus: [
      {
        role: "Interceptor rehabilitation engineers",
        why: "A regional network of large-diameter interceptors generates continuous condition assessment and rehabilitation work of a kind smaller systems never see.",
      },
      {
        role: "Emerging contaminant treatment engineers",
        why: "Perfluorinated compound treatment moved from research to delivery here earlier than in most of the country.",
      },
      {
        role: "Nutrient removal process engineers",
        why: "Discharge limits into the Mississippi keep nutrient process work continuous at the regional plants.",
      },
      {
        role: "Cold climate design engineers",
        why: "Frost depth and winter construction constrain design decisions that would be routine in a warmer state.",
      },
    ],
    licensure: "Minnesota licenses through the Board of Architecture, Engineering, Land Surveying, Landscape Architecture, Geoscience and Interior Design, with comity for equivalent licences. Water operators are certified by the Department of Health and wastewater operators by the Pollution Control Agency. Regional council procurement runs through its own consultant arrangements, so prior work under those is often the practical qualification.",
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    authority: "Great Lakes Water Authority (GLWA)",
    marketNote:
      "Great Lakes Water Authority operates the nation's largest single-site wastewater treatment plant and continues a decades-long regional CSO control program across its 79-community service area.",
    localPrograms: [
      "Detroit WWTP (largest single-site plant) upgrades",
      "Regional combined sewer overflow control program",
      "Lead service line replacement (post-Flint statewide mandate)",
      "Regional water main rehabilitation & looping",
      "Southwest & Northeast interceptor capacity projects",
    ],
    agencies: [
      "Great Lakes Water Authority",
      "Detroit Water & Sewerage Department",
      "Oakland County Water Resources Commissioner",
      "Macomb County Public Works",
      "Michigan Department of Environment, Great Lakes & Energy",
    ],
    marketDetail: [
      "The regional authority operates one of the largest single-site wastewater treatment facilities in the country and supplies drinking water across a service area covering much of south east Michigan, while the city department runs the local network inside Detroit. That split, created when the regional system was formed, means engineers here work either on very large regional assets or on dense local infrastructure, and the two are quite different jobs.",
      "Lead service lines are the other defining programme. Michigan adopted the strictest replacement rule in the country after Flint, requiring full replacement on a fixed annual schedule regardless of who owns which part of the service, which has turned replacement into a sustained, engineered programme across every community in the region rather than a reactive one.",
    ],
    hiringFocus: [
      {
        role: "Lead service line replacement engineers",
        why: "State rules impose an annual replacement rate on every water system, which makes this permanent programme work rather than a project.",
      },
      {
        role: "Collection system & basement backup engineers",
        why: "Combined sewers and surcharge-driven basement flooding make hydraulic capacity a public-facing issue the region works on continuously.",
      },
      {
        role: "Large plant process engineers",
        why: "Very few facilities operate at the scale of the regional plant, so the operating and design experience is held by a small group.",
      },
      {
        role: "Asset management engineers for aging mains",
        why: "A large regional transmission network past its design life makes condition assessment and prioritisation a discipline in its own right.",
      },
    ],
    licensure: "Michigan licenses through the Department of Licensing and Regulatory Affairs, with comity for equivalent out-of-state licences. Operators are certified by EGLE. The state's lead and copper rule is stricter than the federal one, so engineers coming from elsewhere should expect the compliance framework here to demand more than the one they trained under.",
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    authority: "Charlotte Water",
    marketNote:
      "As one of the fastest-growing metros in the country, Charlotte Water is racing to expand treatment capacity along the Catawba River basin to keep pace with record residential and commercial growth.",
    localPrograms: [
      "Catawba River basin treatment capacity expansion",
      "Mallard Creek & McDowell Creek WWTP upgrades",
      "New sewer interceptor extensions (growth corridors)",
      "Lead service line inventory & replacement",
      "Stormwater management & creek restoration projects",
    ],
    agencies: [
      "Charlotte Water",
      "Union County Public Works",
      "Catawba River Water Supply Project",
      "North Carolina Department of Environmental Quality",
    ],
    marketDetail: [
      "Charlotte's water engineering is growth engineering. The utility serves one of the faster-growing metros in the country, which means treatment capacity expansion, new transmission and collection system extension run continuously, and the planning question is less about renewal than about staying ahead of where the region is building.",
      "Supply comes from the Catawba, a river shared across a state line and managed under a federal licence, so allocation is a regional negotiation as much as a hydraulic question. Stream buffer and water quality rules in the basin also mean stream restoration and stormwater design sit closer to the core of the work here than they do in many metros.",
    ],
    hiringFocus: [
      {
        role: "Treatment capacity expansion engineers",
        why: "Sustained growth keeps plant expansion on a rolling programme, which is a different rhythm from the renewal work that dominates older metros.",
      },
      {
        role: "Large transmission main engineers",
        why: "Serving new growth means moving water further, and transmission design is the constraint on how fast the system can extend.",
      },
      {
        role: "Collection system growth modellers",
        why: "Sizing sewers for development that has not been built yet is a forecasting problem as much as a hydraulic one.",
      },
      {
        role: "Stream restoration & stormwater engineers",
        why: "Basin water quality rules make restoration and buffer design a routine part of the utility's programme.",
      },
    ],
    licensure: "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, with comity for equivalent licences, and it also licenses the firm: a company needs its own certificate of authorisation before it can offer engineering services in the state, which occasionally surprises engineers moving in from elsewhere. Operators are certified by NC DEQ.",
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    authority: "Metro Water Services (Nashville)",
    marketNote:
      "Nashville is in the midst of relocating its aging Central Wastewater Treatment Plant off the Cumberland riverfront, one of the largest treatment-plant capital projects underway in the Southeast.",
    localPrograms: [
      "Central WWTP relocation & riverfront redevelopment",
      "Sanitary sewer overflow consent decree program",
      "Cumberland River intake & source-water protection",
      "Lead service line replacement",
      "Booster pump station upgrades (growth-driven)",
    ],
    agencies: [
      "Metro Water Services",
      "Tennessee Department of Environment and Conservation",
      "Harpeth Valley Utilities District",
      "Metro Nashville Stormwater",
      "Cumberland River Compact",
      "Williamson County Water Treatment Authority",
    ],
    marketDetail: [
      "Nashville draws its drinking water from the Cumberland and discharges back to it, which makes the river both the supply and the receiving water and keeps treatment, residuals handling and discharge permitting tightly linked. The older core is served by a combined system under a long-running overflow reduction program, so separation, storage, conveyance upsizing and treatment capacity are funded together rather than as competing priorities.",
      "Karst geology complicates everything underground. Limestone gives surface water a fast route to groundwater, which raises source protection concerns, makes leak detection and infiltration harder to interpret, and turns any deep excavation into a geotechnical question. Rapid suburban growth in the surrounding counties adds trunk main extension and treatment capacity work on top of the compliance program.",
    ],
    hiringFocus: [
      {
        role: "Collection system & conveyance engineers",
        why: "A long-running overflow reduction program funds continuous separation, storage and capacity design.",
      },
      {
        role: "Hydraulic modelers",
        why: "Interpreting inflow and infiltration in karst terrain requires modeling judgment that generic experience does not build.",
      },
      {
        role: "Treatment process engineers",
        why: "Drawing supply from and discharging to the same river keeps treatment and residuals work continuously funded.",
      },
      {
        role: "Utility planning engineers",
        why: "Suburban growth requires trunk main and capacity planning ahead of development rather than alongside it.",
      },
    ],
    licensure:
      "Tennessee licenses engineers through the Board of Architectural and Engineering Examiners, with comity on an NCEES record the usual route. Water and wastewater work adds a second credential track that is separate from the PE: the state environment department certifies treatment and distribution operators by grade, and utilities hiring for plant-facing roles check the operator certification directly rather than treating the engineering license as a substitute.",
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    authority: "Portland Bureau of Environmental Services (BES)",
    marketNote:
      "Portland is constructing its first-ever filtration plant for the historically unfiltered Bull Run water supply, a response to new state turbidity requirements, alongside continued operation of the Big Pipe CSO tunnels.",
    localPrograms: [
      "Bull Run filtration plant construction (first-ever)",
      "Big Pipe CSO tunnel system operations",
      "Columbia Boulevard WWTP upgrades",
      "Lead service line replacement",
      "Stormwater management & Willamette River resiliency",
    ],
    agencies: [
      "Portland Water Bureau",
      "Portland Bureau of Environmental Services",
      "Oregon Health Authority Drinking Water Services",
      "Oregon Department of Environmental Quality",
      "Clean Water Services",
      "Port of Portland",
    ],
    marketDetail: [
      "Portland is one of the few large American cities to have supplied drinking water from a protected surface watershed without filtration, and moving to a filtered supply is the largest water engineering undertaking in the region's history. Designing, building and commissioning treatment for a system that has never had it changes hydraulics, residuals handling, operator training and the distribution system's chemistry all at once.",
      "On the wastewater side the city has already built large storage tunnels to control combined sewer overflows, so the emphasis has shifted to what remains: pump station and conveyance capacity, treatment plant upgrades, and a strongly green infrastructure approach to stormwater that is embedded in local design standards rather than offered as an alternative. Seismic resilience of buried pipe and plant is a live concern across both systems.",
    ],
    hiringFocus: [
      {
        role: "Water treatment process engineers",
        why: "Introducing filtration to a previously unfiltered supply is a rare, large and locally concentrated program.",
      },
      {
        role: "Seismic resilience engineers for buried infrastructure",
        why: "A subduction zone makes pipe and plant survivability a design requirement rather than an aspiration.",
      },
      {
        role: "Stormwater & green infrastructure designers",
        why: "Green approaches are written into local standards, making them funded design work rather than an option.",
      },
      {
        role: "Pump station & conveyance engineers",
        why: "With storage largely built, capacity and reliability of conveyance is where the remaining program sits.",
      },
    ],
    licensure:
      "Oregon licenses through the State Board of Examiners for Engineering and Land Surveying, and comity on an NCEES record is the normal route. Treatment and distribution operators are certified separately by the state health authority and environmental quality department by grade and facility class, and utilities recruiting plant-facing engineers check that certification alongside the engineering license.",
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    authority: "Southern Nevada Water Authority (SNWA)",
    marketNote:
      "With Lake Mead at historically low levels, Southern Nevada Water Authority runs one of the most aggressive water-recycling and conservation programs in the country, returning nearly all indoor water use back to Lake Mead for credit.",
    localPrograms: [
      "Lake Mead low-lake-level pumping station operations",
      "Water reuse & return-flow credit system expansion",
      "Clark County Water Reclamation District upgrades",
      "Turf-conversion & conservation infrastructure",
      "Desert climate pipeline & valve rehabilitation",
    ],
    agencies: [
      "Southern Nevada Water Authority",
      "Las Vegas Valley Water District",
      "Clark County Water Reclamation District",
      "City of Las Vegas Water Pollution Control",
      "Nevada Division of Environmental Protection",
      "Colorado River Commission of Nevada",
    ],
    marketDetail: [
      "Southern Nevada operates the most consequential water reuse arrangement in the country. Treated wastewater is returned to the same reservoir the region draws from, and that return earns credit against the allocation, which means every gallon reclaimed to a high standard effectively extends the supply. Wastewater treatment here is therefore a water supply function, and the nutrient and constituent limits on that return are correspondingly strict.",
      "Declining reservoir levels have driven the other defining work: intake and pumping infrastructure engineered to keep drawing water as the surface falls, plus conservation measures pursued harder than anywhere else in the country. For engineers this means advanced treatment, large pumping and conveyance, and distribution system design under conditions where the supply itself is the constraint.",
    ],
    hiringFocus: [
      {
        role: "Advanced treatment & reuse engineers",
        why: "Returned flow earns supply credit, so effluent quality is a water resource decision rather than a compliance minimum.",
      },
      {
        role: "Pumping & conveyance engineers",
        why: "Falling reservoir levels make intake and lift infrastructure a continuing engineering problem.",
      },
      {
        role: "Water resources & supply planning engineers",
        why: "Allocation constraint makes long-horizon supply planning a permanent regional function.",
      },
      {
        role: "Distribution system engineers",
        why: "An outward-growing valley needs continuous transmission and storage extension under conservation constraints.",
      },
    ],
    licensure:
      "Nevada licenses through the State Board of Professional Engineers and Land Surveyors and registers by branch, so the civil or environmental branch matters for anyone sealing water or wastewater work. Comity on an NCEES record is the usual route once the branch is settled. Treatment and distribution operator certification is administered separately by the state environmental protection division and is checked independently of the PE.",
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    authority: "Columbus Division of Sewerage and Drainage",
    marketNote:
      "Columbus is nearing completion of its Wet Weather Management Plan, a multi-decade, multibillion-dollar consent-decree program of tunnels and plant upgrades to eliminate combined sewer overflows citywide.",
    localPrograms: [
      "Wet Weather Management Plan (Project 2027) CSO tunnels",
      "Jackson Pike & Southerly WWTP upgrades",
      "Lead service line replacement",
      "New growth-corridor water main extensions (Intel campus)",
      "Stormwater management & Scioto River resiliency",
    ],
    agencies: [
      "Columbus Division of Sewerage and Drainage",
      "Columbus Division of Water",
      "Ohio EPA",
      "Franklin County Sanitary Engineering",
      "Del-Co Water Company",
      "Ohio Water Development Authority",
    ],
    marketDetail: [
      "Columbus chose an unusual route to combined sewer compliance. Rather than building storage tunnels alone, the city committed to a program built around keeping clean water out of the sewer in the first place, using green infrastructure, sewer lining, roof and downspout redirection and voluntary work on private property at neighborhood scale. That makes the engineering distributed and construction-heavy rather than concentrated in a few large structures.",
      "Growth has now added a second front. Large industrial and residential development in the surrounding counties requires trunk sewer, treatment capacity and water transmission extended into areas with little existing service, on a schedule set by the development rather than by the utility. Flat terrain and heavy clay soils make gravity conveyance and infiltration solutions harder than the topography suggests.",
    ],
    hiringFocus: [
      {
        role: "Green infrastructure & sewer rehabilitation engineers",
        why: "The regional compliance strategy is built on keeping clean water out rather than storing it, at neighborhood scale.",
      },
      {
        role: "Trunk sewer & treatment capacity engineers",
        why: "Large development in outlying counties needs conveyance and capacity extended ahead of it.",
      },
      {
        role: "Hydraulic modelers",
        why: "A distributed compliance approach only works if the flow reductions can be demonstrated in a model.",
      },
      {
        role: "Water transmission & distribution engineers",
        why: "Supplying new industrial and residential load requires transmission work beyond the existing service footprint.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route. Ohio EPA certifies water and wastewater operators by class separately from the engineering license, and it also reviews and approves plans for treatment and conveyance works, so familiarity with that submission process is a practical requirement alongside registration.",
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    authority: "Salt Lake City Department of Public Utilities",
    marketNote:
      "As the Great Salt Lake hits record-low levels, Utah's water managers are under mounting pressure to accelerate conservation and reuse infrastructure across the Wasatch Front to reduce diversions from its tributaries.",
    localPrograms: [
      "Great Salt Lake tributary conservation program",
      "Water reclamation facility secondary-effluent reuse",
      "Wasatch Front canyon pipeline rehabilitation",
      "Lead service line inventory & replacement",
      "Central Valley Water Reclamation Facility upgrades",
    ],
    agencies: [
      "Salt Lake City Department of Public Utilities",
      "Jordan Valley Water Conservancy District",
      "Central Utah Water Conservancy District",
      "Utah Division of Water Quality",
      "Utah Division of Drinking Water",
      "Utah Department of Environmental Quality",
    ],
    marketDetail: [
      "Supply here is snowpack, and snowpack is no longer dependable. Canyon watersheds feed the city through conveyance built generations ago, the Great Salt Lake's decline has made every diversion politically and ecologically consequential, and conservation, reuse and aquifer management have moved from optional to central. Water resources planning in this valley now carries weight that treatment design alone never did.",
      "The second issue is survivability. The Wasatch fault runs along the populated edge of the valley, and much of the water and sewer network crosses it or runs through liquefiable soils, so seismic assessment of pipelines, reservoirs and treatment plants is a funded program rather than a study. New treatment capacity is being built to modern standards partly because the old plants would not survive an event.",
    ],
    hiringFocus: [
      {
        role: "Water resources & supply planning engineers",
        why: "Snowpack variability and lake decline have made long-horizon supply planning a permanent regional priority.",
      },
      {
        role: "Seismic assessment engineers for buried infrastructure",
        why: "An active fault crossing the water network makes pipeline and reservoir survivability a funded program.",
      },
      {
        role: "Treatment process engineers",
        why: "Plants are being replaced to modern standards, concentrating design and commissioning demand.",
      },
      {
        role: "Reuse & conservation engineers",
        why: "Supply constraint makes recycling and demand management infrastructure a standing capital category.",
      },
    ],
    licensure:
      "Utah licenses through the Division of Professional Licensing and its Professional Engineers and Land Surveyors board, with comity on an NCEES record the normal path. The state's drinking water and water quality divisions certify operators by grade and review plans for public water systems and treatment works, so both the operator credential and familiarity with state plan review sit alongside the engineering license in hiring.",
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    authority: "KC Water",
    marketNote:
      "KC Water's Overflow Control Program, known locally as the Smart Sewer Program, is a 25-year, $2.5 billion federal consent decree effort that remains one of the largest wastewater capital programs in the Midwest.",
    localPrograms: [
      "Smart Sewer Program (federal consent decree)",
      "Blue River & Birmingham WWTP upgrades",
      "Green infrastructure & stormwater retrofits",
      "Lead service line replacement",
      "Missouri River intake resiliency projects",
    ],
    agencies: [
      "KC Water",
      "Missouri Department of Natural Resources",
      "Johnson County Wastewater",
      "Kansas Department of Health and Environment",
      "Little Blue Valley Sewer District",
      "Mid-America Regional Council",
    ],
    marketDetail: [
      "Kansas City's water engineering is defined by a long overflow control program on an old combined system and by the fact that the metro sits across a state line. Separation, storage, treatment capacity and green infrastructure are funded over a horizon measured in decades, and the regulatory relationship differs depending on which side of the line a project falls, so engineers here work with two state environmental agencies rather than one.",
      "The Missouri River supplies most of the drinking water, which means turbidity and seasonal variability drive treatment design, and river bank conditions matter for intake reliability. Meanwhile a large inherited distribution network with a significant main break history keeps condition assessment, renewal prioritization and trenchless rehabilitation in continuous demand.",
    ],
    hiringFocus: [
      {
        role: "Collection system & overflow control engineers",
        why: "A decades-long combined sewer program funds continuous separation, storage and conveyance design.",
      },
      {
        role: "Water treatment process engineers",
        why: "A turbid, seasonally variable river source makes treatment design and optimization a standing requirement.",
      },
      {
        role: "Pipeline condition assessment & renewal engineers",
        why: "An aging distribution network with frequent breaks needs prioritized rehabilitation rather than reactive repair.",
      },
      {
        role: "Dual-licensed water engineers",
        why: "A bi-state metro means projects fall under two environmental agencies and two licensing boards.",
      },
    ],
    licensure:
      "Missouri licenses through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects, and Kansas through its Board of Technical Professions, with comity registration in both close to a practical requirement across this metro. Operator certification is handled separately by each state's environmental agency, and both states also review and approve construction plans for public water and wastewater works.",
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    authority: "Citizens Energy Group",
    marketNote:
      "Citizens Energy Group's DigIndy tunnel system, a 28-mile network of deep rock tunnels, anchors one of the Midwest's largest active CSO consent-decree programs as Indianapolis works toward full completion.",
    localPrograms: [
      "DigIndy deep rock tunnel system completion",
      "Belmont & Southport Advanced WWTP upgrades",
      "Lead service line replacement",
      "White River intake & source-water protection",
      "Combined sewer separation projects",
    ],
    agencies: [
      "Citizens Energy Group",
      "Indiana Department of Environmental Management",
      "Indianapolis Department of Public Works",
      "Marion County Surveyor",
      "Indiana Finance Authority",
      "White River Alliance",
    ],
    marketDetail: [
      "Indianapolis runs its water and wastewater utilities through a public charitable trust rather than a conventional city department, which gives the system a different governance and funding model from most American utilities and makes long-horizon capital planning more predictable than the political cycle usually allows. For engineers that translates into programs that continue rather than stop and start.",
      "The defining technical work has been a deep tunnel system built to capture combined sewer overflows, together with the pump stations, drop shafts and consolidation sewers that feed it and the treatment capacity to handle what it delivers. Flat terrain with very little fall makes gravity conveyance genuinely difficult, and the same flatness limits how much infiltration-based stormwater management can contribute.",
    ],
    hiringFocus: [
      {
        role: "Tunnel & deep conveyance engineers",
        why: "A large storage tunnel system concentrates drop shaft, consolidation sewer and hydraulic expertise locally.",
      },
      {
        role: "Pump station & lift engineers",
        why: "Flat terrain with minimal fall makes pumping rather than gravity the answer across much of the system.",
      },
      {
        role: "Treatment process engineers",
        why: "Captured wet weather flow has to be treated, which keeps plant capacity and process work funded.",
      },
      {
        role: "Hydraulic modelers",
        why: "Demonstrating capture performance under wet weather is a modeling exercise before it is a construction one.",
      },
    ],
    licensure:
      "Indiana licenses through the State Board of Registration for Professional Engineers, administered by the Professional Licensing Agency, with comity on an NCEES record the usual route. The state environmental management department certifies water and wastewater operators by class and issues construction permits for treatment and conveyance works, so the operator credential and permit experience are checked alongside the engineering license.",
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    authority: "Milwaukee Metropolitan Sewerage District (MMSD)",
    marketNote:
      "MMSD's 28.5-mile Deep Tunnel system, one of the largest wastewater storage tunnels on the Great Lakes, continues to anchor a regional capital program now expanding to address PFAS and nutrient limits on Lake Michigan discharges.",
    localPrograms: [
      "Deep Tunnel storage system operations & expansion",
      "Jones Island & South Shore WWTP upgrades",
      "PFAS & nutrient-removal compliance projects",
      "Lead service line replacement (Milwaukee's lead pipe legacy)",
      "Green infrastructure stormwater program",
    ],
    agencies: [
      "Milwaukee Metropolitan Sewerage District",
      "Milwaukee Water Works",
      "Wisconsin Department of Natural Resources",
      "Milwaukee County",
      "Great Lakes Commission",
      "Wisconsin Clean Water Fund",
    ],
    marketDetail: [
      "Milwaukee treats stormwater and wastewater as one watershed problem, and it has gone further than most regions in acting on that. Deep tunnel storage, an aggressive green infrastructure capture target and watershed-scale planning are pursued together, which means hydraulic modelers, stormwater designers and conveyance engineers work on the same programs rather than in separate practices.",
      "The treatment side has its own distinction: biosolids here are processed into a fertilizer product that has been sold commercially for generations, which makes residuals handling a production process with quality requirements rather than a disposal problem. Lake Michigan supplies the drinking water, so source protection, intake reliability and the Great Lakes regulatory framework shape the supply side.",
    ],
    hiringFocus: [
      {
        role: "Stormwater & green infrastructure engineers",
        why: "A regional capture target makes green infrastructure funded design work at watershed scale.",
      },
      {
        role: "Hydraulic modelers",
        why: "Integrated wet weather planning depends on modeling that links surface and sewer behavior.",
      },
      {
        role: "Biosolids & residuals process engineers",
        why: "Processing biosolids into a marketed product makes residuals a production process with quality control.",
      },
      {
        role: "Tunnel & conveyance engineers",
        why: "Deep storage and the sewers feeding it require hydraulic depth beyond ordinary collection system work.",
      },
    ],
    licensure:
      "Wisconsin licenses through the Department of Safety and Professional Services, with comity on an NCEES record the standard route. The Department of Natural Resources certifies operators by subclass and reviews plans for treatment and conveyance works, and because the drinking water source is a Great Lake, the interstate compact governing diversions is part of the regulatory context engineers here are expected to understand.",
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    authority: "Richmond Department of Public Utilities (DPU)",
    marketNote:
      "Richmond is midway through a multi-decade CSO control program centered on a new deep-rock storage tunnel beneath downtown, one of the largest wastewater capital projects in Virginia's history.",
    localPrograms: [
      "Downtown CSO storage tunnel construction",
      "Shockoe Retention Basin & pump station upgrades",
      "James River intake & source-water protection",
      "Lead service line replacement",
      "Water treatment plant capacity upgrades",
    ],
    agencies: [
      "Richmond Department of Public Utilities",
      "Virginia Department of Environmental Quality",
      "Henrico County Department of Public Utilities",
      "Virginia Department of Health Office of Drinking Water",
      "Chesapeake Bay Program",
      "Virginia Resources Authority",
    ],
    marketDetail: [
      "Richmond is one of the few Virginia localities still operating a combined sewer system, and the state has set a schedule for ending overflows rather than merely reducing them. That converts the work from open-ended improvement into a deadline-driven program of storage, separation, conveyance and treatment capacity, which is a different engineering and delivery problem and a more demanding one.",
      "The Chesapeake Bay supplies the second regulatory driver. Nutrient and sediment obligations reach every discharger and every developed acre in the watershed, so treatment plants operate to nitrogen and phosphorus limits with trading arrangements around them, and stormwater quality is a measured requirement rather than a design gesture. The James River sits at the center of both, as supply and as receiving water.",
    ],
    hiringFocus: [
      {
        role: "Combined sewer & storage engineers",
        why: "A statutory schedule for ending overflows turns the program into deadline-driven design and construction.",
      },
      {
        role: "Nutrient removal process engineers",
        why: "Bay obligations impose measured nitrogen and phosphorus limits on treatment rather than general standards.",
      },
      {
        role: "Stormwater quality engineers",
        why: "Watershed nutrient and sediment requirements make treatment a quantified design outcome across the region.",
      },
      {
        role: "Hydraulic modelers",
        why: "Demonstrating overflow elimination under design storms is a modeling exercise before construction begins.",
      },
    ],
    licensure:
      "Virginia licenses through the Board for Architects, Professional Engineers, Land Surveyors, Certified Interior Designers and Landscape Architects within the Department of Professional and Occupational Regulation, with comity on an NCEES record the usual route. Waterworks and wastewater operators are licensed separately through their own state board by class, and both the environmental quality department and the health department's drinking water office review construction plans.",
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    authority: "Baltimore City Department of Public Works (DPW)",
    marketNote:
      "After Back River Wastewater Treatment Plant fell into a widely reported state of disrepair and drew emergency state intervention, Baltimore DPW is now mid-program on a major rebuild of both regional treatment plants.",
    localPrograms: [
      "Back River WWTP emergency rebuild & upgrades",
      "Patapsco WWTP enhanced nutrient removal",
      "Lead service line replacement (pre-1945 housing stock)",
      "Combined sewer overflow consent decree program",
      "Water main rehabilitation (aging cast-iron system)",
    ],
    agencies: [
      "Baltimore City Department of Public Works",
      "Maryland Department of the Environment",
      "Baltimore County Department of Public Works",
      "Chesapeake Bay Program",
      "Maryland Water Quality Financing Administration",
      "Maryland Environmental Service",
    ],
    marketDetail: [
      "Baltimore owns some of the oldest buried water infrastructure in the country and supplies a region well beyond the city line, which makes it a wholesale utility as well as a retail one. Condition assessment, prioritized renewal, trenchless rehabilitation and large transmission main work are continuous, and the consequences of failure are regional rather than local, so reliability engineering carries unusual weight here.",
      "On the wastewater side, the region's large treatment plants discharge to a watershed under nutrient obligations and have been subject to sustained regulatory attention over their performance. That keeps process engineering, capacity, and plant reliability work funded, alongside a long-running effort to reduce inflow, infiltration and overflows in an old collection system where sewers and water mains share crowded, poorly recorded corridors.",
    ],
    hiringFocus: [
      {
        role: "Pipeline condition assessment & renewal engineers",
        why: "An exceptionally old buried network serving a whole region makes prioritized renewal a permanent program.",
      },
      {
        role: "Treatment process & plant reliability engineers",
        why: "Large plants under nutrient obligations and regulatory scrutiny keep process and capacity work continuously funded.",
      },
      {
        role: "Collection system engineers",
        why: "Reducing inflow, infiltration and overflows in an old system is a long-running, well-funded obligation.",
      },
      {
        role: "Transmission main & hydraulic engineers",
        why: "Wholesale supply beyond the city line makes large transmission design and reliability a regional responsibility.",
      },
    ],
    licensure:
      "Maryland licenses engineers through the State Board for Professional Engineers under the Department of Labor, with comity on an NCEES record the standard route. Water and wastewater operators are certified separately by the Department of the Environment, which also reviews and permits construction of treatment and conveyance works, and Bay watershed obligations add nutrient accounting that engineers here are expected to understand.",
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    authority: "Sewerage & Water Board of New Orleans (SWBNO)",
    marketNote:
      "Operating a water and drainage system largely below sea level, the Sewerage & Water Board of New Orleans runs one of the most demanding pump-station and resiliency engineering programs in the country under a longstanding federal consent decree.",
    localPrograms: [
      "Federal consent decree sewer rehabilitation program",
      "Below-sea-level drainage pump station upgrades",
      "Hurricane & storm-surge resiliency design",
      "Aging cast-iron water main replacement",
      "East Bank & West Bank WWTP upgrades",
    ],
    agencies: [
      "Sewerage and Water Board of New Orleans",
      "Louisiana Department of Environmental Quality",
      "Louisiana Department of Health",
      "US Army Corps of Engineers New Orleans District",
      "Coastal Protection and Restoration Authority",
      "Jefferson Parish Water Department",
    ],
    marketDetail: [
      "The utility here runs drinking water, sewerage and the city's drainage pumping, and it historically generated part of its own power at a non-standard frequency to drive the oldest pumps. That combination makes the system unlike any other in the country: power generation, pumping capacity and flood safety are the same engineering problem, and modernizing any part of it means reconciling equipment from several different eras.",
      "The ground works against the whole system. Subsidence moves buried pipe and breaks joints, which drives very high water loss and persistent infiltration into the sewers, and soft soils make every excavation and foundation a geotechnical exercise. The Mississippi provides the drinking water supply, with seasonal saltwater intrusion upriver a recurring concern for intakes.",
    ],
    hiringFocus: [
      {
        role: "Pumping & drainage engineers",
        why: "Interior drainage pumping is continuously operating flood protection rather than periodic capital work.",
      },
      {
        role: "Power & electrical engineers for utility plant",
        why: "Self-generation and mixed-era pumping equipment make plant electrical engineering a rare local specialism.",
      },
      {
        role: "Pipeline rehabilitation engineers",
        why: "Subsidence-driven breakage and infiltration make renewal and trenchless methods a permanent program.",
      },
      {
        role: "Geotechnical engineers",
        why: "Soft compressible soils govern every excavation, foundation and buried structure in the system.",
      },
    ],
    licensure:
      "Louisiana licenses through the Professional Engineering and Land Surveying Board, with comity on an NCEES record the usual individual route, and firms need a certificate of authorization with a resident professional in responsible charge. Operators are certified separately by the state health department for drinking water and the environmental quality department for wastewater, both by class, and both agencies review construction plans.",
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    authority: "Louisville Metropolitan Sewer District (MSD)",
    marketNote:
      "Louisville MSD's Project WIN, a federal consent decree program addressing combined sewer overflows along the Ohio River, has driven more than a decade of steady tunnel and plant-upgrade work.",
    localPrograms: [
      "Project WIN combined sewer overflow tunnels",
      "Morris Forman WWTP upgrades",
      "Ohio River intake & source-water protection",
      "Lead service line replacement",
      "Flood pump station rehabilitation",
    ],
    agencies: [
      "Louisville and Jefferson County Metropolitan Sewer District",
      "Louisville Water Company",
      "Kentucky Division of Water",
      "Kentucky Energy and Environment Cabinet",
      "Kentucky Infrastructure Authority",
      "Ohio River Valley Water Sanitation Commission",
    ],
    marketDetail: [
      "Louisville's drinking water is drawn from the Ohio using riverbank filtration, letting the aquifer alongside the river do part of the treatment before water reaches the plant. That is an unusual approach at this scale and it makes hydrogeology part of the water supply engineering rather than a separate discipline, with collector well performance and aquifer behavior as live operational questions.",
      "The wastewater side runs a consent decree program built around a large storage tunnel and a sustained effort on separation, conveyance and treatment capacity. Karst geology through parts of the county complicates both systems: it gives surface water fast routes underground, makes infiltration patterns hard to predict, and turns deep excavation into a subsurface risk assessment every time.",
    ],
    hiringFocus: [
      {
        role: "Tunnel & conveyance engineers",
        why: "A large storage tunnel program concentrates deep conveyance and hydraulic expertise in the region.",
      },
      {
        role: "Water supply engineers with hydrogeology experience",
        why: "Riverbank filtration makes aquifer behavior part of the treatment train rather than a separate study.",
      },
      {
        role: "Collection system & infiltration engineers",
        why: "Karst terrain makes inflow and infiltration harder to locate and quantify than in ordinary geology.",
      },
      {
        role: "Treatment process engineers",
        why: "Captured wet weather flow and river source variability both keep plant process work continuously funded.",
      },
    ],
    licensure:
      "Kentucky licenses through the State Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the normal route, and engineers covering the full metro frequently hold Indiana registration as well. The Division of Water certifies operators by class and reviews construction plans for water and wastewater works, so the operator credential and plan approval experience sit alongside the engineering license.",
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    authority: "Oklahoma City Utilities Department",
    marketNote:
      "Oklahoma City's Utilities Department is investing heavily in new transmission capacity from its Lake Hefner and Lake Draper reservoirs to keep pace with the metro's rapid suburban growth.",
    localPrograms: [
      "Lake Hefner & Lake Draper WTP capacity expansion",
      "North Canadian River WWTP upgrades",
      "New growth-corridor transmission main extensions",
      "Lead service line inventory & replacement",
      "Stormwater & flood control drainage design",
    ],
    agencies: [
      "Oklahoma City Utilities Department",
      "Oklahoma Water Resources Board",
      "Oklahoma Department of Environmental Quality",
      "Central Oklahoma Master Conservancy District",
      "Oklahoma City Water Utilities Trust",
      "Grand River Dam Authority",
    ],
    marketDetail: [
      "Oklahoma City does not have enough local water and has solved that by reaching a long way for it. Raw water is moved to the metro from reservoirs well outside the region through large transmission pipelines, which makes long-distance conveyance, pumping and storage a central part of the utility's engineering rather than an occasional project. Reliability over that distance is the design problem that defines the system.",
      "Treatment is shaped by the sources. Surface reservoirs in this climate produce seasonal algae, taste and odor episodes and variable turbidity, so process design and optimization are ongoing concerns rather than settled decisions. On the wastewater side, a growing service area keeps trunk sewer extension and treatment capacity work steady, and flat terrain with expansive clay makes gravity conveyance and pipe bedding harder than the topography suggests.",
    ],
    hiringFocus: [
      {
        role: "Transmission & pumping engineers",
        why: "Supply moved long distances from outside the region makes large conveyance and lift design a core utility function.",
      },
      {
        role: "Water treatment process engineers",
        why: "Reservoir sources with seasonal algae and taste and odor events require continual process attention.",
      },
      {
        role: "Collection system & trunk sewer engineers",
        why: "A growing service area needs conveyance and treatment capacity extended ahead of development.",
      },
      {
        role: "Geotechnical & pipeline engineers",
        why: "Expansive clay moves buried pipe and makes bedding and joint design a durability question.",
      },
    ],
    licensure:
      "Oklahoma licenses through the State Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the standard individual route and a certificate of authorization required for firms. The Department of Environmental Quality certifies water and wastewater operators by class and issues construction permits for public water supply and treatment works, so the operator credential and permit experience are checked separately from the license.",
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    authority: "Charleston Water System",
    marketNote:
      "As one of the most flood-vulnerable historic downtowns on the Atlantic coast, Charleston Water System is investing heavily in sea-level-rise-resilient pump stations and storm-hardened treatment infrastructure.",
    localPrograms: [
      "Sea-level rise & coastal resiliency pump stations",
      "Plum Island WWTP upgrades",
      "Historic downtown combined sewer rehabilitation",
      "Hurricane-hardened lift station design",
      "Lead service line replacement",
    ],
    agencies: [
      "Charleston Water System",
      "South Carolina Department of Environmental Services",
      "Charleston County Stormwater Management",
      "Berkeley County Water and Sanitation",
      "South Carolina Department of Natural Resources",
      "South Carolina Rural Infrastructure Authority",
    ],
    marketDetail: [
      "Charleston's water engineering is dominated by the fact that the ground is barely above the sea and the sea is coming up. Drainage on the peninsula relies on deep tunnels and pump stations because gravity outfalls simply do not work at high tide, and the design tide rather than the design storm often governs. Groundwater sits close to the surface, which pushes infiltration into sewers and complicates every excavation.",
      "Salt is the second constant. Intrusion is a live concern for supply and for any aquifer source, brackish conditions attack buried metal and concrete, and soft Lowcountry soils mean pipelines and structures need ground improvement or deep foundations far more often than in firmer ground. Rapid growth in the outlying counties adds trunk main and treatment capacity work on top of the resilience program.",
    ],
    hiringFocus: [
      {
        role: "Drainage & pumping engineers",
        why: "Tidal conditions make gravity outfall unreliable, so pumped drainage is the region's defining water infrastructure.",
      },
      {
        role: "Collection system & infiltration engineers",
        why: "A shallow water table drives persistent infiltration that has to be found and reduced, not just treated.",
      },
      {
        role: "Coastal resilience & sea level adaptation engineers",
        why: "Design tide rather than design storm increasingly governs, which changes how systems are sized.",
      },
      {
        role: "Geotechnical & pipeline engineers",
        why: "Soft soils and brackish groundwater make foundations and material durability a design driver.",
      },
    ],
    licensure:
      "South Carolina licenses engineers through the Board of Registration for Professional Engineers and Surveyors within the Department of Labor, Licensing and Regulation, with comity on an NCEES record the usual route. Water and wastewater operators are certified separately by class, and the state environmental agency reviews construction plans for treatment and conveyance works. Coastal projects add the state's coastal zone permitting on top.",
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    authority: "Newark Department of Water and Sewer Utilities",
    marketNote:
      "After a widely publicized lead-in-water crisis, Newark completed one of the fastest full lead service line replacement programs in U.S. history, a model now referenced nationally as EPA's new Lead and Copper Rule Improvements take effect.",
    localPrograms: [
      "Lead service line replacement program (post-crisis model)",
      "Pequannock watershed treatment upgrades",
      "Passaic Valley Sewerage Commission interceptor capacity",
      "Combined sewer overflow reduction program",
      "Port Newark-Elizabeth industrial water infrastructure",
    ],
    agencies: [
      "Newark Department of Water and Sewer Utilities",
      "Passaic Valley Sewerage Commission",
      "New Jersey Department of Environmental Protection",
      "North Jersey District Water Supply Commission",
      "New Jersey Infrastructure Bank",
      "Passaic Valley Water Commission",
    ],
    marketDetail: [
      "Newark ran one of the fastest large-scale lead service line replacement programs in the country, and that experience has made service line inventory, replacement logistics and corrosion control chemistry an established local competence. With federal requirements now pushing every utility toward the same work, engineers who have actually delivered a replacement program at scale are in demand well beyond this city.",
      "The wastewater side is regional and very large. One of the biggest treatment plants in the country serves the metro and discharges to the harbor, the collection system in the older municipalities is combined, and overflow control obligations keep separation, storage and conveyance work funded. Old industrial ground means contaminated soils complicate a significant share of buried infrastructure projects.",
    ],
    hiringFocus: [
      {
        role: "Lead service line & distribution engineers",
        why: "A delivered replacement program at scale is a rare competence now required of utilities everywhere.",
      },
      {
        role: "Treatment process engineers",
        why: "A very large regional plant under harbor discharge obligations keeps process and capacity work continuous.",
      },
      {
        role: "Combined sewer & overflow control engineers",
        why: "Older municipalities on combined systems carry funded separation and storage obligations.",
      },
      {
        role: "Pipeline engineers with contaminated soil experience",
        why: "Legacy industrial ground makes soil management part of buried infrastructure delivery.",
      },
    ],
    licensure:
      "New Jersey licenses through the State Board of Professional Engineers and Land Surveyors within the Division of Consumer Affairs, with comity on an NCEES record the normal route. The Department of Environmental Protection licenses water and wastewater operators by class and permits treatment works construction, and its rules on lead service lines and corrosion control are more prescriptive than most states, which engineers here are expected to know.",
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    authority: "San Francisco Public Utilities Commission (SFPUC)",
    marketNote:
      "SFPUC's $8+ billion Sewer System Improvement Program, the largest infrastructure investment in the city's history, is rebuilding the Southeast Treatment Plant's digesters and hardening the system against sea-level rise and seismic risk.",
    localPrograms: [
      "Sewer System Improvement Program (SSIP) digester rebuild",
      "Southeast Treatment Plant modernization",
      "Seismic resiliency upgrades (Hetch Hetchy pipeline)",
      "Lead service line replacement",
      "Combined sewer overflow reduction projects",
    ],
    agencies: [
      "San Francisco Public Utilities Commission",
      "State Water Resources Control Board Division of Drinking Water",
      "Bay Area Water Supply and Conservation Agency",
      "San Francisco Bay Regional Water Quality Control Board",
      "California Department of Water Resources",
      "US Bureau of Reclamation",
    ],
    marketDetail: [
      "The regional water system delivers Sierra snowmelt to the Bay Area largely by gravity, and the pipelines and tunnels carrying it cross active faults on their way. That has driven a sustained seismic improvement program aimed at restoring service within days of a major earthquake, built around fault crossings, alternative routing, storage and hardened facilities. It is an unusual engineering brief and the people who have worked on it are few.",
      "San Francisco also runs a combined sewer system, which is rare on the west coast, so wet weather storage, transport boxes and treatment capacity work the way they do in an eastern city rather than a Californian one. Both wastewater treatment plants sit at the waterfront and are being rebuilt with sea level rise in the design basis, which links the coastal and process engineering problems directly.",
    ],
    hiringFocus: [
      {
        role: "Seismic resilience engineers for pipelines & tunnels",
        why: "A gravity supply crossing active faults has driven a rare, sustained survivability program.",
      },
      {
        role: "Combined sewer & wet weather engineers",
        why: "A combined system is unusual in the west and requires storage and transport expertise most local engineers lack.",
      },
      {
        role: "Treatment process engineers",
        why: "Both waterfront plants are being rebuilt, concentrating process design and commissioning demand.",
      },
      {
        role: "Coastal & sea level adaptation engineers",
        why: "Waterfront treatment facilities are being designed against rising water as a stated basis of design.",
      },
    ],
    licensure:
      "California licenses through the Board for Professional Engineers, Land Surveyors and Geologists and does not grant straightforward comity, so an out-of-state PE must satisfy California-specific examination requirements. Treatment and distribution operators are certified separately by the State Water Resources Control Board by grade, and the regional water quality control board administers discharge permitting that shapes process design.",
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    authority: "City of San Diego Public Utilities Department",
    marketNote:
      "Pure Water San Diego, a multi-phase potable reuse program designed to supply nearly half the city's water locally by 2035, is one of the largest advanced water treatment build-outs on the West Coast.",
    localPrograms: [
      "Pure Water San Diego advanced purification facilities",
      "Point Loma WWTP outfall reduction & upgrades",
      "North City & South Bay water reclamation expansion",
      "Lead service line inventory & replacement",
      "Cross-border Tijuana River pollution mitigation",
    ],
    agencies: [
      "San Diego Public Utilities Department",
      "San Diego County Water Authority",
      "State Water Resources Control Board",
      "Metropolitan Water District of Southern California",
      "San Diego Regional Water Quality Control Board",
      "International Boundary and Water Commission",
    ],
    marketDetail: [
      "San Diego imports most of its water and has spent a generation trying to import less. The centerpiece is a large potable reuse program that takes treated wastewater through advanced purification and returns it to the supply, which is the most technically demanding water work in the region: membrane processes, advanced oxidation, monitoring and the public and regulatory case that goes with it.",
      "The wastewater system carries its own distinctive history. The main ocean outfall plant has long operated under a discharge arrangement different from the national default, and reducing the flow it handles is part of the reuse rationale rather than a separate goal. Cross-border flows from the south add an international dimension that no other American metro has to engineer around.",
    ],
    hiringFocus: [
      {
        role: "Advanced water purification engineers",
        why: "A large potable reuse program makes membrane and advanced oxidation process design the region's deepest specialism.",
      },
      {
        role: "Water resources & supply planning engineers",
        why: "Import dependence makes long-horizon supply diversification a permanent utility function.",
      },
      {
        role: "Treatment process engineers",
        why: "Reducing ocean discharge by recovering flow into reuse links plant process work directly to supply strategy.",
      },
      {
        role: "Conveyance & pump station engineers",
        why: "Moving purified water back into the supply requires substantial new transmission and lift infrastructure.",
      },
    ],
    licensure:
      "California licenses through the Board for Professional Engineers, Land Surveyors and Geologists and does not grant straightforward comity to out-of-state PEs. Operators are certified separately by the State Water Resources Control Board by grade, and potable reuse carries its own regulatory framework and operator qualification expectations that sit above ordinary treatment requirements.",
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    authority: "San Antonio Water System (SAWS)",
    marketNote:
      "SAWS manages one of the largest recycled-water distribution networks in the country alongside the Vista Ridge pipeline, a 142-mile regional supply project built to diversify San Antonio away from sole reliance on the Edwards Aquifer.",
    localPrograms: [
      "Vista Ridge regional pipeline operations & expansion",
      "Edwards Aquifer protection & wellhead management",
      "Recycled water ('purple pipe') network expansion",
      "Dos Rios & Leon Creek WRC upgrades",
      "Lead service line replacement",
    ],
    agencies: [
      "San Antonio Water System",
      "Edwards Aquifer Authority",
      "Texas Commission on Environmental Quality",
      "San Antonio River Authority",
      "Texas Water Development Board",
      "Bexar County",
    ],
    marketDetail: [
      "San Antonio sits on a karst aquifer that is both its historic water supply and a regulated ecosystem, since the springs it feeds support protected species and carry legally significant flow requirements. Pumping is permitted and capped, recharge zone development is restricted, and the utility has had to build supply alternatives around those limits. Water resources engineering here is inseparable from aquifer science and permitting.",
      "The response has been unusually ambitious: one of the largest aquifer storage and recovery operations in the country, a recycled water distribution system serving industrial and irrigation customers at scale, and imported supply brought in by long pipeline. Each of those is a distinct engineering specialism, and together they make this a deeper water market than metro size alone would predict.",
    ],
    hiringFocus: [
      {
        role: "Aquifer storage & recovery engineers",
        why: "A large storage and recovery operation is a specialism with very few practitioners nationally.",
      },
      {
        role: "Water reuse & distribution engineers",
        why: "A large recycled water system serving industrial customers is engineered and operated as its own network.",
      },
      {
        role: "Water resources & permitting engineers",
        why: "Capped aquifer pumping and springflow obligations make supply planning a regulatory discipline.",
      },
      {
        role: "Transmission & pumping engineers",
        why: "Imported supply arriving by long pipeline requires sustained conveyance and lift engineering.",
      },
    ],
    licensure:
      "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity on an NCEES record the usual individual route and separate firm registration required. The Texas Commission on Environmental Quality licenses water and wastewater operators by class and reviews plans for public water systems, and work over the recharge zone requires its own approved protection plan independent of the engineering license.",
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    authority: "Austin Water",
    marketNote:
      "Austin Water's Water Forward plan, a 100-year integrated resource strategy adopted after the 2018 Highland Lakes drought scare, is driving new investment in reuse, aquifer storage, and treatment capacity to keep pace with the city's growth.",
    localPrograms: [
      "Water Forward 100-year plan implementation projects",
      "Walnut Creek & South Austin WWTP upgrades",
      "Aquifer storage & recovery expansion",
      "New growth-corridor transmission main extensions",
      "Lead service line inventory & replacement",
    ],
    agencies: [
      "Austin Water",
      "Lower Colorado River Authority",
      "Texas Commission on Environmental Quality",
      "Barton Springs/Edwards Aquifer Conservation District",
      "Texas Water Development Board",
      "Travis County",
    ],
    marketDetail: [
      "Austin's supply comes from a river system managed by a regional authority whose storage is shared with agriculture, industry and downstream users, so the city's water security depends on decisions taken outside it. That has pushed the utility toward conservation, reuse and storage of its own, and toward long-horizon planning that treats drought as the design condition rather than an exception.",
      "Locally the city has gone further than most in requiring buildings to participate. Large new developments are required to capture and reuse water on site, which turns what was a plumbing question into a distributed infrastructure program with its own permitting, water quality and monitoring requirements. Around that sits conventional growth pressure: treatment capacity, trunk mains and collection system extension into a fast-expanding service area.",
    ],
    hiringFocus: [
      {
        role: "Water reuse engineers",
        why: "On-site reuse requirements for large developments make decentralized water systems a permitted, engineered category.",
      },
      {
        role: "Water resources & drought planning engineers",
        why: "A shared river supply makes long-horizon planning under drought conditions a core utility function.",
      },
      {
        role: "Treatment process engineers",
        why: "Capacity expansion and reuse both require process design beyond conventional surface water treatment.",
      },
      {
        role: "Collection system & trunk main engineers",
        why: "A rapidly expanding service area needs conveyance extended ahead of development.",
      },
    ],
    licensure:
      "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity on an NCEES record the usual route and firm registration required separately. The Texas Commission on Environmental Quality licenses operators and reviews public water system plans, while the city's own reuse and watershed ordinances impose requirements that are more prescriptive than state rules and are what most often catch engineers new to Austin.",
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    authority: "JEA",
    marketNote:
      "JEA's septic-to-sewer conversion program, one of the largest in the Southeast, is targeting thousands of aging septic systems near the St. Johns River to address longstanding water-quality and environmental-justice concerns.",
    localPrograms: [
      "Septic-to-sewer conversion program (St. Johns River basin)",
      "Buckman & District WWTP upgrades",
      "Lead service line replacement",
      "Coastal resiliency & storm-hardened lift stations",
      "JAXPORT industrial water infrastructure",
    ],
    agencies: [
      "JEA",
      "St. Johns River Water Management District",
      "Florida Department of Environmental Protection",
      "Florida Department of Health",
      "City of Jacksonville Public Works",
      "Florida Water Resources Advisory Council",
    ],
    marketDetail: [
      "Jacksonville's drinking water comes from the Floridan aquifer, and the regional constraint is how much of it can be permitted rather than how it is treated. Consumptive use permitting caps withdrawals, which pushes the utility toward conservation, reuse and alternative supply, and makes hydrogeology and permitting central to water supply engineering here rather than peripheral.",
      "The wastewater program is dominated by a long-running effort to bring septic areas onto the public sewer. That is not a single project but thousands of connections, new trunk sewers, pump stations and treatment capacity, driven by nutrient loading to the St. Johns and the water quality obligations attached to it. Flat terrain and a high water table mean pumping rather than gravity, and dewatering on almost every excavation.",
    ],
    hiringFocus: [
      {
        role: "Collection system & septic conversion engineers",
        why: "Bringing septic areas onto public sewer is a sustained program of trunk mains, pump stations and connections.",
      },
      {
        role: "Pump station engineers",
        why: "Flat terrain and a high water table make pumped conveyance the default rather than the exception.",
      },
      {
        role: "Water supply & hydrogeology engineers",
        why: "Permitted aquifer withdrawal makes supply a hydrogeological and regulatory problem before a treatment one.",
      },
      {
        role: "Nutrient removal process engineers",
        why: "River water quality obligations drive nitrogen and phosphorus limits on treatment across the region.",
      },
    ],
    licensure:
      "Florida licenses engineers through the Board of Professional Engineers, with comity on an NCEES record the standard route. Water and wastewater operators are licensed separately by the Department of Environmental Protection by class, the Department of Health regulates onsite systems, and the regional water management district issues the consumptive use permits that govern how much water a utility may withdraw.",
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    authority: "Orlando Utilities Commission (OUC)",
    marketNote:
      "Central Florida's stressed Floridan Aquifer has pushed Orlando toward one of the most extensive reclaimed-water irrigation networks in the country, alongside new alternative water supply projects to meet theme-park-district demand growth.",
    localPrograms: [
      "Reclaimed water irrigation network expansion",
      "Floridan Aquifer alternative water supply projects",
      "Iron Bridge & Conserv II WRF upgrades",
      "Lead service line inventory & replacement",
      "Theme-park district utility infrastructure",
    ],
    agencies: [
      "Orlando Utilities Commission",
      "Orange County Utilities",
      "St. Johns River Water Management District",
      "Florida Department of Environmental Protection",
      "Toho Water Authority",
      "Central Florida Water Initiative",
    ],
    marketDetail: [
      "Central Florida has reached the limit of what the aquifer can sustainably supply, and regional permitting now treats groundwater as effectively capped. Growth therefore has to be served from somewhere else, which has made alternative supply, surface water treatment and above all reuse the region's central water engineering problem rather than an efficiency measure.",
      "Reuse here is genuinely large scale. Reclaimed water is distributed through its own separate network for irrigation and cooling across much of the metro, and rapid infiltration basins return treated flow to the ground. Designing, extending and operating a second pressurized network alongside the potable one is a distinct specialism, and karst geology means any recharge or disposal to ground has to account for how quickly water moves underground.",
    ],
    hiringFocus: [
      {
        role: "Reclaimed water system engineers",
        why: "A large separate distribution network for reuse is engineered and operated as its own utility.",
      },
      {
        role: "Water supply & alternative source engineers",
        why: "Capped groundwater permitting forces growth onto surface water and reuse, which is a design problem.",
      },
      {
        role: "Treatment process engineers",
        why: "Alternative sources and recharge quality requirements both demand process work beyond conventional groundwater treatment.",
      },
      {
        role: "Hydrogeology & recharge engineers",
        why: "Karst geology makes the behavior of water returned to ground a design question rather than an assumption.",
      },
    ],
    licensure:
      "Florida licenses through the Board of Professional Engineers, with comity on an NCEES record the normal route. Operators are licensed by class through the Department of Environmental Protection, and the regional water management district controls consumptive use permitting, which in this part of the state is the binding constraint on any supply proposal and is where most water engineering here actually starts.",
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    authority: "Pittsburgh Water and Sewer Authority (PWSA) / ALCOSAN",
    marketNote:
      "PWSA has run one of the nation's most aggressive lead service line replacement programs since 2016, while regional utility ALCOSAN advances its billion-dollar Clean Water Plan to control combined sewer overflows across greater Pittsburgh.",
    localPrograms: [
      "Lead service line replacement program (PWSA)",
      "ALCOSAN Clean Water Plan CSO tunnels",
      "Aging cast-iron water main rehabilitation",
      "Allegheny River intake resiliency upgrades",
      "Combined sewer overflow reduction projects",
    ],
    agencies: [
      "Pittsburgh Water",
      "ALCOSAN",
      "Pennsylvania Department of Environmental Protection",
      "Allegheny County Health Department",
      "PENNVEST",
      "Ohio River Valley Water Sanitation Commission",
    ],
    marketDetail: [
      "Pittsburgh's water utility has spent recent years rebuilding after a long period of underinvestment, and that has made the work unusually broad: lead service line replacement, corrosion control chemistry, treatment plant upgrades, reservoir covering and a distribution network needing systematic renewal rather than reactive repair. Engineers who can plan and prioritize renewal across an entire aging system are what this market most needs.",
      "Wastewater is regional and consent-decree driven. A single authority treats for dozens of municipalities on a combined system, which means overflow control involves aligning many separate collection systems with one regional plan, and the steep terrain that makes the city distinctive also makes conveyance, siphons and pump stations unavoidable. Historic mine workings complicate deep construction across parts of the county.",
    ],
    hiringFocus: [
      {
        role: "Distribution system renewal engineers",
        why: "A systematic rebuild of aging network and lead service lines requires prioritization rather than reactive repair.",
      },
      {
        role: "Combined sewer & regional conveyance engineers",
        why: "One authority coordinating dozens of municipal systems makes regional hydraulic planning a specialism.",
      },
      {
        role: "Treatment process engineers",
        why: "Plant upgrades and corrosion control chemistry are both funded and technically demanding.",
      },
      {
        role: "Geotechnical & tunneling engineers",
        why: "Steep terrain and historic mine workings make deep conveyance construction a subsurface risk problem.",
      },
    ],
    licensure:
      "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity on an NCEES record the normal route. The Department of Environmental Protection certifies water and wastewater operators by class and issues construction permits for public water supply and treatment works, and its lead and corrosion control requirements are an active area engineers here are expected to follow closely.",
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    authority: "Metropolitan Sewer District of Greater Cincinnati (MSD)",
    marketNote:
      "MSD's Project Groundwork, centered on the Lick Run daylighting and green-infrastructure corridor, is a federal consent decree program that has reshaped how the region manages combined sewer overflows.",
    localPrograms: [
      "Project Groundwork green infrastructure (Lick Run)",
      "Mill Creek & Muddy Creek WWTP upgrades",
      "Combined sewer overflow consent decree program",
      "Lead service line replacement",
      "Ohio River intake & source-water protection",
    ],
    agencies: [
      "Metropolitan Sewer District of Greater Cincinnati",
      "Greater Cincinnati Water Works",
      "Ohio EPA",
      "Hamilton County",
      "Ohio River Valley Water Sanitation Commission",
      "Ohio Water Development Authority",
    ],
    marketDetail: [
      "The region's drinking water utility treats a heavily used river to a standard well above the regulatory minimum, using granular activated carbon and ultraviolet disinfection to deal with organic contaminants and spills upstream. That makes advanced treatment operation and process optimization a genuine local competence, and it gives engineers here experience with contaminant removal that most surface water utilities never need.",
      "The wastewater program is one of the most demanding consent decrees in the country, and the region has answered part of it by daylighting buried streams and separating stormwater into restored surface channels rather than storing everything underground. That approach puts hydraulics, urban design and land acquisition into the same project, and the steep hillside terrain makes both conveyance and surface solutions harder to route.",
    ],
    hiringFocus: [
      {
        role: "Advanced water treatment engineers",
        why: "Carbon and ultraviolet treatment on a heavily used river is a competence most surface water utilities lack.",
      },
      {
        role: "Stream restoration & separation engineers",
        why: "Daylighting buried watercourses as a compliance strategy combines hydraulics with surface design.",
      },
      {
        role: "Combined sewer & conveyance engineers",
        why: "A major consent decree funds sustained storage, separation and conveyance design.",
      },
      {
        role: "Hydraulic modelers",
        why: "Demonstrating overflow reduction across a hillside combined system is a modeling problem first.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route, and engineers covering the full metro often hold Kentucky and Indiana registration too. Ohio EPA certifies operators by class and reviews plans for treatment and conveyance works, which is a required step alongside the license.",
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    authority: "Northeast Ohio Regional Sewer District (NEORSD)",
    marketNote:
      "NEORSD's Project Clean Lake, a $3 billion federal consent decree program of deep tunnels and green infrastructure, is one of the largest Great Lakes water-quality investments underway to keep combined sewage out of Lake Erie.",
    localPrograms: [
      "Project Clean Lake deep tunnel construction",
      "Easterly & Southerly WWTP upgrades",
      "Lake Erie nutrient & algal-bloom mitigation",
      "Lead service line replacement",
      "Green infrastructure stormwater program",
    ],
    agencies: [
      "Northeast Ohio Regional Sewer District",
      "Cleveland Water",
      "Ohio EPA",
      "Cuyahoga County",
      "Great Lakes Commission",
      "Ohio Water Development Authority",
    ],
    marketDetail: [
      "Cleveland draws drinking water from Lake Erie and supplies a large regional service area from it, and the lake has become a more difficult source than it used to be. Harmful algal blooms in the shallower parts of the basin, and the taste, odor and toxin risks that come with them, have pushed monitoring, intake management and treatment response into the front rank of operational concerns for every lake utility.",
      "Wastewater is a large consent decree program built on deep storage tunnels, with a substantial committed green infrastructure component alongside it. That gives the region both tunneling and surface stormwater design work at scale, and the same freeze-thaw climate that damages roads also drives pipe breakage and infiltration in an old collection network running through legacy industrial ground.",
    ],
    hiringFocus: [
      {
        role: "Tunnel & deep conveyance engineers",
        why: "A storage tunnel program at scale concentrates underground hydraulic expertise in the region.",
      },
      {
        role: "Water treatment process engineers",
        why: "Algal toxin and taste and odor risk on a lake source makes monitoring and treatment response continuous work.",
      },
      {
        role: "Stormwater & green infrastructure engineers",
        why: "Green infrastructure is a committed part of the compliance plan rather than an optional supplement.",
      },
      {
        role: "Collection system rehabilitation engineers",
        why: "An old network in a freeze-thaw climate makes breakage, infiltration and renewal a standing program.",
      },
    ],
    licensure:
      "Ohio licenses through the State Board of Registration for Professional Engineers and Surveyors, with comity on an NCEES record the standard route. Ohio EPA certifies water and wastewater operators by class and reviews construction plans for treatment and conveyance works. Because the source is a Great Lake, the interstate compact governing withdrawals and diversions forms part of the regulatory context here.",
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    authority: "Metropolitan St. Louis Sewer District (MSD)",
    marketNote:
      "MSD's Project Clear is a 23-year, $6+ billion federal consent decree program, among the largest in the country, rebuilding combined and sanitary sewers across the St. Louis region.",
    localPrograms: [
      "Project Clear consent decree tunnel & sewer program",
      "Bissell Point & Lemay WWTP upgrades",
      "Combined sewer overflow reduction projects",
      "Lead service line replacement",
      "Mississippi River intake resiliency upgrades",
    ],
    agencies: [
      "Metropolitan St. Louis Sewer District",
      "Missouri American Water",
      "Missouri Department of Natural Resources",
      "City of St. Louis Water Division",
      "Illinois Environmental Protection Agency",
      "US Army Corps of Engineers St. Louis District",
    ],
    marketDetail: [
      "The regional sewer district serves the city and most of the county, and it operates two quite different systems at once: a combined network in the older core and separate sanitary and storm systems in the postwar suburbs. Its overflow control obligations therefore require different engineering answers in different parts of the same service area, which makes hydraulic modeling and program prioritization unusually important.",
      "Drinking water is drawn from two great rivers just above their confluence, which means very high and variable sediment loads and treatment designed around solids handling at a scale most utilities never face. Residuals management is a major operation in its own right, and intake reliability through floods and ice is a recurring engineering concern rather than a seasonal inconvenience.",
    ],
    hiringFocus: [
      {
        role: "Collection system & overflow control engineers",
        why: "One authority running both combined and separate systems needs different compliance engineering in each.",
      },
      {
        role: "Hydraulic modelers",
        why: "Prioritizing a very large program across two system types is a modeling and planning problem first.",
      },
      {
        role: "Water treatment & residuals engineers",
        why: "Extremely high sediment loads from two rivers make solids handling a major process operation.",
      },
      {
        role: "Pump station & conveyance engineers",
        why: "Flat floodplain service areas and river-level constraints make pumped conveyance widespread.",
      },
    ],
    licensure:
      "Missouri licenses through the Board for Architects, Professional Engineers, Professional Land Surveyors and Professional Landscape Architects, with comity on an NCEES record the usual route and corporate authorization required for firms. The Department of Natural Resources certifies operators by class and issues construction permits for water and wastewater works, and because the metro reaches into Illinois, projects there fall under a second state agency entirely.",
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    authority: "City of Raleigh Public Utilities (Raleigh Water)",
    marketNote:
      "Falls Lake's nutrient-management rules and explosive growth across the Research Triangle are pushing Raleigh Water to expand treatment capacity and tighten nutrient removal at its Neuse River plant simultaneously.",
    localPrograms: [
      "Neuse River Resource Recovery Facility nutrient upgrades",
      "Falls Lake watershed nutrient-management compliance",
      "New growth-corridor water main extensions",
      "Lead service line inventory & replacement",
      "Reclaimed water distribution expansion",
    ],
    agencies: [
      "Raleigh Water",
      "North Carolina Department of Environmental Quality",
      "NC Division of Water Resources",
      "Wake County",
      "Town of Cary",
      "North Carolina Department of Health and Human Services",
    ],
    marketDetail: [
      "The Triangle's water engineering is governed by nutrient rules written for specific reservoirs, which set numeric nitrogen and phosphorus obligations on both treatment plants and new development across whole watersheds. That is a stricter and more quantified regime than most of the country operates under, and it means stormwater design, land development and plant process engineering are all measured against the same nutrient accounting.",
      "Growth supplies the pressure. The region's population has outrun its water and sewer infrastructure for years, so treatment capacity expansion, trunk main extension, interbasin considerations and reuse are all live at once. Reclaimed water distribution has grown accordingly, and the utility plans supply on a horizon that assumes the growth continues rather than levels off.",
    ],
    hiringFocus: [
      {
        role: "Nutrient removal process engineers",
        why: "Reservoir nutrient rules impose numeric nitrogen and phosphorus limits that govern plant design directly.",
      },
      {
        role: "Stormwater & nutrient accounting engineers",
        why: "New development must demonstrate nutrient performance, making treatment a quantified design outcome.",
      },
      {
        role: "Treatment capacity & trunk main engineers",
        why: "Population growth outpacing infrastructure keeps capacity expansion continuously funded.",
      },
      {
        role: "Water reuse engineers",
        why: "Reclaimed water distribution is expanding as part of the region's supply strategy.",
      },
    ],
    licensure:
      "North Carolina licenses engineers through the Board of Examiners for Engineers and Surveyors, with comity on an NCEES record the usual individual route, and the state licenses firms separately. Water treatment and distribution operators are certified by their own state boards by grade, and the Department of Environmental Quality issues the permits that carry the nutrient limits shaping most design here.",
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    authority: "DC Water",
    marketNote:
      "DC Water's Clean Rivers Project, a $2.7 billion tunnel program feeding into Blue Plains (the world's largest advanced wastewater treatment plant), anchors one of the most technically demanding water-infrastructure markets in the country.",
    localPrograms: [
      "DC Clean Rivers Project deep tunnel system",
      "Blue Plains Advanced Wastewater Treatment Plant upgrades",
      "Lead service line replacement (LeadFreeDC program)",
      "Anacostia & Potomac River resiliency projects",
      "Combined sewer overflow reduction program",
    ],
    agencies: [
      "DC Water",
      "Washington Aqueduct (US Army Corps of Engineers)",
      "DC Department of Energy and Environment",
      "Interstate Commission on the Potomac River Basin",
      "WSSC Water",
      "EPA Region 3",
    ],
    marketDetail: [
      "The District has an arrangement found nowhere else: its drinking water is treated by a federal agency and then distributed by the local utility, so supply and distribution sit under different owners with different funding and approval processes. Engineers working the supply side deal with federal procurement and criteria, while distribution renewal and lead service line replacement run on the utility's own program.",
      "Wastewater is engineered at exceptional scale. The regional plant is among the largest advanced treatment facilities anywhere, serving well beyond the District and operating to nutrient limits driven by Chesapeake Bay obligations, and a deep tunnel system built to capture combined sewer overflows has added major underground conveyance and pumping to the system. Both give local engineers experience at a size few other markets offer.",
    ],
    hiringFocus: [
      {
        role: "Advanced treatment process engineers",
        why: "An exceptionally large nutrient removal plant offers process experience at a scale few markets provide.",
      },
      {
        role: "Tunnel & deep conveyance engineers",
        why: "A major storage tunnel program concentrates underground hydraulic and pumping expertise.",
      },
      {
        role: "Distribution renewal & lead service line engineers",
        why: "An old distribution network under replacement obligations makes renewal a sustained program.",
      },
      {
        role: "Multi-jurisdiction water engineers",
        why: "Federal supply, District distribution and suburban regional utilities each operate under different processes.",
      },
    ],
    licensure:
      "The District licenses through its Board of Professional Engineering, with comity on an NCEES record the normal route, and most engineers working this market also hold Maryland and Virginia registration because the regional systems cross all three. Operator certification is administered locally, while the federal supply side follows its own criteria and contracting requirements independent of licensure.",
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    authority: "Metropolitan District Commission (MDC)",
    marketNote:
      "MDC's Clean Water Project, a multi-decade deep-rock tunnel program under a state consent order, continues to drive combined sewer overflow reduction work across the greater Hartford region.",
    localPrograms: [
      "Clean Water Project deep tunnel program",
      "Hartford WPCF nutrient removal upgrades",
      "Connecticut River intake & source-water protection",
      "Lead service line replacement",
      "Combined sewer overflow reduction projects",
    ],
    agencies: [
      "Metropolitan District Commission",
      "Connecticut Department of Energy and Environmental Protection",
      "Connecticut Department of Public Health Drinking Water Section",
      "Hartford Department of Public Works",
      "Connecticut Water Company",
      "Connecticut Clean Water Fund",
    ],
    marketDetail: [
      "A single regional authority supplies drinking water and treats wastewater for Hartford and the surrounding towns, which is an unusual degree of consolidation and means its capital program effectively is the region's water engineering market. The older member communities are served by combined sewers under a long-running overflow reduction order, so separation, storage and conveyance work is funded on a multi-decade horizon.",
      "Supply comes from protected reservoirs west of the river, delivered largely by gravity, which keeps source protection and transmission main condition central rather than treatment complexity. The Connecticut River is the receiving water, and its floodplain and levee system constrain where plant and outfalls can sit. A long freeze-thaw season drives main breaks and infiltration across an aging network.",
    ],
    hiringFocus: [
      {
        role: "Combined sewer & separation engineers",
        why: "A multi-decade overflow reduction order funds continuous separation, storage and conveyance design.",
      },
      {
        role: "Transmission main & distribution engineers",
        why: "Gravity supply from protected reservoirs makes large transmission condition and reliability the supply-side priority.",
      },
      {
        role: "Collection system & infiltration engineers",
        why: "Freeze-thaw damage to an aging network drives persistent infiltration that has to be located and reduced.",
      },
      {
        role: "Treatment process engineers",
        why: "Plant upgrades to meet discharge obligations on the river keep process work steadily funded.",
      },
    ],
    licensure:
      "Connecticut licenses through the State Board of Examiners for Professional Engineers and Land Surveyors within the Department of Consumer Protection, with comity on an NCEES record the standard route. The environmental protection department certifies wastewater operators and the public health department certifies drinking water operators, both by class, and both review plans for works within their remit.",
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    authority: "Albuquerque Bernalillo County Water Utility Authority (ABCWUA)",
    marketNote:
      "Since shifting its primary supply from a depleting aquifer to the San Juan-Chama surface-water project, ABCWUA has focused capital spending on drought resilience and aquifer-recharge infrastructure across the Rio Grande basin.",
    localPrograms: [
      "San Juan-Chama surface water treatment upgrades",
      "Rio Grande aquifer recharge & storage projects",
      "Southside Water Reclamation Plant upgrades",
      "Lead service line inventory & replacement",
      "Drought contingency & reuse infrastructure",
    ],
    agencies: [
      "Albuquerque Bernalillo County Water Utility Authority",
      "New Mexico Environment Department",
      "New Mexico Office of the State Engineer",
      "Middle Rio Grande Conservancy District",
      "US Bureau of Reclamation",
      "New Mexico Interstate Stream Commission",
    ],
    marketDetail: [
      "Albuquerque spent decades drawing down its aquifer faster than it recharged, and the correction has defined the utility ever since: bringing in surface water imported through a transbasin diversion, resting the groundwater, and managing the aquifer as storage rather than as the primary supply. That makes conjunctive use, recharge and water rights administration central to water engineering here in a way treatment alone never is.",
      "Treatment carries its own local wrinkle. Naturally occurring arsenic in the groundwater required a fleet of treatment facilities that many utilities never have to build, and the surface water plant has to handle a silty, seasonally variable river. Compact obligations on the Rio Grande sit behind everything, so how much water may be used and when is a legal question that shapes the engineering.",
    ],
    hiringFocus: [
      {
        role: "Water resources & conjunctive use engineers",
        why: "Balancing imported surface water against aquifer storage is the utility's central long-term engineering task.",
      },
      {
        role: "Treatment process engineers with arsenic removal experience",
        why: "Naturally occurring arsenic required treatment facilities most utilities never have to design or operate.",
      },
      {
        role: "Water rights & compact-aware planning engineers",
        why: "Interstate compact obligations make legal availability a design constraint on any supply proposal.",
      },
      {
        role: "Reuse & recharge engineers",
        why: "Returning treated water to the system and to the aquifer is core to the region's supply strategy.",
      },
    ],
    licensure:
      "New Mexico licenses through the State Board of Licensure for Professional Engineers and Professional Surveyors, and firms offering engineering services must register with the board as well. Comity on an NCEES record is the usual individual route. Operators are certified by the Environment Department by class, and the Office of the State Engineer administers water rights, which is a body of law engineers working supply here are expected to understand.",
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    authority: "Jefferson County Environmental Services / Birmingham Water Works Board",
    marketNote:
      "Jefferson County continues rebuilding its sewer system under a long-running federal consent decree that followed the county's landmark municipal bankruptcy, keeping collection-system rehabilitation work steady across greater Birmingham.",
    localPrograms: [
      "Jefferson County consent decree sewer rehabilitation",
      "Cahaba River & Valley Creek WWTP upgrades",
      "Lead service line replacement",
      "Aging cast-iron water main rehabilitation",
      "Trenchless sewer rehabilitation (CIPP) program",
    ],
    agencies: [
      "Jefferson County Environmental Services",
      "Birmingham Water Works Board",
      "Alabama Department of Environmental Management",
      "Alabama Office of Water Resources",
      "Cahaba River Society",
      "Alabama Water Pollution Control Authority",
    ],
    marketDetail: [
      "Jefferson County's sewer system is the cautionary tale of American water finance: an overflow control program whose cost overwhelmed the county's ability to pay for it. The engineering consequence is that this market is acutely cost conscious, and work here is judged on whether it delivers compliance at a defensible price rather than on technical ambition. Rehabilitation and capacity optimization are preferred to new construction wherever they will do.",
      "The natural setting raises the stakes. The Cahaba is among the most biologically diverse rivers in the country, which brings species protection into discharge permitting, and karst limestone through the valley gives surface water fast routes underground while making infiltration into sewers difficult to trace. The water board supplies a large area beyond the city, so transmission and storage are regional responsibilities.",
    ],
    hiringFocus: [
      {
        role: "Collection system rehabilitation engineers",
        why: "Cost pressure favors rehabilitation and capacity recovery over new construction wherever it will achieve compliance.",
      },
      {
        role: "Treatment process engineers",
        why: "Discharge limits shaped by a biologically sensitive receiving water require careful process design.",
      },
      {
        role: "Infiltration & inflow engineers",
        why: "Karst terrain makes locating and quantifying extraneous flow harder than in ordinary geology.",
      },
      {
        role: "Transmission & distribution engineers",
        why: "Regional water supply beyond the city line makes large transmission and storage a continuing responsibility.",
      },
    ],
    licensure:
      "Alabama licenses through the Board of Licensure for Professional Engineers and Land Surveyors, with comity on an NCEES record the standard individual route and a certificate of authorization required for firms. The Department of Environmental Management certifies operators by grade and reviews construction plans for water and wastewater works, and discharge permitting on sensitive receiving waters carries requirements engineers here are expected to anticipate.",
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    authority: "Memphis Light, Gas and Water (MLGW)",
    marketNote:
      "Memphis draws drinking water from the pristine Memphis Sand Aquifer, one of the largest and cleanest groundwater sources in the country, even as the utility works under a federal consent decree to eliminate sanitary sewer overflows citywide.",
    localPrograms: [
      "Memphis Sand Aquifer wellfield protection",
      "Federal consent decree sewer overflow elimination",
      "T.E. Maxson WWTP upgrades",
      "Lead service line inventory & replacement",
      "Stormwater & Wolf River drainage improvements",
    ],
    agencies: [
      "Memphis Light, Gas and Water",
      "Tennessee Department of Environment and Conservation",
      "Shelby County Health Department",
      "Mississippi River Commission",
      "Memphis and Shelby County Office of Sustainability",
      "Tennessee Board of Water Quality",
    ],
    marketDetail: [
      "Memphis sits on an artesian sand aquifer of exceptional quality, and the city has always treated it very lightly, essentially aerating and disinfecting rather than filtering. That makes protecting the clay layer confining the aquifer the single most important water engineering task in the region: where that layer is thin or breached, surface contamination can reach the supply, and locating and managing those windows is specialist hydrogeological work.",
      "Wastewater and stormwater face the opposite problem. Flat terrain with a high water table makes gravity conveyance marginal and pumping widespread, the Mississippi's stage affects outfalls and drainage for long stretches of the year, and the old collection system takes in substantial infiltration. Seismic risk from the nearby fault zone also applies to buried pipe and plant in ways most utilities never assess.",
    ],
    hiringFocus: [
      {
        role: "Hydrogeologists & source protection engineers",
        why: "Protecting the confining layer over the aquifer is the region's most consequential water engineering task.",
      },
      {
        role: "Pump station & drainage engineers",
        why: "Flat terrain, a high water table and river stage make pumped conveyance and drainage the default.",
      },
      {
        role: "Collection system & infiltration engineers",
        why: "An aging system in high groundwater takes in extraneous flow that has to be located and reduced.",
      },
      {
        role: "Seismic assessment engineers for buried infrastructure",
        why: "Proximity to an active seismic zone makes pipeline and plant survivability a genuine design question.",
      },
    ],
    licensure:
      "Tennessee licenses through the Board of Architectural and Engineering Examiners within the Department of Commerce and Insurance, with comity on an NCEES record the normal route, and engineers covering the wider metro often hold Mississippi or Arkansas registration too. The state environment department certifies operators by grade and reviews plans for public water systems and treatment works.",
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    authority: "City of Omaha Public Works / Metropolitan Utilities District (MUD)",
    marketNote:
      "Omaha is deep into a $2 billion, multi-decade federal consent decree to control combined sewer overflows into the Missouri River, one of the largest per-capita CSO programs in the country.",
    localPrograms: [
      "CSO consent decree tunnel & separation program",
      "Missouri River intake resiliency upgrades",
      "Papillion Creek WRF upgrades",
      "Lead service line replacement",
      "Missouri River WTP capacity expansion",
    ],
    agencies: [
      "Omaha Public Works",
      "Metropolitan Utilities District",
      "Nebraska Department of Environment and Energy",
      "Papio-Missouri River Natural Resources District",
      "US EPA Region 7",
      "Nebraska Department of Health and Human Services",
    ],
    marketDetail: [
      "Omaha carries one of the largest combined sewer overflow programs in the country relative to the size of the ratepayer base paying for it, which makes affordability a design constraint rather than a political aside. Engineers here are expected to justify solutions on cost per unit of overflow reduced, and phased, adaptive approaches are favored over single large structures wherever the compliance schedule allows.",
      "Water supply is split between river intakes and a wellfield drawing induced infiltration from the Platte alluvium, which gives the utility two quite different treatment problems: a turbid, seasonally variable surface source and a groundwater source with its own chemistry. Bitter winters drive main breaks, and the flat floodplain terrain means pumping rather than gravity through much of the service area.",
    ],
    hiringFocus: [
      {
        role: "Combined sewer & affordability-driven program engineers",
        why: "An unusually large program on a modest ratepayer base makes cost effectiveness an explicit design criterion.",
      },
      {
        role: "Water treatment process engineers",
        why: "Two dissimilar sources, surface river and alluvial groundwater, require distinct treatment approaches.",
      },
      {
        role: "Pump station & conveyance engineers",
        why: "Flat floodplain terrain makes pumped conveyance widespread across the service area.",
      },
      {
        role: "Distribution renewal engineers",
        why: "Severe winters drive main breaks and make prioritized replacement a continuing program.",
      },
    ],
    licensure:
      "Nebraska licenses through the Board of Engineers and Architects, with comity on an NCEES record the usual individual route and a certificate of authorization required for firms. The Department of Environment and Energy certifies operators by grade and reviews construction plans for water and wastewater works, and because the metro crosses into Iowa, projects there fall under a separate state agency.",
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    authority: "City of Boise Public Works",
    marketNote:
      "Boise's newly rebuilt Lander Street Water Renewal Facility has become a testbed for indirect potable reuse concepts as the fast-growing Treasure Valley looks for new supply options beyond the Boise River.",
    localPrograms: [
      "Lander Street Water Renewal Facility upgrades",
      "Boise River water quality & reuse feasibility",
      "New growth-corridor transmission main extensions",
      "Lead service line inventory & replacement",
      "Groundwater recharge & aquifer storage projects",
    ],
    agencies: [
      "City of Boise Public Works",
      "Idaho Department of Environmental Quality",
      "Idaho Department of Water Resources",
      "Veolia Water Idaho",
      "Boise River Enhancement Network",
      "Idaho Water Resource Board",
    ],
    marketDetail: [
      "Boise runs the largest direct-use geothermal district heating system in the country, drawing hot water from beneath the city to heat downtown buildings and returning it to the aquifer. That makes the utility a geothermal operator as well as a water and wastewater one, and it puts aquifer management, injection and thermal balance into the local engineering vocabulary in a way found almost nowhere else in America.",
      "The conventional water problem is discharge. The Boise River is a relatively small receiving water for a growing city, and phosphorus limits are strict enough that the utility has invested heavily in advanced nutrient removal and in recycled water to keep flow out of the river altogether. Meanwhile a dense pre-existing irrigation canal network runs through the developing valley and has to be engineered around rather than replaced.",
    ],
    hiringFocus: [
      {
        role: "Nutrient removal process engineers",
        why: "Strict phosphorus limits on a small receiving river make advanced treatment the utility's central technical challenge.",
      },
      {
        role: "Water reuse & recycled water engineers",
        why: "Keeping flow out of the river has made reuse a core part of the compliance strategy.",
      },
      {
        role: "Geothermal & aquifer management engineers",
        why: "A direct-use geothermal district system makes injection and thermal balance a local specialism.",
      },
      {
        role: "Collection system & growth planning engineers",
        why: "Rapid valley growth requires conveyance and capacity extended ahead of development.",
      },
    ],
    licensure:
      "Idaho licenses through the Board of Licensure of Professional Engineers and Professional Land Surveyors, with comity on an NCEES record the normal individual route and a certificate of authorization required for firms. The Department of Environmental Quality certifies operators by class and reviews plans for public water and wastewater systems, while the Department of Water Resources administers water rights, which govern both surface diversions and geothermal use.",
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    authority: "Narragansett Bay Commission (NBC)",
    marketNote:
      "The Narragansett Bay Commission's three-phase CSO tunnel program has dramatically cut sewage overflows into the bay over the past two decades, and Phase III completion keeps tunnel and pump-station work steady across greater Providence.",
    localPrograms: [
      "CSO tunnel program Phase III completion",
      "Bucklin Point & Field's Point WWTP upgrades",
      "Narragansett Bay water quality monitoring infrastructure",
      "Lead service line replacement",
      "Scituate Reservoir watershed protection",
    ],
    agencies: [
      "Narragansett Bay Commission",
      "Providence Water Supply Board",
      "Rhode Island Department of Environmental Management",
      "Rhode Island Department of Health",
      "Rhode Island Infrastructure Bank",
      "Coastal Resources Management Council",
    ],
    marketDetail: [
      "The bay sets the wastewater agenda. Low oxygen conditions in the upper bay led to seasonal nitrogen limits well beyond conventional secondary treatment, so the region's plants operate advanced nutrient removal and are judged on measured bay response rather than on permit compliance alone. That gives local process engineers experience with nitrogen removal that many larger markets lack.",
      "Alongside it, a deep storage tunnel system built to control combined sewer overflows has been extended in phases across the urban core, concentrating tunneling, drop shaft and pump station expertise locally. Drinking water comes from a large protected reservoir supplying most of the state through aging transmission mains, which makes source protection and transmission condition the supply-side priorities.",
    ],
    hiringFocus: [
      {
        role: "Nitrogen removal process engineers",
        why: "Seasonal bay nitrogen limits require advanced treatment beyond conventional secondary standards.",
      },
      {
        role: "Tunnel & deep conveyance engineers",
        why: "A phased storage tunnel program has concentrated underground hydraulic expertise in the region.",
      },
      {
        role: "Transmission main & source protection engineers",
        why: "A single reservoir supplying most of the state makes transmission condition a statewide reliability question.",
      },
      {
        role: "Coastal & receiving water engineers",
        why: "Discharge design is judged against measured bay conditions, linking process work to environmental monitoring.",
      },
    ],
    licensure:
      "Rhode Island licenses through the Board of Registration for Professional Engineers, with comity on an NCEES record the standard route, and most engineers working the wider market also hold Massachusetts or Connecticut registration. The environmental management department certifies wastewater operators and the health department certifies drinking water operators, both by class, and coastal work adds a separate state permitting body.",
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    authority: "Buffalo Sewer Authority",
    marketNote:
      "Buffalo Sewer Authority's Rain Check green-infrastructure program, developed under a state consent order, is retrofitting the city's aging combined sewer system while Great Lakes water-quality rules push new nutrient-control investment.",
    localPrograms: [
      "Rain Check green infrastructure retrofit program",
      "Bird Island WWTP upgrades",
      "Combined sewer overflow reduction projects",
      "Lead service line replacement (aging housing stock)",
      "Niagara River & Lake Erie intake protection",
    ],
    agencies: [
      "Buffalo Sewer Authority",
      "Buffalo Water",
      "New York State Department of Environmental Conservation",
      "New York State Department of Health",
      "Erie County Department of Environment and Planning",
      "Great Lakes Commission",
    ],
    marketDetail: [
      "Buffalo's overflow control plan leans on green infrastructure more heavily than most, because the city has land available where denser cities do not and because storage alone would be unaffordable. That makes surface stormwater design, vacant lot conversion and the modeling needed to prove capture performance a much larger share of the local water engineering workload than the plan's size alone would suggest.",
      "Lake Erie and the Niagara supply the drinking water, which makes source quality generally good but intake reliability, ice and seasonal algal conditions real operational concerns. The buried network is old, the freeze-thaw climate is hard on it, and lead service line replacement adds a sustained distribution program on top of an already heavy rehabilitation need.",
    ],
    hiringFocus: [
      {
        role: "Stormwater & green infrastructure engineers",
        why: "Green approaches carry an unusually large share of the region's overflow control plan.",
      },
      {
        role: "Hydraulic modelers",
        why: "Demonstrating capture performance from distributed green infrastructure is a modeling problem first.",
      },
      {
        role: "Distribution renewal & lead service line engineers",
        why: "An old network under replacement obligations makes prioritized renewal a sustained program.",
      },
      {
        role: "Collection system rehabilitation engineers",
        why: "Freeze-thaw damage and infiltration in an aging combined system keep rehabilitation continuously funded.",
      },
    ],
    licensure:
      "New York licenses through the State Education Department's Office of the Professions, and most out-of-state PEs transfer by comity on an NCEES record. The Department of Health certifies water treatment and distribution operators and the Department of Environmental Conservation certifies wastewater operators, both by grade, and because the source is a Great Lake, the interstate compact on withdrawals forms part of the regulatory context.",
  },
];

export function getWaterCity(slug: string): WaterCity | undefined {
  return WATER_CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every water/wastewater city page ────────────────

export const WATER_EXPERTISE = [
  "Water & Wastewater Treatment Plant Design",
  "Water Distribution & Collection Systems",
  "Stormwater Management & Drainage Design",
  "Hydraulic & Hydrologic Modeling",
  "Water/Wastewater Process Engineering",
  "Utility Infrastructure Rehabilitation",
  "Environmental Compliance & Permitting (NPDES)",
  "Construction Engineering & Inspection (CEI)",
];

export const WATER_SKILLS = [
  "AutoCAD Civil 3D",
  "Bentley WaterGEMS",
  "Bentley SewerGEMS",
  "Bentley HAMMER (surge analysis)",
  "EPANET",
  "HEC-RAS / HEC-HMS",
  "InfoWorks ICM",
  "BioWin (process modeling)",
  "ArcGIS / utility GIS",
  "Cityworks / Lucity (asset management)",
  "Bluebeam Revu",
  "Professional Engineer (PE) license",
  "Grade IV Water/Wastewater Operator certification",
  "NPDES permitting fluency",
  "SCADA & instrumentation (Ignition, Wonderware)",
  "Pump station design",
  "Membrane & UV treatment systems",
  "Trenchless rehabilitation (CIPP) methods",
  "Confined space / collection system safety (OSHA)",
  "State DEP/DEQ regulatory fluency",
];

export const WATER_ROLES = [
  "Water/Wastewater Project Engineer (PE)",
  "Senior Process Engineer",
  "Water Resources Engineer",
  "Utility / Pipeline Design Engineer",
  "Water/Wastewater Plant Operations Manager",
  "Environmental Compliance Engineer",
  "Construction Engineer & Inspector (CEI)",
  "SCADA / Controls Engineer",
  "Water Resources Project Manager",
  "Director of Water/Wastewater Engineering",
];

export const WATER_SALARIES = [
  { role: "Process Designer / CAD Technician", range: "$58,000 – $80,000" },
  { role: "Water/Wastewater Engineer (EIT)", range: "$68,000 – $92,000" },
  { role: "Treatment Process Engineer", range: "$90,000 – $130,000" },
  { role: "Plant Operations & Maintenance Manager", range: "$95,000 – $135,000" },
  { role: "Licensed PE (Mid-Level)", range: "$100,000 – $145,000" },
  { role: "Collection & Conveyance Engineer (PE)", range: "$105,000 – $145,000" },
  { role: "Senior Project Manager", range: "$140,000 – $185,000+" },
  { role: "Director of Water/Wastewater Engineering", range: "$175,000 – $245,000+" },
];

export const WATER_WHY = [
  { title: "National Talent Pipeline", body: "Access to a vast database of 50,000+ pre-vetted engineering professionals." },
  { title: "Multi-State Licensing Expertise", body: "We understand NCEES comity and the complexities of multi-state PE licensure." },
  { title: "Passive Candidate Acquisition", body: "Our recruiters reach high-performers who are not actively on job boards." },
  { title: "Scalable Staffing Solutions", body: "From a single PE to an entire treatment-plant design team for a multi-year program." },
  { title: "Regulatory & Codes Fluency", body: "Fluency in Clean Water Act / NPDES permitting, state DEP/DEQ requirements, and SRF-funded project compliance." },
];
