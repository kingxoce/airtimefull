import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
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

    const [detalles, setDetalles] = useState([]);
    const [actividad, setActividad] = useState([]);
    const {id} = useParams();
    const [prodetalles, setProdetalles] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:4000/detalles/'+id)
    .then(res => setDetalles(res.data)
    .catch(err => console.log(err)));

    },[])

    useEffect(()=> {
        axios.get('http://localhost:4000/actividad/'+id)
        .then(res => setActividad(res.data)
        .catch(err => console.log(err)));
    
        },[])






    return (
        <div className='detalles'>
            <div className='container'>
                <Row>
                    <Col sm={8}>
                        <div className='detalle-viaje'>
                            {
                                detalles.map((det, i)=>{
                                    return(
                                        <>
                                        <h1 key={i}>
                                           {det.detalle}
                                        </h1>
                                   
                                   <h4>
                                   Incluye:
                               </h4>
                               <ListGroup>
                              {det.incluye_vuelo == '1' && <ListGroup.Item><BsFillCheckCircleFill className='check'/><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                </svg>INCLUYE VUELO</ListGroup.Item>}
                              {det.incluye_alojamiento == '1' && <ListGroup.Item><BsFillCheckCircleFill className='check'/><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                            </svg>   INCLUYE ALOJAMIENTO</ListGroup.Item>}
                              {det.incluye_alimento === '1' && <ListGroup.Item><BsFillCheckCircleFill className='check'/><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-egg-fried" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
                                </svg>   INCLUYE ALIMENTO</ListGroup.Item>}
                              {det.incluye_transporte == '1' && <ListGroup.Item><BsFillCheckCircleFill className='check'/><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
                                <path d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5-2h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z"/>
                                </svg>   INCLUYE TRANSPORTE</ListGroup.Item>}
                              {det.incluye_guia == '1' && <ListGroup.Item><BsFillCheckCircleFill className='check'/><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-person-vcard" viewBox="0 0 16 16">
                                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
                                </svg>  INCLUYE GUIA</ListGroup.Item>}
   
                               </ListGroup>   
                                   </>
                                   )
                                })
                            }

                                <h5>Actividades</h5>
{
                                actividad.map((det, i)=>{
                                    return(
                                        <>
                            <Accordion defaultActiveKey="1" className='acordeon'>
                                <Accordion.Item eventKey={det.idactividad}>
                                    <Accordion.Header>{det.detalle1}</Accordion.Header>
                                    <Accordion.Body>
                                    {det.detalle2}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
  


                                   </>
                                   )
                                })
                            }





                           
                            
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