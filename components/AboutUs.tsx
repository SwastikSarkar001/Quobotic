'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"],
  });

  const maxHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="h-[500vh] relative">
      <main ref={mainRef} className="h-screen sticky top-0 bg-red-800">
        <div className="h-screen w-1/2 grid place-items-center">
          <div className="w-full flex gap-4 items-stretch justify-center">
            <motion.div
              className="w-6 bg-amber-500"
              style={{ maxHeight }}
            />
            <div className="text-6xl font-heading tracking-wide py-8">
              <p>About</p>
              <p>Quobotic</p>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    </section>
  );
}
