import React, { useCallback } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

export default function Header({ mobileNavToggle }) {
  const [isScrolled, setScrolled] = useState(false);
  const [mouseToBottom, setMouseToBottom] = useState(false);

  let mouseY = 0;

  useEffect(() => {
    mouseY = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(Math.round(window.scrollY) > 10);
    const scrolledDown = window.scrollY > 230 && window.scrollY > mouseY;
    setMouseToBottom(scrolledDown);

    mouseY = window.scrollY;
  });

  return (
    <header
      className={`${isScrolled ? styles.headerScrolled : styles.headerStatic} ${
        mouseToBottom ? "top-[-146px]" : "top-0"
      } xl:px-11 px-4 flex items-center justify-between fixed left-0 right-0`}
    >
      <Logo isScrolled={isScrolled} />
      <Navbar mobileNavToggle={mobileNavToggle} mouseToBottom={mouseToBottom} />
    </header>
  );
}
