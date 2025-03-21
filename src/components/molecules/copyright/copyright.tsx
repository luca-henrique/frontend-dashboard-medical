import { Link, Typography } from "@mui/material";

export function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "4px"
      }}
    >
      {'©'}
      <Link href="#"><b>Empresa X</b></Link> em parceria com a <Link href="#"><b>Lobby</b></Link>
    </Typography>
  );
}