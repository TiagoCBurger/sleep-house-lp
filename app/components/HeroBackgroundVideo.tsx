"use client";

import { useEffect, useRef } from "react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 size-full object-cover object-[64%_center] opacity-75 lg:object-center"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/home/hero-sleep-house.webp"
      aria-hidden="true"
      data-hero-media
    >
      <source src="/hero-timeline.webm" type="video/webm" />
      <source src="/hero-timeline.mp4" type="video/mp4" />
    </video>
  );
}
