"use client";

import { Fragment, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Levi from "@/assets/Levi.webp";
import Eren from "@/assets/Eren.webp";
import Mikasa from "@/assets/Mikasa.webp";
import Armin from "@/assets/Armin.webp";
import Back from "@/assets/Back.webp";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const soptlight = [
    { img: Eren, name: ["EREN", "YEAGER"] },
    { img: Mikasa, name: ["MIKASA", "ACKERMAN"] },
    { img: Armin, name: ["ARMIN", "ARLERT"] },
    { img: Levi, name: ["LEVI", "ACKERMAN"] },
  ];

  useEffect(() => {
    const enterDuration = 4000;
    const exitDuration = 1500;

    const switchTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % soptlight.length);
    }, enterDuration + exitDuration);

    return () => {
      clearTimeout(switchTimer);
    };
  }, [current]);

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
      // <div className="character-image"></div>
      <Image
        src={img}
        alt="Eren Jaeger"
        width={size.w}
        height={size.h}
        className={`character-image ${current === 0 && "img-eren"}`}
        unoptimized
      />
    );
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text-container">
          {soptlight.map(({ name }, index) => {
            if (index !== current) return null;
            return (
              <div key={index} className="text-container-inner">
                <div className="hero-title">
                  <span className="title-line">{name[0]}</span>
                  <span className="title-line">{name[1]}</span>
                </div>
                <p className="hero-subtitle">進撃の巨人</p>
              </div>
            );
          })}
        </div>
        <div className="hero-img-container"></div>
        {soptlight.map(({ img }, index) => {
          if (index !== current) return null;
          return (
            <div key={index} className="hero-character">
              <div className="character-image-wrap img-blur">
                {imageRender({
                  img,
                  size: { w: 600, h: 800 },
                })}
              </div>
              <div className={`character-image-wrap`}>
                {imageRender({ img, size: { w: 400, h: 600 } })}
              </div>
            </div>
          );
        })}
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
          className="background-image"
          width={1280}
          height={960}
          unoptimized
        />
        <div className="background-image-blur" />
      </div>
    </section>
  );
}
