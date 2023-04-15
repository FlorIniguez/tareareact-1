import { TYPES } from "./action"
//poner lista de productos

export const carritoInitialState = { 
    productos : [ 
    { 
    "id" : 1,
    "nombre":"short1",
    "precio" : 399,
    "descripcion": "Short color----",
    "imagen": "https://static.dafiti.com.ar/p/biffa-s-0459-729648-1-zoom.jpg"
},
{
    "id" : 2,
    "nombre":"short2",
    "precio" : 299,
    "descripcion": "Short color----",
    "imagen": "https://static.dafiti.com.ar/p/biffa-s-2387-994369-1-product.jpg"

},
{
    "id" : 3,
    "nombre":"short3",
    "precio" : 550,
    "descripcion": "Short camuflado",
    "imagen": "https://static.dafiti.com.ar/p/baby-rabbit-9232-208419-1-product.jpg"

},
{
    "id" : 4,
    "nombre":"short4",
    "precio" : 350,
    "descripcion": "Short color----",
    "imagen": "https://static.dafiti.com.ar/p/magic-disney-2287-077969-1-product.jpg"

},
{
    "id" : 5,
    "nombre":"short5",
    "precio" : 450,
    "descripcion": "Short color----",
    "imagen": "https://static.dafiti.com.ar/p/drb-5689-834729-1-product.jpg"

},
{
    "id" : 6,
    "nombre":"short6",
    "precio" : 599,
    "descripcion": "Short rosa",
    "imagen": "https://static.dafiti.com.ar/p/pro-one-0703-678359-1-product.jpg"

},
] ,
carrito: [],
};




export function carritoReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

            let nuevoItem = state.productos.find(producto => producto.id === action.payload)
            //console.log(nuevoItem)

            let itemEnCarrito = state.carrito.find(item => item.id === action.payload)

            return itemEnCarrito ? {
                ...state,
                carrito: state.carrito.map(item => item.id === nuevoItem.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            } : {
                ...state,
                carrito: [...state.carrito, { ...nuevoItem, cantidad: 1 }]
            }
        }

        case TYPES.REMOVE_ITEM: {
            let itemAEliminar = state.carrito.find(item => item.id === action.payload)

            return itemAEliminar.cantidad > 1 ? {
                ...state,
                carrito: state.carrito.map(item => item.id === itemAEliminar.id ? { ...item, cantidad: item.cantidad - 1 } : item)
            } : {
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemAEliminar.id)
            }
        }

        case TYPES.REMOVE_ALL_ITEMS: { 
            let itemAEliminar = state.carrito.find(item => item.id === action.payload)

            return{
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemAEliminar.id)
            }
        }

        case TYPES.CLEAR_CART: { 
            return carritoInitialState;
        }

        default: return state;
    }
}