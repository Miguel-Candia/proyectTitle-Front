import React from 'react';
import '../css/navbarpage.css'


const NavbarPage = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 sticky top-0 font-sans">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex justify-start">
                    <a href="#Ubicación" className="text-gray-400 hover:text-gray-200">
                        {/* Icono de Soporte */}

                        <svg className="inline w-7 h-7 mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                        </svg>



                    </a>
                    <a href="/" className="text-xl font-semibold ">AseCH TI</a>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <a href="/" className=" hover:bg-gray-700 px-3 py-2 rounded">Inicio</a>
                        </li>
                        <li>
                            <a href="/nosotros" className="hover:bg-gray-700 px-3 py-2 rounded">Nosotros</a>
                        </li>
                        <li>
                            <a href="/contacto" className="hover:bg-gray-700 px-3 py-2 rounded">Contacto</a>
                        </li>

                    </ul>
                </div>
                <div className="flex justify-end space-x-2">
                    <a href="/auth/login" className="text-white bg-sky-700  hover:bg-gray-700 py-2 px-4 rounded transition duration-300">
                        Iniciar sesión
                    </a>
                    <a href="/auth/register" className="text-white bg-slate-500 hover:bg-gray-700 ml-4 py-2 px-4 rounded transition duration-300">
                        Registrarse
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavbarPage;