import { cn } from "@/lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
        {
          "h-4 w-4": size === "sm",
          "h-6 w-6": size === "md",
          "h-8 w-8": size === "lg",
        },
        "text-white/20",
        className
      )}
      role="status"
      aria-label="loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

interface SpinnerOverlayProps extends SpinnerProps {
  fullScreen?: boolean
}

export function SpinnerOverlay({ fullScreen, ...props }: SpinnerOverlayProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-[#1A1A1A]/80 backdrop-blur-sm",
        fullScreen ? "fixed inset-0 z-50" : "absolute inset-0"
      )}
    >
      <Spinner size="lg" {...props} />
    </div>
  )
}
