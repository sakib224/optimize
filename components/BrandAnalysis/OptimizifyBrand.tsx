'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/brand1.jpg'

export default function OptimizifyBrand() {
    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left side - Image with hover (swapped) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full flex justify-center group cursor-pointer"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-yellow-600/30 w-full max-w-[1400px] lg:max-w-[1350px] h-[350px] lg:h-[450px] transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-400/40">

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

                            {/* card */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-neutral-900/90 backdrop-blur-sm rounded-lg py-3 px-4">
                                <div className="text-yellow-400 font-bold text-xs text-start">OPTIMIZIFY SERVICES</div>
                                <div className="text-gray-300 text-[10px] mt-0.5 text-start">Professional brand consulting</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Content (swapped) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-2"
                    >
                        {/* Small Badge */}
                        <div className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 font-semibold text-sm ">
                            🏆 PREMIUM CONSULTING
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl lg:text-5xl  font-bold leading-tight">
                            Optimizify Brand <br />
                            <span className="text-yellow-400">Analysis Services</span>
                        </h2>
                        <p className='font-[15px]'>Optimizify provides comprehensive brand analysis services to businesses using data-driven methodologies to evaluate brand performance and develop effective strategies.</p>

                        {/* Description */}
                        <div className="space-y-2 text-gray-300 text-sm lg:text-[20px]">
                            <div className="pt-4 space-y-4">
                                {[
                                    { feature: 'Target Audience Analysis', desc: 'Deep dive into customer demographics and behaviors' },
                                    { feature: 'Brand Identity & Positioning', desc: 'Comprehensive evaluation of brand messaging and market position' },
                                    { feature: 'Strategic Recommendations', desc: 'Actionable insights to improve reputation and market position' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.feature}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-yellow-600/20 rounded-xl p-5 text-white"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-400 text-white font-bold rounded-full">
                                                ✓
                                            </span>
                                            <span className="text-lg lg:text-xl text-yellow-400 font-semibold">
                                                {item.feature}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 text-sm lg:text-[14px]">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-yellow-600/20 rounded-xl p-5  mt-4"
                            >
                                <p className="text-gray-300 text-lg lg:text-xl">
                                    Our <span className="text-yellow-400">brand analysis service</span> helps <span className="text-yellow-400">businesses</span> <span className="text-yellow-400">gain a competitive edge, increase customer loyalty,</span> and drive revenue growth through strategic insights.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom spacing */}
            <div className="pb-12"></div>
        </div>
    )
}