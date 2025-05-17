import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'DIPLOMA IN TEXTILE DESIGNING AND TECHNOLOGY',
      institution: 'GOVERNMENT GIRLS POLYTECHNIC, ALLAHABAD',
      year: '2007 - 2010',
      specialization: 'TEXTILE DESIGNING'
    },
    {
      degree: 'MASTER OF ARTS',
      institution: 'RAJARSHI TANDON OPEN UNIVERSITY, ALLAHABAD',
      year: '2015 - 2016',
      specialization: 'SUBJECT- EDUCATION'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                <p className="text-purple-600 font-medium">{edu.specialization}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 