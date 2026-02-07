'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Cloud, Terminal, Brain, Palette, Shield, Cpu, Layers, Workflow } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Flutter & Mobile',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Flutter', level: 92 },
        { name: 'Dart', level: 90 },
        { name: 'BLoC Pattern', level: 88 },
        { name: 'Riverpod', level: 85 },
        { name: 'Firebase', level: 88 },
        { name: 'Hive/SQLite', level: 82 },
        { name: 'Animations', level: 85 },
        { name: 'App Store/Play Store', level: 80 },
      ],
    },
    {
      icon: Code,
      title: 'Web Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React', level: 75 },
        { name: 'Next.js', level: 70 },
        { name: 'TypeScript', level: 72 },
        { name: 'Tailwind CSS', level: 78 },
        { name: 'REST APIs', level: 82 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Node.js', level: 65 },
        { name: 'Express', level: 62 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'Firebase Firestore', level: 88 },
        { name: 'SQLite', level: 85 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'MongoDB', level: 60 },
        { name: 'Supabase', level: 72 },
        { name: 'Hive', level: 85 },
        { name: 'Shared Preferences', level: 90 },
        { name: 'Cloud Storage', level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 88 },
        { name: 'CI/CD', level: 70 },
        { name: 'Docker', level: 55 },
        { name: 'Figma', level: 78 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 82 },
        { name: 'Netlify/Vercel', level: 75 },
      ],
    },
    {
      icon: Brain,
      title: 'AI Integration',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'OpenAI API', level: 82 },
        { name: 'Gemini API', level: 78 },
        { name: 'TensorFlow Lite', level: 70 },
        { name: 'ML Kit', level: 75 },
        { name: 'Natural Language', level: 72 },
        { name: 'Image Recognition', level: 68 },
        { name: 'Recommendation', level: 75 },
        { name: 'Chatbot', level: 80 },
      ],
    },
    {
      icon: Shield,
      title: 'Testing & Security',
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Unit Testing', level: 75 },
        { name: 'Widget Testing', level: 78 },
        { name: 'Integration Testing', level: 70 },
        { name: 'OAuth/JWT', level: 72 },
        { name: 'Encryption', level: 65 },
        { name: 'Biometric Auth', level: 78 },
        { name: 'Security Best Practices', level: 70 },
        { name: 'Code Review', level: 75 },
      ],
    },
  ]

  const tools = [
    'Android Studio', 'VS Code', 'Flutter DevTools', 'Firebase Console', 
    'Postman', 'Figma', 'GitHub', 'Xcode'
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 -right-40 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -left-40 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My Expertise
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                </div>
                
                {/* Skills with progress bars */}
                <div className="space-y-3">
                  {category.skills.slice(0, 5).map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* More skills tags */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.slice(5).map((skill) => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium hover:bg-gray-100 transition-colors cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Workflow className="w-5 h-5 text-primary-400" />
              Tools & Platforms I Use Daily
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
