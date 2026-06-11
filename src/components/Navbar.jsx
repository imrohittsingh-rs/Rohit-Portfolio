import React from "react";
import { Link } from "react-scroll";
import favicon from "../assets/favicon.png";
import contact from "../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-14 py-8">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer transition-transform hover:scale-105"
      >
        <img
          src={favicon}
          alt="desktop-logo"
          className="w-16 object-cover rounded-md"
        />
      </Link>

      <div className="hidden md:flex items-center gap-14 text-lg font-medium text-gray-600">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300 active:text-yellow-300 active:border-yellow-300"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300 active:text-yellow-300 active:border-yellow-300"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300 active:text-yellow-300 active:border-yellow-300"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300 active:text-yellow-300 active:border-yellow-300"
        >
          Projects
        </Link>
      </div>

      <div className="flex justify-center md:justify-start">
        <button className="bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
          <Link
            to="contact"
            smooth={true}
            duration={300}
            className="flex items-center gap-3 px-6 py-3"
          >
            <img
              src={contact}
              alt="contact-me-btn"
              className="w-5 h-5 object-cover"
            />
            <span>Contact me</span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
