import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion"

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

const ROLES = ["FRONTEND", "WEB", "FULL-STACK", "WORDPRESS"]

/**
 * Clean isometric Hero cube with interactive cursor tilt, colorful iridescent hover glow,
 * and smooth cycling role text on the left face.
 */
export function OmarMark({ className }) {
  const ref = useRef(null)
  const audioUnlocked = useRef(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const rotateY = useSpring(useTransform(px, [-1, 1], [16, -16]), {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  })
  const rotateX = useSpring(useTransform(py, [-1, 1], [-16, 16]), {
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
      aria-label="Interactive 3D isometric cube"
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
        "group/mark relative flex w-full cursor-pointer items-center justify-center py-2 select-none outline-none",
        className
      )}
    >
      <svg
        viewBox="0 0 200 150"
        className="h-auto w-full max-w-[200px] sm:max-w-[240px] overflow-visible drop-shadow-md"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-om-top-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="hero-om-left-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="hero-om-right-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse
          cx="100"
          cy="132"
          rx="62"
          ry="9"
          className="fill-foreground/[0.06] dark:fill-foreground/[0.14] transition-all duration-300 group-hover/mark:rx-70 group-hover/mark:fill-indigo-500/20"
        />

        {/* Left face */}
        <path
          d="M30 50 L100 90 L100 130 L30 90 Z"
          className="fill-foreground/[0.08] stroke-foreground/25 transition-all duration-300 group-hover/mark:fill-[url(#hero-om-left-grad)] group-hover/mark:stroke-emerald-400"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Right face */}
        <path
          d="M170 50 L100 90 L100 130 L170 90 Z"
          className="fill-foreground/[0.14] stroke-foreground/25 transition-all duration-300 group-hover/mark:fill-[url(#hero-om-right-grad)] group-hover/mark:stroke-sky-400"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Top face */}
        <path
          d="M100 10 L170 50 L100 90 L30 50 Z"
          className="fill-foreground/[0.03] stroke-foreground/35 transition-all duration-300 group-hover/mark:fill-[url(#hero-om-top-grad)] group-hover/mark:stroke-indigo-400"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />

        {/* Isometric grid accent on top face */}
        <path
          d="M65 30 L135 70 M135 30 L65 70"
          className="stroke-foreground/15 transition-colors duration-300 group-hover/mark:stroke-white/30"
          strokeWidth="1"
          strokeDasharray="2 2"
        />

        {/* Smooth cycling role glyph on the left face */}
        <g transform="matrix(0.866 0.5 0 1 65 90)">
          <AnimatePresence mode="wait">
            <motion.text
              key={ROLES[roleIndex]}
              x="0"
              y="0"
              textAnchor="middle"
              dominantBaseline="central"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fill-foreground/75 dark:fill-foreground/90 font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 group-hover/mark:fill-white font-medium"
            >
              {ROLES[roleIndex]}
            </motion.text>
          </AnimatePresence>
        </g>

        {/* DEVELOPER glyph, projected onto the right face */}
        <g transform="matrix(0.866 -0.5 0 1 135 90)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-foreground/60 dark:fill-foreground/80 font-mono text-[11px] tracking-widest uppercase transition-colors duration-300 group-hover/mark:fill-white"
          >
            DEVELOPER
          </text>
        </g>
      </svg>
    </motion.button>
  )
}
