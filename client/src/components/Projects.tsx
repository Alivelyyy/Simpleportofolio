import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Alive Portfolio",
    category: "Personal Brand",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707701160-sdfsdfsdff.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102141Z&X-Amz-Expires=604800&X-Amz-Signature=9282c64ea74a6058200fae3eed7ac7558c98a22cd21e3b18d37beac9b3bd0417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/teamapexofc/Simpleportofolio",
    demo: "https://Alive.encorebot.me"
  },
  {
    title: "ApeX Music",
    category: "Discord Bot",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707702718-tgbgyh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102142Z&X-Amz-Expires=604800&X-Amz-Signature=5bb9dc53bfbed81483014f14f552006705a0afd37643c50b967215ae5b92bd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/teamapexofc/ApeX-Music",
    demo: "https://apexmusic.netlify.app/"
  },
  {
    title: "Mimi Website",
    category: "Discord Bot Static Website",
    image: "https://images-ext-1.discordapp.net/external/MDM4EaWCcYTSnXaF2TAGqWr1tpDob_2Ic1Hy55EV9bg/https/mimi.encorebot.me/opengraph.jpg?format=webp&quality=lossless&width=1543&height=738",
    github: "https://github.com/aliveyyy/",
    demo: "https://mimi.encorebot.me"
  },
  {
    title: "Encore Website",
    category: "Discord Bot Static Website",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707706949-orgfk.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102147Z&X-Amz-Expires=604800&X-Amz-Signature=cb71fdef3100fd0c895b30b81ae504a5a5e0630da3c7b2b2e9f549164e3a9617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/aliveyyy/",
    demo: "https://www.encorebot.me"
  },
  {
    title: "Media Vault",
    category: "Media Hosting",
    image: "https://s3.us-east-005.backblazeb2.com/Mediavaultbyalive/uploads/1765707697089-rgrfgv.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=0058ec8f1420c430000000002%2F20251214%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Date=20251214T102137Z&X-Amz-Expires=604800&X-Amz-Signature=4c42a05b5ce2aab4b151a14bea88a0a490a002e24b00d8adc62304f128ff0463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    github: "https://github.com/aliveyyy/",
    demo: "https://mediavault.encorebot.me"
  }
];

function ProjectCard({ project }: { project: any }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/10 bg-gray-900/50 overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(238, 21, 75, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col">
        <div className="h-64 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        </div>
        
        <div className="p-6 flex-1 flex flex-col justify-between bg-black/40 backdrop-blur-sm">
          <div>
            <p className="text-xs font-mono text-primary mb-2 uppercase tracking-widest">{project.category}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          </div>
          
          <div className="flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
             <Button size="sm" variant="outline" className="w-full border-white/20 hover:bg-white hover:text-black" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
             </Button>
             <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">Selected Works</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              A curated selection of digital experiences I've engineered.
            </p>
          </div>
          <Button variant="link" className="text-primary text-lg hidden md:flex gap-2 group">
            View All Archives <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Button variant="outline" className="w-full py-6">View All Archives</Button>
        </div>
      </div>
    </section>
  );
}
