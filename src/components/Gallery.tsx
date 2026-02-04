import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1761164920960-2d776a18998c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50JTIwZHJlc3N8ZW58MXx8fHwxNzcwMjI4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Fashion model in elegant dress',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1622079402559-8b9a7fad367c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NzAyMjg0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Luxury fashion photoshoot',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1676132067504-31b08cf62308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBkcmVzcyUyMGRldGFpbHN8ZW58MXx8fHwxNzcwMjI4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Bridal dress details',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1687137113677-f2a9a6c79fab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc3MDIyODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'African fashion model',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1745095034955-1019067b7ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JpbmclMjBzZXdpbmclMjBkZXRhaWxzfGVufDF8fHx8MTc3MDIyODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Tailoring sewing details',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1681633528883-bc217d2e4dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc3MDIyODQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Fashion design studio',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1676132068619-f015a54cee3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGdvd258ZW58MXx8fHwxNzcwMjI4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Elegant wedding gown',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1759711890639-8e2f8c2b7690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBkcmVzcyUyMGZpdHRpbmd8ZW58MXx8fHwxNzcwMjI4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Custom dress fitting',
    },
  ];

  return (
    <>
      <section id="gallery" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-purple-950 mb-4">Gallery & Lookbook</h2>
            <p className="text-purple-700/70 text-lg max-w-2xl mx-auto">
              A showcase of our finest creations and craftsmanship
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 || index === 5 ? 'row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.url)}
              >
                {/* Image */}
                <div className="relative h-full backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/90 rounded-full">
                      <ZoomIn className="w-6 h-6 text-purple-900" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-purple-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
