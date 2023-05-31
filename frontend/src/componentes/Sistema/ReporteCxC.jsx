import React, { useState, useRef} from 'react'
import { Col, Form, Row  } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Reporte.css'

function ReporteCxC() {

    //variales de los parametros de fechas seleccionados
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [estadoPago, setEstadoPago] = useState('');

    //variable que se utiliza para navegar a otra pagina
    const navigate = useNavigate();

    //variables donde se almacenara el dato del input
    const fechaInicioRef = useRef();
    const fechaFinRef = useRef();
    const estadoPagoRef = useRef();

    //evento del bottom donde se llama al post y envia los parametros 
    function handleSubmit(event) {  
        event.preventDefault();;

        //conexion por axios hacia la url del backend y se mandan los parametros
        axios.post('http://localhost:4000/api/reporteCxC', {fechaInicio,fechaFin,estadoPago})
        .then(res => {
        console.log(res); 
        //direccionar a la pagina deseada
        navigate('/TablaCxC');         
        }).catch(err => console.log(err));

    }


  return (
    <div className="container CxC">
        <Form onSubmit={handleSubmit}>
            <Row>
            {
            /* Titulo del reporte */
            }
                <h1>Reporte de Cuentas por Cobrar</h1>
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
            <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label>Estado de la Cuenta:</Form.Label>
                <Form.Select aria-label="Default select example" ref={estadoPagoRef} id="estadoPago" onChange={(e) => setEstadoPago(e.target.value)}>
                        <option value="">Todas</option>
                        <option value="A">Pagadas</option>
                        <option value="P">Pendientes</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <br></br>
            {
                /* boton que envia los parametros seleccionados */ 
            }
            <Link type="button" className="btn btn-primary" to={`/TablaCxC/${fechaInicio}/${fechaFin}/${estadoPago}`}>Generar Reporte</Link>
        </Form>
    </div>
  );
}

export default ReporteCxC;