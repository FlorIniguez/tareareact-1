import React from 'react'
import './css/imgCard.css'

const TarjetaImagen = ({imgUrl,titulo}) => {
  return (
    <div>
      <img className='img-card' src={imgUrl} alt={titulo} />
    </div>
  )
}

export default TarjetaImagen
