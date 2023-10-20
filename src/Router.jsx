import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";

export function Router() {
  return (
    <Routes>
      <Route element={<Login />} path='/' />
    </Routes>
  )
}