import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

const SOFT_POP_SOUND = `
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(880, now);
  osc.frequency.exponentialRampToValueAtTime(320, now + 0.12);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.22, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.2);
  setTimeout(() => ctx.close(), 400);
`

/**
 * Isometric "OM" cube that tilts toward the cursor and pops when clicked.
 */
export function OmarMark({ className }) {
  const ref = useRef(null)
  const audioUnlocked = useRef(false)

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const rotateY = useSpring(useTransform(px, [-1, 1], [14, -14]), {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  })
  const rotateX = useSpring(useTransform(py, [-1, 1], [-14, 14]), {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  })

  const [pressed, setPressed] = useState(false)

  const handlePointerMove = useCallback(
    (event) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      px.set(((event.clientX - rect.left) / rect.width) * 2 - 1)
      py.set(((event.clientY - rect.top) / rect.height) * 2 - 1)
    },
    [px, py]
  )

  const handlePointerLeave = useCallback(() => {
    px.set(0)
    py.set(0)
  }, [px, py])

  useEffect(() => {
    return () => {
      px.set(0)
      py.set(0)
    }
  }, [px, py])

  const playSound = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    try {
      const fn = new Function(SOFT_POP_SOUND)
      fn()
      audioUnlocked.current = true
    } catch {
      /* audio unavailable */
    }
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label="Play a sound"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => {
        setPressed(true)
        playSound()
        setTimeout(() => setPressed(false), 220)
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      animate={{ scale: pressed ? 0.94 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={cn(
        "group/mark relative flex w-full cursor-pointer items-center justify-center py-2 select-none",
        className
      )}
    >
      <svg
        viewBox="0 0 200 150"
        className="h-auto w-full max-w-[240px] overflow-visible"
        aria-hidden
      >
        {/* ground shadow */}
        <ellipse
          cx="100"
          cy="132"
          rx="62"
          ry="9"
          className="fill-foreground/[0.06] dark:fill-foreground/[0.14]"
        />

        {/* left face */}
        <path
          d="M30 50 L100 90 L100 130 L30 90 Z"
          className="fill-foreground/[0.08] stroke-foreground/25"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* right face */}
        <path
          d="M170 50 L100 90 L100 130 L170 90 Z"
          className="fill-foreground/[0.14] stroke-foreground/25"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* top face */}
        <path
          d="M100 10 L170 50 L100 90 L30 50 Z"
          className="fill-foreground/[0.03] stroke-foreground/35"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />

        {/* monogram, projected onto the top face */}
        <g transform="matrix(0.866 0.5 -0.866 0.5 100 44)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-foreground"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "46px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            OM
          </text>
        </g>

        {/* wordpress glyph, projected onto the right face */}
        <g transform="matrix(0.866 -0.5 0 1 108 78)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-foreground/45"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "15px",
              letterSpacing: "0.22em",
            }}
          >
            WP
          </text>
        </g>
      </svg>
    </motion.button>
  )
}
