import React from 'react'
import './css/precio.css'

const TarjetaOferta = ({precio}) => {
  return (
    <div>
      <span className='precio'>{precio} </span>
    </div>
  )
}

export default TarjetaOferta
