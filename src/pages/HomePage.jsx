import React from "react";

import FooterPage from "../components/FooterPage";
import NavbarPage from "../components/NavbarPage";
import { CardPage } from "../components/CardPage";
import { Link } from "react-router-dom";

export const HomePage = () => {

    return (
        <div>
            <NavbarPage />
            <main className='font-sans p-4 bg-slate-300'>
                <div className='bg-slate-200 mx-auto grid max-w-6xl md:grid-cols-1 gap-6 lg:grid-cols-2 rounded-lg p-6'>
                    <section className="my-8 lg:grid-cols-1">
                        <h2 className="text-3xl font-bold font-poppins">Acerca de AseCH TI</h2>
                        <p className="mt-4 text-left">Esta plataforma web es una herramienta innovadora diseñada para personas interesadas en el mundo de la tecnología, ya sean trabajadores, estudiantes, o entusiastas. Ofrece asesorías especializadas en diversas áreas de Tecnologías de la Información.</p>
                        <br />
                        <p>Los usuarios tienen la posibilidad de seleccionar expertos en campos específicos de distintas áreas TI, garantizando una orientación precisa y adaptada a sus necesidades.</p>
                        <br />
                        <p>Un rasgo distintivo de esta plataforma es su capacidad para facilitar la comunicación en tiempo real, permitiendo una interacción ágil y directa entre usuarios y expertos.</p>
                        <br />
                        <p>La plataforma se establece como un recurso esencial para quienes buscan profundizar en su conocimiento tecnológico y resolver problemas específicos en un ambiente que es dinámico y siempre actualizado.</p>
                    </section>

                    <div className="my-4 flex justify-center items-center">
                        <img src="/img/acercade.png" alt="Acerca de la plataforma" className="max-w-full h-80 rounded-lg shadow-lg" />
                    </div>
                    <div className="my-4 flex justify-center items-center">
                        <img src="/img/comofunciona.png" alt="Acerca de la plataforma" className="max-w-full h-80 rounded-lg shadow-lg" />
                    </div>
                    <section className="my-4 lg:grid-cols-1">
                        <h2 className="text-3xl font-bold mt-6 font-poppins">¿Cómo Funciona?</h2>
                        <ul className="list-disc list-inside mt-4">
                            <li>Regístrate y elige el área en la que necesitas asesoría.</li>
                            <li>Selecciona un asesor basado en tus necesidades y disponibilidad.</li>
                            <li>Comienza a mejorar tus habilidades con sesiones personalizadas.</li>
                            <li>Resuelve las dudas que tengas con expertos en el área.</li>
                        </ul>
                    </section>
                </div>

                <div className='bg-slate-200 mx-auto grid max-w-6xl md:grid-cols-3 sm:grid-cols-3 gap-6 lg:grid-cols-1 rounded-lg p-6 mt-4'>
                    <section className="my-6">
                        <h2 className="text-3xl font-bold font-poppins">Te ofrecemos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 lg:grid-cols-3">
                            <CardPage

                                title="Calidad"
                                descriptionTitle="Mejora tus habilidades"
                                description="Garantizamos una experiencia de aprendizaje de alto nivel, con asesorías personalizadas que aseguran una comprensión profunda y un dominio práctico en tu campo de estudio o trabajo. Cada sesión es un paso adelante hacia la excelencia."
                                image="/img/asesoria2.svg"
                            />

                            <CardPage
                                title="Expertos"
                                descriptionTitle="Aprende de los mejores"
                                description="Accede a una red de profesionales certificados y especializados en TI, que te guiarán a través de los últimos avances y mejores prácticas en el sector. Nuestros expertos son cuidadosamente seleccionados para ofrecerte una mentoría de vanguardia."
                                image="/img/certification.svg"
                            />
                            <CardPage
                                title="Rapidez"
                                descriptionTitle="Respuestas inmediatas"
                                description="Obtén respuestas y soluciones sin demoras. Nuestro servicio está diseñado para proporcionar asesorías eficientes, asegurando que cada consulta sea atendida con la urgencia que merece. Avanza a tu ritmo, sin esperas innecesarias."
                                image="/img/rapidez.svg"
                            />
                        </div>
                    </section>

                    <div>
                        <section className="my-8">
                            <h2 className="text-3xl text-center font-bold font-poppins">Opiniones</h2>
                            <p className="mt-4 italic text-center">"Gracias a la asesoría recibida, pude mejorar notablemente en mi campo de estudio." - Cliente Satisfecho</p>

                        </section>
                    </div>


                    <div>
                        <section className="my-8 text-center">
                            <h2 className="text-3xl font-bold font-poppins">¿Te gustaría ser parte de nuestro equipo de expertos?</h2>
                            <Link to='/formexpert'>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">Contactanos Aquí</button>
                            </Link>
                        </section>
                    </div>
                </div>

            </main>



            <FooterPage />
        </div>
    )

}