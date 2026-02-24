"use client";
import Image from 'next/image';
import { Info } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import white from '@/public/images/optimizify-play-gold-icon.png'


export default function GrowthPlan() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [billingType, setBillingType] = useState<"monthly" | "annual">(
    "annual"
  );

  const featureDescriptions: Record<string, string> = {
    "UNLIMITED KEYWORD RESEARCH":
      "Research unlimited keywords to find the best opportunities for your videos",
    "SMARTRANK KEYWORD SELECTION":
      "AI-powered selection of the most effective keywords for ranking",
    "AI-POWERED YOUTUBE METADATA OPTIMIZATION":
      "Automatically optimize your video titles, descriptions and tags",
    "INTELLIGENT YOUTUBE SEO TAGGING":
      "Intelligent tagging system powered by AI for better SEO performance",
    "2 VIDEOS OPTIMIZED": "Optimize up to 2 videos per month",
    "4 VIDEOS OPTIMIZED": "Optimize up to 4 videos per month",
    "8 VIDEOS OPTIMIZED": "Optimize up to 8 videos per month",
  };

  const annualPlans = [
    {
      name: "Bronze",
      subtitle: "Perfect Plan For Your Needs",
      price: 995,
      monthlyPrice: 82.92,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "2 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Bronze",
      featured: false,
    },
    {
      name: "Silver",
      subtitle: "Perfect Plan For Your Needs",
      price: 1907,
      monthlyPrice: 158.95,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "4 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Silver",
      featured: false,
    },
    {
      name: "Gold",
      subtitle: "Perfect Plan For Your Needs",
      price: 3621,
      monthlyPrice: 301.75,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "8 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Gold",
      featured: true,
    },
  ];

  const monthlyPlans = [
    {
      name: "Bronze",
      subtitle: "Perfect Plan For Your Needs",
      price: 85,
      monthlyPrice: 85,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "2 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Bronze",
      featured: false,
    },
    {
      name: "Silver",
      subtitle: "Perfect Plan For Your Needs",
      price: 159,
      monthlyPrice: 159,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "4 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Silver",
      featured: false,
    },
    {
      name: "Gold",
      subtitle: "Perfect Plan For Your Needs",
      price: 302,
      monthlyPrice: 302,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "8 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Gold",
      featured: true,
    },
  ];

  const plans = billingType === "annual" ? annualPlans : monthlyPlans;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
          <div className="bg-yellow-400 text-black px-3 py-2 rounded-full text-[14px] flex items-center gap-1">
            <span> 💎 Premium Plans Available</span>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white mb-3">
          Choose Your
          <br />
          <span className="text-yellow-400">Growth Plan</span>
        </h1>

        <p className="text-gray-400 text-xl mb-8 mx-auto">
          Accelerate Your YouTube Success With Our AI Powered Optimization
          Tools And Expert <br />
          Guidance
        </p>

        {/* Toggle */}
        <div className="inline-flex gap-2 border-2 border-[#2F3849] rounded-2xl p-1 mb-16 max-w-[500px] w-full relative overflow-hidden">
          {/* Sliding Background */}
          <motion.div
            className="absolute bg-gradient-to-r from-[#2F3849] to-[#2F3849] rounded-xl shadow-lg"
            layoutId="activeButton"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.8,
              duration: 0.4,
            }}
            style={{
              width: "calc(50% - 4px)",
              height: "calc(100% - 2px)",
              top: "1px",
              left: billingType === "monthly" ? "1px" : "calc(50% + 1px)",
            }}
          />

          {["monthly", "annual"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                billingType === type
                  ? {
                    scale: [1, 1.08, 1.06, 1.04, 1.02, 1],
                    transition: {
                      duration: 1.5,
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      ease: "easeOut",
                    },
                  }
                  : {}
              }
              onClick={() => setBillingType(type as "monthly" | "annual")}
              className={`flex-1 px-4 py-4 rounded-xl font-bold text-sm transition-all duration-500 z-10 ${billingType === type ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              style={{
                background: billingType === type ? "#2F3849" : "transparent",
              }}
            >
              <motion.span
                className="inline-flex items-center gap-1 whitespace-nowrap"
                animate={
                  billingType === type
                    ? {
                      textShadow: [
                        "0 0 0px #2F3849",
                        "0 0 20px #2F3849",
                        "0 0 15px #2F3849",
                        "0 0 10px #2F3849",
                        "0 0 5px #2F3849",
                        "0 0 0px #2F3849",
                      ],
                    }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {type === "annual" ? (
                  <>
                    <span>Annual</span>
                    <span className="bg-[#10B981] text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      Save Up to 24%
                    </span>
                  </>
                ) : (
                  "Monthly"
                )}
              </motion.span>
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
                className={`rounded-xl border bg-[#151515] p-8 transition-all duration-500 ${plan.featured
                  ? "border-yellow-400 bg-[#0F0F0F]"
                  : "border-gray-700 bg-[#0F0F0F]"
                  }`}
              >
                {/* Icon - Two SVGs */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="w-14 h-14 rounded-lg bg-yellow-400 flex items-center justify-center gap-1 mb-6"
                >
                  {/* SVG 1 */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                  </svg>

                  {/* SVG 2 */}

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
                      {billingType === "annual" ? "/Year" : "/Month"}
                    </span>
                  </div>

                  <div className="w-72 h-16 bg-[#1A2820] rounded-xl shadow-lg p-4 flex flex-col justify-between text-white">
  <div className="flex items-center justify-between text-xs font-medium">
    <span>Annual plan:</span>
    <span className="text-yellow-400 font-semibold">💰 Save $469/year</span>
  </div>
  <div className="flex items-center justify-between text-sm font-bold mt-1">
    <span className="line-through text-gray-400">$2376</span>
    <span>$1907/year</span>
    <span className="text-red-500 font-semibold">-20%</span>
  </div>
</div>
                  {billingType === "annual" && (
                    <p className="text-gray-500 text-base">
                      ${plan.monthlyPrice}/month billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mt-5 mb-8">
                  {plan.features.map((feature, idx) => {
                    const featureKey = `${plan.name}-${idx}`;
                    const isHovered = hoveredFeature === featureKey;

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        onMouseEnter={() => setHoveredFeature(featureKey)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        className="relative"
                      >
                        <div className="border border-green-500/50 rounded-xl p-4 flex items-center gap-3">

                          <div className="w-8 h-8 text-green-500 rounded-lg flex items-center justify-center">
                            <Image
                              src={white}
                              alt="icon"
                              width={30}
                              height={30}
                              className="object-contain"
                            />
                          </div>

                          <span className="text-base font-bold flex-1">
                            {feature.name}
                          </span>

                          <Info className="w-5 h-5 text-green-400" />

                        </div>
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-full top-0 ml-2 z-10"
                            >
                              <div className="bg-[#141414] text-white text-sm font-bold p-3 rounded-xl shadow-2xl w-[250px]">
                                {featureDescriptions[feature.name] ||
                                  feature.name}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[150px] py-3 rounded-xl font-black text-[25px] bg-[#0a0a0a] navbar-cta hover:bg-[#0a0a0a] text-[#0a0a0a] font-bold"
                >
                  {plan.cta} →
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}