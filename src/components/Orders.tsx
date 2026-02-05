import { motion } from 'motion/react';
import { ArrowLeft, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OrdersProps {
  onBack: () => void;
}

export default function Orders({ onBack }: OrdersProps) {
  const { orders } = useOrders();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-50 border-yellow-200';
      case 'processing':
        return 'bg-blue-50 border-blue-200';
      case 'shipped':
        return 'bg-purple-50 border-purple-200';
      case 'delivered':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 pt-32 pb-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onBack}
          className="flex items-center gap-2 text-purple-900 hover:text-purple-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Account
        </motion.button>

        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl text-purple-950 mb-2">Your Orders</h1>
          <p className="text-purple-700/70 text-lg">Track and manage your purchases</p>
        </div>

        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/60 rounded-3xl p-12 border border-white/60 text-center"
          >
            <Package className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h2 className="text-2xl text-purple-950 mb-4">No orders yet</h2>
            <p className="text-purple-700/70 mb-6">Start shopping to place your first order.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onBack}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white/60 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                {/* Order Header */}
                <div className={`p-6 border-b border-white/60 ${getStatusColor(order.status)}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-purple-950">Order {order.id}</h3>
                      <p className="text-purple-700/70 text-sm">Placed on {formatDate(order.date)}</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white/60 rounded-full px-4 py-2 w-fit">
                      {getStatusIcon(order.status)}
                      <span className="font-semibold text-purple-900">{getStatusText(order.status)}</span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6 border-b border-white/60">
                  <h4 className="text-lg font-semibold text-purple-950 mb-4">Items</h4>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4 items-start">
                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h5 className="font-semibold text-purple-950">{item.name}</h5>
                          <p className="text-purple-700/70 text-sm">Quantity: {item.quantity}</p>
                          <p className="text-purple-900 font-semibold">GH₵{item.price.toLocaleString('en-GH')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Details & Tracking */}
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-950 mb-4">Order Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-purple-700">
                          <span>Subtotal</span>
                          <span>GH₵{order.total.toLocaleString('en-GH')}</span>
                        </div>
                        <div className="flex justify-between text-purple-700">
                          <span>Shipping</span>
                          <span className="text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between pt-3 border-t border-white/60">
                          <span className="font-semibold text-purple-950">Total</span>
                          <span className="text-2xl font-bold text-purple-950">GH₵{order.total.toLocaleString('en-GH')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tracking */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-950 mb-4">Tracking</h4>
                      <div className="space-y-4">
                        {order.trackingNumber && (
                          <div>
                            <p className="text-purple-700/70 text-sm mb-1">Tracking Number</p>
                            <p className="font-mono text-purple-950 font-semibold">{order.trackingNumber}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-purple-700/70 text-sm mb-1">Estimated Delivery</p>
                          <p className="text-purple-950 font-semibold">{formatDate(order.estimatedDelivery)}</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6">
                          <div className="flex justify-between mb-3">
                            {['pending', 'processing', 'shipped', 'delivered'].map((status) => {
                              const isActive = ['pending', 'processing', 'shipped', 'delivered'].indexOf(status) <= 
                                              ['pending', 'processing', 'shipped', 'delivered'].indexOf(order.status as any);
                              return (
                                <div
                                  key={status}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                    isActive
                                      ? 'bg-purple-600 text-white'
                                      : 'bg-white/60 text-purple-900'
                                  }`}
                                >
                                  {['P', 'R', 'S', 'D'][['pending', 'processing', 'shipped', 'delivered'].indexOf(status)]}
                                </div>
                              );
                            })}
                          </div>
                          <div className="flex gap-1">
                            {[0, 1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className={`flex-1 h-2 rounded-full transition-all ${
                                  i <= ['pending', 'processing', 'shipped', 'delivered'].indexOf(order.status as any)
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                                    : 'bg-white/60'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
