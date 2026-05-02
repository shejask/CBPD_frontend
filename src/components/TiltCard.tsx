"use client";

import { ReactNode } from "react";
import { useMouseTilt } from "@/hooks/useMouseTilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  sensitivity?: number;
}

export default function TiltCard({ children, className = "", sensitivity = 10 }: TiltCardProps) {
  const { transform, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseTilt(sensitivity);
  
  return (
    <div 
      className={`${className} transition-transform ease-out`}
      style={{ 
        transform, 
        transformStyle: "preserve-3d",
        transitionDuration: isHovered ? "100ms" : "500ms" 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* We add an inner div to pass the preserve-3d perspective safely down if needed */}
      <div className="w-full h-full" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
