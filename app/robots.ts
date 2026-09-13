import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      // Explicit allows for AI-answer crawlers, on top of the wildcard
      // above — OAI-SearchBot is ChatGPT Search's discovery crawler (not
      // GPTBot, which is training-data only), and PerplexityBot is
      // Perplexity's. Named rules make the intent explicit even though the
      // wildcard already allows them.
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    /* Three, on purpose. sitemap.xml is the whole site; the other two are
       batches submitted separately in Search Console so their indexed/
       submitted ratios can be read on their own rather than averaged into
       the full set. A URL appearing in more than one is fine — Google
       reports per sitemap. */
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-priority.xml`,
      `${SITE_URL}/sitemap-awards.xml`,
      `${SITE_URL}/sitemap-faq.xml`,
      `${SITE_URL}/sitemap-jobs.xml`,
    ],
    host: SITE_URL,
  };
}
