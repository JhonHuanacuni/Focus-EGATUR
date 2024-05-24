import { PonentesBoardGAS } from "../components/PonentesBoardGAS";
import { PonentesBoardBAR } from "../components/PonentesBoardBAR";
import { PonentesBoardBARISMO } from "../components/PonentesBoardBARISMO";
import { PonentesBoardPAS } from "../components/PonentesBoardPAS";

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
      <div className="flex flex-col  text-black text-center m-auto my-6">
        <h1 className="text-[30px] font-extrabold">GASTRONOMIA</h1>
      </div>
      <div>
        <PonentesBoardGAS />
      </div>
      <div className="flex flex-col  text-black text-center m-auto my-6">
        <h1 className="text-[30px] font-extrabold">BARISMO</h1>
      </div>
      <div>
        <PonentesBoardBAR />
      </div>
      <div className="flex flex-col  text-black text-center m-auto my-6">
        <h1 className="text-[30px] font-extrabold">BAR Y MIXOLOGIA</h1>
      </div>
      <div>
        <PonentesBoardBARISMO />
      </div>
      <div className="flex flex-col  text-black text-center m-auto my-6">
        <h1 className="text-[30px] font-extrabold">PASTELERIA</h1>
      </div>
      <div>
        <PonentesBoardPAS />
      </div>
    </div>
  );
}
