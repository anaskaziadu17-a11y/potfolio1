'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Mohammad Anas Saifuddin Kazi</h3>
            <p className="text-purple-400 font-medium">Vibe Coder | AI & Tech Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a href="mailto:anaskazi765@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/anas-kazi-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} Mohammad Anas Saifuddin Kazi. Built with passion and Next.js.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;