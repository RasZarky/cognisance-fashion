import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartProps {
  onBack: () => void;
}

export default function Cart({ onBack }: CartProps) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 pt-32 pb-20 flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onBack}
            className="flex items-center gap-2 text-purple-900 hover:text-purple-600 transition-colors mb-8 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </motion.button>

          <ShoppingBag className="w-20 h-20 text-purple-200 mx-auto mb-6" />
          <h2 className="text-4xl text-purple-950 mb-4">Your cart is empty</h2>
          <p className="text-purple-700/70 text-lg mb-8">Start adding products to your cart to get started.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onBack}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all"
          >
            Continue Shopping
          </motion.button>
        </div>
      </motion.div>
    );
  }

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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl text-purple-950 mb-8">Shopping Cart</h1>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/60 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                {/* Item Image */}
                <div className="w-32 h-32 sm:w-24 sm:h-24 lg:w-40 lg:h-40 flex-shrink-0 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-grow w-full sm:w-auto">
                  <h3 className="text-lg sm:text-xl text-purple-950 font-semibold">{item.name}</h3>
                  <p className="text-xl sm:text-2xl text-purple-900 font-semibold mt-2">GH₵{item.price.toLocaleString('en-GH')}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 bg-white/60 rounded-lg p-2 order-3 sm:order-none">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-white rounded transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4 text-purple-900" />
                  </button>
                  <span className="w-8 text-center text-purple-900 font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-white rounded transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4 text-purple-900" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right w-24 order-2 sm:order-none">
                  <p className="text-purple-700/60 text-sm mb-1 hidden sm:block">Subtotal</p>
                  <p className="text-lg sm:text-xl text-purple-950 font-semibold">GH₵{(item.price * item.quantity).toLocaleString('en-GH')}</p>
                </div>

                {/* Remove Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors order-1 sm:order-none"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 sticky top-32 space-y-6">
              <h2 className="text-2xl text-purple-950 font-semibold">Order Summary</h2>

              <div className="space-y-3 py-4 border-y border-white/60">
                <div className="flex justify-between text-purple-700">
                  <span>Subtotal</span>
                  <span>GH₵{getTotalPrice().toLocaleString('en-GH')}</span>
                </div>
                <div className="flex justify-between text-purple-700">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-purple-700">
                  <span>Tax</span>
                  <span>GH₵0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className="text-purple-950 font-semibold text-lg">Total</span>
                <span className="text-3xl text-purple-950 font-bold">GH₵{getTotalPrice().toLocaleString('en-GH')}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
              >
                Checkout
              </motion.button>

              <button
                onClick={clearCart}
                className="w-full px-6 py-2 text-purple-900 hover:bg-white/60 rounded-2xl transition-colors font-semibold"
              >
                Clear Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
