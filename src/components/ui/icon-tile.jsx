import { cn } from "@/lib/utils"

/** Small square chip that frames a leading icon in list items and metadata rows. */
export function IconTile({ className, ...props }) {
  return (
    <div
      data-slot="icon-tile"
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-md select-none transition-all duration-300",
        "border border-muted-foreground/15 bg-muted text-muted-foreground",
        "ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line",
        "group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.2)]",
        "group-hover/project:border-indigo-500/40 group-hover/project:bg-indigo-500/10 group-hover/project:text-indigo-500 group-hover/project:shadow-[0_0_12px_rgba(99,102,241,0.2)]",
        "group-hover/experience:border-blue-500/40 group-hover/experience:bg-blue-500/10 group-hover/experience:text-blue-500 group-hover/experience:shadow-[0_0_12px_rgba(59,130,246,0.2)]",
        "group-hover/cert:border-amber-500/40 group-hover/cert:bg-amber-500/10 group-hover/cert:text-amber-500 group-hover/cert:shadow-[0_0_12px_rgba(245,158,11,0.2)]",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}
