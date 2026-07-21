"use client";

export default function Lights() {
  return (
    <>
      {/* Main Light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      {/* Fill Light */}
      <directionalLight
        position={[-5, 2, 3]}
        intensity={1}
      />

      {/* Top Light */}
      <pointLight
        position={[0, 4, 2]}
        intensity={30}
      />

      {/* Ambient */}
      <ambientLight intensity={0.8} />
    </>
  );
}