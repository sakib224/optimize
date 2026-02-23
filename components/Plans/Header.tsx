'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export interface HeroSectionProps {
    headline?: string;
    subline?: string;
    tagline?: string;
    ctaPrimary?: string;
    ctaSecondary?: string;
    stats?: { value: string; label: string }[];
}

const defaultStats = [
    { value: "1M+", label: "Keywords Ranked" },
    { value: "2.5K+", label: "Channels Optimized" },
    { value: "368%", label: "Rank Increase" },
];

export function Header({
    headline = "OPTIMIZIFY YOUR YOUTUBE",
    subline = "Stop Guessing. Start Ranking. Get Seen on YouTube with AI-Powered SEO.",
    tagline = "Rank effectively, reach your audience, and monetize smarter.",
    ctaPrimary = "Start Optimizing",
    ctaSecondary = "Watch Demo",
    stats = defaultStats,
}: HeroSectionProps) {
    const router = useRouter();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Backgrounds */}
            <div className="absolute inset-0 bg-[var(--bg-gradient)] z-0" />

            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Centered Floating Golden Glows */}
            <span className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-30 blur-3xl animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-20 blur-2xl animate-float-slow pointer-events-none -translate-x-1/2 -translate-y-1/2"></span>

            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-24">
                {/* Floating Play Icon */}


                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
                    <span className="text-gradient-gold">{headline.split(" ")[0]}</span>
                    <br />
                    <span className="text-white">{headline.split(" ").slice(1).join(" ")}</span>
                </h1>

                {/* Subline & Tagline */}
                <p className="text-xl md:text-2xl mb-4 text-[var(--primary)] max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                    {subline}
                </p>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white mb-10 animate-fade-in-up animate-delay-300">
                    {tagline}
                </p>
                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`space-y-2 animate-fade-in-up ${i === 0 ? "animate-delay-600" : i === 1 ? "animate-delay-700" : "animate-delay-800"
                                }`}
                        >
                            <div className="text-4xl sm:text-5xl font-bold text-gradient-gold">{s.value}</div>
                            <div className="text-[var(--muted)] text-lg sm:text-xl">{s.label}</div>
                        </div>
                    ))}
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col mt-16 sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-500">
                    <Button size="lg" className="gap-2" onClick={() => router.push("/register")}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                        {ctaPrimary}
                    </Button>
                    <Button variant="secondary" size="lg" className="gap-2" onClick={() => router.push("/demo")}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                        {ctaSecondary}
                    </Button>
                </div>


            </div>

            <style jsx>{`
        .text-gradient-gold {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
        }
        .animate-fade-in-down {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInDown 1s forwards;
        }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-700 { animation-delay: 0.7s; }
        .animate-delay-800 { animation-delay: 0.8s; }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-pulse-slow {
          animation: pulse 5s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        /* Floating center animation */
        .animate-float {
          animation: float 8s ease-in-out infinite alternate;
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-30px); }
          100% { transform: translate(-50%, -50%) translateY(0); }
        }
      `}</style>
        </section>
    );
}