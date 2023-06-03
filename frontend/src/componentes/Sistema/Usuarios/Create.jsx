import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import './Style.css'

function Create() {
    const [usuarios, setUsuarios] = useState('')  
    const [contraseña, setContraseña] = useState('')  
    const [rol,setRol] = useState('')      
    const navigate = useNavigate();
    
    const usuariosRef = useRef();
    const contraseñaRef = useRef();
    const rolRef = useRef();
    
    function handleSubmit(event) {  
    event.preventDefault();        
    
    if (!usuariosRef.current.value||!contraseñaRef.current.value||!rolRef.current.value) {
      alert("Por favor, Llene todos los campos");
      return;
    }
    
    
    
    axios.post('http://localhost:4000/crearcusuario', {usuarios,contraseña,rol})
    .then(res => {
    alert("INGRESADO CON EXITO");  
    console.log(res); 
    navigate('/Usuarios');         
    }).catch(err => console.log(err));  
      } 

  return (
    <div className="create">
        <Form onSubmit={handleSubmit}>
            <h2>Nuevo Usuario</h2>
            <Form.Group className="mb-3" controlId="formBasicUsuarios">
                <Form.Label>Usuarios</Form.Label>
                <input type="text" placeholder="Usuarios" 
                 onChange={e => setUsuarios(e.target.value)} ref={usuariosRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContraseñas">
                <Form.Label>Contraseñas</Form.Label>
                <input type="text" placeholder="Contraseñas" 
                onChange={e => setContraseña(e.target.value)} ref={contraseñaRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRol">
                <Form.Label>Rols</Form.Label>
                <input type="text" placeholder="Id Rol" 
                onChange={e => setRol(e.target.value)} ref={rolRef} />
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