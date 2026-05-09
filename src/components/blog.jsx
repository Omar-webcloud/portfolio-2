import { useEffect, useState } from "react"
import { ExternalLink, BookOpen, Clock, ArrowUpRight, Newspaper } from "lucide-react"
import { motion } from "framer-motion"

const ARTICLES = [
  {
    title: "How to Choose the Right Tech Stack for Your Web Project (A Practical Guide for Developers)",
    excerpt: "You just decided to build something. You open your browser to research which stack to use and within ten minutes you are drowning in opinions. \"Use React.\" \"No, Next.js is better.\" \"Just use WordPress.\" \"PHP is dead.\" Every developer has been there. This guide skips the fluff and answers the questions that actually matter: what to use, when, and why.",
    readTime: "6 min read",
    category: "Web Development",
    link: "https://bloggin-app-six.vercel.app/post/pfG4DDttAXhIVkY8MfAz"
  },
  {
    title: "Image Optimization Techniques Every Frontend Developer Should Know",
    excerpt: "Images make a website look good, but they are also one of the biggest reasons a site becomes slow. When images are not handled properly, pages take longer to load and users leave early. That is why...",
    readTime: "5 min read",
    category: "Performance",
    link: "https://bloggin-app-six.vercel.app/post/pYTSIN48N3C1LB93DPHq"
  },
  {
    title: "Flexbox vs Grid and How I Choose Between Them",
    excerpt: "When I started learning modern CSS, Flexbox and Grid felt like magic. Suddenly layouts stopped being a fight and started to make sense. Over time though I realized they are not competitors...",
    readTime: "4 min read",
    category: "CSS Layout",
    link: "https://bloggin-app-six.vercel.app/post/SK7AwRIC5o3zZugpHRA2"
  }
]

export function Blog() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 pb-24 sm:pb-28 lg:pb-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] lg:sticky lg:top-0"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-[0.95] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Writings &<br /> Insights
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light mb-4 sm:mb-6">
              Blog & Articles
            </p>
            <div className="max-w-md hidden lg:block">
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed italic">
                "Sharing my thoughts on frontend development, design systems, and the evolving web landscape where code meets creativity."
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-3 text-muted-foreground">
               <Newspaper className="w-5 h-5 text-foreground/20" />
               <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Latest Updates</span>
            </div>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-[50%] flex flex-col gap-6 sm:gap-8"
          >
            {ARTICLES.map((article, idx) => (
              <motion.a 
                key={idx}
                variants={item}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, x: -5 }}
                className="group minimal-card p-5 sm:p-8 bg-background border border-border relative transition-all duration-300 transform"
              >
                <div className="absolute inset-0 bg-background border border-border -z-10 translate-y-1 translate-x-1" />
                <div className="absolute inset-0 bg-background border border-border -z-20 translate-y-2 translate-x-2" />
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="bg-secondary px-2 py-0.5 border border-border rounded-sm">{article.category}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.readTime}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground/80 line-clamp-3 leading-relaxed font-light">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-4 group-hover:text-primary transition-colors">
                    <div className="h-[1px] w-6 bg-border group-hover:w-10 transition-all" />
                    Read Article <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  )
}
