'use client'

import { motion } from "framer-motion"
import { Geist_Mono, DM_Serif_Text, Mona_Sans } from "next/font/google"
import ReactLenis from "lenis/react";

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

export default function SmoothScrolling({ children }: React.PropsWithChildren) {
  return (
    <motion.body
      className={`${monaSans.variable} ${geistMono.variable} ${dmSerifText.variable} antialiased`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ReactLenis root>
        {children}
      </ReactLenis>
    </motion.body>
  )
}
