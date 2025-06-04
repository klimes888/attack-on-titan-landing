"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PopularClips from "@/components/popular-clips";
import "./globals.css";

export default function AttackOnTitanLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`landing-container ${isLoaded ? "loaded" : ""}`}>
      <div className="background-overlay" />
      <div className="animated-particles animated-1" />
      <div className="animated-particles animated-2" />
      <Header />
      <HeroSection />
      <PopularClips />
    </div>
  );
}
