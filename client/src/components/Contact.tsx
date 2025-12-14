import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Clock, ArrowUpRight, MessageSquare, Disc } from "lucide-react";
import { siteConfig } from "@/lib/config";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const { toast } = useToast();
  const { personal, social } = siteConfig;
  
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: social.email,
      href: `mailto:${social.email}`
    },
    {
      icon: <Disc className="w-5 h-5" />,
      label: "Discord",
      value: "Join Server",
      href: social.discord
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: personal.location,
      href: null
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Availability",
      value: personal.availability,
      href: null
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: social.github },
    { name: 'YouTube', href: social.youtube },
    { name: 'Discord', href: social.discord }
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you within 24-48 hours.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/8 rounded-full glow-orb" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-violet-600/8 rounded-full glow-orb" />
      
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
            GET IN TOUCH
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-600 rounded-3xl blur-lg opacity-15" />
              <div className="relative glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-violet-600/20">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Let's collaborate</h3>
                </div>
                <p className="text-white/50 leading-relaxed">
                  I'm currently available for freelance work and exciting new projects. 
                  If you have an idea that needs some creative coding magic, I'd love to hear about it!
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 glass-card-hover rounded-2xl group"
                    >
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-violet-600/10 rounded-xl text-primary group-hover:from-primary group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-white/40 uppercase tracking-wider">{item.label}</p>
                        <p className="font-medium text-white">{item.value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-violet-600/10 rounded-xl text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wider">{item.label}</p>
                        <p className="font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-sm text-white/40 mb-4">Follow me on socials</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 glass-card rounded-xl text-sm text-white/50 hover:text-white hover:border-primary/30 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-pink-500/30 to-violet-600/30 rounded-3xl blur-lg opacity-20" />
              <div className="relative glass-card rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Send a Message</h3>
                <p className="text-white/40 mb-8">Fill out the form below and I'll respond as soon as possible.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                className="bg-white/[0.03] border-white/10 focus:border-primary h-12 rounded-xl placeholder:text-white/20" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                {...field} 
                                className="bg-white/[0.03] border-white/10 focus:border-primary h-12 rounded-xl placeholder:text-white/20" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project, ideas, or just say hello..." 
                              className="min-h-[150px] bg-white/[0.03] border-white/10 focus:border-primary rounded-xl resize-none placeholder:text-white/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-gradient-to-r from-primary via-pink-500 to-violet-500 hover:opacity-90 text-white rounded-2xl text-base font-medium gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 btn-glow"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
