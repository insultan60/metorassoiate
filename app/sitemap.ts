import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { CITIES } from "./lib/cities";
import { MEP_CITIES } from "./lib/mep";
import { WATER_CITIES } from "./lib/waterWastewater";
import { CEI_CITIES } from "./lib/ceiInspection";
import { MUNICIPAL_CITIES } from "./lib/municipalEngineering";
import { AWARD_PROGRAMS } from "./lib/awards";
import { FAQ_GROUPS } from "./lib/hubFaqs";

/**
 * Static list of indexable routes. Update this when adding public pages.
 * /api/* is intentionally excluded (see robots.ts).
 */
const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/why-us", changeFrequency: "monthly", priority: 0.8 },
  /* The jobs index. The individual roles are not listed here: they appear and
     disappear on the ATS's schedule rather than ours, so they get their own
     sitemap that is generated from the live list on request. A weekly-cached
     static sitemap would advertise roles that had already been filled. */
  { path: "/jobs", changeFrequency: "daily", priority: 0.9 },
  // High priority: "what does <role> pay" is a query with real volume, and
  // this is the only page on the site that answers it in one place.
  { path: "/index_themall_awards", changeFrequency: "monthly", priority: 0.85 },
  // The award programs our clients compete in — the only page on the site
  // carrying that vocabulary, and the state-by-state list lives here.
  // Every question the site answers, in one place — the strongest single
  // citation target on the site for an assistant asked about engineering
  // recruiting, which is what this content is for.
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  // One per group of questions. Per-question pages were built and measured
  // first: 278-297 words each, 67.5% duplicate against a sibling and 80.2%
  // against their own hub — the band the unindexed city pages sit in. Grouped,
  // each page carries its answers and stands on its own.
  ...FAQ_GROUPS.map((g) => ({
    path: `/faq/${g.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/engineering-awards", changeFrequency: "monthly", priority: 0.8 },
  // One page per program. Higher than a city page because nothing else on
  // the site — or on most of the industry's sites — sets out the entry route
  // and what the award means to a hiring manager in one place.
  ...AWARD_PROGRAMS.map((a) => ({
    path: `/engineering-awards/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })),
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/meet-our-team", changeFrequency: "monthly", priority: 0.8 },
  // TikTok job-ad clips. Indexable and linked, but it was missing from this
  // list, so the only way Google could find it was by following a link.
  { path: "/videos", changeFrequency: "weekly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  /* The umbrella hub. Priority above a discipline hub because it is the only
     page carrying the program-level vocabulary ("infrastructure recruiter",
     "infrastructure recruitment agency"), which Search Console shows arriving
     at 230+ impressions against nothing to land on. */
  { path: "/infrastructure-recruiter", changeFrequency: "monthly", priority: 0.85 },
  { path: "/civil-engineering-recruiter", changeFrequency: "monthly", priority: 0.8 },
  ...CITIES.map((c) => ({
    path: `/civil-engineering-recruiter/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/mep-engineering-recruiter", changeFrequency: "monthly", priority: 0.8 },
  ...MEP_CITIES.map((c) => ({
    path: `/mep-engineering-recruiter/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/bridge-structural-recruiter", changeFrequency: "monthly", priority: 0.8 },
  { path: "/water-wastewater-recruiter", changeFrequency: "monthly", priority: 0.8 },
  ...WATER_CITIES.map((c) => ({
    path: `/water-wastewater-recruiter/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/cei-inspection-recruiter", changeFrequency: "monthly", priority: 0.8 },
  ...CEI_CITIES.map((c) => ({
    path: `/cei-inspection-recruiter/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/municipal-engineering-recruiter", changeFrequency: "monthly", priority: 0.8 },
  ...MUNICIPAL_CITIES.map((c) => ({
    path: `/municipal-engineering-recruiter/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/transportation-recruiter", changeFrequency: "monthly", priority: 0.8 },
  { path: "/project-management-recruiter", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
