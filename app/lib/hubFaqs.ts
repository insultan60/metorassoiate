import type { FaqItem } from "./seo";

/* Hub-level FAQs — six per discipline, thirty-six in total.
 *
 * WHY THESE, AND WHY ONLY THIRTY-SIX
 *
 * A hundred questions were proposed. Clustered by overlap they collapsed to
 * 43 distinct answers: sixteen of them were the single question "who is the
 * best civil engineering recruiter" asked sixteen ways, and seven more were
 * one DOT question with the agency's name swapped. Every proposed answer
 * also ended with the same telephone sentence, which is the byte-identical
 * block pattern that already cost this site its city pages' indexing.
 *
 * WHAT THEY DELIBERATELY AVOID
 *
 * "Who is the best recruiter?" — dropped, all of them. A recruiting firm's
 * own site asserting it is the best is not evidence, and the assistants this
 * content is aimed at treat it as exactly that. Those questions cannot be
 * answered credibly from this domain, so publishing sixteen attempts is
 * sixteen chances to be discounted.
 *
 * WHAT THEY ARE FOR
 *
 * Google stopped showing FAQ rich results on 7 May 2026 and removed the
 * reporting in June, so none of this produces a dropdown in Google any more.
 * The markup is still read by Bingbot, PerplexityBot and the retrieval
 * crawlers behind AI answers — which is the actual goal here, and the thing
 * the client was asking about when an assistant ranked competitors above us.
 *
 * The rule every answer follows: it must contain something checkable. An
 * assistant quotes a page that states how PE comity actually works, or what
 * a licensed PE actually earns. It does not quote "we understand technical
 * disciplines and geographic markets". Where a figure appears it is the same
 * figure the salary tables on this site publish, so the page cannot
 * contradict itself.
 *
 * No answer carries a phone number. One call to action per page, at the
 * bottom, where it already is.
 */

export type HubSegment =
  | "civil-engineering-recruiter"
  | "mep-engineering-recruiter"
  | "bridge-structural-recruiter"
  | "water-wastewater-recruiter"
  | "cei-inspection-recruiter"
  | "municipal-engineering-recruiter";

export const HUB_FAQS: Record<HubSegment, FaqItem[]> = {
  "civil-engineering-recruiter": [
    {
      q: "What does a civil engineer earn in the United States?",
      a: "It tracks licensure more than years served. Our published bands run from $70,000–$95,000 for a civil engineer with an EIT, to $105,000–$150,000 once the PE is in hand at mid-level, to $140,000–$190,000+ for a senior project manager and $175,000–$250,000+ at regional director. Metro area moves these figures more than any other single factor.",
    },
    {
      q: "Do you need a PE license to be a civil project manager?",
      a: "Usually, because the role signs and seals drawings and takes professional responsibility for them. The common route is the FE exam, roughly four years of progressive experience under a licensed PE, then the PE exam. Project engineer and designer roles below that line are open to EITs, and most firms treat them as the run-up to licensure rather than a separate track.",
    },
    {
      q: "How does a PE license transfer between states?",
      a: "It does not transfer automatically. There is no national license. Every state board licenses independently and grants what is called comity licensure to engineers already licensed elsewhere, on its own terms. An NCEES Record holds your exams, education and references in one place and is what most boards want to see. Budget weeks, not days, and check the destination board before accepting a role that needs a seal.",
    },
    {
      q: "What is the difference between consulting-side and DOT-side civil work?",
      a: "Consulting firms design and deliver; the state DOT owns the asset, sets the standards and reviews the work. Engineers move between the two, but the day-to-day differs sharply, consulting runs on billable utilisation and multiple concurrent clients, agency work on program delivery and public accountability. A candidate who has only done one often needs a run-up to the other.",
    },
    {
      q: "Which civil engineering roles are hardest to fill?",
      a: "In our experience the bottleneck is rarely graduates. It is the five-to-fifteen-year band holding a PE plus a specific agency's project history. Water resources, geotechnical and traffic/ITS are consistently thinner than general site design, because each needs experience that cannot be picked up quickly on the job.",
    },
    {
      q: "What project awards do civil engineering firms compete for?",
      a: "The main routes are ACEC's Engineering Excellence Awards, which national entries must reach through one of 51 state and metropolitan organizations, ENR's regional Best Projects, ASCE's Outstanding Civil Engineering Achievement, and AASHTO's America's Transportation Awards for state DOT projects. We list the entry route for each on our engineering awards pages.",
    },
  ],

  "mep-engineering-recruiter": [
    {
      q: "What does an MEP engineer earn in the United States?",
      a: "Our published bands run from $70,000–$95,000 for a mechanical or electrical engineer with an EIT, to $105,000–$155,000 for a licensed MEP PE at mid-level, $125,000–$175,000 for a data center electrical PE, and $180,000–$260,000 for a director of MEP engineering. Mission-critical and healthcare work pays above commercial for the same seniority.",
    },
    {
      q: "Which licenses and certifications matter most for MEP engineers?",
      a: "The PE is the one that gates sign-and-seal authority. Beyond it, the credentials employers actually ask for are LEED AP, ASHRAE's BEMP and CEM for energy work, and NICET certification on the fire protection side. Which of those matters depends far more on the project type than on the job title.",
    },
    {
      q: "What is the difference between an MEP designer and an MEP engineer?",
      a: "A designer models and documents the system, typically in Revit, while the engineer performs the load calculations, selects equipment, and carries the code responsibility for the result. The pay gap between them is real: our bands start designers at $60,000–$88,000 against $70,000–$95,000 for an engineer at EIT level, widening sharply once the PE arrives.",
    },
    {
      q: "Why do MEP job specs name a local code authority?",
      a: "Because the review body sets what the drawings must show and how long approval takes, and that varies by city rather than by state. Work in New York is reviewed by NYC DOB, Los Angeles by LADBS, Chicago by Chicago DOB. An engineer who has been through a given authority's review is materially faster on the next project there, which is why the specs ask.",
    },
    {
      q: "What is commissioning, and why is it recruited separately?",
      a: "Commissioning verifies that installed systems actually perform as designed, after construction and often into occupancy. It is a distinct discipline from design. The skill is testing, measurement and fault-finding rather than modeling, so it is recruited as its own role, usually as a commissioning engineer or CxA.",
    },
    {
      q: "What awards recognize MEP engineering work?",
      a: "ASHRAE's Technology Awards are the notable one, because entry requires measured performance from a building in successful operation for at least a year rather than a design-stage energy model. Alongside them: the IES Illumination Awards for lighting design, NECA's Project Excellence Awards on the electrical construction side, and Consulting-Specifying Engineer's MEP Giants ranking and 40 Under 40.",
    },
  ],

  "bridge-structural-recruiter": [
    {
      q: "Do structural engineers need a PE or an SE license?",
      a: "A PE covers most structural practice. A separate SE license exists, and a handful of states require it for particular structures, significant buildings, or bridges above a threshold, so the answer genuinely depends on where the work is and what is being designed. Junior roles are commonly open to EITs; senior positions that seal drawings are not.",
    },
    {
      q: "What is the difference between bridge design and bridge inspection?",
      a: "Design produces the structure; inspection assesses one already carrying traffic, on a cycle set by federal requirements, and feeds load ratings and rehabilitation decisions. They draw on the same structural knowledge but are separate careers in practice, and a designer does not slot into an inspection team without training.",
    },
    {
      q: "What does a bridge engineer earn?",
      a: "Compensation follows licensure and span complexity. A bridge designer with an EIT sits near the civil EIT band of $70,000–$95,000; a licensed bridge PE in the middle of their career is comparable to the $105,000–$150,000 mid-level PE band, with senior project managers running to $140,000–$190,000+. Movable and long-span experience commands a premium because the pool is small.",
    },
    {
      q: "Why is steel bridge experience recruited so specifically?",
      a: "Because steel, concrete and movable spans are genuinely different design problems, and the national pool for each is small. It is one of the few specialisms where a named project is a better filter than a job title, which is why the AISC/NSBA Prize Bridge Awards, running since 1928, are a useful shorthand for who has actually done the work.",
    },
    {
      q: "What software do structural and bridge employers ask for?",
      a: "Analysis packages rather than drafting tools are what separate candidates: employers name the specific software their models are built in, and migrating between them costs real time. Expect the job spec to be explicit, and expect it to matter more for bridge work than for buildings.",
    },
    {
      q: "Can a building structural engineer move into bridge work?",
      a: "It happens, but it is a move rather than a sideways step. Bridge work runs on AASHTO design specifications and a public-agency delivery model, where building structures run on the IBC and a private-client one. Firms hiring across that line generally expect to invest in the transition, and say so.",
    },
  ],

  "water-wastewater-recruiter": [
    {
      q: "What does a water or wastewater engineer earn?",
      a: "Process engineers and treatment designers track the civil PE bands closely, roughly $70,000–$95,000 at EIT, $105,000–$150,000 for a mid-level licensed PE, and $140,000–$190,000+ for senior project managers running plant programs. Plant process experience carries a premium over collection and distribution work at the same seniority, because it is harder to acquire.",
    },
    {
      q: "What is the difference between a water engineer and a plant operator?",
      a: "The engineer designs the facility and holds a PE; the operator runs it day to day and holds a state operator certification, graded by class, which is a separate credential with its own examinations and renewal. Both appear in the same job market and the terms get used loosely, but they are not interchangeable roles.",
    },
    {
      q: "Which utility owns the work in a given metro?",
      a: "It varies more than people expect, and it determines who lets the contracts. New York's is NYC DEP, Los Angeles's is LA Sanitation & Environment, Chicago's is the Metropolitan Water Reclamation District of Greater Chicago, Houston's is Houston Public Works. Our city pages name the authority for each of the fifty metros we recruit in.",
    },
    {
      q: "What does PFAS work mean for water engineering hiring?",
      a: "Emerging-contaminant compliance has become its own strand of work: monitoring, treatment selection and permitting. It draws on process chemistry knowledge that plant design alone does not build. It is a good example of demand appearing faster than the talent pool, which is why it shows up in job specs by name.",
    },
    {
      q: "What is the difference between collection systems and treatment work?",
      a: "Collection and distribution is pipe network engineering, hydraulic modeling, pump stations, rehabilitation of buried assets. Treatment is process engineering inside a plant. Firms recruit them separately, and a strong candidate in one is not automatically a candidate in the other.",
    },
    {
      q: "What recognition exists for water and wastewater projects?",
      a: "The Water Environment Federation runs more than thirty award categories through its member associations, covering collection systems, treatment innovation, plant operations and its Utility of the Future Today designation. Entry is through the state or regional member association before national recognition.",
    },
  ],

  "cei-inspection-recruiter": [
    {
      q: "What does CEI stand for, and what does the work involve?",
      a: "Construction Engineering and Inspection. The owner's side of a construction project. CEI staff verify that what gets built matches the approved plans and specifications, document quantities and pay applications, and keep the record that supports payment and claims. It is field work with a heavy documentation burden, distinct from design.",
    },
    {
      q: "What certifications do construction inspectors need?",
      a: "NICET certification is the common baseline, graded by level, and most state DOTs run their own qualification programs for specific inspection types, concrete, asphalt, earthwork, structures. Those are agency-specific, which is why a spec asks for a particular state's certification rather than inspection experience in general.",
    },
    {
      q: "What is the difference between an inspector and a resident engineer?",
      a: "The inspector observes and documents specific work. The resident engineer runs the site for the owner, managing the inspection team, holding the contractual relationship with the contractor, and making the calls that get escalated. It is a step up in responsibility rather than a different specialism, and it usually expects a PE.",
    },
    {
      q: "Why do CEI roles name a specific DOT district?",
      a: "Because prequalification and procedure sit at district level, not just state level. TxDOT's Houston District, Caltrans District 7, IDOT District 1 and the Illinois Tollway each run their own processes. An inspector who already holds a district's qualifications can start immediately; one who does not has a wait.",
    },
    {
      q: "Is CEI work permanent or project-based?",
      a: "Both, and the distinction shapes the market. Consulting firms hold CEI contracts that run for the length of a construction program, so hiring follows contract awards. That makes CEI hiring more responsive to letting schedules than design hiring, and it is why timing matters more in this discipline than most.",
    },
    {
      q: "Can inspectors move into construction management?",
      a: "It is the usual path. Field documentation and specification knowledge are exactly what a construction manager needs, and the step normally goes inspector, senior inspector, resident engineer, construction manager. What tends to gate it is the reporting, scheduling and contract administration side rather than the technical side.",
    },
  ],

  "municipal-engineering-recruiter": [
    {
      q: "What does a municipal engineer do?",
      a: "Municipal engineering is the public agency's own engineering function, streets, utilities, stormwater, water and sewer, plan review and the capital improvement program. The work spans several disciplines shallowly rather than one deeply, and much of it is managing consultants rather than producing drawings.",
    },
    {
      q: "What does a city engineer earn compared with consulting?",
      a: "Public salaries are usually published, banded and slower-moving than consulting, and often lower at the same level of technical responsibility. What sits on the other side is pension, stability and defined hours. Engineers move both ways across that line throughout a career, and the trade is rarely purely financial.",
    },
    {
      q: "Do municipal engineering roles require a PE?",
      a: "City engineer and senior municipal positions generally do, because the role signs off on public infrastructure. Below that, plan review, inspection and capital program roles are frequently open to EITs, and a public agency is often a better place to accumulate the varied experience licensure requires than a specialist consultancy.",
    },
    {
      q: "Who owns municipal engineering work in a given city?",
      a: "The department name varies and it matters when applying, New York's is the Department of Design and Construction, Los Angeles's is the Bureau of Engineering, Houston's is Public Works. Our city pages name the responsible body for each of the fifty metros we cover.",
    },
    {
      q: "What does public works experience actually signal to an employer?",
      a: "That the engineer can work inside a public agency's constraints (procurement rules, council timelines, public meetings and funding cycles) rather than around them. Consulting firms bidding municipal work value it precisely because it is hard to teach and it determines whether a project stays on schedule.",
    },
    {
      q: "What awards recognize municipal and public works projects?",
      a: "APWA's Public Works Project of the Year is the notable one, and unusually it recognises the owning agency, the consulting engineer and the contractor together. Entry runs through an APWA chapter before national judging, and a project must be substantially complete and in use within the two calendar years before nomination.",
    },
  ],
};

/* Salary-guide FAQs.
 *
 * These live on /index_themall_awards because that is the page holding the
 * data that answers them — 48 published bands across six disciplines. Asking
 * "what does a PE add to your salary" on a recruiting hub would be an
 * assertion; asking it here lets the answer be arithmetic on the table
 * directly above it, which is the difference between a citable page and a
 * promotional one.
 *
 * Every figure below is read off those same arrays, so the FAQ cannot drift
 * away from the table. If a band changes, these change with it — check them
 * when editing SALARIES, BRIDGE_SALARIES, MEP_SALARIES, WATER_SALARIES,
 * MUNICIPAL_SALARIES or CEI_SALARIES.
 */
export const SALARY_FAQS: FaqItem[] = [
  {
    q: "How much does a PE license add to an engineer's salary?",
    a: "Comparing our own published bands discipline by discipline, the licensed mid-level band begins roughly $32,000 to $38,000 above where the EIT band begins, and roughly $52,000 to $60,000 higher at the top. Civil runs $70,000–$95,000 at EIT against $105,000–$150,000 licensed; bridge $72,000–$98,000 against $110,000–$158,000. The license is the single largest step in an engineering pay curve.",
  },
  {
    q: "Which engineering discipline pays the most?",
    a: "At director level the six we publish sit closer together than people expect. MEP tops out at $180,000–$260,000 and bridge and structural at $185,000–$260,000; civil reaches $175,000–$250,000 and water/wastewater $175,000–$245,000. CEI is the lowest ceiling at $150,000–$210,000. The spread between disciplines is smaller than the spread between an unlicensed and a licensed engineer inside any one of them.",
  },
  {
    q: "What should a civil engineer with ten years' experience earn?",
    a: "Ten years usually means a PE and some project ownership, which puts it in the $105,000–$150,000 mid-level band, moving toward $140,000–$190,000+ once a candidate is carrying senior project manager responsibility rather than only technical work. What separates the two is client and budget ownership, not the year count.",
  },
  {
    q: "Can I get an engineering job with an FE or EIT but no PE?",
    a: "Yes, every discipline here publishes an EIT band, which exists precisely because firms hire at that level and expect to carry someone to licensure. Civil and MEP start at $70,000–$95,000, bridge at $72,000–$98,000, water at $68,000–$92,000, municipal at $65,000–$88,000. The question to ask an employer is who will supervise your experience toward the PE, not whether the role exists.",
  },
  {
    q: "Do public-sector engineering salaries match consulting?",
    a: "Close in the middle, further apart at the top. A licensed municipal engineer or city engineer sits at $98,000–$140,000 against $105,000–$150,000 for a mid-level civil PE in consulting, a gap of under $10,000. But a public works director runs $135,000–$175,000+ where a consulting regional director reaches $175,000–$250,000+. Pension, defined hours and stability sit on the other side of that difference.",
  },
  {
    q: "What do construction inspectors earn compared with designers?",
    a: "CEI starts lower and closes the gap with certification rather than licensure. An entry CEI inspector is $55,000–$75,000 against $55,000–$78,000 for a civil designer, but a bridge inspector qualified as an NBIS team leader reaches $80,000–$115,000, and a CEI project manager $115,000–$155,000+. The certifications that move it are ACI, NICET and the state DOT's own qualifications.",
  },
  {
    q: "Are these salary ranges national or local?",
    a: "National. They are directional bands for the United States as a whole, and metro cost of living moves them more than any other single factor. The same title can differ by tens of thousands between a coastal metro and an inland one. Treat them as the shape of a pay curve rather than an offer for a specific city.",
  },
  {
    q: "What raises an engineering salary fastest?",
    a: "On our own numbers, three things, in order: the PE license, which is worth more than any five years of unlicensed experience; moving from technical delivery into owning clients and budgets, which is the step between the mid-level and senior project manager bands; and a scarce specialism (load rating, seismic analysis, treatment process, mission-critical electrical), each of which carries its own band above the general one in its discipline.",
  },
];

/* General FAQs — the homepage set, and the opening group on /faq.
 *
 * Deliberately NOT a copy of any hub's six. A homepage visitor has a
 * different question from someone already on the MEP page: they want to know
 * what this firm covers, how it charges, and whether it operates where they
 * are. Repeating a discipline's answers here would put the same text in two
 * places while answering neither audience properly.
 *
 * Same rule as everywhere else in this file — each answer contains something
 * checkable, and none of them carries a phone number.
 */
export const GENERAL_FAQS: FaqItem[] = [
  {
    q: "What kinds of engineers does Metro Associates recruit?",
    a: "Six disciplines, each with its own practice: civil, MEP, bridge and structural, water and wastewater, CEI and inspection, and municipal engineering. Within those we place everyone from EIT-level designers to licensed PEs, project managers and directors. If a search sits across two of those, and infrastructure work often does, it is run by both desks rather than handed to whoever picked up the phone.",
  },
  {
    q: "Where in the United States do you recruit?",
    a: "Nationwide, with dedicated market pages for fifty metros across every Census division, from New York and Los Angeles to Boise, Omaha and Providence. Each of those pages names the public agencies and authorities that actually let the work in that market, because that is what determines whether an engineer's experience transfers.",
  },
  {
    q: "Do you recruit for permanent roles, contract, or both?",
    a: "Predominantly permanent, direct-hire engineering roles. CEI is the partial exception: that work is contracted for the length of a construction program, so hiring in it follows letting schedules more closely than design hiring does, and timing matters more.",
  },
  {
    q: "Do candidates pay Metro Associates anything?",
    a: "No. Recruiting fees are paid by the employer, never by the engineer. A candidate should never be asked for a fee to be represented, to be submitted, or to be placed, by us or by anyone else in this industry.",
  },
  {
    q: "How does a search normally start?",
    a: "With a conversation about the role rather than a job description. What the drawings actually require, which agency reviews them, whether a seal is needed and in which state, and what the team is short of. Those four answers change the search more than the job title does, and they are the ones a generalist recruiter usually cannot ask.",
  },
  {
    q: "Is my enquiry confidential if I am currently employed?",
    a: "Yes. Nothing is submitted anywhere without your explicit agreement on each specific employer, and we do not circulate CVs speculatively. That matters most in engineering, where regional markets are small enough that a client and a current employer often know each other.",
  },
];

/* Hiring FAQs — the commercial set, written for the person paying the fee.
 *
 * Everything else in this file answers a question about engineering. This
 * group answers questions about buying a search, which is the gap the
 * keyword work kept landing on: cost of using a staffing agency, contingency
 * against retained, agency against in-house, how long a fill takes, what a
 * headhunter is. Those are employer queries with low volume and high value,
 * and nothing on this site addressed any of them.
 *
 * The rule about checkable content still applies, and it bites hardest here.
 * No fee percentage is published, because fees are quoted per search and a
 * number invented to match a query is a number a client will later quote
 * back. What can be stated is the mechanism, which is industry-wide and
 * verifiable, plus the two facts this site already publishes elsewhere: the
 * employer pays, and average time to fill runs two to four weeks.
 */
export const HIRING_FAQS: FaqItem[] = [
  {
    q: "How much does it cost to hire an engineer through a recruiter?",
    a: "Two things set it: the fee model, and the first-year base salary the fee is calculated against. Contingency search in the United States is quoted as a percentage of that base and is owed only when a hire starts. Retained search is a flat fee billed in stages across the search. We quote per search rather than publishing a rate, because a PE role in a thin market and a designer role in a deep one are not the same piece of work. What does not vary is who pays: the employer, never the engineer.",
  },
  {
    q: "What is the difference between a recruiter, a staffing agency and a headhunter?",
    a: "Mostly the engagement, not the work. Staffing agency usually describes placing people at volume, often on contract, sometimes with the agency holding the payroll. Headhunter, or executive search, means approaching people who are not applying anywhere, normally for senior roles. Placement agency is the same idea again, generally for permanent hires. Recruiter covers all of it. On an engineering desk the label matters less than whether the person running the search can read a resume and tell you what the license, the seal and the project history actually mean.",
  },
  {
    q: "Contingency or retained: which fits an engineering search?",
    a: "Contingency means the fee falls due only on a hire, and the role may be open to more than one firm at once. Retained means the client commits to the search and the fee is billed in stages, which buys exclusivity and, in practice, a deeper map of who is out there. Most engineering hiring in the United States runs on contingency. Retained earns its keep where the pool is small enough that the search is almost entirely direct approach: practice leaders, chief engineers, public works directors.",
  },
  {
    q: "How long does it take to fill an engineering role?",
    a: "Our average time to fill runs two to four weeks from kickoff to signed offer, and what moves it is licensure and geography rather than seniority. A role that needs a seal in a state the candidate is not yet licensed in waits on comity, which is weeks rather than days. Start dates then follow notice, which in this industry is usually another two to four weeks. A search that stalls past that is normally a compensation band problem, not a sourcing one.",
  },
  {
    q: "When is an outside recruiter better than hiring in-house?",
    a: "They solve different problems. In-house recruiting is cheaper per hire once volume is steady, and it owns the employer brand. An outside desk is worth paying for when the hire is rare rather than repeated, when the people who can do the job are not applying to anything, or when the search has to stay confidential from a current employer. A firm making three site civil hires a year does not need a permanent recruiter to do it; a firm staffing a district-wide program does.",
  },
  {
    q: "Can we hire contract or outsourced engineers instead of permanent staff?",
    a: "For work with an end date, yes. Construction-phase and inspection staffing is contracted for the length of a program, which is how CEI is hired across the industry, and we recruit it that way. Design and leadership hiring here is predominantly permanent, and we would rather say that than quote a contract rate for a seat you will still need in two years.",
  },
];

/* ------------------------------------------------------------------
   One page per group.
   ------------------------------------------------------------------

   Per-question pages were built first and measured before shipping: at
   278-297 words each — of which only ~70 was the answer, the rest header,
   footer and sibling links — two questions in the same group overlapped 67.5%
   and a question overlapped its own hub 80.2%. The shallow city pages Google
   currently refuses to index measure 76-80%. Fifty more pages in that band
   was the wrong trade, so the granularity moved up a level.

   THE RULE THAT MAKES THIS WORK: an answer lives on exactly one page.

   These group pages are that page. The discipline hubs, the homepage and the
   salary guide each show their questions as titles and link here, rather than
   reprinting the answers. Without that rule a ~700-word group page whose
   content is mostly its own six answers would sit around 85% duplicate
   against whatever else carried them — which is the same mistake one level
   up. */

export type FaqGroupId =
  | "working-with-metro-associates"
  | "hiring-through-a-recruiter"
  | "civil-engineering"
  | "mep-engineering"
  | "bridge-structural"
  | "water-wastewater"
  | "cei-inspection"
  | "municipal-engineering"
  | "engineering-pay";

export type FaqGroup = {
  id: FaqGroupId;
  /** Heading, and the <h1> of its page. */
  title: string;
  /** One line for the group's page and for the index. */
  blurb: string;
  /** The discipline hub this group belongs to; null for the general set. */
  href: string | null;
  faqs: FaqItem[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "working-with-metro-associates",
    title: "Working with Metro Associates",
    blurb: "What we cover, where we work, who pays, and how a search actually starts.",
    href: null,
    faqs: GENERAL_FAQS,
  },
  {
    id: "hiring-through-a-recruiter",
    title: "Hiring through a recruiter",
    blurb:
      "What a search costs and who pays, contingency against retained, how long a fill takes, and when an outside desk beats hiring in-house.",
    href: null,
    faqs: HIRING_FAQS,
  },
  {
    id: "civil-engineering",
    title: "Civil engineering",
    blurb: "Licensure and comity, pay by seniority, consulting against agency work, and what is hardest to fill.",
    href: "/civil-engineering-recruiter",
    faqs: HUB_FAQS["civil-engineering-recruiter"],
  },
  {
    id: "mep-engineering",
    title: "MEP engineering",
    blurb: "Designer against engineer, the certifications that matter, why specs name a code authority, and commissioning.",
    href: "/mep-engineering-recruiter",
    faqs: HUB_FAQS["mep-engineering-recruiter"],
  },
  {
    id: "bridge-structural",
    title: "Bridge & structural",
    blurb: "PE against SE licensure, design against inspection, and why steel bridge experience is recruited by project.",
    href: "/bridge-structural-recruiter",
    faqs: HUB_FAQS["bridge-structural-recruiter"],
  },
  {
    id: "water-wastewater",
    title: "Water & wastewater",
    blurb: "Engineers against operators, which utility owns the work, PFAS, and collection against treatment.",
    href: "/water-wastewater-recruiter",
    faqs: HUB_FAQS["water-wastewater-recruiter"],
  },
  {
    id: "cei-inspection",
    title: "CEI & inspection",
    blurb: "What CEI is, the certifications it runs on, resident engineers, and why roles name a DOT district.",
    href: "/cei-inspection-recruiter",
    faqs: HUB_FAQS["cei-inspection-recruiter"],
  },
  {
    id: "municipal-engineering",
    title: "Municipal engineering",
    blurb: "Public against consulting pay, what a city engineer does, and what public works experience signals.",
    href: "/municipal-engineering-recruiter",
    faqs: HUB_FAQS["municipal-engineering-recruiter"],
  },
  {
    id: "engineering-pay",
    title: "Engineering pay",
    blurb: "What a PE license is worth, which discipline pays most, and how the published bands actually move.",
    href: "/index_themall_awards",
    faqs: SALARY_FAQS,
  },
];

export function faqGroup(id: string): FaqGroup | undefined {
  return FAQ_GROUPS.find((g) => g.id === id);
}

export const FAQ_TOTAL = FAQ_GROUPS.reduce((n, g) => n + g.faqs.length, 0);
