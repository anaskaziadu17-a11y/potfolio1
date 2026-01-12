'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Learning Journey',
      description: 'A comprehensive exploration of artificial intelligence through self-study, including Python implementations of machine learning algorithms, neural networks, and AI ethics discussions. This ongoing project showcases my dedication to mastering AI fundamentals.',
      tech: ['Python', 'TensorFlow', 'Jupyter Notebook', 'AI Ethics'],
      status: 'Ongoing Learning Project',
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Tech Community Builder',
      description: 'As Google Student Ambassador, I\'ve built and nurtured a thriving tech community of 500+ students. Organized 15+ workshops, hackathons, and innovation challenges that have sparked countless tech careers and collaborations.',
      tech: ['Community Management', 'Event Planning', 'Google Technologies', 'Leadership'],
      status: 'Community Impact',
      links: { github: '#', demo: '#' }
    },
    {
      title: 'CodeFest 2K25 Digital Campaign',
      description: 'Managed end-to-end social media strategy for CodeFest 2K25, creating viral content that reached 10,000+ impressions and drove 40% increase in event registrations. Transformed technical concepts into engaging, accessible narratives.',
      tech: ['Social Media Strategy', 'Content Creation', 'Analytics', 'Digital Marketing'],
      status: 'Completed Campaign',
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Generative AI Exploration',
      description: 'Deep dive into generative AI technologies, experimenting with prompt engineering, AI-powered content creation, and ethical AI development. Created educational content and demos to help others understand AI\'s potential.',
      tech: ['Generative AI', 'Prompt Engineering', 'AI Tools', 'Education'],
      status: 'Research & Education',
      links: { github: '#', demo: '#' }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects & Initiatives</h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI experiments to community building, here are the initiatives that define my journey as a tech innovator and leader.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <span className="text-xs bg-purple-400/10 text-purple-400 px-2 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-400 mb-3">TECHNOLOGIES & SKILLS</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.links.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </motion.a>
                <motion.a
                  href={project.links.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-400 text-black px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;