'use client';

import { useState } from 'react';

export default function WhatsIncluded() {
  const [activeTab, setActiveTab] = useState('features');

  const tabs = [
    { id: 'features', label: 'Features', color: 'text-white' },
    { id: 'bronze', label: 'Bronze', color: 'text-orange-500' },
    { id: 'silver', label: 'Silver', color: 'text-gray-300' },
    { id: 'gold', label: 'Gold', color: 'text-yellow-400' },
    { id: 'platinum', label: 'Platinum', color: 'text-cyan-400' },
  ];

  // Features array to map over
  const features = [
    'Breaking Story Search Volume Identifier',
    'Top Trending Keyword Analysis',
    'AI-Powered Title Suggestions',
    'Custom Thumbnail Recommendations',
    'Daily Analytics Reporting',
  ];

  return (
    <div className="min-h-screen bg-black pt-20 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="border border-gray-700 rounded-2xl p-8 bg-zinc-950 backdrop-blur">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-white">What's </span>
            <span className="text-yellow-400">Included</span>
          </h1>
          <p className="text-gray-400 text-center mt-4">
            Choose The Perfect Plan For Your YouTube Growth Journey
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full border transition-all duration-200 font-semibold text-lg
                ${activeTab === tab.id
                  ? 'border-gray-500 bg-gray-900'
                  : 'border-gray-700 bg-transparent hover:bg-gray-900/50'}
              `}
            >
              <span className={tab.color}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Optimization Features Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="border-2 border-yellow-700 rounded-2xl p-6 bg-yellow-900/20">
          <h2 className="text-2xl font-bold text-white">Optimization Features</h2>
        </div>

        {/* Feature Cards */}
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="border border-gray-700 rounded-2xl p-8 bg-zinc-950"
          >
            <div className="grid grid-cols-12 gap-8">
              {/* Left Content */}
              <div className="col-span-12 md:col-span-6">
                <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ensure That You Are Kept Up To Date With The Top Stories On A Daily Basis. The Best Channel Take Advantage Of The Best Stories.
                </p>
              </div>

              {/* Right Icons */}
              <div className="col-span-12 md:col-span-6 flex items-center justify-end gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 border-4 border-yellow-500 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}