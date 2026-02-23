'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/trend2.jpg'

export default function OptimizationEngine() {
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
                            ⚡  OPTIMIZATION ENGINE
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Optimize Content for<br />
                            <span className="text-yellow-400">
                                Maximum Growth
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl lg:text-xl leading-relaxed text-gray-300">
                            Our intelligent optimization engine analyzes your keyword performance data to identify opportunities for improvement and provides actionable recommendations.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 1 */}
                            <div
                                className="relative rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-yellow-400">
                                    +300%
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Engagement Boost
                                </p>
                            </div>

                            {/* Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4 transition-all duration-300"
                            >
                                
                                <h3 className="text-xl font-bold text-yellow-400">
                                    85%
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Success Rate
                                </p>
                            </motion.div>

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

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}