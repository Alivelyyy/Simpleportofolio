import { Github, Youtube, Disc, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const { personal, social, navigation, footer } = siteConfig;

  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${social.email}`, label: "Email" },
    { icon: <Github className="w-5 h-5" />, href: social.github, label: "GitHub" },
    { icon: <Youtube className="w-5 h-5" />, href: social.youtube, label: "YouTube" },
    { icon: <Disc className="w-5 h-5" />, href: social.discord, label: "Discord" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden section-glow">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full glow-orb" />
      
      <div className="relative bg-gradient-to-b from-background to-black/60 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-pink-500 to-violet-500 rounded-xl blur-md opacity-50" />
                  <img 
                    src={personal.avatar} 
                    alt={personal.name} 
                    className="relative h-14 w-14 rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold font-heading text-white">{personal.name}</span>
                  <p className="text-sm text-white/40">{personal.role} @ {personal.company}</p>
                </div>
              </div>
              
              <p className="text-white/40 leading-relaxed mb-8 max-w-md">
                {footer.tagline}
              </p>
              
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 glass-card rounded-xl text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300 group"
                    title={link.label}
                  >
                    <span className="group-hover:scale-110 inline-block transition-transform duration-300">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
                {footer.quickLinksTitle}
              </h4>
              <ul className="space-y-3">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/40 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
                {footer.stayConnectedTitle}
              </h4>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                {footer.stayConnectedText}
              </p>
              <a
                href={social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20"
              >
                <Disc className="w-4 h-4" />
                {footer.discordButton}
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/30 flex items-center gap-1">
                &copy; {new Date().getFullYear()} {personal.name}. {footer.copyright.split(' and ')[0]} 
                <Heart className="w-3 h-3 text-primary fill-primary mx-1" />
                and {footer.copyright.split(' and ')[1]}
              </p>
              
              <div className="flex items-center gap-6">
                <span className="text-sm text-white/30">
                  Crafted by <span className="text-primary">@{personal.name}</span>
                </span>
                
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 glass-card rounded-xl text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
