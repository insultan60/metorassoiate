"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { IconArrow, IconPin } from "../components/Icons";
import type { JobSummary } from "../lib/jobs";

/* The careers page's search, filters and sort.
 *
 * WHY THE FILTERING IS CLIENT SIDE
 *
 * Every role is rendered on the server and shipped in the HTML; this component
 * only hides rows. That ordering matters more here than anywhere else on the
 * site: these pages exist to be indexed, and a crawler that runs no JavaScript
 * must still see all 28 links and their text. Filtering on the server instead
 * would mean either a URL per filter combination, which is thin duplicate
 * pages Google has no reason to keep, or a round trip per keystroke.
 *
 * Twenty-eight roles is also small enough that filtering in memory is instant
 * and needs no pagination. If this ever reaches the hundreds it should move to
 * a server action with the unfiltered list still rendered first.
 *
 * WHY IT GROUPS BY STATE UNTIL YOU SEARCH
 *
 * The grouped view is the one worth landing on: a candidate scanning for their
 * own market finds it without reading every row. The moment a filter is
 * active, grouping fights the filter - you end up with eight headings of one
 * role each - so the list flattens and sorts instead.
 */

type Props = { jobs: JobSummary[] };

const ANY = "";

function monthYear(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/* "Posted 3 days ago" is the thing a candidate actually reads a date for - it
   answers "is this still real?". The absolute date is kept in the title
   attribute rather than thrown away. */
function posted(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const days = Math.floor((Date.now() - d.getTime()) / 86_400_000);
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  if (days < 30) return `Posted ${days} days ago`;
  const months = Math.floor(days / 30);
  return `Posted ${months} ${months === 1 ? "month" : "months"} ago`;
}

/* A third of this board turns over inside a week, and the default view is
   grouped by state rather than by date, so the roles posted today sit
   wherever the alphabet puts them. The chip is what makes them findable
   without reordering the page out from under someone scanning for their own
   market. Seven days because that is the window in which a candidate still
   expects to be early. */
const NEW_DAYS = 7;

function isNew(iso: string | null): boolean {
  if (!iso) return false;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return false;
  return (Date.now() - d.getTime()) / 86_400_000 <= NEW_DAYS;
}

const selectClass =
  "w-full appearance-none border border-navy-950/20 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors focus:border-amber-500";

export function JobSearch({ jobs }: Props) {
  const [query, setQuery] = useState("");
  const [state, setState] = useState(ANY);
  const [jobType, setJobType] = useState(ANY);
  const [remoteType, setRemoteType] = useState(ANY);
  const [sort, setSort] = useState<"recent" | "title">("recent");

  // Built from the data rather than hardcoded, so a new job type or a first
  // remote role appears in the filter without anyone editing a list here.
  const options = useMemo(() => {
    const uniq = (pick: (j: JobSummary) => string) =>
      [...new Set(jobs.map(pick).filter(Boolean))].sort();
    return {
      states: uniq((j) => j.state),
      jobTypes: uniq((j) => j.jobType),
      remoteTypes: uniq((j) => j.remoteType),
    };
  }, [jobs]);

  const filtering = Boolean(query.trim() || state || jobType || remoteType) || sort !== "recent";

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = jobs.filter((j) => {
      if (state && j.state !== state) return false;
      if (jobType && j.jobType !== jobType) return false;
      if (remoteType && j.remoteType !== remoteType) return false;
      if (!q) return true;
      // Title and place together: people search "bridge" and "phoenix" in the
      // same box without thinking about which field they mean.
      return `${j.title} ${j.city} ${j.state}`.toLowerCase().includes(q);
    });

    out.sort((a, b) =>
      sort === "title"
        ? a.title.localeCompare(b.title)
        : (b.datePosted ?? "").localeCompare(a.datePosted ?? ""),
    );
    return out;
  }, [jobs, query, state, jobType, remoteType, sort]);

  const grouped = useMemo(() => {
    const m = new Map<string, JobSummary[]>();
    for (const j of results) {
      const key = j.state || "Other";
      m.set(key, [...(m.get(key) ?? []), j]);
    }
    return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [results]);

  function reset() {
    setQuery("");
    setState(ANY);
    setJobType(ANY);
    setRemoteType(ANY);
    setSort("recent");
  }

  /* One role, as a card.
   *
   * Was a full-width row: title on the left, every other fact on the right in
   * 10px mono, separated by hairlines. At 28 roles that reads as one wall of
   * near-identical lines, and the two things a candidate actually sorts on,
   * the job type and whether it is on-site, were the smallest text on the
   * page. A card gives each role its own edges and lets those two facts sit at
   * the top where they are read first.
   *
   * showState is false in the grouped view, where the state is already the
   * heading above the grid, and true in the flat filtered list, where the
   * cards come from everywhere and the city alone would be ambiguous.
   */
  const card = (j: JobSummary, showState: boolean) => (
    <li key={j.slug} className="group relative">
      <Link
        href={`/careers/${j.slug}`}
        className="flex h-full flex-col border border-navy-950/15 bg-white p-6 transition-colors duration-200 hover:border-amber-500"
      >
        {/* Amber edge on hover: the accent the buttons already use, and it
            marks the active card without shifting the layout. */}
        <span
          className="absolute inset-y-0 left-0 w-[3px] bg-amber-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden
        />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {isNew(j.datePosted) && (
            <span className="mono-label bg-amber-500 px-2 py-1 text-[9px] text-navy-950">
              New
            </span>
          )}
          {j.jobType && (
            <span className="mono-label border border-navy-950/15 px-2 py-1 text-[9px] text-navy-950">
              {j.jobType}
            </span>
          )}
          {j.remoteType && (
            <span className="mono-label text-[9px] text-slate-500">{j.remoteType}</span>
          )}
        </div>

        <h3 className="mt-5 text-[17px] font-bold leading-snug text-navy-950 transition-colors group-hover:text-amber-600">
          {j.title}
        </h3>

        {(j.city || showState) && (
          <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate">
            <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            {[j.city, showState ? j.state : null].filter(Boolean).join(", ")}
          </p>
        )}

        {/* mt-auto pins the footer to the bottom edge, so a short title and a
            long one still produce cards of the same height in a row. */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <span className="mono-label text-[9px] text-slate-500" title={monthYear(j.datePosted)}>
            {posted(j.datePosted)}
          </span>
          <span className="mono-label flex shrink-0 items-center gap-1.5 text-[9px] text-navy-950 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            View role
            <IconArrow className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </li>
  );

  return (
    <>
      <div className="border-b border-navy-950/10 pb-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <label htmlFor="job-q" className="sr-only">
              Search roles by title or location
            </label>
            <input
              id="job-q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title, city or state"
              className="w-full border border-navy-950/20 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-slate-400 focus:border-amber-500"
            />
          </div>

          <div>
            <label htmlFor="job-state" className="sr-only">
              Filter by state
            </label>
            <select
              id="job-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={selectClass}
            >
              <option value={ANY}>All states</option>
              {options.states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="job-type" className="sr-only">
              Filter by job type
            </label>
            <select
              id="job-type"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className={selectClass}
            >
              <option value={ANY}>All job types</option>
              {options.jobTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="job-remote" className="sr-only">
              Filter by remote type
            </label>
            <select
              id="job-remote"
              value={remoteType}
              onChange={(e) => setRemoteType(e.target.value)}
              className={selectClass}
            >
              <option value={ANY}>On-site and remote</option>
              {options.remoteTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <p className="mono-label text-[10px] text-slate-500">
            {results.length === jobs.length
              ? `${jobs.length} open ${jobs.length === 1 ? "role" : "roles"}`
              : `${results.length} of ${jobs.length} ${jobs.length === 1 ? "role" : "roles"}`}
          </p>

          <div className="flex items-center gap-4">
            <label htmlFor="job-sort" className="mono-label text-[10px] text-slate-500">
              Sort
            </label>
            <select
              id="job-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as "recent" | "title")}
              className="border border-navy-950/20 bg-white px-3 py-2 text-xs text-navy-950 outline-none transition-colors focus:border-amber-500"
            >
              <option value="recent">Most recent</option>
              <option value="title">Title A-Z</option>
            </select>

            {filtering && (
              <button
                type="button"
                onClick={reset}
                className="mono-label text-[10px] text-amber-600 underline underline-offset-4 hover:text-navy-950"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="py-16">
          <p className="text-lg leading-8 text-slate text-pretty">
            No open role matches that right now. Most of what we place is filled
            before it is advertised, so it is worth sending your resume anyway.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mono-label mt-6 inline-flex border border-navy-950/20 px-6 py-3.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
          >
            {"Show every role →"}
          </button>
        </div>
      ) : filtering ? (
        <ul className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((j) => card(j, true))}
        </ul>
      ) : (
        <div className="pt-10">
          {grouped.map(([stateName, list]) => (
            <div key={stateName} className="mb-14 last:mb-0">
              <div className="flex items-baseline gap-4">
                <h2 className="display text-2xl text-navy-950 sm:text-3xl">{stateName}</h2>
                <span className="mono-label text-[10px] text-slate-500">
                  {`${list.length} ${list.length === 1 ? "role" : "roles"}`}
                </span>
              </div>
              <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {list.map((j) => card(j, false))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
