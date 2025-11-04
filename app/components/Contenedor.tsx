"use client";
import { useEffect, useRef, useState } from "react";
import { COLORES } from "../lib/types";

type Props = {
  children?: React.ReactNode;
  theme?: COLORES;
  imagen?: string;
  imagenOpacidad?: number;
};

const Contenedor = ({ children, theme, imagen, imagenOpacidad = 0.3 }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const THEMES = ["white", "green", "lime", "sky", "purple", "orange", "yellow", "mint", "indigo", "pink"] as const;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuVisible(true);
  };

  const handleThemeChange = (color: string) => {
    setCurrentTheme(color as COLORES);
    setMenuVisible(false);
  };
  return (
    <div className={`relative border-2 h-full container mx-auto rounded-[40px] bg-(--color-cardBg) theme-${currentTheme}`} onContextMenu={handleRightClick}>
      {/* Fondo con opacidad controlada */}
      {imagen && (
        <div
          className="absolute inset-0 rounded-[40px] bg-cover bg-center bg-no-repeat z-40"
          style={{
            backgroundImage: `url(${imagen})`,
            opacity: imagenOpacidad,
            zIndex: 0,
          }}
        />
      )}

      {/* Contenido */}
      <div className="flex flex-row items-start justify-start gap-4 p-4 w-full flex-wrap z-50 relative">{children}</div>
      {menuVisible && (
        <div ref={menuRef} className="absolute -bottom-0.5 w-full flex justify-center items-center z-50 h-14 gap-1">
          {THEMES.map((color) => (
            <button key={color} onClick={() => handleThemeChange(color)} className={`hover:w-12 hover:h-12 w-10 h-10 rounded border-2 border-(--color-cardBorder) cursor-pointer theme-${color}`} style={{ backgroundColor: "var(--color-cardBg)" }} title={color} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contenedor;
