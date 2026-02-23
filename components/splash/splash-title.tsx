"use client";

export interface SplashTitleProps {
  /** Main title text */
  title: string;
  /** Tagline below title */
  tagline: string;
  /** Opacity 0–1, e.g. from timeline */
  opacity: number;
  /** Primary color for gradient text */
  primaryColor: string;
  /** Secondary color for gradient */
  secondaryColor: string;
}

export function SplashTitle({
  title,
  tagline,
  opacity,
  primaryColor,
  secondaryColor,
}: SplashTitleProps) {
  return (
    <div
      className="mt-10 text-center transition-opacity duration-1000"
      style={{ opacity }}
    >
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 select-none"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h1>
      <p className="text-lg md:text-xl text-white/80 font-medium tracking-wide">
        {tagline}
      </p>
    </div>
  );
}
