import buttonMenu from "../assets/img/menu.jpg";

export function NavBar() {
  return (
    <>
      <ul className="text-black hidden sm:flex text-[18px] sm:w-[430px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="#" className=" hover:text-red-500 font-bold">Inicio</a>
        </li>
        <li>
          <a href="#" className=" hover:text-red-500 font-bold">Conferencistas</a>
        </li>
        <li>
          <a href="#" className=" hover:text-red-500 font-bold">Nosotros</a>
        </li>
        <li>
          <a href="#" className=" hover:text-red-500 font-bold">Cronograma</a>
        </li>
      </ul>
      <img className="w-10 h-10 cursor-pointer rounded-lg sm:hidden" src={buttonMenu} alt="" />
    </>
  );
}
