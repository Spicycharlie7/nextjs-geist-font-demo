"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import type { MediaItem } from "@/types"

interface MediaGridProps {
  items: MediaItem[]
}

export function MediaGrid({ items }: MediaGridProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <Card 
              className="group relative overflow-hidden cursor-pointer bg-[#27272A] border-white/10"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-square relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {item.isLocked && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-8 h-8 mx-auto mb-2 text-white/70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="text-sm font-medium text-white/90">Subscribe to unlock</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium truncate">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-white/60 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {item.likes}
                </div>
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-3xl bg-[#27272A] border-white/10">
            {!item.isLocked ? (
              <div>
                {item.type === "image" ? (
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full rounded-lg"
                  />
                ) : (
                  <video 
                    src={item.url} 
                    controls 
                    className="w-full rounded-lg"
                  />
                )}
                <div className="mt-4">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="border-white/10">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      Like
                    </Button>
                    <Button variant="outline" className="border-white/10">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <h2 className="text-2xl font-bold mb-2">Premium Content</h2>
                <p className="text-white/70 mb-6">Subscribe to unlock this content and more</p>
                <Button className="bg-[#EC4899] hover:bg-[#EC4899]/90">
                  Subscribe Now
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
