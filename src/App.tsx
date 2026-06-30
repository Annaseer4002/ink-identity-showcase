import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import AdminPanel from './components/AdminPanel';
import { getProducts, Product, getWhatsAppConfig, WhatsAppConfig } from './lib/products';

function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [whatsAppConfig, setWhatsAppConfig] = useState<WhatsAppConfig>({ phoneNumber: '', messageTemplate: '' });

  const refreshProducts = () => {
    setProducts(getProducts());
    setWhatsAppConfig(getWhatsAppConfig());
  }

  useEffect(() => {
    refreshProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar onAdminClick={() => setAdminOpen(true)} />
      <main>
        <Hero />
        <Services products={products} whatsAppConfig={whatsAppConfig} />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
      <AdminPanel open={adminOpen} onOpenChange={setAdminOpen} onProductsChange={refreshProducts} />
    </div>
  );
}

export default App;
