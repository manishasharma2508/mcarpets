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
          <div className="text-center text-gray-600 mb-12 max-w-3xl mx-auto space-y-4">
            <p className="leading-relaxed">
              As a passionate Carpet and Textile Designer with expertise in both traditional and contemporary designs, 
              I bring creativity and technical precision to every project. My journey in this field has been driven by 
              a deep appreciation for artisanal craftsmanship combined with modern design technologies.
            </p>
            <p className="leading-relaxed">
              With a strong foundation in digital design tools and traditional techniques, I specialize in creating 
              unique carpet patterns that blend aesthetic beauty with practical functionality. My work ranges from 
              intricate Persian-inspired designs to modern, minimalist patterns, always focusing on quality and 
              attention to detail.
            </p>
            <p className="leading-relaxed">
              I believe in collaborative innovation and have successfully led design teams in creating collections 
              that meet both artistic vision and market demands. My experience includes working with various materials, 
              techniques, and international design standards to create carpets that enhance any space they occupy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ x: 3 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="text-xl text-primary-500 flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-medium text-gray-800 mb-1">{skill.name}</h4>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <motion.div
                              className="h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 flex-shrink-0 w-8 text-right">
                          {skill.level}%
                        </span>
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