"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

/* ─── Config ──────────────────────────────────── */
const ARTWORK_URLS = [
  "/images/art-2.png",
  "/images/art-1.png",
  "/images/art-4.png",
  "/images/art-5.png",
  "/images/art-3.png",
  "/images/art-6.png",
];

interface FrameConfig {
  pos: [number, number, number];
  rot: [number, number, number];
  size: [number, number];
  speed: number;
}

const CONFIGS: FrameConfig[] = [
  { pos: [0.2, 0.1, 0.5],    rot: [0.04, -0.06, 0.015],  size: [2.8, 2.2], speed: 0.7  },
  { pos: [-4.0, 0.6, -1.8],  rot: [0.02, 0.22, -0.04],   size: [2.3, 1.8], speed: 1.0  },
  { pos: [4.2, 0.7, -2.2],   rot: [0.01, -0.2, 0.03],    size: [2.1, 1.7], speed: 0.9  },
  { pos: [-2.2, -3.0, -1.0], rot: [-0.06, 0.14, 0.06],   size: [1.9, 1.5], speed: 1.2  },
  { pos: [2.6, -2.8, -0.5],  rot: [-0.04, -0.12, -0.05], size: [1.7, 1.4], speed: 1.05 },
  { pos: [-1.0, 3.0, -3.5],  rot: [0.08, 0.06, -0.02],   size: [1.8, 1.4], speed: 0.85 },
];

/* ─── Batch-load all 6 textures then render frames ─ */
function Artworks() {
  const textures = useTexture(ARTWORK_URLS) as THREE.Texture[];

  return (
    <>
      {CONFIGS.map((cfg, i) => (
        <Float key={i} speed={cfg.speed} rotationIntensity={0.16} floatIntensity={0.32}>
          <group position={cfg.pos} rotation={cfg.rot}>
            {/* Frame border */}
            <mesh>
              <boxGeometry args={[cfg.size[0] + 0.14, cfg.size[1] + 0.14, 0.06]} />
              <meshStandardMaterial color="#1A1612" metalness={0.45} roughness={0.55} />
            </mesh>
            {/* Cream mat */}
            <mesh position={[0, 0, 0.033]}>
              <boxGeometry args={[cfg.size[0] + 0.06, cfg.size[1] + 0.06, 0.01]} />
              <meshStandardMaterial color="#F5F0E8" />
            </mesh>
            {/* Artwork */}
            <mesh position={[0, 0, 0.041]}>
              <planeGeometry args={[cfg.size[0], cfg.size[1]]} />
              <meshBasicMaterial map={textures[i]} toneMapped={false} />
            </mesh>
          </group>
        </Float>
      ))}
    </>
  );
}

/* ─── Optimised particle field ────────────────────── */
function Particles() {
  const count = 1800;
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#B85C38"),
      new THREE.Color("#7A9E7E"),
      new THREE.Color("#C9A84C"),
      new THREE.Color("#F5F0E8"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.009;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]}    />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ─── Mouse parallax camera ────────────────────── */
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.6, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.35, 0.03);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ─── Export ────────────────────────────────────── */
export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 44 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#080604"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 4, 4]} intensity={2.5} color="#B85C38" />
      <pointLight position={[-6, -4, 2]} intensity={1.2} color="#7A9E7E" />
      <directionalLight position={[0, 8, 4]} intensity={0.4} color="#F5F0E8" />

      <Suspense fallback={null}>
        <Artworks />
      </Suspense>

      <Particles />
      <CameraRig />

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.1} />
        <Vignette eskil={false} offset={0.12} darkness={1.4} />
      </EffectComposer>
    </Canvas>
  );
}
