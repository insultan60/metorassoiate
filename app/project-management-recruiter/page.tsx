import type { Metadata } from "next";
import HubFaqs from "../components/HubFaqs";
import Link from "next/link";
import {
  IconArrow, IconCheck, IconGlobe, IconShield, IconTarget, IconLayers,
  IconClipboard, IconStar,
} from "../components/Icons";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../lib/site";
import OtherSpecialties from "../components/OtherSpecialties";
import ClientAwards from "../components/ClientAwards";

/* Project management recruiting hub — mirrors the layout of other discipline hubs.
   Targets AEC program directors, infrastructure project managers, construction
   managers, and owner's representative roles across the AEC and infrastructure sectors,
   including civil, water/wastewater, transportation, and project management. */

const TICKER = [
  "AEC Program Management",
  "Infrastructure Project Delivery",
  "Owner's Representative",
  "Construction Management",
  "Capital Program Oversight",
  "Risk & Schedule Control",
  "Earned Value Management",
  "Licensed Professionals",
];

export const metadata: Metadata = {
  title: "AEC & Infrastructure Project Management Recruiters | Metro Associates",
  description:
    "National project management recruiters for the AEC and infrastructure sectors, including civil, water/wastewater, transportation, and construction. Very successful experience recruiting program directors, PMs, and owner's representatives nationwide.",
  keywords: [
    "AEC project management recruiter",
    "infrastructure project manager recruiter",
    "construction project manager staffing",
    "capital program manager recruiter",
    "owner representative recruiter",
    "program director recruiter AEC",
    "PMP recruiter engineering",
    "civil project management staffing agency",
    "project management recruiter infrastructure",
  ],
  alternates: { canonical: "/project-management-recruiter" },
  openGraph: {
    title: "AEC & Infrastructure Project Management Recruiters | Metro Associates",
    description:
      "National project management recruiters for the AEC and infrastructure sectors, including civil, water/wastewater, transportation, and construction. Very successful experience recruiting program directors, PMs, and owner's representatives nationwide.",
    url: `${SITE_URL}/project-management-recruiter`,
    siteName: "Metro Associates",
    type: "website",
  },
};

const EXPERTISE = [
  "AEC Capital Program & Project Management",
  "Infrastructure Program Delivery (DOT, Municipal)",
  "Construction Management at Risk (CMAR) & GC/CM",
  "Owner's Representative Staffing",
  "Design-Build & P3 Project Oversight",
  "Risk, Schedule & Budget Control",
  "Earned Value Management (EVM)",
  "Stakeholder Coordination & Public Agency Liaison",
];

const SKILLS = [
  "PMP (Project Management Professional)",
  "CCM (Certified Construction Manager)",
  "PE License (preferred for technical PMs)",
  "Primavera P6 / P6 EPPM",
  "Microsoft Project",
  "Procore / Autodesk Construction Cloud",
  "Earned Value Management (EVM)",
  "Risk Register & Monte Carlo analysis",
  "Design-Build / P3 delivery",
  "Federal DBE / SBE compliance",
  "NEC / AIA contract administration",
  "NEPA coordination",
  "Preconstruction services",
  "Budget controls & cost forecasting",
  "Stakeholder & public agency reporting",
  "Commissioning & closeout management",
];

const ROLES = [
  "Program Director (Capital Programs)",
  "Infrastructure Project Manager",
  "Construction Manager",
  "Owner's Representative",
  "Design-Build Project Manager",
  "Senior Program Controls Manager",
  "Risk & Schedule Manager",
  "Project Controls Engineer",
  "Deputy Program Manager",
  "VP / Director of Project Delivery",
];

const SALARIES = [
  { role: "Project Manager (Mid-Level)", range: "$110,000 – $155,000" },
  { role: "Senior Infrastructure PM", range: "$150,000 – $200,000+" },
  { role: "Program Director", range: "$185,000 – $260,000+" },
  { role: "VP of Project Delivery", range: "$210,000 – $300,000+" },
];

const WHY = [
  {
    title: "Very Successful Experience Recruiting",
    body: "45+ years placing project management leaders on capital programs — from single-project PMs to program directors overseeing billion-dollar infrastructure portfolios.",
  },
  {
    title: "Full AEC & Infrastructure Sector Coverage",
    body: "We recruit within the AEC and infrastructure sectors, including civil, water/wastewater, transportation, and project management — so we match PMs to the technical programs they're actually qualified to run.",
  },
  {
    title: "Executive & Senior Level Access",
    body: "Program directors and senior PMs are rarely on job boards. Our executive search capability reaches leaders who are open to the right opportunity, not the next listing.",
  },
  {
    title: "Certification & PE Validation",
    body: "We verify PMP, CCM, and PE credentials before any name reaches a client — including active status with the issuing body, not just a self-reported claim on a resume.",
  },
  {
    title: "Delivery Model Fluency",
    body: "Whether the program is traditional design-bid-build, CMAR, design-build, or a P3, we present candidates whose experience matches the contract structure rather than the closest available name.",
  },
];

const WHY_ICONS = [IconGlobe, IconShield, IconTarget, IconLayers, IconClipboard];

export default function ProjectManagementRecruiterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">{"// "} AEC & Infrastructure Staffing</span>
            </div>
            <h1 className="display mt-6 text-[10.5vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              Project Management
              <br />
              <span className="text-brand-400">Recruiter</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              National recruiting for program directors, infrastructure PMs, construction managers,
              and owner&apos;s representatives — with very successful experience recruiting within the
              AEC and infrastructure sectors, including civil, water/wastewater, transportation,
              and project management. We fill senior and executive PM roles in all 50 states.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={CAREERS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400">
                Search Jobs
              </a>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400">
                Submit Resume
              </a>
            </div>
          </div>
        </div>

        {/* Floating credibility badge */}
        <div className="pointer-events-none absolute bottom-28 right-6 z-10 hidden border border-white/15 bg-navy-950/70 px-5 py-4 backdrop-blur-sm lg:block">
          <div className="flex gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-3.5 w-3.5" />
            ))}
          </div>
          <p className="mt-2 text-3xl font-extrabold text-white">
            45<span className="text-lg text-amber-500">+ yrs</span>
          </p>
          <p className="mono-label mt-1 text-[9px] text-ink-400">AEC sector experience</p>
        </div>

        {/* Specialty ticker */}
        <div className="relative mt-14 border-y border-white/10 bg-navy-950/85 py-4 backdrop-blur-sm">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-8 pr-8">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="mono-label text-ink-300">{t}</span>
                  <span className="text-amber-500">&#10022;</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="mono-label text-amber-500">{"// "} National expertise</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                National project management <span className="text-brand-500">recruiting</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                Metro Associates delivers specialized PM staffing for capital programs, public agency
                delivery, and private AEC clients nationwide. Our very successful experience recruiting
                within the AEC and infrastructure sectors gives us the technical depth to match a
                program director to the delivery model, budget tier, and regulatory environment the
                role actually operates in.
              </p>
            </div>
            <div className="relative overflow-hidden border border-brand-500/25 bg-mist p-8">
              <div className="blueprint-light absolute inset-0 opacity-70" />
              <div className="relative">
                <p className="mono-label text-brand-600">Recruiting expertise</p>
                <ul className="mt-6 grid gap-x-6 gap-y-4">
                  {EXPERTISE.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-[15px] font-medium text-navy-950">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-amber-500/20 text-amber-500">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & software */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"// "} What we screen for</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Skills &amp; software we recruit for
            </h2>
            <p className="mt-5 text-slate text-pretty">
              Beyond PMP and CCM, every PM candidate is evaluated against the specific
              platforms, contract models, and delivery frameworks the role demands.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 border border-navy-950/10 bg-white px-4 py-2 text-sm font-medium text-navy-950"
              >
                <IconCheck className="h-3.5 w-3.5 text-amber-500" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Roles + salaries */}
      <section id="compensation" className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <span className="mono-label text-amber-500">{"// "} Roles we place nationwide</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">Roles we place</h2>
              <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {ROLES.map((r, i) => (
                  <div key={r} className="flex items-center gap-3 border-b border-navy-950/10 pb-4 text-[15px] font-medium text-navy-950">
                    <span className="mono-label text-[10px] text-brand-500/70">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-1.5 w-1.5 shrink-0 bg-amber-500" />
                    {r}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-navy-950/10 bg-white p-8 sm:p-10">
              <p className="mono-label text-slate-500">2026 national compensation trends</p>
              <div className="mt-6 flex flex-col divide-y divide-navy-950/10">
                {SALARIES.map((s) => (
                  <div key={s.role} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[15px] font-medium text-navy-950">{s.role}</span>
                    <span className="display text-lg text-amber-500 sm:text-xl">{s.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why + CTA */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"// "} Why partner with us</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Why firms partner with Metro Associates
            </h2>
          </div>
          <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <article key={w.title} className="group flex flex-col bg-white p-8 transition-colors hover:bg-mist">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-navy-950/12 text-brand-500 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-navy-950">{w.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-7 text-slate-500">{w.body}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">Partner with a national AEC project management recruiter</h3>
              <p className="mt-2 text-ink-300">
                Need a program director, senior PM, or construction manager for your next capital
                program? Tell us what you need.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400">
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400">
                Apply to Jobs
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClientAwards discipline="project-management-recruiter" />

      <OtherSpecialties exclude="project-management-recruiter" />
      <HubFaqs group="civil-engineering-recruiter" heading="AEC project management recruiting: common questions" />
    </main>
  );
}
