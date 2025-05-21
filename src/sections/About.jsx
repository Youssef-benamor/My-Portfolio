import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-900"
    >
      <h2 className="text-4xl font-semibold mb-6 text-cyan-400">About Me</h2>
      <p className="max-w-xl text-center text-lg">
        I'm a passionate Full Stack Developer who loves building creative and
        performant web applications. I graduated from GoMyCode and specialize in
        both frontend (React, Tailwind, Three.js) and backend (Node.js,
        MongoDB).
      </p>
    </section>
  );
};

export default About;
