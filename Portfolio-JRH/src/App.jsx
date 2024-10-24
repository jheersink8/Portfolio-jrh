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

  // Theme for master background //
  const lightGradient = "linear-gradient(320deg, rgba(179,177,0,1) 0%, rgba(61,186,230,1) 29%, rgba(143,236,255,1) 67%)";
  const darkGradient = "linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(21,93,159,1) 50%, rgba(12,125,148,1) 100%)";
  const masterBackground = darkTheme ? darkGradient : lightGradient;


  return (
      <div style={{ background: masterBackground }}>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }} >
        <Nav />
        <div className='p-4'></div>
        <Welcome />
        <AboutMe />
        <Projects />
        <Resume />
        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
