'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Technology',
      skills: ['Python Programming', 'AI Fundamentals', 'Machine Learning Basics', 'Data Analysis'],
      color: 'purple'
    },
    {
      title: 'Digital Marketing',
      skills: ['Social Media Strategy', 'Content Creation', 'Community Management', 'Digital Campaigns'],
      color: 'orange'
    },
    {
      title: 'Leadership & Soft Skills',
      skills: ['Team Collaboration', 'Event Organization', 'Public Speaking', 'Problem Solving'],
      color: 'blue'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Google Workspace', 'Social Media Platforms', 'Learning Management Systems', 'Creative Tools'],
      color: 'green'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-8 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 text-${category.color}-400`}>{category.title}</h3>
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 mt-1 md:mt-0 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm md:text-base leading-relaxed">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;