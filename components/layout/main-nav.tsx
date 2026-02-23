"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navConfig, isDropdown } from "@/lib/site-config";
import { NavDropdown } from "./nav-dropdown";

export function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-wrap">
      <nav
        className={`navbar-bar ${isScrolled ? "scrolled" : ""}`}
        role="navigation"
      >
        <div className="flex flex-1 items-center justify-between gap-4">
          <Link href="/" className="navbar-brand">
            <span className="brand-glow" aria-hidden />
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/optimizify-play-gold-icon.png"
                alt=""
                width={40}
                height={40}
                className="object-contain"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 199, 39, 0.3))",
                }}
              />
            </span>
            <span
              className="ml-2 text-lg font-bold md:text-xl"
              style={{
                background: "linear-gradient(135deg, #ffc727 0%, #ffd84d 50%, #ffb800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Optimizify
            </span>
          </Link>

          <div className="hidden lg:flex items-center flex-1 justify-center gap-0">
            {navConfig.map((item) =>
              isDropdown(item) ? (
                <NavDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="navbar-nav-item"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <Link href="/login" className="navbar-login">
              Login
            </Link>
            <Link href="/register" className="navbar-cta">
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className={`navbar-mobile-btn lg:hidden ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transition-transform duration-300"
              style={{
                transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              {mobileOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="navbar-mobile-panel lg:hidden">
            <div className="flex flex-col gap-1">
              {navConfig.map((item) =>
                isDropdown(item) ? (
                  <div key={item.name} className="py-2">
                    <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                      {item.name}
                    </div>
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="navbar-dropdown-item block"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="navbar-dropdown-item block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="border-t border-white/10 my-2" />
              <Link
                href="/login"
                className="navbar-dropdown-item block"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="navbar-cta mt-2 block text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
