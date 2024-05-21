import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfid from "./config/particles-config";

export function ParticlesBackground() {
    const particlesInit = useCallback((engine)=>{
        loadFull(engine)
    ,[]})
  return (
    <div>
      <Particles className="z-20"
        //id="tsparticles"
        options={particlesConfid}
        Init={particlesInit}
      />
    </div>
  );
}
