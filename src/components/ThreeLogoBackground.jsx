import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Logo() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#00ffff" />
    </mesh>
  );
}

export default function ThreeLogoBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Logo />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          // Optional: limit rotation to keep logo upright
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
}
