"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { Vector2 } from "three";

/* ─── Individual floating framed artwork ─────────────────────── */
interface ArtFrameProps {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  floatSpeed?: number;
}

function ArtFrame({ url, position, rotation, size, floatSpeed = 1 }: ArtFrameProps) {
  const texture = useTexture(url);
  const [w, h] = size;

  return (
    <Float speed={floatSpeed} rotationIntensity={0.18} floatIntensity={0.4}>
      <group position={position} rotation={rotation}>
        {/* Drop shadow plane */}
        <mesh position={[0.12, -0.12, -0.12]}>
          <planeGeometry args={[w + 0.5, h + 0.5]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.25} />
        </mesh>

        {/* Frame body */}
        <mesh castShadow>
          <boxGeometry args={[w + 0.16, h + 0.16, 0.07]} />
          <meshStandardMaterial color="#1A1612" metalness={0.4} roughness={0.6} />
        </mesh>

        {/* Cream mount/mat */}
        <mesh position={[0, 0, 0.036]}>
          <boxGeometry args={[w + 0.07, h + 0.07, 0.01]} />
          <meshStandardMaterial color="#F5F0E8" />
        </mesh>

        {/* Artwork canvas */}
        <mesh position={[0, 0, 0.044]}>
          <planeGeometry args={[w, h]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── Coloured particle dust ─────────────────────────────────── */
function Particles() {
  const count = 5000;
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#B85C38"),
      new THREE.Color("#7A9E7E"),
      new THREE.Color("#C9A84C"),
      new THREE.Color("#D4775A"),
      new THREE.Color("#F5F0E8"),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3]     = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.012;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.007) * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Mouse parallax camera ──────────────────────────────────── */
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.9,
      0.04
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.5,
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ─── Exported scene ─────────────────────────────────────────── */
export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 44 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#080604"]} />

      {/* Lighting */}
      <ambientLight intensity={0.55} />
      <pointLight position={[7, 5, 5]} intensity={2.5} color="#B85C38" />
      <pointLight position={[-7, -4, 3]} intensity={1.2} color="#7A9E7E" />
      <directionalLight position={[0, 10, 6]} intensity={0.4} color="#F5F0E8" />

      <Suspense fallback={null}>
        {/* Centre — hero frame */}
        <ArtFrame
          url="/images/art-2.png"
          position={[0.2, 0.1, 0.5]}
          rotation={[0.04, -0.06, 0.015]}
          size={[2.8, 2.2]}
          floatSpeed={0.7}
        />
        {/* Left mid */}
        <ArtFrame
          url="/images/art-1.png"
          position={[-4.0, 0.6, -1.8]}
          rotation={[0.02, 0.22, -0.04]}
          size={[2.3, 1.8]}
          floatSpeed={1.0}
        />
        {/* Right mid */}
        <ArtFrame
          url="/images/art-4.png"
          position={[4.2, 0.7, -2.2]}
          rotation={[0.01, -0.2, 0.03]}
          size={[2.1, 1.7]}
          floatSpeed={0.9}
        />
        {/* Bottom left */}
        <ArtFrame
          url="/images/art-5.png"
          position={[-2.2, -3.0, -1.0]}
          rotation={[-0.06, 0.14, 0.06]}
          size={[1.9, 1.5]}
          floatSpeed={1.2}
        />
        {/* Bottom right */}
        <ArtFrame
          url="/images/art-3.png"
          position={[2.6, -2.8, -0.5]}
          rotation={[-0.04, -0.12, -0.05]}
          size={[1.7, 1.4]}
          floatSpeed={1.05}
        />
        {/* Far back left */}
        <ArtFrame
          url="/images/art-6.png"
          position={[-1.0, 3.0, -3.5]}
          rotation={[0.08, 0.06, -0.02]}
          size={[1.8, 1.4]}
          floatSpeed={0.85}
        />
      </Suspense>

      <Particles />
      <CameraRig />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.22}
          luminanceSmoothing={0.9}
          intensity={1.4}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={new Vector2(0.0018, 0.0018)}
        />
        <Vignette eskil={false} offset={0.12} darkness={1.4} />
      </EffectComposer>
    </Canvas>
  );
}
