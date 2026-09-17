import { cn } from "@/lib/utils"

/** Two-line clean wordmark for Mohammad Omar (no acronyms) */
export function BrandMark({ className, ...props }) {
  return (
    <div
      className={cn(
        "group/brandmark flex flex-col font-mono text-[9px] sm:text-[10px] leading-[1.15] font-bold tracking-widest uppercase transition-colors duration-200 select-none",
        className
      )}
      {...props}
    >
      <span className="text-muted-foreground/90 group-hover/brandmark:text-emerald-500 transition-colors">
        Mohammad
      </span>
      <span className="text-foreground flex items-center gap-1 font-extrabold group-hover/brandmark:text-emerald-500 transition-colors">
        Omar
        <span className="size-1 rounded-full bg-emerald-500 inline-block" />
      </span>
    </div>
  )
}
