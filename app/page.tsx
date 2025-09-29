"use client";
import React, { useState } from "react";
import { Home } from "../components/home";
import { Work } from "../components/projectWork";
import { Footer } from "@/components/Footer";
import Preloader from "@/components/preloader";

export default function HomePage() {
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
