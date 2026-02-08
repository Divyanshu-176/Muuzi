"use client"

import { getEmbedUrl } from "../../lib/youtube"
import type { QueueItem } from "../../lib/types"
import { Music } from "lucide-react"

interface NowPlayingProps {
  item: QueueItem | null
  onEnded: () => void
}

export function NowPlaying({ item, onEnded }: NowPlayingProps) {
  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border aspect-video">
        <Music className="h-10 w-10 text-muted-foreground mb-3" />
        <p className="text-muted-foreground text-sm">
          No song playing. Add one to the queue!
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
        <h1>now sdadsa playing</h1>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-card">
        <iframe
          src={getEmbedUrl(item.videoId)}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {item.title}
            </p>
            <p className="text-xs text-muted-foreground">Now Playing</p>
          </div>
        </div>
        <button
          onClick={onEnded}
          className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Skip
        </button>
      </div>
    </div>
  )
}
