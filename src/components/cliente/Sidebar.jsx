import React, { useContext } from 'react'
import SidebarChatItem from './SidebarChatItem'
import { ChatContext } from '../../context/chat/ChatContext'
import { AuthContext } from '../../auth/AuthContext';

const Sidebar = () => {

    const {chatState} = useContext(ChatContext);
    const {auth} = useContext(AuthContext);

  //  console.log(chatState);
    const usuarios = chatState.usuarios.length > 0 ? chatState.usuarios[0] : [];



    return (
        <div className="inbox_chat">
            {
                usuarios
                .filter( user => user.uid !== auth.uid && user.experto == true) // si son iguales los id filtra
                .map(( usuario ) => (                
                    <SidebarChatItem key={usuario.uid} usuario={usuario} />
                ))
            }

            {/*   <!-- Espacio extra para scroll -->*/}
            <div className="extra_space"></div>


        </div>

    )
}

export default Sidebar
