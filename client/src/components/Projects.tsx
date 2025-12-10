import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Alive Portfolio",
    category: "Personal Brand",
    image: "https://media.discordapp.net/attachments/1417738377977008260/1441682182841040926/image.png?ex=6922aea9&is=69215d29&hm=f799aeade3fef25aa34012aa2eec70a7f074c1177749de0f87f523a04f5d569b&=&format=webp&quality=lossless&width=1543&height=738",
    github: "https://github.com/teamapexofc/Simpleportofolio",
    demo: "https://Alive.encorebot.me"
  },
  {
    title: "ApeX Music",
    category: "Discord Bot",
    image: "https://media.discordapp.net/attachments/1417738377977008260/1441682558625779722/image.png?ex=6922af03&is=69215d83&hm=671f02a1037c34306b5252de55cbcb51fc6733c19f92a57c70c9b06f835fdef1&=&format=webp&quality=lossless&width=550&height=264",
    github: "https://github.com/teamapexofc/ApeX-Music",
    demo: "https://apexmusic.netlify.app/"
  },
  {
    title: "Mimi Website",
    category: "Discord Bot Static Website",
    image: "https://images-ext-1.discordapp.net/external/MDM4EaWCcYTSnXaF2TAGqWr1tpDob_2Ic1Hy55EV9bg/https/mimi.encorebot.me/opengraph.jpg?format=webp&quality=lossless&width=1543&height=738",
    github: "https://github.com/aliveyyy/",
    demo: "https://mimi.encorebot.me"
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
