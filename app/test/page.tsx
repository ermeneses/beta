"use client";
import { useState, useRef } from "react";

export default function ResizableBox() {
  const gridSize = 90; // tamaño de cada celda (12x12 => 480x480px)
  const [size, setSize] = useState({ w: 4, h: 4 });
  const [pos, setPos] = useState({ x: 2, y: 2 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Manejo general de redimensionado
  const startResize = (e: React.MouseEvent, corner: "nw" | "ne" | "sw" | "se") => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = size.w;
    const startH = size.h;
    const startPos = { ...pos };

    const move = (ev: MouseEvent) => {
      const dx = (ev.clientX - startX) / gridSize;
      const dy = (ev.clientY - startY) / gridSize;

      let newW = startW;
      let newH = startH;
      let newX = startPos.x;
      let newY = startPos.y;

      if (corner.includes("e")) newW = Math.min(12 - newX, Math.max(1, startW + dx));
      if (corner.includes("s")) newH = Math.min(12 - newY, Math.max(1, startH + dy));
      if (corner.includes("w")) {
        newW = Math.min(12 - newX, Math.max(1, startW - dx));
        newX = Math.max(0, startPos.x + dx);
      }
      if (corner.includes("n")) {
        newH = Math.min(12 - newY, Math.max(1, startH - dy));
        newY = Math.max(0, startPos.y + dy);
      }

      setSize({ w: Math.round(newW), h: Math.round(newH) });
      setPos({ x: Math.round(newX), y: Math.round(newY) });
    };

    const stop = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
  };

  return (
    <div
      ref={containerRef}
      className="relative border border-black bg-white w-full h-screen rounded-xl overflow-hidden"
      style={{
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundImage: "linear-gradient(to right, #0002 1px, transparent 1px), linear-gradient(to bottom, #0002 1px, transparent 1px)",
      }}
    >
      <div
        className="absolute bg-lime-300 border-2 border-black rounded-lg  transition-colors"
        style={{
          width: `${size.w * gridSize}px`,
          height: `${size.h * gridSize}px`,
          left: `${pos.x * gridSize}px`,
          top: `${pos.y * gridSize}px`,
        }}
      >
        {/* Etiqueta central */}
        <div className="flex items-center justify-center w-full h-full font-semibold text-sm select-none">
          {size.w} × {size.h}
        </div>

        {/* Esquinas */}
        {(["nw", "ne", "sw", "se"] as const).map((corner) => (
          <div
            key={corner}
            onMouseDown={(e) => startResize(e, corner)}
            className={`absolute w-3 h-3 bg-black rounded-full cursor-${corner}-resize`}
            style={{
              [corner.includes("n") ? "top" : "bottom"]: "-6px",
              [corner.includes("w") ? "left" : "right"]: "-6px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
