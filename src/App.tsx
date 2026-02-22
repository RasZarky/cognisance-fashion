import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Toaster } from 'sonner';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'login') {
      window.location.href = 'https://cognisance-fashion-shop.web.app/';
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Page Loader */}
      <AnimatePresence>
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30">
        {/* Toast Notifications */}
        <Toaster position="top-right" richColors />
        
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/20 transition-all duration-300 ${
            scrolled ? 'bg-white/90 shadow-2xl' : 'bg-white/70 shadow-lg'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-2xl font-serif tracking-wide text-purple-900"
                >
                  Cognisance Fashion
                </button>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['about', 'services', 'shop', 'gallery', 'testimonials', 'contact', 'login'].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => scrollToSection(item)}
                    className="text-purple-900/80 hover:text-purple-900 transition-colors capitalize"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-4">
                <button
                  className="p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-purple-900" />
                  ) : (
                    <Menu className="w-6 h-6 text-purple-900" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden backdrop-blur-xl bg-white/90 border-t border-white/20"
            >
              <div className="px-4 py-6 space-y-4">
                {['about', 'services', 'shop', 'gallery', 'testimonials', 'contact', 'login'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-purple-900/80 hover:text-purple-900 transition-colors capitalize py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Main Content */}
        <main className="pt-20">
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Services />
          <ProductShowcase />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}