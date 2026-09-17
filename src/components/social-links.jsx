import { SOCIAL_LINKS } from "@/data/user"

import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { SOCIAL_ICONS } from "./icons"
import { Panel, PanelContent } from "./ui/panel"

const BRAND_HOVER_STYLES = {
  github: "hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]",
  linkedin: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]",
  mail: "hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)]",
  resume: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]",
}

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social links</h2>

      <PanelContent>
        <ul className="flex flex-wrap gap-2.5">
          {SOCIAL_LINKS.map((item) => {
            const Icon = SOCIAL_ICONS[item.name]
            const brandHover = BRAND_HOVER_STYLES[item.name] || "hover:border-emerald-500/50 hover:text-emerald-500"

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  download={item.name === "resume" ? "Mohammad-Omar-Resume.pdf" : undefined}
                  title={`${item.title} (${item.handle})`}
                  aria-label={`${item.title} (${item.handle})`}
                  className={`group relative flex size-9 sm:size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground/80 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none ${brandHover}`}
                >
                  <Icon className="size-4 sm:size-4.5" />
                </a>
              </li>
            )
          })}
        </ul>
      </PanelContent>

      <HandwrittenNote className="-top-4 right-full mr-4 hidden w-20 flex-col items-end lg:flex">
        <span className="-rotate-6 text-emerald-600 dark:text-emerald-400 font-semibold">connect</span>
        <HandwrittenArrow className="size-7 translate-x-4 -scale-x-100 -rotate-6 text-emerald-500" />
      </HandwrittenNote>
    </Panel>
  )
}
