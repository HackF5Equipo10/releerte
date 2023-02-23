import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

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
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
