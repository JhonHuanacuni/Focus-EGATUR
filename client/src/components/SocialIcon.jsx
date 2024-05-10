import { Link } from "react-router-dom";
import logo_fb from "../assets/img/logo_fb_1.png";
import logo_ig from "../assets/img/logo_ig_1.png";
import logo_yt from "../assets/img/logo_yt_1.png";
import logo_tw from "../assets/img/logo_tw_1.png";
import logo_in from "../assets/img/logo_in_1.png";

export function SocialIcon({ fondo }) {
  return (
    <div className=" flex justify-center relative py-1">
      <div className="bg-gray-300 h-0.5 w-full absolute bottom-1/2 z-20" />
      <ul className={`${fondo} flex justify-center space-x-3 w-60 z-30`}>
        {[
          { src: logo_fb, alt: "Facebook", link: "#" },
          { src: logo_ig, alt: "Instagram", link: "#" },
          { src: logo_yt, alt: "YouTube", link: "#" },
          { src: logo_tw, alt: "Twitter", link: "#" },
          { src: logo_in, alt: "LinkedIn", link: "#" },
        ].map((social, index) => (
          <li key={index}>
            <a href={social.link} className="flex">
              <div className="bg-white inline-block rounded-full p-1.5 w-7">
                <img
                  className="w-full h-full object-cover"
                  src={social.src}
                  alt={social.alt}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
