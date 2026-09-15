import { useEffect, useState } from "react"

/** Highlights the nav item whose section is currently in view. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [ids])

  return active
}
