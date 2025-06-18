"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <svg
          className="w-12 h-12 mx-auto mb-4 text-white/20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h2 className="text-xl font-semibold mb-2">Something went wrong!</h2>
        <p className="text-white/70 mb-6">
          {error.message || "We encountered an error while processing your request."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            onClick={reset}
            className="bg-[#2563EB] hover:bg-[#2563EB]/90"
          >
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = "/"}
            className="border-white/10"
          >
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  )
}

export function GlobalError({
  error,
  reset,
}: ErrorBoundaryProps) {
  return (
    <html>
      <body className="bg-[#1A1A1A] text-white">
        <div className="min-h-screen flex items-center justify-center">
          <ErrorBoundary error={error} reset={reset} />
        </div>
      </body>
    </html>
  )
}
