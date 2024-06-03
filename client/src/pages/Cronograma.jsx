import React, { useState } from "react";

const Tab = ({ title, active, onClick }) => (
  <div
    className={`cursor-pointer p-5 font-bold ${
      active ? "border-b-2 border-red-400" : "border-b-2 border-transparent"
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
    <div className="h-screen flex flex-col justify-center items-center bg-red-100">
      <div className="text-black text-center mb-10">
        <h1 className="text-[30px] font-extrabold">CRONOGRAMA</h1>
      </div>
      <div className="max-w-4xl w-full bg-white rounded shadow">
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
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Hora</th>
                  <th className="p-3">Actividad</th>
                  <th className="p-3">Idioma</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows for Day 1 */}
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:00 – 15:30</td>
                  <td className="p-3 border-t border-gray-300">Ceremonia de Inauguración</td>
                  <td className="p-3 border-t border-gray-300"></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">15:30 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">GASTRONOMIA: TEMA TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </TabContent>
          <TabContent active={activeTab === 2}>
            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Hora</th>
                  <th className="p-3">Actividad</th>
                  <th className="p-3">Idioma</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows for Day 2 */}
                <tr className="bg-white">
                  <td className="p-3 border-t border-gray-300">15:00 – 16:00</td>
                  <td className="p-3 border-t border-gray-300">BARISMO: TEMA</td>
                  <td className="p-3 border-t border-gray-300">ESP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-t border-gray-300">16:00 – 16:30</td>
                  <td className="p-3 border-t border-gray-300">BAR Y MIXOLOGIA: TEMA</td>
                  <td className="p-3 border-t border-gray-300"></td>
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
