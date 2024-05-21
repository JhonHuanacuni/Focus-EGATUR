import React from "react";
import { Link } from "react-router-dom";

export function PonentesCard({ nombre, especialidad, imagen }) {
  return (
    <Link to="/conferencistas" className="bg-red-500 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg relative group">
      <div>
        <img
          className="sm:max-w-52 max-w-52 h-auto rounded-full py-4 px-4"
          src={imagen}
          alt={nombre}
        />
      </div>
      <div className="flex justify-center items-center flex-col py-4 text-center">
        <p className="font-bold text-black">{nombre}</p>
        <p>{especialidad}</p>
      </div>
    </Link>
  );
}
