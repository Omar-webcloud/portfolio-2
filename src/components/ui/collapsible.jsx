import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Disclosure row: click the trigger to expand the body.
 * Used by experience positions and project items.
 */
export function Collapsible({
  defaultOpen = false,
  disabled = false,
  trigger,
  className,
  contentClassName,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={cn("group/collapsible", className)}>
      <button
        type="button"
        onClick={() => !disabled && setOpen((v) => !v)}
        disabled={disabled}
        aria-expanded={disabled ? undefined : open}
        className={cn(
          "block w-full text-left outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring/40",
          disabled && "cursor-default"
        )}
      >
        {typeof trigger === "function" ? trigger({ open }) : trigger}
      </button>

      <AnimatePresence initial={false}>
        {open && children ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.32, 0.72, 0, 1] }}
            className={cn("overflow-hidden", contentClassName)}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function CollapsibleChevronsUpDownIcon({ className, open }) {
  return (
    <ChevronsUpDownIcon
      className={cn(
        "size-4 transition-transform duration-200",
        open && "rotate-180",
        className
      )}
    />
  )
}
