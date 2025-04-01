"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HoverCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-80 h-48 p-4 bg-black text-white rounded-xl overflow-hidden border border-gray-700"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Initial Content */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <p className="text-lg">{"> npm run dev"}</p>
        <motion.div
          className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mt-2"
          whileHover={{ scale: 1.1 }}
        >
          ⏎
        </motion.div>
      </motion.div>

      {/* Hovered Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center border-2 border-green-500 rounded-lg"
      >
        <p className="text-lg text-green-500">Ready in 96ms</p>
      </motion.div>
    </motion.div>
  );
}
