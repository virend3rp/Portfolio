"use client";
import React from "react";
import Link from "next/link";
import FloatingProfile from "@/components/FloatingImage";
import SparkleCursor from "@/components/SparkleCursor";

const projects = [
  {
    title: "Chatter Web App",
    description: "A real-time chat app using Socket.io.",
    tech: ["MERN Stack", "Socket.io", "Tailwind"],
    link: "",
  },
  {
    title: "B.I.R.D Labs Website Development",
    description: "Developing Portfolio and Laboratry Website for Bio-Inspired Robotic Design Labs.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-8">
      <SparkleCursor/>
      <FloatingProfile />

      <h1 className="text-4xl font-bold mb-10">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="mt-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-sm text-white px-2 py-1 rounded-full mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-6">
        <Link href="/" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Back to Home
          </button>
        </Link>
        <a
          href="https://github.com/virend3rp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            View GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
