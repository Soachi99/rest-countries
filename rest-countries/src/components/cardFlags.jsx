import React from "react";
import {Data} from './countries'
import { Card } from 'react-bootstrap';
import './cardFlags.css'

class flags extends React.Component {
    render() {
        return (
            <div className="flags-container">
                {Data.map(country => {
                    return (
                        <Card className="flags d-block mx-auto" style={{ width: '18rem' }} key={country.ID}>
                            <Card.Img variant="top" src={country.imagen} />
                            <Card.Body>
                                <Card.Title>{country.nombre}</Card.Title>
                                <Card.Text>
                                    <b> Population: </b> {country.poblacion} <br></br>
                                    <b> Region: </b> {country.region} <br></br>
                                    <b> Capital: </b> {country.capital} <br></br>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default flags;