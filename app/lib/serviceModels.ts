/* How a firm engages us, written once per discipline.
 *
 * WHY THIS FILE EXISTS
 *
 * Search Console shows the gap plainly: this site ranks on "civil
 * engineering recruiters" language and almost nowhere on the words
 * procurement and HR actually type. "civil engineering staffing" (429
 * impressions, 0 clicks), "civil engineering headhunters" (182),
 * "recruitment agency" and "placement agency" variants (400+ between them).
 * The hubs never used those words in a heading or in body copy, so there was
 * nothing for those queries to match beyond a keywords meta tag, which no
 * engine has read for a decade.
 *
 * WHY IT IS NOT ONE SHARED PARAGRAPH
 *
 * The obvious fix is one component with the same three paragraphs on eight
 * pages. That is the mistake this codebase already paid for on the shallow
 * city pages: near-identical blocks that Google crawls and declines to index.
 * So every discipline gets its own copy, and the differences are real ones.
 * CEI leads with contract staffing because the work is contracted per
 * construction program; municipal leads with confidentiality because those
 * searches become public record.
 *
 * WHAT IT WILL NOT SAY
 *
 * No fee percentage. Fees are quoted per search, and inventing "20 to 25% of
 * first-year base" to catch a long-tail query would put a number on the site
 * that nobody here agreed to. What it does state is what the site already
 * states elsewhere: the employer pays, the candidate never does, and nothing
 * is owed until a hire starts.
 *
 * Contract staffing is described honestly. The FAQ says this firm is
 * predominantly permanent placement with CEI as the partial exception, and
 * these paragraphs say the same thing rather than selling a staff
 * augmentation desk that does not exist.
 */

export type EngagementModel = {
  title: string;
  body: string;
};

export type EngagementSet = {
  /** The <h2>. Carries the discipline plus the commercial synonym. */
  heading: string;
  /** One paragraph under the heading, before the three models. */
  intro: string;
  models: EngagementModel[];
};

/** Keyed by route segment, so every discipline page can find its own set. */
export type EngagementSegment =
  | "infrastructure-recruiter"
  | "civil-engineering-recruiter"
  | "mep-engineering-recruiter"
  | "bridge-structural-recruiter"
  | "water-wastewater-recruiter"
  | "cei-inspection-recruiter"
  | "municipal-engineering-recruiter"
  | "transportation-recruiter"
  | "project-management-recruiter";

export const ENGAGEMENT_MODELS: Record<EngagementSegment, EngagementSet> = {
  "infrastructure-recruiter": {
    heading: "Infrastructure staffing, program search and construction-phase teams",
    intro:
      "A capital program does not hire one kind of engineer. It hires a different kind at each phase, and what decides the engagement is whether the need outlasts the program that created it.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "Design leads, project engineers and licensed PEs hired onto your payroll across roadway, structures, water and site work. On publicly funded work the filter that predicts performance is whose standards someone has already delivered under, because that is what shortens review.",
      },
      {
        title: "Executive search and headhunting",
        body: "Program directors, infrastructure practice leaders and the people who hold an agency relationship. Approached one at a time and in confidence, because a market where everyone has sat across the same table notices an open posting immediately.",
      },
      {
        title: "Construction-phase and contract teams",
        body: "Inspection and construction management staffed to the length of a contract, which is how the industry procures CEI. Everything upstream of the letting is recruited permanently, and we will say when a program does not justify a permanent seat.",
      },
    ],
  },

  "civil-engineering-recruiter": {
    heading: "Civil engineering staffing, headhunting and direct placement",
    intro:
      "Firms arrive at a civil engineering staffing agency with three different problems, and which route fits depends on whether the gap is a seat, a leader or a deadline. In all three the employer pays the fee, the engineer never does, and nothing is owed until a hire starts.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "The bulk of what we do. Site civil designers, roadway and drainage engineers, licensed PEs and project managers, hired onto your own payroll. The search runs against the standard the role actually sets, licensure, software and code fluency, rather than against whatever a resume database returns.",
      },
      {
        title: "Executive search and headhunting",
        body: "Practice leaders, chief engineers and partner-track PEs are not applying to anything. Those searches are run confidentially, by approaching named people at named firms, which is the part that separates an engineering headhunter from a posting.",
      },
      {
        title: "Contract and project-length staffing",
        body: "Most of our placements are permanent. Where a capital program needs cover only for its duration, most often on construction-phase and inspection work, we recruit for the length of the program instead of selling a permanent hire the budget does not carry.",
      },
    ],
  },

  "mep-engineering-recruiter": {
    heading: "MEP engineering staffing, commissioning and executive search",
    intro:
      "MEP hiring splits by project type far more than by job title, so an MEP staffing agency has to recruit a data center program and a hospital retrofit differently. These are the three routes firms use, and what each is good for.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "Mechanical and electrical PEs, Revit-fluent MEP designers, plumbing and fire protection engineers. Screening is against the credential the work genuinely requires, which is the PE where drawings are sealed, and LEED AP, BEMP, CEM or NICET where they are not.",
      },
      {
        title: "Executive search and headhunting",
        body: "Directors of MEP engineering, mission-critical practice leads and department heads, approached directly. At that level the filter that works is which review authority passed their drawings and which projects were delivered, not a keyword match.",
      },
      {
        title: "Commissioning and contract support",
        body: "Commissioning is recruited as its own discipline, because the skill is testing, measurement and fault-finding rather than modeling. CxA and commissioning engineer scopes often run to a building's schedule, so we staff them to that schedule when a client asks.",
      },
    ],
  },

  "bridge-structural-recruiter": {
    heading: "Bridge and structural staffing, design through load rating",
    intro:
      "The national pool for each span type is small enough that a named project filters better than a job title does. That shapes all three of the ways firms use us here.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "Bridge designers, structural engineers and licensed PEs and SEs, hired permanently. Part of the brief is checking which license the work actually needs, since a handful of states require the separate SE for structures above a threshold and most do not.",
      },
      {
        title: "Executive search and headhunting",
        body: "Load rating specialists, movable and long-span engineers, and the practice leads above them. The pool for each is thin and the people in it are rarely looking, so these run as direct, confidential approaches rather than as advertised roles.",
      },
      {
        title: "Contract and project-length staffing",
        body: "Design capacity around a submittal date, and inspection work that follows a federally set cycle rather than a firm's headcount plan. Both have an end date, and recruiting them as though they did not is how a firm ends up over-staffed a quarter later.",
      },
    ],
  },

  "water-wastewater-recruiter": {
    heading: "Water and wastewater staffing, process engineers to plant leadership",
    intro:
      "Treatment hiring is organized around who owns the asset and which permit governs it. A water treatment recruiter who does not know that difference sends process engineers to collection system work, so these routes follow the shape of the program instead.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "Process engineers, water resources engineers, collection and distribution designers, and plant technical staff. Candidates are screened on the treatment process the plant actually runs, which is not the same thing as the word water appearing on a resume.",
      },
      {
        title: "Executive search and headhunting",
        body: "Water practice leaders, treatment discipline heads and utility engineering directors. A national pool this thin is worked by approaching people already doing the equivalent job at a comparable plant, one at a time.",
      },
      {
        title: "Contract and program-length staffing",
        body: "Startup, commissioning and compliance stretches that have an end date. Where a utility or a design firm needs engineers only through a plant startup or a PFAS compliance push, contract recruiting fits the work better than a permanent seat.",
      },
    ],
  },

  "cei-inspection-recruiter": {
    heading: "CEI staffing for construction programs, district by district",
    intro:
      "CEI hiring follows letting schedules rather than calendar quarters, and the work is contracted for the life of a construction program. It is the one discipline on this site where contract staffing leads and permanent hiring follows.",
    models: [
      {
        title: "Contract and program-length staffing",
        body: "Inspectors, senior inspectors and office engineers staffed for the length of a construction contract. Qualification is checked against the DOT's own approved list, because a certification the neighboring state accepts is not automatically accepted here.",
      },
      {
        title: "Direct hire and permanent placement",
        body: "Resident engineers, CEI project managers and QA/QC leads, hired permanently to carry program after program rather than a single letting. This is the side where ACI, NICET and state qualifications move pay the way a PE does in design.",
      },
      {
        title: "Program ramp-up teams",
        body: "A firm that wins a district-wide contract needs several qualified inspectors at once, on a date it does not control. Those are run as one search against the program start, not as separate requisitions competing for the same small pool.",
      },
    ],
  },

  "municipal-engineering-recruiter": {
    heading: "Municipal engineering staffing and public works executive search",
    intro:
      "Agencies and the consultants who serve them hire on different clocks, one on council approvals and budget cycles, the other on contract awards. These three routes cover both sides of that.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "City and county engineers, assistant city engineers, development review staff and capital project managers. Public pay bands are fixed and published, so the search is run against what the band can realistically attract in that market rather than against a wish list.",
      },
      {
        title: "Executive search and headhunting",
        body: "Public works directors and city engineers, approached confidentially. Municipal leadership searches become public record in most states, which is precisely why a sitting director will not answer an open posting.",
      },
      {
        title: "Interim and contract support",
        body: "Capital programs that outlast a vacancy. Where a city needs a project manager through a bond program, or an interim engineer while a permanent search runs, we recruit for that period rather than for a seat.",
      },
    ],
  },

  "transportation-recruiter": {
    heading: "Transportation engineering staffing and DOT program search",
    intro:
      "Transportation hiring is driven by letting schedules and program funding, so the question that decides the route is whether the need outlives the project.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "Highway, traffic and ITS engineers, transportation planners and licensed PEs. The bottleneck is rarely graduates. It is the five to fifteen year band holding a PE plus a specific agency's project history, and that band is recruited, not advertised to.",
      },
      {
        title: "Executive search and headhunting",
        body: "DOT program directors, transportation practice leaders and the people who own a state agency relationship. Moving one is a visible event in a small market, so the approach is direct and the process stays confidential on both sides.",
      },
      {
        title: "Contract and program-length staffing",
        body: "Planning and design capacity around a letting date or a funded program, staffed for that window instead of carried year round. Federal program funding arrives on its own schedule, and headcount that ignores it gets expensive in both directions.",
      },
    ],
  },

  "project-management-recruiter": {
    heading: "Project management staffing and capital program leadership search",
    intro:
      "Program roles are judged on delivery record rather than on credentials, so every one of these searches is run against what a candidate has actually brought in, on what budget, and under whose standards.",
    models: [
      {
        title: "Direct hire and permanent placement",
        body: "Project managers, senior PMs and construction managers across civil, water, transportation and building work. A PMP and a license both count. What counts more is the scope delivered and whether the client came back for the next phase.",
      },
      {
        title: "Executive search and headhunting",
        body: "Program directors, capital program leads and operations leadership. These moves are almost always confidential, and the shortlist is built from named programs and known outcomes rather than from whoever applies.",
      },
      {
        title: "Owner's representative and interim support",
        body: "Owners who need their own interests represented for the length of a capital program, and firms covering a leadership gap while a permanent search runs. Both are time-boxed by definition, so both are recruited that way.",
      },
    ],
  },
};
