'use client'

import { motion } from 'framer-motion'
import { X, Terminal, Shield, Lock } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HackerPopupProps {
  onClose: () => void
}

const HackerPopup = ({ onClose }: HackerPopupProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = 'Welcome to my secure domain...'

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-dark-card border-2 border-cyber-green rounded-lg p-8 max-w-md w-full relative overflow-hidden"
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/5 to-cyber-blue/5 animate-pulse"></div>
        
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cyber-green transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Shield className="w-12 h-12 text-cyber-green" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Lock className="w-12 h-12 text-cyber-blue opacity-50" />
              </motion.div>
            </motion.div>
          </div>

          <div className="text-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-cyber-green mb-4 glow-text"
            >
              ACCESS GRANTED
            </motion.h2>
            
            <div className="bg-dark-bg border border-dark-border rounded p-4 font-mono text-sm">
              <div className="flex items-center mb-2">
                <Terminal className="w-4 h-4 text-cyber-green mr-2" />
                <span className="text-cyber-green">system@cyberdev:~$</span>
              </div>
              <div className="text-gray-300">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-cyber-green"
                >
                  |
                </motion.span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6 text-sm">
              You've entered a secure zone. Explore my portfolio to discover 
              cutting-edge cybersecurity solutions and web development projects.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="cyber-button px-6 py-2 rounded font-semibold"
            >
              Enter Portfolio
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-green to-cyber-blue"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-cyber-green"></div>
      </motion.div>
    </motion.div>
  )
}

export default HackerPopup