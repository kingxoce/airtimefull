import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
import { Navigate,useNavigate, useParams } from 'react-router-dom';
function Editar() {

    const cookies = new Cookies();   
    const [rol, setrol]=useState('');
    useEffect(()=>{
        setrol(cookies.get('ROL'));
        },[])

    const nameRef = useRef();
    const apellidosRef = useRef();
    const telefonoRef = useRef();
    const nitRef = useRef();
    const correoRef = useRef();
    const usuarioRef = useRef();
    const {id} = useParams();
    const navigate = useNavigate();


    function handleSubmit(event) {    
        event.preventDefault();        
    
        if (!nameRef.current.value||!telefonoRef.current.value||!apellidosRef.current.value||!nitRef.current.value||!correoRef.current.value||!usuarioRef.current.value) {
         
         if(!nameRef.current.value){
    
        nameRef.current.value=nameRef.current.placeholder
    
         }
    
         if(!telefonoRef.current.value){
    
        telefonoRef.current.value=telefonoRef.current.placeholder
    
         }


         if(!apellidosRef.current.value){
    
            apellidosRef.current.value=apellidosRef.current.placeholder
        
             }
    
    
         if(!nitRef.current.value){
    
        nitRef.current.value=nitRef.current.placeholder
    
         }
    
    
         
       
    
         if(!correoRef.current.value){
    
        correoRef.current.value=correoRef.current.placeholder
    
         }
         

         if(!usuarioRef.current.value){
    
            usuarioRef.current.value=usuarioRef.current.placeholder
        
             }


    
        }    
        
    
    
    event.preventDefault();     
    
    
    axios.put('http://localhost:4000/updatec/'+id,{nombres: nameRef.current.value,apellidos: apellidosRef.current.value,telefono: telefonoRef.current.value,nit: nitRef.current.value,correo: correoRef.current.value,usuario: usuarioRef.current.value})        
    .then(res => {   
    alert("INGRESADO CON EXITO");             
    console.log(res);            
    navigate('/Clientes');        })
    .catch(err => console.log(err));    } 

  
    const [cliente,setCliente] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:4000/searchclient/'+id)
    .then(res => setCliente(res.data)
    .catch(err => console.log(err)));

    },[])
      

    cliente.map((data)=> (nameRef.current.placeholder=data.nombres,
        apellidosRef.current.placeholder=data.apellidos,
        telefonoRef.current.placeholder=data.telefono,
        nitRef.current.placeholder=data.nit,
        correoRef.current.placeholder=data.correo,
        usuarioRef.current.placeholder=data.USUARIO_idusuario        ));
      

        if (rol==='2') {
            return <Navigate to="/" />;
          }
  return (
    <div className="editar">
        <Form>
            <h2>Editar Cliente</h2>
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
            <Form.Group className="mb-3" controlId="formBasictarjey">
                <Form.Label>Telefono</Form.Label>
                <input type="text" ref={telefonoRef} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <input type="text" ref={correoRef} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDpi">
                <Form.Label>Nit</Form.Label>
                <input type="text" ref={nitRef} 
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