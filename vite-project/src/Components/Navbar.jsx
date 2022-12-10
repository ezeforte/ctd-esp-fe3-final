import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGlobaStates } from '../Context/Context'

const Navbar = () => {
    const { state, dispatch, setLoading } = useGlobaStates()
  return (

    <nav>
    
      <Link to=".\">   Home   </Link>
      <Link to=".\Contact">   Contact   </Link>
      <Link to=".\Favs">   Favs   </Link>
        
        <button onClick={() => {
            
        }}>Change theme</button>
    
    </nav>
  )
} 

export default Navbar