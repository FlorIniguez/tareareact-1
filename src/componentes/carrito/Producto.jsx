import React from 'react';

const Producto = (props) => {
    const {id, nombre, precio, imagen} = props.data;
    const addToCart = props.addToCart;

    return (
        <div className='col-sm-6 col-md-4'>
            <h4>{nombre}</h4>
            <img width={100} src={imagen} />
            <h5>$ {precio}</h5>
            <button onClick={()=>addToCart(id)} className='btn btn-success btn-sm '>Agregar</button>
        </div>
    );
}

export default Producto;