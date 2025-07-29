import config from '@/config/config';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Image as LucideImage } from 'lucide-react';
import { useState } from 'react';

export default function Galery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const scroll = (direction) => {
    const container = galleryRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Event Section */}
      <section id="galery" className="min-h-screen relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="min-h-screen flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 container mx-auto px-4 pt-10 pb-4"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
              >
                Galery
              </motion.h2>

              {/* Decorative Divider */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-4 pt-4"
              >
                <div className="h-[1px] w-12 bg-rose-200" />
                <LucideImage className="w-5 h-5 text-rose-400" />
                <div className="h-[1px] w-12 bg-rose-200" />
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div 
              ref={galleryRef}
              className="overflow-x-auto"
            > 
              <div className="flex gap-4 p-4">
                {config.galleries.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    // className="group relative flex-shrink-0 w-[300px] cursor-pointer"
                    onClick={() => {
                      setSelectedImage(image);
                      setModalOpen(true);
                    }}
                  >
                    <div className="backdrop-blur-sm bg-white/80 p-2 rounded-xl border border-rose-100/50 shadow-md">
                      <div className="flex items-center justify-center h-[400px] w-[300px] overflow-hidden">
                        <img
                          src={image}
                          alt={`gallery ${index}`}
                          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && selectedImage && (
          <div 
            className="fixed inset-0 bg-black/70 flex justify-center z-50 p-0"
            onClick={() => setModalOpen(false)}
          >
            <div 
              className="max-w-[90vw] max-h-[90vh] overflow-auto flex item-center justify-center overflow-hidden"
            //   onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size gallery"
                className="object-contain w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Decorative Bottom Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>
    </>
  );
}