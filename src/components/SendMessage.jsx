import React, { useContext, useState } from 'react'
import {SocketContext} from '../context/SocketContext'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

const SendMessage = () => {

    const [mensaje,setMensaje] = useState('');
    const { socket } = useContext(SocketContext);
    const { auth } = useContext(AuthContext);
    const { chatState } = useContext(ChatContext);



    const onChange = ({target}) =>{
        setMensaje(target.value)
    }

    const onSubmit = (ev) =>{
        ev.preventDefault();

        if(mensaje.length === 0){ return;}

        setMensaje('');

        // Todo: emitir event de socket para enviar mensaje
        // {
        //     de:// UID de usuario enviando mensaje
        //     para:// UID del usuario q recibe el mensaje
        //     mensaje: // lo q quiere enviar
        // }
        socket.emit('mensaje-personal',{
            de: auth.uid,
            para: chatState.chatActivo,
            mensaje
        })

        // hacer dispatch del mensaje

    }


    return (
        <form onSubmit={onSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input 
                    type="text" 
                    className="write_msg" 
                    placeholder="Mensaje..." 
                    value={mensaje}
                    onChange={onChange}
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SendMessage
