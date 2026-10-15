import type { Metadata } from "next";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import YouTubeFacade from "../components/YouTubeFacade";
import { JsonLd } from "../components/JsonLd";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Videos | Metro Associates | DOT & Infrastructure Staffing",
  description:
    "Job openings and hiring updates on video from Metro Associates: role walk-throughs on YouTube and short job ads on TikTok.",
  alternates: { canonical: "/videos" },
};

/* YouTube role walk-throughs — add new ones here as Patrick shares them.
 *
 * Titles are written here rather than pulled from YouTube's oEmbed, which is
 * how the TikTok clips below get theirs. The uploads carry working titles
 * ("... 1080p caption") and a placeholder channel name, and neither belongs
 * on the page. An explicit title also means a video being renamed on YouTube
 * cannot silently change what this page says. */
/* The firm-wide careers video, kept out of the role list below.
 *
 * It is not a walk-through of one opening, so filing it among them would
 * have meant captioning it as a role it is not, and burying the one video
 * that explains who Metro is among three that assume you already know. It
 * runs once, wider, above the grid. */
const FEATURED_VIDEO = {
  id: "jZeZwPC0eEA",
  title: "Careers at Metro Associates: engineering and infrastructure",
  description:
    "An overview of engineering, architecture and construction careers at Metro Associates, and what working with our recruiters involves.",
  uploadDate: "2026-10-07T07:20:58-07:00",
  duration: "PT33S",
};

const YOUTUBE_VIDEOS = [
  {
    id: "7nR8p4NyXwI",
    title: "Senior Mechanical Systems Engineer, thermal energy storage",
    description:
      "A walk-through of an open senior mechanical systems engineer search covering thermal energy storage and chilled-water cooling for data centers.",
    uploadDate: "2026-10-13T13:17:23-07:00",
    duration: "PT36S",
  },
  {
    id: "UeVXo4WaCfY",
    title: "Traffic Engineer, Chicago area",
    description:
      "A walk-through of an open traffic engineer search in the Chicago area.",
    uploadDate: "2026-10-07T04:03:06-07:00",
    duration: "PT29S",
  },
  {
    id: "ptUCw1_pjig",
    title: "Senior Refrigeration & Utilities Manager",
    description:
      "A walk-through of an open senior refrigeration and utilities manager search.",
    uploadDate: "2026-09-25T11:21:40-07:00",
    duration: "PT39S",
  },
  {
    id: "b6lp9i9w9PQ",
    title: "Process Engineer, food manufacturing in Virginia",
    description:
      "A walk-through of an open process engineer search in food manufacturing in Virginia.",
    uploadDate: "2026-09-27T00:59:15-07:00",
    duration: "PT49S",
  },
  {
    id: "fPi4M7brMLw",
    title: "Director of Land Development, Tucson",
    description:
      "A walk-through of an open director of land development search in Tucson.",
    uploadDate: "2026-09-29T05:47:20-07:00",
    duration: "PT26S",
  },
];

/* VideoObject for the five YouTube videos.
 *
 * Without this the videos are invisible as video results and the Videos
 * report in Search Console has nothing to say about a page whose entire
 * purpose is video. The facade is the reason: the page ships a thumbnail and
 * a play button rather than an iframe, which is right for performance and
 * leaves a crawler no player to recognise. The markup is what tells it.
 *
 * uploadDate and duration are read off each video once and written down here
 * rather than fetched. They are required fields, an incomplete VideoObject is
 * worse than none because it reports as an error, and the alternative was a
 * YouTube Data API key and a quota in the request path for two values that
 * never change for a given video. Replace a video and these are what need
 * updating with it. */
function videoSchema(v: {
  id: string;
  title: string;
  description: string;
  uploadDate: string;
  duration: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`],
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    url: `${SITE_URL}/videos`,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/* TikTok job-ad clips (@patricknovick225) — add new video IDs here as
   Patrick shares more. */
const VIDEO_IDS = [
  "7678660383099407647",
  "7678658540050943263",
  "7678040762646318367",
];

interface TikTokVideo {
  id: string;
  url: string;
  thumbnailUrl: string | null;
  title: string | null;
}

/* TikTok's oEmbed thumbnail URLs are CDN-signed and expire after a few days,
   so they're fetched fresh here (server-side, revalidated hourly) rather
   than hardcoded — a build-time snapshot would go stale and break. A failed
   fetch (video removed/private/rate-limited) just means that card falls
   back to a plain placeholder instead of breaking the page. */
async function getTikTokMeta(id: string): Promise<{ thumbnailUrl: string | null; title: string | null }> {
  const videoUrl = `https://www.tiktok.com/@patricknovick225/video/${id}`;
  try {
    /* Bounded, because this runs during the build.
     *
     * The catch below already degrades to a thumbnail-less card, but it is
     * only reached if the request actually ends. Without a deadline a
     * hanging oEmbed just stalls: TikTok stopped responding on 16 Oct 2026
     * and this page blew Next's 60-second page budget three attempts running,
     * failing the whole build over a decorative thumbnail.
     *
     * Six seconds against three videos fetched in parallel, so the worst case
     * is one short wait and three plain cards rather than no site. */
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return { thumbnailUrl: null, title: null };
    const data = (await res.json()) as { thumbnail_url?: string; title?: string };
    return { thumbnailUrl: data.thumbnail_url ?? null, title: data.title ?? null };
  } catch {
    return { thumbnailUrl: null, title: null };
  }
}

export default async function VideosPage() {
  const videos: TikTokVideo[] = await Promise.all(
    VIDEO_IDS.map(async (id) => {
      const meta = await getTikTokMeta(id);
      return { id, url: `https://www.tiktok.com/@patricknovick225/video/${id}`, ...meta };
    }),
  );

  return (
    <main>
      <JsonLd
        data={[FEATURED_VIDEO, ...YOUTUBE_VIDEOS].map(videoSchema)}
      />
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-20 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink bg-amber-500" />
            <span className="mono-label text-amber-400">{"//"} On video</span>
          </div>
          <h1 className="display mt-5 text-4xl text-white sm:text-5xl">
            Job Openings, <span className="text-brand-500">On Video</span>
          </h1>

          {/* YouTube first: these are the longer walk-throughs, 16:9, and they
              carry the roles worth the most. The TikTok wall below is the
              short-form version of the same job. */}
          <div className="mt-14">
            <h2 className="mono-label text-ink-300">{"//"} Start here</h2>
            <figure className="mt-6 max-w-3xl">
              <div className="relative aspect-video overflow-hidden border border-white/10 bg-navy-950">
                <YouTubeFacade videoId={FEATURED_VIDEO.id} title={FEATURED_VIDEO.title} />
              </div>
              <figcaption className="mt-3">
                <p className="text-sm font-semibold leading-snug text-white">
                  {FEATURED_VIDEO.title}
                </p>
                <p className="mt-1 text-xs text-ink-300">YouTube · Metro Associates</p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-16">
            <h2 className="mono-label text-ink-300">{"//"} Role walk-throughs</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {YOUTUBE_VIDEOS.map((v) => (
                <figure key={v.id}>
                  <div className="relative aspect-video overflow-hidden border border-white/10 bg-navy-950">
                    <YouTubeFacade videoId={v.id} title={v.title} />
                  </div>
                  <figcaption className="mt-3">
                    <p className="text-sm font-semibold leading-snug text-white">{v.title}</p>
                    <p className="mt-1 text-xs text-ink-300">YouTube · Metro Associates</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <h2 className="mono-label mt-16 text-ink-300">{"//"} Short clips on TikTok</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden border border-white/10"
                style={{ aspectRatio: "9 / 16" }}
              >
                {v.thumbnailUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={v.thumbnailUrl}
                    alt={v.title ?? "TikTok video"}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-navy-900" />
                )}

                {/* Legibility gradient for the caption */}
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/10 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden style={{ marginLeft: 2 }}>
                      <path d="M5 3l12 7-12 7V3z" fill="#0b1426" />
                    </svg>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug text-white">
                    {v.title?.split("#")[0].trim() || "Watch on TikTok"}
                  </p>
                  <p className="mt-1 text-xs text-ink-300">TikTok · @patricknovick225</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
