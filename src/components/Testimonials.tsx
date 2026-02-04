import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ama Mensah',
      role: 'Bride',
      content: 'My wedding dress was absolutely stunning! The attention to detail and the perfect fit made me feel like a queen on my special day. I couldn\'t have asked for a better experience at Cognisance Fashion.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Kofi Asamoah',
      role: 'Fashion Enthusiast',
      content: 'I\'ve been a client for over 3 years now, and every piece has exceeded my expectations. The craftsmanship is impeccable, and the designs always reflect beautiful Ghanaian-inspired patterns. Highly recommend!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Esi Owusu',
      role: 'Corporate Executive',
      content: 'The custom blazers and professional attire I ordered have transformed my wardrobe. The quality is exceptional, and the fit is perfect. Thank you for making me look and feel confident!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Abena Boateng',
      role: 'Event Planner',
      content: 'From Kente-inspired traditional wear to modern evening gowns, every outfit I\'ve gotten has been a masterpiece. The creativity and skill are unmatched.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Kwame Baah',
      role: 'Business Owner',
      content: 'Working with Cognisance Fashion has been an absolute pleasure. The professionalism, the quality, and the passion for the craft are evident in every stitch. Simply the best!',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-purple-950 mb-4">What Our Clients Say</h2>
          <p className="text-purple-700/70 text-lg max-w-2xl mx-auto">
            Stories from those who trusted us with their style
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative backdrop-blur-xl bg-white/60 rounded-3xl p-8 md:p-12 border border-white/60 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-20">
              <Quote className="w-16 h-16 text-purple-600" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-purple-900 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <div className="text-xl text-purple-950 mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-purple-700/70">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 backdrop-blur-xl bg-white/80 rounded-full border border-white/60 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-purple-900" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'bg-purple-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 backdrop-blur-xl bg-white/80 rounded-full border border-white/60 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-purple-900" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-2xl opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
