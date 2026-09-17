import { ArrowUpRightIcon } from "lucide-react"

import { ARTICLES } from "@/data/user"

import { Panel, PanelHeader, PanelTitle, PanelTitleCopy, PanelTitleSup } from "./ui/panel"

const ID = "writing"

const CATEGORY_COLORS = {
  "Web Development": "border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Performance: "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "CSS Layout": "border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-400",
}

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
                className="group/article flex h-full flex-col gap-2.5 px-4 py-3.5 transition-all duration-200 hover:bg-accent/40 rounded-lg hover:shadow-xs"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span
                    className={`rounded-full border px-2 py-0.5 font-medium transition-colors ${
                      CATEGORY_COLORS[article.category] || "border-border bg-muted text-muted-foreground"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="flex items-start justify-between gap-2 text-base leading-snug font-medium text-balance text-foreground group-hover/article:text-indigo-600 dark:group-hover/article:text-indigo-400 transition-colors">
                  <span>{article.title}</span>
                  <ArrowUpRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover/article:translate-x-0.5 group-hover/article:-translate-y-0.5 group-hover/article:text-indigo-500" />
                </h3>

                <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
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
