import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCards = ({ projectsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="relative group w-full"
        >
          {/* DaisyUI hover-3d Wrapper */}
          <div className="hover-3d w-full h-full">
            
            {/* Main Card Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/50 dark:border-transparent overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out h-full flex flex-col justify-between">
              <div>
                <div className="relative w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top group-hover:blur-[0.8px] group-hover:scale-108 transition-all duration-200 ease-in"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-black/35 to-transparent pointer-events-none" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400">{project.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800/40 text-sm font-medium transition-colors duration-300 ${tag.color}`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 8 empty divs for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            {/* Floating Actions overlay (sits on top of the 3D hover zones to remain clickable and tilts in sync) */}
            <div className="tilt-sibling absolute inset-0 h-48 pointer-events-none">
              <a
                href={project.source_code_link}
                target="_blank"
                className="github-link pointer-events-auto absolute top-[40%] left-[38%] text-2xl text-slate-800 dark:text-white bg-white/90 dark:bg-gray-900/90 p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out hover:scale-110 hover:text-yellow-600 dark:hover:text-yellow-300 hover:bg-white dark:hover:bg-gray-800"
              >
                <FaGithub />
              </a>
              <a
                href={project.demo_link}
                target="_blank"
                className="demo-link pointer-events-auto absolute top-[40%] left-[54%] text-2xl text-slate-800 dark:text-white bg-white/90 dark:bg-gray-900/90 p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out hover:scale-110 hover:text-yellow-600 dark:hover:text-yellow-300 hover:bg-white dark:hover:bg-gray-800"
              >
                <FaArrowUpRightFromSquare />
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
