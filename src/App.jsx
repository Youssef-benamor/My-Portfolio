import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import BackgroundCanvas from "./components/BackgroundCanvas";

const App = () => {
  return (
    <div>
      <BackgroundCanvas />
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
