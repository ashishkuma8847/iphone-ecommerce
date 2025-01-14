import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/common/Header'
import Footer from './componentes/common/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App