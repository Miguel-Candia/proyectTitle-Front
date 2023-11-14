import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/ChatContext';
import { types } from '../types/types';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, desconnectSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    const [mensajesNuevosCargados, setMensajesNuevosCargados] = useState(false);

    useEffect (()=>{
        if( auth.logged){
            connectSocket();
        }

    },[auth, connectSocket])

    useEffect (()=>{
        if( !auth.logged){
            desconnectSocket();
        }

    },[auth, desconnectSocket])

// Escuchar los cambios de los usuarios Conectados
    useEffect (()=>{
        socket?.on('lista-usuario', (usuarios) =>{
            dispatch({
                type: types.usuariosCargados,
                payload:usuarios
            })
        })
    },[socket, dispatch])

    useEffect (()=>{
        socket?.on('mensaje-personal', (mensaje) =>{
            // dispatch de una accion
            dispatch({
                type: types.nuevoMensaje,
                payload: mensaje
            })

            setMensajesNuevosCargados(true);
            
        })
    },[socket,dispatch])

    useEffect(() => {


        if (mensajesNuevosCargados) {
        scrollToBottomAnimated('mensajes');
        setMensajesNuevosCargados(false)
        }
    }, [mensajesNuevosCargados]);

    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}