import { createContext, useEffect, useState } from "react";

const LenguageContext = createContext();

const defaultLenguage = 'es'

const defaultTexts = {
    en:{
        navHome: 'Home',
        navAboutMe: 'About me',
        navPortfolio: 'Portfolio',
        navContact: 'Contact',
        bannerGreeting: "Hi, I'm Matias 👋🏻",
        bannerTitle: 'FullStack Developer',
        bannerPosition: 'Software creation enthusiast',
        bannerBtnResumen: 'Resume',
        bannerBtnPortfolio: 'Portfolio',
        aboutTitle: 'About',
        aboutTexts: "Hello! I'm Matías Aquino, a systems engineering student from Peru. My passion lies in creating systems that can streamline and contribute to the development of businesses. I'm focused on becoming a fullstack developer. I have a solid understanding of HTML, CSS, and JavaScript for the frontend, I use Node.js for the backend, and I'm proficient in the React framework for building dynamic and interactive web applications. I'm constantly expanding my knowledge with new technologies and tools to deliver innovative solutions.",
        aboutEducation: 'Education:',
        aboutEnginnerInformatic: 'Engineer in Systems and Informatic',
        aboutUniversity: 'Continental University 2023 - Present',
        aboutDevelomenp: 'Software development',
        aboutSoftwareDevelomenp: 'Web Developer 2023 - Present',
        aboutTechStack: 'Tech Stack',
        workTitle: 'My Work',
        workCardFirstTitle: 'Gymnasium Alpha',
        workCardFirstText: 'Operational and Sales Software.',
        workCardSecondTitle: 'CRUD web',
        workCardSecondText: 'Web CRUD Software.',
        workCardThirtyTitle: 'Web calculator',
        workCardThirtyText: 'Calculator for basic operations.',
        workBtnCode: 'Code',
        workBtnDemo: 'Demo',
        workBtnComing: 'Coming soon...',
        contactTitle: 'Get in touch',
        contactMessage: "Don't be shy, and leave me a message",
        contactEmail: 'matiasaquinozc@gmail.com',
        contactLocation: 'Huancayo - Perú',
        contactLabelName: 'Name',
        contactLabelEmail: 'Email',
        contactLabelMessage: 'Message',
        contactBtnSend: 'Send',
        footerText: 'Made with ❤️ by zcqui',
        controlFormRequired: 'This field is required',
        controlFormMinLengthName: 'This field must be at least 2 characters',
        controlFormMaxLengthName: 'This field must have a maximum of 100 characters',
        controlFormEmail: 'This email is invalid',
        controlFormMinLengthMessage: 'This field must be at least 10 characters',
        controlFormMaxLengthMessage: 'This field must have a maximum of 500 characters',
    },
    es:{
        navHome: 'Inicio',
        navAboutMe: 'Sobre mi',
        navPortfolio: 'Proyectos',
        navContact: 'Contacto',
        bannerGreeting: "Hola, soy Matias 👋🏻",
        bannerTitle: 'FullStack Developer',
        bannerPosition: 'Amante de la informática',
        bannerBtnResumen: 'Curriculum',
        bannerBtnPortfolio: 'Proyectos',
        aboutTitle: 'Sobre mi',
        aboutTexts: "¡Hola! Soy Matías Aquino, estudiante de ingeniería de sistemas de Perú. Mi pasión radica en crear sistemas que puedan agilizar y contribuir al desarrollo de los negocios. Estoy enfocado en convertirme en un desarrollador fullstack. Tengo un conocimiento sólido de HTML, CSS y JavaScript para el frontend, uso Node.js para el backend y domino el marco React para crear aplicaciones web dinámicas e interactivas. Estoy constantemente ampliando mis conocimientos con nuevas tecnologías y herramientas para ofrecer soluciones innovadoras.",
        aboutEducation: 'Educación:',
        aboutEnginnerInformatic: 'Ingeniero de Sistemas e Informática',
        aboutUniversity: 'Universidad Continental 2023 - Presente',
        aboutDevelomenp: 'Desarrollador de software',
        aboutSoftwareDevelomenp: 'Desarrollo Web 2023 - Present',
        aboutTechStack: 'Stack de Tecnologías',
        workTitle: 'Mi trabajo',
        workCardFirstTitle: 'Gimnasio Alpha',
        workCardFirstText: 'Software operacional y de ventas.',
        workCardSecondTitle: 'CRUD web',
        workCardSecondText: 'Software CRUD web.',
        workCardThirtyTitle: 'Calculadora Web',
        workCardThirtyText: 'Calculadora para operaciones básicas',
        workBtnCode: 'Código',
        workBtnDemo: 'Demo',
        workBtnComing: 'Coming soon...',
        contactTitle: 'Contacto',
        contactMessage: "No dudes en dejarme un mensaje",
        contactEmail: 'matiasaquinozc@gmail.com',
        contactLocation: 'Huancayo - Perú',
        contactLabelName: 'Nombre',
        contactLabelEmail: 'Email',
        contactLabelMessage: 'Mensaje',
        contactBtnSend: 'Enviar',
        footerText: 'Hecho con ❤️ por zcqui',
        controlFormRequired: 'Este campo es requerido',
        controlFormMinLengthName: 'Este campo puede tener como mínimo 2 caracteres',
        controlFormMaxLengthName: 'Este campo puede tener como máximo 100 caracteres',
        controlFormEmail: 'Este email es inválido',
        controlFormMinLengthMessage: 'Este campo puede tener como mínimo 10 caracteres',
        controlFormMaxLengthMessage: 'Este campo puede tener como máximo 500 caracteres',
    }

}

const LenguageProvider = ({children}) =>{

    const [lenguage, setLenguage] = useState(defaultLenguage)
    const [texts, setTexts] = useState(defaultTexts[lenguage])

    const handleLenguage = (e) =>{
        setLenguage(e.target.value)
    }

    useEffect(() => {
        setTexts(defaultTexts[lenguage]);
    }, [lenguage]);
    
    
    return(<LenguageContext.Provider value={{texts, lenguage, handleLenguage}}>{children}</LenguageContext.Provider>)
}

export {LenguageProvider}
export default LenguageContext