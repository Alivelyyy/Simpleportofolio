import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal, ChevronRight, Sparkles, Code2 } from "lucide-react";
import CyberCore from "@/components/CyberCore";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Building Digital Experiences";

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-purple-600/5 to-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Epic Moving Grid Floor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[60vh] bg-[linear-gradient(transparent,rgba(238,21,75,0.08))] perspective-grid" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background z-10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content - Spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 w-fit"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Available for Projects</span>
              </motion.div>

              {/* Status Bar */}
              <div className="flex items-center gap-4 mb-8 font-mono text-xs text-primary/60 border-b border-white/5 pb-4 w-fit">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>SYSTEM ONLINE</span>
                </div>
                <span className="text-white/20">//</span>
                <span>LOC: EARTH</span>
                <span className="text-white/20">//</span>
                <span>V.2.0.24</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-6">
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I AM
                </motion.span>
                <motion.span 
                  className="block relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-primary bg-[length:200%_auto] animate-gradient-x">
                    ALIVE
                  </span>
                  <span className="absolute -inset-1 bg-primary/20 blur-2xl -z-10 rounded-lg" />
                </motion.span>
              </h1>

              {/* Typing Effect Subtitle */}
              <div className="h-10 mb-8 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="font-mono text-lg text-white/80">
                  {typedText}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
              
              {/* Role & Link */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-3 text-xl md:text-2xl font-light text-white/80">
                  <Terminal className="w-5 h-5 text-primary" />
                  <span>CEO of <strong className="text-white font-bold bg-gradient-to-r from-primary/20 to-transparent px-2 py-1 rounded">ApeX Development</strong></span>
                </div>
                
                <a 
                  href="https://Alive.encorebot.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-all font-mono text-sm border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/10 hover:border-primary/40 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:animate-ping" />
                  Alive.encorebot.me
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Description */}
              <motion.p 
                className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Merging <span className="text-white font-medium">Full Stack Engineering</span> with high-end <span className="text-white font-medium">System Architecture</span>. 
                I build digital ecosystems that are alive, responsive, and infinitely scalable.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button size="lg" className="h-14 px-8 text-base rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group">
                  Explore My Work 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-xl border-white/20 hover:bg-white/5 hover:border-white/30 gap-2 backdrop-blur-sm">
                  <Github className="h-4 w-4" /> 
                  <span>View GitHub</span>
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div 
                className="flex gap-8 mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">3+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">50+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">100%</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Passion</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Core - Spans 5 columns */}
          <div className="lg:col-span-5 h-[500px] lg:h-[600px] relative flex items-center justify-center perspective-[1000px]">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 lg:hidden" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <CyberCore />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div 
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
