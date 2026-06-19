"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

/* ─── Data ──────────────────────────────────────── */
const ARTWORKS = [
  { url: "/images/art-1.png", title: "Paper Quilling Mandala", tag: "Paper Craft" },
  { url: "/images/art-2.png", title: "Gestural Peony Study",   tag: "Watercolor"  },
  { url: "/images/art-3.png", title: "Botanical Resin Tray",   tag: "DIY Craft"   },
  { url: "/images/art-4.png", title: "Fluid Acrylic Pour",     tag: "Mixed Media" },
  { url: "/images/art-5.png", title: "Macramé Wall Art",       tag: "Fiber Art"   },
  { url: "/images/art-6.png", title: "Ceramic Botanical Bowl", tag: "Ceramics"    },
];
const URLS = ARTWORKS.map((a) => a.url);
const RADIUS = 3.8;

/* ─── One frame in the carousel ─────────────────── */
interface FrameProps {
  texture: THREE.Texture;
  index: number;
  total: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}

function Frame({ texture, index, total, hoveredIndex, setHoveredIndex }: FrameProps) {
  const ref = useRef<THREE.Group>(null);
  const angle = (index / total) * Math.PI * 2;
  const px = Math.sin(angle) * RADIUS;
  const pz = Math.cos(angle) * RADIUS;
  const isHovered = hoveredIndex === index;

  useFrame(() => {
    if (!ref.current) return;
    const ts = isHovered ? 1.14 : 1.0;
    ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, ts, 0.06);
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, ts, 0.06);
    ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, ts, 0.06);
  });

  return (
    <group
      ref={ref}
      position={[px, 0, pz]}
      rotation={[0, -angle, 0]}
      onPointerEnter={() => setHoveredIndex(index)}
      onPointerLeave={() => setHoveredIndex(null)}
    >
      {/* Frame border */}
      <mesh castShadow>
        <boxGeometry args={[2.4, 1.8, 0.07]} />
        <meshStandardMaterial color="#1A1612" metalness={0.5} roughness={0.45} />
      </mesh>
      {/* Cream mat */}
      <mesh position={[0, 0, 0.038]}>
        <boxGeometry args={[2.24, 1.67, 0.01]} />
        <meshStandardMaterial color="#EDE5D8" />
      </mesh>
      {/* Artwork */}
      <mesh position={[0, 0, 0.047]}>
        <planeGeometry args={[2.1, 1.55]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ─── Rotating carousel group ───────────────────── */
function Carousel() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const textures = useTexture(URLS) as THREE.Texture[];

  useFrame((state) => {
    if (!groupRef.current) return;
    const speed = hoveredIndex !== null ? 0.0008 : 0.0035;
    groupRef.current.rotation.y += speed;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -state.pointer.y * 0.05,
      0.025
    );
  });

  return (
    <group ref={groupRef}>
      {ARTWORKS.map((art, i) => (
        <Frame
          key={art.url}
          texture={textures[i]}
          index={i}
          total={ARTWORKS.length}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </group>
  );
}

/* ─── Reflective floor ───────────────────────────── */
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
      <planeGeometry args={[24, 24]} />
      <meshStandardMaterial color="#060504" metalness={0.95} roughness={0.05} />
    </mesh>
  );
}

/* ─── Ambient floating orbs ──────────────────────── */
function Orbs() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.08;
  });
  const orbData = [
    { pos: [5, 2, 0] as [number, number, number],  color: "#B85C38", r: 0.18 },
    { pos: [-5, -1, 1] as [number, number, number], color: "#7A9E7E", r: 0.12 },
    { pos: [2, -3, -3] as [number, number, number], color: "#C9A84C", r: 0.14 },
  ];
  return (
    <group ref={ref}>
      {orbData.map((o, i) => (
        <mesh key={i} position={o.pos}>
          <sphereGeometry args={[o.r, 8, 8]} />
          <meshBasicMaterial color={o.color} />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Export ────────────────────────────────────── */
export function Gallery3D() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 7.5], fov: 52 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#060504"]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[0, 6, 3]}  intensity={2.8} color="#F5F0E8" />
      <pointLight position={[5, 2, 6]}  intensity={1.8} color="#B85C38" />
      <pointLight position={[-5, 1, 6]} intensity={1.2} color="#7A9E7E" />
      <pointLight position={[0, -3, 4]} intensity={0.9} color="#C9A84C" />

      <Suspense fallback={null}>
        <Carousel />
        <Floor />
        <Orbs />
      </Suspense>

      <EffectComposer>
        <Bloom luminanceThreshold={0.22} intensity={1.1} mipmapBlur />
        <Vignette eskil={false} offset={0.1} darkness={1.3} />
      </EffectComposer>
    </Canvas>
  );
}
