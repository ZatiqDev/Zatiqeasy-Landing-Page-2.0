"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {

  return (
    <div
      className="w-full relative flex flex-col items-center "
      style={{
        background: "linear-gradient(180deg, #E6DEFF 0%, rgba(255, 255, 255, 0) 50%, #F6F3FF 100%)",
      }}
    >
      {/* <div className=" lg:size-15 absolute top-[17%] lg:top-[25%] right-[8%]">
        <Spline scene="https://prod.spline.design/pbsuFX1RaEr-5oCT/scene.splinecode" />
      </div> */}
      <Image
        src="/assets/images/star.svg"
        alt="zatiqeasy"
        width={100}
        height={100}
        className="size-6 lg:size-15 absolute top-[17%] lg:top-[25%] right-[8%] "
      />
      <Image
        src="/assets/images/star.svg"
        alt="zatiqeasy"
        width={100}
        height={100}
        className="size-10 lg:size-18 absolute bottom-[30%] lg:bottom-[30%] left-[5%] "
      />
      <Image
        src="/assets/images/star.svg"
        alt="zatiqeasy"
        width={100}
        height={100}
        className="size-8 lg:size-20 absolute bottom-[7%] lg:bottom-[5%] right-[10%] "
      />

      <div className="w-full mt-[112px] mb-[56px] lg:mt-[182px] lg:mb-[88px] app-px flex flex-col items-center ">
        <div className="flex flex-col items-center space-y-8 lg:space-y-10">
          <div className="text-center space-y-5 lg:space-y-6">
            <p className="text-center font-bold lg:text-lg text-cool-gray-600">ZatiqEasy has you covered</p>
            <p className="text-center text-wrap text-[42px] lg:[74px] font-bold text-cool-gray-900 flex  justify-center items-center">
              <div className="flex gap-2">
                <p>Dream it, Build it, Own it</p>
                {/* <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]} </TextTransition> <p> it</p> */}
              </div>
            </p>
            <p className="text-center font-semibold lg:text-lg text-cool-gray-600 max-w-[742px]">
              From inventory management to website performance optimization, a comprehensive E-commerce platform for all your business needs
            </p>
          </div>
          <Link href="https://merchant.zatiqeasy.com/" target="_blank">
            <Button className="font-gilmer text-md  py-4 px-7 mt-[56px] lg:mt-[76px]" size="custom">
              Launch your store now
            </Button>
          </Link>
        </div>
        <Image src="/assets/images/hero.png" alt="zatiqeasy" width={881.69} height={600} className="w-full max-w-[881px] pt-[56px] lg:pt-[76px]" />
      </div>
    </div>
  );
};

export default HeroSection;
