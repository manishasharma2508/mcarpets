import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaBuilding, FaUniversity, FaAward, FaCertificate } from 'react-icons/fa';

const Timeline = () => {
  const timelineData = [
    {
      type: 'experience',
      year: '2016-Present',
      title: 'Carpet Designer',
      institution: 'Qaaleen',
      location: 'New Delhi Area, India',
      description: 'Leading carpet design projects and creating innovative designs for over 9 years. Specializing in contemporary and traditional carpet patterns.',
      icon: <FaBriefcase />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'education',
      year: '2015-2016',
      title: 'Master of Arts',
      institution: 'Rajarshi Tandon Open University',
      location: 'Allahabad',
      description: 'Advanced studies in Arts with focus on design theory and practices',
      icon: <FaGraduationCap />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'experience',
      year: '2013-2016',
      title: 'Designer',
      institution: 'Samara Carpets Pvt. Ltd.',
      location: 'Bhadohi',
      description: 'Worked as a carpet designer for 2 years and 8 months, developing design solutions and managing client requirements',
      icon: <FaBuilding />,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      type: 'education',
      year: '2007-2010',
      title: 'Diploma in Textile Designing and Technology',
      institution: 'Government Girls Polytechnic',
      location: 'Allahabad',
      description: 'Specialized in Textile Designing with comprehensive study of design techniques and technology',
      icon: <FaUniversity />,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Over 10 years of experience in carpet design, backed by strong educational foundation in textile design and technology.
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />

            {/* Timeline Items */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow mt-8"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-sm font-semibold text-gray-500 mb-2">{item.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <div className="text-primary-600 font-medium mb-1">{item.institution}</div>
                    <div className="text-sm text-gray-500 mb-2">{item.location}</div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    
                    {/* Type Badge */}
                    <div className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-3
                      ${item.type === 'education' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                      }
                    `}>
                      {item.type === 'education' ? <FaGraduationCap className="mr-1" /> : <FaBriefcase className="mr-1" />}
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 