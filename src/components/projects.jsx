import { useState } from "react"
import {
  BookOpenIcon,
  BoxIcon,
  ChevronsUpDownIcon,
  LayoutTemplateIcon,
  LeafIcon,
  LineChartIcon,
  LinkIcon,
} from "lucide-react"

import { featuredProjects, otherProjects } from "@/data/projects"
import { cn } from "@/lib/utils"

import { Collapsible } from "./ui/collapsible"
import { IconTile } from "./ui/icon-tile"
import { Panel, PanelHeader, PanelTitle, PanelTitleCopy, PanelTitleSup } from "./ui/panel"
import { Tag } from "./ui/tag"

const ID = "projects"
const MAX = 4

const TYPE_ICONS = {
  "Theme Dev": LayoutTemplateIcon,
  Platform: BoxIcon,
  "EdTech App": BookOpenIcon,
  GreenTech: LeafIcon,
  "Data Visualization": LineChartIcon,
}

const PROJECTS = [...featuredProjects, ...otherProjects]

export function Projects() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, MAX)

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

      <div>
        {visible.map((project) => (
          <ProjectItem key={project.num} project={project} />
        ))}
      </div>

      {PROJECTS.length > MAX && (
        <div className="screen-line-top flex items-center justify-center py-4">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex h-7 items-center gap-2 rounded-md border border-border bg-secondary pr-2.5 pl-3 text-[0.8125rem]/[1.125rem] font-medium text-secondary-foreground shadow-[inset_0_0_1px] shadow-foreground/20 transition-colors hover:bg-secondary/70"
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronsUpDownIcon
              className={cn("size-4 transition-transform", expanded && "rotate-180")}
            />
          </button>
        </div>
      )}
    </Panel>
  )
}

function ProjectItem({ project }) {
  const Icon = TYPE_ICONS[project.type] ?? BoxIcon

  return (
    <Collapsible
      className="group/project screen-line-bottom last:border-none"
      trigger={({ open }) => (
        <div className="flex w-full items-center text-left transition-colors hover:bg-accent-muted">
          <IconTile className="mx-4">
            <Icon />
          </IconTile>

          <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4 pr-2">
            <div className="flex-1">
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {project.title}
              </h3>

              <dl className="text-sm text-muted-foreground">
                <dt className="sr-only">Type</dt>
                <dd className="font-mono text-xs tracking-wide uppercase">
                  {project.type}
                </dd>
              </dl>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              onClick={(event) => event.stopPropagation()}
              className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
            >
              <LinkIcon className="pointer-events-none size-4" />
            </a>

            <div className="shrink-0 text-muted-foreground">
              <ChevronsUpDownIcon
                className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
              />
            </div>
          </div>
        </div>
      )}
    >
      <div className="space-y-4 border-t border-line p-4">
        <p className="text-sm text-balance text-muted-foreground">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((skill) => (
            <li key={skill} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            Source
          </a>
        </div>
      </div>
    </Collapsible>
  )
}
