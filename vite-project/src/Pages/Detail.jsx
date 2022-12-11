import React from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()



  return (
    <div >

      <h1>Detail Dentist Id: {params.id} </h1>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}

      <img src="\public\images\doctor.jpg" alt='' width={100}/>

      
        
       

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        
        
        
    
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
  )
}

export default Detail