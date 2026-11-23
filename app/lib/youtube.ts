/**
 * Public YouTube uploads used on /videos.
 *
 * The key is intentionally server-only: do not prefix it with NEXT_PUBLIC.
 * It only reads public data, but keeping it on the server lets us restrict it
 * to this deployment in Google Cloud and keeps it out of page source.
 */
const YOUTUBE_DATA_API_KEY = process.env.YOUTUBE_DATA_API_KEY?.trim();

/** Metro Associates' public channel, resolved from @metropolitanassociatesllc9517. */
const YOUTUBE_CHANNEL_ID = "UCeyW4LXM2DU0DEttQ5BOiqA";

/** Do not surface the channel's historical uploads on the website. */
export const YOUTUBE_AUTOMATION_START = "2026-11-22T00:00:00.000Z";

/** Videos marked #shorts on YouTube are intentionally not shown on the site. */
const SHORTS_TAG = /(^|\s)#shorts\b/i;

const REVALIDATE_SECONDS = 60 * 60;

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
};

type YouTubeChannelResponse = {
  items?: Array<{ contentDetails?: { relatedPlaylists?: { uploads?: string } } }>;
};

type YouTubePlaylistResponse = {
  items?: Array<{
    contentDetails?: { videoId?: string; videoPublishedAt?: string };
  }>;
};

type YouTubeVideosResponse = {
  items?: Array<{
    id?: string;
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: Record<string, { url?: string }>;
    };
    contentDetails?: { duration?: string };
    status?: { privacyStatus?: string };
  }>;
};

async function youtubeFetch<T>(path: string): Promise<T | null> {
  if (!YOUTUBE_DATA_API_KEY) return null;

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

/**
 * Returns the latest public, non-historical uploads. This deliberately
 * uses the channel's uploads playlist instead of search so the result follows
 * upload order and is not affected by YouTube search-index delays.
 */
export async function listRecentYouTubeVideos(): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_DATA_API_KEY) return [];

  const channel = await youtubeFetch<YouTubeChannelResponse>(
    `channels?part=contentDetails&id=${YOUTUBE_CHANNEL_ID}&key=${encodeURIComponent(YOUTUBE_DATA_API_KEY)}`,
  );
  const uploadsPlaylistId = channel?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) return [];

  const playlist = await youtubeFetch<YouTubePlaylistResponse>(
    `playlistItems?part=contentDetails&playlistId=${encodeURIComponent(uploadsPlaylistId)}&maxResults=50&key=${encodeURIComponent(YOUTUBE_DATA_API_KEY)}`,
  );
  const candidateIds = (playlist?.items ?? [])
    .filter((item) => {
      const publishedAt = item.contentDetails?.videoPublishedAt;
      return publishedAt && new Date(publishedAt) >= new Date(YOUTUBE_AUTOMATION_START);
    })
    .map((item) => item.contentDetails?.videoId)
    .filter((id): id is string => Boolean(id));

  if (candidateIds.length === 0) return [];

  const videos = await youtubeFetch<YouTubeVideosResponse>(
    `videos?part=snippet,contentDetails,status&id=${candidateIds.join(",")}&key=${encodeURIComponent(YOUTUBE_DATA_API_KEY)}`,
  );

  return (videos?.items ?? [])
    .filter((video) => {
      const publishedAt = video.snippet?.publishedAt;
      const duration = video.contentDetails?.duration;
      return (
        video.id &&
        video.status?.privacyStatus === "public" &&
        publishedAt &&
        new Date(publishedAt) >= new Date(YOUTUBE_AUTOMATION_START) &&
        duration &&
        !SHORTS_TAG.test(`${video.snippet?.title ?? ""}\n${video.snippet?.description ?? ""}`)
      );
    })
    .map((video) => {
      const thumbnail = video.snippet?.thumbnails?.maxres?.url
        ?? video.snippet?.thumbnails?.standard?.url
        ?? video.snippet?.thumbnails?.high?.url
        ?? video.snippet?.thumbnails?.medium?.url
        ?? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
      return {
        id: video.id!,
        title: video.snippet?.title?.trim() || "Metro Associates video",
        description: video.snippet?.description?.trim() || "Watch this video from Metro Associates.",
        thumbnailUrl: thumbnail,
        uploadDate: video.snippet!.publishedAt!,
        duration: video.contentDetails!.duration!,
      };
    })
    .sort((a, b) => Date.parse(b.uploadDate) - Date.parse(a.uploadDate));
}
