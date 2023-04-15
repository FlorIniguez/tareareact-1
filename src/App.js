import './App.css';
import Card from './componentes/Tarjeta/Card';
import { dataCard } from './componentes/data'; 
import Titulo from './componentes/Titulo principal/Titulo'
import Texto from './componentes/texto/Texto';
import { dataTexto } from './componentes/dataTexto';
import Titulotexto from './componentes/texto/Titulotexto';
import Carrito from './componentes/carrito/Carrito'



function App() {
  return (
    <>
    <Carrito/>
    <div className='tarjeta final'>
      <Titulo/>
      
    <div className="lista-cards">
   {dataCard.map(producto =>{
    return <Card producto = {producto} />
   }) 
   }
  </div>
  </div>

  <div>
  <Titulotexto/>

  <div className="info-card">
  {dataTexto.map(tarjetas =>{
    return <Texto tarjetas = {tarjetas} />
   
   }) 
    }
     </div>
  </div>
 
  </>
  )


}



export default App;
