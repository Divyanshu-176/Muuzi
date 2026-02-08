"use client"

import { useState, useCallback } from "react"
import { extractVideoId, fetchVideoMeta } from "../../lib/youtube"
import type { QueueItem } from "../../lib/types"
import { Plus, Loader2, X, Link as LinkIcon } from "lucide-react"

interface SongSubmitProps {
  onSubmit: (item: Omit<QueueItem, "votes" | "userVote">) => void
}

export function SongSubmit({ onSubmit }: SongSubmitProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [preview, setPreview] = useState<{
    videoId: string
    title: string
    thumbnail: string
  } | null>(null)

  const handleUrlChange = useCallback(async (value: string) => {
    setUrl(value)
    setError("")
    setPreview(null)

    const videoId = extractVideoId(value)
    if (!videoId) return

    setLoading(true)
    try {
      const meta = await fetchVideoMeta(value)
      if (meta) {
        setPreview(meta)
      }
    } catch {
      // silently fail preview
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSubmit = () => {
    if (!preview) {
      setError("Please enter a valid YouTube URL")
      return
    }

    onSubmit({
      id: `${preview.videoId}-${Date.now()}`,
      videoId: preview.videoId,
      title: preview.title,
      thumbnail: preview.thumbnail,
    })

    setUrl("")
    setPreview(null)
    setError("")
  }

  const clearInput = () => {
    setUrl("")
    setPreview(null)
    setError("")
  }

  return (
    <div className="flex flex-col gap-3">
        <h1>song-submdsadasdasit</h1>
      <div className="relative">
        <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={url}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="Paste a YouTube link..."
          className="h-11 w-full rounded-lg border border-border bg-card pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-colors"
        />
        {url && (
          <button
            onClick={clearInput}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      {loading && (
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            Fetching video info...
          </span>
        </div>
      )}

      {preview && (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center gap-3 p-3">
            <img
              src={preview.thumbnail || "/placeholder.svg"}
              alt={preview.title}
              className="h-16 w-28 shrink-0 rounded object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">
                {preview.title}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                youtube.com
              </p>
            </div>
          </div>
          <div className="border-t border-border p-2">
            <button
              onClick={handleSubmit}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-foreground py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <Plus className="h-4 w-4" />
              Add to Queue
            </button>
          </div>
        </div>
      )}

      {!preview && !loading && url.length > 0 && !extractVideoId(url) && (
        <p className="text-xs text-muted-foreground">
          Supported: youtube.com/watch, youtu.be, youtube.com/shorts
        </p>
      )}
    </div>
  )
}
