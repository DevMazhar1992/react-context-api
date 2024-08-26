import { createContext, useContext, useState } from "react";

const ThemeContext=createContext()

export const ThemeProvider = ({children}) => {
    const [sirName, setSirName] = useState('Ali')
    const updateName = ()=>{
        setSirName('Khatik')
    }
     return (
      <ThemeContext.Provider value={{sirName , updateName }}>
        {children}
      </ThemeContext.Provider>
    )
}

export const useThemeConsumer = ()=>{
 return useContext(ThemeContext)
}
