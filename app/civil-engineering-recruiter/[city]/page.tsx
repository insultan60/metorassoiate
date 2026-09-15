import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedMarkets from "../../components/RelatedMarkets";
import CityWiderMarket from "../../components/CityWiderMarket";
import {
  IconArrow, IconBridge } from "../../components/Icons";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../../lib/site";
import {
  CITIES, getCity } from "../../lib/cities";
import { HeaderBackdrop } from "../../components/HeaderBackdrop";
import { JsonLd } from "../../components/JsonLd";
import { serviceSchema, breadcrumbSchema, faqSchema, civilFaqs, pickVariant, fitTitle, fitDescription } from "../../lib/seo";

// Pre-render the fixed set of city pages; unknown slugs 404 (no arbitrary pages).
export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  const title = fitTitle(`Civil Engineering Recruiters in ${c.city}, ${c.abbr}`);

  /* The city's own authority is the part that makes this line about this
     city rather than a template with a name substituted in. It goes in the
     last clause so fitDescription drops it, rather than truncating
     mid-sentence, when the authority's name is a long one. */
  const description = fitDescription([
    pickVariant(`${c.slug}:desc`, [
      `Civil engineering recruiting in ${c.city}, ${c.state}.`,
      `Specialist civil engineering recruiters for ${c.city}, ${c.state}.`,
      `Hiring civil engineers in ${c.city}, ${c.state}.`,
    ]),
    `Experience with programs at ${c.dot}.`,
    `We place licensed PEs and project managers.`,
  ]);

  const path = `/civil-engineering-recruiter/${c.slug}`;
  const keywords = [
    `civil engineering recruiter ${c.city}`,
    `civil engineering staffing ${c.city} ${c.abbr}`,
    `transportation engineer recruiter ${c.city}`,
    `${c.dot} staffing`,
    `civil engineer jobs ${c.city}`,
  ];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Metro Associates",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();

  const path = `/civil-engineering-recruiter/${c.slug}`;
  const faqs = civilFaqs(c);
  const flagshipProgram = c.localPrograms[0];

  // Several rotating phrasings for the blocks that would otherwise be
  // byte-identical across all 52 city pages — same underlying claims, worded
  // differently per city so the page doesn't read as a templated duplicate.
  const introPara1 = pickVariant(`${c.slug}:intro1`, [
    `Metro Associates is a leading civil engineering recruiter providing specialized staffing solutions across ${c.city} and ${c.region}. We help firms hire licensed Professional Engineers (PE), project managers, and technical specialists who support ${c.dot}, federal agencies, and private development throughout the region.`,
    `Metro Associates runs a dedicated civil engineering search practice across ${c.city} and ${c.region}, connecting firms with licensed Professional Engineers (PE), project managers, and technical specialists who support ${c.dot}, federal agencies, and private development in the metro.`,
    `We're a specialized civil engineering recruiter for ${c.city} and ${c.region}, placing licensed Professional Engineers (PE), project managers, and technical specialists on the work that supports ${c.dot}, federal agencies, and private development locally.`,
  ]);
  const introPara2 = pickVariant(`${c.slug}:intro2`, [
    `From major corridors to municipal and resiliency projects, we match vetted talent to the operational, regulatory, and performance demands of publicly funded capital programs.`,
    `Whether the work is a major corridor, a municipal upgrade, or a resiliency program, we match vetted talent to what the role actually demands, operationally, regulatorily, and technically.`,
    `We match vetted candidates to the real demands of publicly funded capital programs, from large corridor projects down to municipal and resiliency work.`,
    flagshipProgram
      ? `Locally, that has meant staffing everything from ${flagshipProgram.toLowerCase()} to smaller municipal and resiliency work. We match vetted talent to what each program actually demands.`
      : `From major corridors to municipal and resiliency projects, we match vetted talent to the operational, regulatory, and performance demands of publicly funded capital programs.`,
  ]);
  const trendsIntro = pickVariant(`${c.slug}:trendsIntro`, [
    `In 2026, the ${c.region} market is defined by long-term federal infrastructure funding and a sharp focus on climate resiliency. Remote collaboration has widened the talent pool, but demand for on-site licensed PEs and project leads across ${c.dot} programs remains at an all-time high.`,
    `Heading into 2026, ${c.city}'s market is shaped by sustained federal infrastructure funding and a growing focus on climate resiliency. The talent pool has widened with remote collaboration, but on-site licensed PEs and project leads for ${c.dot} programs remain in short supply.`,
    flagshipProgram
      ? `Work like ${flagshipProgram.toLowerCase()} is a good read on the ${c.city} market heading into 2026: long-term federal infrastructure funding and a sharper focus on climate resiliency, with demand for on-site licensed PEs and ${c.dot} project leads still outpacing supply.`
      : `In 2026, the ${c.region} market is defined by long-term federal infrastructure funding and a sharp focus on climate resiliency. Remote collaboration has widened the talent pool, but demand for on-site licensed PEs and project leads across ${c.dot} programs remains at an all-time high.`,
  ]);

  const schemas = [
    serviceSchema({
      serviceName: `Civil Engineering Recruiter in ${c.city}, ${c.abbr}`,
      description: `Specialized civil engineering staffing and executive search in ${c.city}, ${c.state}. We place licensed PEs, project managers, and technical specialists across ${c.dot} and infrastructure programs.`,
      path,
      areaCity: c.city,
      areaState: c.state,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Civil Engineering Recruiter", path: "/civil-engineering-recruiter" },
      { name: `${c.city}, ${c.abbr}`, path },
    ]),
    faqSchema(faqs),
  ];

  return (
    <main>
      <JsonLd data={schemas} />
      {/* Hero */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">{"//"} Civil Engineering Recruiting / {c.abbr}</span>
            </div>
            <h1 className="display mt-6 text-[10.5vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              Civil Engineering Recruiter
              <br />
              <span className="text-brand-400">{c.city}, {c.abbr}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              {c.marketNote}
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
        </div>
      </section>

      {/* Intro */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <div>
              <span className="mono-label text-amber-500">{"//"} {c.city} Civil Engineering Recruiting</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                Specialized staffing for {c.city} <span className="text-brand-500">infrastructure</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                {introPara1}
              </p>
              <p className="mt-4 leading-8 text-slate-500 text-pretty">
                {introPara2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 hiring trends */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <div>
              <span className="mono-label text-amber-500">{"//"} 2026 hiring trends</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                2026 {c.city} civil engineering hiring
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                {trendsIntro}
              </p>
            <p className="mt-8 text-[15px] leading-8 text-slate-500 text-pretty">
              Pay for these roles moves with local cost of labor and project mix,
              so we publish ranges nationally rather than implying a {c.city}-specific
              figure we have not measured. See the
              {" "}
              <Link href="/civil-engineering-recruiter#compensation" className="font-medium text-brand-600 underline underline-offset-4">
                national civil engineering compensation ranges
              </Link>
              , or ask us what we are seeing in {c.city} right now.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local infrastructure programs */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Programs we support</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Supporting {c.city} infrastructure programs
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {c.localPrograms.map((p) => (
              <div key={p} className="flex items-start gap-3 border border-navy-950/10 bg-white p-5 text-[15px] font-medium text-navy-950">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-navy-950/12 text-brand-500">
                  <IconBridge className="h-4.5 w-4.5" />
                </span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-market sections.

          These render only for metros whose City entry carries the research
          (agencies / marketDetail / hiringFocus / licensure). Everything
          above this point is the same on all fifty city pages with the name
          swapped, which is why the long tail of them sat crawled but not
          indexed. This is the part that is actually about the place. */}
      {c.marketDetail && c.marketDetail.length > 0 && (
        <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
          <div className="container-x">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <span className="mono-label text-amber-500">{"//"} The work here</span>
                <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                  What civil engineering in {c.city}{" "}
                  <span className="text-brand-500">actually involves</span>
                </h2>
                {c.marketDetail.map((para) => (
                  <p key={para.slice(0, 40)} className="mt-6 text-lg leading-8 text-slate text-pretty">
                    {para}
                  </p>
                ))}
              </div>

              {c.agencies && c.agencies.length > 0 && (
                <div className="border border-navy-950/10 bg-white p-8 sm:p-10">
                  <p className="mono-label text-slate-500">Who lets the work</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    The public owners behind most {c.city} civil programs. Experience
                    on their projects is the shorthand hiring managers here read first.
                  </p>
                  <ul className="mt-6 flex flex-col divide-y divide-navy-950/10">
                    {c.agencies.map((a) => (
                      <li key={a} className="flex items-center gap-3 py-3.5 text-[15px] font-medium text-navy-950">
                        <span className="h-1.5 w-1.5 shrink-0 bg-amber-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {c.hiringFocus && c.hiringFocus.length > 0 && (
        <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-500">{"//"} What firms are short of</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                Hardest {c.city} roles to fill
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate text-pretty">
                Where demand in this metro runs ahead of supply, and the local reason
                why, which is usually a feature of the work itself rather than of the
                job market.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {c.hiringFocus.map((h, i) => (
                <div key={h.role} className="border border-navy-950/10 bg-white p-6">
                  <span className="mono-label text-[10px] text-brand-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-[17px] font-bold leading-snug text-navy-950">{h.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{h.why}</p>
                </div>
              ))}
            </div>

            {c.licensure && (
              <div className="corners mt-8 border border-navy-950/10 bg-white p-8 sm:p-10">
                <p className="mono-label text-slate-500">
                  Licensure &amp; prequalification in {c.state}
                </p>
                <p className="mt-4 text-lg leading-8 text-slate text-pretty">{c.licensure}</p>
              </div>
            )}
          </div>
        </section>
      )}

      <CityWiderMarket hub="civil-engineering-recruiter" city={c} />

      {/* FAQ — feeds the FAQ rich result and adds long-tail keyword coverage */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} FAQ</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Civil engineering recruiting in {c.city}, FAQ
            </h2>
          </div>
          <div className="mt-12 divide-y divide-navy-950/10 border-t border-navy-950/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-bold text-navy-950">{f.q}</h3>
                <p className="mt-2 leading-7 text-slate-500 text-pretty">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA and related markets. The "why partner with us"
          grid that used to head this section was the same 88 words on
          all fifty city pages and is still on the hub page. */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          {/* CTA band */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Hiring civil engineers in {c.city}?
              </h3>
              <p className="mt-2 text-ink-300">
                Tell us about the role. We&apos;ll deliver a vetted shortlist of
                licensed {c.abbr} talent, screened against {c.state} licensure requirements.
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
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Apply to Jobs
              </a>
            </div>
          </div>

          {/* Nearby markets in this discipline, and this market in the
              other disciplines. Replaces a link to all 49 sibling
              cities, which was identical on every page of the hub and
              pointed the page's internal signal everywhere at once.
              See app/lib/markets.ts for the measurement. */}
          <RelatedMarkets
            hub="civil-engineering-recruiter"
            hubLabel="Civil engineering"
            all={CITIES}
            current={c}
          />
        </div>
      </section>
    </main>
  );
}
