import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState } from "react";
import { Github, ExternalLink, ArrowRight, Eye, Star, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, Project } from "@/lib/config";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full glass-card-hover rounded-2xl overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${project.featured ? '600px' : '350px'} circle at ${mouseX}px ${mouseY}px,
                rgba(238, 21, 75, 0.1),
                transparent 70%
              )
            `,
          }}
        />
        
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-gradient-to-r from-primary/20 to-violet-600/20 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span className="text-xs font-medium text-white/90">Featured</span>
          </div>
        )}
        
        <div className={`relative overflow-hidden ${project.featured ? 'h-80' : 'h-52'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card z-10" />
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-sm">
            <motion.a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 bg-white rounded-xl text-black shadow-xl hover:scale-110 transition-transform"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Eye className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 bg-black rounded-xl text-white shadow-xl hover:scale-110 transition-transform border border-white/10"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
        
        <div className="p-6 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-primary/10">
              <Folder className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">{project.category}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">{project.title}</h3>
          
          {project.description && (
            <p className="text-sm text-white/50 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
          )}
          
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags?.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-white/50 hover:text-white/70 hover:border-white/10 transition-colors">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 pt-4 border-t border-white/5">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 glass-card rounded-xl text-sm text-white/70 hover:text-white transition-all hover:border-white/20"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-primary to-pink-500 rounded-xl text-sm text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden section-glow">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full glow-orb" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/5 rounded-full glow-orb" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 tracking-wider">
              <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              MY WORK
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              Selected <span className="text-gradient">Works</span>
            </h2>
            <p className="text-white/40 text-lg max-w-md leading-relaxed">
              A curated selection of digital experiences I've engineered and brought to life.
            </p>
          </div>
          <Button variant="outline" className="glass-card border-white/10 hover:border-primary/30 text-white/70 hover:text-white rounded-xl group hidden md:flex">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full py-6 glass-card border-white/10 rounded-xl">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
