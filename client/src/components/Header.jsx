import  logo  from "../assets/img/logoEgatur.svg";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className=" bg-red-400 flex place-content-between items-center">
        <img src={logo} alt="Logo" className="max-w-40  h-auto" />
        <NavBar/>
    </header>
  )
}
