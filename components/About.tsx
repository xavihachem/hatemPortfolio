'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Target } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Master\'s Degree',
      description: 'Advanced Computer Science education with focus on software engineering and algorithms',
    },
    {
      icon: Briefcase,
      title: 'Freelance Experience',
      description: 'Successfully delivered numerous projects for clients worldwide',
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to writing clean, maintainable, and scalable code',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges with innovative solutions',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A passionate computer scientist dedicated to creating impactful digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15, rotateY: 5 }}
              className="glass-effect p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-purple-400 opacity-10 rounded-bl-full"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow relative"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gradient transition-all">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
              
              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">My Journey</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              With a Master's degree in Computer Science, I've built a strong foundation in software development,
              algorithms, and system design. My academic journey has equipped me with both theoretical knowledge
              and practical skills to tackle real-world challenges.
            </p>
            <p>
              Throughout my career, I've worked on diverse projects ranging from web applications to complex
              systems. My freelancing experience has taught me the importance of clear communication, meeting
              deadlines, and exceeding client expectations.
            </p>
            <p>
              I'm constantly learning and staying updated with the latest technologies and best practices in
              software development. My goal is to create solutions that not only work but also provide
              exceptional user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
