import React from 'react'
import './css/tituloCard.css'

const TarjetaNombre = ({nombre}) => {
  return (
    <div>
           <p className='titulo'> {nombre} </p>
    </div>
  )
}

export default TarjetaNombre
