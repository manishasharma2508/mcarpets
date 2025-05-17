import { motion } from 'framer-motion';
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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Design Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpetDesigns.map((design, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative pb-[75%] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                    <p className="text-sm">{design.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full mx-4">
            <img
              src={carpetDesigns[selectedImage].image}
              alt={carpetDesigns[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 