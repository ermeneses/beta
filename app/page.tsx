import Boton from "./components/Boton";
import Grupo from "./components/Grupo";

export default function Home() {
  return (
    <div className="flex h-lvh bg-white font-sans p-4">
      <div className="flex flex-col items-start justify-start gap-4 p-4 bg-white  relative mt-7 border-2 h-full w-full rounded-[40px]">
        <div className="w-full flex items-end justify-center gap-0.5 absolute -top-8">
          <div className="border-x-2 border-t-2 w-36 truncate rounded-t-2xl px-2 text-sm h-8 flex items-center justify-center">Trabajo</div>
          <div className="border-x-2 border-t-2 w-36 truncate rounded-t-2xl px-2 text-sm h-8 flex items-center justify-center">Rosmiman</div>
          <div className="border-x-2 border-t-2 w-36 truncate rounded-t-2xl px-2 text-sm h-8 flex items-center justify-center">Otros</div>
        </div>
        <Grupo visible={false}>
          <h1 className="font-bold text-4xl">Eduardo Meneses</h1>
        </Grupo>
        <Grupo direction="col" visible={false} borde nombre="Prueba" w="w-56">
          <Boton url="https://phg.rosmiman.com/rosmiman" desc="Rosmiman Producción" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" theme="blue" />
          <Boton url="https://test01.rosmiman.com/Rosmiman47/" desc="Rosmiman Test" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" theme="lavender" />
          <Boton url="https://phg.rosmiman.com/operaciones" desc="Rosmiman Operaciones" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" theme="teal" />
          <Boton url="https://support.rosmiman.com/" desc="Rosmiman Soporte" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" theme="mint" />
          <Boton url="https://chatgpt.com/" desc="ChatGpt" theme="gray" />
          <Boton url="https://www.youtube.com/" desc="YouTube" theme="red" />
          <Boton url="https://dribbble.com/" desc="Dribbble" theme="pink" />
          <Boton url="https://vercel.com/" desc="Vercel" />
        </Grupo>
      </div>
    </div>
  );
}
