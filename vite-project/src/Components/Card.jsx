
import React, { useEffect, useState } from 'react'
import { useGlobaStates } from '../Context/Context'


const Card = ({ name, username, id }) => {

  const { data, state, loading, setLoading, dispatchFavs } = useGlobaStates()
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [state])

    const addFav = (imagen) => {
        dispatchFavs({type: 'ADD_FAV', payload: imagen})
    }


  return (
    <div className="card-section">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        { loading ? 'Cargando...' :
            
                data.map(i => <div key={i.id} className='card'>
                
                <img src="\public\images\doctor.jpg" alt='' width={100}/>
                <p>{i.name}</p>
                <p>{i.username}</p>
                <button onClick={() => addFav(i.id)}>⭐</button>
                </div>) 
            
        }
        
        
        
    </div>
  );
};

export default Card;





    

 