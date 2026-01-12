'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on the next big thing? Whether it's an AI project, a tech initiative, or just a conversation about the future of technology, I'm all ears. Let's create something extraordinary together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-purple-400/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-300">Kalol, Gandhinagar, Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-400/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a href="mailto:anaskazi765@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  anaskazi765@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-400/10 p-3 rounded-lg">
                <Linkedin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/anas-kazi-ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  linkedin.com/in/anas-kazi-ai
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-cyan-400 to-purple-600 p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Make Magic Happen</h3>
                <p className="text-gray-300 mb-6">
                  I'm actively seeking internships, collaborative projects, and opportunities to contribute my AI expertise and leadership skills. If you're looking for a passionate, innovative tech enthusiast, let's talk!
                </p>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:anaskazi765@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-400 transition-colors duration-200"
                  >
                    Send Email
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anas-kazi-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block border border-orange-500 text-orange-400 px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-black transition-colors duration-200"
                  >
                    Connect on LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;