import  logo  from "../assets/img/logoEgatur.svg";
import { NavBar } from "./NavBar";

export function Header() {
  return (
<header className="flex place-content-between items-center px-4 py-4 fixed w-full shadow-md">
        <img src={logo} alt="Logo" className="max-w-40  h-auto" />
        <NavBar/>
    </header>   
  )
}
