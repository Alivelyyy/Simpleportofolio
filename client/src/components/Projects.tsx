import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState } from "react";
import { Github, ExternalLink, ArrowRight, Eye, Star, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Alive Portfolio",
    category: "Personal Brand",
    description: "Modern portfolio website showcasing my work and skills with stunning animations.",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707701160-sdfsdfsdff.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102141Z&X-Amz-Expires=604800&X-Amz-Signature=9282c64ea74a6058200fae3eed7ac7558c98a22cd21e3b18d37beac9b3bd0417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/teamapexofc/Simpleportofolio",
    demo: "https://Alive.encorebot.me",
    tags: ["React", "Tailwind", "Framer Motion"],
    featured: true
  },
  {
    title: "ApeX Music",
    category: "Discord Bot",
    description: "High-quality music bot with advanced features and seamless audio streaming.",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707702718-tgbgyh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102142Z&X-Amz-Expires=604800&X-Amz-Signature=5bb9dc53bfbed81483014f14f552006705a0afd37643c50b967215ae5b92bd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/teamapexofc/ApeX-Music",
    demo: "https://apexmusic.netlify.app/",
    tags: ["Discord.js", "Node.js", "Lavalink"],
    featured: true
  },
  {
    title: "Mimi Website",
    category: "Bot Landing Page",
    description: "Beautiful landing page for Mimi Discord bot with modern design elements.",
    image: "https://images-ext-1.discordapp.net/external/MDM4EaWCcYTSnXaF2TAGqWr1tpDob_2Ic1Hy55EV9bg/https/mimi.encorebot.me/opengraph.jpg?format=webp&quality=lossless&width=1543&height=738",
    github: "https://github.com/aliveyyy/",
    demo: "https://mimi.encorebot.me",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Encore Website",
    category: "Bot Landing Page",
    description: "Premium Discord bot website with sleek interface and comprehensive documentation.",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707706949-orgfk.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102147Z&X-Amz-Expires=604800&X-Amz-Signature=cb71fdef3100fd0c895b30b81ae504a5a5e0630da3c7b2b2e9f549164e3a9617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/aliveyyy/",
    demo: "https://www.encorebot.me",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Media Vault",
    category: "Media Hosting",
    description: "Secure media hosting platform with fast uploads and easy sharing capabilities.",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707697089-rgrfgv.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102137Z&X-Amz-Expires=604800&X-Amz-Signature=4c42a05b5ce2aab4b151a14bea88a0a490a002e24b00d8adc62304f128ff0463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/aliveyyy/",
    demo: "https://mediavault.encorebot.me",
    tags: ["Node.js", "AWS S3", "Express"]
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden rounded-2xl hover:border-primary/50 transition-all duration-500">
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${project.featured ? '800px' : '400px'} circle at ${mouseX}px ${mouseY}px,
                rgba(238, 21, 75, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span className="text-xs font-medium text-primary">Featured</span>
          </div>
        )}
        
        {/* Image */}
        <div className={`relative overflow-hidden ${project.featured ? 'h-72' : 'h-48'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/90 z-10" />
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.7 }}
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full text-black hover:bg-white transition-colors hover:scale-110"
            >
              <Eye className="w-5 h-5" />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-black/90 rounded-full text-white hover:bg-black transition-colors hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">{project.category}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          
          {project.description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary/90 hover:bg-primary rounded-lg text-sm text-white transition-colors"
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
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">// MY WORK</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              A curated selection of digital experiences I've engineered and brought to life.
            </p>
          </div>
          <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/10 group hidden md:flex">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full py-6 border-primary/30 hover:bg-primary/10">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
