import React, { useState } from 'react';

export const FormPersonas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    esDeEGATUR: false,
    comentario: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        apellidos: '',
        correo: '',
        telefono: '',
        esDeEGATUR: false,
        comentario: ''
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="flex justify-center items-center flex-col mt-20 mb-10">
      <h2 className="text-3xl font-bold mb-6" style={{ color: '#E50914' }}>Inscribete para ser parte del congreso!</h2>
      <form onSubmit={handleSubmit} className={`w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${submitted ? 'animate-shake' : ''}`}>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="apellidos">
            Apellidos
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellidos"
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="correo">
            Correo Electrónico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="correo"
            type="email"
            placeholder="Correo Electrónico"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            type="tel"
            placeholder="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="esDeEGATUR"
              checked={formData.esDeEGATUR}
              onChange={handleChange}
            />
            <span className="text-sm">¿Es de EGATUR?</span>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="comentario">
            Comentarios
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comentario"
            placeholder="Comentarios"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </form>
      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(5px); }
          50% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
          100% { transform: translateX(0); }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};
