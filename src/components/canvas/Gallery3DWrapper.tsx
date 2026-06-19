"use client";
import dynamic from "next/dynamic";

const Gallery3DScene = dynamic(
  () => import("@/components/canvas/Gallery3D").then((m) => m.Gallery3D),
  { ssr: false }
);

export function Gallery3DWrapper() {
  return <Gallery3DScene />;
}
