import { BriefcaseBusinessIcon, ChevronsUpDownIcon, InfinityIcon } from "lucide-react"
import { differenceInMonths, parse } from "date-fns"

import { EXPERIENCES } from "@/data/user"
import { cn } from "@/lib/utils"

import { Collapsible } from "./ui/collapsible"
import { IconTile } from "./ui/icon-tile"
import { Panel, PanelHeader, PanelTitle, PanelTitleCopy } from "./ui/panel"
import { Separator } from "./ui/panel"
import { Tag } from "./ui/tag"

const ID = "experience"

export function Experiences() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Experience
          </a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  )
}

function ExperienceItem({ experience }) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="group/experience screen-line-bottom scroll-mt-14 space-y-4 py-4 last:border-none"
    >
      <div className="flex items-start gap-3 sm:items-center">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              width={24}
              height={24}
              className="rounded-full grayscale transition-all duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover/experience:grayscale-0 group-hover/experience:scale-110"
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 pr-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-xl/6 font-medium">
            {experience.companyWebsite ? (
              <a
                className="link text-foreground hover:text-emerald-500 transition-colors"
                href={experience.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h3>

          <dl className="flex min-w-0 items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground">
            <dt className="sr-only">Location</dt>
            <dd className="truncate">{experience.location}</dd>

            <dt className="sr-only">Location type</dt>
            <dd>({experience.locationType})</dd>

            {experience.isCurrentEmployer && (
              <>
                <dt className="sr-only">Employment status</dt>
                <dd>
                  <span className="sr-only">Current</span>
                  <span className="relative flex size-2.5 translate-x-px translate-y-px items-center justify-center" title="Active">
                    <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                </dd>
              </>
            )}
          </dl>
        </div>
      </div>

      {experience.companyDesc && (
        <p className="-mt-2 pl-9 text-sm text-muted-foreground italic">
          {experience.companyDesc}
        </p>
      )}

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}

function ExperiencePositionItem({ position }) {
  const { start, end } = position.employmentPeriod
  const isOngoing = !end
  const duration = formatDuration(start, end)

  return (
    <Collapsible
      defaultOpen={position.isExpanded}
      className="group/pos transition-colors"
      trigger={({ open }) => (
        <>
          <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
            <IconTile>
              <BriefcaseBusinessIcon />
            </IconTile>

            <h4 className="flex-1 font-medium text-balance text-foreground group-hover/pos:text-indigo-600 dark:group-hover/pos:text-indigo-400 transition-colors">
              {position.title}
            </h4>

            <div className="shrink-0 text-muted-foreground group-hover/pos:text-foreground">
              <ChevronsUpDownIcon
                className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
              />
            </div>
          </div>

          <dl className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <div>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-4 self-center"
                  aria-hidden
                />
              </>
            )}

            <div>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-0.5 tabular-nums">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <InfinityIcon
                    className="size-4.5 translate-y-[0.5px] text-emerald-500"
                    aria-label="Present"
                    strokeWidth={1.5}
                  />
                ) : (
                  <span>{end}</span>
                )}
              </dd>
            </div>

            {duration && (
              <>
                <Separator
                  orientation="vertical"
                  className="h-4 self-center"
                  aria-hidden
                />
                <div>
                  <dt className="sr-only">Duration</dt>
                  <dd className="tabular-nums">{duration}</dd>
                </div>
              </>
            )}
          </dl>
        </>
      )}
      contentClassName=""
    >
      <div className="pl-9">
        {position.description?.length > 0 && (
          <ul className="space-y-2 pt-3">
            {position.description.map((line, index) => (
              <li
                key={index}
                className="relative pl-4 text-sm text-muted-foreground before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-indigo-500/60"
              >
                {line}
              </li>
            ))}
          </ul>
        )}

        {position.skills?.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 py-3">
            {position.skills.map((skill) => (
              <li key={skill} className="flex">
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Collapsible>
  )
}

function formatDuration(start, end) {
  const startHasMonth = start.includes(".")
  const endHasMonth = end ? end.includes(".") : true

  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10)
    return years <= 0 ? "" : `${years}y`
  }

  const startDate = parsePeriodDate(start, "first")
  const endDate = end ? parsePeriodDate(end, "last") : new Date()

  const totalMonths = differenceInMonths(endDate, startDate) + 1
  if (totalMonths <= 0) return ""

  if (totalMonths < 12) return `${totalMonths}m`

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  return months === 0 ? `${years}y` : `${years}y ${months}m`
}

function parsePeriodDate(str, fallbackMonth) {
  if (str.includes(".")) return parse(str, "MM.yyyy", new Date())

  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${str}`,
    "MM.yyyy",
    new Date()
  )
}
