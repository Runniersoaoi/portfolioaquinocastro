import React, { useContext } from 'react'
import '../Styles/Footer.css'
import LenguageContext from '../context/lenguageContext'
import ThemeContext from '../context/themeContext'

const Footer = () => {
  const {texts} = useContext(LenguageContext)
  const {dark} = useContext(ThemeContext)

  return (
    <footer className={`${!dark && 'clear-theme'}`}>
      {texts.footerText}
    </footer>
  )
}

export default Footer