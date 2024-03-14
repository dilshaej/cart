
import './App.css'
import Footer from './components/Footer'
import Wishlist from './pages/Wishlist'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import { Navigate, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
  
   <Routes>
    <Route path ='/' element={<Home/>} />
    <Route path ='/wishlist' element={<Wishlist/>} />
    <Route path ='/cart' element={<Cart/>} />
    <Route path ='/view/:id' element={<View/>} />
    <Route path ='/*' element={<Navigate to={'/'}/>} />



   </Routes>
   <Footer/>
    </>
  )
}

export default App
