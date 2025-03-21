import { alpha, Box, Stack } from "@mui/material";
import AppNavbar from "../../molecules/AppNavbar";
import SideMenu from "../../molecules/SideMenu";
import { Outlet } from "react-router";


interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      {/* AppNavbar Mobile */}
      <AppNavbar />
      {/* Main content */}
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
}