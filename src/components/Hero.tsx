"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const BACKGROUND_VIDEOS = [
  "/videos/external/7490429.mp4", // Aerial footage of a university
  "/videos/external/6550141.mp4", // Man and woman at the library
  "/videos/external/8198513.mp4", // Students listening to the professor
  "/videos/external/8199413.mp4", // People studying together
  "/videos/external/7683332.mp4"  // College students walking in the campus
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Whenever the currentIndex changes, play the active video and reset it to start
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(err => console.log("Video auto-play was prevented", err));
    }
    
    // Safety check to pause other videos so they don't consume bandwidth/audio
    videoRefs.current.forEach((vid, idx) => {
      if (idx !== currentIndex && vid) {
        vid.pause();
      }
    });
  }, [currentIndex]);

  const handleVideoEnd = (index: number) => {
    // When the current video ends naturally, move to the next one
    if (index === currentIndex) {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUND_VIDEOS.length);
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background Playlist */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-primary-900">
        {BACKGROUND_VIDEOS.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            src={videoSrc}
            muted
            playsInline
            onEnded={() => handleVideoEnd(index)}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
              currentIndex === index ? "opacity-80 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Dark opacity layer */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        {/* Gradient Overlay using brand blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/60 via-primary-900/50 to-transparent z-10 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/80 z-10 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between pt-20 h-full gap-12 w-full">
        
        {/* Text Area */}
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 h-full pb-10 pt-24 lg:pt-36">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-4xl leading-[1.2] mb-5 animate-[fadeInUp_1s_ease-out]">
            A UK Professional Awarding Body Delivering Industry-Relevant, <br className="hidden md:block" />
            <span className="text-brand-red">Globally Recognised Qualifications and Professional Credentials</span>
          </h1>
        </div>

        {/* Floating Images Area */}
        <div className="hidden lg:flex w-full lg:w-1/2 relative h-[500px] items-center justify-center animate-[fadeInUp_1.5s_ease-out]">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-red/20 rounded-full blur-[80px] z-0"></div>
          <div className="absolute top-10 left-20 w-8 h-8 rounded-full bg-brand-red/50 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] z-40"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-[fadeInUp_1.6s_ease-out]">
        <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-red animate-[translateY_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
