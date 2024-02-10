import { Children, createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) =>{
    const [dark, setDark] = useState(true)

    const handleTheme = () =>{
        if(dark == true){
            setDark(false)
        } else {
            setDark(true)
        }
    }

    return(<ThemeContext.Provider value={{dark, handleTheme}}>{children}</ThemeContext.Provider>)
}

export {ThemeProvider}
export default ThemeContext