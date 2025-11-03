import { COLORES } from "../lib/types";

type Props = {
  nombre?: string;
  visible?: boolean;
  direction?: "row" | "col";
  children?: React.ReactNode;
  theme?: COLORES;
  borde?: boolean;
  w?: string;
};

const Grupo = ({ direction = "col", nombre = "Section", visible = true, children, theme, borde, w }: Props) => {
  const conBorde = borde ? "border-2" : "border-none";
  const width = w ? w : "w-full";

  return (
    <div className={`rounded-3xl bg-(--color-cardBg) border-black p-4 w-1/6 theme-${theme} ${conBorde} ${width}`}>
      {visible && <h1>{nombre}</h1>}
      <div className={`gap-1.5 flex flex-${direction}`}>{children}</div>
    </div>
  );
};

export default Grupo;
