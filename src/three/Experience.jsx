import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars, Float, OrbitControls } from "@react-three/drei";

const Experience = () => {
  const torusRef = useRef();

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.002;
      torusRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      {/* Background Stars */}
      <Stars
        radius={100} // size of the inner sphere
        depth={50} // depth of area where stars are visible
        count={10000} // number of stars
        factor={4} // size factor
        saturation={0}
        fade
        speed={1}
      />

      {/* Torus Knot - Cool 3D Shape */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={torusRef} position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.4, 128, 64]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />

      {/* Controls */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </>
  );
};

export default Experience;
