import CreatorsLover from "@/components/home/creatorsLover";
import FeaturesSection from "@/components/home/features-section";
import GrowthPlan from "@/components/home/GrowthPlan";
import { HeroSection } from "@/components/home/hero-section";

import { PlansCtaSection } from "@/components/home/plans-cta-section";
import TestimonialPage from "@/components/home/TestimonialPage";
import WhatsIncluded from "@/components/home/WhatsIncluded";

// const defaultFeatures = [
//   {
//     icon: <span className="text-2xl">🔍</span>,
//     title: "SEO Optimization",
//     description:
//       "AI-powered title and description optimization to boost your video rankings and discoverability.",
//   },
//   {
//     icon: <span className="text-2xl">📊</span>,
//     title: "Analytics Dashboard",
//     description:
//       "Deep insights into your channel performance with actionable recommendations for growth.",
//   },
//   {
//     icon: <span className="text-2xl">🎯</span>,
//     title: "Audience Targeting",
//     description:
//       "Identify and reach your perfect audience with precision targeting and demographic analysis.",
//   },
//   {
//     icon: <span className="text-2xl">📈</span>,
//     title: "Trend Analysis",
//     description:
//       "Stay ahead of the curve with real-time trend detection and viral content predictions.",
//   },
//   {
//     icon: <span className="text-2xl">⚡</span>,
//     title: "SEO-Driven Content Blueprint",
//     description:
//       "Unlock high-ranking video ideas, tags, and posting plans designed to dominate YouTube search.",
//   },
//   {
//     icon: <span className="text-2xl">▶</span>,
//     title: "Keyword Ranking Insights",
//     description:
//       "Track how your videos rank on YouTube search, uncover winning keywords, and spot new growth opportunities.",
//   },
// ];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection  />
      <CreatorsLover />
      <GrowthPlan />
      <TestimonialPage />
      <WhatsIncluded />
      <PlansCtaSection />
    </>
  );
}
