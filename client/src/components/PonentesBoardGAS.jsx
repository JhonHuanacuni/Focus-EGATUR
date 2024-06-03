import ponente_1 from "../assets/img/ponente_1.png";
/* import ponente_2 from "../assets/img/ponente_2.png";
import chef_1 from "../assets/img/chef_real_1.png";
import chef_2 from "../assets/img/chef_real_2.png";
import chef_3 from "../assets/img/chef_real_3.png"; */

import React, { useState, useEffect } from 'react';
import { PonenteCard1 } from "./PonenteCard1";

export const PonentesBoardGAS = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ponentes = [
    { nombre: "Jesús Joseph Flores Yance", puesto: "Administrador de base de datos", experiencia: "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos." },
    { nombre: "Chef 1", puesto: "Chef Profesional", experiencia: "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos." },
    { nombre: "Chef 2", puesto: "Sous Chef", experiencia: "Experiencia en cocina internacional y gestión de personal culinario." },
    { nombre: "Chef 3", puesto: "Pastelero", experiencia: "Especializado en pastelería y postres gourmet." }
  ];

  const totalSlides = ponentes.length;
  const duplicateSlides = [ponentes[totalSlides - 1], ...ponentes, ponentes[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !isTransitioning) {
        handleNext();
      }
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (activeIndex === 0) {
      setActiveIndex(totalSlides);
    } else if (activeIndex === totalSlides + 1) {
      setActiveIndex(1);
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center mt-10">
      <button onClick={handlePrev} className="absolute left-0 bg-gray-200 p-2 rounded-full z-20">
        &#9664;
      </button>
      <div className="w-full overflow-hidden flex justify-center items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${(totalSlides + 2) * 100}%`,
            transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {duplicateSlides.map((ponente, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4 box-border flex justify-center"
              style={{ flex: '0 0 100%' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <PonenteCard1
                ponente={ponente}
                nombre={ponente.nombre}
                puesto={ponente.puesto}
                experiencia={ponente.experiencia}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="absolute right-0 bg-gray-200 p-2 rounded-full z-20">
        &#9654;
      </button>
    </div>
  );
};




/* export function PonentesBoardGAS() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center px-7 justify-center">
      <div className="place-self-center">
        <PonenteCard1
          invertir={""}
          recorrer={"left-[10px]"}
          ponente={ponente_2}
          nombre={"Jesús Joseph Flores Yance"}
          puesto={"Administrador de base de datos"}
          experiencia={
            "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
          }
        />        
      </div>

      <PonenteCard1
        invertir={""}
        recorrer={"right-[20px]"}
        ponente={chef_1}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />
      
      <PonenteCard1
        className="flex flex-no-wrap"
        invertir={"true"}
        recorrer={"left-[10px]"}
        ponente={chef_2}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "asd en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />

      <PonenteCard1
        invertir={"true"}
        recorrer={"right-[10px]"}
        ponente={chef_3}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />

    </div>
  );
} */


