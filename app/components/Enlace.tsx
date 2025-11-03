type props = {
  url: string;
};

const css_favicon = "w-7.5 h-7.5 bg-black rounded-[0.32rem] flex items-center justify-center flex-none z-20 border border-white/10";
const css_contenedorPrincipal = "flex pr-1 h-6.5 hover:text-blue-500s items-center gap-x-1 rounded-md hover:bg-black/50 hover:border-y hover:border-r border-white/10 cursor-pointer flex-none text-xs pl-8.5 pr-1.5 absolute z-10";

export default function Enlace({ url }: props) {
  return (
    <div className="flex relative items-center flex-none">
      <div className={css_favicon}>{url.slice(0, 1).toUpperCase()}</div>
      <p className={css_contenedorPrincipal}>{url}</p>
    </div>
  );
}
