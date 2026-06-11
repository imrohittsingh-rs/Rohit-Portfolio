import React from "react";
import pfp from "../assets/pfp.png";
import hireme from "../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section className="font-poppins flex items-center justify-center min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto px-6 md:px-14 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        
        {/* Left Side */}
        <div className="flex flex-col space-y-6 order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-medium text-gray-400">
              Hello,
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              I'm <span className="text-yellow-400">Rohit</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300">
              Web Developer
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            A B.Tech student in Computer Science at USICT, GGSIPU. I'm
            passionate about Full-Stack Web Development and have experience in
            building scalable applications using the MERN stack.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                duration={300}
                className="flex items-center gap-3 px-6 py-3"
              >
                <img
                  src={hireme}
                  alt="hire-me-btn"
                  className="w-5 h-5 object-cover"
                />
                <span>Hire me</span>
              </Link>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative max-w-sm md:max-w-md lg:max-w-lg w-full aspect-square">
            <img
              src={pfp}
              alt="profile-pic"
              className="w-full h-full object-cover object-top rounded-full border-2 border-yellow-300 drop-shadow-[0_0_15px_#facc15]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
