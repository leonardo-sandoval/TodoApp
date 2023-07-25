import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleWeClick = () => {
    // Aquí rediriges a la página We
    navigate('/we'); // Asegúrate de que la ruta '/we' coincida con la ruta de la página We en tu archivo de rutas
  };

  return (
    <header className="text-gray-600 body-font shadow-lg" style={{ backgroundColor: 'black' }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
            style={{ backgroundColor: 'red' }}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl" style={{ color: 'white' }}>
            <a href="/landing">Todo App</a>
          </span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <button
          onClick={handleWeClick}
          className="mr-4 inline-flex items-center text-white bg-red-500 border-0 px-4 py-2  rounded text-base mt-4 md:mt-0"
        >
          We
        </button>
        <button
          onClick={logout}
          className="inline-flex items-center mr-4 inline-flex items-center text-white bg-red-500 border-0 px-4 py-2  rounded text-base mt-4 md:mt-0"
        >
          Logout
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
