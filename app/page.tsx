"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PopularScene from "@/components/popular-scene";
import "./globals.css";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AttackOnTitanLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`landing-container ${isLoaded ? "loaded" : ""}`}>
      {!isMobile && (
        <>
          <div className="background-overlay" />
          <div className="animated-particles animated-1" />
          <div className="animated-particles animated-2" />
        </>
      )}
      <Header />
      <HeroSection />
      <PopularScene />
    </div>
  );
}
