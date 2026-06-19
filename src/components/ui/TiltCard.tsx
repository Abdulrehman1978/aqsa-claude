"use client";
import { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, style, className, maxTilt = 16 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const glow = glowRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 to 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;

    el.style.transform = `perspective(900px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale(1.04) translateZ(12px)`;

    // Specular shine layer
    if (glow) {
      const glowX = 50 + x * 80;
      const glowY = 50 + y * 80;
      glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.12) 0%, transparent 65%)`;
      glow.style.opacity = "1";
    }
  };

  const onLeave = () => {
    const el = ref.current;
    const glow = glowRef.current;
    if (el) el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)";
    if (glow) glow.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transition: "transform 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
        ...style,
      }}
      className={className}
    >
      {children}
      {/* Specular shine overlay */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </div>
  );
}
