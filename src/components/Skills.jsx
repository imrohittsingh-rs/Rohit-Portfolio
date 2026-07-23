import React from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiExpress,
  SiVercel,
  SiCloudinary,
  SiRender,
  SiPostman,
  SiFirebase,
  SiJsonwebtokens
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
      { name: "ReactJS", icon: <FaReact /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "JWT", icon: <SiJsonwebtokens/> }
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Numpy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Github", icon: <FaGithub /> },
      { name: "VScode", icon: <VscVscode /> },
      { name: "Vercel ", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="font-poppins flex flex-col justify-center py-20 px-6 md:px-14" id="skills">
      <h2 className="text-slate-900 dark:text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-16 tracking-tight">
        🚀 My{" "}
        <span className="text-amber-500 dark:text-yellow-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.15)] dark:drop-shadow-[0_0_15px_rgba(250,204,21,0.15)]">
          Tech Stack
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
        {techStack.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-950/50 backdrop-blur-sm border border-slate-200/80 dark:border-gray-800/80 rounded-2xl shadow-xl hover:border-amber-500/50 dark:hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] dark:hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:-translate-y-1 transition-all duration-300 ease-in-out group"
          >
            <h3 className="font-bold text-xl text-slate-800 dark:text-white tracking-wide border-b border-slate-100 dark:border-gray-800 pb-3 mb-4 group-hover:text-amber-500 dark:group-hover:text-yellow-400 transition-colors duration-300 text-center">
              {cat.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {cat.items.map((ele, itemIdx) => (
                <div
                  key={itemIdx}
                  className="flex flex-col items-center justify-center text-center gap-2 p-3 sm:p-4 bg-slate-50 dark:bg-gray-900 border border-slate-100 dark:border-gray-800 rounded-xl text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-200 dark:hover:border-gray-700 transition-all duration-300 cursor-default group"
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {ele.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    {ele.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto p-4">
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-yellow-400">Frontend</h3>
          <p className="text-gray-400 text-sm mt-1">
            React, Tailwind CSS
          </p>
        </div>

        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-yellow-400">Backend</h3>
          <p className="text-gray-400 text-sm mt-1">
            Node.js, Express, MongoDB
          </p>
        </div>

        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-yellow-400">Languages</h3>
          <p className="text-gray-400 text-sm mt-1">
            C, C++, Java, Pyhton
          </p>
        </div>

        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-yellow-400">Tools</h3>
          <p className="text-gray-400 text-sm mt-1">Git, GitHub, VS Code</p>
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
