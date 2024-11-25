import React from "react";
import LayoutWrapper from "../layout_wrapper";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/utils/constants";


const LandingFooter = () => {
  return (
    <LayoutWrapper className="bg-blue-gray-800 ">
      <div className="w-full divide-y divide-blue-gray-600 text-blue-gray-50 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 py-5">
          <div>
            <p className="font-semibold text-md">Address</p>
            <p className="text-sm mt-1 md:max-w-[410px] text-cool-gray-300">
              USA: 1300 S 5th Ave, Pocatello, ID 83201 Canada: 107-5355 Waverley Dr SW, Calgary, AB, T3C2P7 <br/> Bangladesh: Pearsons Tower, 299 Elephant Road, Dhaka 1205, Bangladesh.
              <br/>Pakistan: Old Anarkali road, Lahore
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="font-semibold text-md">Email</p>
              <Link href="mailto:info@zatiq.com" className="text-sm mt-1 text-cool-gray-300">
                info@zatiq.com
              </Link>
            </div> 
            <div className="text-end">
              <p className="font-semibold text-md">Phone</p>
              <Link href="tel:+8801973392450" className="text-sm mt-1 text-cool-gray-300">
                Phone +880 1973-392450
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 ">
          <div className="flex items-center gap-4">
            <Image src="/assets/images/web.svg" alt="web" width={36} height={36} />
            <p className="font-semibold text-md">United States (English)</p>
          </div>
          <div className="flex gap-5 items-center justify-start md:justify-end">
            {socialLinks?.map((item, index) => (
              <Link key={index} href={item?.url ?? "#"} target="_blank">
                <Image src={item?.iconUrl ?? ""} alt={item?.name ?? "social icon"} width={36} height={36} />
              </Link>
            ))}
          </div>
        </div>

        <p className="text-cool-gray-300 text-sm py-5">Copyright © 2024 Zatiq ltd. All rights reserved.</p>
      </div>
    </LayoutWrapper>
  );
};

export default LandingFooter;
