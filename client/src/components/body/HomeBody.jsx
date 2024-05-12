import React from "react";
import { Reloj } from "./Reloj";
import { BodyMain } from "./BodyMain";
import { PonentesCard } from "../ponentes/PonentesCard";
import AniEgatur from "../../assets/img/AniEgatur.svg";

const nombre = "PonentePrueba";

export function HomeBody() {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen">
        {/* Fondo con imagen giratoria */}
        <div className="absolute z-0 inset-0 flex items-center justify-center bg-gradient-to-r from-red-600 via-red-400 to-pink-300 overflow-hidden">
          <div className=" h-[1000px] w-[1000px] absolute  flex items-center justify-center">
            <img
              src={AniEgatur}
              alt=""
              className="h-full w-full object-cover opacity-50 animate-spin-slow"
            />
          </div>
        </div>

        {/* Contenido principal */}
        <section className="flex flex-col items-center justify-center w-4/5 mx-4 relative z-10">
          <BodyMain />
          <div className="h-1/5 flex items-end">
            <Reloj />
          </div>
        </section>

        {/* Estilos para la animación */}
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-spin-slow {
            animation: spin 100s linear infinite;
          }
        `}</style>
      </div>
      

      <section className=" flex justify-center items-center flex-col">
        <div className="flex py-5 text-black">
          <p className=" font-bold text-xl">Ponentes</p>
        </div>
        <div className="flex justify-center items-center flex-col w-3/4">
          <section className="flex flex-row  ">
            <PonentesCard nombre={nombre} />
            <PonentesCard nombre={nombre} />
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
