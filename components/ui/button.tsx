import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50";
  const variants = {
    primary:
      "text-[#0a0a0a] shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:scale-105 [background:var(--gold-gradient)]",
    secondary:
      "bg-white/10 text-white border border-[rgba(255,199,39,0.3)] hover:bg-[rgba(255,199,39,0.2)]",
    ghost: "text-[var(--muted)] hover:text-white hover:bg-white/5",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
