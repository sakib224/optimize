import CreatorsLover from "@/components/home/creatorsLover";
import FeaturesSection from "@/components/home/features-section";
import GrowthPlan from "@/components/home/GrowthPlan";
import { HeroSection } from "@/components/home/hero-section";
import TestimonialPage from "@/components/home/TestimonialPage";
import WhatsIncluded from "@/components/home/WhatsIncluded";
import { Header } from "@/components/Plans/Header";

export default function PlansPage() {
  return (
    <div >
      <Header />
      <GrowthPlan />
      <TestimonialPage />
      <WhatsIncluded />
    </div>
  );
}
