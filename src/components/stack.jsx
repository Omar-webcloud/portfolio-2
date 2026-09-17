import { STACK } from "@/data/user"

import { Panel, PanelHeader, PanelTitle, PanelTitleCopy } from "./ui/panel"
import { Tag } from "./ui/tag"

const ID = "stack"

export function Stack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Stack
          </a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(36)] sm:[--col-left-width:--spacing(40)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {STACK.map((group, index) => (
          <div
            key={group.category}
            className="grid items-start gap-y-2 border-b border-line py-3 sm:py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
          >
            <div className="pl-3 sm:pl-4 text-xs sm:text-sm font-medium text-foreground flex items-center">
              <span
                className="mr-1.5 font-mono text-emerald-500 font-semibold select-none"
                aria-hidden
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span>{group.category}</span>
            </div>

            <ul className="flex flex-wrap gap-1.5 px-3 sm:px-4">
              {group.items.map((item) => (
                <li key={item} className="flex">
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  )
}
