import React, { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import { Table, Button, Row, Form, Col } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import './facturas.css';

const TablaFacturas = () => {
    //parametros de envio al reporte
    const {estado} = useParams();
    const [facturas,setTablaFacturas] = useState([])

    //metodo get que recibe parametros
    useEffect(()=> {
        axios.get('http://localhost:4000/reporteFacturas/'+estado)
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
            filename: 'tabla.pdf',
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
                    <h2>Reporte de Facturas de estado {estado}</h2>
                </Row>
                <Row>
                    {
                        /* tabla de datos */
                    }
                    <Table bordered responsive="sm">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>No.Factura</th>
                            <th>Fecha Emision</th>
                            <th>Fecha Vencimiento</th>
                            <th>Total</th>
                            <th>Estado</th>
                            <th>Cliente</th>
                            <th>Correo Cliente</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            /* cargar todas las tablas que vengan del metodo get de la BD (los campos a mostrar) */
                        }
                        {facturas.map((data, i) => (
                            <tr key={i}>
                                <td>{data.IDFactura} </td>
                                <td>{data.NumeroFactura}</td>
                                <td>{data.FechaEmision}</td>
                                <td>{data.FechaVencimiento}</td>
                                <td>Q. {data.TotalFactura}</td>
                                <td>{data.Estado}</td>
                                <td>{data.Nombre}</td>
                                <td>{data.CorreoElectronico}</td>
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
                        <option value="excel">Exportar a Excel</option>
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

export default TablaFacturas