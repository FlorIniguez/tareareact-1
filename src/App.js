import './App.css';
import Card from './componentes/Tarjeta/Card';



function App() {
  const dataCard =  [ 
    {
      id: 1,
      imgUrl : 'https://ozarksfoodharvest.org/wp-content/uploads/2020/06/thomas-tucker-MNtag_eXMKw-unsplash-scaled.jpg',
      titulo: 'Pepperoni pizza',
      precio: '$19.99',
      antes: '$24.99'
    },
    {
      id: 2,
      imgUrl :'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
      titulo: '',
      precio: '$35.99',
      antes: '$44.99'
    },
    {
      id: 3,
      imgUrl : 'https://i0.wp.com/genprideseattle.org/wp-content/uploads/2019/09/thought-catalog-9aOswReDKPo-unsplash.jpg?resize=300%2C225&ssl=1',
      titulo: 'Avocado',
      precio: '$17.99',
      antes: '$20.99'
    },
    {
      id: 4,
      imgUrl : 'https://www.luxidgroup.com/hs-fs/hubfs/monika-grabkowska-TAj4X5-eRqE-unsplash.jpg?width=2000&height=3000&name=monika-grabkowska-TAj4X5-eRqE-unsplash.jpg',
      titulo: 'Bunch of Orange',
      precio: '$24.99',
      antes: '$29.99'
    }  ]
  return (
    <div className="lista-cards">
    {dataCard.map((card, id) => (
      <Card
        key={id}
        imgUrl={card.imgUrl}
        titulo={card.titulo}
        precio={card.precio}
        antes={card.antes}
      />
    ))}
  </div>
  )


}

export default App;
