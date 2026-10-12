import Link from "next/link";
import type { JobSummary } from "../lib/jobs";

/* The live roles a market or hub page covers.
 *
 * Every one of these pages was trying to rank for hiring in a place or a
 * discipline while the actual open roles sat on /careers with nothing
 * connecting the two. This is that connection, and it earns its place three
 * times over: the page gains content that is unique to it and changes on its
 * own, the job pages gain an internal link from a page that already ranks,
 * and a candidate who landed here looking for work stops being handed a
 * generic "view all jobs" and sent to start again.
 *
 * Renders nothing at all when there are no matching roles. A section reading
 * "0 open roles" is worse than silence: it dates the page, and on a page whose
 * whole argument is that this desk is busy it argues the opposite. The rest of
 * the page stands on its own, which is why it is safe to hang live data on it.
 */
export function OpenRoles({
  jobs,
  where,
  max = 6,
}: {
  jobs: JobSummary[];
  /** "Phoenix, AZ" or "MEP engineering" — reads after "open roles in". */
  where: string;
  max?: number;
}) {
  if (jobs.length === 0) return null;

  /* Newest first, and capped. These pages are not the jobs index and should
     not turn into it: six is enough to prove the desk is live and to pass a
     crawler into the role pages. */
  const shown = [...jobs]
    .sort((a, b) => (b.datePosted ?? "").localeCompare(a.datePosted ?? ""))
    .slice(0, max);

  return (
    <section className="relative border-t border-navy-950/10 bg-paper py-16 sm:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="mono-label text-amber-500">{"//"} Open roles</span>
          <h2 className="display mt-5 text-3xl text-navy-950 sm:text-4xl">
            {jobs.length} open {jobs.length === 1 ? "role" : "roles"} in {where}
          </h2>
        </div>

        <ul className="mt-10 divide-y divide-navy-950/10 border-t border-navy-950/10">
          {shown.map((j) => (
            <li key={j.slug}>
              <Link
                href={`/careers/${j.slug}`}
                className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="text-[17px] font-bold leading-snug text-navy-950 group-hover:text-amber-600">
                  {j.title}
                </span>
                <span className="mono-label shrink-0 text-[10px] text-slate-500">
                  {[j.city, j.jobType, j.remoteType].filter(Boolean).join("  ·  ")}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {jobs.length > shown.length && (
          <Link
            href="/careers"
            className="mono-label mt-8 inline-flex border border-navy-950/20 px-6 py-3.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
          >
            {`See all ${jobs.length} roles →`}
          </Link>
        )}
      </div>
    </section>
  );
}
