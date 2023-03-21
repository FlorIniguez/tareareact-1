import React from 'react'
import './card.css'




function Card (props) {
  const {imgUrl,titulo,precio,antes} = props;
  return (
    <>
  <div className='contenedor'>

    <img className='img-card' src={imgUrl} alt={titulo}/>
   
 
      <p className='titulo'> {titulo} </p>

      <div className='texto-card'>
      <span className='precio'>{precio} </span>
      <span className='antes'>{antes} </span>
      </div>
      <button className='btn'> Quick Shop </button>
      
  </div>
  

  </>
)};

export default Card
