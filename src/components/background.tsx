"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useRef } from "react";
import type * as THREE from "three";

const STAR_COUNT = 150;

export const Background = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
      <Animation />
    </div>
  );
};

const Stars = () => {
  const { resolvedTheme } = useTheme();
  const groupRef = useRef<THREE.Group | null>(null);

  const starParams = useRef(
    [...Array(STAR_COUNT)].map(() => ({
      speed: 0.1 + Math.random() * 0.2,
      radius: 1.5 + Math.random() * 2.0,
      phase: Math.random() * Math.PI * 2,
      xOffset: (Math.random() - 0.5) * 4.0,
      yOffset: (Math.random() - 0.5) * 4.0,
      zOffset: (Math.random() - 0.5) * 2.0,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
    })),
  );

  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (!groupRef.current) return;

    const elapsedTime = clock.getElapsedTime() / 50;

    groupRef.current.children.forEach(
      (
        star: { position: { x: number; y: number; z: number } },
        index: number,
      ) => {
        const params = starParams.current[index];

        const time1 = elapsedTime * params.speed + params.phase;
        const time2 = elapsedTime * params.rotationSpeed + params.phase * 2;

        star.position.x =
          params.radius * Math.cos(time1) * Math.sin(time2 * 0.2) +
          params.xOffset +
          Math.sin(time1 * 0.3) * 0.1;

        star.position.y =
          params.radius * Math.sin(time1) * Math.cos(time2 * 0.25) +
          params.yOffset +
          Math.cos(time1 * 0.2) * 0.1;

        star.position.z =
          params.radius * Math.cos(time2) * Math.sin(time1 * 0.15) +
          params.zOffset +
          Math.sin(time2 * 0.4) * 0.05;
      },
    );
  });

  const stars = [...Array(STAR_COUNT)].map((_, i) => {
    const size = i % 2 === 0 ? 0.006 : 0.009;

    return (
      // biome-ignore lint/suspicious/noArrayIndexKey: intentional
      <mesh key={i} position={[1, 0, 0]}>
        <sphereGeometry args={[size, 4, 4]} />
        <meshBasicMaterial
          color={resolvedTheme === "dark" ? "white" : "black"}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    );
  });

  return <group ref={groupRef}>{stars}</group>;
};

const Animation = () => {
  return (
    <Canvas
      camera={{ fov: 40, position: [0, 0, 5] }}
      gl={{ antialias: true }}
      className="w-dvh h-dvh opacity-40"
    >
      <Stars />
    </Canvas>
  );
};
