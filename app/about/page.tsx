import type { Metadata } from "next";
import Image from "next/image";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import YouTubeFacade from "../components/YouTubeFacade";
import Link from "next/link";
import {
  IconGlobe,
  IconBridge,
  IconLayers,
  IconBolt,
  IconClipboard,
  IconCompass,
  IconTarget,
  IconShield,
  IconGauge,
  IconArrow,
  IconCheck,
} from "../components/Icons";
import { APPLY_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "About Metro Associates | Engineering Recruiters",
  description:
    "Who we are, how we recruit, and why engineering firms and public agencies use us to fill licensed and technical roles across the United States.",
  alternates: { canonical: "/about" },
};

// `href` is only set for disciplines that have a real landing page to send
// people to. The rest render as plain (non-clickable) cards rather than
// linking somewhere that 404s — see /civil-engineering-recruiter/page.tsx
// for the pattern to follow once a discipline gets its own page.
const DISCIPLINES = [
  { icon: IconGlobe, label: "Civil & Transportation", href: "/civil-engineering-recruiter" },
  { icon: IconBridge, label: "Bridge & Structural", href: "/bridge-structural-recruiter" },
  { icon: IconLayers, label: "Water & Wastewater", href: "/water-wastewater-recruiter" },
  { icon: IconBolt, label: "MEP Engineering", href: "/mep-engineering-recruiter" },
  { icon: IconClipboard, label: "CEI & Inspection", href: "/cei-inspection-recruiter" },
  { icon: IconCompass, label: "Municipal Engineering", href: "/municipal-engineering-recruiter" },
];

const APPROACH = [
  {
    icon: IconTarget,
    title: "Targeted Engineering Recruiting",
    body: "We pursue the exact technical profile a role requires, not resume volume.",
  },
  {
    icon: IconShield,
    title: "Licensed PE & Inspection Talent",
    body: "Licensure and certifications validated before a candidate reaches you.",
  },
  {
    icon: IconCompass,
    title: "Confidential Searches",
    body: "Discreet executive and specialist searches for sensitive hires.",
  },
  {
    icon: IconGauge,
    title: "Rapid Project Staffing",
    body: "Fast mobilization when programs need qualified people on the ground.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero + intro */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-blink bg-amber-500" />
                <span className="mono-label text-amber-400">{"//"} About Us / Over 45 Years</span>
              </div>
              <h1 className="display mt-6 text-[12vw] leading-[0.92] text-white sm:text-6xl lg:text-[4.6rem]">
                About Metro
                <br />
                <span className="text-brand-400">Associates</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-300 text-pretty">
                <span className="font-semibold text-white">
                  A specialized engineering recruiting firm.
                </span>{" "}
                Metro Associates focuses exclusively on engineering and
                infrastructure staffing, supporting civil, structural,
                transportation, water, wastewater, MEP, and construction
                inspection markets nationwide.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
                >
                  Request Talent
                  <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  Apply to Jobs
                </a>
              </div>
            </div>

            {/* Group / meeting image */}
            <div className="relative animate-fade-up [animation-delay:120ms]">
              <div className="corners relative overflow-hidden border border-white/12 bg-navy-900">
                <span className="mono-label absolute left-4 top-4 z-10 text-[9px] text-white/70">
                  FIG. A / THE FIRM
                </span>
                <div className="relative aspect-4/5">
                  <Image
                    src="/about-team.webp"
                    alt="Metro Associates team in a strategy session"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company video. Kept separate from the homepage clip, which is a
          role-specific outreach piece — this one introduces the firm, which
          is what someone on /about came for. */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Watch</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Engineering talent &amp;{" "}
              <span className="text-brand-500">infrastructure expertise</span>
            </h2>
            <p className="mt-4 text-slate text-pretty">
              A short introduction to how we recruit, and the kind of work our
              engineers deliver.
            </p>
          </div>
          <div className="relative mt-12 aspect-video overflow-hidden border border-navy-950/15 bg-navy-950 shadow-[0_30px_80px_rgba(11,20,38,0.25)]">
            <YouTubeFacade
              videoId="k-xlidu5mug"
              title="Metro Associates | engineering talent & infrastructure expertise"
            />
          </div>
        </div>
      </section>

      {/* Core disciplines */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 01 / Core Disciplines</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Where we go{" "}
              <span className="text-brand-500">deep</span>
            </h2>
            <p className="mt-4 text-slate text-pretty">
              Six engineering markets we recruit for, day in and day out.
            </p>
          </div>

          <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
            {DISCIPLINES.map(({ icon: Icon, label, href }, i) => {
              const cardClass = "group relative flex items-center gap-5 bg-white p-7 transition-colors duration-300 hover:bg-mist";
              const content = (
                <>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-navy-950/12 text-brand-500 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-navy-950">{label}</h3>
                  {href ? (
                    <IconArrow className="ml-auto h-4.5 w-4.5 shrink-0 text-navy-950/15 transition-all group-hover:translate-x-1 group-hover:text-amber-500" />
                  ) : (
                    <span className="mono-label absolute right-6 top-6 text-xs text-navy-950/15 transition-colors group-hover:text-amber-500/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </>
              );
              return href ? (
                <Link key={label} href={href} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <article key={label} className={cardClass}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure expertise + Veteran focus (with flag image) */}
      <section className="relative border-t border-white/10 blueprint-shade py-24 sm:py-28">
        <div className="container-x">
          <div className="grid items-stretch gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div className="flex flex-col justify-center">
              <div>
                <span className="mono-label text-amber-500">{"//"} 02 / Infrastructure Expertise</span>
                <h2 className="display mt-5 text-3xl text-white sm:text-4xl">
                  Built for publicly funded programs
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink-300 text-pretty">
                  We support firms delivering DOT, municipal, and federally
                  funded infrastructure programs, including transportation
                  modernization, bridge rehabilitation, and utility upgrades.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-10">
                <span className="mono-label text-amber-500">{"//"} Veteran Talent Focus</span>
                <h3 className="display mt-5 text-3xl text-white sm:text-4xl">
                  Honoring service, building careers
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink-300 text-pretty">
                  We assist military veterans transitioning into engineering and
                  infrastructure careers, aligning proven leadership experience
                  with demanding technical roles.
                </p>
              </div>
            </div>

            {/* Flag / veterans image */}
            <div className="relative">
              <div className="corners relative h-full overflow-hidden border border-white/12 bg-navy-900">
                <span className="mono-label absolute left-4 top-4 z-10 text-[9px] text-white/70">
                  FIG. B / VETERAN TALENT
                </span>
                <div className="relative h-full min-h-[26rem]">
                  <Image
                    src="/veteran-flag.webp"
                    alt="U.S. military service members honoring the American flag"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-bottom p-4"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 03 / Our Approach</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              How we work
            </h2>
          </div>

          <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map(({ icon: Icon, title, body }, i) => (
              <article
                key={title}
                className="group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-mist"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-navy-950/12 text-brand-500 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mono-label text-2xl font-bold text-navy-950/10 transition-colors group-hover:text-amber-500/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy-950">{title}</h3>
                <p className="mt-2.5 text-[15px] leading-7 text-slate-500">{body}</p>
                <span className="mt-6 h-0.5 w-8 bg-amber-500 transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>

          {/* Standards strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border border-navy-950/10 bg-white p-6">
            <span className="mono-label text-slate-500">Every candidate vetted for</span>
            {["DOT specifications", "FHWA standards", "AASHTO guidelines", "QA/QC protocols", "Safety compliance"].map(
              (s) => (
                <span key={s} className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <IconCheck className="h-3.5 w-3.5 text-amber-500" />
                  {s}
                </span>
              )
            )}
          </div>

          {/* CTA band — kept dark navy for a strong finish on the light section */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Let&apos;s deliver your next hire
              </h3>
              <p className="mt-2 text-ink-300">
                Dependable engineering talent that supports safety, compliance,
                and successful project delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
