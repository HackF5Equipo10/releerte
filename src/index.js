import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
/* primary: F28C81 (a shade of pink)
secondary: 8AC6BF (a shade of teal)
success: 7C96A8 (a shade of blue-gray)
error: red[500] (a shade of red)
warning: F0E5D6 (a shade of pale yellow)
info: 01395C (a shade of dark blue) */
const theme = createTheme({
  palette: {
    primary: {
      main: '#F28C81',
    },
    secondary: {
      main: '#8AC6BF',
    },
    success: {
      main: '#7C96A8',
    },
    error: {
      main: red[500],
    },
    warning: {
      main: '#F0E5D6',
    },
    info: {
      main: '#01395C',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '3rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '2.5rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal',
      fontSize: '1rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    body2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal',
      fontSize: '0.9rem',
      color: '#01395C',
      marginBottom: '1rem',
    },
    subtitle1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#8AC6BF',
      marginBottom: '1rem',
    },
    subtitle2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      color: '#8AC6BF',
      marginBottom: '1rem',
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '1rem',
      textTransform: 'none',
    },
   
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <Router>
      <App />
     </Router>
   </ThemeProvider>
  </React.StrictMode>
);

