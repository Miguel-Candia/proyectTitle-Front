import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../../context/chat/ChatContext';
import { types } from '../../types/types';
import { fetchConToken } from '../../helpers/fetch';
import { scrollToBottom } from '../../helpers/scrollToBottom';
import { useNavigate } from 'react-router-dom';
//import { ProfilePage } from '../pages/ProfilePage';

export const SidebarChatItem = ({ usuario }) => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { chatActivo } = chatState;
    const [mensajesCargados, setMensajesCargados] = useState(false);
    const navigate = useNavigate();

    const onClick = async () => {

        dispatch({
            type: types.activarChat,
            payload: usuario.uid,
        })

        // cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${usuario.uid}`);



        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes,
        })

        setMensajesCargados(true);
    }

    useEffect(() => {
        if (mensajesCargados) {
            scrollToBottom('mensajes');
            setMensajesCargados(false); // Resetea el estado después de hacer scroll
        }
    }, [mensajesCargados]);

    const beProfile = () => {
        navigate('/profilecliente', { state: { usuario: usuario } });
    };



    return (
        <>
            <button onClick={beProfile}
                className="text-white bg-sky-700 hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
            >
                <span className="font-bold">Ver Perfil</span>
            </button>

            <div
                className={`chat_list ${(usuario.uid === chatActivo) && 'active_chat'} chat_people`}
                onClick={onClick}
            >
                <div className="chat_img">
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{usuario.nombre}</h5>
                    {
                        (usuario.online)
                            ? <span className="text-success">Online</span>
                            : <span className="text-danger">Offline</span>
                    }

                </div>
            </div>


        </>

    )
}


export default SidebarChatItem