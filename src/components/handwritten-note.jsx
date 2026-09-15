import { cn } from "@/lib/utils"

export function HandwrittenNote({ className, ...props }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute flex font-handwritten text-lg leading-tight text-muted-foreground select-none",
        className
      )}
      aria-hidden
      {...props}
    />
  )
}

export function HandwrittenArrow({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 44 32"
      fill="none"
      aria-hidden
      className={cn("size-7 text-muted-foreground", className)}
      {...props}
    >
      <path
        d="M2 4c8.5 1.4 18.8 6.6 25.4 16.4 2.5 3.7 4.6 7.6 4.9 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M40.5 22.5c-.9 3.1-3.2 6.6-8.4 9.4-1.6.9-3.4 1.7-5.4 2.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M27.2 33.4c2.3-.6 4.3-1.4 6-2.3M41 22.2c-1.4 2.4-3.4 4.7-6.3 6.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
