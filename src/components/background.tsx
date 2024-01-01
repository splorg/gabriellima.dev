'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'

export const Background = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
      <Animation />
    </div>
  )
}

const Stars = () => {
  const groupRef = useRef()

  useFrame(({ clock }: { clock: any }) => {
    if (!groupRef.current) return

    const elapsedTime = clock.getElapsedTime() / 50;

    (groupRef.current as any).children.forEach(
      (
        star: { position: { x: number, y: number, z: number } },
        index: number,
      ) => {
        const angle = (elapsedTime + index * 0.2) % (2 * Math.PI)
        const radius = 2.3 + Math.random() * 0.0001

        star.position.x =
          radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index)
        star.position.y =
          radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index)
        star.position.z = radius * Math.cos(elapsedTime * 0.5 + index)
      }
    )
  })

  const stars = [...Array(64)].map((_, i) => {
    const size = i % 2 === 0 ? 0.03 : 0.05
    
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size / 3, size / 3]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    )
  })

  return <group ref={groupRef as any}>{stars}</group>
}

const Animation = () => {
  return (
    <Canvas camera={{ fov: 40, position: [0, 0, 5] }} gl={{ antialias: false }} className="w-screen h-screen dark:opacity-65">
      <Stars />
    </Canvas>
  )
}