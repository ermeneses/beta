"use client";
import { useState } from "react";

export default function ChatGPTSearchInput() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const chatgptUrl = `https://chat.openai.com/?q=${encodeURIComponent(query)}`;
      window.open(chatgptUrl, "_blank");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 p-2  pt-2.5 border-2 rounded-xl relative bg-white shadow-card group transition-all duration-300">
      <div className="text-[0.6rem] bg-(--color-cardBorder) text-white h-4 px-2 rounded-tl-lg absolute rounded-br-sm top-0 left-0">ChatGPT</div>

      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Preguntar a ChatGPT..." className="w-64 px-3 py-2 border border-none rounded-lg focus:outline-none  focus:ring-0 text-sm" />
      <button
        type="submit"
        className=" opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
             transition-all duration-500 ease-in-out 
             px-4 py-2 text-sm font-semibold border-2 rounded-lg 
             hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-card"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-icon lucide-bot w-6 h-6">
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      </button>
    </form>
  );
}
