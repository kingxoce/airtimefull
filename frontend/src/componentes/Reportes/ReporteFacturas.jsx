import React, { useState, useRef} from 'react'
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './ReporteFacturas.css'

function ReporteFacturas() {

    //variales de los parametros de fechas seleccionados
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    //variable que se utiliza para navegar a otra pagina
    const navigate = useNavigate();

    //variables donde se almacenara el dato del input
    const fechaInicioRef = useRef();
    const fechaFinRef = useRef();

    const [estado, setEstado] = useState('');

    //evento del bottom donde se llama al post y envia los parametros 
    function handleSubmit(event) {  
        event.preventDefault();;

        //conexion por axios hacia la url del backend y se mandan los parametros
        axios.post('http://localhost:4000/reporteFacturas', {estado})
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
                <h1>Reporte de Facturas</h1>
            </Row>
            <br></br>
            {
            /* input parametro a seleccionar */
            }
            <Row>
                {
                    
                }
                <Form.Group as={Col}>
                <Form.Label>Por estado</Form.Label>
                    <Form.Control
                    as="select"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value) }
                    >
                        <option value="">Seleccione por Estado</option>
                        <option value="pagada">Pagadas</option>
                        <option value="pendiente">Pendientes</option>

                    </Form.Control>
                </Form.Group>
            </Row>
            <br></br>
            {
                /* boton que envia los parametros seleccionados */ 
            }
            <Link type="button" className="btn btn-primary" to={`/TablaFacturas/${estado}`}>Generar Reporte</Link>
        </Form>
    </div>
  );
}

export default ReporteFacturas;