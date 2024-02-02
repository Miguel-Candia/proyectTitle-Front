import React from 'react';

const FooterPage = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container px-5 py-8 mx-auto flex flex-wrap items-center lg:flex-row flex-col">
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">AseCH TI</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="#soporte" className="text-gray-400 hover:text-gray-200">
                                    {/* Icono de Soporte */}
                                    <svg className="inline w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M9 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c2.67 0 8 1.34 8 4v2H1v-2c0-2.66 5.33-4 8-4m7.76-9.64c2.02 2.2 2.02 5.25 0 7.27l-1.68-1.69c.84-1.18.84-2.71 0-3.89l1.68-1.69M20.07 2c3.93 4.05 3.9 10.11 0 14l-1.63-1.63c2.77-3.18 2.77-7.72 0-10.74L20.07 2Z" /></svg>
                                    Soporte
                                </a>
                            </li>
                            <li>
                                <a href="#Contacto" className="text-gray-400 hover:text-gray-200">
                                    {/* Icono de Soporte */}
                                    <svg className="inline w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z" /></svg>
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a href="#Ubicación" className="text-gray-400 hover:text-gray-200">
                                    {/* Icono de Soporte */}
                                    <svg className="inline w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M14 11.5A2.5 2.5 0 0 0 16.5 9A2.5 2.5 0 0 0 14 6.5A2.5 2.5 0 0 0 11.5 9a2.5 2.5 0 0 0 2.5 2.5M14 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S7 14.25 7 9a7 7 0 0 1 7-7M5 9c0 4.5 5.08 10.66 6 11.81L10 22S3 14.25 3 9c0-3.17 2.11-5.85 5-6.71C6.16 3.94 5 6.33 5 9Z" /></svg>
                                    Ubicación
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Redes Sociales</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="#instagram" className="text-gray-400 hover:text-gray-200">
                                    {/* Icono de LinkedIn */}
                                    <svg className="inline w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" /></svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#facebook" className="text-gray-400 hover:text-gray-200">
                                    {/* Icono de Facebook */}
                                    <svg className="inline w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="currentColor" /></svg>
                                    Facebook
                                </a>
                            </li>
                            {/* Añade más íconos de redes sociales aquí si es necesario */}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">© 2023 AseCH TI —
                        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@Rancagua, Chile</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        {/* Iconos adicionales, si es necesario */}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;