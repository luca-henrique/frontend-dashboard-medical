import { Box } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import { grey } from "@mui/material/colors";
import { Controller } from "react-hook-form";



export interface ICheckProduct {
  checked: boolean;
}

export const CheckProduct = ({ checked }: ICheckProduct) => {
  const styles = checked
    ? {
      bgcolor: "#04DDB3",
      border: "1px solid transparent",
    }
    : {
      bgcolor: "#fff",
      border: `1px solid ${grey[200]}`,
    };




  return (
    <Box
      {...styles}
      borderRadius={40}
      height={40}
      width={40}
      position="absolute"
      top={22}
      right={26}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {checked && (

        <CheckIcon

          sx={{ color: "#fff", fontSize: 28 }}
        />
      )}




    </Box>
  );
};
