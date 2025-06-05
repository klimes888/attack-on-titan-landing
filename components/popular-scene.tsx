"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

import ArminMonent from "@/assets/Armin_moment.jpeg";
import ErenMonent from "@/assets/Eren_moment.webp";
import MikasaMonent from "@/assets/Mikasa_moment.avif";
import LeviMonent from "@/assets/levi_moment.webp";

const scene = [
  {
    id: 1,
    title: "Best Of Eren Jaeger",
    thumbnail: ErenMonent,
    describe: "우리는 모두 태어났을 때부터 자유다",
  },
  {
    id: 2,
    title: "Best Of  Levi Ackerman",
    thumbnail: LeviMonent,
    describe:
      "우리가 꿈꿨던 거인이 없는 세상은… 어이 없고 한심할 정도로, 이상적인 세계였다",
  },
  {
    id: 3,
    title: "Best Of  Mikasa Ackerman",
    thumbnail: MikasaMonent,
    describe: "이 세계는 잔혹하다. 그리고... 무척 아름다워",
  },
  {
    id: 4,
    title: "Best Of Armin Arlert",
    thumbnail: ArminMonent,
    describe: "아무것도 버리지 못하는 사람은, 아무것도 바꿀 수 없어",
  },
];

export default function PopularScene() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % scene.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + scene.length) % scene.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section id="section2" className="popular-scene">
      <div className="clips-header">
        <h2 className="clips-title">Popular Scene</h2>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="clips-carousel">
        <button
          className="carousel-btn prev"
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <ChevronLeft />
        </button>

        <div className="clips-container">
          {scene.map((clip, index) => (
            <div
              key={clip.id}
              className={`clip-card ${index === currentIndex ? "active" : ""}`}
              style={{
                transform: `translate3d(${
                  (index - currentIndex) * 100
                }%, 0, 0)`,
              }}
            >
              <div className="clip-thumbnail">
                <Image
                  src={clip.thumbnail}
                  alt={clip.title}
                  // className="background-image"
                  width={420}
                  height={280}
                  unoptimized
                />
              </div>
              <div className="clip-title-wrap">
                <h3 className="clip-title">{clip.title}</h3>
                <p>{clip.describe}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn next"
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
