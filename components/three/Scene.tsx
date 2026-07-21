"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Bottle from "./Bottle";
import Lights from "./Lights";
import Environment from "./Environment";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
    >
      <color attach="background" args={["#050816"]} />

      <Lights />

      <Bottle />

      <Environment />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}