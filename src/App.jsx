import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nostros from './pages/Nostros'
import Contacto from './pages/Contacto'
import Misión from './pages/Misión.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nostros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/misión' element={<Misión />} />
      </Routes>
    </>
  )
}

export default App
