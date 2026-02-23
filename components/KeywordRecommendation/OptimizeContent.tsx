'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/trend3.jpg'

export default function OptimizeContent() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative w-full max-w-xl mx-auto group"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-yellow-600/30 w-full h-[400px] lg:h-[500px] transition-all duration-500 group-hover:shadow-[0_0_70px_rgba(234,179,8,0.7)]">

                            <Image
                                src={bg}
                                alt="AI-Powered Dashboard"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />

                            {/* Golden Overlay Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-yellow-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-60"></div>

                            {/* Ring Glow */}
                            <div className="absolute inset-0 rounded-xl ring-0 ring-yellow-500/0 transition-all duration-500 group-hover:ring-4 group-hover:ring-yellow-500/40"></div>

                            {/* Label */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-neutral-900/90 backdrop-blur-sm rounded-t-lg py-2 px-3 border-t border-yellow-600/50">
                                <div className="text-yellow-400 font-bold text-sm text-start">OPTIMIZATION</div>
                                <div className="text-gray-300 text-xs mt-1 text-start">Maximum visibility & growth</div>
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT SIDE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-4 py-2 rounded-full font-semibold">
                            🚀 CONTENT OPTIMIZATION
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Optimize Content for <br />
                            <span className="text-yellow-400">Maximum Growth</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg leading-relaxed text-gray-300">
                            The Keyword Recommendations feature is designed to help you optimize your content for maximum visibility and growth. By identifying the most relevant and high-performing keywords for your niche, you create content that resonates.
                        </p>


                        <div className="flex flex-wrap gap-3 pt-4">
                            {['High-Performance Keywords', 'Niche Relevance'].map((feature) => (
                                <div key={feature} className="flex items-center gap-2 bg-neutral-900/40 px-3 py-1 rounded-full border border-yellow-600/30">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                    <span className="text-sm text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Stay ahead of the competition by identifying emerging trends before they become mainstream, allowing you to create content that is unique and differentiated in your market space.
                        </p>

                        {/* CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 1 */}
                            <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4">
                                <h3 className="text-xl font-bold text-yellow-400">
                                    Max
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Visibility
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4">
                                <h3 className="text-xl font-bold text-yellow-400">
                                    Unique
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Content
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}