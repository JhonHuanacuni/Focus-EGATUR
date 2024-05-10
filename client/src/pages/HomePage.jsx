export function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] sm:w-full bg-gradient-to-tr from-red-600 via-red-400 to-pink-300">
        <section className="flex flex-col items-center justify-center w-[70%] mx-4">
          <h1 className=" text-black text-center px-4 py-2 sm:text-7xl text-6xl rubik-moonrocks-regular">
            CONGRESO EGATUR
          </h1>
          <h2 className=" font-bold mb-4 font-serif sm:text-6xl text-4xl rubik-mono-one-regular">
            2024
          </h2>
          <p className="text-center max-w-lg">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final.
          </p>
          <div className=" w-64 sm:w-96 sm:place-content-between flex text-center text-base sm:text-lg sm:pt-10  pt-5">
            <div>
              <p className=" text-black font-semibold">10 y 11 de [X], 2024</p>
            </div>
            <div>
              <p className=" text-black font-semibold">[Dirección], Tacna</p>
            </div>
          </div>
          <div className=" bg-white sm:w-[400px] w-[300px] h-24 rounded-full mt-[50px]"></div>

        </section>
      </div>
    </>
  );
}
