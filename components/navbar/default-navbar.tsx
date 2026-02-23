"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  navbarRoutes,
  navbarUserRoutes,
  type NavbarRoute,
} from "@/lib/navbar-routes";
import { navItemIcons, KeyboardArrowDown } from "./navbar-icons";

const LOGO_SRC = "/images/optimizify-play-gold-icon.png";
const LG_BREAKPOINT = 1200;

export interface DefaultNavbarBrand {
  image: string;
  text: string;
  logoSize?: string;
  fontSize?: string;
}

export interface DefaultNavbarProps {
  brand?: DefaultNavbarBrand;
  routes?: NavbarRoute[];
  transparent?: boolean;
  light?: boolean;
  sticky?: boolean;
  relative?: boolean;
  center?: boolean;
}

const defaultBrand: DefaultNavbarBrand = {
  image: LOGO_SRC,
  text: "Optimizify",
  logoSize: "45px",
  fontSize: "1.3rem",
};

export function DefaultNavbar({
  brand = defaultBrand,
  routes = navbarRoutes,
  transparent = false,
  light = true,
  sticky = true,
  relative = true,
  center = true,
}: DefaultNavbarProps) {
  const [dropdown, setDropdown] = useState<HTMLElement | null>(null);
  const [dropdownEl, setDropdownEl] = useState<HTMLElement | null>(null);
  const [dropdownName, setDropdownName] = useState("");
  const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number } | null>(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 20);
    function displayMobileNavbar() {
      if (window.innerWidth < LG_BREAKPOINT) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }
    window.addEventListener("resize", displayMobileNavbar);
    window.addEventListener("scroll", handleScroll);
    displayMobileNavbar();
    return () => {
      window.removeEventListener("resize", displayMobileNavbar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const itemColor =
    isScrolled || !transparent ? "#FFFFFF" : "#D1D5DB";
  const allRoutes = [...navbarUserRoutes, ...routes];

  return (
    <div
      ref={navRef}
      className={`navbar-wrap w-full max-w-[100%] ${sticky ? "sticky top-0" : "relative"}`}
      style={{
        zIndex: 1000,
      }}
    >
      <div
        className={`navbar-bar modern-navbar modern-navbar-enhanced ${transparent && !isScrolled ? "bg-transparent" : "bg-solid"} ${isScrolled ? "scrolled" : ""}`}
        style={{
          margin: relative ? "0 auto" : "8px auto",
          width: relative ? "100%" : "calc(100% - 24px)",
          borderRadius: "20px",
          position: relative ? "relative" : "absolute",
          left: relative ? "auto" : 0,
          zIndex: 1000,
        }}
      >
<div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            aria-hidden
            className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, #FFC727, transparent)",
              opacity: isScrolled ? 1 : 0,
            }}
          />
          {/* Brand */}
          <Link
            href="/"
            className="brand-logo-enhanced no-underline flex items-center gap-3 py-1 relative"
            style={{
              textDecoration: "none",
            }}
          >
            <span
              className="brand-glow absolute -inset-1 rounded-xl opacity-0 transition-all duration-300 -z-10 blur-md"
              style={{
                background: "linear-gradient(45deg, #FFC727, #FFB800, #FFC727)",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.image}
              alt="Optimizify Logo"
              style={{
                width: brand.logoSize || "45px",
                height: "auto",
                borderRadius: "8px",
                filter: "drop-shadow(0 0 10px rgba(255, 199, 39, 0.3))",
              }}
            />
            <span
              className="font-bold ml-1.5"
              style={{
                fontSize: brand.fontSize || "1.3rem",
                background: "linear-gradient(135deg, #FFC727 0%, #FFD84D 50%, #FFB800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {brand.text}
            </span>
          </Link>

          {/* Desktop nav items */}
          <div
            className="hidden lg:flex items-center gap-1 ml-auto"
            style={center ? { marginRight: "auto", marginLeft: "auto" } : {}}
          >
            {routes.map((r) => {
              const icon = navItemIcons[r.name as keyof typeof navItemIcons];
              return (
                <div
                  key={r.name}
                  className="modern-nav-item nav-item-enhanced relative"
                  style={{ position: "relative", margin: "0 8px" }}
                >
                  {r.route && !r.collapse ? (
                    <Link
                      href={r.route}
                      className="navbar-nav-item modern-nav-item nav-item-enhanced flex items-center rounded-lg relative overflow-hidden"
                      style={{
                        color: itemColor,
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        padding: "8px 16px",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {icon && <span className="mr-2 inline-flex align-middle [&>svg]:size-[1.1rem]">{icon}</span>}
                      {r.name}
                    </Link>
                  ) : (
                    <div
                      className="navbar-nav-item modern-nav-item nav-item-enhanced cursor-pointer flex items-center rounded-lg relative overflow-hidden"
                      style={{
                        color: itemColor,
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        padding: "8px 16px",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        if (r.collapse) {
                          const el = e.currentTarget;
                          setDropdown(el);
                          setDropdownEl(el);
                          setDropdownName(r.name);
                          const rect = el.getBoundingClientRect();
                          setDropdownRect({ top: rect.bottom + 8, left: rect.left });
                        }
                      }}
                      onMouseLeave={() => r.collapse && setDropdown(null)}
                    >
                      {icon && <span className="mr-2 inline-flex align-middle [&>svg]:size-[1.1rem]">{icon}</span>}
                      <span className="mr-0.5 whitespace-nowrap">{r.name}</span>
                      {r.collapse && (
                        <span
                          className="inline-flex transition-transform duration-300"
                          style={{ transform: dropdownName === r.name ? "rotate(180deg)" : "rotate(0deg)" }}
                        >
                          <KeyboardArrowDown />
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            {/* Login */}
            <Link href="/login" className="navbar-login ml-1">
              Login
            </Link>
            {/* Get Started */}
            <Link href="/register" className="navbar-cta ml-2">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="mobile-menu-btn-enhanced lg:hidden w-12 h-12 flex items-center justify-center rounded-xl border border-[rgba(255,199,39,0.3)] text-white transition-all"
            style={{
              background: mobileNavbar
                ? "linear-gradient(135deg, #FFC727, #FFB800)"
                : "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}
            onClick={() => setMobileNavbar(!mobileNavbar)}
            aria-label={mobileNavbar ? "Close menu" : "Open menu"}
          >
            <span
              className="inline-flex transition-transform duration-300"
              style={{ transform: mobileNavbar ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {mobileNavbar ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileView && (
          <div
            className="lg:hidden mt-2 overflow-hidden transition-all duration-300"
            style={{
              display: mobileNavbar ? "block" : "none",
              background: "linear-gradient(195deg, #0A0A0A, #121212)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 199, 39, 0.2)",
            }}
          >
            <DefaultNavbarMobileContent
              routes={allRoutes}
              open={mobileNavbar}
            />
          </div>
        )}
      </div>

      {/* Dropdown panel (desktop) */}
      {dropdown && dropdownEl && dropdownRect && (
        <div
          className="dropdown-enhanced fixed z-[1100] min-w-[280px] p-2 rounded-2xl overflow-hidden"
          style={{
            top: dropdownRect.top,
            left: dropdownRect.left,
            background: "linear-gradient(195deg, #0A0A0A, #121212)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 199, 39, 0.2)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 199, 39, 0.1)",
          }}
          onMouseEnter={() => {
            setDropdown(dropdownEl);
            if (dropdownEl) {
              const rect = dropdownEl.getBoundingClientRect();
              setDropdownRect({ top: rect.bottom + 8, left: rect.left });
            }
          }}
          onMouseLeave={() => {
            setDropdown(null);
            setDropdownName("");
            setDropdownRect(null);
          }}
        >
          <span
            aria-hidden
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, #FFC727, transparent)",
            }}
          />
          {routes.map(
            (r) =>
              r.collapse &&
              r.name === dropdownName &&
              r.collapse.map((group) => (
                <div key={group.name} className="py-1 px-1.5">
                  {group.collapse.map((item) => (
                    <Link
                      key={item.name}
                      href={item.route || item.href || "#"}
                      className="block py-2.5 px-4 rounded-lg font-bold capitalize text-white/90 transition-all hover:bg-white/10 hover:text-[#FFC727]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))
          )}
        </div>
      )}
    </div>
  );
}

/** Mobile menu content - same structure as original DefaultNavbarMobile */
function DefaultNavbarMobileContent({
  routes,
  open,
}: {
  routes: NavbarRoute[];
  open: boolean;
}) {
  const [collapse, setCollapse] = useState("");

  if (!open) return null;

  return (
    <div
      className="my-2 -ml-2 p-4 w-[calc(100%+0.8rem)]"
      style={{
        background: "linear-gradient(195deg, #0A0A0A, #121212)",
        backdropFilter: "blur(20px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
      }}
    >
      {routes.map((r) => (
        <div key={r.name}>
          {r.collapse ? (
            <>
              <button
                type="button"
                className="w-full text-left py-2 px-4 rounded-lg font-bold capitalize flex items-center justify-between text-white"
                onClick={() =>
                  setCollapse(collapse === r.name ? "" : r.name)
                }
              >
                {r.name}
                <span
                  className="inline-flex transition-transform"
                  style={{
                    transform: collapse === r.name ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <KeyboardArrowDown />
                </span>
              </button>
              {collapse === r.name && (
                <div
                  className="max-h-[15rem] overflow-y-auto pl-4 pr-2"
                  style={{
                    scrollbarWidth: "thin",
                  }}
                >
                  {r.collapse.map((group) =>
                    group.collapse.map((item) => (
                      <Link
                        key={item.name}
                        href={item.route || item.href || "#"}
                        className="block py-2.5 px-4 rounded-lg text-[#D1D5DB] text-[0.9rem] transition-all hover:bg-[rgba(255,199,39,0.1)] hover:text-[#FFC727] hover:translate-x-2"
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </>
          ) : (
            <Link
              href={r.route || r.href || "#"}
              className="block py-3 px-3.5 rounded-lg mb-1 border border-white/5 bg-white/[0.02] transition-all hover:bg-[rgba(255,199,39,0.1)] hover:border-[rgba(255,199,39,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,199,39,0.15)]"
            >
              <span className="block font-bold capitalize text-white text-base">
                {r.name}
              </span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
