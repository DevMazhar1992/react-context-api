import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NameContext from './NameContext.jsx'
import { ThemeProvider } from './ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NameContext.Provider value={{name:'Maaz'}}>
      <ThemeProvider>
      <App  />
      </ThemeProvider>
    </NameContext.Provider>
  </StrictMode>,
)
