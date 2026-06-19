"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function BlobScene() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) ring1.current.rotation.z = t * 0.4;
    if (ring2.current) {
      ring2.current.rotation.z = -t * 0.25;
      ring2.current.rotation.x = t * 0.15;
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.3;
      ring3.current.rotation.z = t * 0.1;
    }
  });

  return (
    <>
      {/* Morphing organic blob */}
      <Sphere args={[1.6, 80, 80]}>
        <MeshDistortMaterial
          color="#7A9E7E"
          distort={0.42}
          speed={2.2}
          roughness={0.05}
          metalness={0.1}
          emissive="#3D6B44"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Ring 1 — rust */}
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.05, 8, 120]} />
        <meshBasicMaterial color="#B85C38" transparent opacity={0.5} />
      </mesh>

      {/* Ring 2 — gold, tilted */}
      <mesh ref={ring2} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.7, 0.03, 8, 120]} />
        <meshBasicMaterial color="#C9A84C" transparent opacity={0.35} />
      </mesh>

      {/* Ring 3 — sage, far orbit */}
      <mesh ref={ring3} rotation={[0.8, 0.5, 0]}>
        <torusGeometry args={[3.1, 0.02, 8, 120]} />
        <meshBasicMaterial color="#7A9E7E" transparent opacity={0.25} />
      </mesh>
    </>
  );
}

export function MorphBlob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#060504"]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]}   intensity={4} color="#7A9E7E" />
      <pointLight position={[-3, -2, 2]} intensity={2.5} color="#B85C38" />
      <pointLight position={[0, 0, 4]}   intensity={1} color="#F5F0E8" />

      <BlobScene />

      <EffectComposer>
        <Bloom luminanceThreshold={0.1} intensity={2.5} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
