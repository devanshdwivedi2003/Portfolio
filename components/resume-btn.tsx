"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TbCircleArrowUpRight } from "react-icons/tb";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-15  justify-start text-center items-start p-0 ">
      <HoverBorderGradient
        as="button"
        containerClassName="rounded-full  border-black"
        className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2  py-3
         text-lg rounded-full"
      >
        <span className="text-2xl">
          <TbCircleArrowUpRight />
        </span>
        <a href="mailto:devansh.dwivedi69@gmail.com">devansh.dwivedi69@gmail.com</a>
      </HoverBorderGradient>
    </div>
  );
}
