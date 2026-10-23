"use client";
import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./section-heading";

const experience = [
  {
    company: "Opstree Global",
    role: "Frontend Engineer",
    date: "Jan 2025",
    points: [
      <>
        Delivered production-ready React components adopted across{" "}
        <b>3+ client projects</b>, cutting per-feature UI build time by{" "}
        <b>~30%</b> through a shared reusable component library.
      </>,
      <>
        Migrated from raw JavaScript to <b>React + TypeScript</b>, eliminating
        render-blocking scripts and lifting the Lighthouse performance score
        from <b>55 to 82</b>.
      </>,
      <>
        Integrated REST APIs with robust error and loading-state handling,
        cutting user-reported frontend bugs by <b>~40%</b> during UAT cycles.
      </>,
    ],
    tech: ["React", "TypeScript", "REST APIs", "Component Library"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative w-full px-6 py-24">
      <SectionHeading title="EXPERIENCE" subtitle="Where I've been building" />
      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/40 via-white/15 to-transparent" />
        {experience.map((job) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-10 pb-12"
          >
            <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/40 bg-black">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm transition-colors hover:border-white/25">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {job.role}
                </h3>
                <span className="text-sm text-neutral-500">{job.date}</span>
              </div>
              <p className="mt-1 text-base md:text-lg text-gray-300">
                {job.company}
              </p>

              <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-neutral-400 [&_b]:font-semibold [&_b]:text-gray-200">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
