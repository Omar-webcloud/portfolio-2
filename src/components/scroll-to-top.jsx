import { useEffect, useState } from "react"
import { ArrowUpIcon } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={`fixed right-4 bottom-4 z-50 flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground shadow-sm backdrop-blur transition-all duration-300 hover:text-foreground ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon className="size-4" />
    </button>
  )
}
