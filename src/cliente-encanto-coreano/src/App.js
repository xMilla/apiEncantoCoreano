import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//components
//import Button from 'react-bootstrap/Button';
import ProductosComp from './componentes/ProductosComp';
import UsuariosComp from './componentes/UsuariosComp';
import CategoriasComp from './componentes/CategoriasComp';

function App() {
  return (
      
    <div className="container-fluid">
        <div className=' miBody'>    
          
          <div className="header">
            <h1>Encanto Coreano</h1>
            <p>React - Appi</p>
          </div>
          <br/>
        
         <div className= 'row cardsita myBody'>          
            <ProductosComp/>
            <UsuariosComp/>
            <CategoriasComp/>
          </div>

        </div>    
    </div>
  );
}

export default App;
