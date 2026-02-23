import type { ReactNode } from "react";

export interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative min-h-[40vh] flex flex-col justify-center pt-24 pb-12 text-center ${className}`}
    >
      <div className="absolute inset-0 bg-[var(--bg-gradient)]" />
      <div className="relative z-10 px-4">
        {badge && (
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-[#0a0a0a] bg-[var(--gold-gradient)] shadow-lg mb-6">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
          {titleHighlight && (
            <span className="text-gradient-gold mx-2 font-extrabold relative inline-block">
              {titleHighlight}
              <svg
                className="absolute -bottom-1 w-full max-h-2"
                viewBox="0 0 55 5"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.65 4C15.89 2.67 48 0.4 54.69 2"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
