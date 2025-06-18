"use client"

import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Creator } from "@/types"

interface CreatorCardProps {
  creator: Creator
  featured?: boolean
  showLink?: boolean
}

export function CreatorCard({ creator, featured = false, showLink = true }: CreatorCardProps) {
  const content = (
    <Card className={`bg-[#27272A] border-white/10 overflow-hidden ${featured ? 'transform hover:scale-[1.02] transition-transform' : ''}`}>
      {creator.coverImage && (
        <div className="relative h-32 w-full">
          <img 
            src={creator.coverImage} 
            alt={`${creator.name}'s cover`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-12 w-12">
            <img src={creator.avatar} alt={creator.name} className="object-cover" />
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg hover:text-[#2563EB] transition-colors">
              {creator.name}
            </h3>
            <p className="text-white/70">{creator.handle}</p>
          </div>
        </div>
        <p className="text-white/80 mb-4">{creator.bio}</p>
        <div className="flex items-center justify-between">
          <span className="text-white/60">{creator.subscribers} subscribers</span>
          <Button className="bg-[#EC4899] hover:bg-[#EC4899]/90">
            Subscribe
          </Button>
        </div>
      </div>
    </Card>
  )

  return content
}
