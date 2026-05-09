import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Globe, 
  ArrowRight,
  Sparkles,
  MessageSquare,
  Clock,
  Sun,
  Moon,
  Menu,
  X,
  User,
  Briefcase,
  Award,
  Layers
} from "lucide-react"
import { Hero } from "./components/hero"
import { Experience } from "./components/experience"
import { Credentials } from "./components/credentials"
import { Blog } from "./components/blog"

import { About } from "./components/about"
import { Connect } from "./components/connect"

const SLIDES = (goTo) => [
  { id: "about",       label: "About",      icon: User,      component: <About onConnect={() => goTo(5)} /> },
  { id: "projects",    label: "Projects",   icon: Layers,    component: <Hero /> },
  { id: "experience",  label: "Experience", icon: Briefcase, component: <Experience /> },
  { id: "expertise",   label: "Expertise",  icon: Award,     component: <Credentials /> },
  { id: "blog",        label: "Blog",       icon: FileText,  component: <Blog /> },
  { id: "connect",     label: "Connect",    icon: Mail,      component: <Connect /> },
]


export default function App() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState(null)
  const [dir, setDir]         = useState(1)
  const [animating, setAnimating] = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem("portfolio-theme") || "light"
  })

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    sessionStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light")

  const goTo = (index) => {
    if (index === current || animating) return
    setDir(index > current ? 1 : -1)
    setPrev(current)
    setAnimating(true)
    setCurrent(index)
  }

  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => {
        setPrev(null)
        setAnimating(false)
      }, 350)
      return () => clearTimeout(t)
    }
  }, [animating])
  
  const slices = SLIDES(goTo)

  return (
    <div className="w-screen h-screen overflow-hidden bg-background text-foreground relative transition-colors duration-500">
      <nav className="absolute top-0 left-0 right-0 z-50 px-5 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full h-fit">
          <div className="hidden lg:flex flex-nowrap items-center gap-x-2 text-xs md:text-sm tracking-widest uppercase">
            {slices.map(({ id, label, icon: Icon }, i) => (
              <span key={id} className="relative flex items-center shrink-0">
                <button
                  onClick={() => goTo(i)}
                  className={`flex items-center transition-all duration-300 whitespace-nowrap relative px-4 sm:px-5 py-2 rounded-full font-medium group ${
                    current === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <motion.div
                    animate={
                      current === i
                        ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, -10, 10, 0] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    className="mr-2 flex-shrink-0"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <span className="text-xs sm:text-sm">{label}</span>
                  {current === i && (
                    <motion.div 
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-secondary/50 border border-border/50 rounded-full -z-10 shadow-sm overflow-hidden"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent skew-x-[-20deg]"
                      />
                    </motion.div>
                  )}
                </button>
              </span>
            ))}
          </div>

          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setMenuOpen(true)}
              className="p-3 bg-secondary/30 backdrop-blur-md border border-border/50 rounded-full hover:bg-secondary/60 transition-colors shadow-sm"
              title="Open Navigation"
            >
              <Menu size={16} className="text-foreground" />
            </button>
          </div>

          <AnimatePresence>
            {current === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center ml-auto"
              >
                <button 
                  onClick={toggleTheme}
                  className="p-3 sm:p-2.5 rounded-full border border-border bg-card hover:bg-secondary transition-all duration-300 group shadow-sm"
                  title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                  {theme === "light" ? (
                    <Moon size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  ) : (
                    <Sun size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.1, duration: 0.2 } }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 left-5 p-3 sm:p-4 bg-secondary/50 rounded-full border border-border/50 hover:bg-secondary/80 transition-colors shadow-sm"
            >
              <X size={20} className="text-foreground" />
            </button>
            <div className="flex flex-col gap-6 text-center">
              {slices.map(({ id, label, icon: Icon }, i) => (
                <motion.div 
                   key={id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => { goTo(i); setMenuOpen(false); }}
                    className={`flex items-center justify-center gap-4 w-full text-2xl min-[400px]:text-3xl font-serif uppercase tracking-[0.2em] transition-all duration-300 group px-6 py-3 rounded-2xl ${
                      current === i 
                        ? "text-foreground font-semibold bg-secondary/30 backdrop-blur-md border border-border/50 shadow-sm" 
                        : "text-muted-foreground hover:text-foreground/70 border border-transparent"
                    }`}
                  >
                    <motion.div
                      animate={
                        current === i
                          ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, -10, 10, 0] }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 min-[400px]:w-8 min-[400px]:h-8 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    {label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full pt-10 sm:pt-16 md:pt-16 max-[500px]:pt-16"
            style={{ willChange: "transform, opacity" }}
          >
             {slices[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 right-10 flex items-center gap-4 select-none tracking-[0.3em] uppercase">
        <div className="font-mono text-[10px] sm:text-xs text-muted-foreground flex items-center gap-2">
          <span className="text-foreground font-black">{String(current + 1).padStart(2, "0")}</span> 
          <span className="opacity-20 text-[8px]">/</span> 
          <span className="opacity-40">{String(slices.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  )
}

