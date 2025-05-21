import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "../three/Experience";

const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
