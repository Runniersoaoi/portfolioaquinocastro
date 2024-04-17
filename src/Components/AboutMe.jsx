import { useContext } from 'react'
import '../Styles/AboutMe.css'
import LenguageContext from '../context/lenguageContext'
import ThemeContext from '../context/themeContext'
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const AboutMe = () => {
  const {texts} = useContext(LenguageContext)
  const {dark} = useContext(ThemeContext)

  return (
    <section id='aboutMe' className={`container-about-me ${!dark && 'clear-theme'}`}>
      <div className={`container-about-me-div ${!dark && 'clear-theme'}`}>
        <h2 className={`title-aboutme-section ${!dark && 'clear-theme'}`}>{texts.aboutTitle}</h2>
        <p className={`about-me-text ${!dark && 'clear-theme'}`}>{texts.aboutTexts}</p>
        <div className={`container-education-techstack ${!dark && 'clear-theme'}`}>
          <div className='container-education'>
            <h3 className={`${!dark && 'clear-theme'}`}>{texts.aboutEducation}</h3>
            <ul className={`${!dark && 'clear-theme'}`}>
              <li>
                <p className={`title-education ${!dark && 'clear-theme'}`}>{texts.aboutEnginnerInformatic}</p>
                <em><p className={`${!dark && 'clear-theme'}`}>{texts.aboutUniversity}</p></em>
              </li>
              <li>
                <p className={`title-education ${!dark && 'clear-theme'}`}>{texts.aboutDevelomenp}</p>
                <em><p className={`${!dark && 'clear-theme'}`}>{texts.aboutSoftwareDevelomenp}</p></em>
              </li>
            </ul>
          </div>
          <div className={`container-techStack ${!dark && 'clear-theme'}`}>
            <h3 className={`${!dark && 'clear-theme' }`}>{texts.aboutTechStack}</h3>
            <div className={`container-techs ${!dark && 'clear-theme'}`}>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <FaHtml5 className={`${!dark && 'clear-theme icon-height'}`}/> 
                <p className={`${!dark && 'clear-theme'}`}>HTML</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <FaCss3Alt className={`${!dark && 'clear-theme icon-height'}`}/>
                <p className={`${!dark && 'clear-theme'}`}>CSS</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <IoLogoJavascript className={`${!dark && 'clear-theme icon-height'}`}/>
                <p className={`${!dark && 'clear-theme'}`}>JavaScript</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <FaReact className={`${!dark && 'clear-theme icon-height'}`}/>
                <p className={`${!dark && 'clear-theme'}`}>React</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <SiTailwindcss className={`${!dark && 'clear-theme icon-height'}`}/>
                <p className={`${!dark && 'clear-theme'}`}>Tailwind</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <FaGitAlt className={`${!dark && 'clear-theme icon-height'}`}/>
                <p className={`${!dark && 'clear-theme'}`}>Git</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <FaGithub className={`${!dark && 'clear-theme icon-height'}`}/>
                <p className={`${!dark && 'clear-theme'}`}>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe