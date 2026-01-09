'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Cloud, Terminal, Brain, Palette, Shield, Cpu, Layers, Workflow } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 92 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 80 },
        { name: 'Framer Motion', level: 88 },
        { name: 'Redux', level: 85 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      icon: Terminal,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 88 },
        { name: 'Express', level: 90 },
        { name: 'FastAPI', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 82 },
        { name: 'NestJS', level: 78 },
        { name: 'Django', level: 75 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Firebase', level: 85 },
        { name: 'Prisma', level: 90 },
        { name: 'Supabase', level: 85 },
        { name: 'DynamoDB', level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'CI/CD', level: 90 },
        { name: 'Vercel', level: 95 },
        { name: 'Git', level: 95 },
        { name: 'Kubernetes', level: 70 },
        { name: 'GitHub Actions', level: 88 },
        { name: 'Linux', level: 82 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Flutter', level: 75 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 90 },
        { name: 'iOS', level: 70 },
        { name: 'Android', level: 72 },
        { name: 'App Store', level: 80 },
        { name: 'Push Notifications', level: 85 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'TensorFlow', level: 78 },
        { name: 'PyTorch', level: 72 },
        { name: 'OpenAI API', level: 90 },
        { name: 'LangChain', level: 82 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'NLP', level: 75 },
        { name: 'Computer Vision', level: 70 },
        { name: 'Hugging Face', level: 78 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 78 },
        { name: 'UI Design', level: 88 },
        { name: 'Prototyping', level: 85 },
        { name: 'Design Systems', level: 82 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Animation', level: 88 },
        { name: 'Accessibility', level: 85 },
      ],
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Jest', level: 88 },
        { name: 'Cypress', level: 82 },
        { name: 'OAuth', level: 90 },
        { name: 'JWT', level: 92 },
        { name: 'OWASP', level: 78 },
        { name: 'Penetration Testing', level: 70 },
        { name: 'E2E Testing', level: 85 },
        { name: 'Unit Testing', level: 90 },
      ],
    },
  ]

  const tools = [
    'VS Code', 'Postman', 'Notion', 'Slack', 'Jira', 'Linear', 
    'Stripe', 'Twilio', 'SendGrid', 'Cloudflare', 'Sentry', 'Analytics'
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
