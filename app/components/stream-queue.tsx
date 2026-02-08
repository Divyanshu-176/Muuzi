"use client"

import { useState, useCallback } from "react"
import type { QueueItem } from "../../lib/types"
import { NowPlaying } from "./now-playing"
import { SongSubmit } from "./song-submit"
import { QueueList } from "./queue-list"
import { Radio, ListMusic, PlusCircle, Share2, Check, Link as LinkIcon } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"






const INITIAL_QUEUE: QueueItem[] = [
  {
    id: "demo-1",
    videoId: "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    votes: 5,
    userVote: null,
  },
  {
    id: "demo-2",
    videoId: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg",
    votes: 3,
    userVote: null,
  },
  {
    id: "demo-3",
    videoId: "kJQP7kiw5Fk",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/mqdefault.jpg",
    votes: 1,
    userVote: null,
  },
]





export function StreamQueue() {
    const session = useSession()
  const [nowPlaying, setNowPlaying] = useState<QueueItem | null>(null)
  const [queue, setQueue] = useState<QueueItem[]>(INITIAL_QUEUE)
  const [copied, setCopied] = useState(false)

  const handleSubmit = useCallback(
    (item: Omit<QueueItem, "votes" | "userVote">) => {
      setQueue((prev) => [
        ...prev,
        { ...item, votes: 0, userVote: null },
      ])
    },
    []
  )

  const handleVote = useCallback((id: string, direction: "up" | "down") => {
    setQueue((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item

        const prevVote = item.userVote
        let { votes } = item
        let newVote: "up" | "down" | null = direction

        // Undo previous vote
        if (prevVote === "up") votes--
        if (prevVote === "down") votes++

        // Toggle off if clicking the same direction again
        if (prevVote === direction) {
          newVote = null
        } else {
          // Apply new vote
          if (direction === "up") votes++
          if (direction === "down") votes--
        }

        return { ...item, votes, userVote: newVote }
      })
    )
  }, [])

  const playNext = useCallback(() => {
    if (queue.length === 0) {
      setNowPlaying(null)
      return
    }

    const sorted = [...queue].sort((a, b) => b.votes - a.votes)
    const next = sorted[0]
    setNowPlaying(next)
    setQueue((prev) => prev.filter((item) => item.id !== next.id))
  }, [queue])

  const handleShare = useCallback(async () => {
    const url = window.location.href
    const shareData = {
      title: "Stream Queue - Vote for the Next Song",
      text: "Vote for the next song on the stream!",
      url,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [])

  return (
    <div className="mx-auto  w-full max-w-6xl px-4 py-6 lg:px-8">
        <h1>Stream ddadasqueue</h1>
      {/* Header */}
      <header className="mb-8 flex items-center gap-3">
        <div>
          <h1 className="text-lg font-semibold text-foreground tracking-tight">
            Stream Queue
          </h1>
          <p className="text-xs text-muted-foreground">
            Vote for the next song or submit your own
          </p>
        </div>
        <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-1.5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Live
            </span>
          </div>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5" />
                Share
              </>
            )}
          </button>
          
          <div>
            {session.status === "authenticated" && <Button variant="outline" size="sm" className="text-muted-foreground hover:text-foreground" onClick={()=>signOut()}>Log Out</Button>}
        </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left column: Now Playing + Submit */}
        <div className="flex flex-col gap-6 lg:w-[58%]">
          {/* Now Playing */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Radio className="h-3.5 w-3.5 text-muted-foreground" />
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Now Playing
              </h2>
            </div>
            <NowPlaying item={nowPlaying} onEnded={playNext} />
            {!nowPlaying && queue.length > 0 && (
              <button
                onClick={playNext}
                className="mt-3 w-full rounded-lg bg-foreground py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Start Playing
              </button>
            )}
          </section>

          {/* Submit Song */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <PlusCircle className="h-3.5 w-3.5 text-muted-foreground" />
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Submit a Song
              </h2>
            </div>
            <SongSubmit onSubmit={handleSubmit} />
          </section>
        </div>

        {/* Right column: Queue */}
        <div className="flex-1">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListMusic className="h-3.5 w-3.5 text-muted-foreground" />
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Up Next
              </h2>
            </div>
            <span className="text-xs text-muted-foreground">
              {queue.length} {queue.length === 1 ? "song" : "songs"}
            </span>
          </div>
          <QueueList items={queue} onVote={handleVote} />
        </div>
      </div>
    </div>
  )
}
