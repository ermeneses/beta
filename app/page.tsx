import Contenedor from "./components/Contenedor";
import Enlace from "./components/Enlace";
import Grupo from "./components/Grupo";

export default function Home() {
  return (
    <div className="flex h-lvh bg-black font-sans p-4">
      <Contenedor imagen="https://wallpapermural.com/cdn/shop/files/KanagawaPano_Artwork.png?v=1750700592">
        {/* <div className="flex flex-row items-start justify-start gap-4 p-4 bg-white  relative border-2 h-full w-8/12 mx-auto rounded-[40px]"> */}
        <Grupo visible={false} borde nombre="Prueba" w="w-56" theme="sky">
          <Enlace url="https://phg.rosmiman.com/rosmiman" desc="Rosmiman Producción" theme="green" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://test01.rosmiman.com/Rosmiman47/" desc="Rosmiman Test" theme="indigo" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://phg.rosmiman.com/operaciones" desc="Rosmiman Operaciones" theme="lime" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://support.rosmiman.com/" desc="Rosmiman Soporte" theme="mint" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://chatgpt.com/" desc="ChatGpt" theme="white" />
          <Enlace url="https://www.youtube.com/" desc="YouTube" theme="purple" />
          <Enlace url="https://dribbble.com/" desc="Dribbble" theme="pink" />
          <Enlace url="https://vercel.com/" desc="Vercel" theme="white" />
          <Enlace url="https://app.travelperk.com/home/flights" desc="TravelPerk" favicon="https://app.travelperk.com/static/favicon.ico" theme="lime" />
        </Grupo>

        {/* </div> */}
      </Contenedor>
    </div>
  );
}
