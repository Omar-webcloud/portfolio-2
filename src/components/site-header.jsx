import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MenuIcon, XIcon } from "lucide-react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = useCallback((e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.slice(1)
      setMobileMenuOpen(false)

      setTimeout(() => {
        if (id === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" })
          window.history.pushState(null, "", " ")
          return
        }

        const elem = document.getElementById(id)
        if (elem) {
          const header = document.querySelector("header")
          const headerHeight = header ? header.offsetHeight : 56
          const elementPosition = elem.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 12)

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          })
          window.history.pushState(null, "", href)
        }
      }, 60)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background/95 backdrop-blur-md px-2 transition-all duration-300">
      <div
        className={cn(
          "screen-line-top screen-line-bottom mx-auto flex items-center justify-between gap-2 border-x px-3 sm:px-4 md:max-w-3xl transition-all duration-300",
          scrolled ? "h-11 sm:h-12 py-1 shadow-xs" : "h-14 sm:h-14 py-2"
        )}
      >
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          aria-label="Home"
          className="shrink-0 flex items-center cursor-pointer"
        >
          <BrandMark />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-1 font-mono text-sm">
          {MAIN_NAV.map((item) => {
            const isActive = active === item.href.slice(1)

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "shrink-0 rounded-md px-2.5 py-1 text-xs sm:text-sm transition-all duration-200 cursor-pointer",
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                {item.title}
              </a>
            )
          })}
        </nav>

        {/* Right Action Icons & Mobile Toggler */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="https://github.com/Omar-webcloud"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex size-7 sm:size-8 items-center justify-center rounded-md text-muted-foreground transition-all duration-200 hover:text-purple-500 hover:bg-purple-500/10"
          >
            <GitHubIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="mx-1 data-vertical:h-4 data-vertical:self-center"
          />

          <ThemeToggle />

          {/* Mobile Menu Toggler */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex sm:hidden size-8 items-center justify-center rounded-md border border-border bg-accent/40 text-foreground transition-colors hover:bg-accent cursor-pointer ml-1"
          >
            {mobileMenuOpen ? (
              <XIcon className="size-4 text-emerald-500" />
            ) : (
              <MenuIcon className="size-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="sm:hidden border-x border-b border-line bg-background/98 backdrop-blur-lg overflow-hidden mx-auto md:max-w-3xl"
          >
            <nav className="flex flex-col gap-1 p-3 font-mono text-sm">
              {MAIN_NAV.map((item) => {
                const isActive = active === item.href.slice(1)

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-left transition-all duration-200 cursor-pointer outline-none",
                      isActive
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold"
                        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                    )}
                  >
                    <span>{item.title}</span>
                    {isActive && (
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </button>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
