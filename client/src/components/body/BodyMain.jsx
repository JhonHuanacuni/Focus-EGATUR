import  RelojIco  from "../../assets/img/reloj.png";
import  UbiIco  from "../../assets/img/ubicacion.png";

import React from "react";

export function BodyMain() {
  return (
    <>
      <h1 className=" text-black text-center px-4 py-2 sm:text-7xl text-6xl rubik-moonrocks-regular xl:pt-60 pt-40 ">
      CONGRESO EGATUR
    </h1>
    <h2 className=" font-bold mb-4 font-serif sm:text-6xl text-4xl rubik-mono-one-regular">
      2024
    </h2>
    <p className="text-center max-w-lg">
      Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
      demostraciones de tipografías o de borradores de diseño para probar el
      diseño visual antes de insertar el texto final.
    </p>
    <div className=" w-[350px] sm:w-[500px]  sm:place-content-between flex text-center text-base sm:text-lg sm:pt-10 pt-20">
      <div className="flex items-center">
        <img className=" w-8 h-8 mx-2" src={RelojIco} alt="" />
        <p className=" text-black font-semibold">10 y 11 de [X], 2024</p>
      </div>
      <div className="flex items-center">
        <img className=" w-8 h-8 mx-2" src={UbiIco} alt="" />
        <p className=" text-black font-semibold">[Dirección], Tacna</p>
      </div>
    </div>    
    </>

  );
}
