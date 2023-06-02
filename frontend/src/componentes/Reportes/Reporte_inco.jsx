import React, { useState, useRef} from 'react'
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './ReporteFacturas.css'

function Reporteinco() {

    //variales de los parametros de fechas seleccionados
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    //variable que se utiliza para navegar a otra pagina
    const navigate = useNavigate();

    //variables donde se almacenara el dato del input
    const [probabilidad, setProbabilidad] = useState('');
    const [monto,setMonto] = useState('');
    const fechaFinRef = useRef();

   /* const handleExport = () => {
        if (exportType === 'pdf') {
          exportToPDF();
        } else if (exportType === 'excel') {
          //exportToExcel();
        }
      };

*/



    //evento del bottom donde se llama al post y envia los parametros 
    function handleSubmit(event) {  
        event.preventDefault();;


        //conexion por axios hacia la url del backend y se mandan los parametros
        axios.post('http://localhost:4000/api/reporte_inco/', {probabilidad,
        monto})
        .then(res => {
        console.log(res); 
        //direccionar a la pagina deseada
        navigate('/Tablainco');         
        }).catch(err => console.log(err));

    }


  return (
    <div className="container Facturas">
        <Form onSubmit={handleSubmit}>
            <Row>
            {
            /* Titulo del reporte */
            }
               <h1>Reporte de Cuentas Incobrables</h1>
                <h5 style={{color:'green'}}>Filtrar por:</h5>
            </Row>
            <br></br>
            {
            /* input parametro a seleccionar */
            }
            <Row>
                {
                    
                }
                <Form.Group as={Col}>
                <Form.Label>Por probabilidad</Form.Label>
                    <Form.Control
                    as="select"
                    value={probabilidad}
                    onChange={(e) => setProbabilidad(e.target.value) }
                    >
                        <option value="">Seleccione por probabilidad</option>
                        <option value="Muy-Probable">Muy Probable</option>
                        <option value="Poco-Probable">Poco Probable</option>

                    </Form.Control>
                </Form.Group>
            </Row>
            {
            /* input parametro a seleccionar */
            }
            <Row>
                {
                    
                }
                <Form.Group as={Col}>
                <Form.Label>Por Monto</Form.Label>
                    <Form.Control
                    as="select"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value) }
                    >
                        <option value="">Seleccione por montos</option>
                        <option value="1000">Menos de Q1000</option>
                        <option value="5000">Menos de Q5000</option>
                        <option value="10000">Menos de Q10000</option>
                        <option value="50000">Menos de Q50000</option>
                        <option value="10000000">Todos</option>

                    </Form.Control>
                </Form.Group>
            </Row>
            <br></br>
            {
                /* boton que envia los parametros seleccionados */ 
            }
            <Link type="button" className="btn btn-primary" to={`/Tablainco/${probabilidad}/${monto}`}>Generar Reporte</Link>
        </Form>
    </div>
  );
}

export default Reporteinco;