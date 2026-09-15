import contributionsData from "@/data/contributions.json"

import { formatNumber } from "@/lib/utils"

import { Panel } from "./ui/panel"

const BLOCK_SIZE = 12
const BLOCK_MARGIN = 2
const CELL = BLOCK_SIZE + BLOCK_MARGIN
const MONTH_LABEL_HEIGHT = 16

const LEVEL_COLORS = {
  NONE: "var(--contribution-0)",
  FIRST_QUARTILE: "var(--contribution-1)",
  SECOND_QUARTILE: "var(--contribution-2)",
  THIRD_QUARTILE: "var(--contribution-3)",
  FOURTH_QUARTILE: "var(--contribution-4)",
}

export function GitHubContributions() {
  const { weeks, totalCount } = contributionsData
  const days = weeks.flat()

  if (!days.length) return null

  const width = weeks.length * CELL
  const height = 7 * CELL
  const first = days[0]
  const last = days[days.length - 1]

  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">GitHub contributions</h2>

      <figure
        className="overflow-x-auto py-4 no-scrollbar"
        style={{
          "--contribution-0": "oklch(0.94 0.003 286)",
          "--contribution-1": "oklch(0.87 0.12 145)",
          "--contribution-2": "oklch(0.74 0.16 145)",
          "--contribution-3": "oklch(0.62 0.15 148)",
          "--contribution-4": "oklch(0.48 0.13 150)",
        }}
      >
        <div className="px-4 dark:[--contribution-0:oklch(0.22_0.006_286)] dark:[--contribution-1:oklch(0.35_0.09_152)] dark:[--contribution-2:oklch(0.45_0.13_150)] dark:[--contribution-3:oklch(0.58_0.16_148)] dark:[--contribution-4:oklch(0.75_0.17_146)]">
          <svg
            width={width}
            height={height + MONTH_LABEL_HEIGHT}
            viewBox={`0 0 ${width} ${height + MONTH_LABEL_HEIGHT}`}
            role="img"
            aria-label={`${formatNumber(totalCount)} GitHub contributions in the last year`}
            className="max-w-none"
          >
            {weeks.map((week, weekIndex) => {
              const monthLabel = getMonthLabel(week, weeks[weekIndex - 1])

              return (
                <g key={weekIndex} transform={`translate(${weekIndex * CELL}, 0)`}>
                  {monthLabel ? (
                    <text
                      x={0}
                      y={9}
                      className="fill-muted-foreground"
                      style={{ fontSize: "10px", fontFamily: "var(--font-mono)" }}
                    >
                      {monthLabel}
                    </text>
                  ) : null}

                  {week.map((day, dayIndex) => (
                    <rect
                      key={day.date}
                      x={0}
                      y={dayIndex * CELL + MONTH_LABEL_HEIGHT}
                      width={BLOCK_SIZE}
                      height={BLOCK_SIZE}
                      rx={2}
                      fill={LEVEL_COLORS[day.level] ?? LEVEL_COLORS.NONE}
                    >
                      <title>{`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}</title>
                    </rect>
                  ))}
                </g>
              )
            })}
          </svg>
        </div>

        <figcaption className="flex flex-wrap items-center justify-between gap-3 px-4 pt-3 text-sm">
          <p className="text-pretty tabular-nums">
            <span className="mr-2 tracking-wide text-muted-foreground/80">
              Fig. 2.
            </span>
            {formatNumber(totalCount)} contributions,{" "}
            {formatDate(first.date)} – {formatDate(last.date)}. Source:{" "}
            <a
              href="https://github.com/Omar-webcloud"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              GitHub
            </a>
            .
          </p>

          <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span>Less</span>
            {Object.values(LEVEL_COLORS).map((color, index) => (
              <span
                key={index}
                className="size-2.5 rounded-[2px]"
                style={{ backgroundColor: color }}
              />
            ))}
            <span>More</span>
          </div>
        </figcaption>
      </figure>

      <div className="h-px" />
    </Panel>
  )
}

function getMonthLabel(week, previousWeek) {
  if (!week.length) return null

  const month = week[0].date.slice(0, 7)
  const previousMonth = previousWeek?.[0]?.date.slice(0, 7)

  if (month === previousMonth) return null

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${week[0].date}T00:00:00Z`))
}

function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-")
  return `${day}.${month}.${year}`
}
