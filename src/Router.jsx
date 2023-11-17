import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home'
import { RecoverPassoword } from './pages/RecoverPassword/RecoverPassword';
import { Register } from './pages/Register/Register';
import { NewFlow } from './pages/NewFlow/NewFlow';

export function Router() {
  return (
    <Routes>
      <Route element={<Login />} path='/' />
      <Route element={<Home />} path="/home"/>
      <Route element={<RecoverPassoword />} path="/recover-password" />
      <Route element={<Register />} path='/register' />
      <Route element={<NewFlow />} path='/new-flow'/>
    </Routes>
  )
}