'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github, Code2, Star } from 'lucide-react'
import { useState } from 'react'

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000"
    >
      <div className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform-gpu">
        {/* Gradient Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ transform: 'translateZ(20px)' }}
        />
        
        {/* Project Image/Icon */}
        <div className="relative bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 h-48 flex items-center justify-center overflow-hidden">
          <motion.div
            className="text-8xl"
            animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.image}
          </motion.div>
          
          {/* Floating particles on hover */}
          {isHovered && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-400 rounded-full"
                  initial={{ 
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: -100,
                    opacity: [0, 1, 0],
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </>
          )}
        </div>
        
        <div className="p-6 relative" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={project.github}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group/link"
              whileHover={{ x: 5 }}
            >
              <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
            <motion.a
              href={project.demo}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group/link"
              whileHover={{ x: 5 }}
            >
              <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates and team collaboration features',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      image: '📋',
      github: '#',
      demo: '#',
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Data analytics dashboard with machine learning insights and predictive modeling',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: '📊',
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media App',
      description: 'Mobile-first social platform with real-time messaging and content sharing capabilities',
      tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      image: '💬',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS for managing portfolio content with drag-and-drop interface',
      tags: ['Next.js', 'Sanity', 'Tailwind', 'Vercel'],
      image: '🎨',
      github: '#',
      demo: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking application with workout plans and progress monitoring',
      tags: ['Vue.js', 'Express', 'MySQL', 'Chart.js'],
      image: '💪',
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
