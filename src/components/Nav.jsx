import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white p-5 flex items-center justify-between font-serif fixed top-0 w-full z-10 fade-inav opacity-95">
      <a href="/" className="">
        <img
          className="w-[250px] h-[35px]"
          src="/pragnan-high-resolution-logo-white-transparent (1).svg"
          alt="Icon Description"
        />
      </a>
      <button
        className="block md:hidden text-white"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>
      <nav className={`flex-col md:flex-row flex gap-4 md:gap-10 text-[19px] pr-5 ${isOpen ? "block" : "hidden"} md:flex`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
          onClick={toggleMenu}
        >
          HOME
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
          onClick={toggleMenu}
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
          onClick={toggleMenu}
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
          onClick={toggleMenu}
        >
          CONTACT
        </Link>
      </nav>
    </div>
  );
}
