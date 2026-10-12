import Link from "next/link";
import { HeaderBackdrop } from "./HeaderBackdrop";
import { JsonLd } from "./JsonLd";
import { CandidateTrust } from "./CandidateTrust";
import { OpenRoles } from "./OpenRoles";
import { IconArrow, IconCheck } from "./Icons";
import { breadcrumbSchema, faqSchema } from "../lib/seo";
import { APPLY_URL, SITE_URL } from "../lib/site";
import { listJobs } from "../lib/jobs";
import type { Discipline } from "../lib/disciplines";

/* The body of a discipline hub.
 *
 * Shared layout, so the three pages differ in what they say rather than in
 * how they look, and nothing about any one discipline is written in here.
 *
 * Live roles are matched on the discipline's own title pattern rather than
 * through lib/jobRouting, which deliberately routes all three of these to one
 * MEP desk. That is the right call for a job page deciding where to link back
 * to, and the wrong one here: a plumbing designer searching for plumbing work
 * should not be shown a switchgear role because both are MEP.
 */
export async function DisciplineHub({ discipline: d }: { discipline: Discipline }) {
  const path = `/${d.slug}`;
  const jobs = await listJobs();
  const openRoles = jobs.filter((j) => d.jobMatch.test(j.title));

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}${path}#service`,
            name: d.name,
            description: d.intro,
            url: `${SITE_URL}${path}`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "Country", name: "United States" },
            serviceType: d.name,
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "MEP Engineering Recruiter",
              path: "/mep-engineering-recruiter",
            },
            { name: d.name, path },
          ]),
          faqSchema(d.faqs),
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
                {"//"} {d.eyebrow}
              </span>
            </div>
            <h1 className="display mt-6 text-[10.5vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              {d.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              {d.intro}
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

      {/* What the work actually is */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} The discipline</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              What this desk actually covers
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {d.detail.map((p) => (
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

      {/* Titles we fill */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Roles we fill</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Titles on this desk
            </h2>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {d.roles.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 text-lg leading-7 text-slate"
              >
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-amber-500/20 text-amber-600">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where the shortage is */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Hardest to hire</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Where the shortage actually is
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {d.hiringFocus.map((h) => (
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
            <span className="mono-label text-amber-600">
              {"//"} Licences and certifications
            </span>
            <p className="mt-3 text-lg leading-8 text-slate text-pretty">
              {d.credentials}
            </p>
          </div>
        </div>
      </section>

      <OpenRoles jobs={openRoles} where={d.eyebrow.replace(" recruiting", "")} />

      {/* FAQ */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} FAQ</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              {d.name}, common questions
            </h2>
          </div>
          <div className="mt-12 divide-y divide-navy-950/10 border-t border-navy-950/10">
            {d.faqs.map((f) => (
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

      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Hiring on this desk?
              </h3>
              <p className="mt-2 text-ink-300">
                Tell us about the role. We screen for the licence or
                certification it genuinely needs, which is not always the one
                the job description asks for.
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
                href="/mep-engineering-recruiter"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                All MEP markets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
