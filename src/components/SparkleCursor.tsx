"use client";
import React, { useEffect, useState } from "react";

const SparkleCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Generate new sparks
      const newSparks = Array.from({ length: 3 }).map((_, index) => ({
        id: Date.now() + index,
        x: e.clientX,
        y: e.clientY,
      }));

      setSparks((prev) => [...prev, ...newSparks]);

      // Remove sparks after a short time
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => !newSparks.includes(spark)));
      }, 300);
    };

    document.addEventListener("mousemove", updateMousePosition);
    return () => document.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      {/* Glowing Cursor Tip */}
      <div
        className="cursor-glow"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Spark Particles */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default SparkleCursor;
