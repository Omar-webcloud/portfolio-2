import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, FileText, ArrowRight, Download } from "lucide-react"

export function Connect() {
  const [copied, setCopied] = useState(false)

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-14 pb-16 lg:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-bold uppercase tracking-tighter mb-4 text-foreground">
              Connect
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light">
                Available for projects
              </p>
            </div>
            
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-sm hidden sm:block italic">
              "Let's create something meaningful together. Whether it's a high-performance web app or a unique digital experience, I'm here to bring your vision to life."
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {[
              { label: "Email",    value: "omarfarukcihs@gmail.com", href: "mailto:omarfarukcihs@gmail.com", icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary-foreground/70 transition-colors" /> },
              { label: "LinkedIn", value: "in/md-omar-faruk-chowdhury",href: "https://www.linkedin.com/in/md-omar-faruk-chowdhury", icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary-foreground/70 transition-colors" /> },
              { label: "GitHub",   value: "Omar-webcloud",           href: "https://github.com/Omar-webcloud", icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary-foreground/70 transition-colors" /> },
              { label: "Resume",   value: "Download PDF (0.3MB)",    href: "/Resume.pdf", download: true, icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary-foreground/70 transition-colors" /> },
            ].map(({ label, value, href, download, icon }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group flex"
              >
                <motion.a
                  whileHover="hover"
                  href={href}
                  target={download ? undefined : "_blank"}
                  download={download}
                  rel={download ? undefined : "noopener noreferrer"}
                  className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border border-border p-4 sm:p-5 bg-card hover:bg-foreground transition-all duration-300 w-full"
                >
                  <div className="flex items-center gap-3 w-full sm:w-32 shrink-0">
                    <motion.div
                      variants={{
                        hover: label === "Email" ? { x: [0, -2, 2, -2, 2, 0] } :
                                label === "LinkedIn" ? { scale: 1.2, y: -2 } :
                                label === "GitHub" ? { scale: 1.3, fill: "currentColor" } :
                                label === "Resume" ? { y: [0, -4, 0] } : {}
                      }}
                      transition={label === "Email" ? { duration: 0.4 } : 
                                 label === "Resume" ? { repeat: Infinity, duration: 1.5 } : { duration: 0.3 }}
                    >
                      {icon}
                    </motion.div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary-foreground/60 transition-colors">{label}</span>
                  </div>
                  <span className={`text-base sm:text-lg font-medium group-hover:text-primary-foreground transition-colors flex-1 ${label === "Email" ? "" : "truncate"}`}>
                    {value}
                  </span>
                  
                  {label === "Resume" ? (
                    <motion.div
                      variants={{
                        hover: { y: 2, scale: 1.1 }
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Download className="w-4 h-4 text-primary-foreground" />
                    </motion.div>
                  ) : label === "Email" ? null : (
                    <motion.div
                      variants={{
                        hover: { x: 5, scale: 1.1 }
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </motion.div>
                  )}
                </motion.a>
                
                {label === "Email" && (
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      copyEmail(value);
                    }}
                    className="absolute -top-4 right-4 sm:-top-6 sm:right-2 flex items-center gap-2 px-3 py-1.5 bg-foreground text-background text-[7px] sm:text-[9px] font-mono border border-border uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50 shadow-2xl"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {copied ? "Copied Successfully!" : "Click to Copy Email"}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
