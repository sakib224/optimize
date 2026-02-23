'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/test1.jpg' 

export default function VisualDesign() {
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
                   Thumbnail  <span className="text-yellow-400 underline">Design</span>
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
                                <div className="text-yellow-400 font-bold text-sm"> VISUAL IMPACT</div>
                                <div className="text-gray-300 text-xs mt-1">First impression design</div>
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
                            🎨 VISUAL DESIGN
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Increase the Visibility <br />
                            <span className="text-yellow-400">of Your Content!</span>
                        </h2>

                        {/* Description */}
                        <div className="space-y-4 text-gray-300">
                            <p className="text-[18px] leading-relaxed">
                                Thumbnail design is an essential aspect of video marketing that can help increase the visibility of your content. It's the first thing viewers see when they come across your video, and it can make or break their decision to watch it.
                            </p>
                            <p className="text-[20px] leading-relaxed">
                                A well-designed thumbnail can grab the viewer's attention and entice them to click on your video. Consider your channel's branding and the message you want to convey, choosing images that accurately represent your content.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="relative rounded-xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4 ">
                                <h3 className="text-[16px] font-bold text-yellow-400">Brand Alignment</h3>
                                <p className="mt-2 text-sm text-gray-400">Channel consistency</p>
                            </div>

                            {/* Card 2 */}
                            <div className="relative rounded-xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-4 ">
                                <h3 className="text-[16px] font-bold text-yellow-400">Content Match</h3>
                                <p className="mt-2 text-sm text-gray-400">Accurate representation</p>
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