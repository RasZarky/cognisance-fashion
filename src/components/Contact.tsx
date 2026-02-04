import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'custom-dressmaking',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'custom-dressmaking',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/233242650165?text=Hello%20Cognisance%20Fashion!', '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-purple-950 mb-4">Get In Touch</h2>
          <p className="text-purple-700/70 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something beautiful together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-purple-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all text-purple-900"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-purple-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all text-purple-900"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-purple-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all text-purple-900"
                  placeholder="+233 24 265 0165"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-purple-900 mb-2">
                  Type of Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all text-purple-900"
                >
                  <option value="custom-dressmaking">Custom Dressmaking</option>
                  <option value="alterations">Alterations & Repairs</option>
                  <option value="bridal">Bridal & Traditional Wear</option>
                  <option value="ready-to-wear">Ready-to-Wear</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-purple-900 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all text-purple-900 resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* WhatsApp Quick Contact */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-green-400/80 to-green-600/80 rounded-3xl p-8 border border-white/60 shadow-2xl text-white">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-2">Quick Contact</h3>
              <p className="mb-6 text-white/90">
                Get instant responses via WhatsApp
              </p>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-white text-green-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Contact Details */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-2xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-purple-950 mb-1">Phone</h4>
                  <p className="text-purple-800/70">+233 24 265 0165</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-purple-950 mb-1">Email</h4>
                  <p className="text-purple-800/70">info@cognisancefashion.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-purple-950 mb-1">Location</h4>
                  <p className="text-purple-800/70">Sunyani, Ghana (opposite Cocobod)</p>
                  <p className="text-purple-800/70 text-sm mt-1">Available by appointment</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-2xl">
              <h3 className="text-2xl text-purple-950 mb-4">Business Hours</h3>
              <div className="space-y-2 text-purple-800/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
