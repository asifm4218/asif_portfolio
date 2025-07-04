'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Cloud, Lock, Globe, Terminal } from 'lucide-react'

const About = () => {
  const skills = [
    { icon: Shield, name: 'Cybersecurity', color: 'text-red-400' },
    { icon: Code, name: 'Web Development', color: 'text-blue-400' },
    { icon: Cloud, name: 'Cloud Computing', color: 'text-green-400' },
    { icon: Lock, name: 'Penetration Testing', color: 'text-purple-400' },
    { icon: Globe, name: 'Network Security', color: 'text-yellow-400' },
    { icon: Terminal, name: 'Scripting & Automation', color: 'text-cyan-400' },
  ]

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-cyber-green mb-4">
              Bridging Security & Development
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate cybersecurity and web development enthusiast, 
            currently pursuing my B.E. in Computer Science with a focus on Cybersecurity. 
            I've gained hands-on experience through virtual internships at Palo Alto Networks and Cisco Networking Academy,
            where I explored network security, ethical hacking, and cloud protection.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            From building an AI-based DeepFake Detection System to developing a real-time encrypted keylogger,
             I bring a security-first approach to everything I create. As a finalist in national hackathons and an active tech leader at my college,
             I’m driven to solve real-world problems with innovative, secure solutions.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-dark-card border border-cyber-green rounded-lg text-cyber-green">
                CC Certified
              </span>
              <span className="px-4 py-2 bg-dark-card border border-cyber-blue rounded-lg text-cyber-blue">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-dark-card border border-cyber-purple rounded-lg text-cyber-purple">
                Cyber Security 
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="skill-card p-6 rounded-lg text-center"
              >
                <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
                <h4 className="font-semibold text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About