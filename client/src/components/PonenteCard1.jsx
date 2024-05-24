import React, { useState } from "react";
import { motion } from "framer-motion";

export function PonenteCard1(data) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="h-full w-full aspect-video max-w-[550px] relative flex"
      style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 1)" }}
      initial={{ scale: 0.9, opacity: 0 }} // Estado inicial de la animación
      animate={{ scale: hovered ? 1.1 : 1, opacity: 1 }} // Estado final de la animación
      transition={{ duration: 0.5 }} // Duración de la animación
      onMouseEnter={() => setHovered(true)} // Función para manejar el evento onMouseEnter
      onMouseLeave={() => setHovered(false)} // Función para manejar el evento onMouseLeave
    >
      <div className="bg-red-500 h-full w-1/3 z-[1]" style={{ boxShadow: "0 0 10px red" }} />
      <div className="bg-black h-full w-2/3 z-0 p-10 flex items-center justify-center">
        <div className="text-center">
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
        className={`absolute ${data.invertir ? "transform scale-x-[-1]" : ""} ${
          data.recorrer
        } inset-0 right-auto z-[1] ${hovered ? "hovered" : ""}`}
      >
        <img
          className="object-cover h-full"
          src={data.ponente}
          style={{ filter: "drop-shadow(0 0 15px red)" }}
        />
      </div>
    </motion.div>
  );
}

<style jsx>{`
  .hovered {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
`}</style>
