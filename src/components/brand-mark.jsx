import { cn } from "@/lib/utils"

/** "OM" monogram — a circle wrapped around an M. */
export function BrandMark({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden
      className={cn("h-6 w-auto shrink-0", className)}
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="27"
        rx="7.5"
        className="fill-foreground/[0.04] stroke-foreground/20"
      />
      <circle cx="14" cy="14" r="7.25" className="stroke-foreground" strokeWidth="1.6" />
      <path
        d="M10.4 17.6V10.4L14 14.3L17.6 10.4V17.6"
        className="stroke-foreground"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
