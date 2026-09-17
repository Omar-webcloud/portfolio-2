import { useState } from "react"
import { CheckIcon, CopyIcon, DownloadIcon, ExternalLinkIcon, SparklesIcon } from "lucide-react"

import { SOCIAL_LINKS, USER } from "@/data/user"

import { SOCIAL_ICONS } from "./icons"
import { IntroItem, IntroItemContent } from "./overview"
import { IconTile } from "./ui/icon-tile"
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleCopy } from "./ui/panel"

const ID = "contact"

export function Contact() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Contact
          </a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-5">
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 transition-all hover:border-emerald-500/40">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
            <span className="relative flex size-2 items-center justify-center">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            <span>{USER.availability.status}</span>
          </div>
          <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
            {USER.availability.message}
          </p>
        </div>

        <ul className="grid gap-y-3 sm:grid-cols-2">
          <EmailItem email={USER.email} />

          {SOCIAL_LINKS.filter((item) =>
            ["linkedin", "github", "resume"].includes(item.name)
          ).map((item) => {
            const Icon = SOCIAL_ICONS[item.name]

            return (
              <IntroItem key={item.name}>
                <IconTile>
                  <Icon className="size-4" />
                </IconTile>
                <IntroItemContent>
                  <a
                    href={item.href}
                    target={item.name === "resume" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    download={item.name === "resume" ? "Mohammad-Omar-Resume.pdf" : undefined}
                    className="link inline-flex items-center gap-1.5 font-medium hover:text-emerald-500 transition-colors truncate"
                  >
                    <span>{item.name === "resume" ? "View & Download CV" : item.handle.replace(/^https?:\/\//, "")}</span>
                    {item.name === "resume" ? (
                      <DownloadIcon className="size-3.5 text-emerald-500" />
                    ) : (
                      <ExternalLinkIcon className="size-3 text-muted-foreground" />
                    )}
                  </a>
                </IntroItemContent>
              </IntroItem>
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
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
      <IntroItemContent className="flex items-center gap-2 truncate">
        <a
          href={`mailto:${email}`}
          className="link font-medium hover:text-emerald-500 transition-colors truncate"
        >
          {email}
        </a>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 font-mono text-xs text-muted-foreground underline decoration-dotted underline-offset-3 hover:text-emerald-500 cursor-pointer"
        >
          {copied ? "copied" : "copy"}
        </button>
      </IntroItemContent>
    </IntroItem>
  )
}
