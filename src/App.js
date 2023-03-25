import './App.css';
import Card from './componentes/Tarjeta/Card';
import { dataCard } from './componentes/data'; 
import Titulo from './componentes/Titulo principal/Titulo'
import Texto from './componentes/texto/Texto';
import { dataTexto } from './componentes/dataTexto';
import Titulotexto from './componentes/texto/Titulotexto';



function App() {
  
  return (
    <>
    <div className='tarjeta final'>
      <Titulo/>
      
    <div className="lista-cards">
   {dataCard.map(producto =>{
    return <Card producto = {producto} />
   }) 
   }
  </div>
  </div>

  <div className='card-2'>
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
