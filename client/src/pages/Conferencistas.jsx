
import { PonentesBoard } from "../components/PonentesBoard";

export function Conferencistas() {
  return (
    <div className="py-20 px-20">
      <div className="flex flex-col  text-black text-center m-auto">
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
