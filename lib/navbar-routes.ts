/**
 * Navbar routes in the same shape as the original optimizify Main navbar.
 * Used by default-navbar for exact dropdown/mobile structure.
 */

export interface NavbarCollapseItem {
  name: string;
  route?: string;
  href?: string;
}

export interface NavbarCollapseGroup {
  name: string;
  collapse: NavbarCollapseItem[];
}

export interface NavbarRoute {
  name: string;
  route?: string;
  href?: string;
  collapse?: NavbarCollapseGroup[];
  columns?: number;
  rowsPerColumn?: number;
}

export const navbarRoutes: NavbarRoute[] = [
  {
    name: "Software",
    columns: 1,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Optimizify Software",
        collapse: [
          { name: "Trend Analysis", route: "/TrendAnalysis" },
          { name: "Keyword Reporting", route: "/KeywordReporting" },
          { name: "Keyword Recommendation", route: "/KeywordRecommendation" },
        ],
      },
    ],
  },
  {
    name: "Services",
    columns: 1,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Optimizify Services",
        collapse: [
          { name: "YouTube Ads", route: "/YouTubeAds" },
          { name: "Brand Analysis", route: "/BrandAnalysis" },
          { name: "Thumbnail Design", route: "/ThumbnailDesign" },
        ],
      },
    ],
  },
  { name: "Plans", route: "/plans" },
  {
    name: "Insights",
    columns: 1,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Optimizify Insights",
        collapse: [
          { name: "Blog", route: "/blogs" },
          { name: "Testimonials", route: "/testimonials" },
        ],
      },
    ],
  },
  {
    name: "Company",
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Optimizify Company",
        collapse: [
          { name: "about us", route: "/about-us" },
          { name: "contact us", route: "/contact-us" },
        ],
      },
    ],
  },
];

/** Auth routes for mobile menu (same as original UserRoutes) */
export const navbarUserRoutes: NavbarRoute[] = [
  { name: "LOGIN", route: "/login" },
  { name: "GET STARTED", route: "/register" },
];
