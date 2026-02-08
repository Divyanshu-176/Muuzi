"use client"

import type { QueueItem } from "../../lib/types"
import { ChevronUp, ChevronDown, ListMusic } from "lucide-react"

interface QueueListProps {
  items: QueueItem[]
  onVote: (id: string, direction: "up" | "down") => void
}

export function QueueList({ items, onVote }: QueueListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
        <ListMusic className="h-8 w-8 text-muted-foreground mb-3" />
        <p className="text-sm text-muted-foreground">Queue is empty</p>
        <p className="text-xs text-muted-foreground mt-1">
          Submit a YouTube link to get started
        </p>
      </div>
    )
  }

  const sorted = [...items].sort((a, b) => b.votes - a.votes)

  return (
    <div className="flex flex-col gap-2">
        <h1>Queuedadas list</h1>
      {sorted.map((item, index) => (
        <div
          key={item.id}
          className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-muted-foreground/30"
        >
          {/* Rank */}
          <span className="w-5 shrink-0 text-center text-xs font-medium text-muted-foreground">
            {index + 1}
          </span>

          {/* Thumbnail */}
          <img
            src={item.thumbnail || "/placeholder.svg"}
            alt={item.title}
            className="h-12 w-20 shrink-0 rounded object-cover"
          />

          {/* Title */}
          <p className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
            {item.title}
          </p>

          {/* Vote controls */}
          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={() => onVote(item.id, "up")}
              className={`rounded-md p-1.5 transition-colors ${
                item.userVote === "up"
                  ? "bg-foreground/10 text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              aria-label={`Upvote ${item.title}`}
            >
              <ChevronUp className="h-4 w-4" />
            </button>

            <span
              className={`min-w-[1.5rem] text-center text-sm font-semibold tabular-nums ${
                item.votes > 0
                  ? "text-foreground"
                  : item.votes < 0
                    ? "text-muted-foreground"
                    : "text-muted-foreground"
              }`}
            >
              {item.votes}
            </span>

            <button
              onClick={() => onVote(item.id, "down")}
              className={`rounded-md p-1.5 transition-colors ${
                item.userVote === "down"
                  ? "bg-foreground/10 text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              aria-label={`Downvote ${item.title}`}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
