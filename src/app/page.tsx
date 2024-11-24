import BannerSection from "@/components/home/banner_section";
import GrowSection from "@/components/home/grow_section";
import HeroSection from "@/components/home/hero_section";
import ImpactSection from "@/components/home/impact_section";
import PricingSection from "@/components/home/pricing_section";
import ToolSection from "@/components/home/tool_section";
import LayoutWrapper from "@/components/layout_wrapper";
import React from "react";

export const metadata = {
  title: "ZatiqEasy",
  description: "Transform your business with the fastest E-commerce builder",
  openGraph: {
    title: "ZatiqEasy",
    description: "Transform your business with the fastest E-commerce builder",
    images: [
      {
        url: "/assets/images/content-image.webp",
        width: 1200,
        height: 630,
        alt: "ZatiqEasy",
      },
    ],
    siteName: "ZatiqEasy",
  },
};

const HomePage = () => {
  return (
    <div className="space-y-14 md:space-y-[110px] pb-15 md:pb-[110px]">
      <HeroSection />
      <LayoutWrapper childrenClassName="space-y-14 md:space-y-[110px]">
        <GrowSection />
        <ImpactSection />
        <PricingSection />
        <ToolSection />
        <BannerSection />
      </LayoutWrapper>
    </div>
  );
};

export default HomePage;
