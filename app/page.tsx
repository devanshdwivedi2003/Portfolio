import React from "react";
import { Home } from "../components/home";
import { Work } from "../components/projectWork";
import { Footer } from "@/components/Footer";
import Preloader from "@/components/preloader";

export default function HomePage() {
  
  return (
    <main className="relative">
      {/* <Preloader />
      */}
        <div>
          <Home />
          <Work />
          <Footer />
        </div>
      
    </main>
  );
}
