import { NextResponse, type NextRequest } from "next/server";

/* 410 Gone for the old site's dead civil URLs.
 *
 * WHY THIS EXISTS
 *
 * next.config.ts used to end with three open-ended catch-alls that sent any
 * URL shaped like "/civil-engineering-recruiter-<anything>" to the civil hub
 * with a 308. They were written so nobody would hit a 404, but they turned an
 * infinite space of invented URLs into permanently valid ones: Search Console
 * showed 29% of all crawl requests going to redirects, and a permanent
 * redirect is a promise Google keeps re-verifying rather than a URL it can
 * ever retire. 87% of the crawl was "Refresh" against URLs already known.
 *
 * A 410 says the opposite: this existed, it is gone, stop asking. Google
 * drops 410s faster than 404s, which is the whole point of doing this rather
 * than simply deleting the rules.
 *
 * WHAT STILL REDIRECTS
 *
 * Everything that has somewhere real to go. next.config.ts keeps 221 precise
 * mappings, one per city and per state, and the documented execution order is
 * headers, then next.config redirects, then this proxy. So an old URL whose
 * slug names a city or state we have a page for is redirected before it ever
 * reaches here. Only slugs with no destination fall through, and those are
 * the ones that were being swept to the hub to answer a question narrower
 * than the visitor asked.
 *
 * The matcher is deliberately narrow. Without one a proxy runs on every
 * request including static assets; these three patterns mean it is invoked
 * only on legacy URLs and normal traffic never pays for it.
 */

const LEGACY = [
  /^\/1seo-civil-engineering-recruiter-.+$/,
  /^\/civil-engineering-recruiter-.+$/,
  /^\/.+-civil-engineering-recruiter$/,
];

const GONE_PAGE = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Page no longer exists | Metro Associates</title>
<style>
:root{color-scheme:dark}
body{margin:0;min-height:100vh;display:flex;align-items:center;
  background:#0a1d33;color:#fff;
  font:16px/1.6 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
.w{max-width:40rem;margin:0 auto;padding:4rem 1.5rem}
.k{font:700 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace;
  letter-spacing:.14em;text-transform:uppercase;color:#f5a91b}
h1{margin:1.5rem 0 0;font-size:clamp(2rem,7vw,3rem);line-height:1.05;
  letter-spacing:-.02em}
p{margin:1rem 0 0;color:rgba(255,255,255,.7)}
.r{margin-top:2.25rem;display:flex;flex-wrap:wrap;gap:.75rem}
a{display:inline-block;padding:.9rem 1.6rem;text-decoration:none;
  font:700 13px/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.04em;
  text-transform:uppercase;border:1px solid rgba(255,255,255,.25);color:#fff}
a.p{background:#f5a91b;border-color:#f5a91b;color:#0a1d33}
a:hover{border-color:#f5a91b;color:#f5a91b}
a.p:hover{background:#fff;border-color:#fff;color:#0a1d33}
</style></head><body><div class="w">
<span class="k">// Error 410 / Page permanently removed</span>
<h1>This page no longer exists.</h1>
<p>It was part of an older version of this site and has been retired rather
than moved, so there is no direct replacement. Our civil engineering
recruiting pages cover the same ground.</p>
<div class="r">
<a class="p" href="/civil-engineering-recruiter">Civil engineering recruiting</a>
<a href="/">Home</a>
<a href="/contact">Contact</a>
</div></div></body></html>
`;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* The matcher should already guarantee this, but it is a build-time string
     and this is a runtime check on the same patterns. If they ever drift, a
     live page is served normally instead of being declared gone. */
  if (!LEGACY.some((re) => re.test(pathname))) return NextResponse.next();

  return new NextResponse(GONE_PAGE, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}

export const config = {
  matcher: [
    "/1seo-civil-engineering-recruiter-:slug",
    "/civil-engineering-recruiter-:slug",
    "/:state-civil-engineering-recruiter",
  ],
};
