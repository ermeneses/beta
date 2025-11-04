import ChatGPTSearchInput from "./components/ChatGPTSearchInput";
import Contenedor from "./components/Contenedor";
import Enlace from "./components/Enlace";
import GoogleSearchInput from "./components/GoogleSearchInput";
import Grupo from "./components/Grupo";

export default function Home() {
  return (
    <div className="flex h-lvh font-sans p-4">
      <Contenedor theme="yellow">
        {/* <div className="flex flex-row items-start justify-start gap-4 p-4 bg-white  relative border-2 h-full w-8/12 mx-auto rounded-[40px]"> */}
        <Grupo visible={false} borde nombre="Prueba" w="w-56" theme="sky">
          <Enlace url="https://phg.rosmiman.com/rosmiman" desc="Rosmiman Producción" theme="indigo" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://test01.rosmiman.com/Rosmiman47/" desc="Rosmiman Test" theme="indigo" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://phg.rosmiman.com/operaciones" desc="Rosmiman Operaciones" theme="orange" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://support.rosmiman.com/" desc="Rosmiman Soporte" theme="mint" favicon="https://phg.rosmiman.com/rosmiman/favicon.png" />
          <Enlace url="https://chatgpt.com/" desc="ChatGpt" theme="white" />
          <Enlace url="https://www.youtube.com/" desc="YouTube" theme="orange" />
          <Enlace url="https://dribbble.com/" desc="Dribbble" theme="pink" />
          <Enlace url="https://vercel.com/" desc="Vercel" theme="white" />
          <Enlace url="https://app.travelperk.com/home/flights" desc="TravelPerk" favicon="https://app.travelperk.com/static/favicon.ico" theme="lime" />
          <Enlace url="https://web.whatsapp.com/" desc="Whatsapp" favicon="https://favicon.im/whatsapp.com" theme="lime" />
        </Grupo>
        <Grupo visible={false} borde nombre="Prueba" w="w-auto" theme="purple">
          <GoogleSearchInput />
          <ChatGPTSearchInput />
        </Grupo>
        {/* <div
          className="relative w-[200px] h-[200px] rounded-[10px] shadow-[16px_16px_20px_#0000008c] overflow-hidden
before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
before:bg-[conic-gradient(transparent,#00a6ff23,#00a6ff)] before:animate-spin "
        >
          <div className="absolute flex justify-center items-center top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-[10px] bg-black">
            <h1 className="text-white">sdf</h1>
          </div>
        </div> */}

        {/* </div> */}
      </Contenedor>
    </div>
  );
}
