"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  const menuItems = [
    { name: "About Virender", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <div id="menu" data-active-index={activeIndex}>
      <div id="menu-items">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-item"
            onMouseOver={() => setActiveIndex(index)}
            onClick={() => router.push(item.path)} // Navigate on click
          >
            {item.name}
          </div>
        ))}
      </div>
      <div id="menu-background-pattern"></div>
      <div id="menu-background-image"></div>
    </div>
  );
}
