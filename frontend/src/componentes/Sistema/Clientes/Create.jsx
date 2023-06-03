import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
import { Navigate, useNavigate} from 'react-router-dom';

import './Style.css'

function Create() {

    const cookies = new Cookies();   
    const [rol, setrol]=useState('');
    useEffect(()=>{
        setrol(cookies.get('ROL'));
        },[])

    const [nombres, setNombre] = useState('')  
    const [apellidos, setApellidos] = useState('')  
    const [telefono, seTelefono] = useState('')
    const [nit, setNit] = useState('')  
    const [correo, setCorr] = useState('')
    const [usuario,setUsuario] = useState('')      
    const navigate = useNavigate();
    
    const nameRef = useRef();
    const apellidosRef = useRef();
    const telefonoRef = useRef();
    const nitRef = useRef();
    const correoRef = useRef();
    const usuarioRef = useRef();
    
    function handleSubmit(event) {  
    event.preventDefault();        
    
    if (!nameRef.current.value||!telefonoRef.current.value||!apellidosRef.current.value||!nitRef.current.value||!correoRef.current.value||!usuarioRef.current.value) {
      alert("Por favor, Llene todos los campos");
      return;
    }
    
    
    
    axios.post('http://localhost:4000/crearc', {nombres,apellidos,telefono,nit,correo,usuario})
    .then(res => {
    alert("INGRESADO CON EXITO");  
    console.log(res); 
    navigate('/Clientes');         
    }).catch(err => console.log(err));  
      } 
      

      if (rol==='2') {
        return <Navigate to="/" />;
      }


  return (
    <div className="create">
        <Form onSubmit={handleSubmit}>
            <h2>Nuevo Cliente</h2>
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
            <Form.Group className="mb-3" controlId="formBasictarjey">
                <Form.Label>Telefono</Form.Label>
                <input type="text" placeholder="Telefono" 
                onChange={e => seTelefono(e.target.value)} ref={telefonoRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nit</Form.Label>
                <input type="text" placeholder="0000-0" 
                onChange={e => setNit(e.target.value)} ref={nitRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDpi">
                <Form.Label>Correo</Form.Label>
                <input type="text" placeholder="ejemplo@gmail.com" 
                onChange={e => setCorr(e.target.value)} ref={correoRef} />
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