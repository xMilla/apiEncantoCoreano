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
					 {props.total2 ?
					 	<div>
						 	<h6>Categoria = {props.total}</h6>
							<h6>Categoria = {props.total2}</h6>
							<h6>Categoria = {props.total3}</h6>					
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