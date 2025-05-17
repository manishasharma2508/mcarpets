import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      text: '+91 7355590597',
      href: 'tel:+917355590597'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      text: 'manishasharma.sharma02@gmail.com',
      href: 'mailto:manishasharma.sharma02@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      text: 'New Delhi, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: '#',
      label: 'Instagram'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-gray-600 hover:text-purple-600 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {info.icon}
                    <span>{info.text}</span>
                  </motion.a>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 