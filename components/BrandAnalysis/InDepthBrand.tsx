'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '@/public/images/brand2.jpg'

export default function InDepthBrand() {
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
                            📊 COMPREHENSIVE ANALYSIS
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl lg:text-5xl  font-bold leading-tight">
                            In-Depth Brand <br />
                            <span className="text-yellow-400">Analysis Process</span>
                        </h2>
                        <p className='font-[15px]'>A typical brand analysis includes company summary, branding goals, objectives, objective results, internal feedback, customer feedback, and competitive analysis.</p>
                        {/* Description */}
                        <div className="space-y-2 text-gray-300 text-sm lg:text-[20px]">
                            <div className="pt-4 space-y-4">
                                {[
                                    { feature: 'Company Summary', desc: 'Describes company name, industry, and market competitors' },
                                    { feature: 'Branding Goals', desc: 'Overall strategy, objectives, and brand voice description' },
                                    { feature: 'Measurable Objectives', desc: 'Specific targets like reaching 100 new customers monthly' },
                                    { feature: 'Feedback Analysis', desc: 'Internal team interviews and customer feedback data' },
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
                                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-400 text-white  rounded-full">
                                                {index + 1}
                                            </span>
                                            <span className="text-lg lg:text-xl text-yellow-400">
                                                {item.feature}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 text-sm lg:text-[14px] ml-10">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                                <p>Brand analysis is an essential process that helps companies reach new customers and increase current customer satisfaction by identifying improvement areas and marketing strengths.</p>
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
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-neutral-900/90 backdrop-blur-sm rounded-lg py-2 px-3 ">
                                <div className="text-yellow-400 font-bold text-sm text-start">ANALYSIS PROCESS</div>
                                <div className="text-gray-300 text-xs mt-1 text-start">Comprehensive brand evaluation</div>
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