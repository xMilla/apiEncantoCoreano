import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CardComp from './CardComp';

class UsuariosComp extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props);
		this.state = {
			titulo: 'Usuarios',
			productos: [],
			//cargando: true,
			//siguientesProductos: '', 
			//cargandoMas: false,
		}
	}

	// Ciclo de vida
	componentDidMount () {
		console.log('Pasó por el componentDidMount()');
		
		fetch('http://localhost:3000/users/?format=json')
			.then(response => response.json())
			.then(data => {
                // Setear el estado
                console.log(data);
                
				this.setState({
					usuarios: data.data,
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


	// Render de componente
	render() {
		let { titulo, usuarios, count} = this.state;
		return (
			<React.Fragment>

				<CardComp
				  tituloCard={titulo}
				  total={count}
				/>
			
			</React.Fragment>
		);
	
	}
}
export default UsuariosComp;
