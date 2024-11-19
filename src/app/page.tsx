import GrowSection from "@/components/home/grow_section";
import HeroSection from "@/components/landing/hero_section";
import InfoSection from "@/components/landing/info_section";
import PricingSection from "@/components/landing/pricing_section";
import StatSection from "@/components/landing/stat_section";
import LayoutWrapper from "@/components/layout_wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="space-y-15 md:space-y-22 pb-15 md:pb-22">
      <HeroSection />
      <LayoutWrapper childrenClassName="space-y-15 md:space-y-22">
 
        <InfoSection />
        <StatSection />
        <PricingSection />
      </LayoutWrapper>
    </div>
  );
}
