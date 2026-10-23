"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Scrolls to a section, going through ScrollSmoother when it's active
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(target, true, "top top");
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function SmoothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const smoother =
      ScrollSmoother.get() ??
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: reduceMotion ? 0 : 1.5,
        effects: true,
      });

    // Content is dynamically loaded, so recalculate once images/fonts settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timeout = setTimeout(refresh, 1000);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(timeout);
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
