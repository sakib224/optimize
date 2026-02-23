'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WhatsIncluded() {
  const [activeTab, setActiveTab] = useState('features');

  const tabs = [
    { id: 'features', label: 'Features', color: 'text-white' },
    { id: 'bronze', label: 'Bronze', color: 'text-orange-500' },
    { id: 'silver', label: 'Silver', color: 'text-gray-300' },
    { id: 'gold', label: 'Gold', color: 'text-yellow-400' },
    { id: 'platinum', label: 'Platinum', color: 'text-cyan-400' },
  ];

  const features = [
    'Breaking Story Search Volume Identifier',
    'Top Trending Keyword Analysis',
    'AI-Powered Title Suggestions',
    'Custom Thumbnail Recommendations',
    'Daily Analytics Reporting',
  ];

  const growthTools = [
    'Competitor Performance Tracking',
    'Audience Retention Insights',
    'CTR Optimization Guidance',
    'Upload Timing Recommendations',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Sample tick/cross status for features and growth tools
  const featureStatus = [
    [true, false, true, true],
    [true, true, false, true],
    [false, true, true, true],
    [true, true, true, false],
    [true, true, true, true],
  ];

  const growthStatus = [
    [true, true, false, true],
    [true, false, true, true],
    [true, true, true, false],
    [true, true, true, true],
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-20 px-6 text-white">

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-xl mx-auto mb-16"
      >
        <div className="border border-gray-700 rounded-2xl p-10 bg-[#191919] backdrop-blur">
          <h1 className="text-5xl font-bold text-center">
            <span className="text-white">What's </span>
            <span className="text-yellow-400">Included</span>
          </h1>
          <p className="text-gray-400 text-center mt-5 text-lg">
            Choose The Perfect Plan For Your YouTube Growth Journey
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="w-full mb-16">
        <div className="flex flex-wrap px-5 gap-5 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-16 py-6 rounded-xl border font-bold text-3xl 
                ${activeTab === tab.id ? 'border-gray-400 bg-gray-900' : 'border-gray-700'}
              `}
            >
              <span className={tab.color}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* Optimization Features Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="border-2 border-yellow-700 rounded-2xl p-7 bg-yellow-900/20"
        >
          <h2 className="text-4xl font-bold">Optimization Features</h2>
        </motion.div>

        {/* Feature Cards */}
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="border border-gray-700 rounded-2xl p-10 bg-[#111111] hover:border-yellow-500 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row gap-10">

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{feature}</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Ensure That You Are Kept Up To Date With The Top Stories On A
                  Daily Basis. The Best Channels Take Advantage Of The Best Stories.
                </p>
              </div>

              {/* ✅ / ❌ SVG Icons */}
              {featureStatus[idx].map((status, i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  {status ? (
                    // ✅ Tick inside black circle with golden tick
                    <div className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="#000000" // black tick
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </div>
                  ) : (
                    // ❌ Cross inside black circle with red cross
                    <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="red"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.364 5.636a1 1 0 0 0-1.414 0L12 10.586 7.05 5.636a1 1 0 1 0-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 0 0 1.414 1.414L12 13.414l4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 12l4.95-4.95a1 1 0 0 0 0-1.414z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </motion.div>
        ))}

        {/* Channel Growth Tools Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="border-2 border-cyan-700 rounded-2xl p-7 bg-cyan-900/20 mt-10"
        >
          <h2 className="text-4xl font-bold">Channel Growth Tools</h2>
        </motion.div>

        {/* Growth Tool Cards */}
        {growthTools.map((tool, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.9 + idx * 0.1 }}
            className="border border-gray-700 rounded-2xl p-10 bg-zinc-950 hover:border-cyan-500 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row gap-10">

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{tool}</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Gain Deep Insights Into Your Channel Performance And Unlock
                  Opportunities To Scale Faster With Data-Driven Decisions.
                </p>
              </div>

              {/* ✅ / ❌ SVG Icons */}
              {growthStatus[idx].map((status, i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  {status ? (
                    // ✅ Tick inside black circle with golden tick
                    <div className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="#000000" // black tick
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </div>
                  ) : (
                    // ❌ Cross inside black circle with red cross
                    <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="red"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.364 5.636a1 1 0 0 0-1.414 0L12 10.586 7.05 5.636a1 1 0 1 0-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 0 0 1.414 1.414L12 13.414l4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 12l4.95-4.95a1 1 0 0 0 0-1.414z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}