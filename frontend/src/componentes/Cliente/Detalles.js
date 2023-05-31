import React, { useEffect, useState } from "react";
import axios from "axios";
import './Detalles.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';

const Detalles = () => {

    const [detalles, setDetalles] = useState([])

    useEffect (() => {
        const obtenerDetalles = async() =>{
            const url = 'http://localhost:4000/productos';
            const result = await axios.get(url);

            setDetalles(result.data)
            
        }
        obtenerDetalles()
    },[]);
    
    console.log(detalles)

    const [prodetalles, setProdetalles] = useState([])

    useEffect (() => {
        const obtenerProDetalles = async() =>{
            const url = 'http://localhost:4000/productos/detalle';
            const result = await axios.get(url);

            setProdetalles(result.data)
            
        }
        obtenerProDetalles()
    },[]);

    return (
        <div className='detalles'>
            <div className='container'>
                <Row>
                    <Col sm={8}>
                        <div className='detalle-viaje'>
                            {
                                detalles.map((det, i)=>{
                                    return(
                                        <h1 key={i}>
                                            {det.producto}
                                        </h1>
                                    )
                                })
                            }
                            <h4>
                                Incluye:
                            </h4>
                            <ListGroup>
                                <ListGroup.Item><BsFillCheckCircleFill className='check'/>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item><BsFillCheckCircleFill className='check'/>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item><BsFillCheckCircleFill className='check'/>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item><BsFillCheckCircleFill className='check'/>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item><BsFillCheckCircleFill className='check'/>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <h5>Actividad</h5>
                            <Accordion defaultActiveKey="0" className='acordeon'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Biotopo del Quetzal y Orquideario</Accordion.Header>
                                    <Accordion.Body>
                                    Recorrido por Biotopo del Quetzal Ranchitos del Quetzal <br></br>
                                        En este lugar se puede apreciar el ave indiana símbolo nacional llamado QUETZAL,
                                        luego continuamos a Cobán y visitaremos el Orquideario.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Río Cahabón y Semuc Champey</Accordion.Header>
                                    <Accordion.Body>
                                        Exploración a Río Cahabón y las pozas color turquesas de Semuc Champey y 
                                        retorno a ciudad Guatemala
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <h5>Restricciones:</h5>
                                <ListGroup>
                                    <ListGroup.Item><BsFillCircleFill className='check'/>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item><BsFillCircleFill className='check'/>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item><BsFillCircleFill className='check'/>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item><BsFillCircleFill className='check'/>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item><BsFillCircleFill className='check'/>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Form.Group className="mb-3" id="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="email" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3" id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="ejemplo@gmail.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" id="nombre">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="number" placeholder="Telefono" />
                            </Form.Group>
                            <Form.Group id="fechaSalida">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="date" name="fechaSalida" placeholder="Salida" />
                            </Form.Group>
                            <Form.Group id="fechaRegreso">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="date" name="fechaRegreso" placeholder="Regreso" />
                            </Form.Group>
                            <InputGroup className="mb-3 comentario" id="comentario">
                                <Form.Control className="w-50" as="textarea" placeholder='Comentario' rows="5" />
                            </InputGroup>
                            <Button variant="warning" type="submit">
                                Solicitar Cotizacion
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Detalles