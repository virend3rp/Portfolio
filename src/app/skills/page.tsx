"use client";
import React from 'react';
import Link from 'next/link';
import SparkleCursor from '@/components/SparkleCursor';

const skills = [
  { name: 'HTML', icon: '🔶' },
  { name: 'CSS', icon: '🔷' },
  { name: 'JavaScript', icon: '💻' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express', icon: '🟦' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '⚙️' },
  { name: 'SQL', icon: '🗃️' },
  { name: 'Next.js', icon: '🖥️' },
];

const SkillCards = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-10 px-5">
      <SparkleCursor/>
      {/* Home Button */}
      <div className="mb-10">
        <Link href="/" passHref>
          <button className="px-8 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200">
            Take me Back Home
          </button>
        </Link>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex justify-center items-center w-full h-72 bg-white text-black rounded-3xl shadow-2xl transition-transform transform hover:scale-110 hover:shadow-3xl hover:translate-x-3 hover:translate-y-3"
            style={{
              animation: `slide-in 1s ease-out ${index * 0.2}s both`,
            }}
          >
            <div className="text-center">
              <div className="text-6xl">{skill.icon}</div>
              <h3 className="mt-4 text-3xl font-semibold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          50% {
            transform: translateX(10%);
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillCards;
