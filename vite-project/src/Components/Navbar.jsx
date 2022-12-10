import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGlobaStates } from '../Context/Context'
import '../index.css'

const Navbar = () => {
    const { state, dispatch, setLoading } = useGlobaStates()
  return (

    <nav className='nav'>
    
      <Link to=".\">     Home     </Link>
      <Link to=".\Contact">     Contact     </Link>
      <Link to=".\Favs">     Favs    </Link>
        
        <button className='favButton' onClick={() => {
            
        }}>Cambiar tema</button>
    
    </nav>
  )
} 

export default Navbar