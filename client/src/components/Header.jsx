import React, { useState, useEffect } from "react";
import logo from "../assets/img/logoEgatur.svg";
import { NavBar } from "./NavBar";

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [headerBg, setHeaderBg] = useState('rgba(255, 255, 255, 0.8)'); // Blanco con opacidad inicialmente

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      const isAtBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);

      if (isAtBottom || currentScrollPos === 0) {
        setHeaderBg('transparent'); // Transparente al estar en la parte superior o al fondo
      } else {
        setHeaderBg(isVisible ? 'rgba(255, 255, 255, 0.8)' : 'transparent'); // Blanco mientras sube, transparente mientras baja
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className="z-20 flex place-content-between items-center px-4 py-4 fixed w-screen shadow-md"
      style={{
        backdropFilter: "blur(5px)",
        transition: "top 0.3s, opacity 0.3s, background-color 0.3s",
        top: visible ? "0" : "-100px",
        opacity: visible ? 1 : 0,
        backgroundColor: headerBg,
      }}
    >
      <img
        src={logo}
        alt="Logo"
        className="max-w-40 h-auto sm:pl-4"
        style={{ opacity: 0.9 }}
      />
      <NavBar />
    </header>
  );
}
