import  buttonMenu  from "../assets/img/menu.jpg";

export function NavBar() {
  return (
    <>
      <ul className=" hidden sm:flex text-[18px] sm:w-[430px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Conferencistas</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Cronograma</a>
        </li>
      </ul>
      <img className=" w-10 h-10 cursor-pointer rounded-lg sm:hidden" src={buttonMenu} alt="" />
    </>
  );
}
