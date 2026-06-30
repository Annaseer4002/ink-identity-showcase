import React from 'react';
import { Printer, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Printer className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Brand<span className="text-primary">Print</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Premium printing and branding solutions for businesses of all sizes. 
              Quality prints, fast delivery, and exceptional design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors shadow-sm">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary text-sm transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Business Cards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Large Format Printing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Apparel & Textiles</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Promotional Items</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Brand Identity</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Print Street, Creative District, Design City, 10101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">hello@brandprint.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BrandPrint Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:underline">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
