import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Copyright = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={[
        {
          color: 'text.secondary',
        },
      ]}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Web Intelligence
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
