'use client'

import { Info } from 'lucide-react'
import { useState } from 'react'

export default function GrowthPlan() {
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

    const featureDescriptions: Record<string, string> = {
        'UNLIMITED KEYWORD RESEARCH': 'Research unlimited keywords to find the best opportunities for your videos',
        'SMARTRANK KEYWORD SELECTION': 'AI-powered selection of the most effective keywords for ranking',
        'AI-POWERED YOUTUBE METADATA OPTIMIZATION': 'Automatically optimize your video titles, descriptions and tags',
        'INTELLIGENT YOUTUBE SEO TAGGING': 'Intelligent tagging system powered by AI for better SEO performance',
        '2 VIDEOS OPTIMIZED': 'Optimize up to 2 videos per month',
        '4 VIDEOS OPTIMIZED': 'Optimize up to 4 videos per month',
        '8 VIDEOS OPTIMIZED': 'Optimize up to 8 videos per month',
    }

    const plans = [
        {
            name: 'Bronze',
            subtitle: 'Perfect Plan For Your Needs',
            price: 995,
            originalPrice: 1190,
            monthlyPrice: 82.92,
            savings: 191,
            savingsPercent: 16,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH', highlighted: false },
                { name: 'SMARTRANK KEYWORD SELECTION', highlighted: false },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION', highlighted: false },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING', highlighted: false },
                { name: '2 VIDEOS OPTIMIZED', highlighted: false },
            ],
            cta: 'Get Bronze',
            featured: false,
        },
        {
            name: 'Silver',
            subtitle: 'Perfect Plan For Your Needs',
            price: 1907,
            originalPrice: 2379,
            monthlyPrice: 158.95,
            savings: 472,
            savingsPercent: 20,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH', highlighted: false },
                { name: 'SMARTRANK KEYWORD SELECTION', highlighted: false },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION', highlighted: false },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING', highlighted: false },
                { name: '4 VIDEOS OPTIMIZED', highlighted: false },
            ],
            cta: 'Get Silver',
            featured: false,
        },
        {
            name: 'Gold',
            subtitle: 'Perfect Plan For Your Needs',
            price: 3621,
            originalPrice: 4753,
            monthlyPrice: 301.75,
            savings: 1131,
            savingsPercent: 24,
            features: [
                { name: 'UNLIMITED KEYWORD RESEARCH', highlighted: false },
                { name: 'SMARTRANK KEYWORD SELECTION', highlighted: false },
                { name: 'AI-POWERED YOUTUBE METADATA OPTIMIZATION', highlighted: false },
                { name: 'INTELLIGENT YOUTUBE SEO TAGGING', highlighted: true },
                { name: '8 VIDEOS OPTIMIZED', highlighted: false },
            ],
            cta: 'Get Gold',
            featured: true,
        },
    ]

    return (
        <main className="min-h-screen bg-black pt-12 pb-20 px-4">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-block mb-8">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                           <span className="text-black font-bold">&diams;</span>
                            <span>Step/Launch Bundle</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl font-bold text-white mb-3">
                        Choose Your
                        <br />
                        <span className="text-yellow-400">Growth Plan</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
                        Accelerate Your YouTube Success With Our AI Powered Optimization Tools And Expert Guidance
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex gap-1 border border-gray-700 rounded-lg p-1 mb-16 bg-transparent">
                        <button className="px-6 py-2 rounded text-gray-400 text-sm font-medium transition-colors">
                            Monthly
                        </button>
                        <button className="px-4 py-1 rounded bg-yellow-400 text-black text-xs font-bold transition-colors">
                            Save 15%
                        </button>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-xl border p-6 transition-all duration-300 ${plan.featured
                                ? 'border-yellow-400 bg-black'
                                : 'border-gray-700 bg-black'
                                }`}
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center mb-4">
                                <span className="text-black font-bold text-lg">▶</span>
                            </div>

                            {/* Plan Name */}
                            <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                            <p className="text-gray-400 text-xs mb-4">{plan.subtitle}</p>

                            {/* Price Section */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-yellow-400 text-3xl font-bold">${plan.price}</span>
                                    <span className="text-gray-500 text-sm">/Year</span>
                                </div>
                                <p className="text-gray-500 text-xs mb-2">
                                    ${plan.monthlyPrice}/month billed annually
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500 text-xs line-through">${plan.originalPrice}</span>
                                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        Save {plan.savingsPercent}% (${plan.savings})
                                    </span>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-3 mb-6">
                                {plan.features.map((feature, idx) => {
                                    const featureKey = `${plan.name}-${idx}`
                                    const isHovered = hoveredFeature === featureKey

                                    return (
                                        <div
                                            key={idx}
                                            className="relative group"
                                            onMouseEnter={() => setHoveredFeature(featureKey)}
                                            onMouseLeave={() => setHoveredFeature(null)}
                                        >
                                            <div
                                                className={`border rounded-lg p-3 flex items-center gap-3 transition-all cursor-pointer ${isHovered
                                                    ? 'border-yellow-400 bg-yellow-400 bg-opacity-30'
                                                    : feature.highlighted
                                                        ? 'border-yellow-400 bg-yellow-400 bg-opacity-20'
                                                        : 'border-yellow-400 border-opacity-50 hover:border-opacity-100'
                                                    }`}
                                            >
                                                <span className={`text-lg flex-shrink-0 transition-colors ${isHovered ? 'text-yellow-300' : 'text-yellow-400'
                                                    }`}>▶</span>
                                                <span className={`text-xs font-bold flex-1 transition-colors ${isHovered
                                                    ? 'text-yellow-300'
                                                    : feature.highlighted
                                                        ? 'text-yellow-400'
                                                        : 'text-white'
                                                    }`}>
                                                    {feature.name}
                                                </span>
                                                <Info className={`w-4 h-4 flex-shrink-0 cursor-pointer transition-colors ${isHovered ? 'text-yellow-300' : 'text-gray-500'
                                                    } hover:text-yellow-400`} />
                                            </div>

                                            {/* Tooltip */}
                                            {isHovered && (
                                                <div className="absolute bottom-full left-0 right-0 mb-2 z-10 opacity-100 transition-opacity">
                                                    <div className="bg-yellow-400 text-black text-xs font-medium p-3 rounded-lg shadow-lg whitespace-normal">
                                                        {featureDescriptions[feature.name] || feature.name}
                                                    </div>
                                                    <div className="absolute bottom-0 left-4 transform translate-y-full">
                                                        <div className="border-4 border-transparent border-t-yellow-400"></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 rounded font-bold transition-all duration-300 text-sm ${plan.featured
                                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                                    : 'bg-yellow-500 text-black hover:bg-yellow-400'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
