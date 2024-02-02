import React, { useContext, useEffect, useState } from 'react'
import SidebarChatItem from './SidebarChatItem'
import { ChatContext } from '../../context/chat/ChatContext'
import { AuthContext } from '../../auth/AuthContext';
import { fetchConToken } from '../../helpers/fetch';

const Sidebar = () => {

    const {chatState} = useContext(ChatContext);
    const {auth} = useContext(AuthContext);
    const usuarios = chatState.usuarios.length > 0 ? chatState.usuarios[0] : [];

    const [mensajesPorUsuario, setMensajesPorUsuario] = useState({});

    useEffect(() => {
        const cargarMensajes = async () => {
            let mensajesTemp = {};
            let cambios = false; // Flag para detectar cambios
    
            for (const u of usuarios) {
                if (u.uid !== auth.uid && u.experto === false) {
                    const resp = await fetchConToken(`mensajes/${u.uid}`);
                    if (!mensajesPorUsuario[u.uid] || mensajesPorUsuario[u.uid] !== resp) {
                        mensajesTemp[u.uid] = resp; // Asumiendo que resp contiene la información deseada
                        cambios = true;
                    }
                }
            }
    
            // Actualizar el estado solo si hay cambios
            if (cambios) {
                setMensajesPorUsuario(mensajesTemp);
            }
        };
    
        cargarMensajes();
    }, [usuarios, auth.uid]); // Dependencias del useEffect

    return (
        <div className="inbox_chat">
            {
                usuarios
                .filter( user => user.uid !== auth.uid 
                    && user.experto == false 
                    && mensajesPorUsuario[user.uid] 
                    && mensajesPorUsuario[user.uid].mensajes.length > 0
                    ) // si son iguales los id filtra
                .map(( usuario ) => {




                    return <SidebarChatItem key={usuario.uid} usuario={usuario} />
                })
            }

            {/*   <!-- Espacio extra para scroll -->*/}
            <div className="extra_space"></div>


        </div>

    )
}

export default Sidebar
