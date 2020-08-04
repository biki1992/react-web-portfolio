import React, {useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import '../src/component/css/default.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './component/globalStyle';
import { blueTheme, greenTheme, purpleTheme, lightTheme } from './component/theme'
import HeaderComponent from './component/HeaderComponent';
import AboutComponent from './component/AboutComponent';
import ContactComponent from './component/ContactComponent';
import ProjectComponent from './component/ProjectComponent';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const changeTheme = (mode) => {
    if(mode === "light"){
      setTheme(lightTheme);
    }
    if(mode === "green"){
      setTheme(greenTheme);
    }
    if(mode === "blue"){
      setTheme(blueTheme);
    }
    if(mode === "purple"){
      setTheme(purpleTheme);
    }
    localStorage.setItem("theme", mode);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div className="App">
          <HeaderComponent changeTheme={changeTheme}/>
          <AboutComponent />
          <ProjectComponent />
          <ContactComponent />
        </div>
    </ThemeProvider>

  );
}

export default App;
