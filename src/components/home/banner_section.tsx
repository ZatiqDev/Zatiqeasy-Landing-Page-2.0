import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const BannerSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 md:col-span-1 flex flex-col justify-between bg-[#F6F3FF] rounded-3xl p-9">
        <p className="font-helvetica-display font-medium text-[36px] md:text-[36px]  ">
          Join the
          <br />
          e-commerce
          <br />
          revolution
        </p>
        <div className="mt-[55px]">
          <p className="text-blue-gray-500 text-lg md:text-2xl font-helvetica-display">Shops created</p>
          <p className="font-helvetica-display text-[56px] md:text-[88px] font-bold text-[#541DFF]">84,000+</p>
        </div>
      </div>
      <div
        className="col-span-3 md:col-span-2 rounded-3xl aspect-[344/438] md:aspect-[952/524] overflow-clip"
        style={{
          backgroundImage: "url(/assets/images/banner_bg.png)",
        }}
      >
        <div className="bg-transparent w-full h-full px-5 md:px-14 py-13 md:py-20 flex flex-col items-center">
          <p className="font-helvetica-display font-bold md:font-medium text-center text-4xl md:text-[62px] text-blue-gray-100">
            Take the first step in building your dream!
          </p>
          <Link href="https://merchant.zatiqeasy.com/" target="_blank">
            <Button
              className="flex items-center justify-center  rounded-full  px-6 py-4 mt-6 shadow-[inset_0px_0px_15.5px_rgba(255,255,255,0.5)] bg-[#6634FF] border-2 border-[#C1B5E5]"
              size="custom"
            >
              <Image src="/assets/images/add.svg" alt="fast" width={24} height={24} className="aspect-square" />
              <p className="text-lg text-wrap">Launch your online business now, for free!</p>
            </Button>
          </Link>
          <Button
            className="flex items-center justify-center  rounded-full  px-6 py-4 mt-6 shadow-[inset_0px_0px_15.5px_rgba(255,255,255,0.5)] bg-[#6634FF] border-2 border-[#C1B5E5]"
            size="custom"
          >
            <Image src="/assets/images/add.svg" alt="fast" width={24} height={24} className="aspect-square" />
            <p className="text-lg text-wrap">Launch your online business now, for free!</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
