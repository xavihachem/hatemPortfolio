'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles, Code, Zap, ChevronDown, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.9])
  const buttonsY = useTransform(scrollY, [0, 400], [0, -50])
  const buttonsOpacity = useTransform(scrollY, [0, 500], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/xavihachem', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hachem-djefafla-9069042ba/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:cirodev@gmail.com', label: 'Email' },
  ]

  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 4 },
    { Icon: Sparkles, delay: 1, duration: 5 },
    { Icon: Zap, delay: 2, duration: 4.5 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 opacity-50" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.Icon className="w-8 h-8 text-primary-400 opacity-20" />
        </motion.div>
      ))}

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="text-center perspective-1000">
          {/* Profile Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
            className="mb-8 inline-block"
          >
            <motion.div
              className="relative w-40 h-40 mx-auto"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Ciro Hachem"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
            className="inline-block mb-8"
          >
            <div className="glass-effect px-6 py-3 rounded-full inline-flex items-center gap-2 glow-effect">
              <Sparkles className="w-4 h-4 text-primary-600 animate-pulse" />
              <span className="text-sm font-semibold text-gradient">Available for Freelance</span>
            </div>
          </motion.div>

          {/* 3D Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
            }}
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4">
              <motion.span 
                className="block text-gray-900"
                animate={{ 
                  textShadow: [
                    '0 0 0px rgba(0,0,0,0)',
                    '0 5px 20px rgba(14, 165, 233, 0.3)',
                    '0 0 0px rgba(0,0,0,0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="block text-gradient text-7xl sm:text-8xl lg:text-9xl"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite',
                }}
              >
                Ciro Hachem
              </motion.span>
            </h1>
          </motion.div>

          {/* Glitch Effect Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold mb-4">
              Master's in Computer Science
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Full-Stack', 'AI/ML', 'Freelancer', 'Problem Solver'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-primary-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Crafting <span className="text-gradient font-semibold">extraordinary digital experiences</span> with cutting-edge technology and creative innovation
          </motion.p>

          {/* CTA Buttons - Fixed position with better visibility */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ y: buttonsY, opacity: buttonsOpacity }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold overflow-hidden shadow-xl shadow-primary-500/25"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              data-cursor="view"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5" />
                View My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-primary-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download
              className="px-8 py-4 bg-white/90 backdrop-blur-lg text-gray-800 rounded-2xl font-semibold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 text-primary-600" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-4 glass-effect rounded-full hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group"
                whileHover={{ y: -8, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1, type: 'spring' }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-xs text-gray-500 font-medium group-hover:text-primary-600 transition-colors">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-primary-600 transition-colors">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 group-hover:bg-primary-600"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
