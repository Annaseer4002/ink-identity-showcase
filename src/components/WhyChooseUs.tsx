import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, HeartHandshake, Award, Truck } from 'lucide-react';

const features = [
  {
    title: 'Rapid Turnaround',
    description: 'Most orders processed and ready within 24-48 hours without compromising quality.',
    icon: Zap,
    color: 'text-yellow-500'
  },
  {
    title: 'Guaranteed Quality',
    description: 'We use premium materials and state-of-the-art printing technology for flawless results.',
    icon: ShieldCheck,
    color: 'text-green-500'
  },
  {
    title: '24/7 Support',
    description: 'Our team is always available to help you with design choices or order tracking.',
    icon: Clock,
    color: 'text-blue-500'
  },
  {
    title: 'Personalized Service',
    description: 'We treat every project as unique, providing custom solutions tailored to your brand.',
    icon: HeartHandshake,
    color: 'text-red-500'
  },
  {
    title: 'Expert Design',
    description: 'Professional designers on-site to help bring your vision to life.',
    icon: Award,
    color: 'text-purple-500'
  },
  {
    title: 'Global Shipping',
    description: 'Fast and reliable shipping to your doorstep, no matter where you are.',
    icon: Truck,
    color: 'text-cyan-500'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Why Businesses Trust <span className="text-primary">BrandPrint</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              With over a decade of experience in the printing industry, we've helped 
              thousands of businesses build their physical presence through high-quality 
              branding materials.
            </p>
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-8">
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold">15k+</p>
                <p className="text-sm text-muted-foreground">Orders Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold">12+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
