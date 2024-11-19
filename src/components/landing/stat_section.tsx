import { cn } from "@/lib/utils";
import { landingStatList } from "@/utils/constants";
import React from "react";


const StatSection = () => {
  return (
    <div
      className="rounded-3xl grid grid-cols-1 md:grid-cols-4 divide-y md:divide-x md:divide-y-0 divide-white divide-opacity-15  md:py-12"
      style={{ background: "linear-gradient(144deg, #8861FF -0.35%, #551EFF 96.01%, #541DFF 109.79%)" }}
    >
      {landingStatList?.map((item, index) => (
        <div
          className={cn("p-8 md:py-0 md:px-12", {

          })}
        >
          <p className="text-2.3xl md:text-4xl font-bold text-white">{item?.title ?? ""}</p>
          <p className="text-[#DDD2FF] text-lg md:text-xl  mt-2 max-w-[250px] md:max-w-fit">{item?.description ?? ""}</p>
        </div>
      ))}
    </div>
  );
};

export default StatSection;
