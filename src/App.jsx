import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/common/Header'
import Footer from './componentes/common/Footer'
import Home from './pages/Home'
import Contect from './pages/Contect'
import About from './pages/About'
import Signup from './pages/Signup'
import Signupforlogin from './componentes/SignUp/Signupforlogin'
import Wishlisthome from './componentes/Home/Wishlisthome'
import wishlistjson from './json/Wishlist.json'
import datapart2 from './json/WiishlistForyou.json'
import Errorpage from './componentes/ErrorPage/Errorpage'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Cart/Checkout'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'    element={<Home/> }/>
      <Route path='/contact' element={<Contect/> }/>
      <Route path='/about' element={<About/> }/>
      <Route path='/signup' element={<Signup/> }/>
      <Route path='/signupforlogin' element={<Signupforlogin/>}/>
      <Route path='/Wishlist' element={<Wishlisthome data={wishlistjson} data2={datapart2}/>}/>
      <Route path='/Error' element={<Errorpage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App