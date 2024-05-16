import React from 'react';
import fondo_1 from "../assets/img/fondo_1.png";
import '../index.css'; // Asegúrate de importar el archivo CSS

export function PonenteCard1(data) {
  return (
    <div
      className="h-[450px] sm:w-[900px] w-[300px] flex mt-10 relative m-auto z-0"
      style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 1)" }}
    >
      <div
        className="bg-red-500 h-full w-1/3 z-[1]"
        style={{ boxShadow: "0 0 18px red" }}
      />
      <div className="h-full w-2/3 relative z-0">
        <img
          className="h-full"
          src={fondo_1}
          style={{ filter: "brightness(70%)" }}
        />
        <div className="flex flex-col sm:w-[400px] max-h-[450px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h4 className="text-red-400 text-[25px] font-bold tracking-tight leading-none">
            {data.nombre}
          </h4>
          <h5 className="text-orange-300 text-[25px] font-bold tracking-tight leading-none mt-3">
            {data.puesto}
          </h5>
          <p className="mt-3 text-[11px] font-normal text-gray-400">
            {data.experiencia}
          </p>
        </div>
      </div>
      <div className={`absolute ${data.invertir ? 'transform scale-x-[-1]' : ''} bottom-0 ${data.recorrer} z-[1] ${data.animacion}`}>
        <img
          className="object-cover h-[410px]"
          src={data.ponente}
          style={{ filter: "drop-shadow(0 0 15px red)" }}
        />
      </div>
    </div>
  );
}