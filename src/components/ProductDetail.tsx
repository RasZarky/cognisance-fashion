import { motion } from 'motion/react';
import { ShoppingCart, ArrowLeft, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    toast.success(`${product.name} added to cart!`);
    setQuantity(1);
  };

  const handleQuantityChange = (value: number) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onBack}
          className="flex items-center gap-2 text-purple-900 hover:text-purple-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </motion.button>

        {/* Product Detail Container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/60 rounded-3xl overflow-hidden border border-white/60 shadow-xl p-8"
          >
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm mb-4 capitalize">
                {product.category}
              </span>
              <h1 className="text-4xl lg:text-5xl text-purple-950 mb-4">{product.name}</h1>
              <p className="text-purple-700/70 text-lg">
                {product.description || 'Exquisite piece crafted with precision and passion. Perfect for any occasion.'}
              </p>
            </div>

            {/* Price */}
            <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/60">
              <p className="text-purple-700/60 text-sm mb-2">Price</p>
              <h2 className="text-4xl text-purple-900 font-semibold">GH₵{product.price.toLocaleString('en-GH')}</h2>
            </div>

            {/* Quantity Selector */}
            <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/60">
              <p className="text-purple-700/60 text-sm mb-4">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-2 bg-white/60 rounded-full hover:bg-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-5 h-5 text-purple-900" />
                </button>
                <span className="text-2xl text-purple-900 w-12 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-2 bg-white/60 rounded-full hover:bg-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-5 h-5 text-purple-900" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </motion.button>

            {/* Additional Info */}
            <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/60 space-y-3">
              <p className="text-purple-900 font-semibold">About this item</p>
              <ul className="space-y-2 text-purple-700/70 text-sm">
                <li>✓ Premium quality materials</li>
                <li>✓ Expert craftsmanship</li>
                <li>✓ Secure payment options</li>
                <li>✓ Fast and reliable delivery</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
