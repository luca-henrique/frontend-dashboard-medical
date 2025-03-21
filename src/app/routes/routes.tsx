import { Routes, Route } from "react-router";
import SignIn from '../../pages/sign-in.tsx/sign-in'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />
    </Routes>
  )
}