import { cn } from "@/lib/utils";
import { landingPricingList } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const PricingSection = () => {
  return (
    <div className="text-center">
      <p className="text-blue-gray-900 text-4xl md:text-5xl font-bold">Starting a business has never been easier!</p>
      <p className="mt-3 md:mt-4 text-blue-gray-500 text-lg md:text-xl">{"At just Tk 500 (less than a day's worth of groceries!)"}</p>
      <div className="mt-9 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {landingPricingList?.map((item, index) => (
          <div
            key={index}
            className={cn(`rounded-2xl p-8 md:p-9 border-2 flex flex-col  justify-between gap-15 md:gap-9`, {
              "border-4": item?.id === 1,
            })}
            style={{
              borderColor: item?.color?.border ?? "black",
              color: item?.color?.text ?? "black",
            }}
          >
            <div className="text-start">
              <div className="flex justify-between w-full">
                <p className="text-2.3xl md:text-4xl font-bold">{item?.name ?? ""}</p>
                <Image src={item?.iconUrl ?? ""} alt="fast" width={36} height={36} className="aspect-square size-6 md:size-9" />
              </div>
              <p className="mt-2 md:mt-4 text-md max-w-[80%] text-start">{item?.description ?? ""}</p>
            </div>
            <div className="text-start">
              <p className="text-md">
                <span className="font-semibold text-4xl">{item?.price ?? 0}</span> BDT per month
              </p>
              <Link href="https://merchant.zatiqeasy.com/" target="_blank">
                <Button
                  className="rounded-full w-full py-3 mt-6"
                  size="custom"
                  style={{
                    backgroundColor: item?.color?.button ?? "",
                  }}
                >
                  <Image src={item?.buttonIconUrl ?? ""} alt="fast" width={24} height={24} className="aspect-square" />
                  <p>{item?.buttonText}</p>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
