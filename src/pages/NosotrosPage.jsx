import React from 'react'
import NavbarPage from '../components/NavbarPage'
import FooterPage from '../components/FooterPage'
import { CardPage } from '../components/CardPage'

export const NosotrosPage = () => {
    return (
        <div className='bg-slate-300'>
            <NavbarPage />
            <div className='bg-slate-200 mx-auto grid max-w-6xl md:grid-cols-3 sm:grid-cols-3 gap-6 lg:grid-cols-1 rounded-lg p-6 mt-4 mb-4'>
                <section className="my-6">
                    <h2 className="text-4xl font-bold font-poppins text-center">Conoce a nuestro equipo</h2>
                    <h6 className='m-4 text-center text-xl font-sans font-semibold'>Tecnología de la
                        Información y Desarrollo
                        Digital</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 lg:grid-cols-3">

                        <CardPage
                            title="Jefe TI"
                            descriptionTitle="Gonzalo Millanao"
                            description="Software Engineer"
                            image="/img/avatar-svgrepo-com.svg"
                        />
                        <CardPage
                            title="UX/UI Designer"
                            descriptionTitle="Ignacio Mardonez"
                            description="Software Engineer"
                            image="/img/avatar-svgrepo-com.svg"
                        />
                        <CardPage
                            title="Full Stack Developer"
                            descriptionTitle="Miguel Candia"
                            description="Software Engineer"
                            image="/img/avatar-svgrepo-com.svg"

                        />
                    </div>
                </section>
            </div>
            <FooterPage />
        </div>
    )
}