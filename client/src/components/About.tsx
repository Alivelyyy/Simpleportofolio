import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Server, Wrench, Trophy, Users, Coffee, Zap } from "lucide-react";
import { siteConfig, Skill } from "@/lib/config";

const skillIconMap: Record<string, React.ReactNode> = {
  "JavaScript": <Code2 className="w-5 h-5" />,
  "Node.js": <Server className="w-5 h-5" />,
  "Discord.js": <Terminal className="w-5 h-5" />,
  "MongoDB": <Database className="w-5 h-5" />,
  "API Integration": <Wrench className="w-5 h-5" />,
  "React/UI": <Layout className="w-5 h-5" />,
};

const statIconMap: Record<string, React.ReactNode> = {
  "Years Experience": <Trophy className="w-6 h-6" />,
  "Projects Done": <Zap className="w-6 h-6" />,
  "Happy Users": <Users className="w-6 h-6" />,
  "Cups of Coffee": <Coffee className="w-6 h-6" />,
};

export default function About() {
  const { personal, about, skills, stats } = siteConfig;

  return (
    <section id="about" className="py-32 relative overflow-hidden section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 tracking-wider justify-center">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            WHO I AM
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-pink-500 to-violet-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative glass-card rounded-3xl p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
                      <img 
                        src={personal.avatar} 
                        alt={personal.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-background shadow-lg shadow-emerald-500/50" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{personal.name}</h3>
                    <p className="text-primary font-medium">{personal.title}</p>
                    <p className="text-white/40 text-sm mt-1">{personal.role} @ {personal.company}</p>
                  </div>
                </div>
                
                {about.bio.map((paragraph, index) => (
                  <p key={index} className="text-white/50 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card-hover rounded-2xl p-5 group"
                >
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {statIconMap[stat.label] || <Zap className="w-6 h-6" />}
                  </div>
                  <span className="block text-3xl font-bold text-white mb-1 group-hover:text-gradient transition-all">{stat.value}</span>
                  <span className="text-sm text-white/40">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-violet-500 rounded-full" />
              Technical Skills
            </h3>
            
            {skills.map((skill: Skill, index: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {skillIconMap[skill.name] || <Code2 className="w-5 h-5" />}
                    </div>
                    <span className="font-medium text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm font-mono text-white/40">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}

            <div className="pt-8 mt-8 border-t border-white/5">
              <h4 className="text-sm text-white/40 mb-4">Also experienced with:</h4>
              <div className="flex flex-wrap gap-2">
                {about.otherTechnologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 glass-card rounded-xl text-sm text-white/50 hover:text-white hover:border-primary/30 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
