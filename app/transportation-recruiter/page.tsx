import type { Metadata } from "next";
import HubFaqs from "../components/HubFaqs";
import ServiceModels from "../components/ServiceModels";
import Link from "next/link";
import {
  IconArrow, IconCheck, IconGlobe, IconShield, IconTarget, IconLayers,
  IconClipboard, IconStar,
} from "../components/Icons";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../lib/site";
import OtherSpecialties from "../components/OtherSpecialties";
import ClientAwards from "../components/ClientAwards";

/* Transportation engineering recruiting hub — mirrors the layout of
   civil-engineering-recruiter/ and water-wastewater-recruiter/.
   Targets state DOT, federal highway, transit, and multimodal programs
   across the AEC and infrastructure sectors. */

const TICKER = [
  "Highway Design",
  "DOT Program Delivery",
  "Traffic Engineering",
  "Transit & Rail",
  "Transportation Planning",
  "Roadway Rehabilitation",
  "Multimodal Infrastructure",
  "Licensed Professionals",
];

export const metadata: Metadata = {
  title: "Transportation Engineering Staffing | Metro Associates",
  description:
    "Transportation engineering recruiters and DOT staffing. Licensed PEs, highway and traffic engineers, planners and program directors, in all 50 states.",
  keywords: [
    "transportation engineering recruiter",
    "transportation engineer staffing agency",
    "DOT recruiter",
    "highway engineer recruiter",
    "traffic engineer recruiter",
    "infrastructure recruiter AEC",
    "transportation planner recruiter",
    "transit engineer recruiter",
    "transportation project manager recruiter",
  ],
  alternates: { canonical: "/transportation-recruiter" },
  openGraph: {
    title: "Transportation Engineering Staffing | Metro Associates",
    description:
      "Transportation engineering recruiters and DOT staffing. Licensed PEs, highway and traffic engineers, planners and program directors, in all 50 states.",
    url: `${SITE_URL}/transportation-recruiter`,
    siteName: "Metro Associates",
    type: "website",
  },
};

const EXPERTISE = [
  "State DOT & Federal Highway Program Delivery",
  "Highway & Roadway Design (AASHTO, Green Book)",
  "Traffic Engineering & Operations",
  "Transit, Rail & Multimodal Planning",
  "Interchange & Corridor Studies",
  "Transportation Demand Modeling (TDM)",
  "Construction Engineering & Inspection (CEI)",
  "Roadway Rehabilitation & Resurfacing Programs",
];

const SKILLS = [
  "AutoCAD Civil 3D",
  "MicroStation / OpenRoads Designer",
  "Synchro / SimTraffic (signal timing)",
  "VISSIM / Cube (traffic simulation)",
  "TransCAD / Visum (demand modeling)",
  "ArcGIS / GIS-T",
  "Professional Engineer (PE) – Transportation",
  "PTOE (Professional Traffic Operations Engineer)",
  "AICP (transportation planning)",
  "PMP – program-level delivery",
  "NEPA / environmental permitting fluency",
  "FHWA-funded project compliance",
  "Highway Capacity Manual (HCM)",
  "ITS & signal systems",
  "State DOT design standards fluency",
  "CMGC / P3 delivery experience",
];

const ROLES = [
  "Transportation Project Engineer (PE)",
  "Senior Highway Design Engineer",
  "Traffic Engineer / PTOE",
  "Transportation Planner",
  "DOT Program Manager",
  "Roadway Corridor Designer",
  "Multimodal / Transit Planning Engineer",
  "Construction Engineer & Inspector (CEI)",
  "Transportation Project Manager",
  "Director of Transportation Engineering",
];

const SALARIES = [
  { role: "Transportation Engineer (EIT)", range: "$72,000 – $96,000" },
  { role: "Licensed PE – Transportation (Mid)", range: "$105,000 – $150,000" },
  { role: "Senior Transportation PM", range: "$145,000 – $190,000+" },
  { role: "Director of Transportation Engineering", range: "$180,000 – $250,000+" },
];

const WHY = [
  {
    title: "Very Successful Experience Recruiting",
    body: "45+ years of proven results placing transportation engineers on DOT, federal, and private capital programs — from single-discipline PEs to full program delivery teams.",
  },
  {
    title: "AEC & Infrastructure Sector Depth",
    body: "We recruit within the AEC and infrastructure sectors, including civil, transportation, water/wastewater, and project management — giving us cross-disciplinary insight no generalist firm can match.",
  },
  {
    title: "Passive DOT Talent Access",
    body: "Our researchers reach high-performing transportation engineers who are not actively searching job boards — licensed PEs, senior planners, and program managers with active federal and state program experience.",
  },
  {
    title: "Multi-State PE Licensure Fluency",
    body: "We track NCEES Records and comity timelines for transportation PEs relocating across state lines, so a six-week licensure gap does not appear after an offer is accepted.",
  },
  {
    title: "Federal & State Compliance Ready",
    body: "Deep fluency in FHWA funded project requirements, NEPA permitting workflows, state DOT design standards, and DBE reporting — so candidates we present are ready for compliant program environments.",
  },
];

const WHY_ICONS = [IconGlobe, IconShield, IconTarget, IconLayers, IconClipboard];

export default function TransportationRecruiterPage() {
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
              Transportation
              <br />
              <span className="text-brand-400">Engineering Recruiter</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              National recruiting for DOT programs, highway design, traffic engineering, transit
              planning, and multimodal infrastructure across the AEC and infrastructure sectors.
              Licensed PEs, program managers, and transportation planners placed in all 50 states.
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
                National transportation <span className="text-brand-500">recruiting</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                Metro Associates delivers specialized staffing across DOT, federal highway, transit,
                and private capital programs nationwide. With very successful experience recruiting
                within the AEC and infrastructure sectors, including civil, water/wastewater,
                transportation, and project management, we bring cross-disciplinary depth to every search.
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

      <ServiceModels segment="transportation-recruiter" />

      {/* Skills & software */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"// "} What we screen for</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Skills &amp; software we recruit for
            </h2>
            <p className="mt-5 text-slate text-pretty">
              Beyond licensure, every candidate is evaluated against the specific tools,
              certifications, and methods transportation programs actually require.
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
              <h3 className="text-2xl font-bold text-white">Partner with a national transportation recruiter</h3>
              <p className="mt-2 text-ink-300">
                Looking to scale your DOT program team or find your next transportation role?
                Tell us what you need.
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

      <ClientAwards discipline="transportation-recruiter" />

      <OtherSpecialties exclude="transportation-recruiter" />
      <HubFaqs group="civil-engineering" heading="Transportation engineering recruiting: common questions" />
    </main>
  );
}
