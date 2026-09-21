import type { Metadata } from "next";
import Image from "next/image";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import Link from "next/link";
import {
  IconCompass,
  IconClipboard,
  IconTarget,
  IconGauge,
  IconShield,
  IconUsers,
  IconArrow,
} from "../components/Icons";
import { CAREERS_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Why Metro Associates | Engineering Recruiting",
  description:
    "What we do differently: a vetted national pipeline, multi-state licensure fluency, and recruiters who understand DOT and infrastructure delivery.",
  alternates: { canonical: "/why-us" },
};

const REASONS = [
  {
    icon: IconCompass,
    title: "Engineering Focus",
    body: "We specialize in civil, structural, transportation, water, MEP, inspection and PE's staffing.",
  },
  {
    icon: IconClipboard,
    title: "DOT & Municipal Expertise",
    body: "Deep understanding of CTDOT, RIDOT, NJDOT, and public infrastructure hiring requirements.",
  },
  {
    icon: IconTarget,
    title: "Passive Talent Access",
    body: "We engage licensed engineers and inspectors not actively applying on job boards.",
  },
  {
    icon: IconGauge,
    title: "Precision Matching",
    body: "Technical alignment, licensure validation, and long-term fit, not resume volume.",
  },
  {
    icon: IconShield,
    title: "Veteran Talent Pipeline",
    body: "We support military veterans transitioning into engineering and infrastructure careers.",
  },
  {
    icon: IconUsers,
    title: "Long-Term Partnerships",
    body: "We operate as an extension of your hiring strategy, not just a staffing vendor.",
  },
];

export default function WhyUsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-blink bg-amber-500" />
                <span className="mono-label text-amber-400">{"//"} Why Choose Us</span>
              </div>
              <h1 className="display mt-6 text-[12vw] leading-[0.92] text-white sm:text-6xl lg:text-[5rem]">
                Why Metro
                <br />
                <span className="text-brand-400">Associates</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-300 text-pretty">
                Engineering recruiting built for infrastructure and DOT markets,
                with the depth, discretion, and precision that publicly funded
                programs demand.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
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
              </div>
            </div>

            {/* Team image */}
            <div className="relative animate-fade-up [animation-delay:120ms]">
              <div className="corners relative overflow-hidden border border-white/12 bg-navy-900">
                <span className="mono-label absolute left-4 top-4 z-10 text-[9px] text-white/70">
                  FIG. A / OUR TEAM
                </span>
                <div className="relative aspect-4/5">
                  <Image
                    src="/why-us.webp"
                    alt="The Metro Associates recruiting team"
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

      {/* Reasons */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} What sets us apart</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Six reasons agencies choose us
            </h2>
          </div>

          <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, body }, i) => (
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
                <h3 className="mt-6 text-xl font-bold text-navy-950">{title}</h3>
                <p className="mt-2.5 text-[15px] leading-7 text-slate-500">{body}</p>
                <span className="mt-6 h-0.5 w-8 bg-amber-500 transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>

          {/* CTA band — kept dark navy for a strong finish on the light section */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Ready to build your team?
              </h3>
              <p className="mt-2 text-ink-300">
                Tell us about the role. We&apos;ll deliver a vetted shortlist, with every
                license and certification verified before it reaches you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
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
