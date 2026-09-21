import type { Metadata } from "next";
import Link from "next/link";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { JsonLd } from "../components/JsonLd";
import HubFaqs from "../components/HubFaqs";
import ServiceModels from "../components/ServiceModels";
import OtherSpecialties from "../components/OtherSpecialties";
import { IconArrow, IconCheck } from "../components/Icons";
import { breadcrumbSchema } from "../lib/seo";
import { SITE_URL, CAREERS_URL, APPLY_URL } from "../lib/site";
import { CITIES } from "../lib/cities";

/* The umbrella hub.
 *
 * WHY IT EXISTS
 *
 * Search Console shows 230+ impressions across "infrastructure recruiter",
 * "infrastructure recruitment agency" and "infrastructure recruitment"
 * against no page at all. The six discipline hubs each answer a narrower
 * question, and none of them is what an owner or a design-build contractor
 * types when the thing they are staffing is a program rather than a seat.
 *
 * WHAT KEEPS IT FROM BEING A DUPLICATE
 *
 * It deliberately does not carry roles, salary bands or a fifty-city
 * directory. Those exist on the discipline hubs and would put the same text
 * on a ninth page, which is the failure this codebase has already paid for
 * once. What lives here instead is the part no discipline hub can hold: how
 * a program's staffing changes across its phases, and how hiring differs by
 * who owns the asset. Both are about programs, not disciplines, so the page
 * has something to say that the others structurally cannot.
 */

export const metadata: Metadata = {
  title: "Infrastructure Recruiters & Staffing | Metro Associates",
  description:
    "Infrastructure recruiters and staffing for US capital programs: planning, design, construction inspection and program leadership for DOT, water and transit work.",
  keywords: [
    "infrastructure recruiter",
    "infrastructure recruitment agency",
    "infrastructure staffing",
    "capital program staffing",
    "public works recruitment",
    "design-build staffing agency",
  ],
  alternates: { canonical: "/infrastructure-recruiter" },
  openGraph: {
    title: "Infrastructure Recruiters & Staffing | Metro Associates",
    description:
      "Infrastructure recruiters and staffing for US capital programs: planning, design, construction inspection and program leadership for DOT, water and transit work.",
    url: `${SITE_URL}/infrastructure-recruiter`,
    siteName: "Metro Associates",
    type: "website",
  },
};

/* The six desks, described by what each one does inside a program rather
   than by what the discipline is. The hub pages already define the
   disciplines; repeating those definitions here is what would make this a
   duplicate of all six at once. */
const DISCIPLINES = [
  {
    href: "/civil-engineering-recruiter",
    label: "Civil engineering",
    role: "Carries the roadway, drainage and site design that most programs are mostly made of, and the PEs who seal it.",
  },
  {
    href: "/transportation-recruiter",
    label: "Transportation",
    role: "Owns the corridor: traffic and ITS analysis, planning, and the program leadership an agency deals with directly.",
  },
  {
    href: "/bridge-structural-recruiter",
    label: "Bridge & structural",
    role: "The structures inside the program, plus the load rating and inspection that decide whether one is rehabilitated or replaced.",
  },
  {
    href: "/water-wastewater-recruiter",
    label: "Water & wastewater",
    role: "Treatment, collection and distribution, where the permit rather than the schedule sets what the engineering has to prove.",
  },
  {
    href: "/cei-inspection-recruiter",
    label: "CEI & inspection",
    role: "Everything after the letting: inspectors, office engineers and resident engineers, staffed to the construction contract.",
  },
  {
    href: "/municipal-engineering-recruiter",
    label: "Municipal engineering",
    role: "The owner's side of local work, from development review to the capital plan the program is funded out of.",
  },
];

/* Staffing by phase. This is the page's reason to exist: it is true of a
   program regardless of discipline, and therefore cannot sit on a hub. */
const PHASES = [
  {
    phase: "Planning & environmental",
    hires: "Planners, environmental leads, traffic and hydraulic analysts",
    note: "Hiring here runs ahead of funding certainty, so it is usually one or two people rather than a team. The useful question is whether a candidate has taken a document through the agency that will review this one.",
  },
  {
    phase: "Design & permitting",
    hires: "Project engineers, discipline leads, licensed PEs, CAD and modeling staff",
    note: "The largest and longest hiring phase. It is also where licensure bites: a seal is state-specific, and comity takes weeks, so a hire who is not yet licensed where the work is has a start date the schedule needs to know about.",
  },
  {
    phase: "Letting & construction",
    hires: "CEI inspectors, office engineers, resident engineers, construction managers",
    note: "Demand arrives in groups and on a date the firm does not control. Qualification is checked against the owner's own approved list, because a certification accepted in one state is not automatically accepted next door.",
  },
  {
    phase: "Operations & asset management",
    hires: "Asset management engineers, inspection program leads, plant and maintenance engineers",
    note: "The quietest phase and the one most firms staff late. The work is recurring rather than project-funded, which makes it a permanent hire in a way construction-phase staffing is not.",
  },
];

/* Who lets the work. Owner type changes the hiring process more than the
   engineering does, which is the part clients most often learn the hard way. */
const OWNERS = [
  {
    owner: "State DOTs",
    detail: "Prequalification decides who can bid, and the letting schedule decides when people are needed. Experience with the specific DOT counts for more than years served.",
  },
  {
    owner: "Cities & counties",
    detail: "Council approvals and capital plans set the pace, and public pay bands are fixed and published, so a search is run against what the band can actually attract.",
  },
  {
    owner: "Water & wastewater utilities",
    detail: "The discharge permit governs the engineering, and compliance deadlines, not budget years, create the hiring urgency.",
  },
  {
    owner: "Transit & rail authorities",
    detail: "Federal funding brings its own reporting and procurement rules, and systems work sits alongside civil, so programs staff across two labor markets at once.",
  },
  {
    owner: "Airports & ports",
    detail: "Work happens around live operations, which puts phasing and night work at the center of the job and narrows the pool to people who have done it.",
  },
  {
    owner: "Design-build contractors",
    detail: "Design and construction are on one contract, so the same engineer answers to the schedule and the drawings. Firms hire for people who have worked that way before.",
  },
];

/* A dozen metros, linked to the civil market pages. Not the full fifty: the
   directory belongs to the civil hub, and reprinting it here would be the
   duplicate block this page is built to avoid. These twelve are the crawl
   path from a new page into markets that already have depth. */
const HEADLINE_METROS = [
  "new-york-ny", "los-angeles-ca", "chicago-il", "houston-tx",
  "phoenix-az", "dallas-tx", "atlanta-ga", "washington-dc",
  "seattle-wa", "denver-co", "boston-ma", "miami-fl",
];

export default function InfrastructureRecruiterPage() {
  const metros = HEADLINE_METROS.map((slug) => CITIES.find((c) => c.slug === slug)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c),
  );

  return (
    <>
      <HeaderBackdrop />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Infrastructure Recruiters", path: "/infrastructure-recruiter" },
          ]),
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-950 pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url(/blueprints.jpeg)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-linear-to-b from-navy-950/70 via-navy-950/85 to-navy-950"
            aria-hidden
          />
          <div className="container-x relative">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">{"//"} Infrastructure recruiting</span>
            </div>

            <h1 className="display mt-6 max-w-4xl text-[11vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              Infrastructure recruiters
              <br />
              <span className="text-brand-400">for US capital programs</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              Most recruiting firms treat infrastructure as a sector. We treat it
              as a delivery schedule. A program hires planners before it has
              funding certainty, designers for years after that, an inspection
              team the month a contract is let, and asset management staff long
              after everyone has stopped calling it a project. This is the desk
              that staffs all four.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CAREERS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Search Jobs
              </a>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Submit Resume
              </a>
            </div>
          </div>
        </section>

        {/* Staffing by program phase */}
        <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="mono-label text-amber-500">{"//"} Staffing follows the program</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl text-balance">
                What a capital program needs, and when it needs it
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                The single most common staffing mistake on infrastructure work is
                hiring for the phase you are in rather than the one starting in
                six months. Design leads are recruited in months; a qualified
                inspection team on a letting date is not.
              </p>
            </div>

            <ol className="mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 lg:grid-cols-2">
              {PHASES.map((p, i) => (
                <li key={p.phase} className="flex flex-col bg-white p-8 sm:p-10">
                  <span className="mono-label text-[10px] text-brand-500/70">
                    {`Phase ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-navy-950">{p.phase}</h3>
                  <p className="mono-label mt-3 text-[10px] text-amber-600">{p.hires}</p>
                  <p className="mt-4 text-[15px] leading-7 text-slate-500 text-pretty">{p.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* The desks that make up a program */}
        <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-500">{"//"} Six desks, one program</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                The disciplines a program draws on
              </h2>
              <p className="mt-5 text-slate text-pretty">
                Infrastructure work rarely sits inside one discipline, and a search
                that spans two is run by both desks rather than handed to whoever
                picked up the phone.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DISCIPLINES.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="group flex flex-col border border-navy-950/10 bg-white p-6 transition-colors hover:border-amber-500 hover:bg-mist"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[15px] font-bold text-navy-950 group-hover:text-amber-600">
                      {d.label}
                    </span>
                    <IconArrow className="h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="mt-3 text-[14px] leading-6 text-slate-500">{d.role}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceModels segment="infrastructure-recruiter" />

        {/* Owner types */}
        <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="mono-label text-amber-500">{"//"} Who lets the work</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl text-balance">
                The owner changes the hire more than the engineering does
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                Two roadway engineers with identical resumes are not
                interchangeable if one has only ever worked to a state DOT&apos;s
                standards and the job is for a design-build contractor. This is
                the part of a brief we ask about first.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
              {OWNERS.map((o) => (
                <article key={o.owner} className="flex flex-col bg-white p-8">
                  <span className="inline-flex h-8 w-8 items-center justify-center bg-amber-500/20 text-amber-500">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-950">{o.owner}</h3>
                  <p className="mt-2.5 text-[15px] leading-7 text-slate-500 text-pretty">
                    {o.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Markets */}
        <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-500">{"//"} Markets</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                Infrastructure hiring by market
              </h2>
              <p className="mt-5 text-slate text-pretty">
                Each market page names the public owners that actually let the
                work there, because that is what decides whether an engineer&apos;s
                experience transfers. Fifty metros in total; these are the
                busiest.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {metros.map((c) => (
                <Link
                  key={c.slug}
                  href={`/civil-engineering-recruiter/${c.slug}`}
                  className="group flex items-center justify-between gap-3 border border-navy-950/10 bg-white px-5 py-4 transition-colors hover:border-amber-500 hover:bg-mist"
                >
                  <span>
                    <span className="block text-[15px] font-bold text-navy-950">
                      {c.city}, {c.abbr}
                    </span>
                    <span className="mono-label block text-[9px] text-slate-500">{c.dot}</span>
                  </span>
                  <IconArrow className="h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>

            <Link
              href="/civil-engineering-recruiter"
              className="mono-label mt-10 inline-flex border border-navy-950/20 px-6 py-3.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
            >
              {"All fifty markets →"}
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-navy-950/10 blueprint-light py-20 sm:py-24">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Staffing a program rather than a seat?
                </h2>
                <p className="mt-2 max-w-xl text-ink-300">
                  Tell us which phase it is in, who owns the asset, and what the
                  schedule says. Those three answers shape the search more than
                  the job title does.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Start a search
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <OtherSpecialties exclude="infrastructure-recruiter" />
        <HubFaqs
          group="hiring-through-a-recruiter"
          heading="Hiring for an infrastructure program: common questions"
        />
      </main>
    </>
  );
}
