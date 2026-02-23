'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/trend3.jpg'

export default function TrendAnalysisBanner() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#111111] py-12 text-center"
      >
        <h1 className="text-5xl font-bold">
          Trend <span className="text-yellow-400 underline">Analysis</span>
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Image with label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-xl mx-auto group"
          >
            <div className="relative rounded-xl overflow-hidden border border-yellow-600/30 w-full h-[400px] lg:h-[500px]">
              <Image
                src={bg}
                alt="AI-Powered Dashboard"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                fill={true}
                style={{ objectFit: 'cover' }}
                priority
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-yellow-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>

              {/* AI-POWERED label */}
              <div className="absolute bottom-4 left-4 bg-neutral-900/90 backdrop-blur-sm rounded-lg p-4 border border-yellow-600/50">
                <div className="text-yellow-400 font-bold text-sm">AI-POWERED</div>
                <div className="text-gray-300 text-xs mt-1">Advanced trend detection algorithms</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* AI-Driven Innovation Badge */}
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(234,179,8,0.3)' }}
              className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 font-semibold"
            >
              🚀 AI-DRIVEN INNOVATION
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Unparalleled Solution For <br />
              <span className="text-yellow-400">YouTube Growth</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-300">
              <p className="text-base leading-relaxed">
                At the forefront of digital innovation, Optimizify offers an unparalleled solution for optimal YouTube channel growth. Our AI-driven software seamlessly integrates a multi-keyphrase targeting strategy and professional agency services.
              </p>
              <p className="text-base leading-relaxed">
                The platform utilizes advanced AI algorithms to conduct in-depth keyword research, implement cutting-edge keyphrase targeting strategies, and consolidate all ranking results within the user-friendly YouTube acceleration platform.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['AI-Powered Research', 'Multi-Keyphrase Targeting'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 bg-neutral-900/40 px-3 py-1 rounded-full border border-yellow-600/30">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-12"></div>
    </div>
  )
}