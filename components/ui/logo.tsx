import Image from "next/image";

export interface LogoProps {
  variant?: "icon" | "full";
  size?: number;
  className?: string;
}

export function Logo({
  variant = "icon",
  size = 40,
  className = "",
}: LogoProps) {
  const src =
    variant === "full"
      ? "/images/optimizify-full-gold-logo.png"
      : "/images/optimizify-play-gold-icon.png";
  const width = variant === "full" ? Math.round(size * 4.2) : size;
  const height = size;

  return (
    <Image
      src={src}
      alt="Optimizify"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
