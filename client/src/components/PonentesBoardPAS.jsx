import ponente_1 from "../assets/img/ponente_1.png";
import ponente_2 from "../assets/img/ponente_2.png";
import chef_1 from "../assets/img/chef_real_1.png";
import chef_2 from "../assets/img/chef_real_2.png";
import chef_3 from "../assets/img/chef_real_3.png";

import { PonenteCard1 } from "./PonenteCard1";
import { PonenteCard2 } from "./PonenteCard2";

export function PonentesBoardPAS() {
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
}
