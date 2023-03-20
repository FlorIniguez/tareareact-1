import React from 'react'
import './card.css'




function Card (props) {
  const {imgUrl,titulo,precio,antes} = props;
  return (
    <>
  <div className='contenedor'>

    <img className='img-card' src={imgUrl} alt={titulo}/>
   
    <div className='texto-card'>
      <p> {titulo} </p>
      <h3 className='precio'>{precio} </h3>
      <h3 className='antes'>{antes} </h3>
      </div>
  </div>
  

  </>
)};

export default Card
