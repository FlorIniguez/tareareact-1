import React from 'react'
import './css/card.css'
import TarjetaNombre from './TarjetaNombre'
import TarjetaOferta from './TarjetaOferta'
import TarjetaPrecio from './TarjetaPrecio'
import TarjetaImagen from './TarjetaImagen'
import TarjetaBoton from './TarjetaBoton'




function Card({ producto }) {
  return (
    <>
      <div className='contenedor'>
        <TarjetaImagen imgUrl={producto.imgUrl} />
        <TarjetaNombre nombre={producto.titulo} />
        <div className='texto-card'>
          <TarjetaOferta precio={producto.precio} />
          <TarjetaPrecio antes={producto.antes} />
        </div>
        <TarjetaBoton />
      </div>

    </>
  )
};

export default Card
