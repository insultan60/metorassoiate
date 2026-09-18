/* The award programs our clients' projects compete in.
 *
 * Metro does not enter these — a recruiting firm can't win an engineering
 * award. What this list is for: the firms we staff do enter them, and the
 * language of the industry ("ACEC Engineering Excellence", "ASHRAE
 * Technology Award", "ENR Best Projects") is how hiring managers and
 * candidates describe the work they want to be part of. Naming the programs
 * on the discipline hubs puts that vocabulary on the page, in context,
 * pointed at the official source.
 *
 * Rules this file follows, and should keep following:
 *   1. No claim that Metro or any named client won anything. If the client
 *      gives us verified wins, those belong here as facts with a year — a
 *      real win beats a list of programs every time.
 *   2. `logo` holds the ORGANIZATION's own mark, taken from that
 *      organization's own site, shown beside a link to the program it runs
 *      and under a notice naming the owner and disclaiming affiliation —
 *      nominative use, which is what keeps it defensible. A WINNER badge is
 *      a different thing entirely and must never appear here: ENR and ACEC
 *      license those to actual winners, and Metro cannot win an engineering
 *      award. Programs with no file fall back to a typographic tile built
 *      from `abbr`, which is our own artwork and carries no license at all.
 *   3. Every URL is the organization's own award page, checked before it
 *      was added. Several of these hosts return 403 to scripted requests
 *      (Cloudflare) — that is bot filtering, not a dead link.
 *   4. `categories` is ILLUSTRATIVE, never exhaustive. These programs
 *      restructure their category lists between years, and a stale list
 *      presented as complete is worse than a short one presented as a
 *      sample — so the detail page renders it under "Categories include"
 *      and sends the reader to the organization for the current rules.
 *   5. `hiringSignal` is Metro's own opinion, not the organization's, and
 *      the page labels it as ours. Everything else on this page is either
 *      a fact about the program or a link to the body that runs it.
 */

export type Discipline =
  | "civil-engineering-recruiter"
  | "bridge-structural-recruiter"
  | "cei-inspection-recruiter"
  | "mep-engineering-recruiter"
  | "municipal-engineering-recruiter"
  | "water-wastewater-recruiter"
  | "transportation-recruiter"
  | "project-management-recruiter";

export type AwardProgram = {
  name: string;
  org: string;
  /** URL segment for the program's own page under /engineering-awards. */
  slug: string;
  /** Short mark for the logo tile — the acronym the industry actually says. */
  abbr: string;
  /** Path under /public/awards to the organization's own logo file, once we
      hold permission to display it. Absent = the typographic tile is used
      instead, which is never a licensing problem. See public/awards/README. */
  logo?: string;
  url: string;
  /** One line: what the program actually recognises. */
  what: string;
  /** How far it reaches — the state-level routes are the ones most firms win. */
  reach: string;
  /** "all" = every discipline we recruit for. */
  disciplines: Discipline[] | "all";
  /** The supplied file is a reverse (white) variant of the mark and
      disappears on a white tile — render it on a dark one instead. Better
      than recolouring, which would alter the trademark itself. */
  onDark?: true;
  /** Who actually submits the entry. */
  whoEnters: string;
  /** The steps an entry passes through, first to last. */
  route: string[];
  /** A SAMPLE of what it judges — see rule 4 above. */
  categories: string[];
  /** Metro's own read on what this signals when it appears on a CV. */
  hiringSignal: string;
  /** The roles we recruit whose work ends up inside an entry like this. */
  roles: string[];
};

/** One program by its URL segment, or undefined. */
export function awardBySlug(slug: string): AwardProgram | undefined {
  return AWARD_PROGRAMS.find((a) => a.slug === slug);
}

export const AWARD_PROGRAMS: AwardProgram[] = [
  {
    name: "Engineering Excellence Awards",
    slug: "acec-engineering-excellence-awards",
    org: "ACEC",
    abbr: "ACEC",
    logo: "/awards/acec.png",
    url: "https://www.acec.org/awards/engineering-excellence-awards/",
    what: "The engineering profession's flagship project competition, judged on innovation, complexity and social value. Categories include Building/Technology Systems, Energy, Water and Transportation.",
    reach: "State → national",
    disciplines: "all",
    whoEnters: "The engineering firm that did the design work, entering through its ACEC member organization. The client is normally named on the entry alongside the firm.",
    route: [
      "Enter through the state or metropolitan ACEC organization where the project sits",
      "Win at that level to be put forward nationally",
      "National judging by an independent jury of industry, government and academic experts",
      "Honor Awards and Grand Awards announced at the national gala",
      "The single strongest entry takes the Grand Conceptor Award",
    ],
    categories: [
      "Building/Technology Systems",
      "Structural Systems",
      "Transportation",
      "Water and Wastewater",
      "Water Resources",
      "Environmental",
      "Energy",
      "Studies, Research and Consulting Engineering Services",
    ],
    hiringSignal: "An Engineering Excellence entry is a firm-level credential, but the people who built it are named on it. When a candidate can talk through a project that went up for it, you are usually talking to someone who held real design responsibility rather than someone who supported it.",
    roles: [
      "Project Engineer",
      "Senior Project Manager",
      "Design Lead",
      "Discipline Lead",
    ],
  },
  {
    name: "ACEC state & metro member organizations",
    slug: "acec-state-member-organizations",
    org: "ACEC",
    abbr: "ACEC",
    logo: "/awards/acec.png",
    url: "https://www.acec.org/member-center/get-involved/mo-state-sites/",
    what: "National entries must come up through one of 51 state and metropolitan organizations, so every state runs its own Engineering Excellence competition first.",
    reach: "All 50 states + DC",
    disciplines: "all",
    whoEnters: "Member firms of that state or metro organization. Membership is the entry requirement, which is why a firm's ACEC affiliation is worth knowing.",
    route: [
      "Join the ACEC organization for the state where the work is",
      "Enter that organization's own Engineering Excellence competition",
      "State winners are forwarded to the national competition",
    ],
    categories: [
      "Each organization runs its own category list, usually mirroring the national one",
    ],
    hiringSignal: "This is the practical answer to whether an award is winnable at all. A regional firm competing nationally from a standing start rarely places; the same firm entering its own state competition frequently does. Candidates who have been through a state round know the process, which matters if your firm has never entered.",
    roles: [
      "Project Engineer",
      "Business Development Lead",
      "Principal",
    ],
  },
  {
    name: "Best Projects & Best of the Best",
    slug: "enr-best-projects",
    org: "ENR",
    abbr: "ENR",
    logo: "/awards/enr.png",
    url: "https://www.enr.com/bestprojects/",
    what: "Regional project awards across every state, DC and Puerto Rico, judged in 18 categories from airport/transit to sports/entertainment, plus special awards for safety and sustainability. Regional winners advance to the national round.",
    reach: "Regional → national",
    disciplines: "all",
    whoEnters: "Any member of the project team (owner, designer or contractor) can submit, and entries name the whole team.",
    route: [
      "Enter in one of ENR's five regional editions",
      "An independent jury of design and construction leaders judges each region against five criteria, safety, innovation and teamwork among them",
      "Category winners are entered automatically into the national round",
      "A national jury picks Best of the Best from the regional winners",
    ],
    categories: [
      "Airport/Transit",
      "Highway/Bridge",
      "Water/Environment",
      "Energy/Industrial",
      "Health Care",
      "Specialty Construction",
      "Sports/Entertainment",
      "Excellence in Safety (special award)",
      "Excellence in Sustainability (special award)",
    ],
    hiringSignal: "ENR is read across the industry, so a Best Projects win is the award most likely to be recognized by someone outside the winning discipline. For a candidate it is also the easiest credential to verify. The citations are public and name the firms involved.",
    roles: [
      "Construction Manager",
      "Resident Engineer",
      "Project Executive",
      "Design Manager",
    ],
  },
  {
    name: "Outstanding Civil Engineering Achievement (OCEA)",
    slug: "asce-outstanding-civil-engineering-achievement",
    org: "ASCE",
    abbr: "ASCE",
    logo: "/awards/asce.svg",
    url: "https://www.asce.org/career-growth/awards-and-honors/outstanding-civil-engineering-achievement-award",
    what: "Running since 1960, ASCE's top project honour for civil engineering skill and contribution to society.",
    reach: "National",
    disciplines: ["civil-engineering-recruiter", "bridge-structural-recruiter"],
    whoEnters: "Nominations come from ASCE sections, branches and member firms, for a completed project.",
    route: [
      "Nomination submitted to ASCE",
      "Shortlist of finalists announced",
      "One project named the year's Outstanding Civil Engineering Achievement",
    ],
    categories: [
      "Judged as a whole rather than by category, on contribution to society, engineering skill and resourcefulness",
    ],
    hiringSignal: "OCEA goes to one project a year nationally, so the pool of people who have worked on a winner is genuinely small. Treat it as a strong signal, and verify it. It is specific enough to check.",
    roles: [
      "Principal Civil Engineer",
      "Structural Lead",
      "Program Manager",
    ],
  },
  {
    name: "America's Transportation Awards",
    slug: "americas-transportation-awards",
    org: "AASHTO",
    abbr: "AASHTO",
    logo: "/awards/aashto.svg",
    url: "https://americastransportationawards.org/",
    what: "State DOT projects judged on quality of life, operations excellence, innovation and safety, regional rounds feed a national Top 12.",
    reach: "Regional → national",
    disciplines: [
      "civil-engineering-recruiter",
      "bridge-structural-recruiter",
      "cei-inspection-recruiter",
    ],
    onDark: true,
    whoEnters: "State departments of transportation submit their own completed projects. The consultants and contractors who delivered them are named in the entry.",
    route: [
      "State DOT submits into its AASHTO region",
      "Regional judging in each competition category",
      "Regional winners form a national Top 12",
      "Grand Prize and a People's Choice award decided from the Top 12",
    ],
    categories: [
      "Quality of Life / Community Development",
      "Operations Excellence",
      "Best Use of Innovation",
      "Safety",
    ],
    hiringSignal: "This one is about who a candidate has worked for as much as what they built. Someone whose project went up through a state DOT knows how that agency reviews, approves and pays, which is most of what makes a DOT hire productive in the first six months.",
    roles: [
      "Transportation Engineer",
      "CEI Inspector",
      "Resident Engineer",
      "Design-Build Coordinator",
    ],
  },
  {
    name: "Prize Bridge Awards",
    slug: "aisc-prize-bridge-awards",
    org: "AISC / NSBA",
    abbr: "AISC",
    logo: "/awards/aisc.webp",
    url: "https://www.aisc.org/bridges/awards/prize-bridge-awards/",
    what: "The steel industry's highest design honour for bridges, awarded since 1928.",
    reach: "National",
    disciplines: ["bridge-structural-recruiter", "civil-engineering-recruiter"],
    onDark: true,
    whoEnters: "Submitted for completed steel bridges in the United States, typically by the designer or the fabricator.",
    route: [
      "Entry submitted to AISC/NSBA for a completed American steel bridge",
      "Judged against others in its category, which are defined by bridge size and function",
      "Prize Bridge and merit awards announced",
      "Every eligible project also runs for Bridge of the Year, three finalists present at the World Steel Bridge Symposium and the audience votes",
    ],
    categories: [
      "Long Span",
      "Medium Span",
      "Short Span",
      "Movable Span",
      "Reconstruction",
      "Special Purpose",
    ],
    hiringSignal: "Running since 1928, which makes it the oldest credential on this list. Steel bridge design is a narrow specialism with a small national talent pool, a Prize Bridge project on a CV is one of the few reliable ways to identify someone who has actually done it rather than adjacent work.",
    roles: [
      "Bridge Design Engineer",
      "Structural Engineer",
      "Bridge Inspection Lead",
    ],
  },
  {
    name: "Public Works Project of the Year",
    slug: "apwa-public-works-project-of-the-year",
    org: "APWA",
    abbr: "APWA",
    url: "https://www.apwa.org/award/public-works-project-of-the-year-award/",
    what: "Recognises the agency, the consulting engineer and the contractor together, in four cost divisions and five categories.",
    reach: "Chapter → national",
    disciplines: [
      "municipal-engineering-recruiter",
      "civil-engineering-recruiter",
      "cei-inspection-recruiter",
    ],
    whoEnters: "Entered jointly. The agency that owns the work, the consulting engineer and the contractor are all recognized together. The project has to be developed, owned and maintained by a public agency, and substantially complete and in use within the two calendar years before nomination. A separate award runs for small cities and rural communities.",
    route: [
      "Enter through an APWA chapter",
      "Chapter winners advance to national judging",
      "National awards given within each cost division and category",
    ],
    categories: [
      "Structures (municipal buildings, parks)",
      "Transportation",
      "Environment (treatment, recycling, landfill reclamation, sewers)",
      "Historical Restoration/Preservation",
      "Disaster or Emergency Construction/Repair",
      "Small Cities/Rural Communities (separate award)",
    ],
    hiringSignal: "The only program here that formally credits the agency, the engineer and the contractor as one team. For municipal hiring that framing is the point: it identifies engineers who can work inside a public agency's constraints rather than around them.",
    roles: [
      "Municipal Engineer",
      "City Engineer",
      "Public Works Director",
      "Construction Manager",
    ],
  },
  {
    name: "Technology Awards",
    slug: "ashrae-technology-awards",
    org: "ASHRAE",
    abbr: "ASHRAE",
    logo: "/awards/ashrae.png",
    url: "https://www.ashrae.org/membership/honors-and-awards/technology-awards-program",
    what: "HVAC and building-systems performance in real, occupied buildings, commercial, health care, education, industrial and residential categories.",
    reach: "Chapter → region → society",
    disciplines: ["mep-engineering-recruiter"],
    whoEnters: "The primary entrant must be a current ASHRAE member who had a significant role in the project, and the building must have been in successful operation for at least a year at the time of entry, so entries report measured performance, not a design-stage model.",
    route: [
      "Enter at ASHRAE chapter level",
      "Chapter winners advance to the region",
      "Regional winners advance to Society level",
    ],
    categories: [
      "Commercial Buildings",
      "Institutional Buildings (education)",
      "Health Care Facilities",
      "Industrial Facilities",
      "Public Assembly",
      "Residential",
    ],
    hiringSignal: "The measured-performance requirement is what makes this one useful. An ASHRAE Technology Award means the building was instrumented and the numbers held up after occupancy, so the engineer behind it has had to answer for real performance, not a design-stage energy model.",
    roles: [
      "Senior MEP Engineer",
      "Mechanical Design Engineer",
      "Commissioning Engineer",
      "Energy Modeller",
    ],
  },
  {
    name: "Illumination Awards",
    slug: "ies-illumination-awards",
    org: "IES",
    abbr: "IES",
    logo: "/awards/ies.png",
    url: "https://ia.ies.org/",
    what: "Lighting design and controls, interior, outdoor, energy & environmental, and control innovation.",
    reach: "Section → international",
    disciplines: ["mep-engineering-recruiter"],
    whoEnters: "Lighting designers, architects and engineers submit completed installations.",
    route: [
      "Enter through an IES section",
      "Section-level judging",
      "Awards of Merit advance to international judging for the Award of Distinction and the Edwin F. Guth Memorial Awards",
    ],
    categories: [
      "Interior Lighting Design",
      "Outdoor Lighting Design",
      "Energy and Environmental Design",
      "Control Innovation",
    ],
    hiringSignal: "Lighting design sits between the electrical engineer and the architect, and few CVs make clear which side of that line someone actually works on. An Illumination Award does. It is given for design intent, not for the electrical installation.",
    roles: [
      "Lighting Designer",
      "Electrical Engineer",
      "MEP Design Lead",
    ],
  },
  {
    name: "Project Excellence Awards",
    slug: "neca-project-excellence-awards",
    org: "NECA",
    abbr: "NECA",
    url: "https://www.necanet.org/about-neca/membership/awards-recognition",
    what: "Electrical construction across 13 categories, from design-build and health care to substations and EV infrastructure.",
    reach: "National",
    disciplines: ["mep-engineering-recruiter"],
    whoEnters: "NECA contractor members, for completed electrical construction projects.",
    route: [
      "NECA member contractor submits a completed project",
      "Judged within its category",
      "Winners announced at the NECA convention",
    ],
    categories: [
      "Design-Build",
      "Health Care",
      "Substations",
      "Electric Vehicle Infrastructure",
      "Integrated Building Systems",
      "Transportation",
    ],
    hiringSignal: "This is a contractor-side award, which makes it useful for a different reason than the others: it maps the firms doing the installation work your MEP designs land on. Candidates who have worked across that boundary are the ones whose drawings get built without a fight.",
    roles: [
      "Electrical Project Manager",
      "Electrical Engineer",
      "Field Superintendent",
    ],
  },
  {
    name: "MEP Giants",
    slug: "mep-giants",
    org: "Consulting-Specifying Engineer",
    abbr: "CSE",
    logo: "/awards/cse.svg",
    url: "https://www.csemag.com/events-and-awards/mep-giants/",
    what: "The annual ranking of North America's 100 largest MEP and fire-protection engineering firms.",
    reach: "North America",
    disciplines: ["mep-engineering-recruiter"],
    whoEnters: "MEP and fire-protection engineering firms submit their own figures during the annual survey. The list is ordered by MEP design revenue specifically, not by total firm revenue, which is why a large multidisciplinary firm can rank below a smaller specialist one.",
    route: [
      "Firm submits its figures during the annual survey window",
      "Consulting-Specifying Engineer publishes the ranked list of 100",
    ],
    categories: [
      "A ranking rather than a judged award, ordered by MEP engineering revenue",
    ],
    hiringSignal: "Not an award at all, and worth saying so plainly: it is a size ranking. It is on this page because it is the fastest way to see which firms are large enough to have the department a candidate says they ran, and which are not.",
    roles: [
      "MEP Practice Lead",
      "Director of Engineering",
      "Principal",
    ],
  },
  {
    name: "40 Under 40",
    slug: "cse-40-under-40",
    org: "Consulting-Specifying Engineer",
    abbr: "CSE",
    logo: "/awards/cse.svg",
    url: "https://www.csemag.com/events-and-awards/40-under-40/",
    what: "Individual recognition for mechanical, electrical, commissioning, fire/life-safety and energy engineers under 40, worth knowing about when you're hiring one.",
    reach: "National",
    disciplines: ["mep-engineering-recruiter"],
    whoEnters: "Individuals under 40, nominated by a colleague or employer, in mechanical, electrical, commissioning, fire/life-safety or energy engineering.",
    route: [
      "Nomination submitted during the annual window",
      "Editorial selection of 40 individuals",
      "Published as that year's class",
    ],
    categories: [
      "Mechanical",
      "Electrical",
      "Commissioning",
      "Fire and Life Safety",
      "Energy",
    ],
    hiringSignal: "The only individual award on this page, and therefore the only one that names the person rather than the project. Each published class is a shortlist of MEP engineers who were already visible enough to be nominated, which is exactly the group that is hardest to reach through a job advert.",
    roles: [
      "Senior MEP Engineer",
      "Mechanical Engineer",
      "Commissioning Engineer",
      "Fire Protection Engineer",
    ],
  },
  {
    name: "WEF awards & utility recognition",
    slug: "wef-awards",
    org: "Water Environment Federation",
    abbr: "WEF",
    logo: "/awards/wef.png",
    url: "https://www.wef.org/membership--community/awards-recognition/service-awards/",
    what: "More than 30 categories across collection systems, treatment innovation, plant operations and Utility of the Future Today.",
    reach: "Member association → national",
    disciplines: ["water-wastewater-recruiter", "municipal-engineering-recruiter"],
    whoEnters: "Entered through WEF member associations, by utilities, consulting engineers and individual members depending on the category.",
    route: [
      "Enter through the state or regional WEF member association",
      "Member association winners advance to national recognition",
    ],
    categories: [
      "Collection Systems",
      "Treatment Plant Innovation",
      "Plant Operations",
      "Utility of the Future Today",
      "Laboratory Analyst Excellence",
      "Public Communication and Outreach",
    ],
    hiringSignal: "Water and wastewater hiring turns on process knowledge that is difficult to test in an interview. WEF recognition is one of the few external markers that separates someone who has commissioned and operated a plant from someone who has only designed one.",
    roles: [
      "Process Engineer",
      "Wastewater Treatment Designer",
      "Utility Engineer",
      "Collection Systems Engineer",
    ],
  },
  {
    name: "Local Leadership Awards",
    slug: "usgbc-local-leadership-awards",
    org: "USGBC",
    abbr: "USGBC",
    logo: "/awards/usgbc.svg",
    url: "https://www.usgbc.org/local-engagements/awards",
    what: "LEED and high-performance building work, recognized at project and individual level.",
    reach: "State & regional",
    disciplines: [
      "mep-engineering-recruiter",
      "municipal-engineering-recruiter",
      "water-wastewater-recruiter",
    ],
    whoEnters: "Nominated within a USGBC community, projects, organizations and individuals are all eligible depending on the category.",
    route: [
      "Nomination within the local USGBC community",
      "Selection at state or regional level",
    ],
    categories: [
      "Project of the Year",
      "Organizational Leadership",
      "Individual Leadership",
      "Community Impact",
    ],
    hiringSignal: "LEED credentials are common on CVs and mean less than they used to. Recognition through a USGBC community is a step above the credential itself: it means someone else in that market put the person's name forward.",
    roles: [
      "Sustainability Lead",
      "MEP Engineer",
      "Municipal Project Manager",
    ],
  },
];

/** Programs relevant to one discipline hub, cross-discipline ones first. */
export function awardsFor(discipline: Discipline): AwardProgram[] {
  return AWARD_PROGRAMS.filter(
    (a) => a.disciplines === "all" || a.disciplines.includes(discipline),
  );
}

/* The state-by-state route, spelled out.
 *
 * This is the practical answer to "is there an award my firm can actually
 * win?" — ACEC requires national entries to come through a state or metro
 * organization, so all 51 of these run their own competition. Written out
 * rather than left as "check the directory" because the state-name form is
 * how people search for it. */
export const ACEC_STATES: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

/** The 51st is a metro organization rather than a state. */
export const ACEC_METRO = "Metropolitan Washington";

/** ENR's regional editions — the second nationwide route, by region. */
export const ENR_REGIONS: string[] = [
  "California", "Northwest", "Southwest", "Intermountain", "Colorado/Wyoming",
  "Midwest", "Texas & Louisiana", "Southeast", "MidAtlantic",
  "New York/New Jersey", "New England",
];

/* One entry per organization, in the order they first appear — the logo wall
   on /engineering-awards. Derived rather than hand-listed so a new program
   can't leave the wall out of date. */
type AwardOrg = { org: string; abbr: string; logo?: string; onDark?: true; url: string };

export const AWARD_ORGS: AwardOrg[] = AWARD_PROGRAMS.reduce<AwardOrg[]>((acc, a) => {
  if (!acc.some((o) => o.abbr === a.abbr)) {
    acc.push({
      org: a.org,
      abbr: a.abbr,
      ...(a.logo ? { logo: a.logo } : {}),
      ...(a.onDark ? { onDark: true as const } : {}),
      url: a.url,
    });
  }
  return acc;
}, []);
