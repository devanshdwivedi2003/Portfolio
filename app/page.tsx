"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/preloader";

const Home = dynamic(
  () => import("../components/home").then((mod) => mod.Home),
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

  return (
    <main className="relative">
      <Preloader onComplete={() => setLoaded(true)} />
      {loaded && (
        <div>
          <Home />
          <Work />
          <Footer />
        </div>
      )}
    </main>
  );
}
