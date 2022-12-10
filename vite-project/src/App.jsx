import './App.css'
import Contact from './Pages/Contact'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Home from './Pages/Home'

import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {


  return ( 
    <>
      <Navbar/>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dentist' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
