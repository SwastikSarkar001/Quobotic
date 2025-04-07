'use client'
// import AnimatedSection from "@/ui/AnimatedSection";
import WorldGlobe from "@/ui/WorldGlobe";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  return (
    <section ref={ref} className="h-screen relative grid place-items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute w-4/5 h-2/5 top-0 left-1/2 -translate-x-1/2 bg-radial-[circle_at_50%_-60%] from-primary/80 to-transparent to-60%"
      />
      <div className="absolute right-0 top-0 -z-1 w-full h-full opacity-40 pointer-events-none">
        <WorldGlobe />
      </div>
      <motion.div
        style={{ opacity, y, scale }}
        className="max-screen relative z-10 mx-auto px-4 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-red-400 text-sm font-medium mb-4">
            AI Consulting & SaaS Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-heading tracking-wide md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        >
          Transform Your Business
          <br />
          <span className="bg-clip-text text-transparent bg-linear-120 from-primary from-30% to-amber-500">With AI Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="sm:text-lg md:text-xl text-gray-400 max-w-3xl mb-8"
        >
          Quobotic Consulting helps businesses leverage the power of artificial intelligence to drive growth,
          efficiency, and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-x-6 gap-y-3"
        >
          <Link href='/products' className="not-md:text-sm transition-colors flex items-center justify-center cursor-pointer bg-primary border border-primary hover:border-secondary hover:bg-secondary text-white hover:text-black px-4 py-2 md:px-6 md:py-3 rounded-full">
            Get Started
            <BsArrowRight className="ml-2" />
          </Link>
          {/* <button className="not-md:text-sm transition-colors flex items-center justify-center cursor-pointer bg-stone-950 border border-stone-700 text-white hover:bg-stone-800 px-4 py-2 md:px-6 md:py-3 rounded-full">
            Learn More
          </button> */}
        </motion.div>
      </motion.div>
    </section>
  )
}