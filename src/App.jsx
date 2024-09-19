import React, { useState } from 'react';

function App() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const toggleForm = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen border-2 border-solid border-white rounded-full">
      <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out rounded-[150px_0_0_100px] z-10">
        <div className={`toggle bg-gradient-to-r from-indigo-600 to-purple-700 text-white absolute left-[-100%] w-[200%] h-full transition-transform duration-600 ease-in-out ${isSignUpActive ? 'translate-x-[50%]' : ''}`}>
          <div className={`toggle-panel toggle-left absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-transform duration-600 ease-in-out ${isSignUpActive ? 'translate-x-0' : '-translate-x-[200%]'}`}>
            <h1 className="text-xl font-bold">¡Bienvenido de vuelta!</h1>
            <p className="text-sm mt-4 mb-5">Ingrese sus datos para acceder a todas las funciones</p>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-10 rounded-lg text-sm uppercase" onClick={toggleForm}>Iniciar Sesión</button>
          </div>
          <div className={`toggle-panel toggle-right absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-transform duration-600 ease-in-out ${isSignUpActive ? 'translate-x-[200%]' : ''}`}>
            <h1 className="text-xl font-bold">¡Bienvenido!</h1>
            <p className="text-sm mt-4 mb-5">Completa el formulario para acceder a todas las funciones</p>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-10 rounded-lg text-sm uppercase" onClick={toggleForm}>Registrarse</button>
          </div>
        </div>
      </div>

      {/*Formulario de registro*/}
      <div className={`form-container sign-up absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-96 p-6 z-20 ${isSignUpActive ? 'opacity-100' : 'opacity-0'}`}>
        <form className="flex flex-col items-center justify-center w-full">
          <h1 className="text-xl font-bold">Crear cuenta</h1>
          <div className="social-icons my-5 flex">
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span className="text-sm">Use la contraseña de su correo electrónico.</span>
          <input type="text" placeholder="Name" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
          <input type="email" placeholder="Email" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
          <input type="password" placeholder="Password" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
          <button className="bg-purple-700 text-white font-semibold py-2 px-10 rounded-lg mt-5 text-sm uppercase">Registrarse</button>
        </form>
      </div>

      {/*Formulario de inicio de sesión*/}
      <div className={`form-container sign-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-96 p-6 z-10 ${isSignUpActive ? 'opacity-0' : 'opacity-100'}`}>
        <form className="flex flex-col items-center justify-center w-full">
          <h1 className="text-xl font-bold">Iniciar Sesión</h1>
          <div className="social-icons my-5 flex">
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span className="text-sm">Use la contraseña de su correo electrónico.</span>
          <input type="email" placeholder="Email" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
          <input type="password" placeholder="Password" className="w-full bg-gray-200 border-none rounded-lg py-2 px-3 my-2 text-sm focus:outline-none" />
          <a href="#" className="text-xs mt-4">¿Olvidaste tu contraseña?</a>
          <button className="bg-purple-700 text-white font-semibold py-2 px-10 rounded-lg mt-5 text-sm uppercase">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default App;
