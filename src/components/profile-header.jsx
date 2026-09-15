import { useEffect, useState } from "react"

import { USER } from "@/data/user"

import { AvatarLights } from "./avatar-lights"
import { FlipSentences } from "./flip-sentences"
import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { OmarMark } from "./omar-mark"

export function ProfileHeader() {
  const [lightsOn, setLightsOn] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key.toLowerCase() !== "l") return
      if (event.metaKey || event.ctrlKey || event.altKey) return

      const tag = event.target?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || event.target?.isContentEditable) return

      setLightsOn((v) => !v)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div
      id="top"
      className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x after:z-1"
    >
      <figure className="dot-grid relative col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
        <OmarMark />

        <HandwrittenNote className="bottom-20 left-full hidden w-36 flex-col items-start pointer-fine:xl:flex">
          <HandwrittenArrow className="-scale-y-100 -rotate-6" />
          <span className="ml-1 -rotate-6">
            follows your cursor
            <span className="block" />
            click for a sound
          </span>
        </HandwrittenNote>

        <figcaption className="pointer-events-none absolute right-2 bottom-2 text-sm leading-none tracking-wide text-[color-mix(in_oklab,var(--muted-foreground)_60%,var(--background))] tabular-nums select-none sm:right-4 sm:bottom-4">
          Fig. 1.
        </figcaption>
      </figure>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <button
            type="button"
            onClick={() => setLightsOn((v) => !v)}
            aria-label="Toggle avatar lights"
            title="Toggle lights (L)"
            className="mx-0.5 my-0.75 flex cursor-pointer rounded-full outline-none group-focus-visible:ring-2 group-focus-visible:ring-ring/50"
          >
            <AvatarLights lightsOn={lightsOn} />
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
              {USER.displayName}
            </h1>

            <span className="flex items-center gap-1.5 rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[0.625rem] tracking-wide text-muted-foreground uppercase select-none">
              <span className="relative flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-success" />
              </span>
              Available
            </span>
          </div>

          <FlipSentences
            sentences={USER.flipSentences}
            className="h-12.5 border-t border-line py-1 pl-4 sm:h-9"
          />
        </div>
      </div>
    </div>
  )
}
