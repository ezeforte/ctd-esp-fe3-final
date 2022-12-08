import React from 'react'
import { useGlobaStates } from '../Context/Context'

const Home = () => {
    const {data} = useGlobaStates()
  return (
    <div className='card-section'>
        {data?.message.map(imagen => <div key={imagen} className='card'>
            <img src={imagen} alt='' width={200}/> 
            </div>)}
    </div>
  )
}

export default Home