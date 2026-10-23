"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/preloader";

const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((mod) => mod.SparklesCore),
  { ssr: false }
);
const SmoothLayout = dynamic(() => import("@/components/smoothscrolling"), {
  ssr: false,
});
const NavbarDemo = dynamic(
  () => import("@/components/navbar").then((mod) => mod.NavbarDemo),
  { ssr: false }
);
const Home = dynamic(
  () => import("../components/home").then((mod) => mod.Home),
  { ssr: false }
);
const Experience = dynamic(
  () => import("@/components/experience").then((mod) => mod.Experience),
  { ssr: false }
);
const Skills = dynamic(
  () => import("@/components/skills").then((mod) => mod.Skills),
  { ssr: false }
);
const Work = dynamic(
  () => import("../components/projectWork").then((mod) => mod.Work),
  { ssr: false }
);
const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  // Stable callback so the preloader timeline doesn't restart on re-render
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <main className="relative bg-black">
      {!loaded && <Preloader onComplete={handleComplete} />}
      {loaded && (
        <>
          {/* Navbar lives outside the smoother: its transform would break `position: fixed` */}
          <NavbarDemo />
          {/* One fixed sparkles layer behind every section */}
          <div className="pointer-events-none fixed inset-0 z-0">
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
          <SmoothLayout>
            <Home />
            <Experience />
            <Work />
            <Skills />
            <Footer />
          </SmoothLayout>
        </>
      )}
    </main>
  );
}
