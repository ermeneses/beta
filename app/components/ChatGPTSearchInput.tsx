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
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 p-2 border-2 border-black rounded-xl bg-white shadow-[2px_2px_0_#000]">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Preguntar a ChatGPT..." className="w-72 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm" />
      <button type="submit" className="px-4 py-2 text-sm font-semibold bg-black text-white rounded-lg hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#000] transition-all">
        Enviar
      </button>
    </form>
  );
}
