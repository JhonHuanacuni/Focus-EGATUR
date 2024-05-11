import React from "react";
import { Reloj } from "./Reloj";
import { BodyMain } from "./BodyMain";
import { PonentesCard } from "../ponentes/PonentesCard";
import  AniEgatur  from "../../assets/img/AniEgatur.svg";

const nombre = "PonentePrueba";

export function HomeBody() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] sm:w-full bg-gradient-to-tr from-red-600 via-red-400 to-pink-300">
        <section className="flex flex-col items-center justify-center w-[70%] mx-4">
          <BodyMain />
          <div className=" h-[20vh] flex items-end">
            <Reloj />
          </div>
        </section>
      </div>
    
      <section className=" flex justify-center items-center flex-col">
        <div className="flex py-5 text-black">
          <p className=" font-bold text-xl">Ponentes</p>
        </div>
        <div className="flex justify-center items-center flex-col w-3/4">
          <section className=" ">
            <PonentesCard nombre={nombre}/>
          </section>
          <div>
            <p className=" text-black mt-20 mb-5"> 
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones de tipografías o de borradores de diseño para
              probar el diseño visual antes de insertar el texto final.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}



