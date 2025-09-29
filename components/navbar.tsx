"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 w-md" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 font-bold inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active}  item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
      </Menu>
    </div>
  );
}
