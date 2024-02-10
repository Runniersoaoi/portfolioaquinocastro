import React, { useContext, useEffect } from 'react'
import '../Styles/Nav.css'
import { animacionNavBar } from '../helpers/animacionNavBar'
import zcqui from '../../public/zcqui-removebg.png';
import zcquilight from '../../public/zcquilightremovebglight.png'
import LenguageContext from '../context/lenguageContext';
import ThemeContext from '../context/themeContext';

const Nav = () => {

  const {texts, lenguage, handleLenguage} = useContext(LenguageContext)
  const {dark, handleTheme} = useContext(ThemeContext)

  useEffect(() => {
    animacionNavBar()
        
  return () => {
    window.removeEventListener('scroll', animacionNavBar);
    }
  }, [])

  return (
    <header className={!dark && 'clear-theme'}>
        <div className="container-div-nav">
            <div className='container-logo'>
              {dark ? <img src={zcqui} alt="logo-marca-personal-matias" /> : <img src={zcquilight} alt="logo-marca-personal-matias" />}
            </div>
            <div className='container-links'>
                <a className={!dark && 'clear-theme'} href="#home">{texts.navHome}</a>
                <a className={!dark && 'clear-theme'} href="#aboutMe">{texts.navAboutMe}</a>
                <a className={!dark && 'clear-theme'} href="#projects">{texts.navPortfolio}</a>
                <a className={!dark && 'clear-theme'} href="#contact">{texts.navContact}</a>
            </div>
            <div className='container-contexts'>
                <select className={!dark && 'clear-theme'} name="lenguage" id="" onChange={handleLenguage}>
                    <option className={!dark && 'clear-theme'} value="es">ES</option>
                    <option className={!dark && 'clear-theme'} value="en">EN</option>
                </select>
                <button onClick={handleTheme}>{dark ? <svg xmlns="http://www.w3.org/2000/svg"  fill={dark ? '#07103180' : '#F8FAFCDB'} viewBox="0 0 24 24" strokeWidth="1.5" stroke={dark ? '#a2ff7d' : '#00B5E8'} className="w-6 h-6 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill={dark ? '#07103180' : '#F8FAFCDB'} stroke={dark ? '#a2ff7d' : '#47ae1e'} viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg>
                }</button>
            </div>
        </div>
    </header>
  )
}

export default Nav