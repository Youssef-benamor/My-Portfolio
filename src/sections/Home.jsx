import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center px-4"
    >
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-2xl mx-auto border border-white/20">
        <div className="flex justify-center mb-4">
          <FaCode className="text-cyan-400 text-5xl animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-cyan-400">Youssef Benamor</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React & Node.js Wizard",
            2000,
            "3D Web Explorer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-2xl text-gray-300"
          repeat={Infinity}
        />

        <p className="mt-6 text-lg text-gray-400">
          Graduate of GoMyCode – passionate about building creative, 3D-powered,
          performant web experiences.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
