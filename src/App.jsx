import './App.css'
import AboutMe from './Components/AboutMe'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Portfolio from './Components/Portfolio'
import { LenguageProvider } from './context/lenguageContext'
import { ThemeProvider } from './context/themeContext'

function App() {

  return (
    <>
    <ThemeProvider>
      <LenguageProvider>
          <Nav/>
          <Banner/>
          <AboutMe/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </LenguageProvider>
    </ThemeProvider>
    </>
  )
}

export default App
