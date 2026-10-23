"use client";
import React from "react";
import { motion } from "motion/react";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbMail, TbPhoto } from "react-icons/tb";
import { SectionHeading } from "./section-heading";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "GSAP", icon: <SiGreensock /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "ShadCN UI", icon: <SiShadcnui /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Nodemailer", icon: <TbMail /> },
      { name: "ImageKit", icon: <TbPhoto /> },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative w-full px-6 py-24">
      <SectionHeading title="SKILLS" subtitle="Tools I use to bring ideas to life" />
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: gi * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-neutral-300 transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="text-lg transition-transform group-hover:scale-110">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Problem solving highlight */}
      <motion.a
        href="https://leetcode.com/u/Devansh_2003_/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-5 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-white/30 sm:flex-row"
      >
        <div className="flex items-center gap-3 text-gray-200">
          <SiLeetcode className="text-3xl" />
          <span className="text-lg font-semibold">Problem Solving</span>
        </div>
        <div className="flex gap-10 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-semibold text-white">600+</p>
            <p className="text-xs md:text-sm text-neutral-500">Problems solved</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-semibold text-white">1600+</p>
            <p className="text-xs md:text-sm text-neutral-500">Contest rating</p>
          </div>
        </div>
      </motion.a>
    </section>
  );
};
