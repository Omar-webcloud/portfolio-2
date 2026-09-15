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
        <PanelTitle asChild className="font-handwritten text-4xl leading-none">
          <div>{greeting}</div>
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="space-y-3">
          {USER.about.map((line, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "relative pl-5 text-base text-balance text-foreground before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-foreground/70"
                  : "relative pl-5 text-base text-balance text-muted-foreground before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-muted-foreground/50"
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
