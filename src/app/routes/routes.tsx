import { Routes, Route } from "react-router";
import Dashboard from "../../pages/_dashboard/dashboard/dashboard"

import { DashboardLayout } from "../../components/layouts/dashboard-layout/dashboard-layout";

import { SignIn } from '../../pages/auth/sign-in/sign-in'
import { SignUp } from "../../pages/auth/sign-up/sign-up";
import { RecoveryAccount } from "../../pages/auth/recovery-account/recovery-account";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="recovery-account" element={<RecoveryAccount />} />


      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

    </Routes>
  )
}