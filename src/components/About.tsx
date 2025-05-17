import { motion } from 'framer-motion';
import { 
  FaPencilRuler, 
  FaTools, 
  FaPalette, 
  FaLayerGroup,
  FaUsers,
  FaUserTie,
  FaMicrosoft,
  FaPhotoVideo
} from 'react-icons/fa';
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator,
  SiAutodesk
} from 'react-icons/si';

const About = () => {
  const skills = [
    {
      category: "Design Tools",
      items: [
        { name: "Ned Graphics", icon: <FaPencilRuler />, level: 95 },
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, level: 90 },
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator />, level: 85 },
        { name: "Microsoft Office", icon: <FaMicrosoft />, level: 88 }
      ]
    },
    {
      category: "Technical Skills",
      items: [
        { name: "Carpet Design", icon: <FaLayerGroup />, level: 95 },
        { name: "Textile Design", icon: <FaPalette />, level: 92 },
        { name: "Carpet Installation", icon: <FaTools />, level: 85 },
        { name: "Digital Design", icon: <FaPhotoVideo />, level: 88 }
      ]
    },
    {
      category: "Management Skills",
      items: [
        { name: "Team Management", icon: <FaUsers />, level: 90 },
        { name: "Team Leadership", icon: <FaUserTie />, level: 88 },
        { name: "Team Coordination", icon: <SiAutodesk />, level: 92 }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">About Me</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            I believe a career in Carpet & Textile Industry would offer me a lot of opportunities to
            apply my problem solving and people skills to real life situations and make a difference
            to the industry around me.
          </p>

          <div className="space-y-16">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <motion.div
                          className="text-4xl text-primary-500"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <h4 className="text-lg font-medium text-gray-800">{skill.name}</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <motion.div
                            className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 