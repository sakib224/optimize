import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

function PlayIconFloating({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute text-[var(--primary)] opacity-40 pointer-events-none ${className}`}
      aria-hidden
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7L8 5z" />
      </svg>
    </span>
  );
}

export function HeroSection({
  headline = "OPTIMIZIFY YOUR YOUTUBE",
  subline = "Stop Guessing. Start Ranking. Get Seen on YouTube with AI-Powered SEO.",
  tagline = "Rank effectively, reach your audience, and monetize smarter.",
  ctaPrimary = "Start Optimizing",
  ctaSecondary = "Watch Demo",
  stats = defaultStats,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-gradient)]" />
      <div className="absolute inset-0 bg-[url('/images/home/hero-background.jpg')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-24">
        <div className="mb-8 flex justify-center animate-fade-in-down">
  <span className="flex h-20 w-20 items-center justify-center rounded-full [background:var(--gold-gradient)] shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,215,0,1)] hover:scale-110">
    <Image
      src="/images/optimizify-play-gold-icon.png"
      alt=""
      width={48}
      height={48}
      className="object-contain p-2 transition-transform duration-300 hover:scale-110"
    />
  </span>
</div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
          <span className="text-gradient-gold">{headline.split(" ")[0]}</span>
          <br />
          <span className="text-white">{headline.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-[var(--primary)] max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          {subline}
        </p>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white mb-10 animate-fade-in-up animate-delay-300">
          {tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-500">
          <Link href="/register">
            <Button size="lg" className="gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              {ctaPrimary}
            </Button>
          </Link>
          <Button variant="secondary" size="lg" className="gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            {ctaSecondary}
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`space-y-2 animate-fade-in-up ${i === 0 ? "animate-delay-600" : i === 1 ? "animate-delay-700" : "animate-delay-800"}`}
            >
              <div className="text-4xl font-bold text-gradient-gold">{s.value}</div>
              <div className="text-[var(--muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}