import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//components
//import Button from 'react-bootstrap/Button';
import ProductosComp from './componentes/ProductosComp';


function App() {
  return (
    
    
      <div className="container-fluid">
        
        <div className="header">
          <h1>Encanto Coreano</h1>
          <p>React - Appi</p>
        </div>
        <br/>
        <div className= 'row cardsita'>          
        <br/>
          <ProductosComp/>
        </div>

      </div>
    
  );
}

export default App;
