import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({children}) {
  return (
      <Button variant="outlined">{children}</Button>
  );
}