'use client'

import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    video: '/Sample.mp4',
    title: 'Product 1',
    description: 'Description for Product 1',
  },
  {
    id: 2,
    video: '/Sample.mp4',
    title: 'Product 2',
    description: 'Description for Product 2',
  },
  {
    id: 3,
    video: '/Sample.mp4',
    title: 'Product 3',
    description: 'Description for Product 3',
  },
  {
    id: 4,
    video: '/Sample.mp4',
    title: 'Product 4',
    description: 'Description for Product 4',
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Products() {
  return (
    <motion.div
      className="products-container flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="products-scroll flex overflow-x-auto space-x-4 py-4"
        variants={containerVariants}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="product-card relative w-64 h-80 flex-shrink-0 bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="product-video w-full h-full object-cover"
            >
              <source src={product.video} type="video/mp4" />
            </video>
              <div className="product-details absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
              </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="see-all mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          See All Products
        </button>
      </div>
    </motion.div>
  )
}