"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
  style?: React.CSSProperties;
}

export function Reveal({ children, delay = 0, direction = "up", className = "", style = {} }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initial: Record<string, string> = {
    up: "translateY(60px)",
    left: "translateX(-60px)",
    right: "translateX(60px)",
    scale: "scale(0.9)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initial[direction],
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
