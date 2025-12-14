import { motion } from "framer-motion";
import { Palette, Globe, Zap, Layers, Smartphone, Bot, Database, Shield } from "lucide-react";

const services = [
  {
    title: "Discord Bots",
    description: "Custom Discord bots with advanced features, moderation tools, and economy systems.",
    icon: <Bot className="w-8 h-8" />,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    size: "large"
  },
  {
    title: "Web Development",
    description: "Fast, responsive, and modern websites using cutting-edge technologies.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that users love.",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Full Stack",
    description: "Complete solutions from database to frontend with scalable architecture.",
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    size: "large"
  },
  {
    title: "API Development",
    description: "RESTful APIs and integrations that power your applications.",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Performance",
    description: "Optimization for speed, efficiency, and best user experience.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Mobile First",
    description: "Responsive designs that work flawlessly on any device.",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Security",
    description: "Secure implementations with best practices and regular audits.",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-slate-500 to-zinc-500"
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const isLarge = service.size === 'large';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group relative ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className={`
        relative h-full overflow-hidden rounded-3xl border border-white/10 
        bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm
        hover:border-white/20 transition-all duration-500
        ${isLarge ? 'p-10' : 'p-6'}
      `}>
        {/* Gradient Glow */}
        <div className={`
          absolute -inset-0.5 bg-gradient-to-r ${service.gradient} opacity-0 
          group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl
        `} />
        
        {/* Icon */}
        <div className={`
          relative z-10 mb-6 inline-flex items-center justify-center 
          ${isLarge ? 'w-16 h-16' : 'w-12 h-12'} 
          rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg
          group-hover:scale-110 group-hover:shadow-xl transition-all duration-300
        `}>
          {service.icon}
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className={`font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.gradient} transition-all duration-300 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
            {service.title}
          </h3>
          <p className={`text-muted-foreground leading-relaxed ${isLarge ? 'text-lg' : 'text-sm'}`}>
            {service.description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Bottom Gradient Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-600/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">// WHAT I DO</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-purple-500">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From concept to deployment, I offer end-to-end solutions tailored to your needs.
          </p>
          <div className="mt-6 h-1 w-32 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </motion.div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">Need something specific? Let's discuss your project.</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            Start a Conversation
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
