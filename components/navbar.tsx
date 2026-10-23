"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { scrollToSection } from "./smoothscrolling";

const links = [
  { item: "Home", id: "home" },
  { item: "Experience", id: "experience" },
  { item: "Projects", id: "projects" },
  { item: "Skills", id: "skills" },
  { item: "Contact", id: "contact" },
];

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4 md:top-6" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed font-semibold inset-x-0 w-fit mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        {links.map(({ item, id }) => (
          <MenuItem
            key={id}
            setActive={setActive}
            active={active}
            item={item}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
          />
        ))}
      </Menu>
    </div>
  );
}
