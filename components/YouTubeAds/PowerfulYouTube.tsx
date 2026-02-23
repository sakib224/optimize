'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/dist2.jpg'

export default function PowerfulYouTube() {
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
                    YouTube <span className="text-yellow-400 underline">Ads</span>
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

                            {/* card */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-neutral-900/90 backdrop-blur-sm rounded-t-lg py-2 px-3 border-t border-yellow-600/50">
                                <div className="text-yellow-400 font-bold text-sm text-start">VIDEO ADVERTISING</div>
                                <div className="text-gray-300 text-xs mt-1 text-start">Reach 2B+ monthly users</div>
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
                        {/* Small Badge */}
                        <div

                            className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 font-semibold text-sm "
                        >
                            🚀 TARGETED ADVERTISING
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                            Powerful YouTube <br />
                            <span className="text-yellow-400">Advertising Platform</span>
                        </h2>

                        {/* Description */}
                        <div className="space-y-3 text-gray-300 text-sm lg:text-[20px]">
                            <p>
                                YouTube Ads are a powerful form of online advertising that allows marketers to reach their target audience through engaging video content. Promote products, services, or brands with precision targeting.
                            </p>


                            <p className='mt-8'>
                                YouTube ads provide a powerful platform for reaching a broad audience, driving engagement, and achieving marketing objectives. Create effective campaigns that resonate with your audience through advanced targeting and compelling content.
                            </p>
                        </div>
                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Global Reach', 'Precise Targeting'].map((feature) => (
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