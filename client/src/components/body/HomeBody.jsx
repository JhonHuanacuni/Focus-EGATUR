import React from "react";
import { Reloj } from "./Reloj";
import { BodyMain } from "./BodyMain";
import { PonentesCard } from "../ponentes/PonentesCard";
import AniEgatur from "../../assets/img/AniEgatur.svg";
import CintaEgaturDer from "../../assets/img/CintaEgaturDer.svg";

import chef1 from "../../assets/img/ChefIco.jpg";

const nombreChef1 = " Chef X";
const especialidadChef1 = "Gastronomia";

const nombreChef2 = " Chef Y";
const especialidadChef2 = "Barismo";

export function HomeBody() {
  return (
    <>
      <div className="relative z-0 inset-0 flex overflow-hidden h-screen justify-center">
        <div className="absolute z-0 inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-400 to-pink-300 animate-gradient"></div>
          <div className="absolute h-[1000px] w-[1000px] flex items-center justify-center">
            <img
              src={AniEgatur}
              alt=""
              className="h-full w-full object-cover opacity-50 animate-spin-slow"
            />
          </div>
        </div>

        {/* Cintas laterales _ Derecha */}
        <div className="absolute top-20 right-0 h-[100px] w-[100px] xl:w-[150px] hidden lg:block animate-float">
          <img
            src={CintaEgaturDer}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
        </div>

        <div className="absolute top-1/2 right-0 h-[75px] w-[75px]  hidden xl:block animate-float">
          <img
            src={CintaEgaturDer}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
        </div>

        <div className="absolute bottom-20 right-0 h-[100px] w-[100px] xl:w-[150px] hidden lg:block animate-float">
          <img
            src={CintaEgaturDer}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
        </div>

        {/* Contenido principal */}
        <section className="flex flex-col items-center justify-center  mx-4 relative z-10 ">
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

          @keyframes float {
            0% {
              transform: translateY(-5px);
            }
            50% {
              transform: translateY(5px);
            }
            100% {
              transform: translateY(-5px);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes width-change {
            0%,
            100% {
              width: 150px;
            }
            50% {
              width: 100px;
            }
          }

          .animate-width-change {
            animation: width-change 4s ease-in-out infinite;
          }
        `}</style>
      </div>

      <section className=" flex justify-center items-center flex-col">
        <div className="flex py-5 text-black">
          <p className=" font-bold text-xl">Ponentes</p>
        </div>
        <div
          className="flex justify-center flex-col w-3/4 overflow-x-auto"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#0001 #f1f1f1" }}
        >
          <section className=" p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 justify-items-center">
            <PonentesCard
              nombre={nombreChef1}
              especialidad={especialidadChef1}
              imagen={chef1}
            />
            <PonentesCard
              nombre={nombreChef2}
              especialidad={especialidadChef2}
              imagen={chef1}
            />
            <PonentesCard
              nombre={nombreChef2}
              especialidad={especialidadChef2}
              imagen={chef1}
            />
            <PonentesCard
              nombre={nombreChef2}
              especialidad={especialidadChef2}
              imagen={chef1}
            />
          </section>
        </div>
        <div>
          <p className=" text-black mt-20 mb-5 text-center">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final.
          </p>
        </div>
      </section>
    </>
  );
}
