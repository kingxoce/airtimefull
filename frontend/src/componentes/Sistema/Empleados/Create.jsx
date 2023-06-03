import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import './Style.css'

function Create() {
    const [nombres, setNombre] = useState('')  
    const [apellidos, setApellidos] = useState('')  
    const [correo ,setCorreo] = useState('')
    const [departamento, setDepartamento] = useState('')  
    const [cargo, setCargo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [usuario,setUsuario] = useState('')      
    const navigate = useNavigate();
    
    const nameRef = useRef();
    const apellidosRef = useRef();
    const correoRef = useRef();
    const departamentoRef = useRef();
    const cargoRef = useRef();
    const direccionRef = useRef();
    const usuarioRef = useRef();
    
    function handleSubmit(event) {  
    event.preventDefault();        
    
    if (!nameRef.current.value||!apellidosRef.current.value||!correoRef.current.value||!departamentoRef.current.value||!cargoRef.current.value||!direccionRef.current.value||!usuarioRef.current.value) {
      alert("Por favor, Llene todos los campos");
      return;
    }
    
    
    
    axios.post('http://localhost:4000/crearcempleado', {nombres,apellidos,correo,departamento,cargo,direccion,usuario})
    .then(res => {
    alert("INGRESADO CON EXITO");  
    console.log(res); 
    navigate('/Empleados');         
    }).catch(err => console.log(err));  
      } 

  return (
    <div className="create">
        <Form onSubmit={handleSubmit}>
            <h2>Nuevo Empleado</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombres</Form.Label>
                <input type="text" placeholder="Nombres" 
                 onChange={e => setNombre(e.target.value)} ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicApellidos">
                <Form.Label>Apellidos</Form.Label>
                <input type="text" placeholder="Apellidos" 
                onChange={e => setApellidos(e.target.value)} ref={apellidosRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <input type="text" placeholder="Correo" 
                onChange={e => setCorreo(e.target.value)} ref={correoRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDepartamento">
                <Form.Label>Departameno</Form.Label>
                <input type="text" placeholder="Departamento"
                onChange={e => setDepartamento(e.target.value)} ref={departamentoRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCargo">
                <Form.Label>Cargo</Form.Label>
                <input type="text" placeholder="Cargo" 
                onChange={e => setCargo(e.target.value)} ref={cargoRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDireccion">
                <Form.Label>Direccion</Form.Label>
                <input type="text" placeholder="Direccion" 
                onChange={e => setDireccion(e.target.value)} ref={direccionRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicResidencia">
                <Form.Label>Usuario</Form.Label>
                <input type="text" placeholder="ID USUARIO" 
                onChange={e => setUsuario(e.target.value)} ref={usuarioRef} />
            </Form.Group>
            <Button
                variant="success"
                onClick={handleSubmit}

                >
                Ingresar
            </Button>
        </Form>
    </div>
  );
}

export default Create;