import type { Metadata } from "next";
import HubFaqs from "../components/HubFaqs";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrow, IconBolt, IconBridge, IconClipboard, IconCompass, IconPin, IconRefresh,
} from "../components/Icons";
import { SALARIES } from "../lib/cities";
import { CEI_SALARIES } from "../lib/ceiInspection";
import { MEP_SALARIES } from "../lib/mep";
import { MUNICIPAL_SALARIES } from "../lib/municipalEngineering";
import { WATER_SALARIES } from "../lib/waterWastewater";
import { BRIDGE_SALARIES } from "../lib/bridgeStructural";
import { SITE_URL } from "../lib/site";
import { ORG, OG_IMAGE } from "../lib/seo";

/* Every role we place, and what it pays — the whole set on one page.
 *
 * These bands already existed, one discipline at a time, buried in the
 * middle of six recruiter pages. Nobody comparing a civil PE against an MEP
 * PE could see both without opening two pages and scrolling, and the
 * question people actually arrive with — "what does this work pay in the
 * US?" — had no single URL to land on.
 *
 * The numbers are not restated here. Each table reads the same exported
 * array its discipline page uses, so a band updated once is updated
 * everywhere and this page can never quietly drift out of step with the
 * page a visitor came from.
 *
 * Colour: a light section MUST set its own background. The body is navy
 * (globals.css :root --background), so a section left transparent renders
 * navy text on navy — which is exactly how this page first shipped.
 *
 * The URL is the client's, kept verbatim rather than tidied into
 * /salary-guide.
 */

const GROUPS = [
  {
    slug: "civil-engineering-recruiter",
    discipline: "Civil Engineering",
    icon: IconCompass,
    blurb: "Design, roadway and site civil roles across public infrastructure programs.",
    salaries: SALARIES,
  },
  {
    slug: "bridge-structural-recruiter",
    discipline: "Bridge & Structural",
    icon: IconBridge,
    blurb:
      "Bridge design, load rating and vertical structural engineering, from detailer through director.",
    salaries: BRIDGE_SALARIES,
  },
  {
    slug: "cei-inspection-recruiter",
    discipline: "CEI & Construction Inspection",
    icon: IconClipboard,
    blurb: "Field inspection and resident engineering on state DOT and municipal work.",
    salaries: CEI_SALARIES,
  },
  {
    slug: "mep-engineering-recruiter",
    discipline: "MEP Engineering",
    icon: IconBolt,
    blurb: "Mechanical, electrical and plumbing design for buildings and data centers.",
    salaries: MEP_SALARIES,
  },
  {
    slug: "municipal-engineering-recruiter",
    discipline: "Municipal Engineering",
    icon: IconPin,
    blurb: "City engineering and public works, from EIT through department head.",
    salaries: MUNICIPAL_SALARIES,
  },
  {
    slug: "water-wastewater-recruiter",
    discipline: "Water & Wastewater",
    icon: IconRefresh,
    blurb: "Treatment, collection and conveyance engineering for utilities and consultants.",
    salaries: WATER_SALARIES,
  },
];

const TOTAL_ROLES = GROUPS.reduce((n, g) => n + g.salaries.length, 0);

/** Anchor for the jump nav — derived, so a renamed discipline can't leave a
    dead link behind. */
const anchorOf = (slug: string) => `band-${slug}`;

export const metadata: Metadata = {
  // Kept under ~60 characters so Google shows it whole rather than truncating.
  title: `Engineering Salary Guide | ${TOTAL_ROLES} US Roles | Metro Associates`,
  description: `US pay ranges for ${TOTAL_ROLES} engineering titles: civil, bridge, CEI inspection, MEP, municipal and water/wastewater, by seniority.`,
  keywords: [
    "engineering salary guide",
    "civil engineer salary",
    "structural engineer salary",
    "CEI inspector salary",
    "MEP engineer salary",
    "municipal engineer salary",
    "water wastewater engineer salary",
    "engineering recruiter salary ranges",
  ],
  alternates: { canonical: `${SITE_URL}/index_themall_awards` },
  openGraph: {
    title: "Engineering Salary Guide | US Pay Ranges by Role",
    description: `${TOTAL_ROLES} engineering and infrastructure titles with US compensation ranges by seniority.`,
    url: `${SITE_URL}/index_themall_awards`,
    type: "website",
    images: OG_IMAGE,
  },
};

const STATS = [
  { value: String(TOTAL_ROLES), label: "Titles benchmarked" },
  { value: String(GROUPS.length), label: "Disciplines" },
  { value: "50", label: "States covered" },
];

export default function SalaryGuidePage() {
  return (
    <>
      <main>
        {/* Hero — dark, like every other page header on the site. */}
        <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/blueprints.jpeg"
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
          <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

          <div className="container-x relative">
            <div className="max-w-3xl animate-fade-up">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-blink bg-amber-500" />
                <span className="mono-label text-amber-400">{"//"} Compensation</span>
              </div>
              <h1 className="display mt-6 text-[11vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
                What this work pays
                <br />
                <span className="text-brand-400">in the United States</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
                {TOTAL_ROLES} titles across the {GROUPS.length} disciplines we recruit for,
                with the ranges we see firms actually paying, from CAD technician and
                entry-level EIT through director. Bands reflect base salary on permanent,
                direct-hire roles and move with market, licensure and location.
              </p>

              <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="display text-4xl text-amber-500">{s.value}</dt>
                    <dd className="mono-label mt-1 text-[10px] text-ink-400">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Jump nav — six tables is too many to scroll blind. */}
          <nav
            aria-label="Jump to a discipline"
            className="relative mt-14 border-y border-white/10 bg-navy-950/85 backdrop-blur-sm"
          >
            <div className="container-x flex flex-wrap gap-x-7 gap-y-3 py-4">
              {GROUPS.map((g) => (
                <a
                  key={g.slug}
                  href={`#${anchorOf(g.slug)}`}
                  className="mono-label text-ink-300 transition-colors hover:text-amber-400"
                >
                  {g.discipline}
                </a>
              ))}
            </div>
          </nav>
        </section>

        {GROUPS.map((group, i) => {
          const Icon = group.icon;
          return (
            <section
              key={group.slug}
              id={anchorOf(group.slug)}
              className={`relative scroll-mt-24 border-t border-navy-950/10 py-20 sm:py-24 ${
                i % 2 === 0 ? "bg-paper" : "blueprint-light"
              }`}
            >
              <div className="container-x">
                <div className="max-w-2xl">
                  <span className="mono-label text-amber-500">
                    {"//"} {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display mt-4 flex items-center gap-4 text-3xl text-navy-950 sm:text-4xl">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-navy-950/15 bg-white text-brand-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    {group.discipline}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate text-pretty">{group.blurb}</p>
                </div>

                <div className="corners mt-10 border border-navy-950/10 bg-white px-6 py-2 sm:px-10">
                  <div className="divide-y divide-navy-950/10">
                    {group.salaries.map((s, si) => (
                      <div
                        key={s.role}
                        className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4"
                      >
                        <span className="flex items-center gap-3 text-[15px] font-medium text-navy-950">
                          <span className="mono-label text-[10px] text-brand-500/70">
                            {String(si + 1).padStart(2, "0")}
                          </span>
                          {s.role}
                        </span>
                        <span className="display text-lg text-amber-500 sm:text-xl">{s.range}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/${group.slug}`}
                  className="mono-label group mt-6 inline-flex items-center gap-2 text-brand-500 transition-colors hover:text-amber-500"
                >
                  {group.discipline} recruiting
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
          );
        })}

        {/* Close on dark, so the page ends on the brand rather than trailing off. */}
        <section className="section-dark relative isolate overflow-hidden border-t border-white/10 py-20 sm:py-24">
          <div className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-20" />
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-400">{"//"} Next step</span>
              <h2 className="display mt-4 text-3xl text-white sm:text-4xl">
                Hiring for one of these, or moving for one?
              </h2>
              <p className="mt-4 text-lg leading-8 text-ink-300 text-pretty">
                We place these roles nationwide, and we know what a given market is
                paying this quarter rather than what a survey said last year.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
                >
                  Talk to a recruiter
                  <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/engineering-awards"
                  className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  Client awards
                </Link>
                <Link
                  href="/why-us"
                  className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  Why Metro
                </Link>
              </div>
            </div>
          </div>
        </section>
        <HubFaqs group="engineering-pay" heading="Engineering pay: common questions" />

    </main>

      {/* Each band as an Occupation with estimatedSalary. This is the page's
          whole substance, so leaving it unstructured would waste the one thing
          Google can read precisely — and it's what makes the page eligible
          to answer a "what does X pay" query directly. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Engineering Salary Guide, US Pay Ranges by Role",
            url: `${SITE_URL}/index_themall_awards`,
            provider: { "@id": ORG["@id"] },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: TOTAL_ROLES,
              // Running counter rather than group-index arithmetic, so a ninth
              // band in any discipline can't collide with the next group.
              itemListElement: GROUPS.flatMap((g) => g.salaries.map((s) => ({ g, s }))).map(
                ({ g, s }, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "Occupation",
                    name: s.role,
                    occupationalCategory: g.discipline,
                    estimatedSalary: {
                      "@type": "MonetaryAmountDistribution",
                      name: s.range,
                      currency: "USD",
                      duration: "P1Y",
                    },
                    occupationLocation: { "@type": "Country", name: "United States" },
                  },
                }),
              ),
            },
          }),
        }}
      />
    </>
  );
}
