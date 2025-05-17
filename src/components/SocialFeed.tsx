import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const SocialFeed = () => {
  return (
    <section id="social-feed" className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Instagram Feed</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out my latest carpet designs and behind-the-scenes content on Instagram.
            </p>
            <motion.a
              href="https://www.instagram.com/floorcanvas_fbd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-4 text-primary-600 hover:text-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaInstagram className="w-5 h-5" />
              <span>@floorcanvas_fbd</span>
            </motion.a>
          </div>

          <motion.div
            className="w-full aspect-square max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Instagram Feed"
              src="https://www.instagram.com/floorcanvas_fbd/embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.instagram.com/floorcanvas_fbd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              Follow on Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeed; 