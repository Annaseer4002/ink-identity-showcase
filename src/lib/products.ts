import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isCustom: boolean;
}

const defaultProducts: Product[] = [
    {
      id: '1',
      name: 'Business Cards',
      description: 'Premium business cards with a professional finish.',
      price: '$50',
      image: '/gebeya.webp',
      isCustom: false,
    },
    {
      id: '2',
      name: 'Flyers & Brochures',
      description: 'High-quality flyers and brochures for your marketing needs.',
      price: '$100',
      image: '/gebeya.webp',
      isCustom: false,
    },
    {
      id: '3',
      name: 'Banners & Posters',
      description: 'Large format printing for indoor and outdoor use.',
      price: '$150',
      image: '/gebeya.webp',
      isCustom: false,
    },
    {
      id: '4',
      name: 'Custom Apparel',
      description: 'Branded t-shirts, hoodies, and more.',
      price: '$25',
      image: '/gebeya.webp',
      isCustom: false,
    },
    {
      id: '5',
      name: 'Promotional Items',
      description: 'Pens, mugs, and other promotional products.',
      price: '$10',
      image: '/gebeya.webp',
      isCustom: false,
    },
    {
      id: '6',
      name: 'Stickers & Labels',
      description: 'Custom stickers and labels in any shape or size.',
      price: '$30',
      image: '/gebeya.webp',
      isCustom: false,
    },
];

const PRODUCTS_STORAGE_KEY = 'products';
const WHATSAPP_CONFIG_KEY = 'whatsappConfig';

export const getProducts = (): Product[] => {
  try {
    const storedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (storedProducts) {
      return JSON.parse(storedProducts);
    }
  } catch (error) {
    console.error('Failed to parse products from localStorage', error);
  }
  return defaultProducts;
};

export const saveProducts = (products: Product[]) => {
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  } catch (error) {
    console.error('Failed to save products to localStorage', error);
  }
};

export const addProduct = (product: Omit<Product, 'id' | 'isCustom' | 'image'>): Product => {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    id: uuidv4(),
    isCustom: true,
    image: '/gebeya.webp', // Default image for custom products
  };
  const updatedProducts = [...products, newProduct];
  saveProducts(updatedProducts);
  return newProduct;
};

export const updateProduct = (updatedProduct: Product): Product | undefined => {
  const products = getProducts();
  const productIndex = products.findIndex((p) => p.id === updatedProduct.id);
  if (productIndex > -1) {
    products[productIndex] = updatedProduct;
    saveProducts(products);
    return updatedProduct;
  }
  return undefined;
};

export const deleteProduct = (productId: string) => {
  const products = getProducts();
  const updatedProducts = products.filter((p) => p.id !== productId);
  saveProducts(updatedProducts);
};

export const resetToDefaultProducts = () => {
  saveProducts(defaultProducts);
};

export interface WhatsAppConfig {
  phoneNumber: string;
  messageTemplate: string;
}

export const getWhatsAppConfig = (): WhatsAppConfig => {
    try {
        const storedConfig = localStorage.getItem(WHATSAPP_CONFIG_KEY);
        if(storedConfig) {
            return JSON.parse(storedConfig)
        }
    } catch (error) {
        console.error('Failed to parse whatsapp config from localStorage', error)
    }
    return {
        phoneNumber: '1234567890',
        messageTemplate: 'Hello, I am interested in ordering [Product Name] for [Price].'
    }
}

export const saveWhatsAppConfig = (config: WhatsAppConfig) => {
    try {
        localStorage.setItem(WHATSAPP_CONFIG_KEY, JSON.stringify(config));
    } catch(error) {
        console.error('Failed to save whatsapp config to localStorage', error);
    }
}
