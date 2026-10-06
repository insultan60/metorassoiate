import type { Metadata } from "next";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { JsonLd } from "../components/JsonLd";
import { breadcrumbSchema, fitTitle, fitDescription } from "../lib/seo";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../lib/site";
import { listJobs } from "../lib/jobs";
import { JobSearch } from "./JobSearch";

/* The jobs index.
 *
 * Rebuilt hourly from the portal (see lib/jobs). If the portal cannot be
 * read the list comes back empty and the page falls back to the outbound
 * link it has always had, which is the same place the visitor would have
 * ended up before these pages existed. A third party being down should cost
 * this site a section, not a build.
 */

export const revalidate = 3600;

export const metadata: Metadata = {
  title: fitTitle("Engineering Jobs Hiring Now"),
  description: fitDescription([
    "Engineering jobs hiring now across the United States:",
    "civil, MEP, structural, water, municipal and construction inspection.",
    "Candidates never pay a fee.",
  ]),
  alternates: { canonical: `${SITE_URL}/careers` },
};

export default async function JobsPage() {
  const jobs = await listJobs();

  /* Grouping, searching and sorting all live in JobSearch. The jobs are still
     fetched and rendered here on the server, so the list is in the HTML for a
     crawler that runs no JavaScript; the client only hides rows. */

  return (
    <>
      <HeaderBackdrop />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ]}
      />

      <main>
        <section className="relative overflow-hidden bg-navy-950 pb-14 pt-28 sm:pb-16 sm:pt-36">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url(/blueprints.jpeg)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-linear-to-b from-navy-950/70 via-navy-950/85 to-navy-950"
            aria-hidden
          />
          <div className="container-x relative">
            <span className="mono-label text-amber-400">{"//"} Open roles</span>
            <h1 className="display mt-5 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl">
              Engineering jobs we are recruiting for
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 text-pretty">
              {jobs.length > 0
                ? `${jobs.length} live roles across civil, MEP, structural, water and municipal engineering. Every one is a real search we are running now, not an advert for a pipeline.`
                : "Our live roles are listed on our careers portal."}
            </p>
          </div>
        </section>

        {jobs.length === 0 ? (
          <section className="border-t border-navy-950/10 bg-paper py-20">
            <div className="container-x">
              <p className="max-w-2xl text-lg leading-8 text-slate text-pretty">
                We could not load the live list just now. It is always current
                on the careers portal.
              </p>
              <a
                href={CAREERS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label mt-8 inline-flex border border-navy-950/20 px-6 py-3.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
              >
                {"View all jobs →"}
              </a>
            </div>
          </section>
        ) : (
          <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
            <div className="container-x">
              <JobSearch jobs={jobs} />
            </div>
          </section>
        )}

        <section className="border-t border-navy-950/10 blueprint-light py-16 sm:py-20">
          <div className="container-x">
            <h2 className="display text-2xl text-navy-950 sm:text-3xl">
              Nothing here matching your discipline?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate text-pretty">
              Most of what we place is filled before it is ever advertised. Send
              your resume and we will contact you when a matching search opens.
            </p>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label mt-8 inline-flex border border-navy-950/20 px-6 py-3.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
            >
              {"Submit your resume →"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
