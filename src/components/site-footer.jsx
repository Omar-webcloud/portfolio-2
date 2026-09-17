import { BrandMark } from "./brand-mark"
import { FooterCubeArt } from "./footer-cube-art"
import { StripeDivider } from "./ui/panel"

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-screen overflow-x-clip px-2 pb-16">
      <div className="mx-auto md:max-w-3xl">
        <StripeDivider />

        <div className="screen-line-bottom border-x bg-card/30">
          <FooterCubeArt />
        </div>

        <div className="screen-line-top flex flex-col gap-3 border-x px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <BrandMark className="h-5 transition-transform duration-300 hover:scale-110" />
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} <span className="text-foreground font-medium">Mohammad Omar</span>
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="flex items-center gap-1.5">
              <span className="relative flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-success" />
              </span>
              Available for projects
            </span>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="link inline-flex items-center gap-1 text-muted-foreground hover:text-emerald-500 transition-colors cursor-pointer"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
