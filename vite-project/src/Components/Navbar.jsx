import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGlobaStates } from '../Context/Context'
import '../index.css'

const Navbar = () => {
    const { state, dispatch, setLoading } = useGlobaStates()
  return (

    <nav className='nav'>
    
      <Link to=".\">     Home     </Link>
      <Link to=".\contact">     Contact     </Link>
      <Link to=".\favs">     Favs    </Link>
        
        <button className='favButton' onClick={() => {
            
        }}>Cambiar tema</button>
    
    </nav>
  )
} 

export default Navbar