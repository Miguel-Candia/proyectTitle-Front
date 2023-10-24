import React from 'react';
import { 
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/auth/*' element={<AuthRouter />} exact></Route>
          <Route path='/chat' element={<ChatPage />} exact></Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
  )
}
