import type { NextConfig } from "next";
import { CITIES } from "./app/lib/cities";

// 301 redirects for legacy URLs indexed by Google on the previous site, so
// visitors and crawlers never land on a 404. Precise old->new city mappings
// (best for SEO) come first; broad catch-alls send anything else to the
// relevant hub page.
async function redirects() {
  // Old city URLs used the prefixes "1seo-civil-engineering-recruiter-<slug>"
  // and "civil-engineering-recruiter-<slug>". Map the ones whose slug matches a
  // real city straight to that city page.
  const cityRedirects = CITIES.flatMap((c) => [
    {
      source: `/1seo-civil-engineering-recruiter-${c.slug}`,
      destination: `/civil-engineering-recruiter/${c.slug}`,
      permanent: true,
    },
    {
      source: `/civil-engineering-recruiter-${c.slug}`,
      destination: `/civil-engineering-recruiter/${c.slug}`,
      permanent: true,
    },
  ]);

  /* The old site also had state-level pages — "/civil-engineering-recruiter-
     connecticut", "/north-dakota-civil-engineering-recruiter". The catch-alls
     at the bottom would sweep those to the hub, which answers a narrower
     question than the visitor asked. Sending each state to the city page we
     actually have there keeps them on a page about the place they searched
     for, and keeps whatever equity the old URL still carries pointed at a
     specific page rather than diluted across the hub.

     Generated from CITIES rather than hand-listed: the first city we list in
     a state is its primary market, and a new city page starts answering its
     state's old URLs without anyone remembering to add a line here. */
  const primaryCityByState = new Map<string, string>();
  for (const c of CITIES) {
    const key = c.state.toLowerCase().replace(/[^a-z]+/g, "-");
    if (!primaryCityByState.has(key)) primaryCityByState.set(key, c.slug);
  }
  const stateRedirects = [...primaryCityByState].flatMap(([state, slug]) => {
    const destination = `/civil-engineering-recruiter/${slug}`;
    return [
      { source: `/civil-engineering-recruiter-${state}`, destination, permanent: true },
      { source: `/${state}-civil-engineering-recruiter`, destination, permanent: true },
      { source: `/1seo-civil-engineering-recruiter-${state}`, destination, permanent: true },
    ];
  });

  return [
    // NOTE: www<->apex canonicalization is handled at the Vercel domain level,
    // NOT here. A host-based redirect in this config conflicts with Vercel's
    // domain redirect and causes an infinite loop (ERR_TOO_MANY_REDIRECTS).

    // Legacy standalone pages
    { source: "/contact-us-2", destination: "/contact", permanent: true },
    { source: "/contact-us", destination: "/contact", permanent: true },
    { source: "/privacy-policy-2", destination: "/privacy", permanent: true },
    { source: "/privacy-policy", destination: "/privacy", permanent: true },
    { source: "/terms-2", destination: "/terms", permanent: true },
    { source: "/about-us", destination: "/about", permanent: true },
    { source: "/home", destination: "/", permanent: true },

    /* /jobs and /jobs/* are NOT redirected any more. This site hosts its own
       job pages again (app/jobs), so sending those URLs to the portal would
       now redirect away from the very pages meant to receive them. An old
       WordPress job slug that no longer matches a live role falls through to
       a 404, which is what Google asks for on an expired posting - better
       than a redirect that implies the role still exists somewhere. */

    // Orphaned old WP pages/posts with no equivalent on the new site.
    { source: "/elementor-5338", destination: "/", permanent: true },
    { source: "/innovation-through-diversity-inclusion", destination: "/", permanent: true },
    { source: "/innovation-through-diversity-inclusion11", destination: "/", permanent: true },

    // Explicit alias for the one old slug that is neither a city slug nor a
    // state name. The rest that used to sit here are generated above.
    {
      source: "/1seo-civil-engineering-recruiter-new-york-city",
      destination: "/civil-engineering-recruiter/new-york-ny",
      permanent: true,
    },

    // Precise old->new mappings generated from the city list: cities first,
    // then states, so "/civil-engineering-recruiter-texas" can't shadow a
    // city that happens to share a name with its state.
    ...cityRedirects,
    ...stateRedirects,

    /* The catch-alls that used to close this list are gone. They matched
       "/civil-engineering-recruiter-<anything>", its "1seo-" variant and the
       state-first spelling, and sent all three to the civil hub with a 308 so
       that nobody would hit a 404.

       The cost was larger than the benefit. Because the patterns were open
       ended, any invented URL of that shape answered with a permanent
       redirect, which made an unbounded set of URLs permanently valid in
       Google's eyes. Search Console showed 29% of crawl requests resolving to
       redirects and 87% of the crawl as "Refresh", re-checking URLs already
       known, on a site that gets roughly 41 requests a day to spend on 330
       real pages.

       They now answer 410 Gone from proxy.ts, which runs after this list, so
       the precise mappings above still claim every old URL that names a city
       or state we actually have a page for. Only slugs with no destination
       reach the proxy. */
  ];
}

// JobFolder-approved recruiter photos are served from JOBFOLDER_API_URL
// (app/lib/jobfolderTeam.ts) — next/image needs that host explicitly
// allowed, and it's only known at build/start time, not statically.
const jobfolderImagePattern = (() => {
  if (!process.env.JOBFOLDER_API_URL) return null;
  try {
    const u = new URL(process.env.JOBFOLDER_API_URL);
    return { protocol: u.protocol.replace(":", "") as "http" | "https", hostname: u.hostname };
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "metroassoc.com",
      },
      ...(jobfolderImagePattern ? [jobfolderImagePattern] : []),
    ],
  },
  redirects,
};

export default nextConfig;
