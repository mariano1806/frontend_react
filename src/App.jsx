import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const toggleForm = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-blue-200">
      <div className="relative w-full max-w-4xl bg-white border border-gray-300 rounded-lg shadow-lg flex">
        
        {/* Contenedor del toggle para cambiar entre formularios */}
        <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out rounded-[150px_0_0_100px] z-10">
          <div className={`toggle bg-gradient-to-r from-indigo-600 to-purple-700 text-white absolute left-[-100%] w-[200%] h-full transition-transform duration-700 ease-in-out ${isSignUpActive ? 'translate-x-[-50%]' : 'translate-x-0'} rounded-lg`}>
            {/* Panel de alternancia derecha (Registro) */}
            <div className={`toggle-panel toggle-left absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-transform duration-700 ease-in-out ${isSignUpActive ? 'translate-x-0' : '-translate-x-0'}`}>
              <h1 className="text-4xl font-bold">¡Bienvenido de vuelta!</h1>
              <p className="text-sm mt-4 mb-5">Ingrese sus datos para acceder a todas las funciones</p>
              <button className="bg-transparent border border-white text-white font-semibold py-2 px-10 rounded-lg text-sm uppercase" onClick={toggleForm}>Iniciar Sesión</button>
            </div>

            {/* Panel de alternancia izquierda (Iniciar Sesión)*/}
            <div className={`toggle-panel toggle-right absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-transform duration-700 ease-in-out ${isSignUpActive ? 'translate-x-0' : 'translate-x-[100%]'}`}>
              <h1 className="text-4xl font-bold">¡Bienvenido!</h1>
              <p className="text-sm mt-4 mb-5">Completa el formulario para acceder a todas las funciones</p>
              <button className="bg-transparent border border-white text-white font-semibold py-2 px-10 rounded-lg text-sm uppercase" onClick={toggleForm}>Registrarse</button>
            </div>
          </div>
        </div>

        {/* Formulario de Iniciar Sesión */}
        <div className={`form-container sign-in w-1/2 p-8 flex items-center justify-center transition-opacity duration-700 ${isSignUpActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <form className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl font-bold px-3 py-3">Iniciar Sesión</h1>
            <div className="flex space-x-4">
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-sm mt-4 mb-5">Use la contraseña de su correo electrónico.</p>
            <input type="email" placeholder="Email" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
            <input type="password" placeholder="Password" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
            <a href="#" className="text-xs mt-4">¿Olvidaste tu contraseña?</a>
            <button className="bg-purple-700 text-white font-semibold py-2 px-10 rounded-lg mt-5 text-sm uppercase">Iniciar Sesión</button>
          </form>
        </div>

        {/* Formulario de Registro */}
        <div className={`form-container sign-up w-1/2 p-8 flex items-center justify-center transition-opacity duration-700 ${isSignUpActive ? 'opacity-100 pointer-events-auto z-20' : 'opacity-0 pointer-events-none'}`}>
          <form className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl font-bold px-3 py-3">Crear Cuenta</h1>
            <div className="flex space-x-4">
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-sm mt-4 mb-5">Use la contraseña de su correo electrónico.</p>
            <input type="text" placeholder="Nombre" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
            <input type="password" placeholder="Password" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
            <button className="bg-purple-700 text-white font-semibold py-2 px-10 rounded-lg mt-5 text-sm uppercase">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;