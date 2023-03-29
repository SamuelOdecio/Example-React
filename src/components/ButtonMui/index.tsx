import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonProps = {
    text: string,
    type: "text" | "contained" | "outlined",
}

export default function BasicButtons(props: ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={props}></Button>
      <Button variant={props}></Button>
      <Button variant={props}></Button>
    </Stack>
  );
}

