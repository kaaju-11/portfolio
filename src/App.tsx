import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from "styled-components";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'constants/theme';
import Home from 'pages/home';

function App() {
  return (
    <BrowserRouter>
    <Home />
       {/* <ThemeProvider theme={theme}>
        
       </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
