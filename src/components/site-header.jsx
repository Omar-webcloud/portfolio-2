import { useMemo } from "react"
import { GitHubIcon } from "@/components/icons"

import { MAIN_NAV } from "@/data/user"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

import { BrandMark } from "./brand-mark"
import { Separator } from "./ui/panel"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const ids = useMemo(() => MAIN_NAV.map((item) => item.href.slice(1)), [])
  const active = useActiveSection(ids)

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center gap-2 border-x px-2 sm:gap-4 md:max-w-3xl sm:pl-4">
        <a href="#top" aria-label="Home" className="shrink-0">
          <BrandMark />
        </a>

        <nav className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto font-mono text-sm">
          {MAIN_NAV.map((item) => {
            const isActive = active === item.href.slice(1)

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-md px-2 py-1 transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.title}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="mr-2 hidden data-vertical:h-5 data-vertical:self-center sm:block"
          />

          <a
            href="https://github.com/Omar-webcloud"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-5 data-vertical:self-center"
          />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
