import { GraduationCapIcon } from "lucide-react"

import { EDUCATION } from "@/data/user"

import { IconTile } from "./ui/icon-tile"
import { Panel, PanelHeader, PanelTitle, PanelTitleCopy } from "./ui/panel"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Education
          </a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <ul className="py-4 pr-2 pl-4">
        {EDUCATION.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <IconTile>
              <GraduationCapIcon />
            </IconTile>

            <div className="min-w-0">
              <h3 className="font-medium text-balance">{item.title}</h3>
              <p className="text-sm text-foreground/80">{item.subtitle}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground uppercase">
                {item.organization}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
