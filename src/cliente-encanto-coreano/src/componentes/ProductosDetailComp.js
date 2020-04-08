import React, { Component } from 'react';
import CardDetailComp from './CardDetailComp';

class ProductosDetailComp extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props);
		this.state = {
			titulo: 'Productos',
			productos: [],
			//cargando: true,
			//siguientesProductos: '', 
			//cargandoMas: false,
		}
	}

	// Ciclo de vida
	componentDidMount () {
		console.log('Pasó por el componentDidMount()');
		
		fetch('http://localhost:3000/products/?format=json')
			.then(response => response.json())
			.then(data => {
                // Setear el estado
				console.log(data);
				console.log('pop');
				
                
				
				this.setState({
					productos: data.data,
					count: data.count, 
					//scargando: false,
					//siguientesProductos: data.detail
				})
				
			})
			.catch(error => console.log(error));
	}
	
	componentDidUpdate () {
		console.log('Pasó por el componentDidUpdate()');
	}

	// Event Handlers
	/*cargarMasProductos () {
		this.setState({ cargandoMas: true });

		let { siguientesProductos, Productos } = this.state;
		if (siguientesProductos != null) {
			fetch(siguientesProductos)
				.then(response => response.json())
				.then(data => {
					// Setear el estado
					this.setState({
						Productos: [...Productos, ...data.results],
						siguientesProductos: data.next,
						cargandoMas: false,
					})
				})
				.catch(error => console.log(error));
		}
	}*/
 
	ultimoProd(){
		let { productos } = this.state;
		console.log('paso por ultimo prds');
		
		if(productos.length !== 0){
			return (productos.pop());
		}
		else{
			return('nada vaico');
        }
    }

    totalByCategorias (tipoId) {
        let {productos} = this.state;
        let totales = productos.filter(prod => prod.tipoId === tipoId)
        return totales.length;
    }    
		
		
	


	// Render de componente
	render() {
		let { titulo, productos} = this.state;
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className= 'row' >

					
						<div className='col-lg-6'> 	
					        <CardDetailComp
	    					    titulo={titulo}
                                tituloCard='del ultimo Producto Creado'
                                detalles={ this.ultimoProd()}   
			        		/>
					    </div>
                        

                        <div className='col-lg-6'> 
                            <CardDetailComp
                                titulo={titulo}
                                tituloCard='de Todos Los Productos'
                                productos={ productos }
                            />
                        </div>
					</div>
				</div>
				

				
			</React.Fragment>
		);
	
	}
}
export default ProductosDetailComp;
