import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { Product, getProducts, addProduct, updateProduct, deleteProduct, resetToDefaultProducts, getWhatsAppConfig, saveWhatsAppConfig, WhatsAppConfig } from '../lib/products';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { X, Edit, Trash2, Plus } from 'lucide-react';

interface AdminPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProductsChange: () => void;
}

const ADMIN_PASSWORD = 'admin123'; // Default password

export default function AdminPanel({ open, onOpenChange, onProductsChange }: AdminPanelProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [whatsAppConfig, setWhatsAppConfig] = useState<WhatsAppConfig>({ phoneNumber: '', messageTemplate: ''});
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (open) {
      setProducts(getProducts());
      setWhatsAppConfig(getWhatsAppConfig());
    }
  }, [open]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      toast.success('Logged in successfully');
    } else {
      toast.error('Incorrect password');
    }
  };

  const handleSaveSettings = () => {
    saveWhatsAppConfig(whatsAppConfig);
    onProductsChange();
    toast.success('Settings saved');
  };

  const handleReset = () => {
    resetToDefaultProducts();
    setProducts(getProducts());
    onProductsChange();
    toast.success('Products have been reset to default.');
  };

  const handleDelete = (id: string) => {
    deleteProduct(id);
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    onProductsChange();
    toast.success('Product deleted');
  };

  const handleSaveProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = formData.get('price') as string;

    if (editingProduct) {
      const updated: Product = { ...editingProduct, name, description, price };
      updateProduct(updated);
      setProducts(products.map(p => p.id === updated.id ? updated : p));
      toast.success('Product updated');
    } else {
      const newProduct = addProduct({ name, description, price });
      setProducts([...products, newProduct]);
      toast.success('Product added');
    }
    setEditingProduct(null);
    onProductsChange();
    e.currentTarget.reset();
  };

  if (!loggedIn) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Login</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <DialogFooter>
            <Button onClick={handleLogin}>Login</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Admin Panel</DialogTitle>
        </DialogHeader>
        <div className="grid gap-8 py-4">
          {/* WhatsApp Settings */}
          <div>
            <h3 className="text-lg font-medium mb-4">WhatsApp Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
                <Input id="whatsapp-number" value={whatsAppConfig.phoneNumber} onChange={e => setWhatsAppConfig({...whatsAppConfig, phoneNumber: e.target.value})} />
              </div>
              <div>
                <Label htmlFor="whatsapp-template">Message Template</Label>
                <Input id="whatsapp-template" value={whatsAppConfig.messageTemplate} onChange={e => setWhatsAppConfig({...whatsAppConfig, messageTemplate: e.target.value})} />
              </div>
            </div>
            <div className="flex justify-end mt-4">
                 <Button onClick={handleSaveSettings}>Save Settings</Button>
            </div>
          </div>

          {/* Product Management */}
          <div>
            <h3 className="text-lg font-medium mb-4">Product Management</h3>
            <form onSubmit={handleSaveProduct} className="grid grid-cols-3 gap-4 items-end mb-6">
              <div className="col-span-3 sm:col-span-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={editingProduct?.name} required />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" defaultValue={editingProduct?.price} required />
              </div>
               <div className="col-span-3">
                <Label htmlFor="description">Description</Label>
                <Input id="description" name="description" defaultValue={editingProduct?.description} required />
              </div>
              <div className="col-span-3 flex justify-end gap-2">
                {editingProduct && <Button type="button" variant="ghost" onClick={() => setEditingProduct(null)}>Cancel</Button>}
                <Button type="submit">{editingProduct ? 'Update Product' : 'Add Product'}</Button>
              </div>
            </form>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map(p => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell>{p.price}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => setEditingProduct(p)}><Edit className="h-4 w-4" /></Button>
                        {p.isCustom && <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)}><Trash2 className="h-4 w-4" /></Button>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-end mt-4">
                <Button variant="destructive" onClick={handleReset}>Reset to Default Products</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
