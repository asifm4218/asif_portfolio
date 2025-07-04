'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Terminal, Shield } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            <Terminal className="w-12 h-12 text-cyber-green animate-pulse" />
            <Shield className="w-12 h-12 text-cyber-blue animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="glow-text">Asif M</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            <span className="typing-animation">
              Cybersecurity Specialist & Full-Stack Developer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
          >
            Securing digital landscapes while crafting innovative web solutions. 
            Specializing in penetration testing, vulnerability assessment, and modern web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button px-8 py-3 rounded-lg font-semibold"
            >
              <a href="#projects">View My Work</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-cyber-green text-cyber-green px-8 py-3 rounded-lg font-semibold hover:bg-cyber-green hover:text-black transition-all duration-300"
            >
              <a href="/Asif-M-CV.pdf" download>Download CV</a>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-cyber-green" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero