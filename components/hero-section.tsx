"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Levi from "@/assets/Levi.png";
import Back from "@/assets/Back.jpeg";

export default function HeroSection() {
  const [animations, setAnimations] = useState({
    text: false,
    character: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(
      () => setAnimations((prev) => ({ ...prev, text: true })),
      500
    );
    const timer2 = setTimeout(
      () => setAnimations((prev) => ({ ...prev, character: true })),
      1000
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const imageRender = ({
    img,
    size,
    isBlur,
  }: {
    img: StaticImageData;
    size: { w: number; h: number };
    isBlur?: boolean;
  }) => {
    return (
      <Image
        src={img}
        alt="Eren Jaeger"
        width={size.w}
        height={size.h}
        className={`character-image ${isBlur && "img-blur"}`}
      />
    );
  };

  return (
    <section className="hero-section">
      {/* <div className="hide-container" /> */}
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className={`hero-title ${animations.text ? "visible" : ""}`}>
            <span className="title-line">LEVI</span>
            <span className="title-line">ACKERMAN</span>
          </h1>
          <p className={`hero-subtitle ${animations.text ? "visible" : ""}`}>
            進撃の巨人
          </p>
        </div>

        {/* <div className="character-glow" /> */}
        <div
          className={`hero-character ${animations.character ? "visible" : ""}`}
        >
          {imageRender({ img: Levi, size: { w: 600, h: 800 }, isBlur: true })}
          {imageRender({ img: Levi, size: { w: 300, h: 500 } })}
          <div className="character-glow img-blur" />
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-element element-1" />
        <div className="floating-element element-2" />
        <div className="floating-element element-3" />
        <div className="floating-element element-4" />
      </div>
      <div className="background-layout">
        <Image
          src={Back}
          alt="background"
          width={1280}
          height={768}
          className="background-image"
        />
        <div className="background-image-blur" />
      </div>
    </section>
  );
}
