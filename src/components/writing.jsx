import { ArrowUpRightIcon } from "lucide-react"

import { ARTICLES } from "@/data/user"

import { Panel, PanelHeader, PanelTitle, PanelTitleCopy, PanelTitleSup } from "./ui/panel"

const ID = "writing"

export function Writing() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Writing
          </a>
          <PanelTitleSup>({ARTICLES.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div
          className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2"
          aria-hidden
        >
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ARTICLES.map((article) => (
            <li
              key={article.link}
              className="max-sm:screen-line-top max-sm:screen-line-bottom sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/article flex h-full flex-col gap-2 px-4 py-3 transition-colors hover:bg-accent-muted"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="rounded-full border bg-zinc-50 px-1.5 py-0.5 dark:bg-zinc-900">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="flex items-start gap-1 text-base leading-snug font-medium text-balance">
                  {article.title}
                  <ArrowUpRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/article:opacity-100" />
                </h3>

                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  )
}
