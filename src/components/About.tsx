import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { icon: Award, value: '12+', label: 'Years of Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Heart, value: '2000+', label: 'Custom Designs' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-purple-950 mb-4">Meet Your Seamstress</h2>
          <p className="text-purple-700/70 text-lg max-w-2xl mx-auto">
            Crafting elegance, one stitch at a time — inspired by Ghanaian heritage
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/40 border border-white/60 p-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGVzaWduZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MDIyODM2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fashion Designer"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-xl">
              <h3 className="text-3xl text-purple-950 mb-6">A Story of Passion & Precision</h3>
              
              <div className="space-y-4 text-purple-800/80 leading-relaxed">
                <p>
                  With over a decade of experience in bespoke fashion, I've dedicated my life to 
                  the art of creating garments that tell stories. Every stitch, every fold, every 
                  detail is crafted with meticulous care and unwavering passion.
                </p>
                <p>
                  From elegant evening gowns to timeless bridal wear, my work reflects a deep 
                  understanding of fabric, form, and the unique beauty of every individual who 
                  trusts me with their vision.
                </p>
                <p>
                  At Cognisance Fashion, we don't just make clothes—we celebrate Ghanaian heritage, create confidence, and honor true craftsmanship.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl text-purple-950 mb-2">{stat.value}</div>
              <div className="text-purple-700/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
