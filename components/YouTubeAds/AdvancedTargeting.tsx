'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/dist2.jpg'

export default function AdvancedTargeting() {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }

        const leftCards = [
        { title: 'Demographics', desc: 'Age, gender, income' },
        { title: 'Geography', desc: 'Countries to local areas' },
        { title: 'Interests', desc: 'Affinity audiences' },
        { title: 'Custom Audiences', desc: 'Tailored behaviors' },
        { title: 'In-Market', desc: 'Active shoppers' },
        { title: 'Remarketing', desc: 'Previous interactions' },
    ]

    // const rightCard = { title: 'Emerging', desc: 'Trend Detection' }
    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left side - Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full flex justify-center group cursor-pointer"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-yellow-600/30 w-full max-w-[980px] h-[350px] lg:h-[400px]">

                            <Image
                                src={bg}
                                alt="AI-Powered Dashboard"
                                className="object-cover w-full h-full"
                                priority
                            />

                            <div className="absolute inset-0 bg-yellow-400/20"></div>

                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-neutral-900/90 backdrop-blur-sm rounded-lg py-2 px-6 ">
                                <div className="text-yellow-400 font-bold text-sm text-start">
                                    PRECISION TARGETING
                                </div>
                                <div className="text-gray-300 text-xs mt-1 text-start">
                                    Advanced audience segmentation
                                </div>
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
                        <div className="inline-flex items-center bg-yellow-600/20 text-yellow-400 border border-yellow-600/50 px-3 py-1 rounded-full font-semibold text-sm">
                            🎯 TARGETING OPTIONS
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                            Advanced Targeting<br />
                            <span className="text-yellow-400">Options Available</span>
                        </h2>

                        <div className="space-y-4 text-gray-300 text-sm lg:text-lg">
                            <p>
                                YouTube ads come with a comprehensive variety of targeting options to help you reach the most relevant audience for maximum campaign effectiveness.
                            </p>

                            {/* ✅ CARDS LAYOUT */}
                           <div className="grid sm:grid-cols-2 gap-2">

                                {/* Left Cards */}
                                {leftCards.map((card, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] px-4 py-2"
                                    >
                                        <h3 className="text-[15px] font-bold text-yellow-400">{card.title}</h3>
                                        <p className="mt-2 text-[10px] text-gray-400">{card.desc}</p>
                                    </motion.div>
                                ))}

                                {/* Right Card
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-6 flex flex-col justify-center"
                                >
                                    <h3 className="text-2xl font-bold text-yellow-400">{rightCard.title}</h3>
                                    <p className="mt-2 text-sm text-gray-400">{rightCard.desc}</p>
                                </motion.div> */}

                            </div>

                            <p className="pt-4">
                                YouTube ads provide a powerful platform for reaching a broad audience, driving engagement, and achieving marketing objectives.
                            </p>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Global Reach', 'Precise Targeting'].map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2 bg-neutral-900/40 px-3 py-1 rounded-full border border-yellow-600/30"
                                >
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                    <span className="text-sm text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="pb-12"></div>
        </div>
    )
}