import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

type Props = {};

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://freeyeti.net">
        Yeti blog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
