import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/common/Header'
import Footer from './componentes/common/Footer'
import Home from './pages/Home'
import Contect from './pages/Contect'
import About from './pages/About'
import Signup from './pages/Signup'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/contact' element={<Contect/> }/>
      <Route path='/about' element={<About/> }/>
      <Route path='/signup' element={<Signup/> }/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App