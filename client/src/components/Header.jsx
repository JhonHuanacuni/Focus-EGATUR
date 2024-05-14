import React, { useState, useEffect } from "react";
import logo from "../assets/img/logoEgatur.svg";
import { NavBar } from "./NavBar";

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
    className="z-10 flex place-content-between items-center px-4 py-4 fixed w-screen shadow-md"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(5px)",
        transition: "top 0.3s",
        top: visible ? "0" : "-100px", // Change the value as per your need
        opacity: visible ? 1 : 0, // Toggle opacity based on visibility
      }}
    >
      <img
        src={logo}
        alt="Logo"
        className="max-w-40 h-auto sm:pl-4"
        style={{ opacity: 0.9 }}
      />
      <NavBar />
      <style jsx>{`
        header {
          opacity: 1;
        }
        header.hidden {
          opacity: 0;
        }
        header.transition {
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
}
