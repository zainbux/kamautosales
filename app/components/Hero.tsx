'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="h-full md:pt-44">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 max-w-24xl">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center max-w-24xl">
            <motion.div 
              className="space-y-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Find Your Perfect Ride
              </motion.h1>
              <motion.h2 
                className="text-xl font-semibold text-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Quality Used Cars at Unbeatable Prices
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Browse our extensive inventory of carefully selected pre-owned vehicles. 
                From economical commuters to luxury cars, we have the perfect match for every driver.
              </motion.p>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a
                  href="#footer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-8 lg:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/car.jpg"
                alt="Featured Car"
                width={2000}
                height={2000}
                className=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}