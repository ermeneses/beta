// import { COLORES } from "../lib/types";

// type Props = {
//   url: string;
//   theme?: COLORES;
// };

// const Boton = ({ url, theme }: Props) => {
//   return (
//     <button className={`cursor-pointer group relative bg-(--color-buttonBg) rounded-lg border-2 border-black px-3 py-1.5 text-sm text-left font-semibold text-black transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgb(0,0,0)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10 theme-${theme}`}>
//       {url}
//       <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0.5 animate-pulse top-0.5 w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" viewBox="0 0 24 24">
//         <path className="fill-black group-hover:fill-(--color-buttonShadow)" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z"></path>
//       </svg>
//     </button>
//   );
// };

// export default Boton;

// import { COLORES } from "../lib/types";

// type Props = {
//   url: string;
//   theme?: COLORES;
// };

// const Boton = ({ url, theme }: Props) => {
//   // Obtener solo el dominio (sin "www.")
//   const dominio = (() => {
//     try {
//       return new URL(url).hostname.replace(/^www\./, "");
//     } catch {
//       return url;
//     }
//   })();

//   return (
//     <a href={url} target="_blank" rel="noopener noreferrer" className={`cursor-pointer group relative bg-(--color-buttonBg) rounded-lg border-2 border-black px-3 py-1.5 text-sm text-left font-semibold text-black transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgb(0,0,0)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10 theme-${theme}`}>
//       {dominio}
//       <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0.5 animate-pulse top-0.5 w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" viewBox="0 0 24 24">
//         <path className="fill-black group-hover:fill-(--color-buttonShadow)" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z" />
//       </svg>
//     </a>
//   );
// };

// export default Boton;
import { COLORES } from "../lib/types";

type Props = {
  url: string;
  desc?: string;
  theme?: COLORES;
  favicon?: string;
};

const Boton = ({ url, theme, desc, favicon }: Props) => {
  // Extraer solo el dominio (sin www.)
  const dominio = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  })();

  const faviconUrl = favicon || `https://www.google.com/s2/favicons?domain=${dominio}&sz=64`;

  // Construir la URL del favicon

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-0.5 cursor-pointer group relative bg-(--color-cardBg) text-(--color-cardText) rounded-lg border-2 border-(--color-cardBorder) px-3  py-1.5 text-sm font-semibold transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgb(0,0,0)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10 theme-${theme}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={faviconUrl} alt={`${dominio} favicon`} className="w-2.5 h-2.5 rounded-full transition-all duration-300 overflow-hidden flex-none" />
      <span className="transition-all duration-700 truncate">{desc ? desc : dominio}</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0.5 animate-pulse top-0.5 w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" viewBox="0 0 24 24">
        <path className="fill-black group-hover:fill-(--color-buttonShadow)" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z" />
      </svg>
    </a>
  );
};

export default Boton;
