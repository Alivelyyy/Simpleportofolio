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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "contact@encorebot.me",
    href: "mailto:contact@encorebot.me"
  },
  {
    icon: <Disc className="w-5 h-5" />,
    label: "Discord",
    value: "Join Server",
    href: "https://discord.gg/6QwS5BQx"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Remote / Worldwide",
    href: null
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Availability",
    value: "Mon - Sat, 9am - 6pm",
    href: null
  }
];

export default function Contact() {
  const { toast } = useToast();
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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">// GET IN TOUCH</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Intro Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20" />
              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Let's collaborate</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently available for freelance work and exciting new projects. 
                  If you have an idea that needs some creative coding magic, I'd love to hear about it!
                </p>
              </div>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/50 transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-white">{item.value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-4">Follow me on socials</p>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', href: 'https://github.com/teamapexofc' },
                  { name: 'YouTube', href: 'https://www.youtube.com/@apex-teamofc' },
                  { name: 'Discord', href: 'https://discord.gg/6QwS5BQx' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-lg text-sm text-muted-foreground hover:text-white transition-all"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-2xl blur opacity-20" />
              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground mb-8">Fill out the form below and I'll respond as soon as possible.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl placeholder:text-muted-foreground/50" 
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
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                {...field} 
                                className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl placeholder:text-muted-foreground/50" 
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
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project, ideas, or just say hello..." 
                              className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary rounded-xl resize-none placeholder:text-muted-foreground/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white rounded-xl text-base font-medium gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
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
