import { motion } from 'framer-motion';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Manisha Sharma' },
    { label: 'Birth date', value: '25/8/1990' },
    { label: 'Gender', value: 'Female' },
    { label: 'Residence', value: 'Allahabad' },
    { label: 'Nationality', value: 'Indian' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe a career in Carpet & Textile Industry would offer me a lot of opportunities to
                apply my problem solving and people skills to real life situations and make a difference
                to the industry around me. Working on projects of varied scope and across different sectors
                would keep me excited and motivated to deliver my best as well as continuously enhance my worth.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                <div className="grid grid-cols-1 gap-3">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <span className="font-medium text-gray-700 w-32">{info.label}:</span>
                      <span className="text-gray-600">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">• Good Learner</li>
                <li className="text-gray-600">• Punctuality</li>
                <li className="text-gray-600">• Self Discipline</li>
                <li className="text-gray-600">• Spirit of Team Work</li>
                <li className="text-gray-600">• Color Matching Expertise</li>
                <li className="text-gray-600">• Design Development</li>
                <li className="text-gray-600">• Project Coordination</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 