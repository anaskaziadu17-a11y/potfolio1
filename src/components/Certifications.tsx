'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'Generative AI for Education',
    'JPMorgan Chase – Software Engineering Job Simulation',
    'Generative AI Mastermind',
    'AI Aware',
    'Internshala Student Partner'
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning is my superpower. These certifications represent my commitment to staying ahead in the rapidly evolving tech landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-colors duration-300 flex items-center space-x-4"
            >
              <div className="bg-cyan-400/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-gray-300 font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;