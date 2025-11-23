'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
          mass: 0.2,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Creative trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
          rotate: isHovering ? 180 : 0,
          borderRadius: isHovering ? '30%' : '50%',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full border-2 border-primary-500 rounded-inherit opacity-50 animate-spin-slow bg-gradient-to-tr from-transparent to-primary-500/20 backdrop-blur-[1px]" />
      </motion.div>
      
      {/* Outer glow trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
          mass: 0.8,
        }}
      >
         <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md" />
      </motion.div>
    </>
  )
}
