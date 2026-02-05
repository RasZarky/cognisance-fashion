import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useMemo } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useAuth } from '../context/AuthContext';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface MemberShopProps {
  onSelectProduct?: (product: Product) => void;
}

export default function MemberShop({ onSelectProduct }: MemberShopProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [query, setQuery] = useState('');
  const { loggedIn } = useAuth();

  // If not logged in, send user to login section
  if (!loggedIn) {
    const el = document.getElementById('login');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const products: Product[] = [
    { id: 1, name: 'Elegant Evening Gown', price: 450, category: 'evening', image: 'https://images.unsplash.com/photo-1763336016192-c7b62602e993?q=80&w=1080' },
    { id: 2, name: 'Luxury Bridal Gown', price: 1500, category: 'bridal', image: 'https://images.unsplash.com/photo-1747847471528-7b95ea7a4c39?q=80&w=1080' },
    { id: 3, name: 'Ankara Print Dress', price: 350, category: 'traditional', image: 'https://images.unsplash.com/photo-1760907949889-eb62b7fd9f75?q=80&w=1080' },
    { id: 4, name: 'Custom Tailored Blazer', price: 400, category: 'casual', image: 'https://images.unsplash.com/photo-1592878849122-facb97520f9e?q=80&w=1080' },
    { id: 5, name: 'Cocktail Party Dress', price: 380, category: 'evening', image: 'https://images.unsplash.com/photo-1628686560823-010afb10b440?q=80&w=1080' },
    { id: 6, name: 'Traditional Attire', price: 420, category: 'traditional', image: 'https://images.unsplash.com/photo-1705910783045-e920df81f684?q=80&w=1080' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'evening', label: 'Evening' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'casual', label: 'Casual' },
  ];

  const filtered = useMemo(() => {
    const byCat = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);
    if (!query.trim()) return byCat;
    return byCat.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  }, [products, selectedCategory, query]);

  return (
    <section id="member-shop" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl text-purple-950 mb-4">Members' Collection</h2>
          <p className="text-purple-700/70">Browse by category or search to find exactly what you need.</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex gap-2">
            {categories.map(c => (
              <button key={c.id} onClick={() => setSelectedCategory(c.id)} className={`px-4 py-2 rounded-full ${selectedCategory === c.id ? 'bg-purple-900 text-white' : 'bg-white/60 text-purple-900'}`}>
                {c.label}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-1/3">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." className="w-full px-4 py-3 rounded-xl border border-white/60 backdrop-blur-xl" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="backdrop-blur-xl bg-white/60 rounded-3xl overflow-hidden border border-white/60 shadow-xl p-4 cursor-pointer hover:shadow-2xl transition-shadow" onClick={() => onSelectProduct?.(product)}>
              <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
                <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg text-purple-950 mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-purple-900">GH₵{product.price.toLocaleString('en-GH')}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm">Enquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
