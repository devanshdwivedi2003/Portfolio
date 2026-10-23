"use client";
import React from "react";
import { motion } from "motion/react";
import { HoverBorderGradientDemo } from "./resume-btn";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { scrollToSection } from "./smoothscrolling";
import { LuArrowDown, LuDownload } from "react-icons/lu";

export const RESUME_URL = "/Devansh_Dwivedi_Resume.pdf";

const stats = [
  { value: "600+", label: "LeetCode problems" },
  { value: "1600+", label: "Contest rating" },
  { value: "3+", label: "Client projects" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Soft spotlight behind the heading */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center text-center pt-28 pb-16">
        <motion.p
          {...fadeUp(0.1)}
          className="mb-4 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs md:text-sm text-neutral-300 backdrop-blur"
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle animate-pulse" />
          Open to opportunities
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
        >
          Devansh Dwivedi
        </motion.h1>

        <motion.h2
          {...fadeUp(0.35)}
          className="mt-3 text-2xl sm:text-4xl md:text-5xl font-medium text-gray-300"
        >
          Full Stack Developer
        </motion.h2>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-2xl md:text-4xl font-semibold text-gray-200"
        >
          <ContainerTextFlip
            words={["Create", "Innovate", "Elevate"]}
            className="text-3xl md:text-6xl"
          />
        </motion.div>

        <motion.p
          {...fadeUp(0.65)}
          className="mt-8 max-w-xl text-sm md:text-lg text-neutral-400"
        >
          Frontend Engineer at Opstree Global. I build fast, secure and
          beautifully animated web apps — from REST APIs and databases to
          pixel-perfect, interactive frontends.
        </motion.p>

        <motion.div
          {...fadeUp(0.8)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="rounded-full bg-gray-200 px-7 py-3 text-base md:text-lg font-semibold text-black transition hover:bg-white hover:scale-[1.03] active:scale-95"
          >
            View my work
          </button>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-base md:text-lg font-semibold text-white transition hover:border-white hover:bg-white/10 active:scale-95"
          >
            <LuDownload /> Resume
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.9)} className="mt-6">
          <HoverBorderGradientDemo />
        </motion.div>

        <motion.dl
          {...fadeUp(1)}
          className="mt-12 grid grid-cols-3 gap-6 md:gap-12 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-1 text-xs md:text-sm text-neutral-500">
                {stat.label}
              </dt>
              <dd className="text-2xl md:text-4xl font-semibold text-gray-200">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.button
        aria-label="Scroll to experience"
        onClick={() => scrollToSection("experience")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        className="absolute bottom-8 z-10 text-2xl text-neutral-400 hover:text-white"
      >
        <LuArrowDown />
      </motion.button>
    </section>
  );
};
