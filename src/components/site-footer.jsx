import { BrandMark } from "./brand-mark"

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-screen overflow-x-clip px-2">
      <div className="screen-line-top mx-auto flex flex-col gap-2 border-x px-4 py-6 text-sm text-muted-foreground md:max-w-3xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <BrandMark className="h-5" />
          <p>
            © {new Date().getFullYear()} Mohammad Omar. Built with React &amp;
            Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <span className="flex items-center gap-1.5">
            <span className="relative flex size-2 items-center justify-center">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-success" />
            </span>
            Available for work
          </span>
          <a href="#top" className="link">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
