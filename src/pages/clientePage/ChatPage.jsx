import React, { useContext } from "react";

import '../../css/Chat.css'
import InboxPeople from "../../components/cliente/InboxPeople";
import Messages from "../../components/cliente/Messages";
import ChatSelect from "../../components/cliente/ChatSelect";
import { ChatContext } from "../../context/chat/ChatContext";
import NavbarPrivate from "../../components/cliente/NavbarPrivate";

export const ChatPage = () => {

    const { chatState } = useContext(ChatContext)

    return (
        <div>
            <NavbarPrivate/>
            <div className="messaging">
                <div className="inbox_msg">

                    <InboxPeople />


                    {
                        (chatState.chatActivo)
                            ? <Messages />
                            : <ChatSelect />
                    }







                </div>


            </div>
        </div>
    )

}