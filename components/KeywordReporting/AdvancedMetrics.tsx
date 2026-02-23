'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/repo3.jpg'

export default function AdvancedMetrics() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-xl h-[400px] lg:h-[500px] group rounded-xl overflow-hidden border border-yellow-600/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(234,179,8,0.6)]">
                            <Image
                                src={bg}
                                alt="AI-Powered Dashboard"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-yellow-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>
                            <div className="absolute inset-0 rounded-xl ring-0 ring-yellow-500/0 transition-all duration-500 group-hover:ring-4 group-hover:ring-yellow-500/40"></div>
                            <div className="absolute inset-0 bg-yellow-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>

                            {/* LIVE METRICS label */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-neutral-900/90 backdrop-blur-sm rounded-t-lg py-2 px-3 border-t border-yellow-600/50">
                                <div className="text-yellow-400 font-bold text-sm text-start">LIVE METRICS</div>
                                <div className="text-gray-300 text-xs mt-1 text-start">Real-time performance data</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-4 py-2 rounded-full font-semibold transition-all duration-300"
                        >
                            📈 TREND DETECTION
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Identify Latest Trends <br />
                            <span className="text-yellow-400">Before Competition</span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl lg:text-2xl leading-relaxed text-gray-300">
                            Our Trend Analysis feature helps you identify the latest
                            trends in your industry and create content that aligns
                            with those trends.
                        </p>

                        {/* Features */}
                        <div className="pt-6 space-y-4">
                            {[
                                'Real-time trend identification',
                                'Audience resonance analysis',
                                'Content alignment strategies',
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex items-center justify-center w-6 h-6 bg-yellow-400 text-neutral-950 text-white font-bold rounded-full">
                                        ✓
                                    </span>
                                    <span className="text-lg lg:text-xl text-gray-300 font-semibold">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}