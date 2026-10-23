"use client";
import React from "react";
import { motion } from "motion/react";

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  onClick,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <a
        href={href}
        onClick={onClick}
        className="relative z-10 block px-2 sm:px-3 py-1.5 text-xs sm:text-sm md:text-base text-white transition-opacity hover:opacity-90"
      >
        {item}
      </a>
      {active === item && (
        <motion.div
          layoutId="nav-hover"
          className="absolute inset-0 rounded-full bg-white/15"
          transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
        />
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/15 shadow-input flex justify-center gap-1 md:gap-3 px-2 md:px-4 py-2 bg-white/10 backdrop-blur-2xl text-white"
    >
      {children}
    </nav>
  );
};
