import React from "react";
import SectionContainer from "./section_container";
import { Button } from "../ui/button";
import { landingPricingList } from "@/utils/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const PricingSection = () => {
  return (
    <SectionContainer
      title={<p className="font-helvetica-display">Starting a business has never been easier!</p>}
      subtitle={<p>At just Tk 500 (less than a day's worth of groceries!)</p>}
    >
      <div className="text-center">
        {/* <p className="text-blue-gray-900 text-4xl md:text-5xl font-bold">Starting a business has never been easier!</p>
        <p className="mt-3 md:mt-4 text-blue-gray-500 text-lg md:text-xl">{"At just Tk 500 (less than a day's worth of groceries!)"}</p> */}
        <div className="mt-9 w-fit md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {landingPricingList?.map((item, index) => (
            <div
              key={index}
              className={cn(
                `rounded-2xl p-8 md:p-9 border-2 flex flex-col  justify-between gap-4 md:gap-12 max-w-[574px] aspect-[343/384] md:aspect-[574/374]`,
                {
                  "bg-gradient-to-br from-[#40526F] to-[#051328] shadow-inner shadow-[#5A6D89]": item?.id === 0,
                  "bg-[#541DFF] shadow-inner shadow-[#7C52FF]": item?.id === 1,
                }
              )}
              style={{
                borderColor: item?.color?.border ?? "black",
              }}
            >
              <div className="text-start">
                <div className="flex justify-between w-full">
                  <p className="text-2.3xl md:text-4xl font-bold text-[#EEE9FF]">{item?.name ?? ""}</p>
                  <Image src={item?.iconUrl ?? ""} alt="fast" width={36} height={36} className="aspect-square size-6 md:size-9" />
                </div>
                <p
                  className={cn("mt-2 md:mt-4 text-md max-w-[80%] text-start text-blue-gray-400", {
                    "text-[#BBA5FF]": item?.id === 1,
                  })}
                >
                  {item?.description ?? ""}
                </p>
              </div>
              <div className="text-start">
                <p className="text-md text-[#EEE9FF]">
                  <span className="font-semibold text-4xl">{item?.price ?? 0}</span> BDT per month
                </p>
                <Link href="https://merchant.zatiqeasy.com/" target="_blank">
                  <Button
                    className={cn("rounded-full w-full p-4 mt-6 shadow-[inset_0px_0px_15.5px_rgba(255,255,255,0.5)]  border-2", {
                      "border-blue-gray-400": item?.id === 0,
                      "border-[#C1B5E5]": item?.id === 1,
                    })}
                    size="custom"
                    style={{
                      backgroundColor: item?.color?.button ?? "",
                    }}
                  >
                    <Image src={item?.buttonIconUrl ?? ""} alt="fast" width={24} height={24} className="aspect-square" />
                    <p className="text-lg">{item?.buttonText}</p>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PricingSection;
