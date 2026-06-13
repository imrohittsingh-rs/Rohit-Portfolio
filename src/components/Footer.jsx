import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const handles = [
  {
    href: "https://leetcode.com/u/imrohittsingh/",
    icon: <SiLeetcode />,
    hover: "hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]",
  },
  {
    href: "https://github.com/imrohittsingh-rs",
    icon: <FaGithub />,
    hover: "hover:text-slate-200 hover:drop-shadow-[0_0_8px_rgba(226,232,240,0.4)]",
  },
  {
    href: "https://www.linkedin.com/in/imrohittsingh/",
    icon: <FaLinkedin />,
    hover: "hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
  },
  {
    href: "https://x.com/imrohittsingh",
    icon: <FaXTwitter />,
    hover: "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center font-poppins items-center bg-black/30 border-t border-white/5 py-8 px-6 mt-12 text-neutral-400">
      <div className="flex justify-between w-full max-w-7xl mx-auto">
        <h2 className="tracking-wide text-white font-bold text-xl">
          Developed with ❤️ by Rohit
        </h2>
        <div className="flex text-xl gap-6">
          {handles.map((social, idx) => (
            <a 
            href={social.href} 
            key={idx} 
            target="_blank"
            className={`${social.hover} transition-all`}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mt-2 flex justify-between items-center text-sm tracking-wider text-neutral-500">
        <div>&copy; {new Date().getFullYear()} Rohit. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
