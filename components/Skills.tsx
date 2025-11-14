'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Cloud, Terminal } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
    },
    {
      icon: Terminal,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Prisma'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'Git'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'Responsive Design'],
    },
    {
      icon: Globe,
      title: 'Other Technologies',
      skills: ['Machine Learning', 'TensorFlow', 'WebSocket', 'Testing', 'Agile', 'Scrum'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="bg-gradient-to-br from-primary-100 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-400 rounded-xl blur-md opacity-0 group-hover:opacity-50"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <category.icon className="w-7 h-7 text-primary-600 relative z-10" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gradient transition-all">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -5,
                        boxShadow: '0 10px 20px rgba(14, 165, 233, 0.2)'
                      }}
                      className="px-3 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.span>
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
