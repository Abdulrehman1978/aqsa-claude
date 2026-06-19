"use client";
import dynamic from "next/dynamic";

// Dynamic import with ssr:false must live inside a Client Component
const Hero3DScene = dynamic(
  () => import("@/components/canvas/Hero3D").then((m) => m.Hero3D),
  { ssr: false }
);

export function Hero3DWrapper() {
  return <Hero3DScene />;
}
