import Link from "next/link";
import { IconArrow } from "./Icons";
import { CITIES } from "../lib/cities";

/**
 * The six discipline hubs, on the homepage.
 *
 * Why this exists: the homepage carried seventeen internal links and not one
 * of them went to a discipline. The footer's "Services" column printed six
 * service names all pointing at "/#services". So the six hubs and the 250
 * city pages beneath them had no internal link path from anywhere on the
 * site — they existed only in sitemap.xml.
 *
 * Search Console showed the result precisely: 163 URLs in "Discovered -
 * currently not indexed", every one with Last crawled "N/A", the
 * /mep-engineering-recruiter, /cei-inspection-recruiter,
 * /water-wastewater-recruiter and /bridge-structural-recruiter hubs among
 * them. Google had the URLs and had never fetched a single one. A sitemap
 * says a URL exists; internal links say it matters, and nothing said it.
 *
 * The metro links are deliberate too, not decoration: they put the largest
 * markets one click from the homepage instead of three, which is the
 * difference between a page a crawler reaches early and one it never
 * budgets for.
 */
const DISCIPLINES: { label: string; href: string; body: string }[] = [
  /* First, and deliberately: it is the umbrella the other six sit under, and
     the only page carrying program-level language. Linking it from the
     homepage is also what makes it one click deep rather than two. */
  {
    label: "Infrastructure",
    href: "/infrastructure-recruiter",
    body: "Capital programs staffed across every phase, from planning through construction inspection and asset management.",
  },
  {
    label: "Civil Engineering",
    href: "/civil-engineering-recruiter",
    body: "Licensed PEs, project managers and technical leads on state DOT, federal and private capital programs.",
  },
  {
    label: "MEP Engineering",
    href: "/mep-engineering-recruiter",
    body: "Mechanical, electrical and plumbing PEs and commissioning specialists on complex building systems.",
  },
  {
    label: "Bridge & Structural",
    href: "/bridge-structural-recruiter",
    body: "Design and load-rating engineers, inspection leads and structural specialists on bridge programs.",
  },
  {
    label: "Water & Wastewater",
    href: "/water-wastewater-recruiter",
    body: "Process engineers and plant specialists on treatment, collection and distribution infrastructure.",
  },
  {
    label: "CEI & Inspection",
    href: "/cei-inspection-recruiter",
    body: "Construction engineering inspection staff, resident engineers and DOT-qualified inspectors.",
  },
  {
    label: "Municipal Engineering",
    href: "/municipal-engineering-recruiter",
    body: "City and county engineers, public works leadership and capital program managers.",
  },
];

/* The largest markets, in the order the data file already holds them. */
const TOP_METROS = CITIES.slice(0, 8);

export default function Disciplines() {
  return (
    <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="mono-label text-amber-500">{"//"} What we recruit for</span>
          <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
            Six engineering disciplines, staffed nationwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate text-pretty">
            Every discipline has its own licensure, its own agencies and its own
            shortage. We run a dedicated practice for each, in fifty metros.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINES.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex flex-col bg-white p-8 transition-colors hover:bg-mist"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="text-xl font-bold leading-snug text-navy-950">{d.label}</span>
                <IconArrow className="mt-1 h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-3 text-[15px] leading-7 text-slate-500">{d.body}</span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <p className="mono-label text-slate-500">Our largest civil engineering markets</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOP_METROS.map((c) => (
              <Link
                key={c.slug}
                href={`/civil-engineering-recruiter/${c.slug}`}
                className="border border-navy-950/12 bg-white px-3 py-1.5 text-xs font-medium text-navy-950 transition-colors hover:border-amber-500 hover:text-amber-600"
              >
                {c.city}, {c.abbr}
              </Link>
            ))}
            <Link
              href="/civil-engineering-recruiter"
              className="border border-navy-950/12 bg-navy-950 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              All 50 markets &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
