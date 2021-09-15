import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyle } from './theme'
import useLocalStorage from './useLocalStorage'

const StyledApp = styled.div`

`;

function App() {

  const [theme, setTheme] = useLocalStorage("light");

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
    localStorage.setItem("dark", JSON.stringify(theme))
  }

  return (
    <ThemeProvider theme = { theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyle/>
        <h1>Hello World</h1>
        <button className="btn btn-info text-light" onClick={()=> themeToggler()}>Click Me</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
