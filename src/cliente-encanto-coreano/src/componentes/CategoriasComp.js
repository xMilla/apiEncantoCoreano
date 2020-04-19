import React, { Component } from 'react';
import CardComp from './CardComp';

class CategoriasComp extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props);
		this.state = {
            titulo: 'Categorias',
            productos: [],
			categorias: [],
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
                //console.log(data);

				this.setState({
                    categorias: data.tipos,
                    productos: data.data,
					count: data.tipos.length, 
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

    totalByCategorias () {
        let {productos, categorias} = this.state;
        let totales = [{}];
        if(categorias.length !== 0){
            categorias.map((categoria) => {
                return( totales.push({
                         catego: categoria.desc,
                         totalProd:(productos.filter(prod => prod.tipoId === categoria.id)).length
                         })

                )
                 
             })
        }         
        return totales;
    }

	// Render de componente
	render() {
		let { titulo, count} = this.state;
		return (
			<React.Fragment>

				<CardComp
				  tituloCard={titulo}
				  total={count}
				/>
                
                <div>
                    <CardComp
                    tituloCard= 'Total de Prsoductos por Categoria'
                    totalA={this.totalByCategorias()}
                    />
                </div>
			

			</React.Fragment>
		);
	
	}
}
export default CategoriasComp;
