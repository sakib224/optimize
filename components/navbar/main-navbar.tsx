"use client";

import { useState, useEffect } from "react";
import type { NavBrand, NavActions, NavRouteItem } from "@/lib/site-config";
import { isDropdown } from "@/lib/site-config";
import { NavbarBrand } from "./navbar-brand";
import { NavbarLink } from "./navbar-link";
import { NavbarDropdown } from "./navbar-dropdown";
import { NavbarActions } from "./navbar-actions";
import { NavbarMobile } from "./navbar-mobile";

export interface MainNavbarProps {
  brand: NavBrand;
  routes: NavRouteItem[];
  actions: NavActions;
  transparent?: boolean;
  sticky?: boolean;
  className?: string;
}

export function MainNavbar({
  brand,
  routes,
  actions,
  transparent = false,
  sticky = true,
  className = "",
}: MainNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.pageYOffset > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const barClass = [
    "navbar-bar",
    "modern-navbar",
    "modern-navbar-enhanced",
    isScrolled ? "scrolled" : "",
    transparent && !isScrolled ? "border-white/10" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`navbar-wrap ${sticky ? "sticky top-0 z-[9998]" : ""} ${className}`}
      role="navigation"
    >
      <nav className={barClass}>
        <div className="flex flex-1 items-center justify-between gap-4">
          <NavbarBrand brand={brand} />

          <div className="hidden lg:flex items-center flex-1 justify-center gap-0">
            {routes.map((item) =>
              isDropdown(item) ? (
                <NavbarDropdown key={item.name} item={item} />
              ) : (
                <NavbarLink
                  key={item.name}
                  href={item.href}
                  label={item.name}
                />
              )
            )}
          </div>

          <NavbarActions actions={actions} />

          <button
            type="button"
            className={`navbar-mobile-btn mobile-menu-btn-enhanced lg:hidden w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${mobileOpen ? "open" : ""
              }`}
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

        <NavbarMobile
          routes={routes}
          actions={actions}
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </nav>
    </div>
  );
}
