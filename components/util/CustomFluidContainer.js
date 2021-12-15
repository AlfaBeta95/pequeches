import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function CustomFluidContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className='p-5 sm:p-10 md:p-8'>
        <Box sx={{ bgcolor: '#eccece', height: '100%' }}  className="rounded-xl md:p-8 p-4">
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}