'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            quote:
                "I've Been Incredibly Impressed. The Increase In Views For My Podcast Since Optimizify Got Involved Has Been Remarkable. Thousands Of Views, Far Beyond What It Used To Receive. Equally Important, There's Been A Consistent Rise In Subscribers. Every Day, I See New Subscribers Joining. Which Matters Even More Than The View Count. I'm Extremely Grateful And Truly Appreciate Optimizify For Their Impact.",
            name: 'Bob Gatty',
            role: 'Podcaster & Commentator',
            achievement: '+187% YouTube Search Views',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0lvKBV92zXeyGXJDByYhuwqxfGp8WK.png',
        },
    ];

    const testimonial = testimonials[currentSlide];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
            {/* Creators Say Section */}
            <div className="w-full max-w-6xl">
                <h1 className="text-5xl md:text-6xl font-bold text-center text-yellow-400 mb-4">
                    Creators Say
                </h1>
                <p className="text-center text-gray-300 mb-16 text-lg">
                    Join Thousands Of Creators Who've Transformed Their Channels With{' '}
                    <span className="text-yellow-400">Optimizify</span>
                </p>

                {/* Testimonial Card */}
                <div className="border border-gray-600 rounded-3xl p-12 mb-12 bg-gray-900/50 backdrop-blur">
                    {/* Stars */}
                    <div className="flex justify-center gap-2 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={28}
                                className="fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>

                    {/* Quote */}
                    <p className="text-center text-gray-200 italic text-lg leading-relaxed mb-10">
                        "{testimonial.quote}"
                    </p>

                    {/* Creator Info */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-700 mb-4 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                                BG
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                            {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {testimonial.role} • {testimonial.achievement}
                        </p>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        <button
                            onClick={() => setCurrentSlide(0)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === 0 ? 'bg-gray-400 w-8' : 'bg-gray-600'
                                }`}
                            aria-label="Slide 1"
                        />
                        <button
                            onClick={() => setCurrentSlide(1)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === 1 ? 'bg-yellow-400 w-8' : 'bg-gray-600'
                                }`}
                            aria-label="Slide 2"
                        />
                        <button
                            onClick={() => setCurrentSlide(2)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === 2 ? 'bg-yellow-400 w-8' : 'bg-gray-600'
                                }`}
                            aria-label="Slide 3"
                        />
                    </div>
                </div>

                {/* CTA Section */}
                <div className="border border-gray-600 rounded-3xl p-12 bg-gray-900/50 backdrop-blur text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Need A Custom Solution?
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Let's Discuss Your Specific Requirements And Create A Tailored Plan
                        <br />
                        For Your Unique Needs.
                    </p>
                    <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-lg">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
}
