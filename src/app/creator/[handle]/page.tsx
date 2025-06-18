"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreatorCard } from "@/components/CreatorCard"
import { MediaGrid } from "@/components/MediaGrid"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"
import type { Creator, MediaItem } from "@/types"

// This would normally come from an API
const mockCreator: Creator = {
  id: "1",
  name: "Sarah Johnson",
  handle: "@sarahcreates",
  avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  coverImage: "https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg",
  bio: "Digital artist & photographer sharing exclusive content. Join me on my creative journey!",
  subscribers: "15.2K",
  posts: "234",
  likes: "45.1K"
}

const mockMedia: MediaItem[] = [
  {
    id: "1",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg",
    url: "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg",
    title: "Summer Vibes Collection",
    likes: 1234,
  },
  {
    id: "2",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    title: "Urban Photography",
    likes: 856,
    isLocked: true
  },
  {
    id: "3",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg",
    url: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg",
    title: "Nature Series",
    likes: 2156
  },
  {
    id: "4",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg",
    url: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg",
    title: "Abstract Art Collection",
    likes: 967,
    isLocked: true
  }
]

export default function CreatorProfile() {
  const params = useParams()
  const handle = params.handle as string

  // In a real app, we would fetch the creator data based on the handle
  console.log(`Viewing creator: ${handle}`)

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-20">
      {/* Hero Section with Cover Image */}
      <div className="relative h-64 md:h-80 w-full">
        <img 
          src={mockCreator.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Creator Info */}
          <div className="md:col-span-1">
            <CreatorCard creator={mockCreator} />
            
            <div className="grid grid-cols-3 gap-4 mt-4 bg-[#27272A] rounded-lg p-4 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold">{mockCreator.posts}</div>
                <div className="text-white/70 text-sm">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mockCreator.subscribers}</div>
                <div className="text-white/70 text-sm">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mockCreator.likes}</div>
                <div className="text-white/70 text-sm">Likes</div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full bg-[#27272A] border-white/10">
                <TabsTrigger value="all" className="flex-1">All Content</TabsTrigger>
                <TabsTrigger value="photos" className="flex-1">Photos</TabsTrigger>
                <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <MediaGrid items={mockMedia} />
              </TabsContent>
              <TabsContent value="photos" className="mt-6">
                <MediaGrid items={mockMedia.filter(item => item.type === "image")} />
              </TabsContent>
              <TabsContent value="videos" className="mt-6">
                <MediaGrid items={mockMedia.filter(item => item.type === "video")} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
