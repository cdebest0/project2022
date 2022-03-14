import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style.css'
import App from './App';
import {
          createTheme,
          ThemeProvider
  } from '@mui/material'

const theme = createTheme({
  typography : {
      fontFamily : 'Bold'
  },
  palette: {
    primary: {
      main: '#FF6D00',
      darker : '##ff6f00',
    },
    jinOrainge: {
      main: '#FF6D00',
    },
    orangeSeconds: {
      main: '#FF8500',
    },
    blueFirst: {
      main: '#00B4D8',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);