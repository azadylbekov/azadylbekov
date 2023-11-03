import { useState, useEffect } from "react";
import React from "react";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import LeftFixed from "./components/LeftFixed/LeftFixed";
import About from "./components/About/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollReveal from "scrollreveal";
import { srConfig } from "./utils/config";

function App() {
  const leftFixedReveal = React.createRef(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(leftFixedReveal.current, srConfig());
  }, []);

  const mobileNavToggle = (isOpen) => {
    setIsMobileNavOpen(isOpen);
  }

  return (
    <>
      <ParallaxProvider>
        <Header mobileNavToggle={mobileNavToggle} />
        <div className={isMobileNavOpen ? "blur-sm" : ""}>
          <Home />
          <LeftFixed ref={leftFixedReveal} />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
