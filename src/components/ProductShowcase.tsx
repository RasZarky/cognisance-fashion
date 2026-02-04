import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
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

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Elegant Evening Gown',
      price: 450,
      category: 'evening',
      image: 'https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbmluZyUyMGdvd258ZW58MXx8fHwxNzcwMTkwMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Luxury Bridal Gown',
      price: 1500,
      category: 'bridal',
      image: 'https://images.unsplash.com/photo-1747847471528-7b95ea7a4c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmlkYWwlMjB3ZWRkaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzcwMjI4NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Ankara Print Dress',
      price: 350,
      category: 'traditional',
      image: 'https://images.unsplash.com/photo-1760907949889-eb62b7fd9f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJpbnQlMjBhbmthcmElMjBkcmVzc3xlbnwxfHx8fDE3NzAyMjg0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      name: 'Custom Tailored Blazer',
      price: 400,
      category: 'casual',
      image: 'https://images.unsplash.com/photo-1592878849122-facb97520f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB0YWlsb3JlZCUyMGJsYXplcnxlbnwxfHx8fDE3NzAyMjg0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      name: 'Cocktail Party Dress',
      price: 380,
      category: 'evening',
      image: 'https://images.unsplash.com/photo-1628686560823-010afb10b440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHBhcnR5JTIwZHJlc3N8ZW58MXx8fHwxNzcwMTE5NzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      name: 'Traditional Attire',
      price: 420,
      category: 'traditional',
      image: 'https://images.unsplash.com/photo-1705910783045-e920df81f684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFmcmljYW4lMjBhdHRpcmV8ZW58MXx8fHwxNzcwMjI4NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'evening', label: 'Evening Wear' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'casual', label: 'Casual' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Show full list only for logged-in users
  // Guests see a limited preview of the first 3 items and are prompted to login
  const { loggedIn } = useAuth();
  const displayedProducts = loggedIn ? filteredProducts : filteredProducts.slice(0, 3);

  return (
    <section id="shop" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl text-purple-950 mb-4">Our Collection</h2>
          <p className="text-purple-700/70 text-lg max-w-2xl mx-auto">
            Discover exquisite pieces crafted with precision and passion
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg scale-105'
                  : 'bg-white/60 text-purple-900 border-white/60 hover:scale-105 hover:shadow-lg'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              {/* Product Card */}
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl overflow-hidden border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors" aria-label="Quick view">
                      <Eye className="w-5 h-5 text-purple-900" />
                    </button>
                    <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors" aria-label="Add to cart">
                      <ShoppingCart className="w-5 h-5 text-purple-900" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl text-purple-950 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-purple-900">GH₵{product.price.toLocaleString('en-GH')}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Login prompt for guests */}
        {!loggedIn && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="max-w-xl mx-auto backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-xl">
              <h3 className="text-xl text-purple-950 mb-2">Login to view our full collection</h3>
              <p className="text-purple-800/70 mb-4">Members get access to exclusive listings and pricing.</p>
              <button
                onClick={() => { const el = document.getElementById('login'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
              >
                Login
              </button>
            </div>
          </motion.div>
        )}

        {/* Payment Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-xl max-w-3xl mx-auto"
        >
          <p className="text-purple-800/80 mb-4">
            Love what you see? Get in touch to place your order or schedule a custom consultation.
          </p>
          <p className="text-sm text-purple-700/60">
            Secure payment options available via Mobile Money (MTN/Vodafone), Paystack & Stripe
          </p>
        </motion.div>
      </div>
    </section>
  );
}
