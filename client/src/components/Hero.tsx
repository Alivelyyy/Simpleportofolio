import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal, ChevronRight, Sparkles, Code2 } from "lucide-react";
import CyberCore from "@/components/CyberCore";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = siteConfig.personal.tagline;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const { personal, stats, social, hero } = siteConfig;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full glow-orb animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-violet-600/15 rounded-full glow-orb animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-violet-600/3 to-transparent rounded-full" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[70vh] bg-[linear-gradient(transparent,rgba(238,21,75,0.06))] perspective-grid" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background z-10" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary/60 to-violet-500/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-10 w-fit"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-white/90">{hero.availability}</span>
              </motion.div>

              <div className="flex items-center gap-4 mb-10 font-mono text-xs text-white/40 pb-4 w-fit">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="uppercase tracking-widest">System Online</span>
                </div>
                <span className="text-white/10">|</span>
                <span className="uppercase tracking-widest">v.2.0.24</span>
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-8">
                <motion.span 
                  className="block text-white/90"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {hero.greeting}
                </motion.span>
                <motion.span 
                  className="block relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-violet-500 animate-gradient-x">
                    {personal.name.toUpperCase()}
                  </span>
                  <span className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-violet-600/20 blur-3xl -z-10 rounded-3xl" />
                </motion.span>
              </h1>

              <motion.div 
                className="h-12 mb-10 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-violet-600/20 border border-white/10">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xl text-white/80">
                  {typedText}
                  <span className="animate-pulse text-primary ml-0.5">_</span>
                </span>
              </motion.div>
              
              <motion.div 
                className="space-y-5 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3 text-xl md:text-2xl text-white/70">
                  <Terminal className="w-5 h-5 text-violet-400" />
                  <span>{personal.role} of <span className="text-white font-semibold">{personal.company}</span></span>
                </div>
                
                <a 
                  href={personal.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-all font-mono text-sm glass-card px-4 py-2.5 rounded-full hover:border-primary/30 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:animate-ping" />
                  {personal.website.replace('https://', '')}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              <motion.p 
                className="text-lg text-white/50 mb-12 max-w-xl leading-relaxed pl-6 border-l-2 border-gradient-to-b from-primary to-violet-500"
                style={{ borderImage: 'linear-gradient(to bottom, #ee154b, #8b5cf6) 1' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {personal.description}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Button size="lg" className="h-14 px-8 text-base rounded-2xl bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] btn-glow group">
                  {hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href={social.github} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-2xl glass-card border-white/10 hover:border-white/20 hover:bg-white/5 gap-2 transition-all duration-300 hover:scale-[1.02]">
                    <Github className="h-4 w-4" /> 
                    <span>{hero.ctaSecondary}</span>
                  </Button>
                </a>
              </motion.div>

              <motion.div 
                className="flex gap-10 mt-14 pt-8 border-t border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center group">
                    <span className="block text-4xl font-bold text-white group-hover:text-primary transition-colors">{stat.value}</span>
                    <span className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label.split(' ')[0]}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 h-[500px] lg:h-[650px] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 lg:hidden" />
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <CyberCore />
            </motion.div>
          </div>

        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div 
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-1.5 bg-gradient-to-b from-primary to-violet-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
