import React from 'react';
import Card from 'react-bootstrap/Card';

let CardProdComp = (props) => {
	console.log(props);
	return (
		
        <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>{props.titulo}</Card.Header>
            <Card.Body>
            <Card.Title>Detalle {props.tituloCard}</Card.Title>
                <Card.Text>
                    <ul>
                    {props.prodcutos.map((unProducto, indx) => {
                        return(
                                <li key={indx}>
                                <li scope="row">{unProducto.id}</li>
                                <li>{unProducto.nombre}</li>
                                <li>{unProducto.descLarga}</li>
                                <li>
                                    <a href={unProducto.detail} target="_blank" rel="noopener noreferrer">
                                    Detalles
                                    </a>
                                </li>
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
export default CardProdComp;