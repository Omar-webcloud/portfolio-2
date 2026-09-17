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
              className="group/cert flex items-center gap-3 rounded-lg border border-border bg-zinc-50/60 p-3 transition-all duration-200 hover:border-amber-500/40 hover:bg-amber-500/5 hover:shadow-xs dark:bg-zinc-900/60"
            >
              <IconTile>
                <AwardIcon />
              </IconTile>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground group-hover/cert:text-amber-600 dark:group-hover/cert:text-amber-400 transition-colors">
                  {cert.title}
                </p>
                <p className="font-mono text-xs text-muted-foreground uppercase">
                  {cert.issuer}
                </p>
              </div>

              <ExternalLinkIcon className="size-3.5 shrink-0 text-muted-foreground transition-all duration-200 group-hover/cert:text-amber-500 group-hover/cert:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
