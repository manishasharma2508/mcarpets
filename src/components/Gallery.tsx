import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const carpetDesigns = [
    {
      title: 'Traditional Persian',
      description: 'Intricate floral patterns with rich colors',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Modern Abstract',
      description: 'Contemporary design with geometric elements',
      image: 'https://images.unsplash.com/photo-1600166516449-ae6bf4d45999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Minimalist Pattern',
      description: 'Simple and elegant repeating motifs',
      image: 'https://images.unsplash.com/photo-1600166528504-d6c56fd8c7d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Collection',
      description: 'Premium designs for high-end interiors',
      image: 'https://images.unsplash.com/photo-1600166490892-f95a8fc4e876?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Contemporary Fusion',
      description: 'Blend of traditional and modern elements',
      image: 'https://images.unsplash.com/photo-1600166634402-7cba6fed8c0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Artistic Expression',
      description: 'Bold and creative carpet designs',
      image: 'https://images.unsplash.com/photo-1600166862715-18d4517b7d4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Design Gallery</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore my collection of unique carpet designs, each crafted with attention to detail and artistic vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpetDesigns.map((design, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative pb-[75%] overflow-hidden">
                  <motion.img
                    src={design.image}
                    alt={design.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.div
                  className="absolute inset-0 flex items-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                    <p className="text-sm text-gray-200">{design.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged image view */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={carpetDesigns[selectedImage].image}
                alt={carpetDesigns[selectedImage].title}
                className="w-full h-auto rounded-lg shadow-2xl"
                layoutId={`gallery-image-${selectedImage}`}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
              >
                <h3 className="text-2xl font-semibold mb-2">{carpetDesigns[selectedImage].title}</h3>
                <p className="text-gray-200">{carpetDesigns[selectedImage].description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 