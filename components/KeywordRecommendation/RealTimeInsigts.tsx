'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/reco2.jpg'

export default function RealTimeInsigts() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-4 py-2 rounded-full font-semibold transition-all duration-300"
                        >
                            📊 REAL-TIME INSIGHTS
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Real-time Data & <br />
                            <span className="text-yellow-400">
                                Trending Topics
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl lg:text-xl leading-relaxed text-gray-300">
                            The software provides real-time data on trending topics and keywords, allowing you to adjust your content strategy accordingly. Stay ahead of the competition by identifying emerging trends before they become mainstream.
                        </p>

                        {/* Features */}
                        <div className="pt-3 space-y-4">
                            {[
                                'Real-time trending data',
                                'Emerging trend identification',
                                'Unique content differentiation',
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex items-center text-white justify-center w-6 h-6 bg-yellow-400 text-neutral-950 font-bold rounded-full">
                                        ✓
                                    </span>

                                    <span className="text-lg lg:text-xl text-gray-300 font-semibold">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}

                            <p className="text-xl lg:text-xl leading-relaxed text-gray-300">
                                Create content that is unique and differentiated, helping you stand out in a crowded market with our advanced trend analysis capabilities.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-lg h-[400px] lg:h-[500px] group rounded-xl overflow-hidden border border-yellow-600/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(234,179,8,0.6)]">

                            <Image
                                src={bg}
                                alt="AI-Powered Dashboard"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />

                            {/* Golden Hover Overlay */}
                            <div className="absolute inset-0 bg-yellow-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>

                            {/* Glow Ring */}
                            <div className="absolute inset-0 rounded-xl ring-0 ring-yellow-500/0 transition-all duration-500 group-hover:ring-4 group-hover:ring-yellow-500/40"></div>
                            <div className="absolute bottom-2 left-2 w-[490px] bg-neutral-900/90 backdrop-blur-sm rounded-lg p-4 border border-yellow-600/50 z-20
    transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="text-yellow-400 font-bold text-sm"> LIVE DATA</div>
                                <div className="text-gray-300 text-xs mt-1">Real-time keyword insights</div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}