import React from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-20 bg-black bg-opacity-60 backdrop-blur-lg p-4 flex justify-center gap-6 text-white text-xl">
      <a href="#home" className="hover:text-cyan-400 flex items-center gap-2">
        <FaHome /> Home
      </a>
      <a href="#about" className="hover:text-cyan-400 flex items-center gap-2">
        <FaUser /> About
      </a>
      <a
        href="#contact"
        className="hover:text-cyan-400 flex items-center gap-2"
      >
        <FaEnvelope /> Contact
      </a>
    </nav>
  );
};

export default Navbar;
