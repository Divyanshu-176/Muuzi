export interface QueueItem {
  id: string
  videoId: string
  title: string
  thumbnail: string
  votes: number
  userVote: "up" | "down" | null
}
