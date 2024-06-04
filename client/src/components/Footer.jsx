import { Link } from "react-router-dom";
import { SocialIcon } from "./SocialIcon";
import { Copyright } from "./Copyright";

/* import chef_1 from "../assets/img/chef_real_3.png"; */
import  logoEgaturFooter  from "../assets/img/logoEgaturFooter.png";
const fondo = "bg-black";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
          <img
            src={logoEgaturFooter}
            alt="Logo"
            className="mx-auto"
            width="260"
            height="68"
          />
          <div className="mt-4">
            <a
              href="https://egatur.edu.pe/index.php/postula/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Trabaja en EGATUR
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
          <h5 className="text-lg font-bold mb-4">Contáctanos</h5>
          <ul className="text-sm">
            <li className="mb-2">
              <strong>Informes</strong>
              <div>
                <i className="far fa-envelope"></i>{" "}
                <a
                  href="mailto:informes@egatur.edu.pe"
                  className="hover:underline"
                >
                  informes@egatur.edu.pe
                </a>
              </div>
            </li>
            <li className="mb-2">
              <strong>Recepción</strong>
              <div>
                <i className="far fa-envelope"></i>{" "}
                <a
                  href="mailto:recepcion@egatur.edu.pe"
                  className="hover:underline"
                >
                  recepcion@egatur.edu.pe
                </a>
              </div>
            </li>
            <li className="mb-2">
              <strong>Soporte</strong>
              <div>
                <i className="far fa-envelope"></i>{" "}
                <a
                  href="mailto:soporte@egatur.edu.pe"
                  className="hover:underline"
                >
                  soporte@egatur.edu.pe
                </a>
              </div>
            </li>
          </ul>
          <h5 className="text-lg font-bold mt-4 mb-2">Horarios de Atención</h5>
          <ul className="text-sm">
            <li className="mb-2">
              <strong>Académico</strong>
              <div>
                <i className="far fa-calendar"></i> 9:00 a.m. - 6:00 p.m.
              </div>
            </li>
            <li className="mb-2">
              <strong>Soporte</strong>
              <div>
                <i className="far fa-calendar"></i> 9:00 a.m. - 5:30 p.m.
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h5 className="text-lg font-bold mb-4">Carreras</h5>
          <ul className="text-sm">
            <li className="mb-2">
              <a
                href="https://egatur.edu.pe/index.php/cocina-peruana-e-internacional/"
                className="hover:underline"
              >
                Cocina Nacional e Internacional
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://egatur.edu.pe/index.php/pasteleria-y-panificacion/"
                className="hover:underline"
              >
                Pastelería y Panificación
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://egatur.edu.pe/index.php/bar-y-mixiologia/"
                className="hover:underline"
              >
                Bar y Mixología
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://egatur.edu.pe/index.php/barismo/"
                className="hover:underline"
              >
                Barismo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

{
  /* <div className={`${fondo} p-5`}>
<SocialIcon fondo={fondo} />
<Copyright />
</div> */
}
