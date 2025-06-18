import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export default function ExploreLoading() {
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

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Skeleton className="h-12 w-64 mx-auto mb-8" />
          <div className="flex flex-col md:flex-row gap-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-white/10 pointer-events-none"
                disabled
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Creators Grid Loading State */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#27272A] rounded-lg p-6 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
