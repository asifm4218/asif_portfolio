'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 80, color: 'bg-yellow-400' },
        { name: 'JavaScript', level: 70, color: 'bg-yellow-300' },
        { name: 'TypeScript', level: 40, color: 'bg-blue-400' },
        { name: 'C++', level: 70, color: 'bg-blue-600' },
        { name: 'Bash', level: 87, color: 'bg-green-400' },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 75, color: 'bg-cyan-400' },
        { name: 'Node.js', level: 58, color: 'bg-green-500' },
        { name: 'Next.js', level: 85, color: 'bg-gray-400' },
        { name: 'Express.js', level: 45, color: 'bg-gray-600' },
        { name: 'MongoDB', level: 63, color: 'bg-green-600' },
      ]
    },
    {
      title: 'Cybersecurity Tools',
      skills: [
        { name: 'Metasploit', level: 50, color: 'bg-red-500' },
        { name: 'Burp Suite', level: 48, color: 'bg-orange-500' },
        { name: 'Nmap', level: 72, color: 'bg-purple-500' },
        { name: 'Wireshark', level: 65, color: 'bg-blue-500' },
        { name: 'OWASP ZAP', level: 60, color: 'bg-indigo-500' },
      ]
    },
    {
      title: 'Security Frameworks',
      skills: [
        { name: 'OWASP Top 10', level: 55, color: 'bg-red-400' },
        { name: 'NIST Framework', level: 68, color: 'bg-blue-400' },
        { name: 'ISO 27001', level: 62, color: 'bg-green-400' },
        { name: 'MITRE ATT&CK', level: 55, color: 'bg-purple-400' },
        { name: 'PCI DSS', level: 60, color: 'bg-yellow-400' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="skill-card p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-8 text-cyber-green">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-border rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className={`h-2 rounded-full ${skill.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills