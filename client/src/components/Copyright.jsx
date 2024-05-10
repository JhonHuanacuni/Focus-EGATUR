import { Link } from "react-router-dom";
import logo from "../assets/img/logoEgatur.svg";

export function Copyright() {
  return (
    <div className="">
      <img src={logo} alt="Logo" className="w-20 mx-auto py-1" />
      <p className="text-center text-gray-600 sm:text-sm">
        Copyrigth &copy; {new Date().getFullYear()} Egatur.
      </p>
      <ul className="flex underline justify-center sm:text-xs">
        <li>
          <a href="#">Información legal</a>
        </li>
        <div className="mx-1">|</div>
        <li>
          <a href="#">Politica de privacidad</a>
        </li>
      </ul>
    </div>
  );
}
