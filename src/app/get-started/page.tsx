import HeroSection from "@/components/landing/hero_section";
import InfoSection from "@/components/landing/info_section";
import PricingSection from "@/components/landing/pricing_section";
import StatSection from "@/components/landing/stat_section";
import LayoutWrapper from "@/components/layout_wrapper";
import Head from "next/head";

export const metadata = {
  title: "ZatiqEasy",
  description: "Transform your business with the fastest E-commerce builder",
  openGraph: {
    title: "ZatiqEasy",
    description: "Transform your business with the fastest E-commerce builder",
    images: [
      {
        url: "/assets/images/content-image.jpeg",
        width: 1200,
        height: 630,
        alt: "ZatiqEasy",
      },
    ],
    siteName: "ZatiqEasy",
  },
};

export default function LandingPage() {
  return (

    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        ></meta>
        <link
          rel="shortcut icon"
          href="favicon.ico"
        />
      </Head>
      

      <div className="space-y-15 md:space-y-22 pb-15 md:pb-22">
        <HeroSection />
        <LayoutWrapper childrenClassName="space-y-15 md:space-y-22">
  
          <InfoSection />
          <StatSection />
          <PricingSection />
        </LayoutWrapper>
      </div>
    </>
  );
}
