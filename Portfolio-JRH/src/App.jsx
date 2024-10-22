import './App.css'


import Nav from './components/Nav/Nav'
import Welcome from './components/Portfolio/Welcome'
import AboutMe from './components/Portfolio/AboutMe'
import Projects from './components/Portfolio/Projects'
import Resume from './components/Portfolio/Resume'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <Welcome />
      <AboutMe />
      <Projects />
      <Resume />
      <Footer />
    </>
  )
}

export default App
