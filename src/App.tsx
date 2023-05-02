import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from "styled-components";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'constants/theme';

function App() {
  return (
    <BrowserRouter>
       <ThemeProvider theme={theme}>

       </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
