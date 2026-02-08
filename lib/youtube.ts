export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match?.[1]) return match[1]
  }

  return null
}

export function getThumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
}

export function getEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
}

export interface VideoMeta {
  videoId: string
  title: string
  thumbnail: string
}

export async function fetchVideoMeta(url: string): Promise<VideoMeta | null> {
  const videoId = extractVideoId(url)
  if (!videoId) return null

  try {
    const res = await fetch(
      `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`
    )
    const data = await res.json()

    return {
      videoId,
      title: data.title || "Untitled Video",
      thumbnail: getThumbnailUrl(videoId),
    }
  } catch {
    return {
      videoId,
      title: "Untitled Video",
      thumbnail: getThumbnailUrl(videoId),
    }
  }
}
