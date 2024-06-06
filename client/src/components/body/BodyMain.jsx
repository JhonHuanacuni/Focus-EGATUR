import React from "react";
import RelojIco from "../../assets/img/reloj.png";
import UbiIco from "../../assets/img/ubicacion.png";

export function BodyMain() {
  return (
    <div className="z-10 flex flex-col items-center animate-fade-in">
      <p className="text-white font-egatur2 font-bold mb-4 sm:text-5xl text-4xl sm:py-4 animate-slide-in">
        Egatur 2024
      </p>
      <h1 className="text-black text-center px-4 py-2 sm:text-7xl text-5xl rubik-moonrocks-regular xl:pt-0 animate-bounce">
        CONGRESO
        <br />
        GASTRONOMICO
      </h1>

      <p className="text-center max-w-lg p-6 animate-fade-in delay-200">
        Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
        demostraciones de tipografías o de borradores de diseño para
      </p>
      <div className="items-center justify-center  w-[350px] sm:w-[500px] flex flex-col sm:flex-row sm:justify-between text-center text-base sm:text-lg sm:pt-4 pt-5">
        <div className="flex items-center animate-slide-in p-2">
          <img className="w-8 h-8 mx-2" src={RelojIco} alt="Reloj" />
          <p className="text-black font-semibold">10 y 11 de [X], 2024</p>
        </div>
        <div className="flex items-center animate-slide-in delay-200 p-2">
          <img className="w-8 h-8 mx-2" src={UbiIco} alt="Ubicación" />
          <p className="text-black font-semibold">[Dirección], Tacna</p>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }

        .animate-bounce {
          animation: bounce 5s infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
