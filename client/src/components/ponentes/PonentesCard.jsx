import ChefIco from "../../assets/img/ChefIco.jpg";

export function PonentesCard({nombre}) {
  return (
    <>
      <div className=" bg-red-500 rounded-lg">
        <div>
          <img className="max-w-40 h-auto rounded-[100px] py-4 px-4" src={ChefIco} alt=""  />
        </div>
        <div className="flex justify-center items-center flex-col py-4">
          <p className=" font-bold text-black">{nombre}</p>
          <p>Gastronomia</p>
        </div>
      </div>
    </>
  );
}
