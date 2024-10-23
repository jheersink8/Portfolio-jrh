import './App.css'

import Nav from './components/Nav/Nav'
import Welcome from './components/Portfolio/Welcome'
import AboutMe from './components/Portfolio/AboutMe'
import Projects from './components/Portfolio/Projects'
import Resume from './components/Portfolio/Resume'
import Footer from './components/Footer/Footer'

import React, { useState } from 'react';
export const ThemeContext = React.createContext();

function App() {

  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        <Nav />
        <Welcome />
        <AboutMe />
        <Projects />
        <Resume />
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
