import React from 'react';
import Card from 'react-bootstrap/Card';

let CardComp = (props) => {
	console.log(props);
	return (
		
		
		<Card bg='danger'
		text='dark'
		style={{ width: '18rem' }}>
			<Card.Header as="h5"> {props.tituloCard} </Card.Header>
			<Card.Body>
				<Card.Title>Total de {props.tituloCard} </Card.Title>
				<Card.Text>
					 
					 { props.totalA ?
					 	<div>
							 {props.totalA.map ((tot,indx) =>{
								return (									 
									<h6 key={indx}>Categoria {tot.catego} = {tot.totalProd} </h6>
								);
							 }
							)
							}	
					 	</div>
						:
						<h6>Total = {props.total}</h6>
					 }

				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default CardComp;