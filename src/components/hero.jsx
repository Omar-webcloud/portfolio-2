import { useRef, useState, useEffect } from "react"
import { Monitor, Code2, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "./project-card"
import { featuredProjects } from "../data/projects"

export function Hero() {
  const scrollRef = useRef(null)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    
    const handleScroll = () => {
      if (el.scrollTop > 100) {
        setShowHint(false)
      } else {
        setShowHint(true)
      }
    }
    
    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div 
        ref={scrollRef}
        className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 min-h-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:pr-10"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-[0.9] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Selected<br />
              Projects
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light">
                Digital Experience & Interfaces
              </p>
            </div>
            
            <div className="max-w-md hidden sm:block space-y-6">
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                A showcase of my recent work focusing on clean code, modern stacks, and user-centric designs.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Monitor className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Responsive Web Design</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Code2 className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Optimized Performance</span>
                </div>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ 
                      delay: 0.8, 
                      duration: 0.8, 
                      type: "spring",
                      bounce: 0.4
                    }}
                    className="pt-12 flex items-center gap-4 group cursor-default"
                  >
                    <motion.div 
                      animate={{ 
                        x: [0, 5, 0],
                      }}
                      transition={{
                        delay: 2,
                        duration: 0.5,
                        repeat: 2,
                        repeatDelay: 3
                      }}
                      className="relative w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2 group-hover:border-foreground/60 transition-colors shadow-sm"
                    >
                      <motion.div 
                        animate={{ 
                          y: [0, 14, 0],
                          opacity: [1, 0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="w-1 h-2 bg-foreground/70 rounded-full"
                      />
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/80 font-bold group-hover:text-foreground transition-colors">
                        Scroll Down
                      </span>
                      <span className="text-[8px] font-mono uppercase tracking-[0.1em] text-muted-foreground/50">
                        To see work
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="w-full lg:w-[50%] flex flex-col gap-8 sm:gap-16 pb-12 sm:pb-20">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: [0, 1, 0],
              x: [-20, 0, -20],
              y: [0, 5, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              times: [0, 0.2, 1],
              ease: "easeInOut"
            }}
            className="sm:hidden absolute bottom-8 left-6 flex flex-col items-start gap-1 text-muted-foreground/50 pointer-events-none z-20"
          >
            <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown size={14} className="ml-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}