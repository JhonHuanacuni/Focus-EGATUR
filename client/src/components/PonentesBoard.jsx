import ponente_1 from "../assets/img/ponente_1.png";
import ponente_2 from "../assets/img/ponente_2.png";
import chef_1 from "../assets/img/chef_real_1.png";
import chef_2 from "../assets/img/chef_real_2.png";
import chef_3 from "../assets/img/chef_real_3.png";

import { PonenteCard1 } from "./PonenteCard1";
import { PonenteCard2 } from "./PonenteCard2";

export function PonentesBoard({ fondo }) {
  return (
    <div className="">
      <PonenteCard1
        invertir={""}
        recorrer={"left-[80px]"}
        ponente={ponente_2}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />

      <PonenteCard2
        invertir={""}
        recorrer={"right-[80px]"}
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
        recorrer={"left-[80px]"}
        ponente={chef_2}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />

      <PonenteCard2
        invertir={"true"}
        recorrer={"right-[80px]"}
        ponente={chef_3}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />

      <PonenteCard1
        className="flex flex-no-wrap"
        invertir={"true"}
        recorrer={"left-[0px]"}
        ponente={ponente_1}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />

      <PonenteCard2
        invertir={"true"}
        recorrer={"right-[80px]"}
        ponente={ponente_2}
        nombre={"Jesús Joseph Flores Yance"}
        puesto={"Administrador de base de datos"}
        experiencia={
          "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
        }
      />
    </div>
  );
}
