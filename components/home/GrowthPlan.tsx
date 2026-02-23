'use client'

import { Info } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GrowthPlan() {
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
    const [billingType, setBillingType] = useState<'monthly' | 'annual'>('annual')

    const featureDescriptions: Record<string, string> = {
        'UNLIMITED KEYWORD RESEARCH': 'Research unlimited keywords to find the best opportunities for your videos',
        'SMARTRANK KEYWORD SELECTION': 'AI-powered selection of the most effective keywords for ranking',
        'AI-POWERED YOUTUBE METADATA OPTIMIZATION': 'Automatically optimize your video titles, descriptions and tags',
        'INTELLIGENT YOUTUBE SEO TAGGING': 'Intelligent tagging system powered by AI for better SEO performance',
        '2 VIDEOS OPTIMIZED': 'Optimize up to 2 videos per month',
        '4 VIDEOS OPTIMIZED': 'Optimize up to 4 videos per month',
        '8 VIDEOS OPTIMIZED': 'Optimize up to 8 videos per month',
    }

    const annualPlans = [
        {
            name: 'Bronze',
            subtitle: 'Perfect Plan For Your Needs',
            price: 995,
            monthlyPrice: 82.92,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH' },
                { name: 'SMARTRANK KEYWORD SELECTION' },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION' },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING' },
                { name: '2 VIDEOS OPTIMIZED' },
            ],
            cta: 'Get Bronze',
            featured: false,
        },
        {
            name: 'Silver',
            subtitle: 'Perfect Plan For Your Needs',
            price: 1907,
            monthlyPrice: 158.95,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH' },
                { name: 'SMARTRANK KEYWORD SELECTION' },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION' },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING' },
                { name: '4 VIDEOS OPTIMIZED' },
            ],
            cta: 'Get Silver',
            featured: false,
        },
        {
            name: 'Gold',
            subtitle: 'Perfect Plan For Your Needs',
            price: 3621,
            monthlyPrice: 301.75,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH' },
                { name: 'SMARTRANK KEYWORD SELECTION' },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION' },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING' },
                { name: '8 VIDEOS OPTIMIZED' },
            ],
            cta: 'Get Gold',
            featured: true,
        },
    ]

    const monthlyPlans = [
        {
            name: 'Bronze',
            subtitle: 'Perfect Plan For Your Needs',
            price: 85,
            monthlyPrice: 85,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH' },
                { name: 'SMARTRANK KEYWORD SELECTION' },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION' },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING' },
                { name: '2 VIDEOS OPTIMIZED' },
            ],
            cta: 'Get Bronze',
            featured: false,
        },
        {
            name: 'Silver',
            subtitle: 'Perfect Plan For Your Needs',
            price: 159,
            monthlyPrice: 159,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH' },
                { name: 'SMARTRANK KEYWORD SELECTION' },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION' },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING' },
                { name: '4 VIDEOS OPTIMIZED' },
            ],
            cta: 'Get Silver',
            featured: false,
        },
        {
            name: 'Gold',
            subtitle: 'Perfect Plan For Your Needs',
            price: 302,
            monthlyPrice: 302,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH' },
                { name: 'SMARTRANK KEYWORD SELECTION' },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION' },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING' },
                { name: '8 VIDEOS OPTIMIZED' },
            ],
            cta: 'Get Gold',
            featured: true,
        },
    ]

    const plans = billingType === 'annual' ? annualPlans : monthlyPlans

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <main className="min-h-screen bg-[#0F0F0F] pt-12 pb-20 px-4 overflow-hidden">
            
            {/* Header */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="max-w-6xl mx-auto mb-16 text-center"
            >
                <div className="inline-block mb-8">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                    >
                        <span>&diams;</span>
                        <span>Step/Launch Bundle</span>
                    </motion.div>
                </div>

                <h1 className="text-5xl font-bold text-white mb-3">
                    Choose Your
                    <br />
                    <span className="text-yellow-400">Growth Plan</span>
                </h1>

                <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto">
                    Accelerate Your YouTube Success With Our AI Powered Optimization Tools And Expert Guidance
                </p>

                {/* Toggle */}
                <div className="inline-flex gap-3 border-2 border-yellow-400/50 rounded-2xl p-2 mb-16 max-w-lg w-full">
                    {['monthly', 'annual'].map((type) => (
                        <motion.button
                            key={type}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setBillingType(type as 'monthly' | 'annual')}
                            className={`flex-1 px-8 py-4 rounded-xl font-bold transition-all ${
                                billingType === type
                                    ? 'bg-yellow-400 text-black'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {type === 'annual' ? 'Annual (Save 15%)' : 'Monthly'}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Cards */}
            <div className="max-w-7xl bg-[#111111] mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={`${plan.name}-${billingType}`}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className={`rounded-xl border p-8 transition-all duration-500 ${
                                    plan.featured
                                        ? 'border-yellow-400 bg-[#0F0F0F]'
                                        : 'border-gray-700 bg-[#0F0F0F]'
                                }`}
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.15 }}
                                    className="w-14 h-14 rounded-lg bg-yellow-400 flex items-center justify-center mb-6"
                                >
                                    ▶
                                </motion.div>

                                <h3 className="text-white font-bold text-2xl mb-2">
                                    {plan.name}
                                </h3>

                                <p className="text-gray-400 text-base mb-6">
                                    {plan.subtitle}
                                </p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-yellow-400 text-5xl font-black">
                                            ${plan.price}
                                        </span>
                                        <span className="text-gray-500 text-base">
                                            {billingType === 'annual' ? '/Year' : '/Month'}
                                        </span>
                                    </div>

                                    {billingType === 'annual' && (
                                        <p className="text-gray-500 text-base">
                                            ${plan.monthlyPrice}/month billed annually
                                        </p>
                                    )}
                                </div>

                                {/* Features */}
                                <div className="space-y-4 mt-5 mb-8">
                                    {plan.features.map((feature, idx) => {
                                        const featureKey = `${plan.name}-${idx}`
                                        const isHovered = hoveredFeature === featureKey

                                        return (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.02 }}
                                                onMouseEnter={() => setHoveredFeature(featureKey)}
                                                onMouseLeave={() => setHoveredFeature(null)}
                                                className="relative"
                                            >
                                                <div className="border border-yellow-400/50 rounded-xl p-4 flex items-center gap-3">
                                                    <span className="text-yellow-400">▶</span>
                                                    <span className="text-base font-bold flex-1">
                                                        {feature.name}
                                                    </span>
                                                    <Info className="w-5 h-5 text-gray-500" />
                                                </div>

                                                <AnimatePresence>
                                                    {isHovered && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            className="absolute left-full top-0 ml-2 z-10"
                                                        >
                                                            <div className="bg-yellow-400 text-black text-sm font-bold p-3 rounded-xl shadow-2xl w-[250px]">
                                                                {featureDescriptions[feature.name] || feature.name}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        )
                                    })}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-[150px] py-3 rounded-xl font-black text-lg bg-yellow-400 text-black"
                                >
                                    {plan.cta} →
                                </motion.button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    )
}