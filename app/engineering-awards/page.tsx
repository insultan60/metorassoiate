import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "../components/Icons";
import AwardMark from "../components/AwardMark";
import { AWARD_PROGRAMS, AWARD_ORGS, ACEC_STATES, ACEC_METRO, ENR_REGIONS } from "../lib/awards";
import { SITE_URL } from "../lib/site";
import { ORG, OG_IMAGE } from "../lib/seo";

/* The award landscape, in one place.
 *
 * The discipline hubs each carry a short list of the programs relevant to
 * them; this is where the whole picture lives, including the state-level
 * route that most firms actually win through. Kept as its own URL rather
 * than repeated across 300+ city pages: the same block on every page is
 * boilerplate, whereas one page that answers "which engineering awards can a
 * firm in my state enter?" is a page worth ranking.
 *
 * Same rules as lib/awards.ts: no claimed wins, no borrowed badges, every
 * link points at the organization that runs the program.
 */

export const metadata: Metadata = {
  title: "Engineering Awards by State | Metro Associates",
  description:
    "The award programs our client firms compete in, ACEC Engineering Excellence, ENR Best Projects, ASHRAE, ASCE, AISC, APWA and more, with entry routes.",
  keywords: [
    "engineering excellence awards",
    "ACEC awards by state",
    "ENR best projects",
    "ASHRAE technology awards",
    "award winning engineering firms",
    "engineering award programs",
  ],
  alternates: { canonical: `${SITE_URL}/engineering-awards` },
  openGraph: {
    title: "Engineering Awards by State | ACEC, ENR, ASHRAE and more",
    description:
      "The award programs the engineering firms we staff compete in, national and state by state.",
    url: `${SITE_URL}/engineering-awards`,
    type: "website",
    images: OG_IMAGE,
  },
};

const DISCIPLINE_LABELS: Record<string, string> = {
  "civil-engineering-recruiter": "Civil",
  "bridge-structural-recruiter": "Bridge & Structural",
  "cei-inspection-recruiter": "CEI",
  "mep-engineering-recruiter": "MEP",
  "municipal-engineering-recruiter": "Municipal",
  "water-wastewater-recruiter": "Water & Wastewater",
};

const ACEC_DIRECTORY = "https://www.acec.org/member-center/get-involved/mo-state-sites/";

export default function EngineeringAwardsPage() {
  const allStates = [...ACEC_STATES, ACEC_METRO];

  return (
    <>
      <main>
        <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/bridge-dusk.jpeg"
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
            <div className="grid-overlay absolute inset-0 opacity-25" />
          </div>

          <div className="container-x relative">
            <div className="max-w-3xl animate-fade-up">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-blink bg-amber-500" />
                <span className="mono-label text-amber-400">{"//"} Recognition</span>
              </div>
              <h1 className="display mt-6 text-[10vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.2rem]">
                The engineering awards
                <br />
                <span className="text-brand-400">our clients compete for</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
                We staff the firms whose projects go up for these programs, and the
                engineers we place are the ones who deliver them. Metro
                doesn&rsquo;t enter, a recruiting firm isn&rsquo;t eligible for an
                engineering award, but knowing what these juries reward is part of
                knowing which résumé is actually strong.
              </p>
            </div>
          </div>
        </section>

        {/* The wall. Marks are our own typographic tiles until we hold
            permission for each organization's own file — see public/awards. */}
        <section className="relative border-t border-navy-950/10 blueprint-light py-14">
          <div className="container-x">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {AWARD_ORGS.map((o) => (
                <a
                  key={o.abbr}
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={o.org}
                  title={o.org}
                  className="transition-opacity hover:opacity-70"
                >
                  <AwardMark abbr={o.abbr} org={o.org} logo={o.logo} onDark={o.onDark} size="lg" />
                </a>
              ))}
            </div>
            {/* The sentence that makes showing someone else's mark honest:
                it says who owns it and what it isn't claiming. Nominative
                use — naming a program by its own mark — stands or falls on
                exactly this being unmissable, so it sits under the wall
                rather than in a footer nobody reads. */}
            <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
              Each logo is the trademark of the organization that runs the program, shown to identify it. Metro Associates is not affiliated with, endorsed by, or a winner of any of them; our clients are the entrants.
            </p>
          </div>
        </section>

        {/* National & cross-discipline programs */}
        <section className="relative border-t border-navy-950/10 bg-paper py-20 sm:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-500">{"//"} 01</span>
              <h2 className="display mt-4 text-3xl text-navy-950 sm:text-4xl">
                The programs
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate text-pretty">
                Fourteen programs, each linked to the organization that runs it.
                Several start at chapter or state level and advance nationally,
                which is what makes them winnable for a regional firm rather than
                only for the giants.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {AWARD_PROGRAMS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/engineering-awards/${a.slug}`}
                  className="group flex flex-col gap-3 border border-navy-950/10 bg-white p-6 transition-colors hover:border-amber-500 hover:bg-mist"
                >
                  <span className="flex items-center gap-3">
                    <AwardMark abbr={a.abbr} org={a.org} logo={a.logo} onDark={a.onDark} size="sm" />
                    <span className="mono-label text-[10px] text-slate-500">{a.org}</span>
                  </span>
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-[17px] font-bold leading-snug text-navy-950">
                      {a.name}
                    </span>
                    <IconArrow className="mt-1 h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-500">{a.what}</span>
                  <span className="mt-auto flex flex-wrap items-center gap-2 pt-1">
                    <span className="mono-label text-[9px] text-brand-500/80">{a.reach}</span>
                    <span className="text-navy-950/20">|</span>
                    <span className="text-[11px] text-slate-500">
                      {a.disciplines === "all"
                        ? "All disciplines"
                        : a.disciplines.map((d) => DISCIPLINE_LABELS[d]).join(" · ")}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* State-by-state ACEC route */}
        <section className="relative border-t border-navy-950/10 blueprint-light py-20 sm:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-500">{"//"} 02</span>
              <h2 className="display mt-4 text-3xl text-navy-950 sm:text-4xl">
                Engineering Excellence, state by state
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate text-pretty">
                ACEC requires national entries to come up through one of its 51
                state and metropolitan member organizations, so each of these runs
                its own Engineering Excellence competition first, with categories
                including Building/Technology Systems, Energy, Water, Transportation
                and Structural. Winning at state level is the route to the national
                Grand Conceptor.
              </p>
            </div>

            <ul className="mt-12 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
              {allStates.map((state, i) => (
                <li key={state} className="flex items-baseline gap-3 bg-white px-5 py-3.5">
                  <span className="mono-label text-[9px] text-brand-500/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-navy-950">
                    ACEC {state} Engineering Excellence Awards
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={ACEC_DIRECTORY}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label group mt-6 inline-flex items-center gap-2 text-brand-500 transition-colors hover:text-amber-500"
            >
              ACEC member organization directory
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* ENR regional route */}
        <section className="relative border-t border-navy-950/10 bg-paper py-20 sm:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-500">{"//"} 03</span>
              <h2 className="display mt-4 text-3xl text-navy-950 sm:text-4xl">
                ENR&rsquo;s regional editions
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate text-pretty">
                ENR runs Best Projects across every state, Washington DC and Puerto
                Rico through these regional editions. Category winners advance to
                the national Best of the Best.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {ENR_REGIONS.map((r) => (
                <span
                  key={r}
                  className="border border-navy-950/10 bg-white px-4 py-2 text-sm font-medium text-navy-950"
                >
                  ENR {r}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-dark relative isolate overflow-hidden border-t border-white/10 py-20 sm:py-24">
          <div className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-20" />
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-400">{"//"} Next step</span>
              <h2 className="display mt-4 text-3xl text-white sm:text-4xl">
                Staffing an award-calibre project?
              </h2>
              <p className="mt-4 text-lg leading-8 text-ink-300 text-pretty">
                Tell us the project and the licensure it needs. We recruit
                nationally across civil, bridge, CEI, MEP, municipal and
                water/wastewater.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
                >
                  Request talent
                  <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/index_themall_awards"
                  className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  Salary guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Engineering awards our clients compete for",
            url: `${SITE_URL}/engineering-awards`,
            provider: { "@id": ORG["@id"] },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: AWARD_PROGRAMS.length,
              itemListElement: AWARD_PROGRAMS.map((a, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `${a.org} ${a.name}`,
                url: a.url,
              })),
            },
          }),
        }}
      />
    </>
  );
}
