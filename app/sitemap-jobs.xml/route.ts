import { SITE_URL } from "../lib/site";
import { listJobs } from "../lib/jobs";

/* Live roles as their own sitemap.
 *
 * Separate from sitemap.xml for two reasons.
 *
 * The first is accuracy. These URLs exist only while the role is open, and the
 * main sitemap is a static list compiled at build time. Putting jobs in it
 * would keep advertising roles that had already been filled until the next
 * deploy, which is exactly the stale-posting problem Google penalises. This
 * route reads the live list instead, so a filled role leaves the sitemap on
 * the same schedule it leaves the site.
 *
 * The second is measurement. Search Console reports coverage per submitted
 * sitemap, so submitting this one on its own answers the only question worth
 * asking about the jobs section: are these pages getting indexed, and how
 * fast. Buried among 290 other URLs it would tell us nothing.
 *
 * <lastmod> is the posting date, which is the one date we actually know. No
 * <changefreq> or <priority>: Google ignores both.
 */
export const revalidate = 3600;

export async function GET() {
  const jobs = await listJobs();

  const urls = jobs
    .map(
      (j) =>
        `  <url>\n    <loc>${SITE_URL}/jobs/${j.slug}</loc>\n  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${SITE_URL}/jobs</loc>\n  </url>\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
