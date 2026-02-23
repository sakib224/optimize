'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/repo1.jpg'

export default function PerformanceTracking() {
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
                    Keyword <span className="text-yellow-400 underline">Reporting</span>
                </h1>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left side - Image with hover */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full flex justify-center group cursor-pointer"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-yellow-600/30 w-[980px] lg:w-[930px] max-w-[980px] h-[350px] lg:h-[400px] transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-400/40">

                            {/* Image */}
                            <Image
                                src={bg}
                                alt="AI-Powered Dashboard"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                style={{ objectFit: 'cover' }}
                                priority
                            />

                            {/* Gold hover background */}
                            <div className="absolute inset-0 bg-yellow-400/30 opacity-0 transition-all duration-500 group-hover:opacity-50 rounded-xl"></div>

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
                        {/* Small Badge */}
                        <motion.div
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(234,179,8,0.3)' }}
                            className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 font-semibold text-sm lowercase"
                        >
                            🚀 performance tracking
                        </motion.div>

                        {/* Main Heading */}
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                            Track Performance <br />
                            <span className="text-yellow-400">Like Never Before</span>
                        </h2>

                        {/* Description */}
                        <div className="space-y-3 text-gray-300 text-sm lg:text-[20px]">
                            <p>
                                Optimizify's advanced Keyword Reporting feature provides comprehensive tracking and analytics to measure the success of your YouTube channel's keyword targeting strategy.
                            </p>
                            <p>
                                The platform utilizes advanced AI algorithms to conduct in-depth keyword research, implement cutting-edge keyphrase targeting strategies, and consolidate all ranking results within the user-friendly YouTube acceleration platform.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Bottom spacing */}
            <div className="pb-12"></div>
        </div>
    )
}