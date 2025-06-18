export type MediaType = "image" | "video"

export interface Creator {
  id: string
  name: string
  handle: string
  avatar: string
  coverImage?: string
  bio: string
  subscribers: string
  posts?: string
  likes?: string
}

export interface MediaItem {
  id: string
  type: MediaType
  thumbnail: string
  url: string
  title: string
  likes: number
  isLocked?: boolean
}
