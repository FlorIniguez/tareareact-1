import React from 'react'
import Icono from './Icono'
import TituloTarjeta from './TituloTarjeta'
import  TextoParrafo from './TextoParrafo'
import './texto.css'



const  Texto = ({tarjetas}) => {
  return (
    <div className='contenedor-texto'>
        <Icono icono= {tarjetas.icono}/>
        <TituloTarjeta titulotext= {tarjetas.titulotext}/>
        <TextoParrafo textoParrafo= {tarjetas.textoParrafo}/>
       
    </div>
  )
}

export default Texto