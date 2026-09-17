import { cn } from "@/lib/utils"

const TAG_COLOR_MAP = {
  "Next.js": "hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400",
  React: "hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400",
  TypeScript: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400",
  JavaScript: "hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400",
  "Tailwind CSS": "hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-400",
  "Tailwind CSS 4": "hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-400",
  "Node.js": "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400",
  Express: "hover:border-zinc-500/50 hover:bg-zinc-500/10 hover:text-zinc-700 dark:hover:text-zinc-300",
  WordPress: "hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-400",
  "Elementor Pro": "hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400",
  "Gemini AI": "hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-600 dark:hover:text-fuchsia-400",
  "Drizzle ORM": "hover:border-lime-500/50 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400",
  Prisma: "hover:border-teal-500/50 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400",
  PostgreSQL: "hover:border-indigo-600/50 hover:bg-indigo-600/10 hover:text-indigo-600 dark:hover:text-indigo-400",
  "Better Auth": "hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400",
  Stripe: "hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400",
  "Framer Motion": "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-600 dark:hover:text-pink-400",
  Firebase: "hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400",
  "WhatsApp API": "hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400",
  "Shadcn UI": "hover:border-zinc-500/50 hover:bg-zinc-500/10 hover:text-foreground",
  Zustand: "hover:border-amber-600/50 hover:bg-amber-600/10 hover:text-amber-600 dark:hover:text-amber-400",
  Git: "hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400",
  API: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400",
}

export function Tag({ className, children, ...props }) {
  const text = typeof children === "string" ? children : ""
  const colorClass =
    TAG_COLOR_MAP[text] ||
    "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"

  return (
    <span
      data-slot="tag"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-zinc-50/90 px-2 py-0.5 font-mono text-xs text-muted-foreground transition-all duration-200 cursor-default select-none dark:bg-zinc-900/90",
        "hover:scale-[1.03] hover:shadow-xs",
        colorClass,
        "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
