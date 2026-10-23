"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TbCircleArrowUpRight } from "react-icons/tb";

export const EMAIL = "devanshdwivedi729@gmail.com";

export function HoverBorderGradientDemo() {
  return (
    <HoverBorderGradient
      as="a"
      href={`mailto:${EMAIL}`}
      containerClassName="rounded-full border-black"
      className="bg-black text-white flex items-center gap-2 px-5 py-3 text-sm md:text-lg rounded-full"
    >
      <span className="text-xl md:text-2xl">
        <TbCircleArrowUpRight />
      </span>
      <span>{EMAIL}</span>
    </HoverBorderGradient>
  );
}
