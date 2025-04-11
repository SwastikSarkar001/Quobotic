'use client'

import { motion } from "framer-motion";

export default function AboutUs() {
  
  return (
    <section className="relative">
      {/* <VisualCardsGridAdvanced /> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </section>
  )
}

// Variants for crossfading the inner content
const initialContentVariants = {
  rest: { opacity: 1 },
  hover: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const hoverContentVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

// Variants for the card container itself to add a cool filter effect and rotation keyframes.
// This changes the card from a desaturated state to a vibrant, glowing state.
const cardContainerVariants = {
  rest: {
    filter: "grayscale(100%)",
    rotate: 0,
  },
  hover: {
    filter: "grayscale(0%) drop-shadow(0px 0px 10px rgba(255,255,255,0.8))",
    rotate: [0, -5, 5, 0], // keyframes rotation for a dynamic "wobble" effect
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

function VisualCardAdvanced({ title, initialContent, hoverContent }: {title: string, initialContent: React.ReactNode, hoverContent: React.ReactNode}) {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-xl overflow-hidden p-6"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={cardContainerVariants}
    >
      {/* Title Label */}
      <div className="absolute top-2 left-2 z-20 px-2 py-1 bg-white bg-opacity-75 rounded text-sm font-semibold text-gray-800">
        {title}
      </div>
      {/* Graphic Container */}
      <div className="h-40 flex items-center justify-center relative">
        {/* Initially visible graphic */}
        <motion.div
          variants={initialContentVariants}
          className="absolute"
        >
          {initialContent}
        </motion.div>
        {/* Hover state graphic */}
        <motion.div
          variants={hoverContentVariants}
          className="absolute"
        >
          {hoverContent}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function VisualCardsGridAdvanced() {
  const cards = [
    {
      title: "Lightning Fast",
      initialContent: (
        <div className="text-6xl text-gray-500">⚡</div>
      ),
      hoverContent: (
        <div className="text-6xl text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] animate-pulse">
          ⚡
        </div>
      ),
    },
    {
      title: "Instant Server Start",
      initialContent: (
        <div className="font-mono text-lg text-gray-600">npm run dev</div>
      ),
      hoverContent: (
        <div className="font-mono text-lg text-green-500">Ready in 96ms</div>
      ),
    },
    {
      title: "Real-Time Analytics",
      initialContent: (
        <div className="flex flex-col items-center">
          <div className="text-4xl text-gray-500">📊</div>
          <div className="text-sm text-gray-500">Static Chart</div>
        </div>
      ),
      hoverContent: (
        <div className="flex flex-col items-center">
          <div className="text-4xl text-blue-500">📈</div>
          <div className="text-sm text-blue-500">Live Data Flow</div>
        </div>
      ),
    },
    {
      title: "Adaptive Learning",
      initialContent: (
        <div className="flex flex-col items-center">
          <div className="text-4xl text-gray-500">🤖</div>
          <div className="text-sm text-gray-500">Neural Net</div>
        </div>
      ),
      hoverContent: (
        <div className="flex flex-col items-center">
          <div className="text-4xl text-purple-500">🤖</div>
          <div className="text-sm text-purple-500">Optimized Growth</div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Driving AI Innovation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <VisualCardAdvanced
              key={index}
              title={card.title}
              initialContent={card.initialContent}
              hoverContent={card.hoverContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-8">
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-5% via-red-400 via-35% to-secondary to-50%">
        Driving AI Innovation
      </h1>
      <p className="text-border text-lg mb-12 text-center">
        Transforming businesses through next-generation AI and SaaS solutions
      </p>
      <div className="w-[1194px] max-w-full grid grid-cols-3 gap-8 *:rounded-2xl *:h-88 *:border-border/30 *:border *:p-8 relative *:flex *:items-end">
        <motion.div
          initial={{
            opacity: 0,
            x: -100
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="col-span-2 relative"
        >
          <div className="absolute inset-0 z-0 flex group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-3/5 fill-border group-hover:fill-amber-400 transition-colors mx-auto mt-8"
            >
              <path d="M20 25.25h-8a.75.75 0 0 0-.75.75v2c0 .207.084.395.22.531l2 2a.75.75 0 0 0 .529.219h4.004a.75.75 0 0 0 .53-.219l2-2a.75.75 0 0 0 .219-.53v-2.002a.75.75 0 0 0-.75-.75zm-.75 2.439-1.561 1.561H14.31l-1.561-1.561v-.939h6.5zm5.701-21.067c-1.828-3.111-5.083-5.213-8.842-5.408l-.027-.001h-.067A10.95 10.95 0 0 0 7.158 6.41l-.027.047a10.1 10.1 0 0 0-1.789 5.763v.017-.001a12.6 12.6 0 0 0 2.012 5.937l-.03-.049c.319.549.657 1.09.996 1.631a24 24 0 0 1 1.9 3.392l.063.153a.75.75 0 0 0 .692.461h.004a.7.7 0 0 0 .29-.06l-.005.002a.75.75 0 0 0 .401-.986l.002.005a26 26 0 0 0-2.135-3.855l.059.093a58 58 0 0 1-.971-1.59 10.8 10.8 0 0 1-1.777-5.138l-.002-.038a8.8 8.8 0 0 1 1.566-4.95l-.019.029c1.603-2.629 4.391-4.397 7.603-4.56l.023-.001h.056a9.39 9.39 0 0 1 7.582 4.655l.024.045a8.8 8.8 0 0 1 1.453 4.865l-.002.18v-.009a11.64 11.64 0 0 1-1.878 5.152l.027-.043c-.289.49-.592.975-.895 1.457a27 27 0 0 0-1.986 3.518l-.073.171a.75.75 0 0 0 1.374.603l.002-.005a26 26 0 0 1 2.015-3.585l-.06.095c.309-.494.619-.99.916-1.492a12.85 12.85 0 0 0 2.05-5.733l.005-.057a10.154 10.154 0 0 0-1.697-5.946l.023.037zm-10.267-.729a.755.755 0 0 0-.997-.373l.005-.002c-2.316 1.342-3.961 3.621-4.424 6.306l-.008.054a.752.752 0 0 0 .612.862l.004.001q.056.01.123.01h.002c.37 0 .677-.268.738-.621l.001-.004a7.7 7.7 0 0 1 3.536-5.22l.033-.019a.75.75 0 0 0 .374-.996l.002.005zM1.665 2.671l4 2a.75.75 0 0 0 .674-1.34l-.004-.002-4-2a.75.75 0 0 0-.674 1.34zM26 4.75h.001a.75.75 0 0 0 .34-.081l-.004.002 4-2a.75.75 0 1 0-.676-1.34l.004-.002-4 2a.751.751 0 0 0 .336 1.42zm4.336 16.58-4-2a.75.75 0 0 0-.676 1.337l.004.002 4 2c.097.05.212.08.334.08H30a.75.75 0 0 0 .341-1.418l-.004-.002zM5.772 19.32l-3.913 1.83a.751.751 0 0 0 .317 1.43.76.76 0 0 0 .322-.072l-.005.002 3.913-1.83a.751.751 0 1 0-.639-1.357l.005-.002zM2 12.75h1a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5m28-1.5h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5"></path>
            </svg>
          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Intelligent Automation</h2>
            <p className="text-border">Streamline operations with smart AI-driven workflows.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 z-0">
            
          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Predictive Analytics</h2>
            <p className="text-border">Uncover trends and forecast future performance with data insights.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -100
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Adaptive Learning Systems</h2>
            <p className="text-border">Enhance decision-making through dynamic, machine learning models.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="col-span-2 relative"
        >
          <div className="absolute inset-0 z-0">
            
          </div>
          <div className="relative max-w-2/5 z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Scalable AI Solutions</h2>
            <p className="text-border">Customizable, enterprise-grade solutions to grow with your business.</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

function Section2() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-8">
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-5% via-blue-400 via-35% to-secondary to-50%">
        Empowering Your Digital Journey
      </h1>
      <p className="text-border text-lg mb-12 text-center">
        Building intelligent frameworks to elevate enterprise performance.
      </p>
      <div className="w-[1194px] max-w-full grid grid-cols-3 gap-8 *:rounded-2xl *:h-88 *:border-border/30 *:border *:p-8 relative *:flex *:items-end">
        <div className="col-span-2">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative 2 z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Intelligent Automation</h2>
            <p className="text-border">Streamline operations with smart AI-driven workflows.</p>
          </div>
        </div>
        <div>
          <div className="absolute inset-0 z-0">
            
          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Predictive Analytics</h2>
            <p className="text-border">Uncover trends and forecast future performance with data insights.</p>
          </div>
        </div>
        <div>
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Adaptive Learning Systems</h2>
            <p className="text-border">Enhance decision-making through dynamic, machine learning models.</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative max-w-2/5 z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Scalable AI Solutions</h2>
            <p className="text-border">Customizable, enterprise-grade solutions to grow with your business.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
function Section3() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-8">
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-5% via-teal-400 via-35% to-secondary to-50%">
        Redefining Business Intelligence
      </h1>
      <p className="text-border text-lg mb-12 text-center">
        Unlocking operational excellence with data-driven insights.
      </p>
      <div className="w-[1194px] max-w-full grid grid-cols-3 gap-8 *:rounded-2xl *:h-88 *:border-border/30 *:border *:p-8 relative *:flex *:items-end">
        <div className="col-span-2">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative 2 z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Intelligent Automation</h2>
            <p className="text-border">Streamline operations with smart AI-driven workflows.</p>
          </div>
        </div>
        <div>
          <div className="absolute inset-0 z-0">
            
          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Predictive Analytics</h2>
            <p className="text-border">Uncover trends and forecast future performance with data insights.</p>
          </div>
        </div>
        <div>
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Adaptive Learning Systems</h2>
            <p className="text-border">Enhance decision-making through dynamic, machine learning models.</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative max-w-2/5 z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Scalable AI Solutions</h2>
            <p className="text-border">Customizable, enterprise-grade solutions to grow with your business.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
function Section4() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-8 mb-32">
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-5% via-amber-400 via-35% to-secondary to-50%">
        Innovation at the Core
      </h1>
      <p className="text-border text-lg mb-12 text-center">
        Visionary thinking and collaborative success for a tech-forward future.
      </p>
      <div className="w-[1194px] max-w-full grid grid-cols-3 gap-8 *:rounded-2xl *:h-88 *:border-border/30 *:border *:p-8 relative *:flex *:items-end">
        <div className="col-span-2">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative 2 z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Intelligent Automation</h2>
            <p className="text-border">Streamline operations with smart AI-driven workflows.</p>
          </div>
        </div>
        <div>
          <div className="absolute inset-0 z-0">
            
          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Predictive Analytics</h2>
            <p className="text-border">Uncover trends and forecast future performance with data insights.</p>
          </div>
        </div>
        <div>
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Adaptive Learning Systems</h2>
            <p className="text-border">Enhance decision-making through dynamic, machine learning models.</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="relative max-w-2/5 z-2 mx-auto flex flex-col gap-2 items-center *:text-center">
            <h2 className="text-xl">Scalable AI Solutions</h2>
            <p className="text-border">Customizable, enterprise-grade solutions to grow with your business.</p>
          </div>
        </div>
      </div>
    </main>
  )
}