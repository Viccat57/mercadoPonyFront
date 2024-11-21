import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo B Transparente.png';

const HeaderComponent = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 text-white bg-custom-red">
      {/* Logo */}
      <div className="max-w-xs cursor-pointer mb-4 sm:mb-0">
        <img src={logo} alt="MercadoPony" className="w-24 sm:w-auto" />
      </div>

      {/* Barra de búsqueda */}
      <div className="flex items-center w-full sm:w-1/2 relative mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-custom-blue block w-full border border-slate-300 rounded-md shadow-sm pl-10 pr-12 focus:outline-none focus:border-custom-wine focus:ring-custom-wine focus:ring-1 sm:text-sm"
        />
        <div className="absolute left-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35a7.5 7.5 0 10-1.15 1.15L21 21z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Botones de autenticación */}
      <div className="auth-buttons flex space-x-2">
        <Link
          to="/Crear"
          className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Crear Cuenta
        </Link>
        <Link
          to="/Login"
          className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
