import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function Editar() {
    const rolRef = useRef();
    const descripcionRef = useRef();
    const {id} = useParams();
    const navigate = useNavigate();


    function handleSubmit(event) {    
        event.preventDefault();        
    
        if (!rolRef.current.value||!descripcionRef.current.value) {
         
         if(!rolRef.current.value){
    
        rolRef.current.value=rolRef.current.placeholder
    
         }
    
         if(!descripcionRef.current.value){
    
            descripcionRef.current.value=descripcionRef.current.placeholder
        
             }
    
        }    
        
    
    
    event.preventDefault();     
    
    
    axios.put('http://localhost:4000/updatecrol/'+id,{rol: rolRef.current.value,descripcion: descripcionRef.current.value})        
    .then(res => {   
    alert("INGRESADO CON EXITO");             
    console.log(res);            
    navigate('/Rols');        })
    .catch(err => console.log(err));    } 

  
    const [rol,setRol] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:4000/searchrol/'+id)
    .then(res => setRol(res.data)
    .catch(err => console.log(err)));

    },[])
      

    rol.map((data)=> (rolRef.current.placeholder=data.rol,
        rolRef.current.placeholder=data.rol
                ));
      


  return (
    <div className="editar">
        <Form>
            <h2>Editar Rol</h2>
            <Form.Group className="mb-3" controlId="formBasicRol">
                <Form.Label>Rol</Form.Label>
                <input type="text"  ref={rolRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <input type="text" ref={descripcionRef}
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