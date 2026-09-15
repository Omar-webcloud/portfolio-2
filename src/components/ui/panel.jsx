import { useState } from "react"
import { CheckIcon, LinkIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Panels are the building blocks of the page: a full-width section framed by
 * hairlines that bleed to the screen edges.
 */
export function Panel({ className, ...props }) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-top screen-line-bottom border-x screen-line-bottom-border",
        className
      )}
      {...props}
    />
  )
}

export function PanelHeader({ className, ...props }) {
  return (
    <header
      data-slot="panel-header"
      className={cn(
        "screen-line-bottom px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:screen-line-bottom",
        className
      )}
      {...props}
    />
  )
}

export function PanelTitle({ className, asChild = false, ...props }) {
  const Comp = asChild ? "div" : "h2"

  return (
    <Comp
      data-slot="panel-title"
      className={cn(
        "group/panel-title font-heading text-3xl font-medium tracking-tight text-balance",
        className
      )}
      {...props}
    />
  )
}

export function PanelTitleSup({ className, ...props }) {
  return (
    <sup
      className={cn(
        "top-[-0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export function PanelDescription({ className, ...props }) {
  return (
    <div
      data-slot="panel-description"
      className={cn("py-4 text-base text-balance text-muted-foreground", className)}
      {...props}
    />
  )
}

export function PanelContent({ className, ...props }) {
  return <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
}

/** Copies an in-page anchor link to the clipboard. */
export function PanelTitleCopy({ id, className }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${id}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — nothing to do */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy link to section"
      className={cn(
        "relative ms-1.5 inline-flex size-5 translate-y-[-0.1em] items-center justify-center align-middle text-muted-foreground opacity-0 transition-opacity group-hover/panel-title:opacity-100 focus-visible:opacity-100",
        className
      )}
    >
      {copied ? (
        <CheckIcon className="size-4 text-success" />
      ) : (
        <LinkIcon className="size-4" />
      )}
    </button>
  )
}

export function Separator({ className, orientation = "horizontal", ...props }) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-line",
        orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch",
        className
      )}
      {...props}
    />
  )
}

/** The diagonal-stripe band used between groups of panels. */
export function StripeDivider({ className }) {
  return <div className={cn("stripe-divider h-8 w-full border-x", className)} />
}
