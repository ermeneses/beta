"use client";
import { useState, useEffect } from "react";

type Props = {
  url: string;
  id?: string; // opcional, por si tienes varios stickers
  size?: number; // tamaño base
};

export default function Sticker({ url, id = "sticker", size = 100 }: Props) {
  const key = `pos_${id}`;
  const [pos, setPos] = useState({ x: 150, y: 150 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // cargar posición guardada
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (!saved) return;

    // Usa un efecto asíncrono para evitar el warning
    Promise.resolve().then(() => {
      setPos(JSON.parse(saved));
    });
  }, [key]);

  // guardar posición cuando cambie
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(pos));
  }, [pos, key]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPos({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <img
      src={url}
      alt="sticker"
      draggable={false}
      className="fixed cursor-grab active:cursor-grabbing select-none z-50 transition-transform duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        width: size,
        height: "auto",
        transform: "translate(-50%, -50%)",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
}
