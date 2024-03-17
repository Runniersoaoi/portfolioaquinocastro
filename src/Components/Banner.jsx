import { useContext } from "react";
import "../Styles/Banner.css";
import LenguageContext from "../context/lenguageContext";
import ThemeContext from "../context/themeContext";
import FotoMatias from "../../public/foto-matias.jpg";
import { downloadPdf } from "../helpers/dowloadCV";

const Banner = () => {
  const { texts } = useContext(LenguageContext);
  const { dark } = useContext(ThemeContext);

  const goToProjects = () => {
    // Encontrar la sección con el ID "projects" y hacer scroll hasta ella
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`container-banner-section ${!dark && "clear-theme"}`}
    >
      <div className="container-div-banner-section">
        <div className={`container-left ${!dark && "clear-theme"}`}>
          <div className="container-banner-text">
            <p className={`greeting ${!dark && "clear-theme"}`}>
              {texts.bannerGreeting}
            </p>
            <p className={`job ${!dark && "clear-theme"}`}>
              {texts.bannerTitle}
            </p>
            <p className={`description ${!dark && "clear-theme"}`}>
              {texts.bannerPosition}
            </p>
          </div>
          <div className={`container-button-banner ${!dark && "clear-theme"}`}>
            <button
              className={`right ${!dark && "clear-theme"}`}
              onClick={downloadPdf}
            >
              <b>
                <p>{texts.bannerBtnResumen}</p>
              </b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={dark ? "#071031" : "#fefdfc"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#68e935"
                className="iconResume w-5 xl:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                ></path>
              </svg>
            </button>
            <button className="button-portfolio" onClick={goToProjects}>
              <b>
                <p>{texts.bannerBtnPortfolio}</p>
              </b>
              <svg
                className="iconPortfolio"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                stroke="#a2ff7d"
                fill="#fefdfc"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`container-right ${!dark && "clear-theme"}`}>
          <div className="container-img">
            <img src={FotoMatias} alt="fotografia-matias" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
