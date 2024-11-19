"use client";
import { usePathname } from "next/navigation";
import React from "react";
import LandingFooter from "./landing/landing_footer";
import GeneralFooter from "./general_footer";


const Footer = () => {
  const pathname = usePathname();

  const renderFooter = () => {
    if (pathname === "/") {
      return <LandingFooter />;
    }
    return <LandingFooter />;

    // return <GeneralFooter />;
  };

  return renderFooter();
};

export default Footer;
