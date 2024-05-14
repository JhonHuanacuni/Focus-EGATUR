import ponente_1 from "../assets/img/ponente_1.png";
import ponente_2 from "../assets/img/ponente_2.png";
import chef_1 from "../assets/img/chef_real_1.png";
import chef_2 from "../assets/img/chef_real_2.png";
import chef_3 from "../assets/img/chef_real_3.png";
import fondo_1 from "../assets/img/fondo_1.png";

import { PonentesBoard } from "../components/PonentesBoard";

export function Conferencistas() {
  return (
    <div className="py-20 px-20">
      <div className=" w-[500px] text-black text-center m-auto">
        <h1 className="text-[30px] font-extrabold">NUESTROS PONENTES</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          tempora ipsam repellat at porro accusamus voluptatum, quae beatae
          omnis nulla.
        </p>
      </div>

      <div>
        <PonentesBoard/>
      </div>


    </div>
  );
}
