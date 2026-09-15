import { SOCIAL_LINKS } from "@/data/user"

import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { SOCIAL_ICONS } from "./icons"
import { Panel, PanelContent } from "./ui/panel"

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social links</h2>

      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((item) => {
            const Icon = SOCIAL_ICONS[item.name]

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  title={`${item.title} (${item.handle})`}
                  aria-label={`${item.title} (${item.handle})`}
                  className="group relative flex size-9 items-center justify-center rounded-md border border-border bg-background text-foreground/80 shadow-[inset_0_0_1px] shadow-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <Icon className="size-4.5" />
                </a>
              </li>
            )
          })}
        </ul>
      </PanelContent>

      <HandwrittenNote className="-top-4 right-full mr-4 hidden w-20 flex-col items-end lg:flex">
        <span className="-rotate-6">connect</span>
        <HandwrittenArrow className="size-7 translate-x-4 -scale-x-100 -rotate-6" />
      </HandwrittenNote>
    </Panel>
  )
}
