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

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-20 px-6 text-white">

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="border border-gray-700 rounded-2xl p-10 bg-zinc-950 backdrop-blur">
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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="w-full max-w-[1400px] mx-auto mb-16"
      >
        <div className="flex flex-wrap gap-5 justify-center">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-12 py-5 rounded-full border transition-all duration-300 font-bold text-2xl
                ${
                  activeTab === tab.id
                    ? 'border-gray-400 bg-gray-900'
                    : 'border-gray-700 hover:bg-gray-900/50'
                }
              `}
            >
              <span className={tab.color}>{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

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
            whileHover={{ scale: 1.02 }}
            className="border border-gray-700 rounded-2xl p-10 bg-[#111111]"
          >
            <div className="flex flex-col md:flex-row gap-10">

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{feature}</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Ensure That You Are Kept Up To Date With The Top Stories On A
                  Daily Basis. The Best Channels Take Advantage Of The Best Stories.
                </p>
              </div>

              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="flex-1 flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                >
                  <div className="w-16 h-16 border-4 border-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  </div>
                </motion.div>
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
            whileHover={{ scale: 1.02 }}
            className="border border-gray-700 rounded-2xl p-10 bg-zinc-950"
          >
            <div className="flex flex-col md:flex-row gap-10">

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{tool}</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Gain Deep Insights Into Your Channel Performance And Unlock
                  Opportunities To Scale Faster With Data-Driven Decisions.
                </p>
              </div>

              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="flex-1 flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                >
                  <div className="w-16 h-16 border-4 border-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}