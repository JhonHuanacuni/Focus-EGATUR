import React, { useState } from "react";

const Tab = ({ title, active, onClick }) => (
  <div
    className={`cursor-pointer p-5 font-bold ${
      active ? "border-b-4 border-[#EC2D34] text-[#EC2D34]" : "border-b-4 border-transparent text-[#1A1A1A]"
    }`}
    onClick={onClick}
  >
    {title}
  </div>
);

const TabContent = ({ children, active }) => (
  <div className={`p-5 ${active ? "block" : "hidden"}`}>{children}</div>
);

export const Cronograma = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className=" pb-10 flex flex-col  items-center bg-[#F4F4F4]">
      <div className="text-[#1A1A1A] text-center mb-10">
        <h1 className="text-[30px] font-extrabold text-[#F7A40C] pt-24">CRONOGRAMA</h1>
      </div>
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg">
        <div className="flex border-b border-gray-300 justify-center mb-4">
          <Tab
            title="DÍA 1"
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
          />
          <Tab
            title="DÍA 2"
            active={activeTab === 2}
            onClick={() => setActiveTab(2)}
          />
        </div>
        <div>
          <TabContent active={activeTab === 1}>
            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
              <thead className="bg-[#F7A40C] text-white">
                <tr>
                  <th className="p-3">Hora</th>
                  <th className="p-3">Actividad</th>
                  <th className="p-3">Idioma</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:00 – 15:30</td>
                  <td className="p-3 border-t border-gray-300">Ceremonia de Inauguración</td>
                  <td className="p-3 border-t border-gray-300"></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Gastronomia: TEMA TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Barismo: TEMA TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Bar-Mixologia: TEMA TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Pasteleria y Panificación: TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>

                {/* Add more rows as needed */}
              </tbody>
            </table>
          </TabContent>
          <TabContent active={activeTab === 2}>
            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
              <thead className="bg-[#F7A40C] text-white">
                <tr>
                  <th className="p-3">Hora</th>
                  <th className="p-3">Actividad</th>
                  <th className="p-3">Idioma</th>
                </tr>
              </thead>
              <tbody>
              <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Barismo: TEMA TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Bar-Mixologia: TEMA TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Pasteleria y Panificación: TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BREAK</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Finalización</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">Despedida</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </TabContent>
        </div>
      </div>
    </div>
  );
};
