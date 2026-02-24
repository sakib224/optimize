'use client';
import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialPlans() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            quote:
                "I've Been Incredibly Impressed. The Increase In Views For My Podcast Since Optimizify Got Involved Has Been Remarkable. Thousands Of Views, Far Beyond What It Used To Receive. Equally Important, There's Been A Consistent Rise In Subscribers. Every Day, I See New Subscribers Joining. Which Matters Even More Than The View Count. I'm Extremely Grateful And Truly Appreciate Optimizify For Their Impact.",
            name: 'Bob Gatty',
            role: 'Podcaster & Commentator',
            achievement: '+187% YouTube Search Views',
        },
        {
            quote:
                "I've Been Incredibly Impressed. The Increase In Views For My Podcast Since Optimizify Got Involved Has Been Remarkable. Thousands Of Views, Far Beyond What It Used To Receive. Equally Important, There's Been A Consistent Rise In Subscribers. Every Day, I See New Subscribers Joining. Which Matters Even More Than The View Count. I'm Extremely Grateful And Truly Appreciate Optimizify For Their Impact.",
            name: 'Bob Gatty',
            role: 'Podcaster & Commentator',
            achievement: '+187% YouTube Search Views',
        },
        {
            quote:
                "I've Been Incredibly Impressed. The Increase In Views For My Podcast Since Optimizify Got Involved Has Been Remarkable. Thousands Of Views, Far Beyond What It Used To Receive. Equally Important, There's Been A Consistent Rise In Subscribers. Every Day, I See New Subscribers Joining. Which Matters Even More Than The View Count. I'm Extremely Grateful And Truly Appreciate Optimizify For Their Impact.",
            name: 'Bob Gatty',
            role: 'Podcaster & Commentator',
            achievement: '+187% YouTube Search Views',
        },
    ];

    const testimonial = testimonials[currentSlide];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const slideAnim = {
        hidden: { opacity: 0, x: 60 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -60, transition: { duration: 0.4 } },
    };

    return (
        <div className="relative min-h-screen bg-[#181818] text-white flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
            <div className="w-full max-w-6xl z-10">
                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="text-5xl md:text-6xl font-bold text-center text-yellow-400 mb-4"
                >
                    What Our
                
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.15 }}
                    className="text-center text-gray-300 mb-16 text-lg"
                >
                    Join Thousands Of Creators Who've Transformed Their Channels With{' '}
                    <span className="text-yellow-400">Optimizify</span>
                </motion.p>

                {/* Testimonial Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.25 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative border border-gray-600 rounded-3xl p-7 mb-12 bg-[#2E2E2E] backdrop-blur overflow-hidden"
                >
                    {/* Floating Circles INSIDE the card */}
                    <motion.div
                        className="absolute left-5 bottom-5 w-20 h-20 rounded-full blur-5xl pointer-events-none z-0"
                        style={{ backgroundColor: '#FFD166', opacity: 0.35 }}
                        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute right-10 top-10 w-28 h-28 rounded-full blur-4xl pointer-events-none z-0"
                        style={{ backgroundColor: '#06D6A0', opacity: 0.35 }}
                        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            variants={slideAnim}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                        >
                            {/* Stars */}
                            <div className="flex justify-center gap-2 mb-8 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Star
                                            size={28}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quote */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center text-gray-200 italic text-lg leading-relaxed mb-10 relative z-10"
                            >
                                "{testimonial.quote}"
                            </motion.p>

                            {/* Creator Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-center items-center space-x-6 relative z-10"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                                        BG
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl text-center font-bold text-white mb-1">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.role} • {testimonial.achievement}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8 relative z-10">
                        {[0, 1, 2].map((index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-3 rounded-full transition-all ${currentSlide === index
                                        ? 'bg-yellow-400 w-8'
                                        : 'bg-gray-600 w-3'
                                    }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.5 }}
                    className="border border-gray-600 rounded-2xl p-10 bg-[#191919] backdrop-blur text-center max-w-[600px] mx-auto"
                >
                    <h2 className="text-3xl font-bold text-white mb-3">
                        Need A Custom Solution?
                    </h2>
                    <p className="text-gray-300 mb-6 text-base">
                        Let's Discuss Your Specific Requirements And Create A Tailored Plan
                        <br />
                        For Your Unique Needs.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 text-black font-bold px-7 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-base"
                    >
                        Contact Sales
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}