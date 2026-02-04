import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Scissors, Sparkles, Heart, ShoppingBag } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Sparkles,
      title: 'Custom Dressmaking',
      description: 'Bespoke designs tailored to your exact measurements and style preferences. From concept to creation, we bring your vision to life.',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      icon: Scissors,
      title: 'Alterations & Repairs',
      description: 'Expert alterations to ensure the perfect fit. We breathe new life into your favorite pieces with precision and care.',
      gradient: 'from-pink-400 to-rose-400',
    },
    {
      icon: Heart,
      title: 'Bridal & Traditional Wear',
      description: 'Create unforgettable moments with exquisite bridal gowns and traditional attire that honor your culture and celebrate your style.',
      gradient: 'from-violet-400 to-purple-400',
    },
    {
      icon: ShoppingBag,
      title: 'Ready-to-Wear Collection',
      description: 'Curated pieces ready for purchase. Each item combines timeless elegance with contemporary flair.',
      gradient: 'from-fuchsia-400 to-pink-400',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-purple-950 mb-4">Our Services</h2>
          <p className="text-purple-700/70 text-lg max-w-2xl mx-auto">
            Comprehensive fashion services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl text-purple-950 mb-4">{service.title}</h3>
                <p className="text-purple-800/70 leading-relaxed">{service.description}</p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>

              {/* Decorative glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-purple-800/80 mb-6">
            Not sure which service you need? Let's discuss your vision.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
