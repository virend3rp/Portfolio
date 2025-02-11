"use client";
import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import FloatingProfile from "@/components/FloatingImage";
import SparkleCursor from "@/components/SparkleCursor";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-8">
      <SparkleCursor />  {/* Add Sparkly Cursor */}
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Floating Image */}
        <div className="relative w-48 h-48 md:w-80 md:h-80 transform animate-floating">
          <FloatingProfile />
        </div>

        {/* About Text */}
        <div className="mt-8 md:mt-0 md:ml-10 max-w-lg">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hey! II&apos;m a a passionate <strong>developer</strong> with a love for building interactive and efficient applications.
            From full-stack web development to crafting scalable solutions, I enjoy turning ideas into reality.
            With experience in <strong>Next.js, MERN stack, SQL, and cloud technologies</strong>, I thrive on solving complex
            problems and continuously learning new skills.When I am not learning you can find me creating content on my youtube channel linked below
          </p>
          
          {/* Buttons Section */}
          <div className="flex gap-4 mt-6">
            {/* Back to Home Button */}
            <Link href="/" passHref>
              <button className="px-6 py-3 hover:scale-105 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200">
                Back to Home
              </button>
            </Link>

            {/* YouTube Icon Button */}
            <Link href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
              <button className="p-3 bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-150 hover:shadow-xl transition-all duration-200 flex items-center justify-center">
                <FaYoutube className="text-white text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Floating Animation
<style jsx>{`
  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-floating {
    animation: floating 3s ease-in-out infinite;
  }
`}</style>
