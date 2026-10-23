"use client";
import React from "react";
import { motion } from "motion/react";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";
import { TbCircleArrowUpRight } from "react-icons/tb";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4">
        {projects.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-32"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-block rounded-full bg-gray-200 px-3 py-0.5 text-xs font-semibold text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm text-neutral-500">{item.date}</span>
            </div>
            <h3 className="text-2xl md:text-3xl mb-4 font-bold text-white">
              {item.title}
            </h3>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-white/10 mb-6"
            >
              <Image
                src={item.image}
                alt={`${item.title} preview`}
                width={1000}
                height={600}
                sizes="(max-width: 768px) 100vw, 672px"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </a>

            <ul className="mb-5 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                >
                  {t}
                </li>
              ))}
            </ul>

            <ul className="mb-6 space-y-2.5 text-sm md:text-base leading-relaxed text-neutral-300 [&_b]:font-semibold [&_b]:text-white">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-base md:text-lg border-white border-2 font-semibold rounded-full px-6 py-1.5 transition hover:bg-white hover:text-black"
            >
              Live <TbCircleArrowUpRight className="text-xl" />
            </a>
          </motion.article>
        ))}
      </div>
    </TracingBeam>
  );
}

const projects = [
  {
    title: "City Cruise",
    date: "January 2024",
    points: [
      <>Architected a full-stack car rental platform with <b>JWT + bcrypt auth and RBAC</b>, with zero authentication bypass incidents across testing and production.</>,
      <>Reduced average car-image load time by <b>~60%</b> by routing all media through the ImageKit CDN with responsive thumbnails.</>,
      <>Built an admin dashboard with full CRUD on vehicle inventory and real-time booking oversight, cutting manual operations effort to near zero.</>,
      <>Structured a RESTful API across <b>10+ feature modules</b> with React Context API state management and clean separation of concerns.</>,
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "ImageKit", "Tailwind CSS"],
    link: "https://city-cruise.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1698907388777-237c13c7a084?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhciUyMGNpdHklMjBjcnVpc2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "ShadZen",
    date: "September 2024",
    points: [
      <>Implemented SSR on all data-heavy pages, improving Time to First Byte by <b>~45%</b> versus a client-side-only baseline.</>,
      <>Built <b>12+ reusable ShadCN components</b> (tables, modals, charts, form inputs), shrinking per-feature UI development from ~4 hours to <b>under 1 hour</b>.</>,
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
    link: "https://shad-zen-3.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
  },
  {
    title: "Awwwards Video Game",
    date: "July 2024",
    points: [
      <>Engineered animation-first interactions using GSAP timelines and Framer Motion, achieving <b>sub-200 ms</b> response across all animated sequences.</>,
      <>Attained a <b>95+ Lighthouse performance score on mobile</b> by using Tailwind&apos;s utility-first CSS to eliminate every render-blocking stylesheet.</>,
    ],
    tech: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
    link: "https://awwards-video-game.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1640301133815-4bec64fca33f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Ochi Project",
    date: "2024",
    points: [
      <>A fluid, responsive React frontend with sleek Tailwind CSS styling and a minimal CSS footprint.</>,
      <>GSAP and Framer Motion power smooth animations and transitions that add interactivity and lift overall engagement.</>,
    ],
    tech: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
    link: "https://ochi-project-jade.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1637939910009-976060f197b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9jaGklMjBwcm9qZWN0fGVufDB8fDB8fHww",
  },
];
