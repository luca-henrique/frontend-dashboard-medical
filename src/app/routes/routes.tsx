import { Routes, Route } from "react-router";
import { Home } from "~/pages/home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}