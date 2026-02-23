/**
 * Site routes and nav config - data only, no UI.
 */

export interface NavLink {
  name: string;
  href: string;
}

export interface NavDropdown {
  name: string;
  links: NavLink[];
}

export type NavRouteItem = NavLink | NavDropdown;

/** Brand props for navbar (logo + text). No hardcoded copy. */
export interface NavBrand {
  logoSrc: string;
  logoAlt: string;
  brandName: string;
  logoSize?: number;
  fontSize?: string;
}

/** Auth/CTA actions for main navbar. No hardcoded copy. */
export interface NavActions {
  loginLabel: string;
  loginHref: string;
  ctaLabel: string;
  ctaHref: string;
}

export const navConfig: (NavLink | NavDropdown)[] = [
  {
    name: "Software",
    links: [
      { name: "Trend Analysis", href: "/TrendAnalysis" },
      { name: "Keyword Reporting", href: "/KeywordReporting" },
      { name: "Keyword Recommendation", href: "/KeywordRecommendation" },
    ],
  },
  {
    name: "Services",
    links: [
      { name: "YouTube Ads", href: "/YouTubeAds" },
      { name: "Brand Analysis", href: "/BrandAnalysis" },
      { name: "Thumbnail Design", href: "/ThumbnailDesign" },
    ],
  },
  { name: "Plans", href: "/plans" },
  {
    name: "Insights",
    links: [
      { name: "Blog", href: "/blogs" },
      { name: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    name: "Company",
    links: [
      { name: "About us", href: "/about-us" },
      { name: "Contact us", href: "/contact-us" },
    ],
  },
];

export function isDropdown(
  item: NavLink | NavDropdown
): item is NavDropdown {
  return "links" in item && Array.isArray(item.links);
}

export const defaultNavBrand: NavBrand = {
  logoSrc: "/images/optimizify-play-gold-icon.png",
  logoAlt: "",
  brandName: "Optimizify",
  logoSize: 40,
  fontSize: "1.25rem",
};

export const defaultNavActions: NavActions = {
  loginLabel: "Login",
  loginHref: "/login",
  ctaLabel: "Get Started",
  ctaHref: "/register",
};
