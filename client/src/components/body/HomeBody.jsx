import React from "react";
import { Reloj } from "./Reloj";
import { FormPersonas } from "./FormPersonas";
import { BodyMain } from "./BodyMain";
import { PonentesCard } from "../ponentes/PonentesCard";
import AniEgatur from "../../assets/img/AniEgatur.svg";
import CintaEgaturDer from "../../assets/img/CintaEgaturDer.svg";
import Cinta from "../../assets/img/Cinta.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sponsor from "../../assets/img/sponsor.jpg";

import chef1 from "../../assets/img/ChefIco.jpg";
import { motion } from "framer-motion";

const nombreChef1 = " Chef X";
const especialidadChef1 = "Gastronomia";

const nombreChef2 = " Chef Y";
const especialidadChef2 = "Barismo";

export function HomeBody() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative z-0 inset-0 flex overflow-hidden h-screen justify-center">
        <div className="absolute z-0 inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-400 to-red-600  animate-gradient"></div>
          <div className="absolute h-[1000px] w-[1000px] flex items-center justify-center">
            <img
              src={AniEgatur}
              alt=""
              className="h-full w-full object-cover opacity-50 animate-spin-slow"
            />
          </div>
        </div>

        {/* Cintas laterales _ Derecha */}
        <div className=" hidden absolute top-[-100vh] right-0 h-screen  xl:block animate-float">
          <img
            src={Cinta}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
          <img
            src={Cinta}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
        </div>

        {/* Cinta lateral _ Izq */}

        <div className=" hidden absolute top-[-100vh] left-0 h-screen  xl:block animate-asd">
          <img
            src={Cinta}
            alt=""
            className="h-full w-full object-cover opacity-50 rotate-180"
          />
          <img
            src={Cinta}
            alt=""
            className="h-full w-full object-cover opacity-50 rotate-180"
          />
        </div>

        {/* Contenido principal */}
        <section className="flex flex-col items-center justify-center  mx-4 relative z-10 ">
          <BodyMain />
          <div className="h-1/5 flex sm:items-end items-center">
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
            animation: spin 200s linear infinite;
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }

            100% {
              transform: translateY(100%);
            }
          }

          .animate-float {
            animation: float 30s linear infinite;
          }

          @keyframes asd {
            0% {
              transform: translateY(100%);
            }

            100% {
              transform: translateY(0);
            }
          }

          .animate-asd {
            animation: asd 30s linear infinite;
          }
        `}</style>
      </div>

      <section className=" flex justify-center items-center flex-col">
        <div className="flex py-5 text-black">
          <div className="relative inline-block">
            <p className="font-bold text-4xl text-[#F7A40C]">
              CONOCE A NUESTROS PONENTES
            </p>
            <motion.div
              className="absolute left-0 right-0 bottom-0 h-1 bg-[#F7A40C]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
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
      <hr></hr>
      <section>
        <FormPersonas />
      </section>
      <hr></hr>
      <section className="flex justify-center items-center flex-col mt-20 mb-10">
        <h2 className="text-xl font-bold mb-5">Patrocinadores</h2>
        <Slider {...settings} className="w-3/4">
          <div>
            <img src={sponsor} alt="Patrocinador 1" className="mx-auto pr-5" />
          </div>
          <div>
            <img src={sponsor} alt="Patrocinador 2" className="mx-auto pr-5" />
          </div>
          <div>
            <img src={sponsor} alt="Patrocinador 3" className="mx-auto pr-5" />
          </div>
        </Slider>
      </section>
    </>
  );
}
