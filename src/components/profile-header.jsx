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
        <div className="screen-line-top mt-auto shrink-0 border-r border-line p-1 sm:p-1.5 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setLightsOn((v) => !v)}
            aria-label="Toggle avatar lights"
            title="Toggle lights (L)"
            className="group/avatar flex cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
          >
            <AvatarLights lightsOn={lightsOn} />
          </button>
        </div>
      </div>

      <div className="flex flex-col min-w-0">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex flex-wrap items-center justify-between gap-1.5 pl-2.5 sm:pl-4 py-2 sm:py-2.5 pr-2.5 sm:pr-4">
            <h1 className="font-heading leading-tight tracking-tight min-w-0">
              <span className="block text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted-foreground truncate">
                Mohammad
              </span>
              <span className="block text-lg sm:text-2xl font-bold text-foreground truncate">
                Omar
              </span>
            </h1>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.625rem] tracking-wide text-emerald-600 dark:text-emerald-400 uppercase select-none shrink-0 shadow-xs">
              <span className="relative flex size-1.5 sm:size-2 items-center justify-center">
                <span className="absolute inline-flex size-1.5 sm:size-2 animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-1 sm:size-1.5 rounded-full bg-emerald-500" />
              </span>
              Available
            </span>
          </div>

          <FlipSentences
            sentences={USER.flipSentences}
            className="h-11 sm:h-9 border-t border-line py-1.5 pl-2.5 sm:pl-4"
          />
        </div>
      </div>
    </div>
  )
}
