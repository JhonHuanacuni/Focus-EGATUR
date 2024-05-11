import React, { useState, useEffect } from "react";

export function Reloj() {
  const [time, setTime] = useState({
    Dias: 20,
    Horas: 13,
    Minutos: 25,
    Segundos: 60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    setTime((prevTime) => {
      let { Dias, Horas, Minutos, Segundos } = prevTime;

      Segundos -= 1;

      if (Segundos < 0) {
        Segundos = 59;
        Minutos -= 1;
      }

      if (Minutos < 0) {
        Minutos = 59;
        Horas -= 1;
      }

      if (Horas < 0) {
        Horas = 23;
        Dias -= 1;
      }

      return {
        Dias,
        Horas,
        Minutos,
        Segundos,
      };
    });
  };

  return (
    <div
      className="flex w-[320px] select-none justify-center gap-y-4 uppercase text-primary md:gap-x-6 md:gap-y-4 bg-white md:w-[450px]  h-[100px] rounded-full mt-4 "
      role="timer"
    >
      {Object.entries(time).map(([unit, value]) => (
        <div
          key={unit}
          className="text-black flex justify-center flex-col-reverse items-center space-y-2"
        >
          <span className="-skew-x-6 text-center text-xs md:text-lg">
            {unit}
          </span>
          <div className=" relative flex -skew-x-6 overflow-hidden font-atomic">
            <div
              className=" float-left block w-[2.2rem] h-[3.2rem] overflow-hidden"
              data-first-group=""
            >
              <div
                className="duration-[800ms] transition-transform"
                data-wrapper=""
                style={{
                  transform: `translateY(-${Math.floor(value / 10) * 68}px)`,
                }}
              >
                {[...Array(10)].map((_, num) => (
                  <div
                    className=" flex sm:justify-center"
                    key={num}
                    style={{
                      width: "100%",
                      height: "10%",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      transform: `translateY(${num * 28}px)`,
                    }}
                  >
                    <span className="tabular-nums text-4xl text-accent block select-none overflow-hidden">
                      {num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="float-left block w-[2.2rem] h-[3.2rem] overflow-hidden"
              data-second-group=""
            >
              <div
                className="translate-y-0 transition-transform duration-[800ms] motion-reduce:duration-0"
                data-wrapper=""
                style={{ transform: `translateY(-${(value % 10) * 68}px)` }}
              >
                {[...Array(10)].map((_, num) => (
                  <div
                    className=" flex sm:justify-center"
                    key={num}
                    style={{
                      width: "100%",
                      height: "10%",
                      alignItems: "center",
                      transform: `translateY(${num * 28}px)`,
                    }}
                  >
                    <span className="tabular-nums text-4xl text-accent block select-none overflow-hidden">
                      {num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
