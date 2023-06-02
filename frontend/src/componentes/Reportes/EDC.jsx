import React, { useEffect,useState ,useRef} from "react";
import { useParams } from 'react-router-dom';
import { Table, Button, Row, Form, Col } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import './facturas.css';
import {format,compareAsc} from 'date-fns'
import { toDate } from "date-fns/esm";
const EDC = () => {



    //parametros de envio al reporte
   const {id} = useParams();
  const [facturas,setTablaFacturas] = useState([])

    //metodo get que recibe parametros
    useEffect(()=> {
        axios.get('http://localhost:4000/EDC/'+id)
        .then(res => setTablaFacturas(res.data));   
    },[])

    const [cliente,setCliente] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:4000/searchclient/'+id)
    .then(res => setCliente(res.data)
    .catch(err => console.log(err)));

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
            filename: 'Estado de cuenta_'+cliente.map((dati)=>(dati.nombres))+'_'+cliente.map((dati)=>(dati.apellidos)),
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
                    <h2>Estado de cuenta de {cliente.map((datos)=>(datos.nombres))} {cliente.map((datos)=>(datos.apellidos))}</h2>
                </Row>
                <Row>
                    {
                        /* tabla de datos */
                    }
                    <Table bordered responsive="sm">    
                        <thead>
                        <tr>
                            <th>FECHA</th>
                            <th>DETALLE</th>
                            <th>DOCUMENTO</th>
                            <th>FECHA DE VENCIMIENTO</th>
                            <th>CARGO</th>
                            <th>ABONO</th>
                            <th>SALDO</th>
                            

                        </tr>
                        </thead>
                        <tbody>
                        {
                            /* cargar todas las tablas que vengan del metodo get de la BD (los campos a mostrar) */
                        }
                        {facturas.map((data, i) => (
                            <tr key={i}>
                                <td>{format(new Date(data.fecha),"dd-MM-yyyy")}</td>
                                <td>{data.detalle}</td>
                                <td>{data.documento}</td>
                                    <td>{format(new Date(data.fecha_vencimiento),"dd-MM-yyyy")}</td>
                                <td>{data.cargo}</td>
                                <td>{data.abono}</td>
                                <td>{data.saldo}</td>
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
                    Exportar Estado de Cuenta
                </Button>
            </Row>
      </div>
    )
  }

export default EDC