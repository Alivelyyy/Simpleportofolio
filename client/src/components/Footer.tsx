import { Github, Youtube, Disc, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@encorebot.me", label: "Email" },
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/teamapexofc", label: "GitHub" },
  { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@apex-teamofc", label: "YouTube" },
  { icon: <Disc className="w-5 h-5" />, href: "https://discord.gg/6QwS5BQx", label: "Discord" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
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
    <footer className="relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      
      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-background to-black/50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink-500 rounded-lg blur opacity-50" />
                  <img 
                    src="https://images-ext-1.discordapp.net/external/62Z18IyUDPSKmuFm9DE3JuZDsZ3NBa-bssyYt_TdCQE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1304080189029875753/16b589870dec30e251c493faad39af8f.webp?format=webp" 
                    alt="Alive" 
                    className="relative h-12 w-12 rounded-lg"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold font-heading text-white">Alive</span>
                  <p className="text-xs text-muted-foreground">CEO @ ApeX Development</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Creating next-gen Discord bots and stunning websites. 
                Turning ideas into reality with clean code and creative solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-xl text-muted-foreground hover:text-primary transition-all duration-300 group"
                    title={social.label}
                  >
                    <span className="group-hover:scale-110 inline-block transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <div className="w-6 h-px bg-primary" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter / CTA */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <div className="w-6 h-px bg-primary" />
                Stay Connected
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Join my Discord server for updates, tips, and exclusive content.
              </p>
              <a
                href="https://discord.gg/6QwS5BQx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-xl text-white text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Disc className="w-4 h-4" />
                Join Discord
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                &copy; {new Date().getFullYear()} Alive. Built with 
                <Heart className="w-3 h-3 text-primary fill-primary inline mx-1" />
                and lots of coffee.
              </p>
              
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground">
                  Crafted by <span className="text-primary">@Alive</span>
                </span>
                
                {/* Scroll to Top */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg text-muted-foreground hover:text-primary transition-all"
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
