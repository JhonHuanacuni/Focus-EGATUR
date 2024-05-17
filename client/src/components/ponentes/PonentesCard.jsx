import React from "react";
import { Button } from "@nextui-org/react";

export function PonentesCard({ nombre, especialidad, imagen }) {
  return (
    <>
      <div className=" bg-red-500 rounded-lg mr-8">
        <div>
          <img
            className="sm:max-w-52 max-w-40 h-auto rounded-[100px] py-4 px-4"
            src={imagen}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col py-4">
          <p className=" font-bold text-black">{nombre}</p>
          <p>{especialidad}</p>
        </div>
        <Button color="danger">Button</Button>
      </div>
      
    </>
  );
}
