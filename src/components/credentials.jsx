import { useEffect, useState } from "react"
import { GraduationCap, Award, Code2, Layers, Wrench, ChevronRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function Credentials() {
  const skillGroups = [
    { 
      title: "Core Stack", 
      icon: <Layers className="w-5 h-5" />, 
      items: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "PHP"] 
    },
    { 
      title: "Backend & Data", 
      icon: <Code2 className="w-5 h-5" />, 
      items: ["Node.js", "Express", "MongoDB", "Firebase"] 
    },
    { 
      title: "Tools & Platforms", 
      icon: <Wrench className="w-5 h-5" />, 
      items: ["Git/GitHub", "Vite", "npm", "DevTools", "Figma", "Notion", "Wordpress", "Elementor", "SCRUM", "Jest"] 
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 pb-8 sm:pb-16 lg:pb-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] lg:sticky lg:top-0 lg:pr-10"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-[0.95] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Expertise &<br /> Credentials
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light mb-4 sm:mb-6">
              Skills, Education & Achievements
            </p>
            <div className="max-w-md hidden lg:block">
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed italic">
                "Continuous learning is the benchmark of modern engineering. I constantly refine my stack to stay at the forefront of the industry."
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-[50%] flex flex-col gap-8 sm:gap-14"
          >
            <motion.div variants={item}>
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="h-[1px] flex-1 bg-border/40" />
                <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground shrink-0">Technical Arsenal</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-8">
                {skillGroups.map((group, idx) => (
                  <div key={idx} className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-3 text-foreground font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                      {group.icon}
                      {group.title}
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-foreground">
                      {group.items.map(skill => (
                        <motion.span 
                          whileHover={{ y: -2, backgroundColor: "var(--accent)" }}
                          key={skill} 
                          className="text-[10px] sm:text-[11px] font-mono uppercase border border-border px-2 py-0.5 bg-secondary rounded-sm cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="h-[1px] flex-1 bg-border/40" />
                <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground shrink-0">Academic Foundation</h3>
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="minimal-card p-4 sm:p-5 bg-background relative border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 sm:p-3 bg-secondary border border-border shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight">Bachelor of Arts</h4>
                    <p className="text-sm sm:text-base text-foreground/80">English Literature and Language</p>
                    <p className="text-[10px] font-mono text-muted-foreground mt-1 sm:mt-2 uppercase flex items-center gap-2">
                       <ChevronRight className="w-3 h-3" /> University of Chittagong
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={item}>
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="h-[1px] flex-1 bg-border/40" />
                <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground shrink-0">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-12 sm:pb-0">
                {[
                  { title: "Web Development", issuer: "SoloLearn", link: "https://api2.sololearn.com/v2/certificates/CC-HMCA6F6M/image/png" },
                  { title: "Responsive Web Design", issuer: "freeCodeCamp", link: "https://freecodecamp.org/certification/fcc-43a93b12-1d40-4a5b-a38b-9b4846c24ed9/responsive-web-design" },
                ].map((cert, idx) => (
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    key={idx} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minimal-card p-3 sm:p-4 bg-background border border-border flex items-center gap-3 sm:gap-4 cursor-pointer"
                  >
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/60 shrink-0" />
                    <div className="flex-1">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-tight">{cert.title}</p>
                      <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase">{cert.issuer}</p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


