"use client";
import { navLinkList } from "@/utils/constants";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import LayoutWrapper from "./layout_wrapper";


const Nav = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <LayoutWrapper className="items-center fixed top-4 z-[99]">
        <div className=" w-full  backdrop-blur-2xl bg-white/55 drop-shadow-xl rounded-full px-5 md:px-9 h-15 md:h-20 flex items-center justify-between">
          <Image src="/assets/images/logo.svg" alt="logo" width={150} height={40} className="aspect-[150/40] w-fit h-8 md:h-10" />
          <div className="hidden md:flex gap-12 items-center w-fit">
            {navLinkList?.map((item, index) => (
              <Link href={item?.url ?? "#"} key={index} className="font-bold hover:underline cursor-pointer">
                {item?.name}
              </Link>
            ))}
          </div>
          <div className="block md:hidden" onClick={() => setSideBarOpen(!sideBarOpen)}>
            {sideBarOpen ? <X className="text-primary" /> : <AlignJustify className="text-primary" />}
          </div>
        </div>
      </LayoutWrapper>
      {sideBarOpen && (
        <div className="app-px fixed top-[10%] md:hidden h-[88%] w-[100vw] z-[999]">
          <div className="bg-white drop-shadow-2xl rounded-2xl flex flex-col justify-between items-center  w-full h-full relative app-px py-4 animate__animated animate__slideInDown">
            <div className="flex flex-col gap-12 justify-center items-center flex-grow">
              {navLinkList?.map((item, index) => (
                <Link href={item?.url ?? "#"} target="_blank" key={index} className="font-bold hover:underline cursor-pointer text-2xl">
                  {item?.name}
                </Link>
              ))}
            </div>
            <Button className="font-gilmer text-md py-4 px-7 mt-[56px] lg:mt-[76px] w-full justify-self-end" size="custom">
              Launch your store now
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
