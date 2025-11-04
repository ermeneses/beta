import { COLORES } from "../lib/types";

type Props = {
  children?: React.ReactNode;
  theme?: COLORES;
  imagen?: string;
  imagenOpacidad?: number;
};

const Contenedor = ({ children, theme, imagen, imagenOpacidad = 0.3 }: Props) => {
  return (
    <div className={`relative border-2 h-full container mx-auto rounded-[40px] bg-(--color-cardBg) theme-${theme}`}>
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
    </div>
  );
};

export default Contenedor;
