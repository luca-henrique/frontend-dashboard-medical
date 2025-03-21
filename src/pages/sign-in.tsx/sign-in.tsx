import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ColorModeSelect from "../../theme/ColorModeSelect";

import { Card, SignInContainer } from "./styled";
import { Input } from "../../components/atoms/input/input";
import { useForm } from "react-hook-form";
import { Copyright } from "../../components/molecules/copyright/Copyright";

export default function SignIn() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: "100%",
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            textAlign: "center",
          }}
        >
          Entrar
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <Input
            label="Email"
            control={control}
            error={!!errors.root}
            helperText={errors.root?.message}
            color={!!errors.root ? "error" : "primary"}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
          />
          <Input
            label="Password"
            control={control}
            error={!!errors.root}
            helperText={errors.root?.message}
            color={!!errors.root ? "error" : "primary"}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembre de mim"
          />
          <Button fullWidth variant="contained">
            Entrar
          </Button>
          <Link
            component="button"
            type="button"
            variant="body2"
            sx={{ alignSelf: "center" }}
          >
            Esqueceu sua senha?
          </Link>
        </Box>
        <Divider>or</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ textAlign: "center" }}>
            Não tem uma conta?{" "}
            <Link href="#" variant="body2" sx={{ alignSelf: "center" }}>
              Inscreva-se
            </Link>
          </Typography>
        </Box>
      </Card>
      <Copyright />
    </SignInContainer>
  );
}
