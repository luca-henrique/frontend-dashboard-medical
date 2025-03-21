import { Routes, Route } from "react-router";
import { Home } from "../../pages/home/home";
import SignIn from '../../pages/sign-in.tsx/sign-in'
import Dashboard from "../../pages/dashboard/Dashboard";
import Checkout from "../../pages/checkout/checkout"


export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}