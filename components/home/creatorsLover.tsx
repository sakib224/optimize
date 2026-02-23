'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    titleColor: string;
    image: string;
    text: string;
    stat: string;
    statColor: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Rachel Marie Lawson',
        title: 'Blissful Living 4 U',
        titleColor: 'text-yellow-400',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        text: '"Optimizely Has Been Amazing. They Have Significantly Increased Our YouTube Subscribers And Views For All The Content We Have Working With Them. They Promptly Address Any Questions I Hear, And Their Friendly And Helpful Support Is Excellent Experience When It Comes To YouTube."',
        stat: '+252% YouTube Search Views',
        statColor: 'text-yellow-400',
    },
    {
        id: 2,
        name: 'Robert Stroke',
        title: 'Awareness That Heals',
        titleColor: 'text-yellow-400',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        text: '"The Optimizely Team Are Not Only Creative, Comprehensive And Intelligent In Everything They Promise"',
        stat: '+117% YouTube Search Views',
        statColor: 'text-yellow-400',
    },
    {
        id: 3,
        name: 'Jonathan Breeden',
        title: 'Breeden Law',
        titleColor: 'text-yellow-400',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        text: '"This Company Did Everything That They Promised They Would Do. I Absolutely Recommend Optimizely. They Take Great Care Of My Account And Deliver On Everything They Have Promised"',
        stat: '+284% YouTube Search Views',
        statColor: 'text-yellow-400',
    },
];

export default function CreatorsLover() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-16">
                <div className="w-20 h-20 rounded-full border-2 border-amber-700/60 flex items-center justify-center mb-8 bg-neutral-900 shadow-[0_0_30px_rgba(255,215,0,0.6)] animate-glow">
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>

                <h1 className="text-5xl font-bold text-center mb-4">
                    <span className="text-gradient-gold">CREATORS</span>{' '}
                    <span className="text-white">LOVE US</span>
                </h1>

                <p className="text-center text-gray-300 text-[17px] max-w-2xl leading-relaxed">
                    Join Thousands Of Successful YouTube Creators Who&apos;ve Transformed Their Channels
                    <br />
                    With Optimizely
                </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex items-center gap-6 relative">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-yellow-600/20 rounded-full transition  border border-yellow-600/30 hover:border-yellow-400"
                    >
                        <ChevronLeft className="w-5 h-5 text-yellow-400" />
                    </button>

                    {/* Cards Grid */}
                    <div className="w-full bg-[#0a0a0a] grid grid-cols-3 gap-6 px-16">
                        {getVisibleTestimonials().map((testimonial, idx) => {
                            const isCenter = idx === 1;
                            return (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.08 }}
                                    className={`relative border border-yellow-600 rounded-lg p-8 bg-[#141414] backdrop-blur
                                        transform transition-all duration-500 ease-in-out overflow-hidden
                                        ${isCenter ? 'scale-105 z-10' : 'scale-100 z-0'} group`}
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 opacity-0 group-hover:opacity-30 transition-all duration-700 blur-3xl pointer-events-none group-hover:w-48 group-hover:h-48"></div>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="absolute -top-3 -right-2 w-12 h-12 text-[#FFC727] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                    </svg>

                                    <div className="flex items-start gap-4 mb-6 relative z-10">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-yellow-600/30 group-hover:ring-yellow-400 transition-all duration-300"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-white text-base group-hover:text-gradient-gold transition-colors duration-300">{testimonial.name}</h3>
                                            <p className={`${testimonial.titleColor} text-sm font-semibold`}>
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 mb-6 relative z-10">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-8 min-h-20 relative z-10 group-hover:text-white transition-colors duration-300">
                                        {testimonial.text}
                                    </p>

                                    <button className="w-full border bg-yellow-600/20 border-yellow-600 rounded-lg py-3 px-4 text-yellow-400 font-semibold text-sm hover:bg-yellow-600/20 transition-all duration-300 relative z-10">
                                        {testimonial.stat}
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-yellow-600/20 rounded-full transition border border-yellow-600/30 hover:border-yellow-400"
                    >
                        <ChevronRight className="w-5 h-5 text-yellow-400" />
                    </button>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mb-16">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                            ? 'bg-gradient-gold w-6 shadow-[var(--shadow-gold)]'
                            : 'bg-gray-500 hover:bg-yellow-400/50'
                            }`}
                    />
                ))}
            </div>

            {/* Stats Section */}
            <div className="max-w-2xl mx-auto">
                <div className="border border-yellow-600 rounded-xl p-8 bg-[#141414] backdrop-blur transition-all duration-500">
                    <div className="grid grid-cols-3 gap-8 divide-x divide-yellow-600">

                        <motion.div className="text-center">
                            <p className="text-4xl font-bold text-gradient-gold mb-2">100%</p>
                            <p className="text-gray-300 text-sm">YouTube SEO Compatibility</p>
                        </motion.div>

                        <motion.div className="text-center px-8">
                            <p className="text-4xl font-bold text-gradient-gold mb-2">2.5K+</p>
                            <p className="text-gray-300 text-sm">Channels Optimized</p>
                        </motion.div>

                        <motion.div className="text-center pl-8">
                            <p className="text-4xl font-bold text-gradient-gold mb-2">95%</p>
                            <p className="text-gray-300 text-sm">Ranking Success</p>
                        </motion.div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .text-gradient-gold {
                    background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .bg-gradient-gold {
                    background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.6); }
                    50% { box-shadow: 0 0 50px rgba(255, 215, 0, 0.8); }
                }
                
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }
            `}</style>
        </main>
    );
}