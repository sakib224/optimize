'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/reco1.jpeg' // Replace with your image path

export default function IntelligentKeyword() {
    // Fade-up animation variant
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
                    Keyword <span className="text-yellow-400 underline">Recommendation</span>
                </h1>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left side - Image Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full max-w-xl mx-auto group"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-yellow-600/30 w-full h-[400px] lg:h-[500px] transition-all duration-500 group-hover:shadow-[0_0_70px_rgba(234,179,8,0.7)]">
                            <Image
                                src={bg}
                                alt="AI-Powered Dashboard"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                priority
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-yellow-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-40 z-10"></div>

                            {/* Label */}
                            <div className="absolute top-8 left-4 w-[540px] bg-neutral-900/90 backdrop-blur-sm rounded-lg p-4 border border-yellow-600/50 z-20
    transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="text-yellow-400 font-bold text-sm"> AI-POWERED</div>
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
                        {/* Badge */}
                        <motion.div
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(234,179,8,0.3)' }}
                            className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 font-semibold"
                        >
                            🤖  AI-DRIVEN INNOVATION
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Intelligent Keyword <br />
                            <span className="text-yellow-400">Recommendations</span>
                        </h2>

                        {/* Description */}
                        <div className="space-y-4 text-gray-300">
                            <p className="text-[18px] leading-relaxed">
                                Optimizify's AI-driven software offers advanced Keyword Recommendations that help you optimize your YouTube channel's content. Our feature utilizes cutting-edge AI algorithms to conduct in-depth keyword research.
                            </p>
                            <p className="text-[18px] leading-relaxed">
                                Create content that is more likely to be viewed and shared by your target audience. The software analyzes data from past and current campaigns to identify trends and provides actionable insights.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <h3 className="text-xl font-bold text-yellow-400">AI</h3>
                                <p className="mt-2 text-sm text-gray-400">Algorithm Powered</p>
                            </div>

                            {/* Card 2 */}
                            <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <h3 className="text-xl font-bold text-yellow-400">High</h3>
                                <p className="mt-2 text-sm text-gray-400">Performance Keywords</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom spacing */}
            <div className="pb-12"></div>
        </div>
    )
}