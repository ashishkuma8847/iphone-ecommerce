import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/common/Header'
import Footer from './componentes/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signupforlogin from './componentes/SignUp/Signupforlogin'
import Wishlisthome from './componentes/Home/Wishlisthome'
import wishlistjson from './json/Wishlist.json'
import datapart2 from './json/WiishlistForyou.json'
import Errorpage from './componentes/ErrorPage/Errorpage'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Cart/Checkout'
import Account from './componentes/Account/Account'
import Contact from './pages/Contact'
import Loader from './pages/Loader/Loader'
import Gamepad from './componentes/ProductsDetalPage/Gamepad'
import Viewallprojects from './componentes/viewallprojects/Viewallprojects'
import ScrollToTop from './componentes/common/ScrollToTop'
const App = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // setTimeout(() => {
        setLoading(false);
      // }, 20000); 
    }, []);
  
  return (
    <>
<div>
      {loading && <Loader /> }
    </div>
    <BrowserRouter>
    <Header/>
    <ScrollToTop />
    <Routes>
      
      <Route path='/'    element={<Home/> }/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/> }/>
      <Route path='/signup' element={<Signup/> }/>
      <Route path='/signupforlogin' element={<Signupforlogin/>}/>
      <Route path='/Wishlist' element={<Wishlisthome data={wishlistjson} data2={datapart2}/>}/>
      <Route path='/Error' element={<Errorpage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/Account' element={<Account/>}/>
      <Route path='gamepad' element={<Gamepad/>}/>
      <Route path='/Viewallprojects' element={<Viewallprojects/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter></>
  )
}

export default App