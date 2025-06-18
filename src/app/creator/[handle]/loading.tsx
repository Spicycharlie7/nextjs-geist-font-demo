import { Skeleton } from "@/components/ui/skeleton"

export default function CreatorProfileLoading() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-20">
      {/* Hero Section Loading State */}
      <div className="relative h-64 md:h-80 w-full">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Creator Info Loading State */}
          <div className="md:col-span-1">
            <div className="bg-[#27272A] border border-white/10 p-6 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 bg-[#27272A] rounded-lg p-4 border border-white/10">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-1" />
                  <Skeleton className="h-4 w-12 mx-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Content Area Loading State */}
          <div className="md:col-span-2">
            <div className="bg-[#27272A] p-1 rounded-lg mb-6">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-10 rounded-md" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-[#27272A] rounded-lg overflow-hidden">
                  <Skeleton className="w-full aspect-square" />
                  <div className="p-3">
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
