'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! I'm Mohammad Anas, a Diploma Computer Engineering student at Swaminarayan University, Kalol, who's absolutely obsessed with the intersection of AI and technology. My journey started with a simple question: "What if machines could think like us?" That curiosity has driven me to dive deep into AI fundamentals, Python programming, and the endless possibilities of machine learning.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              But it's not just about the code—it's about the impact. As a Google Student Ambassador, I get to inspire my peers, organize workshops that spark innovation, and build communities where ideas flourish. I'm all about learning by doing, whether it's managing social media campaigns for tech events or exploring the latest AI tools on my own time.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Right now, I'm focused on becoming a future-ready AI professional who can bridge the gap between cutting-edge technology and real-world solutions. I'm open to internships, collaborative projects, and opportunities that let me grow while making a difference. If you're passionate about AI, tech, or building something meaningful, let's connect!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-1 rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 hover:scale-105 transition-transform duration-300">
              <img
                src="/anaspot.jpeg"
                alt="Mohammad Anas Kazi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-400 transition-colors duration-200"
            >
              Let's Build Something Amazing
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;