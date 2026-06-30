import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Product, WhatsAppConfig } from '../lib/products';

interface ServicesProps {
  products: Product[];
  whatsAppConfig: WhatsAppConfig;
}

const Services = ({ products, whatsAppConfig }: ServicesProps) => {

  const handleWhatsAppOrder = (product: Product) => {
    const message = whatsAppConfig.messageTemplate
      .replace('[Product Name]', product.name)
      .replace('[Price]', product.price);
    const whatsappUrl = `https://wa.me/${whatsAppConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Comprehensive Branding Services</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide a wide range of printing and branding solutions to help your business 
            look professional and stay memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-md">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-3 text-base pt-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-4">
                  <p className="font-bold text-lg">{product.price}</p>
                  <Button className="w-full" onClick={() => handleWhatsAppOrder(product)}>
                    <MessageCircle className="mr-2 h-4 w-4" /> Order via WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
