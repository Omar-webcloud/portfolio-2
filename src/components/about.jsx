import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Mail, MailOpen } from "lucide-react"
export function About({ onConnect }) {
  const ROLES = ["Frontend Developer", "Web Developer", "WordPress Developer", "Full-Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto no-scrollbar pt-8 sm:pt-12 pb-32 flex flex-col items-center transition-colors duration-500">
      

      <div className="w-[85%] max-w-[1050px] flex flex-col items-start z-0 select-none pointer-events-none mb-4 sm:mb-8 mx-auto pl-2 md:pl-6">
        <h1 className="text-[24px] min-[375px]:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-serif uppercase text-foreground/15 whitespace-nowrap leading-none tracking-[0.02em] font-bold transition-colors duration-500 text-left">
          MOHAMMAD OMAR
        </h1>
        <h2 className="text-[10px] sm:text-xs md:text-base mt-1 sm:mt-2 font-mono text-foreground/50 uppercase tracking-[0.4em] font-semibold transition-colors duration-500 text-left ml-1">
          Web Developer
        </h2>
      </div>
      

      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[85%] sm:w-[90%] max-w-[1050px] bg-foreground rounded-[32px] sm:rounded-[40px] md:rounded-[48px] relative z-10 flex flex-col md:flex-row shadow-2xl transition-colors duration-700 mx-auto"
      >
        

        <div className="w-full md:w-[40%] flex justify-center items-center order-1 pt-12 md:pt-0 pb-4 md:pb-0 md:pl-12 lg:pl-16 z-30 group cursor-pointer">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
            className="relative w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] aspect-square rounded-full p-1.5 sm:p-2 border border-background/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_10px_50px_rgba(0,0,0,0.2)] group-hover:border-background/30 transition-all duration-500 bg-background/5"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-b from-background/10 to-transparent overflow-hidden flex justify-center items-end relative shadow-inner border border-background/5 transition-all duration-500 group-hover:from-background/20">
              <div className="absolute inset-0 bg-background/5 mix-blend-overlay"></div>
              <img 
                src="/images/omar.png" 
                alt="Mohammad Omar"
                className="w-[90%] h-[95%] object-contain object-bottom drop-shadow-2xl relative z-10 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 pointer-events-none"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800";
                }}
              />
            </div>
          </motion.div>
        </div>


        <div className="w-full md:w-[60%] p-6 sm:p-12 lg:p-16 flex flex-col justify-center order-2 z-20 text-background pb-10 sm:pb-16 pt-6 md:pt-16 transition-colors duration-700">
           <motion.h2 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="text-[20px] sm:text-2xl md:text-3xl lg:text-[38px] xl:text-[42px] font-medium leading-[1.3] md:leading-[1.15] mb-6 md:mb-8 font-sans tracking-tight text-background/90"
           >
             Building <span className="font-bold text-background">high-performance, intuitive digital experiences</span> that elevate your brand and drive business growth.
           </motion.h2>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.5 }}
             className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 font-sans"
           >
             <div 
               className="group relative bg-background/5 hover:bg-background/10 backdrop-blur-xl border border-background/10 hover:border-background/20 text-background px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-500 text-[13px] sm:text-base tracking-wide shadow-lg w-full sm:w-auto flex items-center justify-center gap-2.5 cursor-default hover:scale-[1.02]"
             >
               <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-background/70 group-hover:text-background group-hover:rotate-[360deg] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shrink-0" />
               <div className="relative overflow-hidden h-[20px] sm:h-[24px] flex flex-col justify-start w-[140px] sm:w-[155px]">
                 <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full whitespace-nowrap">Flexible Timezone</span>
                 <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0 whitespace-nowrap">Available Remotely</span>
               </div>
             </div>
             <button 
               onClick={onConnect}
               className="group relative bg-transparent hover:bg-background/5 backdrop-blur-md border border-background/20 hover:border-background/40 text-background px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-500 text-[13px] sm:text-base tracking-wide shadow-lg w-full sm:w-auto flex items-center justify-center gap-2.5 active:scale-95"
             >
               <span className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0 flex items-center justify-center">
                 <Mail className="absolute w-full h-full text-background/70 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-y-2" />
                 <MailOpen className="absolute w-full h-full text-background opacity-0 scale-75 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0" />
               </span>
               Contact
             </button>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-background/40 text-[10px] sm:text-xs font-mono uppercase font-semibold"
           >
              <div className="relative overflow-hidden w-[150px] sm:w-[180px] h-[20px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 tracking-[0.1em] sm:tracking-[0.2em] whitespace-nowrap text-background/60"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-background/20"></span>
              <span className="tracking-[0.1em] sm:tracking-[0.2em] whitespace-nowrap">Chattogram, BD</span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-background/20"></span>
              <span className="tracking-[0.1em] sm:tracking-[0.2em] whitespace-nowrap">GMT +6</span>
           </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
