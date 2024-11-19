import React from "react";
import SectionContainer from "./section_container";
import { toolList } from "@/utils/constants";
import Image from "next/image";


const ToolSection = () => {
  return (
    <SectionContainer
      title={<p className="font-helvetica-display">Take your business to the global platform with our marketing and management tools</p>}
      subtitle={<p>Streamline your marketing with exclusive ZatiqEasy features</p>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-6">
        {toolList?.map((item, index) => (
          <div key={index} className=" w-full rounded-3xl bg-[linear-gradient(150deg,_#40526F_1.15%,_#051328_100.18%)] p-6 flex flex-col justify-between items-start gap-[24px] md:gap-[44px] ">
            <div className="flex justify-center items-center w-[48px] md:w-[72px] aspect-square rounded-md border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.19)] shadow-[inset_0px_0px_12px_0px_rgba(255,255,255,0.35)] backdrop-blur-[12px]">
              <Image src={item?.iconUrl ?? ""} alt="fast" width={36} height={36} className="aspect-square size-6 md:size-9" />
            </div>
            <p className="text-blue-gray-300 text-lg md:text-2xl">{item?.title ?? ""}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ToolSection;
