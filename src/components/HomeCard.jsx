import React from "react";

export default function HomeCard() {
  return (
    <div className="relative z-10 max-w-md mx-auto mt-40 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-cyan-400">Youssef Benamor</span>
      </h1>
      <p className="text-xl mb-2">
        Full Stack Developer | Graduate of GoMyCode
      </p>
      <p className="text-sm text-gray-600">
        This card is in front of the 3D background logo.
      </p>
    </div>
  );
}
