import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-800"
    >
      <h2 className="text-4xl font-semibold mb-6 text-cyan-400">Contact</h2>
      <p className="mb-4 text-lg">Feel free to reach out!</p>
      <div className="flex flex-col gap-4 text-lg">
        <p className="flex items-center gap-2">
          <FaEnvelope /> youssefbenamor1234@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <FaGithub />
          <a
            href="https://github.com/Youssef-benamor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            github.com/Youssef-benamor
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
