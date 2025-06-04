"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const clips = [
  {
    id: 1,
    title: "Best Of Eren Jaeger",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "5:42",
  },
  {
    id: 2,
    title: "Just Eren Moments",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "3:28",
  },
  {
    id: 3,
    title: "Epic Battles",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "7:15",
  },
  {
    id: 4,
    title: "Eren Being Eren",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "4:33",
  },
];

export default function PopularClips() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % clips.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + clips.length) % clips.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section className="popular-clips">
      <div className="clips-header">
        <h2 className="clips-title">Popular Clips</h2>
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
          {clips.map((clip, index) => (
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
                <img
                  src={clip.thumbnail || "/placeholder.svg"}
                  alt={clip.title}
                  loading="lazy"
                />
                <div className="play-overlay">
                  <Play className="play-icon" />
                </div>
                <span className="duration">{clip.duration}</span>
              </div>
              <h3 className="clip-title">{clip.title}</h3>
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
