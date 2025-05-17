import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'QAALEEN CARPETS, NEW DELHI',
      period: 'APRIL 2016 - PRESENT',
      responsibilities: [
        'Hospitality, customization and Collections',
        'Preparing designs for development on nedgraphics and photoshop',
        'Also responsible for colour matching and color placement in carpets',
        'Finalizing dyed yarn for the production to get a perfect final product'
      ]
    },
    {
      company: 'SAMARA CARPETS',
      period: 'JULY 2013 - FEBRUARY 2016',
      responsibilities: [
        'Creating designs for development',
        'Coordination regarding the projects',
        'Color Matching'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Work Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-purple-200"
              >
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {exp.company}
                </h3>
                <p className="text-purple-600 font-medium mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 