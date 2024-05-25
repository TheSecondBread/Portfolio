import React from "react";

export default function Navbar() {
  return (
    <div
    className="NavbarDiv"
    style={{zIndex:"1000"}}
    >
      <a href="/">
        <img
          style={{ width: "250px", height: "35px" }}
          src="/pragnan-high-resolution-logo-white-transparent (1).svg"
          alt="Icon Description"
        />
      </a>
      <nav className="Navbar">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  );
}
