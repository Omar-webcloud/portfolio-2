import { AwardIcon, ExternalLinkIcon } from "lucide-react"

import { CERTIFICATIONS } from "@/data/user"

import { IconTile } from "./ui/icon-tile"
import { Panel, PanelHeader, PanelTitle, PanelTitleCopy, PanelTitleSup } from "./ui/panel"

const ID = "certifications"

export function Certifications() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Certifications
          </a>
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <ul className="grid gap-3 p-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.link}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cert flex items-center gap-3 rounded-md border bg-zinc-50/60 p-3 transition-colors hover:bg-accent-muted dark:bg-zinc-900/60"
            >
              <IconTile>
                <AwardIcon />
              </IconTile>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{cert.title}</p>
                <p className="font-mono text-xs text-muted-foreground uppercase">
                  {cert.issuer}
                </p>
              </div>

              <ExternalLinkIcon className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/cert:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
