import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderBackdrop } from "../../components/HeaderBackdrop";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbSchema, fitTitle, fitDescription } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { listJobs, getJob, jobExcerpt, employmentType } from "../../lib/jobs";

/* One page per live role.
 *
 * EXPIRY IS THE THING TO GET RIGHT
 *
 * A job page that outlives the job is worse than no job page: Google treats
 * stale JobPosting markup as a quality problem, and a candidate who applies
 * for something already filled has a bad first experience of the firm. So the
 * source of truth is always the portal, never a copy taken at build time.
 * getJob resolves the slug against the live list on every revalidation, and
 * returns null the moment a role disappears, which turns this page into a 404
 * rather than leaving it standing.
 *
 * dynamicParams stays on so a role posted after the last deploy is reachable
 * immediately instead of waiting for one.
 */

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const jobs = await listJobs();
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) return { title: "Job not found | Metro Associates" };

  const where = job.location ? ` in ${job.location}` : "";
  return {
    title: fitTitle(`${job.title}${job.city ? ` - ${job.city}` : ""}`),
    description: fitDescription([
      `We are recruiting a ${job.title}${where}.`,
      jobExcerpt(job.descriptionHtml, 18),
    ]),
    alternates: { canonical: `${SITE_URL}/jobs/${job.slug}` },
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  const related = (await listJobs())
    .filter((j) => j.slug !== job.slug && j.state === job.state)
    .slice(0, 4);

  const type = employmentType(job.jobType);

  /* Republished rather than copied. The portal's own markup carries a
     postalCode field populated with the state name, which is not a postal
     code and would be invalid here, so it is dropped instead of passed on. */
  const jobSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.descriptionHtml,
    hiringOrganization: {
      "@type": "Organization",
      name: "Metro Associates",
      sameAs: SITE_URL,
    },
    directApply: false,
    url: `${SITE_URL}/jobs/${job.slug}`,
    ...(job.datePosted ? { datePosted: job.datePosted } : {}),
    ...(job.reference
      ? { identifier: { "@type": "PropertyValue", name: "Metro Associates", value: job.reference } }
      : {}),
    ...(type ? { employmentType: type } : {}),
    ...(job.city
      ? {
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.city,
              ...(job.state ? { addressRegion: job.state } : {}),
              addressCountry: "US",
            },
          },
        }
      : {}),
    ...(/remote/i.test(job.remoteType) ? { jobLocationType: "TELECOMMUTE" } : {}),
  };

  return (
    <>
      <HeaderBackdrop />
      <JsonLd
        data={[
          jobSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Jobs", path: "/jobs" },
            { name: job.title, path: `/jobs/${job.slug}` },
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
            <nav aria-label="Breadcrumb" className="mono-label text-[10px] text-white/45">
              <Link href="/jobs" className="hover:text-amber-400">
                Jobs
              </Link>
              <span className="px-2 text-white/25">/</span>
              <span className="text-white/70">{job.location || "Open role"}</span>
            </nav>

            <h1 className="display mt-6 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl">
              {job.title}
            </h1>

            <div className="mono-label mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-white/60">
              {job.location && <span>{job.location}</span>}
              {job.jobType && <span>{job.jobType}</span>}
              {job.remoteType && <span>{job.remoteType}</span>}
              {job.reference && <span>{`Ref ${job.reference}`}</span>}
            </div>

            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label mt-9 inline-flex items-center gap-2 border border-amber-500/50 px-6 py-3.5 text-[11px] text-amber-400 transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              {"Apply for this role →"}
            </a>
          </div>
        </section>

        <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
          <div className="container-x">
            <div
              className="job-copy max-w-3xl text-[16px] leading-8 text-slate"
              dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
            />

            <div className="corners mt-14 max-w-3xl border border-navy-950/10 bg-white p-8 sm:p-10">
              <p className="mono-label text-slate-500">How to apply</p>
              <p className="mt-4 text-lg leading-8 text-slate text-pretty">
                Applications go through our careers portal, which is where the
                search is actually run from. If you would rather talk first, or
                this is close but not quite right, send your resume and say so.
              </p>
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label mt-7 inline-flex border border-navy-950/20 px-6 py-3.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
              >
                {"Apply for this role →"}
              </a>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-navy-950/10 blueprint-light py-16 sm:py-20">
            <div className="container-x">
              <h2 className="display text-2xl text-navy-950 sm:text-3xl">
                {`Other roles in ${job.state}`}
              </h2>
              <ul className="mt-8 divide-y divide-navy-950/10 border-t border-navy-950/10">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/jobs/${r.slug}`}
                      className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <span className="text-[17px] font-bold leading-snug text-navy-950 group-hover:text-amber-600">
                        {r.title}
                      </span>
                      <span className="mono-label shrink-0 text-[10px] text-slate-500">
                        {[r.city, r.jobType].filter(Boolean).join("  ·  ")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/jobs"
                className="mono-label mt-8 inline-flex border border-navy-950/20 px-6 py-3.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
              >
                {"All open roles →"}
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
