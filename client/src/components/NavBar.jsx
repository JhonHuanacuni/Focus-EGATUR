import buttonMenu from "../assets/img/menu.jpg";
import { Link } from 'react-router-dom'; 

export function NavBar() {
  return (
    <>
      <ul className="text-black hidden sm:flex text-[18px] sm:w-[430px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
        <Link to="/home" className="hover:text-yellow-400 font-bold">Inicio</Link>
        </li>
        <li>
          <Link to="/conferencistas" className="hover:text-yellow-400 font-bold">Conferencistas</Link>
        </li>
        <li>
          <a href="#" className=" hover:text-yellow-400 font-bold">Nosotros</a>
        </li>
        <li>
          <a href="#" className=" hover:text-yellow-400 font-bold">Cronograma</a>
        </li>
      </ul>
      <img className="w-10 h-10 cursor-pointer rounded-lg sm:hidden" src={buttonMenu} alt="" />
    </>
  );
}
