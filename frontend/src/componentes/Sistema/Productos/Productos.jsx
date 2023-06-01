import React, { useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Navbar from '../NavbarUser';
import { useNavigate} from 'react-router-dom';
import './Productos.css';

function Productos() {
    const navigate = useNavigate();

    const [productos, setProductos] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    //conexion por axios hacia la url del backend para obtener los Productos
    const peticionesGet= async()=>{
        await axios.get('http://localhost:4000/productos-get')
        .then(response=>{
            setProductos(response.data);
            setTablaProductos(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaProductos.filter((elemento)=>{
            if(elemento.detalle.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.idPaquete.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ){
                return(elemento);
            }
        });
        setProductos(resultadosBusqueda);
    }

    useEffect(()=>{
        peticionesGet();
    },[])

  return (
    <div className="producto">
        <Navbar />
        <div className='producto-cont'>
            <div className='tit'>Productos</div>
            <div className='nuevo-producto'>
                <Button onClick={() =>{ navigate("/Productos/create") }} variant="success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-symlink-fill" viewBox="0 0 16 16">
                    <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3zM2.19 3c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3H2.19zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
                </svg>Nuevo Producto
                </Button>
            </div>
            <div className='containerInput'>
                <input
                className='form-control inputBuscar'
                value={busqueda}
                placeholder='Búsqueda por nombre o código'
                onChange={handleChange}
                />
            <Button className='btn btn-succes' variant="warning">
                <FontAwesomeIcon icon={faSearch}/>
            </Button>
            </div>
            <div className='table-response'>
                <table className='table table-sm table-bordered'>
                    <thead>
                        <th>CODIGO</th>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                        <th>+ VUELO</th>
                        <th>+ ALIMENTO</th>
                        <th>+ ALOJAMIENTO</th>
                        <th>+ GUÍA</th>
                        <th>+ TRANSPORTE</th>
                        <th>PRECIO</th>
                        <th>DURACIÓN</th>
                        <th>CUOTAS</th>
                        <th>FECHA SALIDA</th>
                        <th>FECHA LLEGADA</th>
                        <th>IMAGEN</th>
                        <th>ACCIONES</th>
                    </thead>
                    <tbody>
                        {productos &&
                        productos.map((producto)=>(
                            <tr key={producto.idPaquete}>
                                <td>{producto.idPaquete}</td>
                                <td>{producto.detalle}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.incluye_vuelo}</td>
                                <td>{producto.incluye_alimento}</td>
                                <td>{producto.incluye_alojamiento}</td>
                                <td>{producto.incluye_guia}</td>
                                <td>{producto.incluye_transporte}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.duracion}</td>
                                <td>{producto.cuotas}</td>
                                <td>{producto.fecha_inicio}</td>
                                <td>{producto.fecha_final}</td>
                                <td>{producto.foto}</td>
                                <td>
                                    <Button onClick={() =>{ navigate("/Productos/edit")}} variant={"primary"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>Editar
                                    </Button>
                                    <Button variant="danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default Productos;