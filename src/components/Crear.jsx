import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    NombreUsuario: '', // Cambiado para coincidir con el backend
    nombreCompleto: '', // Cambiado para coincidir con el backend
    email: '',
    password: '',
    termsAccepted: false, // Solo para validar en el frontend
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setStatusMessage('Debes aceptar los términos y condiciones.');
      return;
    }

    try {
      const response = await axios.post('http://172.235.40.140/api/usuarios', {
        NombreUsuario: formData.NombreUsuario,
        nombreCompleto: formData.nombreCompleto,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        setStatusMessage('¡Cuenta creada exitosamente!');
        setFormData({
          NombreUsuario: '',
          nombreCompleto: '',
          email: '',
          password: '',
          termsAccepted: false,
        });
      } else {
        setStatusMessage('Ocurrió un problema al crear la cuenta.');
      }
    } catch (error) {
      console.error('Error al crear la cuenta:', error.response?.data || error.message);
      setStatusMessage('No se pudo crear la cuenta. Verifica los datos ingresados.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-gray">
      <form
        onSubmit={handleSubmit}
        className="bg-custom-blue p-8 rounded-lg shadow-md w-[30rem] text-white"
      >
        <h2 className="mb-6 text-center text-lg font-bold">
          Ingresa tus datos para crear tu cuenta
        </h2>
        <label className="block mb-2">Usuario</label>
        <input
          type="text"
          name="NombreUsuario"
          value={formData.NombreUsuario}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 rounded-md text-black"
          placeholder="Usuario"
        />
        <label className="block mb-2">Nombre Completo</label>
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 rounded-md text-black"
          placeholder="Nombre Completo"
        />
        <label className="block mb-2">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 rounded-md text-black"
          placeholder="Correo Electrónico"
        />
        <label className="block mb-2">Contraseña</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 rounded-md text-black"
          placeholder="Contraseña"
        />
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Acepto los términos y condiciones</label>
          </div>
          <button
            type="submit"
            className="bg-custom-red hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Crear Cuenta
          </button>
        </div>
        <p className="text-center text-yellow-400">{statusMessage}</p>
      </form>
    </div>
  );
}

export default SignupForm;
