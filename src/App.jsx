import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx' 
import { Home } from './pages/Home/Home.jsx'
import { Matters } from './pages/Matters/Matters.jsx'

import './App.css'

function App(){
  const [theme, setTheme ] = useState('light')

  function ThemeChange(){
    setTheme(theme => theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => document.documentElement.setAttribute('data-theme', theme), [theme])
  return(
    <>
      <Header
        theme = {theme}
        themeChange={ThemeChange}
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/materia/:id' element={<Matters/>}/>
      </Routes>
    </>
  )
}

export default App

