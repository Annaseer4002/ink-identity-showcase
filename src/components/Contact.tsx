import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -z-10 w-full h-1/2 bg-primary/5 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you need a quick quote or a complete branding overhaul, 
                our team is here to help. Reach out to us via any of the channels below.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567', detail: 'Mon-Fri, 9am-6pm' },
                { icon: MessageSquare, label: 'WhatsApp', value: '+1 (555) 987-6543', detail: 'Instant Support' },
                { icon: Mail, label: 'Email', value: 'hello@brandprint.com', detail: '24/7 Response' },
                { icon: MapPin, label: 'Visit Us', value: '123 Print Street, Design City', detail: 'Showroom & Pickup' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-lg font-bold">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background p-8 md:p-10 rounded-2xl shadow-2xl border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <select id="service" className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option>Business Cards</option>
                  <option>Large Format Printing</option>
                  <option>Apparel Printing</option>
                  <option>Promotional Items</option>
                  <option>Brand Identity</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px] resize-none" required />
              </div>
              <Button type="submit" className="w-full h-12 text-base gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
