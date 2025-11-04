"use client";
import { useEffect, useRef, useState } from "react";
import { COLORES } from "../lib/types";

type Props = {
  url: string;
  desc?: string;
  theme?: COLORES;
  favicon?: string;
};

export default function Enlace({ url, theme, desc, favicon }: Props) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dominio = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  })();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const faviconUrl = favicon || `https://www.google.com/s2/favicons?domain=${dominio}&sz=64`;
  const THEMES = ["white", "green", "lime", "sky", "purple", "orange", "yellow", "mint", "indigo", "pink"] as const;

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuVisible(true);
  };

  const handleThemeChange = (color: string) => {
    setCurrentTheme(color as COLORES);
    setMenuVisible(false);
  };

  return (
    <div className="relative" onContextMenu={handleRightClick}>
      <a href={url} target="_blank" rel="noopener noreferrer" className={`group relative flex items-center hover:justify-between border-2 border-(--color-cardBorder) bg-(--color-cardBg) text-(--color-cardText) rounded-lg px-1.5 gap-1.5 min-h-10 shadow-card transition-all theme-${currentTheme}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={faviconUrl} alt={`${dominio} favicon`} className="w-3 h-3 rounded-full overflow-hidden flex-none" />
        <div className="w-full truncate">
          <p className="text-sm font-semibold leading-none truncate">{desc ? desc : dominio}</p>
          <p className="hidden group-hover:flex text-[0.45rem] text-(--color-cardTexts) leading-none  truncate">{url}y</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0.5 animate-pulse top-0.5 w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" viewBox="0 0 24 24">
          <path className="fill-(--color-cardShadow) group-hover:fill-(--color-cardBorder)" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z" />
        </svg>
      </a>
      {/* Menú contextual */}
      {menuVisible && (
        <div ref={menuRef} className="absolute -bottom-2.5 w-full flex justify-center items-center z-50 h-6">
          {THEMES.map((color) => (
            <button key={color} onClick={() => handleThemeChange(color)} className={`hover:w-6 hover:h-6 w-3 h-3 rounded border-2 border-(--color-cardBorder) cursor-pointer theme-${color}`} style={{ backgroundColor: "var(--color-cardBg)" }} title={color} />
          ))}
        </div>
      )}
    </div>
  );
}
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { COLORES } from "../lib/types";

// type Props = {
//   url: string;
//   desc?: string;
//   theme?: COLORES;
//   favicon?: string;
// };

// const THEMES = ["white", "green", "lime", "sky", "purple", "orange", "yellow", "mint", "indigo", "pink"] as const;

// export default function Enlace({ url, desc, favicon, theme = "white" }: Props) {
//   const [currentTheme, setCurrentTheme] = useState(theme);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
//   const menuRef = useRef<HTMLDivElement | null>(null);

//   // Cerrar el menú si se hace clic fuera
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//         setMenuVisible(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const dominio = (() => {
//     try {
//       return new URL(url).hostname.replace(/^www\./, "");
//     } catch {
//       return url;
//     }
//   })();

//   const faviconUrl = favicon || `https://www.google.com/s2/favicons?domain=${dominio}&sz=64`;

//   const handleRightClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setMenuPos({ x: e.clientX, y: e.clientY });
//     setMenuVisible(true);
//   };

//   const handleThemeChange = (color: string) => {
//     setCurrentTheme(color as COLORES);
//     setMenuVisible(false);
//   };

//   return (
//     <div className="relative" onContextMenu={handleRightClick}>
//       {/* Tarjeta principal */}
//       <a href={url} target="_blank" rel="noopener noreferrer" className={`group relative flex items-center hover:justify-between border-2 border-(--color-cardBorder) bg-(--color-cardBg) text-(--color-cardText) rounded-lg px-1.5 gap-1.5 min-h-10 shadow-card transition-all theme-${currentTheme}`}>
//         <img src={faviconUrl} alt={`${dominio} favicon`} className="w-3 h-3 rounded-full flex-none" />
//         <div className="w-full truncate">
//           <p className="text-sm font-semibold leading-none truncate">{desc ?? dominio}</p>
//           <p className="hidden group-hover:flex text-[0.45rem] text-(--color-cardTexts) leading-none truncate">{url}</p>
//         </div>
//       </a>

//       {/* Menú contextual */}
//       {menuVisible && (
//         <div ref={menuRef} className="fixed z-50 grid grid-cols-5 gap-1 p-1 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_#000]" style={{ top: menuPos.y, left: menuPos.x }}>
//           {THEMES.map((color) => (
//             <button key={color} onClick={() => handleThemeChange(color)} className={`w-6 h-6 rounded-full border-2 border-black cursor-pointer theme-${color}`} style={{ backgroundColor: "var(--color-cardBg)" }} title={color} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
