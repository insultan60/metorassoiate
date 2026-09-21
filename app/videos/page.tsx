import type { Metadata } from "next";
import { HeaderBackdrop } from "../components/HeaderBackdrop";

export const metadata: Metadata = {
  title: "Videos | Metro Associates | DOT & Infrastructure Staffing",
  description: "Watch our latest job openings and hiring updates from Metro Associates.",
  alternates: { canonical: "/videos" },
};

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
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`, {
      next: { revalidate: 3600 },
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
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-20 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink bg-amber-500" />
            <span className="mono-label text-amber-400">{"//"} On TikTok</span>
          </div>
          <h1 className="display mt-5 text-4xl text-white sm:text-5xl">
            Job Openings, <span className="text-brand-500">On Video</span>
          </h1>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
