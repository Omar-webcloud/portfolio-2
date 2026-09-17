import { useState } from "react"
import {
  ActivityIcon,
  BookOpenIcon,
  BoxIcon,
  ChevronsUpDownIcon,
  CoffeeIcon,
  ExternalLinkIcon,
  FilmIcon,
  GithubIcon,
  GraduationCapIcon,
  LayoutGridIcon,
  LayoutTemplateIcon,
  LeafIcon,
  LineChartIcon,
  LinkIcon,
  SearchIcon,
  ServerIcon,
  ShoppingBagIcon,
  SparklesIcon,
} from "lucide-react"

import { PROJECTS } from "@/data/projects"
import { cn } from "@/lib/utils"

import { Collapsible } from "./ui/collapsible"
import { IconTile } from "./ui/icon-tile"
import { Panel, PanelHeader, PanelTitle, PanelTitleCopy, PanelTitleSup } from "./ui/panel"
import { Tag } from "./ui/tag"

const ID = "projects"
const INITIAL_MAX = 4

const TYPE_ICONS = {
  "AI Cafe Storefront": CoffeeIcon,
  "Task Management API": ServerIcon,
  "E-book Platform": BookOpenIcon,
  "Analytics Dashboard": LineChartIcon,
  "E-commerce": ShoppingBagIcon,
  Platform: LayoutGridIcon,
  "EdTech Platform": GraduationCapIcon,
  GreenTech: LeafIcon,
  "EdTech App": BookOpenIcon,
  "E-learning": GraduationCapIcon,
  "Data Visualization": ActivityIcon,
  "Search Tool": SearchIcon,
  "Theme Dev": LayoutTemplateIcon,
}

export function Projects() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_MAX)

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Projects
          </a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-line">
        {visible.map((project, index) => (
          <ProjectItem
            key={project.num}
            project={project}
            defaultOpen={index === 0}
          />
        ))}
      </div>

      <div className="screen-line-top flex items-center justify-center py-4 bg-muted/20">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="group/btn inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background px-4 text-xs font-mono font-medium text-foreground shadow-xs transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>{expanded ? "Show fewer projects" : `View all ${PROJECTS.length} projects`}</span>
          <ChevronsUpDownIcon
            className={cn(
              "size-3.5 transition-transform duration-200 text-muted-foreground group-hover/btn:text-emerald-500",
              expanded && "rotate-180"
            )}
          />
        </button>
      </div>
    </Panel>
  )
}

function ProjectItem({ project, defaultOpen = false }) {
  const Icon = TYPE_ICONS[project.type] ?? BoxIcon

  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className="group/project transition-colors duration-200"
      trigger={({ open }) => (
        <div
          className={cn(
            "flex w-full items-center text-left transition-all duration-200 hover:bg-accent/40",
            open && "bg-accent/20"
          )}
        >
          <div className="flex items-center pl-3 sm:pl-4">
            <span className="font-mono text-xs text-muted-foreground/80 w-5 tabular-nums select-none">
              {project.num}
            </span>
            <IconTile className="mx-2 sm:mx-3">
              <Icon />
            </IconTile>
          </div>

          <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-3 sm:p-4 pr-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-medium leading-snug text-foreground transition-colors group-hover/project:text-indigo-600 dark:group-hover/project:text-indigo-400 truncate">
                  {project.title}
                </h3>
              </div>

              <dl className="text-sm text-muted-foreground">
                <dt className="sr-only">Type</dt>
                <dd className="font-mono text-[0.6875rem] tracking-wide uppercase text-muted-foreground/80">
                  {project.type}
                </dd>
              </dl>
            </div>

            <a
              href={project.website || project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live site`}
              onClick={(event) => event.stopPropagation()}
              className="relative flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-all duration-200 hover:bg-emerald-500/10 hover:text-emerald-500 hover:border hover:border-emerald-500/30"
              title="Live site"
            >
              <ExternalLinkIcon className="size-4" />
            </a>

            <div className="shrink-0 text-muted-foreground transition-colors group-hover/project:text-foreground">
              <ChevronsUpDownIcon
                className={cn(
                  "size-4 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </div>
          </div>
        </div>
      )}
    >
      <div className="space-y-4 border-t border-line bg-muted/10 p-4 sm:p-6">
        {project.image && (
          <div className="group/preview relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
            {/* Browser top-bar mock */}
            <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/40 px-3 py-2">
              <span className="size-2 rounded-full bg-red-400/80" />
              <span className="size-2 rounded-full bg-amber-400/80" />
              <span className="size-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">
                {project.website ? project.website.replace(/^https?:\/\//, "") : project.title}
              </span>
            </div>

            <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden bg-zinc-950/5 dark:bg-zinc-900/50">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-[1.02]"
              />

              <a
                href={project.website || project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover/preview:opacity-100"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 font-mono text-xs font-semibold text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-emerald-500 hover:text-white">
                  <span>Visit Live Project</span>
                  <ExternalLinkIcon className="size-3.5" />
                </span>
              </a>
            </div>
          </div>
        )}

        <p className="text-sm leading-relaxed text-balance text-muted-foreground">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((skill) => (
            <li key={skill} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-foreground transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-xs"
            >
              <ExternalLinkIcon className="size-3.5" />
              <span>Live Preview</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-foreground transition-all duration-200 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-xs"
            >
              <GithubIcon className="size-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </Collapsible>
  )
}
