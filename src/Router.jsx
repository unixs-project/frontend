import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { MainHeader } from "./pages/Home/Home";




export function Router() {
  return (    
    <Routes>
      <Route element={<Login />} path='/' />
      <Route element={<MainHeader />} path='/home'/>          
    </Routes>
  )
}