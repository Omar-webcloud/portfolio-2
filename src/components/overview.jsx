import { useEffect, useState } from "react"
import {
  CheckIcon,
  CodeXmlIcon,
  CopyIcon,
  LinkIcon,
  MapPinIcon,
} from "lucide-react"

import { USER } from "@/data/user"
import { cn } from "@/lib/utils"

import { IconTile } from "./ui/icon-tile"
import { Panel, PanelContent } from "./ui/panel"

export function Overview() {
  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        <IntroItem className="sm:col-span-2">
          <IconTile>
            <CodeXmlIcon />
          </IconTile>
          <IntroItemContent>
            {USER.jobs[0].title} <span aria-label="at">@</span>
            <a
              href="#experience-webermelon"
              className="link ml-0.5 font-medium"
            >
              {USER.jobs[0].company}
            </a>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IconTile>
            <MapPinIcon />
          </IconTile>
          <IntroItemContent>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Location: ${USER.address}`}
              className="link"
            >
              {USER.address}
            </a>
          </IntroItemContent>
        </IntroItem>

        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        <EmailItem email={USER.email} />

        <IntroItem>
          <IconTile>
            <LinkIcon />
          </IconTile>
          <IntroItemContent>
            <a
              href={USER.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Personal website: ${USER.website}`}
              className="link"
            >
              {USER.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IconTile>
            <MapPinIcon />
          </IconTile>
          <IntroItemContent className="text-muted-foreground">
            Available for freelance &amp; remote work
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-2.25 border-r border-dashed border-line max-sm:hidden"
        aria-hidden
      />
    </Panel>
  )
}

export function IntroItem({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center gap-4 font-mono text-sm", className)}
      {...props}
    />
  )
}

export function IntroItemContent({ className, ...props }) {
  return <p className={cn("text-balance", className)} {...props} />
}

function EmailItem({ email }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <IntroItem>
      <IconTile>
        {copied ? <CheckIcon className="text-success" /> : <CopyIcon />}
      </IconTile>
      <IntroItemContent>
        <button
          type="button"
          onClick={copy}
          className="cursor-copy text-left underline decoration-transparent decoration-1 underline-offset-3 transition-colors hover:decoration-current"
          aria-label={`Copy email address ${email}`}
        >
          {email}
        </button>
        <span className="sr-only" role="status">
          {copied ? "Email copied to clipboard" : ""}
        </span>
      </IntroItemContent>
    </IntroItem>
  )
}

function CurrentLocalTimeItem({ timeZone }) {
  const [clock, setClock] = useState(() => computeClock(timeZone))

  useEffect(() => {
    const update = () => setClock(computeClock(timeZone))
    update()
    const timer = setInterval(update, 30000)
    return () => clearInterval(timer)
  }, [timeZone])

  return (
    <IntroItem>
      <IconTile>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d={clockHandsPath(clock.hour, clock.minute)} />
        </svg>
      </IconTile>
      <IntroItemContent>
        <span className="tabular-nums">{clock.time}</span>
        <span className="text-muted-foreground"> {clock.diff}</span>
      </IntroItemContent>
    </IntroItem>
  )
}

function computeClock(timeZone) {
  const now = new Date()

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now)

  const hour = parseInt(time, 10)
  const minute = parseInt(time.slice(3), 10)

  const viewerOffset = -now.getTimezoneOffset()
  const targetOffset =
    (new Date(now.toLocaleString("en-US", { timeZone })).getTime() -
      new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) /
    60000

  const hoursDiff = Math.abs(targetOffset - viewerOffset) / 60
  const diff =
    hoursDiff < 1
      ? "// same time"
      : `// ${Math.floor(hoursDiff)}h ${targetOffset > viewerOffset ? "ahead" : "behind"}`

  return { time, hour, minute, diff }
}

function clockHandsPath(hour, minute) {
  const h = hour % 12
  const round = (n) => Math.round(n * 1000) / 1000

  const minuteAngle = (minute / 60) * 2 * Math.PI
  const hourAngle = ((h + minute / 60) / 12) * 2 * Math.PI

  const hx = round(12 + 3.6 * Math.sin(hourAngle))
  const hy = round(12 - 3.6 * Math.cos(hourAngle))
  const mx = round(12 + 6 * Math.sin(minuteAngle))
  const my = round(12 - 6 * Math.cos(minuteAngle))

  return `M12 12 L${hx} ${hy} M12 12 L${mx} ${my}`
}
