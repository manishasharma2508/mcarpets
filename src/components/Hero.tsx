import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Manisha Sharma
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
            CARPET DESIGNER
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate carpet designer with expertise in creating unique and elegant designs.
            Specializing in customization and color matching for luxury carpets.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 