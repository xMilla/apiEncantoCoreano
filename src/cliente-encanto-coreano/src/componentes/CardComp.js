import React from 'react';
import Card from 'react-bootstrap/Card';

let CardComp = (props) => {
	console.log(props);
	return (
		
		
		<Card bg='success'
		text='dark'
		style={{ width: '18rem' }}>
			<Card.Header as="h5"> {props.tituloCard} </Card.Header>
			<Card.Body>
				<Card.Title>Total de {props.tituloCard} </Card.Title>
				<Card.Text>
					{props.total}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default CardComp;