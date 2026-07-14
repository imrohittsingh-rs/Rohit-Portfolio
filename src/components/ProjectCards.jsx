import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCards = ({ projectsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/50 dark:border-transparent overflow-hidden hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out"
        >
          <div className="relative group w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover object-top group-hover:blur-md transition-all duration-200 ease-in"
            />
            <a
              href={project.source_code_link}
              target="_blank"
              className="absolute top-[40%] left-[38%] text-2xl text-slate-800 dark:text-white bg-white/90 dark:bg-gray-900/90 p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out hover:scale-110 hover:text-yellow-600 dark:hover:text-yellow-300 hover:bg-white dark:hover:bg-gray-800"
            >
              <FaGithub />
            </a>
            <a
              href={project.demo_link}
              target="_blank"
              className="absolute top-[40%] left-[54%] text-2xl text-slate-800 dark:text-white bg-white/90 dark:bg-gray-900/90 p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out hover:scale-110 hover:text-yellow-600 dark:hover:text-yellow-300 hover:bg-white dark:hover:bg-gray-800"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
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
      ))}
    </div>
  );
};

export default ProjectCards;
