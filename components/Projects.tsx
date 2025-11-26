'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github, Star, Layers, Cpu, Globe, Smartphone, Database, Sparkles, Rocket, Shield } from 'lucide-react'
import { useState } from 'react'

// Creative gradient backgrounds for each project
const projectGradients = [
  'from-violet-500 via-purple-500 to-fuchsia-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-orange-500 via-amber-500 to-yellow-500',
  'from-rose-500 via-pink-500 to-purple-500',
  'from-indigo-500 via-violet-500 to-purple-500',
  'from-teal-500 via-emerald-500 to-green-500',
  'from-blue-500 via-cyan-500 to-teal-500',
]

// Icons for each project type
const projectIcons: { [key: string]: any } = {
  'web': Globe,
  'mobile': Smartphone,
  'ai': Cpu,
  'fullstack': Layers,
  'database': Database,
  'creative': Sparkles,
  'startup': Rocket,
  'security': Shield,
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

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

  const IconComponent = projectIcons[project.iconType] || Layers
  const gradientClass = projectGradients[index % projectGradients.length]

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
      <div className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform-gpu border border-white/20">
        {/* Creative Gradient Header */}
        <div className={`relative h-52 bg-gradient-to-br ${gradientClass} overflow-hidden`}>
          {/* Animated mesh pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill={`url(#grid-${index})`} />
            </svg>
          </div>
          
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"
            animate={isHovered ? { scale: 1.2, rotate: 90 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 rounded-lg bg-white/10 backdrop-blur-sm rotate-45"
            animate={isHovered ? { scale: 1.3, rotate: 135 } : { scale: 1, rotate: 45 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm"
            animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          {/* Central Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/30">
              <IconComponent className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </motion.div>
          
          {/* Floating particles on hover */}
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  initial={{ 
                    x: 100 + Math.random() * 100,
                    y: 100 + Math.random() * 50,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    y: -50,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}

          {/* Featured badge */}
          {project.featured && (
            <motion.div 
              className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-1 border border-white/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
              <span className="text-xs font-semibold text-white">Featured</span>
            </motion.div>
          )}
        </div>
        
        <div className="p-6 relative bg-white" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 transition-all duration-300">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag: string) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:border-primary-300 hover:from-primary-50 hover:to-purple-50 transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r ${gradientClass} text-white rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
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
      title: 'NexusCommerce',
      description: 'A modern e-commerce platform with AI-powered product recommendations, real-time inventory tracking, and seamless Stripe payment integration. Features an intuitive admin dashboard for complete store management.',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Redis'],
      iconType: 'fullstack',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: true,
    },
    {
      title: 'TaskFlow Pro',
      description: 'Enterprise-grade project management solution with Kanban boards, Gantt charts, real-time collaboration, and automated workflow triggers. Built for teams that demand efficiency.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      iconType: 'web',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: true,
    },
    {
      title: 'Neural Analytics',
      description: 'Advanced data analytics platform leveraging machine learning for predictive insights. Features interactive visualizations, custom report generation, and automated anomaly detection.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'D3.js'],
      iconType: 'ai',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: false,
    },
    {
      title: 'ConnectHub',
      description: 'Cross-platform social networking app with end-to-end encrypted messaging, story sharing, and live streaming capabilities. Optimized for performance with 60fps animations.',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Redux Toolkit'],
      iconType: 'mobile',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: false,
    },
    {
      title: 'CloudVault',
      description: 'Secure cloud storage solution with zero-knowledge encryption, file versioning, and collaborative workspaces. Features intelligent file organization powered by ML.',
      tags: ['Go', 'AWS S3', 'React', 'PostgreSQL', 'gRPC'],
      iconType: 'security',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: false,
    },
    {
      title: 'DevPortfolio CMS',
      description: 'Headless CMS specifically designed for developer portfolios. Drag-and-drop interface, MDX support, automatic SEO optimization, and one-click deployment to Vercel.',
      tags: ['Next.js', 'Sanity', 'TailwindCSS', 'Vercel', 'MDX'],
      iconType: 'creative',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: false,
    },
    {
      title: 'HealthSync',
      description: 'Comprehensive fitness and wellness platform with personalized workout plans, nutrition tracking, progress analytics, and integration with popular wearables.',
      tags: ['Vue.js', 'Express', 'MongoDB', 'Chart.js', 'PWA'],
      iconType: 'mobile',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: false,
    },
    {
      title: 'LaunchPad',
      description: 'SaaS boilerplate for rapid startup development. Includes authentication, billing, team management, and analytics out of the box. Ship your MVP in days, not months.',
      tags: ['Next.js', 'Supabase', 'Stripe', 'TailwindCSS', 'Resend'],
      iconType: 'startup',
      github: 'https://github.com/xavihachem',
      demo: '#',
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Portfolio
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated collection of projects showcasing my expertise in full-stack development, 
            AI integration, and creating exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/xavihachem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
