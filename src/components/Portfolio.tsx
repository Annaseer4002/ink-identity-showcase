import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Lumina Tech Branding',
    category: 'Full Identity',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Organic Food Pack',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1586075010682-243e9945534f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Urban Wear Collection',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Creative Minds Expo',
    category: 'Large Format',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Coffee House Promo',
    category: 'Promotional',
    image: 'https://images.unsplash.com/photo-1559056191-7417f245847e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Nexus Corp Stationary',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Recent Work</h2>
            <p className="text-muted-foreground text-lg">
              Explore some of our favorite projects where we helped businesses 
              transform their ideas into tangible, high-quality branding materials.
            </p>
          </div>
          <div className="flex gap-4">
            {['All', 'Print', 'Apparel', 'Branding'].map((filter, i) => (
              <button 
                key={filter}
                className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                  i === 0 ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-muted border-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-sm font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </p>
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
