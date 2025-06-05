"use client";

import { useIntersectionObserver } from "@/hooks/use-intersectionObserver";
import { useRef } from "react";

export default function TrailerVedio() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useIntersectionObserver(videoRef, 0.4, {
    isEnter: () => {
      const el = document.getElementById("section3");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  });

  useIntersectionObserver(videoRef, 0.9, {
    isEnter: () => {
      videoRef?.current?.play();
    },
    elseFunc: () => {
      videoRef?.current?.pause();
    },
  });

  return (
    <section id="section3" className="video-wrap">
      <div className="video-wrap-background" />
      <video
        ref={videoRef}
        controls={false}
        autoPlay
        loop
        muted
        playsInline
        className="video-item"
      >
        <source src="/videoplayback.webm" type="video/webm" />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </section>
  );
}
