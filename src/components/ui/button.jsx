import { cn } from "@/lib/utils"

const variants = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
  outline:
    "border border-border bg-background hover:bg-accent hover:text-accent-foreground shadow-[inset_0_0_1px] shadow-foreground/10",
  secondary:
    "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/70 shadow-[inset_0_0_1px] shadow-foreground/20",
  ghost: "hover:bg-accent hover:text-accent-foreground",
}

const sizes = {
  sm: "h-7 gap-1.5 rounded-md px-2.5 text-[0.8125rem]/[1.125rem]",
  md: "h-8 gap-2 rounded-md px-3 text-sm",
  icon: "size-8 rounded-md",
  "icon-sm": "size-7 rounded-md",
}

export function Button({
  className,
  variant = "default",
  size = "md",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? "a" : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
