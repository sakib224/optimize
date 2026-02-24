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
  { value: "10K+", label: "Videos Optimized" },
  { value: "5K+", label: "Channels Grown" },
  { value: "2.5M+", label: "Views Generated" },
  { value: "98%", label: "Success Rate" },
];

export function Header({
  headline = "Unlock Your YouTube Potential",
  subline = "All-in-one YouTube channel growth solution that helps automate your workflow with data-driven optimization strategies, making success on YouTube seamless and scalable.",
  tagline = "Rank effectively, reach your audience, and monetize smarter.",
  ctaPrimary = "Start Optimizing",
  ctaSecondary = "Watch Demo",
  stats = defaultStats,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-gradient)] z-0" />
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Golden Glows */}
      <span className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-30 blur-3xl animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-20 blur-2xl animate-float-slow pointer-events-none -translate-x-1/2 -translate-y-1/2"></span>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-24">

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
          <span className="text-white">
            {headline.split(" ").slice(0, -2).join(" ")}
          </span>
          <br />
          <span className="text-gradient-gold">
            {headline.split(" ").slice(-2).join(" ")}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white mb-10 animate-fade-in-up animate-delay-300">
          {tagline}
        </p>

        {/* Stats */}
        <div className="mt-12 flex items-center justify-center gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`space-y-1 animate-fade-in-up ${
                i === 0
                  ? "animate-delay-600"
                  : i === 1
                  ? "animate-delay-700"
                  : "animate-delay-800"
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient-gold">
                {s.value}
              </div>
              <div className="text-[var(--muted)] text-sm sm:text-base">
                {s.label}
              </div>
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

          <Button
            variant="secondary"
            size="lg"
            className="gap-2 border border-[var(--primary)] text-white 
                       hover:bg-[var(--primary)] hover:border-[var(--primary)] 
                       hover:text-black transition-all duration-300"
            onClick={() => router.push("/demo")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            {ctaSecondary}
          </Button>
        </div>

        {/* ✅ Scroll Down Indicator */}
        <div
          onClick={() =>
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-16 flex justify-center animate-bounce cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>
        </div>

      </div>


    </section>
  );
}