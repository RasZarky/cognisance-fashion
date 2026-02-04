import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram, Facebook, Twitter, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/cognisancefashion',
      color: 'hover:text-pink-400',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/cognisancefashion',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/cognisancefashion',
      color: 'hover:text-sky-400',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/233242650165',
      color: 'hover:text-green-400',
    },
  ];

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Shop', id: 'shop' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-transparent to-purple-50/50 border-t border-purple-200/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-purple-950 mb-4">Cognisance Fashion</h3>
            <p className="text-purple-800/70 mb-6 leading-relaxed">
              Where timeless elegance meets modern craftsmanship. Crafting bespoke fashion excellence in Ghana.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={`p-3 backdrop-blur-xl bg-white/60 rounded-full border border-white/60 text-purple-900 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-purple-950 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-purple-800/70 hover:text-purple-900 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-purple-950 mb-4">Our Services</h4>
            <ul className="space-y-3 text-purple-800/70">
              <li>Custom Dressmaking</li>
              <li>Alterations & Repairs</li>
              <li>Bridal & Traditional Wear</li>
              <li>Ready-to-Wear Collection</li>
              <li>Personal Styling</li>
              <li>Fashion Consultation</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-purple-950 mb-4">Get In Touch</h4>
            <div className="space-y-3 text-purple-800/70">
              <p>+233 24 265 0165</p>
              <p>info@cognisancefashion.com</p>
              <p>Sunyani, Ghana (opposite Cocobod)</p>
              <div className="pt-4">
                <p className="text-sm">Monday - Friday: 9AM - 6PM</p>
                <p className="text-sm">Saturday: 10AM - 4PM</p>
                <p className="text-sm">Sunday: By Appointment</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-purple-200/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-purple-800/70">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} Cognisance Fashion. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 fill-pink-400 text-pink-400 animate-pulse" /> for fashion lovers
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
