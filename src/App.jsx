import { useContext, useState } from 'react'
import './App.css'
import NameContext from './NameContext'
import { useThemeConsumer } from './ThemeContext'
function App() {
  const consumer = useContext(NameContext)
  const themeConsume = useThemeConsumer();
  return (
    <>
     <h1>My name is {consumer.name} {themeConsume.sirName}</h1>
     <button onClick={()=>{themeConsume.updateName()}}>UpdateSirName</button>
    </>
  )
}

export default App
