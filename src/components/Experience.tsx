'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Google Student Ambassador',
      period: 'Aug 2025 – Present',
      description: [
        'Building student tech community',
        'Organizing workshops and awareness sessions on Google technologies',
        'Promoting leadership, collaboration, and innovation among students'
      ]
    },
    {
      title: 'Social Media Manager – CodeFest 2K25',
      period: 'Nov 2025 – Present',
      description: [
        'Managing social media strategy for the event',
        'Creating pre-event, live, and post-event content',
        'Increasing event visibility and student engagement'
      ]
    },
    {
      title: 'Internshala Student Program',
      period: 'Oct 2025 – Present',
      description: [
        'Learning industry-ready skills',
        'Professional communication and career preparation',
        'Building foundation for future opportunities'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                <span className="text-purple-400 font-medium">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;