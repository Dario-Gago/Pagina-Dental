import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nostros from './pages/Nostros'
import Contacto from './pages/Contacto'
import Misión from './pages/Misión.jsx'
import Navbar from './components/layout/Navbar/Navbar.jsx'
import { Footer } from './components/layout/Footer/Footer.jsx'
const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nostros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/misión' element={<Misión />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
