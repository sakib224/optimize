'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/dist3.jpg'

export default function BenefitsofYouTube() {
    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left side - Content */}
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
                            💎 PREMIUM BENEFITS
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl lg:text-5xl  font-bold leading-tight">
                            Benefits of <br />
                            <span className="text-yellow-400">YouTube Ads</span>
                        </h2>

                        {/* Description */}
                        <div className="space-y-2 text-gray-300 text-sm lg:text-[20px]">
                            <div className="pt-4 space-y-4">
                                {[
                                    { feature: 'Massive Reach', desc: 'Access to 2+ billion logged-in monthly users across all demographics globally' },
                                    { feature: 'High Engagement', desc: 'Video content naturally captures and holds viewer attention effectively' },
                                    { feature: 'Advanced Targeting', desc: 'Precise targeting ensures ads reach the most relevant audience segments' },
                                    { feature: 'Measurable Results', desc: 'Detailed analytics to track performance and measure ROI effectively' },
                                    { feature: 'Cost-Effective', desc: 'TrueView ads ensure you only pay when viewers actively engage' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.feature}
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="flex flex-col gap-1"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-400 text-neutral-950  text-white font-bold rounded-full">
                                                ✓
                                            </span>
                                            <span className="text-lg lg:text-xl text-yellow-400 ">
                                                {item.feature}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 text-sm lg:text-[14px] ml-10">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Image with hover */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full flex justify-center group cursor-pointer"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-yellow-600/30 w-full max-w-[1300px] lg:max-w-[1250px] h-[450px] lg:h-[550px] transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-400/40">

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
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-neutral-900/90 backdrop-blur-sm rounded-t-lg py-2 px-3 border-t border-yellow-600/50">
                                <div className="text-yellow-400 font-bold text-sm text-start">VIDEO ADVERTISING</div>
                                <div className="text-gray-300 text-xs mt-1 text-start">Reach 2B+ monthly users</div>
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