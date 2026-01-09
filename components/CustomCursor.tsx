'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  const trailSpringConfig = { damping: 20, stiffness: 200, mass: 0.8 }
  const trailXSpring = useSpring(cursorX, trailSpringConfig)
  const trailYSpring = useSpring(cursorY, trailSpringConfig)

  const trail2SpringConfig = { damping: 15, stiffness: 150, mass: 1 }
  const trail2XSpring = useSpring(cursorX, trail2SpringConfig)
  const trail2YSpring = useSpring(cursorY, trail2SpringConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      if (target.closest('[data-cursor="view"]')) {
        setIsHovering(true)
        setCursorVariant('view')
        setCursorText('View')
      } else if (target.closest('[data-cursor="link"]')) {
        setIsHovering(true)
        setCursorVariant('link')
        setCursorText('')
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
        setCursorVariant('pointer')
        setCursorText('')
      } else if (target.closest('input') || target.closest('textarea')) {
        setCursorVariant('text')
        setIsHovering(false)
        setCursorText('')
      } else {
        setIsHovering(false)
        setCursorVariant('default')
        setCursorText('')
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
  }, [cursorX, cursorY])

  const getCursorSize = () => {
    if (cursorVariant === 'view') return 80
    if (isClicking) return 8
    if (isHovering) return 16
    return 12
  }

  const getTrailSize = () => {
    if (cursorVariant === 'view') return 100
    if (isClicking) return 30
    if (isHovering) return 60
    return 40
  }

  return (
    <>
      {/* Main cursor - morphing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: getCursorSize(),
          height: getCursorSize(),
          backgroundColor: cursorVariant === 'view' 
            ? 'rgba(14, 165, 233, 0.9)' 
            : cursorVariant === 'text' 
              ? 'transparent'
              : 'rgba(255, 255, 255, 1)',
          mixBlendMode: cursorVariant === 'view' ? 'normal' : 'difference',
          borderRadius: cursorVariant === 'view' ? '20%' : '50%',
        }}
        transition={{
          width: { type: 'spring', stiffness: 400, damping: 25 },
          height: { type: 'spring', stiffness: 400, damping: 25 },
          backgroundColor: { duration: 0.2 },
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-white text-xs font-bold tracking-wider"
          >
            {cursorText}
          </motion.span>
        )}
        
        {cursorVariant === 'text' && (
          <motion.div
            className="w-0.5 h-5 bg-primary-500"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Primary trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: getTrailSize(),
          height: getTrailSize(),
          opacity: cursorVariant === 'text' ? 0 : isHovering ? 0.8 : 0.4,
          borderWidth: isHovering ? 2 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          width: { type: 'spring', stiffness: 300, damping: 20 },
          height: { type: 'spring', stiffness: 300, damping: 20 },
          rotate: { duration: 0.5 },
        }}
      >
        <div 
          className={`w-full h-full rounded-full border-primary-400 transition-all duration-300 ${
            isHovering 
              ? 'border-2 bg-gradient-to-tr from-primary-500/10 to-purple-500/10' 
              : 'border bg-transparent'
          }`}
          style={{
            borderStyle: isHovering ? 'solid' : 'dashed',
          }}
        />
      </motion.div>

      {/* Secondary trail - gradient glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: trail2XSpring,
          y: trail2YSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 80 : 50,
          height: isHovering ? 80 : 50,
          opacity: isHovering ? 0.6 : 0.2,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 blur-xl" />
      </motion.div>

      {/* Particle trail effect on hover */}
      {isHovering && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 pointer-events-none z-[9996]"
              style={{
                x: trail2XSpring,
                y: trail2YSpring,
                translateX: '-50%',
                translateY: '-50%',
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
            >
              <div 
                className="rounded-full bg-gradient-to-r from-primary-400 to-purple-400"
                style={{
                  width: 60 + i * 20,
                  height: 60 + i * 20,
                }}
              />
            </motion.div>
          ))}
        </>
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9995]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ width: 10, height: 10, opacity: 1 }}
          animate={{ width: 100, height: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="w-full h-full rounded-full border-2 border-primary-400" />
        </motion.div>
      )}
    </>
  )
}
