'use client'

import { motion } from "framer-motion"
import { Geist_Mono, DM_Serif_Text, Mona_Sans } from "next/font/google"


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AnimatedScroll({ children }: React.PropsWithChildren) {
  return (
    <motion.body
      className={`${monaSans.variable} ${geistMono.variable} ${dmSerifText.variable} antialiased`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // style={{
      //   position: 'relative',
      //   width: '100%',
      //   height: '100%',
      //   overflowY: 'scroll',
      //   scrollBehavior: 'smooth',
      // }}
      // drag="y"
      // dragConstraints={{ top: 0, bottom: 0 }}
      // dragElastic={0.05}
      // dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    >
      {children}
    </motion.body>
  )
}
