/* Discipline hubs for the trades inside MEP.
 *
 * WHY THESE EXIST
 *
 * "MEP engineering recruiter" is not what anybody searches. A firm short of a
 * plumbing designer searches for a plumbing designer, and an engineer looking
 * to move searches their own title. The MEP hub covers all three disciplines
 * at once, which means it ranks for the collective noun and for none of the
 * three jobs underneath it.
 *
 * They are also genuinely different hires, which is the test that decides
 * whether a page like this is worth having. Electrical, mechanical and
 * plumbing-and-fire-protection have different licences, different software,
 * different shortages and different reasons a candidate says no. A page that
 * could be written by swapping one word for another should not be a separate
 * page at all.
 *
 * Top level rather than nested under the MEP hub, matching the existing
 * discipline hubs. It keeps the URL to the phrase people actually type and
 * avoids colliding with the [city] route underneath that hub.
 */

export interface Discipline {
  slug: string;
  /** Appears in the h1 and the title. */
  name: string;
  /** Reads after "// " in the eyebrow. */
  eyebrow: string;
  /** The hero sentence. */
  intro: string;
  /** Two paragraphs on what the work actually is. */
  detail: string[];
  /** Titles we fill on this desk. */
  roles: string[];
  /** Matches a live job title to this discipline. Narrower than the MEP desk
   *  in lib/jobRouting, which deliberately catches all three. */
  jobMatch: RegExp;
  /** What firms are short of, and why. */
  hiringFocus: { role: string; why: string }[];
  /** Licences and certifications that actually gate the work. */
  credentials: string;
  faqs: { q: string; a: string }[];
  /** For the page title and meta description. */
  metaTitle: string;
  metaDescription: string[];
}

export const DISCIPLINES: Discipline[] = [
  {
    slug: "electrical-engineer-recruiter",
    name: "Electrical Engineer Recruiter",
    eyebrow: "Electrical engineering recruiting",
    intro:
      "Building and infrastructure electrical engineering is one of the hardest desks in the industry to staff right now, and the reason is demand rather than supply: the same engineers are being pulled toward data centres, healthcare and electrification work all at once.",
    detail: [
      "The work here is power distribution, lighting, fire alarm and low-voltage systems for buildings and facilities, not the electronics or semiconductor side the title can suggest. In practice that means load studies, short circuit and arc flash analysis, switchgear and distribution design, emergency and standby power, and increasingly the service upgrades that electrification pushes onto buildings that were never sized for it. The modelling and coordination happens in Revit, and the studies in SKM or ETAP, so a candidate's software is a real screen rather than a line on a resume.",
      "What has changed the market is where the demand comes from. Data centre work pays above consulting rates and absorbs power systems engineers faster than the discipline produces them, healthcare and laboratory projects need engineers who understand essential electrical systems and the codes that govern them, and electrification is adding electrical scope to projects that used to be mechanical. A consultancy hiring an electrical engineer is competing with all three, and losing candidates on compensation it cannot always match. Where it wins is on variety of work and on the route to a PE, which is worth saying out loud in a first conversation.",
    ],
    roles: [
      "Electrical Engineer (PE)",
      "Senior Electrical Engineer",
      "Electrical Project Engineer",
      "Electrical Designer",
      "Power Systems Engineer",
      "Lighting Designer",
      "Low Voltage and Fire Alarm Designer",
      "Electrical Commissioning Engineer",
      "Electrical Department Manager",
    ],
    jobMatch: /\b(electric\w*|power systems?|lighting|low voltage|fire alarm|substation|switchgear|arc flash)\b/i,
    hiringFocus: [
      {
        role: "Power systems engineers",
        why: "Short circuit, coordination and arc flash study work is specialised, chargeable and in short supply, and data centre clients bid for the same people.",
      },
      {
        role: "Electrical engineers with healthcare experience",
        why: "Essential electrical systems in hospitals carry code requirements that are learned on projects rather than in training, so the pool is defined by who has done it before.",
      },
      {
        role: "Licensed electrical PEs willing to stamp",
        why: "Many strong designers never sat the exam, so the engineers who can seal drawings carry a department and are approached constantly.",
      },
      {
        role: "Lighting designers",
        why: "A small discipline that sits between engineering and architecture, with few people who are fluent in both and comfortable presenting to a design team.",
      },
    ],
    credentials:
      "The PE is the gate for anything that gets sealed, and the NCEES Power exam is the route most building electrical engineers take. Below that, the practical screens are software and project type: SKM or ETAP for studies, Revit for production, and whether the candidate has worked on the building type the client is hiring for. For engineers coming from utility or industrial backgrounds the licence transfers but the building codes do not, and that gap is worth establishing before an interview rather than after.",
    faqs: [
      {
        q: "What kind of electrical engineers do you place?",
        a: "Building and infrastructure electrical engineers: power distribution, lighting, fire alarm and low voltage, from designer level to department manager. We also place power systems engineers doing study work and electrical commissioning engineers.",
      },
      {
        q: "Do your electrical candidates hold a PE licence?",
        a: "Many do, and for roles that require sealing drawings we screen for it specifically, including which state the licence is held in and whether comity is realistic. For designer and project engineer roles it is often not required, and we will say so rather than filter out strong people unnecessarily.",
      },
      {
        q: "Can you find engineers with data centre or healthcare experience?",
        a: "Yes, and those are the two most competitive briefs on this desk. Both are worth being realistic about on compensation, because the candidates who have done that work know what it is worth.",
      },
      {
        q: "Is there a fee for job seekers?",
        a: "No. Metro Associates is always 100% free for job seekers. Our fees are paid by the hiring firm.",
      },
    ],
    metaTitle: "Electrical Engineer Recruiters & Staffing",
    metaDescription: [
      "Electrical engineering recruiters placing licensed PEs, power systems,",
      "lighting and fire alarm engineers nationwide. Candidates never pay a fee.",
    ],
  },
  {
    slug: "mechanical-engineer-recruiter",
    name: "Mechanical Engineer Recruiter",
    eyebrow: "Mechanical engineering recruiting",
    intro:
      "Mechanical engineering in buildings is HVAC, central plant and the energy performance of both, and the hiring problem is that the discipline is being asked to decarbonise a building stock designed around equipment that is now being replaced.",
    detail: [
      "The core of the work is load calculation, system selection and the design of air and water distribution: air handling, chilled and hot water, central plants, and the controls strategy that makes any of it perform. It runs through Revit for production and through Trace, HAP or IES for load and energy modelling, and the engineers who are fluent in both the design and the modelling side are a smaller group than job specifications assume. Commissioning sits alongside it as a distinct career that pulls experienced designers out of design.",
      "What has shifted is the brief. Heat pumps, heat recovery, electrification of heating and the energy codes that mandate them have changed what a competent mechanical design looks like, and a lot of experienced engineers have spent their careers on systems that are now being designed out. That cuts both ways in hiring: a firm chasing decarbonisation work wants engineers who have done it, and the engineers who have are young enough that they are also the ones most willing to move. Laboratory, healthcare and data centre cooling are the other three places demand concentrates, each with its own code and redundancy expectations.",
    ],
    roles: [
      "Mechanical Engineer (PE)",
      "Senior Mechanical Engineer",
      "HVAC Design Engineer",
      "Mechanical Project Engineer",
      "Central Plant Engineer",
      "Energy Modeller",
      "Commissioning Engineer and Commissioning Agent",
      "Mechanical Department Manager",
    ],
    jobMatch: /\b(mechanical|hvac|refrigerat\w*|central plant|energy model\w*|commission\w*|chilled water|boiler)\b/i,
    hiringFocus: [
      {
        role: "HVAC design engineers with healthcare or laboratory experience",
        why: "Pressure relationships, air change rates and redundancy in these buildings are learned on projects, and clients will not accept a first attempt.",
      },
      {
        role: "Engineers fluent in decarbonisation and heat pump design",
        why: "Energy codes have moved faster than the experience base, so the engineers who have delivered these systems are a small and mobile group.",
      },
      {
        role: "Commissioning engineers",
        why: "The work pulls from the same pool as design and pays competitively, so firms staffing commissioning are hiring against their own design departments.",
      },
      {
        role: "Mechanical PEs who can lead a department",
        why: "The step from strong designer to someone who can run a team, seal work and hold a client is where most firms are actually short.",
      },
    ],
    credentials:
      "A mechanical PE is the baseline for sealing, and most building mechanical engineers take the NCEES HVAC and Refrigeration exam. Beyond that the screens are practical: which modelling software, which building types, and whether the candidate has carried a design from concept through construction administration rather than only producing drawings. LEED and certified commissioning credentials matter for some clients and are worth confirming against the brief rather than assuming, since they are often listed when they are not actually required.",
    faqs: [
      {
        q: "What kind of mechanical engineers do you place?",
        a: "Building mechanical engineers: HVAC design, central plant, energy modelling and commissioning, from designer through to department manager. The emphasis is on consulting engineering rather than manufacturing or product design.",
      },
      {
        q: "Do you place commissioning engineers as well as designers?",
        a: "Yes. It is worth knowing that they come from the same pool, so a firm hiring both is competing with itself, and we will say where a brief is likely to be hard before running it.",
      },
      {
        q: "Can you find engineers with decarbonisation experience?",
        a: "Yes, and this is the brief that has grown fastest. The honest position is that the experience base is younger than the discipline as a whole, so these searches often mean hiring someone with less total experience than the specification first asked for.",
      },
      {
        q: "Is there a fee for job seekers?",
        a: "No. Metro Associates is always 100% free for job seekers. Our fees are paid by the hiring firm.",
      },
    ],
    metaTitle: "Mechanical Engineer Recruiters & HVAC Staffing",
    metaDescription: [
      "Mechanical engineering recruiters placing licensed PEs, HVAC designers,",
      "central plant and commissioning engineers nationwide. Candidates never pay a fee.",
    ],
  },
  {
    slug: "plumbing-fire-protection-recruiter",
    name: "Plumbing & Fire Protection Recruiter",
    eyebrow: "Plumbing and fire protection recruiting",
    intro:
      "Plumbing and fire protection is the smallest desk in MEP and the hardest one to fill, for a structural reason: almost nobody sets out to do it, so the people who are good at it were found rather than trained.",
    detail: [
      "The scope is domestic water, sanitary and storm, natural gas, medical gas in healthcare, and on the fire side sprinkler and standpipe systems, fire pumps, and the interface with alarm and detection. It is code-led work to an unusual degree. The plumbing and fire codes are prescriptive, they are adopted and amended locally, and a design that was correct in one jurisdiction may not be in the next one, which makes local code fluency a real qualification rather than a preference.",
      "The hiring problem follows from how people arrive at it. Plumbing design is often handed to mechanical engineers as a secondary responsibility, so a large part of the available pool does it without wanting to, and the people who have chosen it and hold the credential are rare enough to name. Fire protection is narrower still, split between engineers on the design side and technicians who have come up through NICET certification on the contracting side, and the two are not interchangeable even though specifications frequently treat them as if they were.",
    ],
    roles: [
      "Plumbing Engineer (PE)",
      "Plumbing Designer",
      "Senior Plumbing Designer (CPD)",
      "Fire Protection Engineer (PE)",
      "Fire Protection Designer",
      "Sprinkler Designer (NICET)",
      "Medical Gas Designer",
      "Plumbing and Fire Protection Department Lead",
    ],
    jobMatch: /\b(plumbing|fire protection|sprinkler|standpipe|medical gas|fire suppression|cpd|nicet)\b/i,
    hiringFocus: [
      {
        role: "Designers holding the CPD credential",
        why: "Certification in plumbing design marks someone who chose the discipline rather than inherited it, and the certified population is small enough that firms track it by name.",
      },
      {
        role: "Fire protection engineers with a PE",
        why: "A licensed fire protection engineer is a different hire from a NICET-certified designer, and briefs regularly ask for one while describing the other.",
      },
      {
        role: "NICET-certified sprinkler designers",
        why: "The levels are a real progression and clients specify them, so the certification determines who can be put forward rather than merely strengthening a case.",
      },
      {
        role: "Designers with medical gas experience",
        why: "Healthcare work needs it, it is certified separately, and the engineers who hold it are usually already inside a healthcare-focused practice.",
      },
    ],
    credentials:
      "Three credentials matter here and they are not substitutes for each other. The PE seals design work, in plumbing or in fire protection as separate disciplines. The CPD, certification in plumbing design, marks a career plumbing designer and is the clearest signal in a resume stack. NICET certification runs the fire protection design side, in levels that clients specify directly. Medical gas carries its own certification on top. Working out which the role genuinely needs, rather than which the job description inherited from the last one, is the single most useful thing we do on this desk.",
    faqs: [
      {
        q: "Do you place plumbing and fire protection separately?",
        a: "We recruit for both and often for roles that combine them, which is common in smaller practices. They are different skill sets, and we will say when a combined brief is realistic and when it is two hires.",
      },
      {
        q: "What is the difference between a fire protection engineer and a NICET designer?",
        a: "A fire protection engineer is typically a licensed PE doing design and analysis; a NICET-certified designer has come up through a certification ladder on the design and contracting side. Both are valuable and they are not interchangeable, though job specifications often treat them as if they were.",
      },
      {
        q: "Why is this discipline so hard to hire for?",
        a: "Because few people choose it early. Plumbing design is frequently assigned to mechanical engineers as a secondary duty, so the pool who have chosen it and hold the credential is small, and it is approached constantly.",
      },
      {
        q: "Is there a fee for job seekers?",
        a: "No. Metro Associates is always 100% free for job seekers. Our fees are paid by the hiring firm.",
      },
    ],
    metaTitle: "Plumbing & Fire Protection Engineer Recruiters",
    metaDescription: [
      "Plumbing and fire protection recruiters placing PEs, CPD designers and",
      "NICET-certified sprinkler designers nationwide. Candidates never pay a fee.",
    ],
  },
];

export function getDiscipline(slug: string): Discipline | undefined {
  return DISCIPLINES.find((d) => d.slug === slug);
}
