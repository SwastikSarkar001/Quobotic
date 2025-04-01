'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HoverCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  // Track mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setMousePosition({ x, y })
  }

  useEffect(() => {
    controls.start({
      background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 255, 150, 0.2), transparent 40%)`,
      transition: { duration: 0.2, ease: 'easeOut' }
    })
  }, [mousePosition, controls])

  return (
    <motion.div
      className="relative w-80 h-48 rounded-xl overflow-hidden bg-black p-4 border border-gray-800 hover:border-green-400 transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        controls.start({
          background: `radial-gradient(600px circle at 50% 0%, rgba(0, 255, 150, 0.0), transparent 40%)`
        })
      }}
    >
      {/* Spotlight Background */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={controls}
        initial={{
          background: `radial-gradient(600px circle at 50% 0%, rgba(0, 255, 150, 0.2), transparent 40%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col justify-center h-full">
        <p className="text-sm text-green-300 mb-2">&gt; npm run dev</p>
        <h4 className="text-lg font-semibold">Instant server start</h4>
        <p className="text-xs text-gray-400">
          On demand file serving over native ESM, no bundling required!
        </p>
      </div>
    </motion.div>
  )
}
