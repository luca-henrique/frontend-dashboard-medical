import { Routes, Route } from "react-router";
import SignIn from '../../pages/sign-in.tsx/sign-in'
import Dashboard from "../../pages/_dashboard/dashboard/dashboard"

import { DashboardLayout } from "../../components/layouts/dashboard-layout/dashboard-layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

    </Routes>
  )
}