import React from "react";
import { Reloj } from "./Reloj";
import { BodyMain } from "./BodyMain";

export function HomeBody() {
  return (
    <div className="flex items-center justify-center h-[100vh] sm:w-full bg-gradient-to-tr from-red-600 via-red-400 to-pink-300">
      <section className="flex flex-col items-center justify-center w-[70%] mx-4">
        <BodyMain/>
        <div className=" h-[20vh] flex items-end">
        <Reloj />
        </div>
      </section>
    </div>
  );
}
