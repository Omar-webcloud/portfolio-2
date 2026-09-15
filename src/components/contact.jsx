import { useState } from "react"
import { CheckIcon, CopyIcon, DownloadIcon } from "lucide-react"

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

      <PanelContent className="space-y-4">
        <p className="text-base text-balance text-muted-foreground">
          Open to freelance projects, agency collaborations and full-time roles —
          remote or on-site in Chattogram.
        </p>

        <ul className="grid gap-y-2.5 sm:grid-cols-2">
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
                    className="link inline-flex items-center gap-1.5"
                  >
                    {item.handle.replace(/^https?:\/\//, "")}
                    {item.name === "resume" && (
                      <DownloadIcon className="size-3.5 text-muted-foreground" />
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
      <IntroItemContent>
        <a href={`mailto:${email}`} className="link mr-2">
          {email}
        </a>
        <button
          type="button"
          onClick={copy}
          className="font-mono text-xs text-muted-foreground underline decoration-dotted underline-offset-3 hover:text-foreground"
        >
          {copied ? "copied" : "copy"}
        </button>
      </IntroItemContent>
    </IntroItem>
  )
}
