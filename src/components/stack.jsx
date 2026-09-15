import { STACK } from "@/data/user"

import { Panel, PanelHeader, PanelTitle, PanelTitleCopy } from "./ui/panel"

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

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(40)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {STACK.map((group, index) => (
          <div
            key={group.category}
            className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
          >
            <div className="pl-4 text-sm/(--badge-height)">
              <span
                className="mr-1.5 font-mono text-muted-foreground/80 select-none"
                aria-hidden
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              {group.category}
            </div>

            <ul className="flex flex-wrap gap-1.5 px-4">
              {group.items.map((item) => (
                <li key={item} className="flex">
                  <span className="flex h-(--badge-height) items-center justify-center rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  )
}
