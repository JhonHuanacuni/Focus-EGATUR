import { Link } from "react-router-dom";
import { SocialIcon } from "./SocialIcon";
import { Copyright } from "./Copyright";

const fondo = "bg-black";

export function Footer() {
  return (
    <div className={`${fondo} p-5`}>
      <SocialIcon fondo={fondo} />
      <Copyright />
    </div>
  );
}
