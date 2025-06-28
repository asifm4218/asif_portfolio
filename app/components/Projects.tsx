'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Shield, Code, Search, Lock } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Advanced Keylogger Detection System',
      category: 'Cybersecurity',
      description: 'Developed a machine learning-based system to detect and prevent keylogger attacks in real-time.',
      tech: ['Python', 'TensorFlow', 'Windows API', 'Machine Learning'],
      icon: Shield,
      color: 'border-red-400',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Web Application Penetration Testing Suite',
      category: 'Cybersecurity',
      description: 'Comprehensive testing framework for identifying OWASP Top 10 vulnerabilities in web applications.',
      tech: ['Python', 'Burp Suite', 'OWASP ZAP', 'SQL Injection'],
      icon: Search,
      color: 'border-purple-400',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Secure E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce platform with advanced security features and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      icon: Code,
      color: 'border-blue-400',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Network Vulnerability Scanner',
      category: 'Cybersecurity',
      description: 'Automated network scanning tool for identifying security vulnerabilities and misconfigurations.',
      tech: ['Python', 'Nmap', 'Scapy', 'Network Protocols'],
      icon: Lock,
      color: 'border-green-400',
      image: 'https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Real-time Chat Application',
      category: 'Web Development',
      description: 'Secure real-time messaging platform with end-to-end encryption and user authentication.',
      tech: ['React', 'Socket.io', 'Express', 'JWT'],
      icon: Code,
      color: 'border-cyan-400',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Incident Response Dashboard',
      category: 'Cybersecurity',
      description: 'Real-time security incident monitoring and response dashboard for enterprise environments.',
      tech: ['React', 'D3.js', 'Python', 'ELK Stack'],
      icon: Shield,
      color: 'border-yellow-400',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ]

  return (
    <section id="projects" className="py-20 bg-dark-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`project-card rounded-lg overflow-hidden ${project.color}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-cyber-green text-black rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-cyber-blue text-white rounded-full"
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <project.icon className={`w-6 h-6 mr-2 ${project.color.replace('border-', 'text-')}`} />
                  <span className={`text-sm font-semibold ${project.color.replace('border-', 'text-')}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-bg text-xs rounded border border-dark-border text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects