import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCards = ({ projectsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out"
        >
          <div className="relative group w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:blur-md transition-all duration-200 ease-in"
            />
            <a
              href={project.source_code_link}
              target="_blank"
              className="absolute top-[50%] left-[40%] text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href={project.demo_link}
              target="_blank"
              className="absolute top-[50%] left-[55%] text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out hover:scale-110"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-3 py-1 rounded-full border border-gray-600 text-sm font-medium ${tag.color}`}
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
