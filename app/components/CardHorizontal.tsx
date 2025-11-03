// type props = {
//   url: string;
// };

// const CardHorizontal = ({ url }: props) => {
//   return (
//     <div className="flex relative">
//       <div className="c text-black rounded-xl flex items-end justify-end w-56 border border-[#c5f276c1] p-2 absolute h-13 z-10 top-9">
//         <button className="bg-black text-white text-xs px-2 py-1 rounded min-w-16">editar</button>
//       </div>
//       <div className="bg-white text-black rounded-xl flex items-center w-56 h-13 border border-black/5 p-2 pl-14 relative z-20">
//         <div className="w-13 h-13 rounded-xl bg-blue-500 absolute left-0"></div>
//         <p className="text-xs">{url}</p>
//       </div>
//     </div>
//   );
// };

// export default CardHorizontal;

//  <div className="flex relative group cursor-pointer mb-1">
//         <div className="bg-[#c83131] text-black rounded-xl flex items-end justify-end w-56 border border-black p-1 absolute h-13 z-10 top-0 transition-all duration-300 group-hover:top-5">
//           <button className="bg-black text-white text-xs w-3 h-3 rounded">-</button>
//         </div>
//         <div className="bg-[#fe7b9e] text-black rounded-xl flex items-center w-56 h-13 border border-black p-2 pl-14 relative z-20">
//           <div className="w-13 h-13 rounded-xl bg-[#ec4e70] absolute left-[-0.08rem] border flex items-center justify-center text-4xl text-[#c8315a] border-black ">{url.slice(0, 1).toUpperCase()}</div>
//           <p className="text-xs">{url}</p>
//           <div className="w-4 absolute right-0">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-0 h-0 group-hover:w-4 group-hover:h-4  transition-all duration-500" viewBox="0 0 24 24">
//               <path className="fill-slate-200 group-hover:fill-[#c8315a]" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z"></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//       <div className="flex relative group cursor-pointer mb-4">
//         <div className="bg-[#c8315a] text-black rounded-xl flex items-end justify-end w-56 border border-black p-1 absolute h-13 z-10 top-0 transition-all duration-300 group-hover:top-5">
//           <button className="bg-black text-white text-xs w-3 h-3 rounded">-</button>
//         </div>
//         <div className="bg-[#fe7b9e] text-black rounded-xl flex items-center w-56 h-13 border border-black p-2 pl-14 relative z-20">
//           <div className="w-13 h-13 rounded-xl bg-[#ec4e70] absolute left-[-0.08rem] border flex items-center justify-center text-4xl text-[#c8315a] border-black ">{url.slice(0, 1).toUpperCase()}</div>
//           <p className="text-xs">{url}</p>
//           <div className="w-4 absolute right-0">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-0 h-0 group-hover:w-4 group-hover:h-4  transition-all duration-500" viewBox="0 0 24 24">
//               <path className="fill-slate-200 group-hover:fill-[#c8315a]" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z"></path>
//             </svg>
//           </div>
//         </div>
//       </div>

type Props = {
  url: string;
  theme?: "green" | "blue" | "yellow" | "pink";
};

const CardHorizontal = ({ url, theme = "pink" }: Props) => {
  return (
    <div className={`flex relative group cursor-pointer theme-${theme}`}>
      <div className="bg-[var(--color-dark)] text-black rounded-xl flex items-end justify-end w-56 border border-black p-1 absolute h-13 z-10 top-0 transition-all duration-300 group-hover:top-5">
        <button className="bg-black text-white text-xs w-3 h-3 rounded">-</button>
      </div>

      <div className="bg-[var(--color-main)] text-black rounded-xl flex items-center w-56 h-13 border border-black p-2 pl-14 relative z-20">
        <div className="w-13 h-13 rounded-xl bg-[var(--color-light)] absolute left-[-0.08rem] border flex items-center justify-center text-4xl text-[var(--color-dark)] border-black">{url.slice(0, 1).toUpperCase()}</div>

        <p className="text-xs">{url}</p>

        <div className="w-4 absolute right-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" viewBox="0 0 24 24">
            <path className="fill-slate-200 group-hover:fill-[var(--color-dark)]" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
