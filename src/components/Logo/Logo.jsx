import React from "react";
import logo from '../../assets/images/logo2.png'
import styles from "./Logo.module.scss";

export default function Logo({ isScrolled }) {
  return (
    <a
      href="#home"
      className={`${
        isScrolled ? styles.logoWrapperScrolled : styles.logoWrapperStatic
      } flex items-center justify-center ` + styles.logo}
    >
			<img src={logo} alt="" />
    </a>
  );
}
