'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MatrixBackground from './components/MatrixBackground'
import HackerPopup from './components/HackerPopup'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-dark-bg text-white relative">
      <MatrixBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      <AnimatePresence>
        {showPopup && (
          <HackerPopup onClose={() => setShowPopup(false)} />
        )}
      </AnimatePresence>
    </main>
  )
}