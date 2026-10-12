import Link from "next/link";
import { HeaderBackdrop } from "./HeaderBackdrop";
import { JsonLd } from "./JsonLd";
import { CandidateTrust } from "./CandidateTrust";
import { OpenRoles } from "./OpenRoles";
import { IconArrow, IconCheck } from "./Icons";
import { breadcrumbSchema, faqSchema } from "../lib/seo";
import { APPLY_URL, SITE_URL } from "../lib/site";
import { listJobs } from "../lib/jobs";
import { jobsForState } from "../lib/jobRouting";
import { citiesInState, type StateMarket } from "../lib/states";

/* The body of a state market page.
 *
 * Shared so the states differ in their content and not in their layout, and
 * so adding one is a data entry rather than a four-hundred-line copy. Every
 * sentence a visitor reads comes from lib/states; nothing about any particular
 * state is written in here.
 */
export async function StateHub({ state: s }: { state: StateMarket }) {
  const path = `/civil-engineering-recruiter/${s.slug}`;
  const cities = citiesInState(s.abbr);
  const openRoles = jobsForState(
    await listJobs(),
    "civil-engineering-recruiter",
    s.state,
  );

  return (
    <main>
      <JsonLd
        data={[
          /* Written out rather than through lib/seo's serviceSchema, which
             always emits a City for the metro it was built for. The area
             served here is the state itself, with our own desks named as the
             cities inside it: saying City/Connecticut would be wrong, and
             naming towns we have not written about would be an invented
             catchment. */
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}${path}#service`,
            name: `Civil Engineering Recruiting in ${s.state}`,
            description: s.marketNote,
            url: `${SITE_URL}${path}`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: [
              { "@type": "State", name: s.state },
              ...cities.map((c) => ({ "@type": "City", name: c.city })),
            ],
            serviceType: `Civil Engineering Recruiting in ${s.state}`,
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Civil Engineering Recruiter",
              path: "/civil-engineering-recruiter",
            },
            { name: s.state, path },
          ]),
          faqSchema(s.faqs),
        ]}
      />

      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">
                {"//"} Civil Engineering Recruiting / {s.abbr}
              </span>
            </div>
            <h1 className="display mt-6 text-[10.5vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              Civil Engineering Recruiter
              <br />
              <span className="text-brand-400">{s.state}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              {s.marketNote}
            </p>

            <CandidateTrust />

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Search Jobs
              </Link>
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

      {/* What the engineering here consists of */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">
              {"//"} The {s.abbr} market
            </span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Engineering recruiting across {s.state}
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {s.marketDetail.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-lg leading-8 text-slate text-pretty"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Who lets the work */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">
              {"//"} Who lets the work
            </span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              The owners behind {s.abbr} programs
            </h2>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {s.agencies.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 text-lg leading-7 text-slate"
              >
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-amber-500/20 text-amber-600">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What firms are short of */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">
              {"//"} Hardest to hire
            </span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              What {s.state} firms are short of
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {s.hiringFocus.map((h) => (
              <div key={h.role} className="border-t border-navy-950/10 pt-5">
                <h3 className="text-[17px] font-bold leading-snug text-navy-950">
                  {h.role}
                </h3>
                <p className="mt-2 leading-7 text-slate-500 text-pretty">
                  {h.why}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl border-l-2 border-amber-500 pl-6">
            <span className="mono-label text-amber-600">{"//"} Licensure</span>
            <p className="mt-3 text-lg leading-8 text-slate text-pretty">
              {s.licensure}
            </p>
          </div>
        </div>
      </section>

      <OpenRoles jobs={openRoles} where={s.state} />

      {/* The city desks that sit inside this state. The state page is the
          natural parent of those pages and nothing linked down to them from
          one level up before. */}
      {cities.length > 0 && (
        <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="mono-label text-amber-500">
                {"//"} Desks in {s.abbr}
              </span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                {cities.length === 1 ? "Our desk" : "Our desks"} in {s.state}
              </h2>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/civil-engineering-recruiter/${c.slug}`}
                    className="mono-label inline-flex border border-navy-950/20 px-5 py-3 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
                  >
                    {c.city}, {c.abbr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} FAQ</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Engineering recruiting in {s.state}, FAQ
            </h2>
          </div>
          <div className="mt-12 divide-y divide-navy-950/10 border-t border-navy-950/10">
            {s.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-bold text-navy-950">{f.q}</h3>
                <p className="mt-2 leading-7 text-slate-500 text-pretty">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Hiring engineers in {s.state}?
              </h3>
              <p className="mt-2 text-ink-300">
                Tell us about the role. We deliver a vetted shortlist of
                licensed {s.abbr} talent, screened against {s.state} licensure
                requirements.
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
                href="/civil-engineering-recruiter"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                All markets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
