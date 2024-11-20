"use client";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { Button } from "../ui/button";
import Image from "next/image";
import LayoutWrapper from "../layout_wrapper";
import Link from "next/link";

const TEXTS = ["Dream", "Build", "Own"];

const HeroSection = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="w-full h-[579px] lg:h-[762px] flex justify-center items-center bg-center bg-cover"
      style={{
        backgroundImage: "url(/assets/images/hero_home_bg.png)",
      }}
    >
      <div className="bg-black/30 w-full h-full">
        <LayoutWrapper
          className="h-full"
          childrenClassName="pt-[124px] lg:pt-[236px] pb-[66px] lg:pb-[121px] flex flex-col justify-between items-start w-full h-full"
        >
          <div className="space-y-2">
            <div className=" font-medium text-5.6xl md:text-8.5xl text-blue-gray-200 flex items-center gap-2">
              <TextTransition springConfig={presets.gentle}>
                <p className="!font-helvetica-display">{TEXTS[index % TEXTS.length]} </p>
              </TextTransition>{" "}
              <p className="!font-helvetica-display"> it</p>
            </div>
            <p className="font-gilmer text-2xl md:text-4xl text-blue-gray-300">
              Transform your <br />
              business with the fastest
              <br /> E-commerce builder
            </p>
          </div>
          <div>
            <Link href="https://merchant.zatiqeasy.com/" target="_blank">
              <Button
                size="custom"
                className="rouned-full bg-primary flex items-center gap-3 p-4"
                style={{
                  border: "border: 1.25px solid #7963BD",
                  boxShadow: "box-shadow: 0px 0px 15.5px 0px rgba(255, 255, 255, 0.50) inset",
                }}
              >
                <Image src="/assets/images/add.svg" alt="btn" height={24} width={24} />
                <p className="text-wrap ">Launch your online business now, for free!</p>
              </Button>
            </Link>

            <p className=" text-blue-200 text-md mt-2">(no credit card / payment required)</p>
          </div>
        </LayoutWrapper>
      </div>
    </div>
  );
};

export default HeroSection;
