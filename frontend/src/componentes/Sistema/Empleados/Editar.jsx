import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function Editar() {
    const nameRef = useRef();
    const apellidosRef = useRef();
    const correoRef = useRef();
    const departamentoRef = useRef();
    const cargoRef = useRef();
    const direccionRef = useRef();
    const usuarioRef = useRef();
    const {id} = useParams();
    const navigate = useNavigate();


    function handleSubmit(event) {    
        event.preventDefault();        
    
        if (!nameRef.current.value||!apellidosRef.current.value||!correoRef.current.value|| !departamentoRef.current.value||!cargoRef.current.value |!direccionRef.current.value||!usuarioRef.current.value) {
         
         if(!nameRef.current.value){
    
        nameRef.current.value=nameRef.current.placeholder
    
         }
    
         if(!apellidosRef.current.value){
    
            apellidosRef.current.value=apellidosRef.current.placeholder
        
             }
    
             if(!correoRef.current.value){
    
                correoRef.current.value=correoRef.current.placeholder
            
                 }

             if(!departamentoRef.current.value){
    
                departamentoRef.current.value=departamentoRef.current.placeholder
            
                 }

                 if(!cargoRef.current.value){
    
                    cargoRef.current.value=cargoRef.current.placeholder
                
                     }

         if(!direccionRef.current.value){
    
        direccionRef.current.value=direccionRef.current.placeholder
    
         }        

         if(!usuarioRef.current.value){
    
            usuarioRef.current.value=usuarioRef.current.placeholder
        
             }
    
        }    
        
    
    
    event.preventDefault();     
    
    
    axios.put('http://localhost:4000/updatecempleado/'+id,{nombres: nameRef.current.value,apellidos: apellidosRef.current.value,correo: correoRef.current.value, departamento: departamentoRef.current.value,cargo: cargoRef.current.value,direccion: direccionRef.current.value,usuario: usuarioRef.current.value})        
    .then(res => {   
    alert("INGRESADO CON EXITO");             
    console.log(res);            
    navigate('/Empleados');        })
    .catch(err => console.log(err));    } 

  
    const [empleado,setEmpleado] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:4000/searchempleado/'+id)
    .then(res => setEmpleado(res.data)
    .catch(err => console.log(err)));

    },[])
      

    empleado.map((data)=> (nameRef.current.placeholder=data.nombres,
        apellidosRef.current.placeholder=data.apellidos,
        correoRef.current.placeholder=data.correo,
        departamentoRef.current.placeholder=data.departamento,
        cargoRef.current.placeholder=data.cargo,
        direccionRef.current.placeholder=data.direccion,
        usuarioRef.current.placeholder=data.USUARIO_idusuario        ));
      


  return (
    <div className="editar">
        <Form>
            <h2>Editar Empleado</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombres</Form.Label>
                <input type="text"  ref={nameRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicApellidos">
                <Form.Label>Apellidos</Form.Label>
                <input type="text" ref={apellidosRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <input type="text" ref={correoRef} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDepartamento">
                <Form.Label>Departamento</Form.Label>
                <input type="text" ref={departamentoRef} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCargo">
                <Form.Label>Cargo</Form.Label>
                <input type="text" ref={cargoRef} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDireccion">
                <Form.Label>Direccion</Form.Label>
                <input type="text" ref={direccionRef} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicResidencia">
                <Form.Label>Usuario</Form.Label>
                <input type="text" ref={usuarioRef} 
                />
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

export default Editar;