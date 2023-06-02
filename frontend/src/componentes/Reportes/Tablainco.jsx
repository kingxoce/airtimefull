import React, { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import { Table, Button, Row, Form, Col } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import {format} from 'date-fns';
import './facturas.css';
import moment from 'moment';


const Tablainco = () => {




    //parametros de envio al reporte
   const {probabilidad,monto} = useParams();
  const [facturas,setTablaFacturas] = useState([])

    //metodo get que recibe parametros
    useEffect(()=> {
        axios.get('http://localhost:4000/api/reporte_inco/'+probabilidad+'/'+monto)
        .then(res => setTablaFacturas(res.data));   
    },[])

    //para el boton de seleccion de exportacion
    const [exportType, setExportType] = useState('');

    // validacion si es pdf o excel
    const handleExport = () => {
      if (exportType === 'pdf') {
        exportToPDF();
      } else if (exportType === 'excel') {
        //exportToExcel();
      }
    };

    //funcion que genera el reporte en formato pdf 
    const exportToPDF = () => {
        const element = document.getElementById('tableData');
        const opt = {
            margin: 0.1,
            filename: 'Reporte_Cuentas_incobrables.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            avoidPageSplit: true, // Evitar que la tabla se divida en varias páginas
            autoPaging: true,
        };
        html2pdf().set(opt).from(element).save();
    };

    return (
      <div className="facturas">
            <div className="printf" id="tableData">
                <Row>
                    {
                        /* titulo del reporte */
                    }
                    <h2>Reporte de Cuentas por Cobrar con probabilidad {probabilidad}</h2>
                </Row>
                <Row>
                    {
                        /* tabla de datos */
                    }
                    <Table bordered responsive="sm">    
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>SALDO INICIAL</th>
                            <th>SALDO ACTUAL</th>
                            <th>SALDO PENDIENTE</th>
                            <th>Observaciones</th>
                            <th>Porcentaje</th>
                            <th>Ultimo Pago</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            /* cargar todas las tablas que vengan del metodo get de la BD (los campos a mostrar) */
                        }
                        {facturas.map((data, i) => (
                            <tr key={i}>
                                <td>{data.id} </td>
                                <td>{data.nombre_cliente}</td>
                                <td>{data.saldo_inicial}</td>
                                <td>{data.saldo_actual}</td>
                                <td>{data.saldo_pendiente}</td>
                                <td>{data.observaciones}</td>
                                <td>{data.porcentaje}</td>
                                <td>{data.ultima_fecha}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>
            </div>
            <br></br>
            <Row className="exportacion">
                {
                    /* seleccion de tipo exportacion */
                }
                <Form.Group as={Col}>
                    <Form.Control
                    as="select"
                    value={exportType}
                    onChange={(e) => setExportType(e.target.value)}
                    >
                        <option value="">Seleccionar tipo de exportación</option>
                        <option value="pdf">Exportar a PDF</option>
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row className="exp">
                {
                    /* Boton que realiza la exportacion mediante el evento handleExport */
                }
                <Button variant="warning" onClick={handleExport} disabled={!exportType}>
                    Exportar
                </Button>
            </Row>
      </div>
    )
  }

export default Tablainco