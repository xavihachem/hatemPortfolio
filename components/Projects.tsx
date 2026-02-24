'use client'

import { memo, useMemo, useCallback, useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, LazyMotion, domAnimation } from 'framer-motion'
import { ExternalLink, Github, Star, Layers, Cpu, Globe, Smartphone, Database, Sparkles, Rocket, Shield } from 'lucide-react'
import { projects, projectGradients } from '@/lib/projectsData'

const projectIcons: { [key: string]: any } = {
  web: Globe,
  mobile: Smartphone,
  ai: Cpu,
  fullstack: Layers,
  database: Database,
  creative: Sparkles,
  startup: Rocket,
  security: Shield,
}

interface Project {
  title: string
  description: string
  tags: readonly string[]
  iconType: string
  github: string
  demo: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
  gradientClass: string
}

const ProjectCard = memo(function ProjectCard({ project, index, gradientClass }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = useMemo(() => ({ damping: 20, stiffness: 300 }), [])
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], prefersReducedMotion ? ['0deg', '0deg'] : ['5deg', '-5deg'])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], prefersReducedMotion ? ['0deg', '0deg'] : ['-5deg', '5deg'])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }, [prefersReducedMotion, x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }, [x, y])

  const IconComponent = useMemo(() => projectIcons[project.iconType] || Layers, [project.iconType])

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.05, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000 h-full"
      data-cursor="view"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu border border-gray-100 h-full flex flex-col">
        <div className={`relative h-44 bg-gradient-to-br ${gradientClass} overflow-hidden flex-shrink-0`}>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div
            className={`absolute top-3 right-3 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 ${isHovered ? 'scale-110 rotate-45' : 'scale-100 rotate-0'}`}
          />
          <div
            className={`absolute bottom-6 left-6 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm rotate-45 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-90' : 'scale-100 rotate-45'}`}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/30 transition-transform duration-300 ${isHovered ? 'scale-105 -translate-y-1' : 'scale-100'}`}>
              <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {project.featured && (
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-1 border border-white/30">
              <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
              <span className="text-xs font-semibold text-white">Featured</span>
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-grow bg-white">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 transition-all duration-300 mb-2">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs font-medium">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div className="flex gap-2 pt-3 border-t border-gray-100 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-gradient-to-r ${gradientClass} text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

const ProjectsGrid = memo(function ProjectsGrid() {
  const visibleProjects = useMemo(() => projects.slice(0, 8), [])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {visibleProjects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          gradientClass={projectGradients[index % projectGradients.length]}
        />
      ))}
    </div>
  )
})

export default function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' }
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.span
              variants={headerVariants}
              className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4"
            >
              Portfolio
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A collection of Flutter mobile applications showcasing my expertise in cross-platform development,
              beautiful UI design, and creating exceptional mobile experiences.
            </p>
          </motion.div>

          <ProjectsGrid />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <a
              href="https://github.com/xavihachem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  )
}
