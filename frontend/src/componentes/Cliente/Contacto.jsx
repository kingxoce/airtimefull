import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contacto.css';
import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contacto from '../Imagenes/contacto.jpg'

const Contacto = () => {
    return (
        <div className="contacto">
            <Navbar />
                <div className='cont-contacto'>
                    <h1>Contacta con Nosotros</h1>
                    <h5><NavLink to="/">Home</NavLink>|Contactanos</h5>
                </div>
                <div className='info-contacto'>
                    <h1>¡Ponerse en contacto!</h1>
                    <p> Nos encantaría ayudarte a planificar tu próximo viaje y brindarte una experiencia excepcional. </p>
                </div>
                <Row className="formulario-contacto">
                    <Col sm>
                        <div className='imagen'>
                            <img alt='contacto' className="contacto" src={contacto}/>
                        </div>
                    </Col>
                    <Col sm>
                        <Row>
                            <Col sm>
                                <Form.Label htmlFor="nombre">Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="contacto-nombre"
                                />
                            </Col>
                            <Col sm>
                                <Form.Label htmlFor="numero">Numero</Form.Label>
                                <Form.Control
                                    type="number"
                                    id="contacto-numero"
                                />
                            </Col>
                        </Row>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <Button variant="warning">Enviar Mensage</Button>
                    </Col>
                </Row>
                <Row className="mapa">
                    <Col sm>
                        <div className='info-mapa'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg></span> Zona 4 Ciudad de Guatemala
                            <br></br>
                            <br></br>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                            </svg></span> Horario de oficina 9:00 a 7:00 Domingo 10:00 a 5:00
                            <br></br>
                            <br></br>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg></span> Email: Airtime@gmail.com.gt
                            <br></br>
                            <br></br>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg></span> Telefono: 502+ 548412245
                        </div>
                    </Col>
                    <Col sm className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932911.8491239557!2d-92.87750748991323!3d15.712251049066426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8588135036e7506b%3A0x35982b375b84d5bb!2sGuatemala!5e0!3m2!1ses-419!2sgt!4v1685605042352!5m2!1ses-419!2sgt" width="800" height="650"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            <Footer />
        </div>
    )
}

export default Contacto