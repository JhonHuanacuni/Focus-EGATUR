import React from "react";
import fondo_1 from "../assets/img/fondo_1.png";
import "../index.css"; // Asegúrate de importar el archivo CSS

export function PonenteCard1(data) {
  return (
    <div
      className="h-full w-full aspect-video max-w-[550px] flex relative z-0"
      style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 1)" }}
    >
      <div
        className="bg-red-500 h-full w-1/3 z-[1]"
        style={{ boxShadow: "0 0 10px red" }}
      />
      <div className="bg-black h-full w-2/3 z-0 p-10">
        <div className="flex flex-col w-full h-full justify-center">
          <h4 className="text-red-400 text-[18px] font-bold tracking-tight leading-none">
            {data.nombre}
          </h4>
          <h5 className="text-orange-300 text-[16px] font-bold tracking-tight leading-none">
            {data.puesto}
          </h5>
          <p className="text-[10px] font-normal text-gray-400 leading-none">
            {data.experiencia}
          </p>
        </div>
      </div>
      <div
        className={`absolute ${
          data.invertir ? "transform scale-x-[-1]" : ""
        }  ${data.recorrer} inset-0 right-auto z-[1] ${data.animacion} `}
      >
        <img
          className="object-cover h-full"
          src={data.ponente}
          style={{ filter: "drop-shadow(0 0 15px red)" }}
        />
      </div>
    </div>
  );
}
