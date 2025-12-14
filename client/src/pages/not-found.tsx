import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 text-center px-4">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none">
            404
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
            <Compass className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Lost in the <span className="text-primary">Void</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the digital abyss.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            asChild
            size="lg" 
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 border-white/20 hover:bg-white/5 rounded-xl"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </motion.div>

        {/* Decorative Code Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 font-mono text-sm text-muted-foreground/50"
        >
          <pre className="inline-block text-left p-4 bg-white/5 rounded-lg border border-white/10">
{`// Error Log
{
  "status": 404,
  "message": "Page not found",
  "path": "${typeof window !== 'undefined' ? window.location.pathname : '/'}",
  "timestamp": "${new Date().toISOString()}"
}`}
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
