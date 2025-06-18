"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CreatorCard } from "@/components/CreatorCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Creator } from "@/types"

// This would normally come from an API
const allCreators: Creator[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    handle: "@sarahcreates",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    coverImage: "https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg",
    bio: "Digital artist & photographer sharing exclusive content",
    subscribers: "15.2K",
    posts: "156",
    likes: "32.5K"
  },
  {
    id: "2",
    name: "Mike Chen",
    handle: "@mikefit",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    coverImage: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    bio: "Fitness trainer & lifestyle content creator",
    subscribers: "23.8K",
    posts: "234",
    likes: "45.1K"
  },
  {
    id: "3",
    name: "Emma Wilson",
    handle: "@emmawrites",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    coverImage: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg",
    bio: "Writer & storyteller sharing creative journey",
    subscribers: "12.4K",
    posts: "89",
    likes: "18.2K"
  },
  {
    id: "4",
    name: "David Kim",
    handle: "@davidmusic",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    coverImage: "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg",
    bio: "Music producer & audio engineer",
    subscribers: "31.2K",
    posts: "167",
    likes: "55.8K"
  },
  {
    id: "5",
    name: "Lisa Martinez",
    handle: "@lisacooks",
    avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    coverImage: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    bio: "Chef sharing recipes & cooking tips",
    subscribers: "45.6K",
    posts: "312",
    likes: "89.3K"
  },
  {
    id: "6",
    name: "Alex Turner",
    handle: "@alexart",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    coverImage: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
    bio: "Digital artist & illustrator",
    subscribers: "28.9K",
    posts: "198",
    likes: "62.4K"
  }
]

const categories = [
  "All",
  "Art & Illustration",
  "Music",
  "Photography",
  "Fitness",
  "Cooking",
  "Writing",
  "Gaming",
  "Tech"
]

export default function ExplorePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCreators = allCreators.filter((creator) => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.bio.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === "All" ? true :
      creator.handle === "@sarahcreates" && selectedCategory === "Art & Illustration" ||
      creator.handle === "@davidmusic" && selectedCategory === "Music" ||
      creator.handle === "@mikefit" && selectedCategory === "Fitness" ||
      creator.handle === "@lisacooks" && selectedCategory === "Cooking" ||
      creator.handle === "@emmawrites" && selectedCategory === "Writing" ||
      creator.handle === "@alexart" && selectedCategory === "Art & Illustration"

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Explore Creators</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#27272A] border-white/10"
            />
            <Button variant="outline" className="border-white/10 whitespace-nowrap">
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-[#2563EB] hover:bg-[#2563EB]/90"
                    : "border-white/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => (
            <div 
              key={creator.id} 
              className="group cursor-pointer" 
              onClick={() => router.push(`/creator/${creator.handle.slice(1)}`)}
            >
              <CreatorCard creator={creator} featured />
            </div>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">No creators found</h3>
            <p className="text-white/70">
              Try adjusting your search or filters to find more creators
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
