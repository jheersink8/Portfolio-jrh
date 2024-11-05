import '../src/assets/css/App.css';
import '../src/assets/css/themeStyle.css';
import '../src/assets/css/style.css';
import '../src/assets/css/animationStyle.css';

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
  const masterBackground = darkTheme ? 'darkGradientBackground' : 'lightGradientBackground';

  return (
    <div className={masterBackground}>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }} >
        <Nav />
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