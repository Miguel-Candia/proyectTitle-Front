import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ChatPage } from "../pages/clientePage/ChatPage";
import { ProfilePageCliente } from '../pages/expertPage/ProfilePageClienteView'
import { ProfilePageExpert } from '../pages/clientePage/ProfilePageExpertView'

import { NosotrosPage } from '../pages/NosotrosPage';
import { ContactoPage } from '../pages/ContactoPage';
import { ChatExpert } from '../pages/expertPage/ChatExpert';
import { BilleteraExpert } from '../pages/expertPage/BilleteraExpert';
import { PerfilExpert } from '../pages/expertPage/PerfilExpert';
import { PerfilCliente } from '../pages/clientePage/Perfilcliente'
import { FormExpertPage } from '../pages/FormExpertPage';


export const AppRouter = () => {

  const { auth, verificaToken } = useContext(AuthContext);

  console.log(auth.experto);

  useEffect(() => {

    verificaToken();

  }, [verificaToken])


  if (auth.checking) {
    return <h1>Espere por favor</h1>
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} ></Route>

        <Route path='/nosotros' element={< NosotrosPage />} ></Route>

        <Route path='/contacto' element={< ContactoPage />} ></Route>

        <Route
          path="/formexpert"
          element={<FormExpertPage />}
        />


        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={auth} />}
        />

        

        <Route
          path="/chat"
          element={<PrivateRoute isAuthenticated={auth} component={ChatPage} />}
        />

        <Route
          path="/profilecliente"
          element={<PrivateRoute isAuthenticated={auth} component={ProfilePageCliente} />}
        />
        <Route
          path="/profileexpert"
          element={<PrivateRoute isAuthenticated={auth} component={ProfilePageExpert} />}
        />

        <Route
          path="/chatexpert"
          element={<PrivateRoute isAuthenticated={auth} component={ChatExpert} />}
        />
        <Route
          path="/perfilcliente"
          element={<PrivateRoute isAuthenticated={auth} component={PerfilCliente} />}
        />
        <Route
          path="/billeteraexpert"
          element={<PrivateRoute isAuthenticated={auth} component={BilleteraExpert} />}
        />
        <Route
          path="/perfilexpert"
          element={<PrivateRoute isAuthenticated={auth} component={PerfilExpert} />}
        />

        {/* <Route path='/chat' element={<ChatPage />} exact></Route> */}

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
