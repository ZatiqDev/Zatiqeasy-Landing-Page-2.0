import { landingInfoList } from "@/utils/constants";
import Image from "next/image";
import React from "react";


const InfoSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10  md:gap-20">
      {landingInfoList?.map((item, index) => (
        <div key={index}>
          <div className="border size-14 md:size-18 aspect-square border-[#6A38FF26] border-opacity-15 bg-[#6A38FF59] bg-opacity-35 rounded-md flex justify-center items-center">
            <Image src={item?.iconUrl ?? ""} alt="fast" width={36} height={36} className="aspect-square size-6 md:size-9" />
          </div>
          <p className="font-bold text-2.3xl md:text-4xl text-blue-gray-900 mt-6 md:mt-9">{item?.title ?? ""}</p>
          <p className="text-blue-gray-600 text-md mt-3 ">{item?.description ?? ""}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
