"use client";

export default function Bottle() {
  return (
    <mesh rotation={[0.2, 0.5, 0]}>
      {/* Bottle Body */}
      <cylinderGeometry args={[0.45, 0.45, 2.2, 64]} />

      <meshPhysicalMaterial
        color="#22d3ee"
        metalness={0.15}
        roughness={0.2}
        transmission={0.35}
        thickness={1}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  );
}