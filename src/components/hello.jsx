import { useEffect, useState } from "react"

import { USER } from "@/data/user"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./ui/panel"

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

export function Hello() {
  const [greeting, setGreeting] = useState(getGreeting)

  useEffect(() => {
    const timer = setInterval(() => setGreeting(getGreeting()), 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Panel id="about" className="screen-line-bottom-none">
      <PanelHeader>
        <h2 className="sr-only">About</h2>
        <PanelTitle asChild className="font-handwritten text-4xl sm:text-5xl leading-none text-foreground hover:text-emerald-500 transition-colors">
          <div>{greeting}</div>
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="space-y-3">
          {USER.aboutBullets.map((line, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "group/bullet relative pl-5 text-base text-balance text-foreground transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-emerald-500"
                  : "group/bullet relative pl-5 text-base text-balance text-muted-foreground transition-colors hover:text-foreground before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-indigo-500/60"
              }
            >
              {line}
            </li>
          ))}
        </ul>
      </PanelContent>

      <div className="screen-line-bottom h-px" />
      <div className="h-4" />
      <div className="screen-line-bottom h-px" />
    </Panel>
  )
}
