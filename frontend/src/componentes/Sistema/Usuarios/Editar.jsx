import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function Editar() {
    const usuarioRef = useRef();
    const contraseñaRef = useRef();
    const rolRef = useRef();
    const {id} = useParams();
    const navigate = useNavigate();


    function handleSubmit(event) {    
        event.preventDefault();        
    
        if (!usuarioRef.current.value||!contraseñaRef.current.value||!rolRef.current.value) {
         
         if(!usuarioRef.current.value){
    
        usuarioRef.current.value=usuarioRef.current.placeholder
    
         }
    
         if(!contraseñaRef.current.value){
    
            contraseñaRef.current.value=contraseñaRef.current.placeholder
        
             }
    
             if(!rolRef.current.value){
    
                rolRef.current.value=rolRef.current.placeholder
            
                 }
    
        }    
        
    
    
    event.preventDefault();     
    

    axios.put('http://localhost:4000/updatecusuario/'+id,{usuarios: usuarioRef.current.value,contraseña: contraseñaRef.current.value,rol: rolRef.current.value})        
    .then(res => {   
    alert("INGRESADO CON EXITO");             
    console.log(res);            
    navigate('/Usuarios');        })
    .catch(err => console.log(err));    } 

  
    const [usuario,setUsuario] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:4000/searchusuario/'+id)
    .then(res => setUsuario(res.data)
    .catch(err => console.log(err)));

    },[])
      

    usuario.map((data)=> (usuarioRef.current.placeholder=data.usuario,
        contraseñaRef.current.placeholder=data.contraseña,
        rolRef.current.placeholder=data.ROL_idrol        ));
      


  return (
    <div className="editar">
        <Form>
            <h2>Editar Usuario</h2>
            <Form.Group className="mb-3" controlId="formBasicUsuarios">
                <Form.Label>Usuarios</Form.Label>
                <input type="text"  ref={usuarioRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContraseñas">
                <Form.Label>Contraseñas</Form.Label>
                <input type="text" ref={contraseñaRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRol">
                <Form.Label>Rols</Form.Label>
                <input type="text" ref={rolRef} 
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