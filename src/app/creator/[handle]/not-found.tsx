import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CreatorNotFound() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-white/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Creator Not Found</h1>
        <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
          The creator you're looking for doesn't exist or may have changed their handle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="default" className="bg-[#2563EB] hover:bg-[#2563EB]/90">
              Back to Home
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="outline" className="border-white/10">
              Explore Creators
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
