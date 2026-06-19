"use client";
import dynamic from "next/dynamic";

const MorphBlobScene = dynamic(
  () => import("@/components/canvas/MorphBlob").then((m) => m.MorphBlob),
  { ssr: false }
);

export function MorphBlobWrapper() {
  return <MorphBlobScene />;
}
