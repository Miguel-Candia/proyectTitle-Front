import React, { useContext } from "react";
import NavbarExpert from '../../components/experto/NavbarExpert'
import InboxPeople from '../../components/experto/InboxPeople'
import '../../css/Chat.css'
import Messages from "../../components/cliente/Messages";
import ChatSelect from "../../components/cliente/ChatSelect";
import { ChatContext } from "../../context/chat/ChatContext";


export const ChatExpert = () => {

  const { chatState } = useContext(ChatContext)
  return (
    <div>
        <NavbarExpert/>
        <InboxPeople />
        {
                        (chatState.chatActivo)
                            ? <Messages />
                            : <ChatSelect />
                    }
      
    </div>
  )
}
