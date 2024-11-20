import React from "react";
import SectionContainer from "./section_container";
import { growList } from "@/utils/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";



const GrowSection = () => {
  return (
    <SectionContainer title={<p className="font-helvetica-display">Grow with Us</p>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {growList?.map((item, index) => (
          <div
            className={cn(
              "aspect-[343/511] relative overflow-clip p-4 md:p-10 rounded-3xl bg-[linear-gradient(150deg,_#40526F_1.15%,_#051328_100.18%)]  flex flex-col justify-between items-center",
            )}
            key={index}
          >
            {index === 2 && (
              <div
                className={cn("absolute top-4 right-0 w-full z-[2]", {
               
                })}
              >
                <svg width="464" height="282" viewBox="0 0 464 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 221C3.5 264.333 54.8723 335.368 113 213.5C185.5 61.4999 222.5 6.49987 279.5 81.4999C336.5 156.5 363.5 116 374 74.5C391.286 6.18122 415 -14.5 429 12.5C440.2 34.1 459.333 13 463.5 4.00005"
                    stroke="#00FFEA"
                  />
                </svg>
              </div>
            )}
            <div
              className={cn("w-full  flex flex-col justify-center h-[70%] items-center z-[3]", {
              })}
            >
              <Image src={item?.imageUrl ?? ""} alt="fast" width={500} height={10} className="w-[90%]" />
            </div>
            <div className="space-y-3 text-blue-gray-200">
              <div className="font-medium text-2.3xl md:text-[28px]"> {item?.title}</div>
              <div className="font-medium text-md"> {item?.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default GrowSection;
