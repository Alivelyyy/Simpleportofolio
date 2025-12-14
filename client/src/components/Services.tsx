import { motion } from "framer-motion";
import { Palette, Globe, Zap, Layers, Smartphone, Bot, Database, Shield } from "lucide-react";
import { siteConfig, Service } from "@/lib/config";

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-7 h-7" />,
  Globe: <Globe className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Layers: <Layers className="w-7 h-7" />,
  Database: <Database className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isLarge = service.size === 'large';
  const icon = iconMap[service.iconName] || <Globe className="w-5 h-5" />;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className={`
        relative h-full overflow-hidden rounded-2xl glass-card-hover
        ${isLarge ? 'p-10' : 'p-6'}
      `}>
        <div className={`
          absolute -inset-0.5 bg-gradient-to-r ${service.gradient} opacity-0 
          group-hover:opacity-10 blur-2xl transition-opacity duration-700 rounded-2xl
        `} />
        
        <div className={`
          relative z-10 mb-6 inline-flex items-center justify-center 
          ${isLarge ? 'w-16 h-16' : 'w-12 h-12'} 
          rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg
          group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500
        `}>
          {icon}
        </div>
        
        <div className="relative z-10">
          <h3 className={`font-bold text-white mb-3 group-hover:text-gradient transition-all duration-500 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
            {service.title}
          </h3>
          <p className={`text-white/40 leading-relaxed ${isLarge ? 'text-lg' : 'text-sm'}`}>
            {service.description}
          </p>
        </div>

        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full`} />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background to-background" />
      
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/8 rounded-full glow-orb" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-violet-600/8 rounded-full glow-orb" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 tracking-wider">
            <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
            {siteConfig.servicesSection.label}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            {siteConfig.servicesSection.title.split(' ')[0]} <span className="text-gradient">{siteConfig.servicesSection.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            {siteConfig.servicesSection.subtitle}
          </p>
          <div className="mt-8 h-0.5 w-32 bg-gradient-to-r from-primary via-pink-500 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/40 mb-8">{siteConfig.servicesSection.ctaText}</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-pink-500 to-violet-500 rounded-2xl text-white font-medium hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] btn-glow"
          >
            {siteConfig.servicesSection.ctaButton}
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
