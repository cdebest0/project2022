import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    palette: {
      lb: '#8ecae6'
      ,nb: '#219ebc'
      ,db: '#023047'
      ,lo: '#ffb703'
      ,no: '#fb8500',
    },
  },
});

function Footer(props) {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <Box height="100px" sx={{ bgcolor: 'palette.db', bottom: 0}} display="flex" >
          <Typography variant="body1" sx={{pt:5, pl: 5, color:'white'}}>
          Copyright © Team JavaCamp 2022
          </Typography>
      </Box>
      </ThemeProvider>
    </div>
  );
}

export default Footer;