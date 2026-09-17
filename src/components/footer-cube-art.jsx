import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

const CHORD_POP_SOUND = `
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const now = ctx.currentTime;
  [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + i * 0.03);
    gain.gain.setValueAtTime(0.0001, now + i * 0.03);
    gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.03 + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.03 + 0.35);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now + i * 0.03);
    osc.stop(now + i * 0.03 + 0.4);
  });
  setTimeout(() => ctx.close(), 600);
`

/**
 * Interactive Isometric Cube Array in the footer featuring Next.js, WordPress, and React logos.
 */
export function FooterCubeArt({ className }) {
  const ref = useRef(null)
  const [isClicked, setIsClicked] = useState(false)

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const rotateY = useSpring(useTransform(px, [-1, 1], [18, -18]), {
    stiffness: 100,
    damping: 16,
    mass: 0.5,
  })
  const rotateX = useSpring(useTransform(py, [-1, 1], [-18, 18]), {
    stiffness: 100,
    damping: 16,
    mass: 0.5,
  })

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

  const playSound = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    try {
      const fn = new Function(CHORD_POP_SOUND)
      fn()
    } catch {
      /* audio unavailable */
    }
  }

  const handleClick = () => {
    setIsClicked(true)
    playSound()
    setTimeout(() => setIsClicked(false), 300)
  }

  return (
    <div className={cn("relative w-full py-6 sm:py-8 overflow-hidden", className)}>
      <motion.button
        ref={ref}
        type="button"
        aria-label="Interactive isometric tech cubes"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        animate={{ scale: isClicked ? 0.96 : 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        className="group/cubegroup relative mx-auto flex w-full max-w-xl cursor-pointer flex-col items-center justify-center select-none outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-2xl"
      >
        <svg
          viewBox="0 0 460 210"
          className="h-auto w-full max-w-[420px] sm:max-w-[460px] overflow-visible drop-shadow-md"
          aria-hidden
        >
          <defs>
            {/* Vibrant gradients for cube faces */}
            <linearGradient id="footer-grad-emerald-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-emerald-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-emerald-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="footer-grad-indigo-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-indigo-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#3730a3" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-indigo-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#312e81" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="footer-grad-cyan-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-cyan-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-cyan-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#075985" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="footer-grad-amber-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-amber-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-amber-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#78350f" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="footer-grad-rose-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#db2777" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-rose-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#be185d" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="footer-grad-rose-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#db2777" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#831843" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Shadows */}
          <ellipse
            cx="230"
            cy="188"
            rx="160"
            ry="24"
            className="fill-foreground/[0.04] dark:fill-foreground/[0.12] blur-xs"
          />
          <ellipse
            cx="110"
            cy="165"
            rx="60"
            ry="14"
            className="fill-foreground/[0.03] dark:fill-foreground/[0.08] blur-xs"
          />
          <ellipse
            cx="350"
            cy="165"
            rx="60"
            ry="14"
            className="fill-foreground/[0.03] dark:fill-foreground/[0.08] blur-xs"
          />

          {/* 1. Left Secondary Cube (Cyan/Sky - React atom logo on top face) */}
          <g className="transition-all duration-300 group-hover/cubegroup:translate-y-[-4px]">
            {/* Top Face */}
            <path
              d="M110 90 L150 112 L110 134 L70 112 Z"
              className="fill-foreground/[0.06] stroke-foreground/25 dark:fill-foreground/[0.1] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-cyan-top)] group-hover/cubegroup:stroke-sky-400"
              strokeWidth="1"
            />
            {/* Left Face */}
            <path
              d="M70 112 L110 134 L110 174 L70 152 Z"
              className="fill-foreground/[0.10] stroke-foreground/25 dark:fill-foreground/[0.16] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-cyan-left)] group-hover/cubegroup:stroke-sky-400"
              strokeWidth="1"
            />
            {/* Right Face */}
            <path
              d="M150 112 L110 134 L110 174 L150 152 Z"
              className="fill-foreground/[0.14] stroke-foreground/25 dark:fill-foreground/[0.22] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-cyan-right)] group-hover/cubegroup:stroke-sky-400"
              strokeWidth="1"
            />

            {/* React Logo on Left Cube Top Face */}
            <g transform="matrix(0.866 0.5 -0.866 0.5 110 112)">
              <circle cx="0" cy="0" r="2.5" className="fill-foreground group-hover/cubegroup:fill-white transition-colors" />
              <ellipse cx="0" cy="0" rx="14" ry="5.5" fill="none" className="stroke-foreground group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.2" />
              <ellipse cx="0" cy="0" rx="14" ry="5.5" transform="rotate(60)" fill="none" className="stroke-foreground group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.2" />
              <ellipse cx="0" cy="0" rx="14" ry="5.5" transform="rotate(120)" fill="none" className="stroke-foreground group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.2" />
            </g>

            {/* Left Face label */}
            <g transform="matrix(0.866 0.5 0 1 90 148)">
              <text
                x="0"
                y="0"
                textAnchor="middle"
                className="fill-foreground/50 dark:fill-foreground/70 text-[10px] font-mono tracking-wider uppercase group-hover/cubegroup:fill-white"
              >
                REACT
              </text>
            </g>
          </g>

          {/* 2. Right Secondary Cube (Amber/Orange - WordPress logo on top face) */}
          <g className="transition-all duration-300 group-hover/cubegroup:translate-y-[-4px]">
            {/* Top Face */}
            <path
              d="M350 90 L390 112 L350 134 L310 112 Z"
              className="fill-foreground/[0.06] stroke-foreground/25 dark:fill-foreground/[0.1] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-amber-top)] group-hover/cubegroup:stroke-amber-400"
              strokeWidth="1"
            />
            {/* Left Face */}
            <path
              d="M310 112 L350 134 L350 174 L310 152 Z"
              className="fill-foreground/[0.10] stroke-foreground/25 dark:fill-foreground/[0.16] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-amber-left)] group-hover/cubegroup:stroke-amber-400"
              strokeWidth="1"
            />
            {/* Right Face */}
            <path
              d="M390 112 L350 134 L350 174 L390 152 Z"
              className="fill-foreground/[0.14] stroke-foreground/25 dark:fill-foreground/[0.22] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-amber-right)] group-hover/cubegroup:stroke-amber-400"
              strokeWidth="1"
            />

            {/* WordPress Logo on Right Cube Top Face */}
            <g transform="matrix(0.866 0.5 -0.866 0.5 350 112)">
              <circle cx="0" cy="0" r="13" fill="none" className="stroke-foreground group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.4" />
              <path
                d="M-8.5 -8.5 L-2.5 8.5 L1 0 L4.5 8.5 L8.5 -8.5 M-6.5 -8.5 L-1.5 5.5 L2 0"
                fill="none"
                className="stroke-foreground group-hover/cubegroup:stroke-white transition-colors"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Right face label */}
            <g transform="matrix(0.866 -0.5 0 1 370 148)">
              <text
                x="0"
                y="0"
                textAnchor="middle"
                className="fill-foreground/50 dark:fill-foreground/70 text-[9px] font-mono tracking-wider uppercase group-hover/cubegroup:fill-white"
              >
                WORDPRESS
              </text>
            </g>
          </g>

          {/* 3. Small Floating Back Cube (Rose) */}
          <g className="transition-all duration-300 group-hover/cubegroup:translate-y-[-10px]">
            {/* Top Face */}
            <path
              d="M230 18 L260 35 L230 52 L200 35 Z"
              className="fill-foreground/[0.08] stroke-foreground/30 dark:fill-foreground/[0.14] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-rose-top)] group-hover/cubegroup:stroke-pink-400"
              strokeWidth="1"
            />
            {/* Left Face */}
            <path
              d="M200 35 L230 52 L230 82 L200 65 Z"
              className="fill-foreground/[0.12] stroke-foreground/30 dark:fill-foreground/[0.18] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-rose-left)] group-hover/cubegroup:stroke-pink-400"
              strokeWidth="1"
            />
            {/* Right Face */}
            <path
              d="M260 35 L230 52 L230 82 L260 65 Z"
              className="fill-foreground/[0.16] stroke-foreground/30 dark:fill-foreground/[0.24] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-rose-right)] group-hover/cubegroup:stroke-pink-400"
              strokeWidth="1"
            />
          </g>

          {/* 4. Center Primary Main Isometric Cube (Indigo / Emerald Shimmer) */}
          <g className="transition-all duration-300 group-hover/cubegroup:translate-y-[-8px]">
            {/* Top Face */}
            <path
              d="M230 45 L295 82 L230 119 L165 82 Z"
              className="fill-foreground/[0.04] stroke-foreground/30 dark:fill-foreground/[0.08] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-indigo-top)] group-hover/cubegroup:stroke-indigo-400"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Left Face */}
            <path
              d="M165 82 L230 119 L230 185 L165 148 Z"
              className="fill-foreground/[0.09] stroke-foreground/30 dark:fill-foreground/[0.15] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-indigo-left)] group-hover/cubegroup:stroke-indigo-400"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Right Face */}
            <path
              d="M295 82 L230 119 L230 185 L295 148 Z"
              className="fill-foreground/[0.15] stroke-foreground/30 dark:fill-foreground/[0.25] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-indigo-right)] group-hover/cubegroup:stroke-indigo-400"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Next.js Logo projected on Top Face */}
            <g transform="matrix(0.866 0.5 -0.866 0.5 230 82)">
              <circle cx="0" cy="0" r="22" fill="none" className="stroke-foreground/40 group-hover/cubegroup:stroke-white/60 transition-colors" strokeWidth="1.2" />
              {/* Next.js 'N' */}
              <path
                d="M-8 -11 L-8 11 M-8 -11 L8 11 M8 -11 L8 4"
                fill="none"
                className="stroke-foreground group-hover/cubegroup:stroke-white transition-colors"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* React Logo on Left Face */}
            <g transform="matrix(0.866 0.5 0 1 197 133)">
              <circle cx="0" cy="0" r="2" className="fill-foreground/80 group-hover/cubegroup:fill-white transition-colors" />
              <ellipse cx="0" cy="0" rx="15" ry="6" fill="none" className="stroke-foreground/80 group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.3" />
              <ellipse cx="0" cy="0" rx="15" ry="6" transform="rotate(60)" fill="none" className="stroke-foreground/80 group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.3" />
              <ellipse cx="0" cy="0" rx="15" ry="6" transform="rotate(120)" fill="none" className="stroke-foreground/80 group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.3" />
            </g>

            {/* WordPress Logo on Right Face */}
            <g transform="matrix(0.866 -0.5 0 1 263 133)">
              <circle cx="0" cy="0" r="16" fill="none" className="stroke-foreground/80 group-hover/cubegroup:stroke-white transition-colors" strokeWidth="1.4" />
              <path
                d="M-10 -10 L-3 10 L1 0 L5 10 L10 -10 M-8 -10 L-2 7 L2 0"
                fill="none"
                className="stroke-foreground/80 group-hover/cubegroup:stroke-white transition-colors"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* 5. Front Floating Micro Cube (Emerald) */}
          <g className="transition-all duration-300 group-hover/cubegroup:translate-y-[-14px]">
            {/* Top Face */}
            <path
              d="M230 152 L252 165 L230 178 L208 165 Z"
              className="fill-foreground/[0.1] stroke-foreground/35 dark:fill-foreground/[0.2] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-emerald-top)] group-hover/cubegroup:stroke-emerald-400"
              strokeWidth="1"
            />
            {/* Left Face */}
            <path
              d="M208 165 L230 178 L230 200 L208 187 Z"
              className="fill-foreground/[0.15] stroke-foreground/35 dark:fill-foreground/[0.25] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-emerald-left)] group-hover/cubegroup:stroke-emerald-400"
              strokeWidth="1"
            />
            {/* Right Face */}
            <path
              d="M252 165 L230 178 L230 200 L252 187 Z"
              className="fill-foreground/[0.2] stroke-foreground/35 dark:fill-foreground/[0.3] transition-all duration-300 group-hover/cubegroup:fill-[url(#footer-grad-emerald-right)] group-hover/cubegroup:stroke-emerald-400"
              strokeWidth="1"
            />
          </g>
        </svg>
      </motion.button>
    </div>
  )
}
