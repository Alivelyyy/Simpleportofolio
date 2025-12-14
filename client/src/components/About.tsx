import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Server, Wrench, Zap, Trophy, Users, Coffee } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Code2 className="w-5 h-5" />, color: "from-yellow-500 to-orange-500", level: 95 },
  { name: "Node.js", icon: <Server className="w-5 h-5" />, color: "from-green-500 to-emerald-500", level: 90 },
  { name: "Discord.js", icon: <Terminal className="w-5 h-5" />, color: "from-blue-500 to-indigo-500", level: 95 },
  { name: "MongoDB", icon: <Database className="w-5 h-5" />, color: "from-green-400 to-teal-500", level: 85 },
  { name: "API Integration", icon: <Wrench className="w-5 h-5" />, color: "from-purple-500 to-pink-500", level: 88 },
  { name: "React/UI", icon: <Layout className="w-5 h-5" />, color: "from-cyan-400 to-blue-500", level: 82 },
];

const stats = [
  { icon: <Trophy className="w-6 h-6" />, value: "3+", label: "Years Experience" },
  { icon: <Zap className="w-6 h-6" />, value: "50+", label: "Projects Done" },
  { icon: <Users className="w-6 h-6" />, value: "1000+", label: "Happy Users" },
  { icon: <Coffee className="w-6 h-6" />, value: "999+", label: "Cups of Coffee" },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">// WHO I AM</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
                      <img 
                        src="https://images-ext-1.discordapp.net/external/62Z18IyUDPSKmuFm9DE3JuZDsZ3NBa-bssyYt_TdCQE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1304080189029875753/16b589870dec30e251c493faad39af8f.webp?format=webp" 
                        alt="Alive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Alive</h3>
                    <p className="text-primary font-medium">Full Stack Developer</p>
                    <p className="text-muted-foreground text-sm">CEO @ ApeX Development</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a passionate Developer with a strong focus on Discord bot development and backend automation. 
                  I create custom solutions that help communities manage their servers efficiently and provide unique experiences for their members.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  With expertise in the Discord.js library and Node.js ecosystem, I can bring any idea to life—from complex economy systems to advanced moderation tools.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-primary/50 transition-all group"
                >
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className="block text-3xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              Technical Skills
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Technologies Tags */}
            <div className="pt-8 mt-8 border-t border-white/10">
              <h4 className="text-sm text-muted-foreground mb-4">Also experienced with:</h4>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Express.js', 'PostgreSQL', 'Redis', 'Docker', 'Git', 'REST APIs', 'WebSockets'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-muted-foreground hover:text-white hover:border-primary/50 transition-colors cursor-default"
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
