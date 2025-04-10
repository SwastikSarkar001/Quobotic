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
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-10% via-red-400 to-secondary to-40%">
        Driving AI Innovation
      </h1>
      <p className="text-border text-lg mb-12 text-center">
        Transforming businesses through next-generation AI and SaaS solutions
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
function Section2() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-8">
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-10% via-red-400 to-secondary to-40%">
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
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-10% via-red-400 to-secondary to-40%">
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
      <h1 className="text-5xl leading-16 mb-2 tracking-wide text-center font-heading font-bold text-transparent bg-clip-text bg-linear-90 from-secondary from-10% via-red-400 to-secondary to-40%">
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