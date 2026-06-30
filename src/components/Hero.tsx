import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-2/3 bg-primary/5 rounded-bl-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-cyan-500/5 rounded-tr-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now accepting bulk orders for 2024
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:leading-[1.1]">
              Elevate Your Brand with <span className="text-primary">Premium Printing</span> Solutions
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              From business cards to large format banners, we deliver high-quality 
              branding and printing services that make your business stand out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-base gap-2">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                View Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {['Ultra High Quality', 'Fast Turnaround', 'Custom Design'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/03d36439-e19e-4fb3-8830-dd39d023e7cd/hero-printing-shop-40fed9f1-1782702325738.webp"
                alt="Modern Printing Shop"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-xl border hidden md:block animate-bounce-subtle">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">10k+</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Projects Delivered</p>
                  <p className="text-xs text-muted-foreground">Worldwide Since 2015</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
