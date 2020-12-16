import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //Crear lista de items
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camisa ReactJS', precio: 50},
    {id: 2, nombre: 'Camisa VueJS', precio: 55},
    {id: 3, nombre: 'Camisa NodeJS', precio: 40},
    {id: 4, nombre: 'Camisa JS', precio: 50}
  ]);

  //State para carrito de compra
  const [carrito, agregarProducto] = useState([]);

  //Obtener fecha
  let date = new Date().getFullYear()

  return (
    <div className="App">
      <Header 
        titulo= 'Tienda Virtual'
      />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          productos={productos} 
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto = {agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        date = {date}
      />
    </div>
  );
}

export default App;
