import React from "react";
import { motion as Motion } from "motion/react";
import { FaGraduationCap, FaCode } from "react-icons/fa";

const About = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Coding Workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Software Development",
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Web Applications",
    },
    {
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "UI/UX & Design Systems",
    },
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Problem Solving & DSA",
    },
  ];

  return (
    <section
      className="font-poppins flex flex-col justify-center py-20 px-6 md:px-14 max-w-7xl mx-auto w-full"
      id="about"
    >
      {/* Section Title */}
      <Motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-slate-900 dark:text-white font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
          ✨ About{" "}
          <span className="text-amber-500 dark:text-yellow-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.15)] dark:drop-shadow-[0_0_15px_rgba(250,204,21,0.15)]">
            Me
          </span>
        </h2>
      </Motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Biography & Info */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
            Hi, I'm Rohit! A passionate Full Stack Web Developer.
          </h3>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-justify">
            I am a B.Tech student in Computer Science and Engineering at USICT, GGSIPU. I love turning complex problems into elegant, functional digital experiences, with a primary focus on the MERN stack (MongoDB, Express, React, and Node.js).
          </p>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-justify">
            In addition to software engineering, I am keen on algorithms and problem-solving. I actively challenge myself with DSA problems on LeetCode and keep exploring data analysis tools like NumPy and Pandas to build a versatile technical toolkit.
          </p>

          {/* Quick Stats/Facts Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-950/50 backdrop-blur-sm border border-slate-200/80 dark:border-gray-800/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
              <div className="bg-amber-50 dark:bg-yellow-950/30 p-3 rounded-xl">
                <FaGraduationCap className="text-amber-500 dark:text-yellow-400 text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm">Education</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">B.Tech CSE, USICT GGSIPU</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-950/50 backdrop-blur-sm border border-slate-200/80 dark:border-gray-800/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
              <div className="bg-amber-50 dark:bg-yellow-950/30 p-3 rounded-xl">
                <FaCode className="text-amber-500 dark:text-yellow-400 text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm">Core Focus</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Full Stack Dev, DSA, ML</p>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Right Side: DaisyUI Carousel */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 flex flex-col items-center justify-center w-full"
        >
          <div className="p-4 bg-white dark:bg-gray-950/50 backdrop-blur-sm border border-slate-200/80 dark:border-gray-800/80 rounded-3xl shadow-xl w-full max-w-md">
            <div className="carousel rounded-2xl w-full aspect-video overflow-x-auto shadow-inner bg-slate-50 dark:bg-gray-900">
              {images.map((img, idx) => (
                <div key={idx} className="carousel-item w-full h-full relative group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-white text-sm font-semibold tracking-wide">
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll navigation helper */}
            <p className="text-center text-xs text-slate-400 dark:text-neutral-500 mt-3 font-semibold tracking-wide">
              ← Swipe or scroll to view workspace →
            </p>
          </div>
        </Motion.div>

      </div>
    </section>
  );
};

export default About;