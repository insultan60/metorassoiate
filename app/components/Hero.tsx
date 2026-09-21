import { IconArrow, IconCheck, IconStar } from "./Icons";
import { CAREERS_URL } from "../lib/site";

const HIGHLIGHTS = [
  "45+ years of placements",
  "No fee until hired",
  "Always remain 100% free for Job Seekers!",
  "Focus strictly on engineering, architecture, and construction",
];

const TICKER = [
  "Professional Engineers",
  "Bridge Engineering",
  "Civil & Structural Engineering",
  "Construction Inspection",
  "All Engineering Disciplines",
  "Program Management",
  "AEC Consultancies",
  "Licensed Professionals",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[94vh] flex-col justify-center overflow-hidden pt-28"
    >
      {/* Full-bleed background image + overlays.
       *
       * A plain <img> against three pre-sized files, not next/image.
       *
       * Through the optimizer this one photo needed eight transforms (640 to
       * 3840) generated on demand, and every deployment starts that cache
       * empty. The first visitor after a deploy pays for the transform at the
       * width their screen asks for, and when that failed the whole hero
       * rendered as alt text while narrow viewports, whose smaller widths had
       * already been generated, looked fine.
       *
       * The optimizer earns its keep on photos whose dimensions vary. It earns
       * very little here: one fixed background sitting behind a 95%-to-15%
       * navy gradient and a grid overlay. So the variants are built once, at
       * three sizes, and served as static files. No transform, nothing to cold
       * start, and a phone still gets 78KB rather than the full 269KB. */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-interchange-1920.jpg"
          srcSet="/hero-interchange-960.jpg 960w, /hero-interchange-1440.jpg 1440w, /hero-interchange-1920.jpg 1920w"
          sizes="100vw"
          alt="Aerial view of a U.S. highway interchange at sunset: the infrastructure Metro Associates staffs"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* darken left for text legibility, keep skyline visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent" />
        {/* blueprint grid on top of photo */}
        <div className="grid-overlay absolute inset-0 opacity-25" />
      </div>

      {/* accent glow */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="container-x relative w-full pb-14">
        <div className="max-w-3xl animate-fade-up">
          <a
            href={CAREERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-6 inline-flex items-center gap-3 border border-amber-500/40 bg-amber-500/10 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-amber-500 hover:bg-amber-500/20"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="mono-label text-amber-400">Now Hiring</span>
            <span className="hidden h-3 w-px bg-amber-500/30 sm:block" />
            <span className="text-xs font-bold text-white sm:text-sm">
              10 Professional Engineers / All Disciplines
            </span>
            <IconArrow className="h-3.5 w-3.5 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink bg-amber-500" />
            <span className="mono-label text-amber-400">
              {"//"} Greatness relies on your collaborators
            </span>
          </div>

          {/* The H1 carries both halves of the vocabulary this site is
              searched with. Search Console has "civil engineering recruiters"
              at 504 impressions and "civil engineering staffing" at 429, and
              the word staffing appeared nowhere in a heading on this page. */}
          <h1 className="display mt-6 text-[12.5vw] leading-[0.92] text-white sm:text-6xl lg:text-[5.2rem]">
            Engineering
            <br />
            recruiting &amp;
            <br />
            staffing.
          </h1>

          <p className="mt-6 flex items-center gap-3 text-2xl font-bold text-amber-500 sm:text-3xl">
            <span className="hidden h-px w-10 bg-amber-500 sm:block" />
            45+ years of results.
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-200 text-pretty">
            Tired of endless searches for the right engineering talent? Metro
            Associates is a specialist engineering staffing agency and search
            firm, and we transform your hiring process with results you can
            count on. We help companies across the United States hire
            qualified, experienced technical, engineering, and licensed
            professionals.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
            >
              Our Services
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-amber-500 hover:text-amber-400"
            >
              Contact Us
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink-200">
                <span className="inline-flex h-5 w-5 items-center justify-center bg-amber-500/20 text-amber-400">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
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
      <div className="relative border-y border-white/10 bg-navy-950/85 py-4 backdrop-blur-sm">
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
  );
}
