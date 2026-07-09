import React from "react";
import typeMasterImage from "../assets/typeMaster.png";
import shortlyImage from "../assets/shortly.png";
import blogisphereImage from "../assets/blogisphere.png";
import ProjectCards from "./ProjectCards";

const projectsData = [
  {
    title: "TypeMaster",
    description:
      "A typing speed test application to improve your typing skills and accuracy. It provides real-time feedback and tracks your progress over time. It gives your result in WPM and accuracy percentage along with total correct and incorrect characters.",
    tags: [
      { name: "HTML", color: "text-orange-600 dark:text-orange-400" },
      { name: "CSS", color: "text-blue-600 dark:text-blue-300" },
      { name: "JavaScript", color: "text-yellow-600 dark:text-yellow-300" },
    ],
    image: typeMasterImage,
    source_code_link: "https://github.com/imrohittsingh-rs/TypeMaster",
    demo_link: "https://imrohittsingh-rs.github.io/TypeMaster/",
  },
  {
    title: "SquishUrl",
    description:
      "A URL shortening service that allows users to create short links from long URLs. It provides analytics on link usage and allows users to manage their shortened URLs. Uses jwt for authentication and authorization.",
    tags: [
      { name: "React", color: "text-blue-600 dark:text-blue-300" },
      { name: "Tailwind CSS", color: "text-purple-600 dark:text-purple-300" },
      { name: "ExpressJS", color: "text-emerald-700 dark:text-green-200" },
      { name: "MongoDB", color: "text-green-600 dark:text-green-500" },
      { name: "NodeJS", color: "text-amber-600 dark:text-orange-300" },
    ],
    image: shortlyImage,
    source_code_link: "https://github.com/imrohittsingh-rs/squishurl",
    demo_link: "https://squishurl.vercel.app/",
  },
  {
    title: "BlogiSphere",
    description:
      "A simple blogging platform where users can create, edit, and delete blog posts. It features a clean and modern UI with a focus on user experience.",
    tags: [
      { name: "React", color: "text-blue-600 dark:text-blue-300" },
      { name: "Bootstrap", color: "text-purple-600 dark:text-purple-300" },
      { name: "ExpressJS", color: "text-emerald-700 dark:text-green-200" },
      { name: "MongoDB", color: "text-green-600 dark:text-green-500" },
      { name: "NodeJS", color: "text-amber-600 dark:text-orange-300" },
    ],
    image: blogisphereImage,
    source_code_link: "https://github.com/imrohittsingh-rs/blogisphere",
    demo_link: "https://blogisphere.up.railway.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <h2 className="text-slate-900 dark:text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-8 tracking-tight">
          My Projects
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto text-center mb-12">
          A collection of my projects that reflect real-world problem solving,
          creativity, and technical ability — with source code & live demos to
          explore.
        </p>
        <ProjectCards projectsData={projectsData} />
        <div className="text-center mt-12">
          <a
            href="https://github.com/imrohittsingh-rs"
            target="_blank"
            className="inline-block bg-linear-to-br from-blue-400 to-blue-600 hover:scale-110 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out cursor-pointer tracking-wide "
          >
            View More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
