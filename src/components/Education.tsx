'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-colors duration-300 max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-cyan-400/10 p-3 rounded-lg">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Diploma in Computer Engineering</h3>
              <p className="text-cyan-400 font-medium mb-4">Swaminarayan University, Kalol</p>
              <p className="text-gray-400 mb-4">July 2025 – Present</p>
              <p className="text-gray-300">
                Building a rock-solid foundation in Computer Engineering while exploring the frontiers of AI and emerging technologies. My self-directed learning journey includes deep dives into Python programming, machine learning algorithms, and AI ethics. I'm not just studying tech—I'm preparing to shape its future through innovation and responsible development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;