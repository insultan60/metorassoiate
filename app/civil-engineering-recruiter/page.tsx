import type { Metadata } from "next";
import HubFaqs from "../components/HubFaqs";
import ServiceModels from "../components/ServiceModels";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrow, IconCheck, IconGlobe, IconShield, IconTarget, IconLayers,
  IconClipboard, IconPin, IconStar,
} from "../components/Icons";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../lib/site";
import { CITIES, EXPERTISE, SKILLS, ROLES, SALARIES, WHY } from "../lib/cities";
import OtherSpecialties from "../components/OtherSpecialties";
import ClientAwards from "../components/ClientAwards";

// Short phrases for the scrolling ticker bar — same treatment as the
// homepage hero (components/Hero.tsx), scoped to this page's discipline.
const TICKER = [
  "Highway Design",
  "Bridge Engineering",
  "Transportation Planning",
  "Construction Inspection",
  "DOT Compliance",
  "Program Management",
  "AEC Consultancies",
  "Licensed Professionals",
];

export const metadata: Metadata = {
  title: "Civil Engineering Recruiters & Staffing | Metro Associates",
  description:
    "Civil engineering recruiters, staffing and executive headhunters. We place licensed PEs, project managers and technical leads on DOT and capital programs.",
  keywords: [
    "civil engineering recruiter",
    "civil engineering staffing agency",
    "transportation engineer recruiter",
    "DOT staffing agency",
    "bridge engineer recruiter",
    "infrastructure staffing",
    "construction inspection staffing",
    "civil engineer jobs",
  ],
  alternates: { canonical: "/civil-engineering-recruiter" },
  openGraph: {
    title: "Civil Engineering Recruiters & Staffing | Metro Associates",
    description:
      "Civil engineering recruiters, staffing and executive headhunters. We place licensed PEs, project managers and technical leads on DOT and capital programs.",
    url: `${SITE_URL}/civil-engineering-recruiter`,
    siteName: "Metro Associates",
    type: "website",
  },
};

const WHY_ICONS = [IconGlobe, IconShield, IconTarget, IconLayers, IconClipboard];

export default function NationalRecruiterPage() {
  return (
    <main>
      {/* Hero — same treatment as the homepage hero (components/Hero.tsx):
          full-bleed photo, gradient overlays, floating stat badge, ticker. */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image.png"
            alt="Aerial view of a multi-level highway interchange: the infrastructure Metro Associates staffs"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent" />
          <div className="grid-overlay absolute inset-0 opacity-25" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="container-x relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">{"//"} National Engineering Staffing</span>
            </div>
            <h1 className="display mt-6 text-[11vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.6rem]">
              Civil Engineering Recruiter
              <br />
              <span className="text-brand-400">United States</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              Premier national engineering staffing for transportation, infrastructure,
              and municipal projects across all 50 states. From major metropolitan hubs
              to rural infrastructure expansions, we help firms hire licensed PEs,
              project managers, and technical specialists.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400">
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
            2&ndash;4<span className="text-lg text-amber-500"> wks</span>
          </p>
          <p className="mono-label mt-1 text-[9px] text-ink-400">Avg. time-to-fill</p>
        </div>

        {/* Specialty ticker */}
        <div className="relative mt-14 border-y border-white/10 bg-navy-950/85 py-4 backdrop-blur-sm">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-8 pr-8">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="mono-label text-ink-300">{t}</span>
                  <span className="text-amber-500">✦</span>
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
              <span className="mono-label text-amber-500">{"//"} National expertise</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                National civil engineering <span className="text-brand-500">recruiting</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                Metro Associates provides specialized staffing on a national scale,
                supporting firms working with state DOTs, federal agencies, and private
                development. Our reach extends across the Northeast, Southeast, Midwest,
                Gulf Coast, and Pacific West.
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

      <ServiceModels segment="civil-engineering-recruiter" />

      {/* Cities directory */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Markets we serve</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Civil engineering recruiting by city
            </h2>
            <p className="mt-5 text-slate text-pretty">
              Explore our specialized recruiting in these metros, with more markets
              added regularly.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/civil-engineering-recruiter/${c.slug}`}
                className="group flex items-center justify-between gap-3 border border-navy-950/10 bg-white p-5 transition-colors hover:border-amber-500 hover:bg-mist"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center border border-navy-950/12 text-brand-500 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                    <IconPin className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold text-navy-950">{c.city}, {c.abbr}</span>
                    <span className="mono-label block text-[9px] text-slate-500">{c.dot}</span>
                  </span>
                </span>
                <IconArrow className="h-4.5 w-4.5 text-amber-500 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roles + salaries */}
      <section id="compensation" className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <span className="mono-label text-amber-500">{"//"} Roles we place nationwide</span>
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

      {/* Skills */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Skills we screen for</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Civil engineering skills & software we recruit for
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate text-pretty">
              Every candidate we put forward is screened against the same
              bar nationwide: the design software, licensure, and code
              fluency the role actually demands.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 border border-navy-950/12 bg-white px-4 py-2.5 text-sm font-medium text-navy-950"
              >
                <IconCheck className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why + CTA */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Why partner with us</span>
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
              <h3 className="text-2xl font-bold text-white">Partner with a national civil engineering recruiter</h3>
              <p className="mt-2 text-ink-300">
                Looking to scale your team or explore new opportunities across the U.S.?
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

      <ClientAwards discipline="civil-engineering-recruiter" />

      <OtherSpecialties exclude="civil-engineering-recruiter" />
      <HubFaqs group="civil-engineering" heading="Civil engineering recruiting: common questions" />

    </main>
  );
}
