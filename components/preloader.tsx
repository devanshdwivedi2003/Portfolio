"use client";

import gsap from "gsap";
import { useEffect, useRef, memo } from "react";
import BanterLoader from "./ui/BanterLoader";

interface PreloaderProps {
  onComplete: () => void; 
}

const Preloader = memo(({ onComplete }: PreloaderProps) => {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const preloaderBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!counterRef.current || !lineRef.current || !preloaderBgRef.current)
      return;

    const counter = { value: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    // Initial state
    gsap.set("#first, #second, #logo", {
      scale: 1,
      opacity: 1,
    });

    gsap.set("#first, #second", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });

    // Animate counter
    tl.to(counter, {
      value: 100,
      duration: 3,
      onUpdate: () => {
        if (!counterRef.current || !lineRef.current) return;
        const value = Math.floor(counter.value);
        counterRef.current.textContent = String(value);
        lineRef.current.style.width = `${value}%`;
      },
    })
      // Fade out counter
      .to(counterRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
      // Scale down overlays
      .to(
        ["#first", "#second"],
        {
          scale: 0.5,
          duration: 0.6,
          ease: "power4.inOut",
        },
        "-=0.2"
      )
      // 🔥 Spin + fade logo before exit
      .to(
        "#logo",
        {
          rotation: 360,
          scale: 1.5,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.3"
      )
      // Animate overlays away
      .to("#first", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.4,
        ease: "power3.inOut",
      })
      .to(
        "#second",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.4,
          ease: "power3.inOut",
        },
        "-=0.2"
      )
      // Slide preloader off
      .to(
        preloaderBgRef.current,
        {
          y: "-100%",
          duration: 0.8,
          ease: "power4.inOut",
          force3D: true,
          onComplete: onComplete,
        },
        "-=.4"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderBgRef}
      className="preloader fixed top-0 left-0 w-full h-full z-[999999] bg-black"
    >
      {/* Logo in the middle */}
      <div
        id="logo"
        className="absolute inset-0 flex items-center justify-center z-50"
      >
        <span className="text-5xl font-bold text-white"><BanterLoader/></span>
      </div>

      {/* Overlays */}
      <div
        id="first"
        className="absolute top-0 left-0 w-full h-full bg-gray-200 z-30"
      ></div>
      <div
        id="second"
        className="absolute top-0 left-0 w-full h-full bg-black z-20"
      ></div>

      {/* Counter */}
      <div className="number absolute bottom-[3rem] right-[3rem] text-[12vw] z-40">
        <span ref={counterRef} className="text-black">
          0
        </span>
      </div>

      {/* Progress line */}
      <div
        ref={lineRef}
        className="absolute top-0 left-0 bg-black h-[5px] z-[9999999]"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
});

Preloader.displayName = "Preloader";

export default Preloader;
