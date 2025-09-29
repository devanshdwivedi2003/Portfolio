"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { NavbarDemo } from "./navbar";
import { HoverBorderGradientDemo } from "./resume-btn";
import { ContainerTextFlip } from "./ui/container-text-flip";



export const Home = () => {
  return (
    <div>
      <NavbarDemo />
      <div className="h-screen relative w-full bg-black flex  flex-col  overflow-hidden ">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="md:text-7xl text-3xl lg:text-8xl font-semibold  text-gray-200 mt-50  mb-6 ">
          Dᴇᴠᴀɴsʜ Dᴡɪᴠᴇᴅɪ <br />
          <span className="text-8xl font-semibold  text-gray-200">Full stack developer</span>
          <br />
          <ContainerTextFlip words={["Create", "Innovate", "Elevate"]} />
          <HoverBorderGradientDemo />
        </h1>
      </div>
    </div>
  );
};
