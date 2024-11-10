import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  

  return (
    <>
 <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/view/:id' element={<View/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wish' element={<Wishlist/>}/>
  </Routes>
  <Footer/>
  <ToastContainer/>
    </>
  )
}

export default App
