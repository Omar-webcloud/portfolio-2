import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export function FlipSentences({ sentences, interval = 3, className }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!sentences?.length) return

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % sentences.length)
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [sentences, interval])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="font-mono text-sm text-balance text-muted-foreground"
        >
          {sentences[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
