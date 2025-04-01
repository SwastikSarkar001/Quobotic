"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"

interface AnimatedSectionProps {
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  staggerChildren?: number // in seconds, optional
  className?: React.HTMLAttributes<HTMLDivElement>["className"]
}

export default function AnimatedSection({
  className,
  children,
  delay = 0.2,
  direction = "up",
  staggerChildren,
}: React.PropsWithChildren<AnimatedSectionProps>) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Set initial and animate values based on direction
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: 50 }, animate: { y: 0 } }
      case "down":
        return { initial: { y: -50 }, animate: { y: 0 } }
      case "left":
        return { initial: { x: 50 }, animate: { x: 0 } }
      case "right":
        return { initial: { x: -50 }, animate: { x: 0 } }
      default:
        return { initial: { y: 50 }, animate: { y: 0 } }
    }
  }

  const { initial, animate } = getDirectionValues()

  // If staggerChildren is provided, create container variants.
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initial,
    },
    visible: {
      opacity: 1,
      ...animate,
      transition: {
        delay: delay,
        // Apply stagger if specified
        staggerChildren: staggerChildren || 0,
      },
    },
  }

  return (
    <div ref={ref} className={className}>
      {staggerChildren ? (
        // Wrap children in a motion container if staggering is required
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      ) : (
        // Fallback to the original behavior for single or non-staggered animations
        <motion.div
          initial={{ ...initial, opacity: 0 }}
          animate={isInView ? { ...animate, opacity: 1 } : { ...initial, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delay,
            ease: "easeOut",
          }}
          
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
