import React, { useState } from 'react'
import './Navbar.css'
import { Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [opciones, setOpciones] = useState([
    'Inicio',
    'Nosotros',
    'Contacto',
    'Misión'
  ])
  const [mostrarOpciones, setMostrarOpciones] = useState(false)

  return (
    <>
      <div className='container-nav'>
        <h1>Consulta dental</h1>
        <button
          className='btn-hamb'
          onClick={() => setMostrarOpciones(prev => !prev)}
        >
          <Menu />
        </button>
        <ul className='container-opt dos'>
          {opciones.map((opcion, index) => (
            <li className='li-opt' key={index}><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={opcion === 'Inicio' ? '/' : `/${opcion}`}>{opcion}</NavLink></li>
          ))}
        </ul>
      </div>

      {/* Aparece o se oculta según el estado */}
      <ul className={`container-opt uno ${mostrarOpciones ? 'visible' : 'oculto'}`}>
        {opciones.map((opcion, index) => (
          <li className='li-opt' key={index}><Link to={opcion === 'Inicio' ? '/' : `/${opcion}`}>{opcion}</Link></li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
