import React from "react";
import {
  FaRocket,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaEye,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import resumePdf from "../assets/rohit_resume.pdf";

const socials = [
  {
    href: "",
    logo: <FaEnvelope />,
    label: "Email",
    color: "from-pink-500 to-red-500",
  },
  {
    href: "https://www.linkedin.com/in/imrohittsingh/",
    logo: <FaLinkedin />,
    label: "LinkedIn",
    color: "from-blue-500 to-cyan-500",
  },
  {
    href: "https://github.com/imrohittsingh-rs",
    logo: <FaGithub />,
    label: "GitHub",
    color: "from-gray-700 to-black",
  },
  {
    href: "https://x.com/imrohittsingh",
    logo: <FaXTwitter />,
    label: "X.com",
    color: "from-gray-600 to-gray-900",
  },
  {
    href: { resumePdf },
    logo: <FaEye />,
    label: "Resume",
    color: "from-green-400 to-emerald-600",
  },
];

const Contact = () => {
  return (
    <section
      className="font-poppins flex flex-col justify-center py-20 px-6 md:px-14"
      id="contact"
    >
      <div className="mx-auto flex flex-col justify-center items-center max-w-xl p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-amber-200">
            Let's Connect
          </h2>
          <span className="text-4xl animate-bounce text-yellow-400 mx-1">
            <FaRocket />
          </span>
        </div>
        <p className="text-lg text-neutral-500 my-4">
          I'm always open to collaborations, opportunities, or just a chat!
        </p>
        <div className="flex flex-col space-y-4 w-full">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              className={`flex gap-3 items-center justify-center text-white py-3 px-4 font-medium shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-lg bg-linear-to-r ${social.color} hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out`}
            >
              <span className="text-lg">{social.logo}</span>
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
