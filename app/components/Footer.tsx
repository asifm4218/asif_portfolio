'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-cyber-green" />
              <Code className="w-6 h-6 text-cyber-blue" />
              <span className="text-xl font-bold glow-text">CyberDev</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Securing digital landscapes while crafting innovative web solutions. 
              Building the future, one secure line of code at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-cyber-green mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyber-green transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-cyber-blue mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Penetration Testing',
                'Web Development',
                'Security Audits',
                'Vulnerability Assessment',
                'Code Review'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Alex Chen. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer