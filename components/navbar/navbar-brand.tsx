"use client";

import Link from "next/link";
import Image from "next/image";
import type { NavBrand } from "@/lib/site-config";

export interface NavbarBrandProps {
  brand: NavBrand;
  href?: string;
  className?: string;
}

export function NavbarBrand({
  brand,
  href = "/",
  className = "",
}: NavbarBrandProps) {
  const size = brand.logoSize ?? 40;

  return (
    <Link
      href={href}
      className={`navbar-brand brand-logo-enhanced flex items-center gap-3 no-underline ${className}`}
      aria-label={brand.brandName}
    >
      <span className="brand-glow" aria-hidden />
      <span className="relative flex shrink-0 items-center justify-center rounded-lg overflow-hidden">
        <Image
          src={brand.logoSrc}
          alt={brand.logoAlt}
          width={size}
          height={size}
          className="object-contain"
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 199, 39, 0.3))",
          }}
        />
      </span>
      <span
        className="font-bold text-gradient-gold"
        style={{ fontSize: brand.fontSize ?? "1.25rem" }}
      >
        {brand.brandName}
      </span>
    </Link>
  );
}
