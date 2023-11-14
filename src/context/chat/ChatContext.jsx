import React, { useReducer } from 'react'
import { createContext } from 'react';
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();

const initialState = {
    
    uid:'',
    chatActivo: null, //Id de quien yo quiero enviar el mensaje
    usuarios:[], //Todos los uduarios de la bd
    mensajes:[], // Chat Seleccionado


}



export const ChatProvider = ({children}) => {

    const [chatState, dispatch] = useReducer(chatReducer,initialState);

  return (
    <ChatContext.Provider value={{
        chatState,
        dispatch,

    }}>
        {children}

    </ChatContext.Provider>
  )
}
