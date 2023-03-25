import React from 'react'
import './titulotarjeta.css'

const TituloTarjeta = ({titulotext}) => {
  return (
    <h3 className='titulo-text'> {titulotext} </h3>
  )
}

export default TituloTarjeta