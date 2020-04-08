import React from 'react';
import Card from 'react-bootstrap/Card';

let CardDetailComp = (props) => {
	console.log(props);
	return (
		
        <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>{props.titulo}</Card.Header>
            <Card.Body>
            <Card.Title>Detalle {props.tituloCard}</Card.Title>
                {props.detalles ? 
                    <Card.Text>
                        <p>{props.detalles.id} - {props.detalles.nombre}</p>
                        <p>{props.detalles.descLarga}</p>
                        <a href={props.detalles.detail} target="_blank" rel="noopener noreferrer"> Detalle </a>
                        <br/>
                        <a href={props.detalles.foto} target="_blank" rel="noopener noreferrer"> Foto </a>
                    </Card.Text>
                :
                    <Card.Text>
                        <ul>
                        {props.productos.map((unProducto, indx) => {
                            return(
                                <li key={indx}>
                                <p scope="row">{unProducto.id}</p>
                                <p>{unProducto.nombre}</p>
                                <p>{unProducto.descLarga}</p>
                                <p>
                                    <a href={unProducto.detail} target="_blank" rel="noopener noreferrer">
                                    Detalles
                                    </a>
                                </p>
                                </li>
                                
                            )
                            })
                        }
                        </ul>
                    </Card.Text>
                    }
                </Card.Body>
        </Card>
    )}
    
export default CardDetailComp;