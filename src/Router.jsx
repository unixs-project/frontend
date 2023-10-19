import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

export function Router() {
  return (
    <Routes>
      <Route element={<Login />} path='/' />
    </Routes>
  )
}