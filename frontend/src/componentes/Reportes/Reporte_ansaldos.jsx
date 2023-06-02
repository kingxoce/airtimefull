import React, { useState, useRef} from 'react'
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './ReporteFacturas.css'

function Reporteansaldos() {

    //variales de los parametros de fechas seleccionados
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    //variable que se utiliza para navegar a otra pagina
    const navigate = useNavigate();

    //variables donde se almacenara el dato del input
    const fechaInicioRef = useRef();
    const fechaFinRef = useRef();

    //evento del bottom donde se llama al post y envia los parametros 
    function handleSubmit(event) {  
        event.preventDefault();;

        //conexion por axios hacia la url del backend y se mandan los parametros
        axios.post('http://localhost:4000/reporte_antiguedad/', {fechaInicio,
        fechaFin})
        .then(res => {
        console.log(res); 
        //direccionar a la pagina deseada
        navigate('/TablaFacturas');         
        }).catch(err => console.log(err));

    }


  return (
    <div className="container Facturas">
        <Form onSubmit={handleSubmit}>
            <Row>
            {
            /* Titulo del reporte */
            }
               <h1>Reporte de Antiguedad de saldos</h1>
                <h5 style={{color:'green'}}>Filtrar por fecha de vencimiento</h5>
            </Row>
            <br></br>
            {
            /* input parametro a seleccionar */
            }
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Fecha de inicio:</Form.Label>
                    <Form.Control type="date" ref={fechaInicioRef} name="dob" placeholder="Fecha Inicio" id="fechaInicio" onChange={(e) => setFechaInicio(e.target.value)} />
                </Form.Group>
            </Row>
            {
            /* input parametro a seleccionar */
            }
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Fecha de Fin:</Form.Label>
                    <Form.Control type="date" ref={fechaFinRef} name="dob" placeholder="Fecha Fin" id="fechaFin" onChange={(e) => setFechaFin(e.target.value)} />
                </Form.Group>
            </Row>
            <br></br>
            {
                /* boton que envia los parametros seleccionados */ 
            }
            <Link type="button" className="btn btn-primary" to={`/Tablaansaldos/${fechaInicio}/${fechaFin}`}>Generar Reporte</Link>
        </Form>
    </div>
  );
}

export default Reporteansaldos;