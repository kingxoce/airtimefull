import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import './Style.css'

function Create() {
    const [rol, setRol] = useState('')  
    const [descripcion, setDescripcion] = useState('')     
    const navigate = useNavigate();
    
    const rolRef = useRef();
    const descripcionRef = useRef();

    
    function handleSubmit(event) {  
    event.preventDefault();        
    
    if (!rolRef.current.value||!descripcionRef.current.value) {
      alert("Por favor, Llene todos los campos");
      return;
    }
    
    
    
    axios.post('http://localhost:4000/crearcrol', {rol,descripcion})
    .then(res => {
    alert("INGRESADO CON EXITO");  
    console.log(res); 
    navigate('/Rols');         
    }).catch(err => console.log(err));  
      } 

  return (
    <div className="create">
        <Form onSubmit={handleSubmit}>
            <h2>Nuevo Rols</h2>
            <Form.Group className="mb-3" controlId="formBasicRol">
                <Form.Label>Rol</Form.Label>
                <input type="text" placeholder="Rol" 
                 onChange={e => setRol(e.target.value)} ref={rolRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <input type="text" placeholder="Descripcion" 
                onChange={e => setDescripcion(e.target.value)} ref={descripcionRef} />
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