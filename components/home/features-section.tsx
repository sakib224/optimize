'use client'

import { ArrowRight } from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      id: '1',
      title: 'SEO Optimization',
      description:
        'AI-Powered Title And Description Optimization To Boost Your Video Rankings And Discoverability.',
      icon: '✅',
    },
    {
      id: '2',
      title: 'Analytics Dashboard',
      description:
        'Deep Insights Into Your Channel Performance With Actionable Recommendations For Growth.',
      icon: '✅',
    },
    {
      id: '3',
      title: 'Audience Targeting',
      description:
        'Identify And Reach Your Perfect Audience With Precision Targeting And Demographic Analysis.',
      icon: '✅',
    },
    {
      id: '4',
      title: 'Trend Analysis',
      description:
        'Stay Ahead Of The Curve With Real-Time Trend Detection And Viral Content Predictions.',
      icon: '✅',
    },
    {
      id: '5',
      title: 'SEO-Driven Content Blueprint',
      description:
        'Unlock High-Ranking Video Ideas, Tags, And Posting Plans Designed To Dominate YouTube Search. Set It And Forget It. Our AI Continuously Optimizes Your Content For Maximum Performance.',
      icon: '✅',
    },
    {
      id: '6',
      title: 'Keyword Ranking Insights',
      description:
        'Track How Your Videos Rank On YouTube Search. Uncover Winning Keywords. And Spot New Growth Opportunities.',
      icon: '✅',
    },
  ]

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-[#22C55E] mb-5">
            POWERFUL FEATURES
          </h1>
          <p className="text-[#9ca3af] text-lg font-semibold">
            Everything You Need To Dominate YouTube And Grow Your Channel To New Heights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative p-8 bg-[#0B0C0F] border border-[#2E7D32] rounded-xl 
                         transition-all duration-500 ease-in-out transform 
                         hover:scale-105 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-[#ECBB26] rounded-full flex items-center justify-center mb-5">
                <span className="text-2xl text-[#0a0a0a]">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#ECBB26] mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#d1d5db] leading-relaxed font-semibold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#0a0a0a] navbar-cta hover:bg-[#0a0a0a] text-[#0a0a0a] font-bold px-16 py-4 rounded-lg flex items-center gap-3 text-lg transition-colors duration-300 ease-in-out min-w-[300px]">
            <span>Explore All Features</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}