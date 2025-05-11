import React, { useState } from 'react'
import './Navbar.css'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [opciones, setOpciones] = useState([
    'Nosotros',
    'Contacto',
    'Quienes somos'
  ])
  const [mostrarOpciones, setMostrarOpciones] = useState(false)

  return (
    <>
      {/* Hacer que las opciones se muestren cuando la pantalla esta mas grande */}
      <div className='container-nav'>
        <h1>Consulta dental</h1>
        <button
          className='btn-hamb'
          onClick={() => setMostrarOpciones(prev => !prev)}
        >
          <Menu />
        </button>

      </div>

      {/* Aparece o se oculta según el estado */}
      <ul className={`container-opt ${mostrarOpciones ? 'visible' : 'oculto'}`}>
        {opciones.map((opcion, index) => (
          <li className='li-opt' key={index}>{opcion}</li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
