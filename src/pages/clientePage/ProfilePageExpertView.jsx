import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarPrivate from '../../components/cliente/NavbarPrivate'



export const ProfilePageExpert = () => {

    const location = useLocation();
    const usuario = location.state?.usuario;

    return (
        <>
        <NavbarPrivate/>
        <div className="container my-5">
            <div className="card mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-body text-center">
                    {/* Espacio para la foto de perfil */}
                    <img 
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="Foto de perfil" 
                        className="rounded-circle mb-3"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    {/* Nombre y título */}
                    <h2 className="card-title">{usuario.nombre.toUpperCase()}</h2>
                    <p className="card-text">Título Profesional</p>
                    <textarea readOnly placeholder='Título Profesional' value={usuario.tituloprofesional}/>
                </div>

                <div className="card-footer text-muted">
                    <h3><b>Sobre mí:</b></h3>
                    <textarea readOnly placeholder='Breve descripción profesional...' value={usuario.sobremi}/>

                </div>

                <div className="card-footer text-muted">
                    <h3><b>Experiencia:</b></h3>
                    <textarea readOnly placeholder='Experiencia profesional...' value={usuario.experiencia}/>

                </div>
                <div className="card-footer text-muted">
                    <h3><b>Licencias y certificaciones:</b></h3>

                    <textarea readOnly placeholder='Licencias y certificaciones...' value={usuario.licenciasycertificaciones}/>
                        
                    
                </div>

                <div className="card-footer text-muted">
                    <h3><b>Conocimientos y aptitudes:</b></h3>

                    <textarea readOnly placeholder='Conocimientos y aptitudes...' value={usuario.conocimientosyaptitudes}/>

                </div>
            </div>
        </div>
        </>
    );
};
