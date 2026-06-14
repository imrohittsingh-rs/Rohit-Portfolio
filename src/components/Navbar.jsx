import React, { useState } from "react";
import { Link } from "react-scroll";
import favicon from "../assets/favicon.png";
import contact from "../assets/contact.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";

const active = "text-yellow-300 border-yellow-300";
const items = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [menuVisible, setMenusVisible] = useState(false);

  return (
    <nav className="sticky font-poppins top-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-16 py-4 bg-gray-900">
      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        offset={-86}
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
          spy={true}
          offset={-86}
          activeClass={active}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-86}
          spy={true}
          activeClass={active}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-25}
          spy={true}
          activeClass={active}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-86}
          spy={true}
          activeClass={active}
          className="cursor-pointer border-b-4 border-transparent text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-300 hover:border-yellow-300"
        >
          Projects
        </Link>
      </div>

      <div className="hidden md:flex md:justify-start">
        <button className="bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-86}
            className="flex items-center gap-3 px-6 py-3"
          >
            <img
              src={contact}
              alt="contact-me-btn"
              className="w-5 h-5 object-cover"
            />
            <span className="font-semibold">Contact me</span>
          </Link>
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => {
            setMenusVisible((prev) => !prev);
          }}
          className="text-white text-4xl hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer hover:scale-110"
        >
          {menuVisible ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
        {menuVisible && (
          <motion.ul
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-full mt-3 w-52 bg-neutral-950/90 backdrop-blur-lg border border-white/10 p-2 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col mr-3"
          >
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={`${item.toLowerCase()}`}
                  onClick={() => setMenusVisible(false)}
                  className="block w-full text-neutral-300 hover:text-yellow-300 hover:bg-white/5 px-4 py-2.5 rounded-lg text-base font-medium tracking-wide transition-all duration-200 cursor-pointer"
                  smooth={true}
                  duration={300}
                  spy={true}
                >
                  {item}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
