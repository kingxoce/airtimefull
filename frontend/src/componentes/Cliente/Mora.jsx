import { React, useRef, useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './Mora.css';
import tarjeta from '../Imagenes/tarjeta.png'
import Cookies from 'universal-cookie';
import axios from "axios";

function Mora() {
    const cookies = new Cookies();
    const [rol, setrol]=useState('');
    
    useEffect(()=>{
        setrol(cookies.get('cliente'));
        },[])
  const navigate = useNavigate();

  const numRef = useRef();
  const nomRef = useRef();
  const expRef = useRef();
  const cvcRef = useRef();


  function handleSubmit(event) {    
    event.preventDefault();        

    if (!numRef.current.value||!nomRef.current.value||!expRef.current.value||!cvcRef.current.value){
        alert("Por favor, Llene todos los campos");
        return;
     
      
     
      

    }    
    
if(numRef.current.value.length<8){
alert("Numero de tarjeta invalido");
}

if(cvcRef.current.value.length<3 || cvcRef.current.value.length>3){
    alert("cvc invalido");
    }


    if(cvcRef.current.value.length<3 && cvcRef.current.value.length>3){
        alert("cvc invalido");
        }


event.preventDefault();     

axios.get('http://localhost:4000/mora/'+rol)
.then(res => {
alert("Pagado CON EXITO");  
console.log(res); 
navigate('/');         
}).catch(err => console.log(err)); 


  } 



  return (
    <div className='pago'>
        <div className="pago-container">
          <div className="color" >
          </div>
          <div className="form-pago">
            <h1>Airtime</h1>
          </div>
          <div className="form-p">
                <Form>
                    <h2>Formulario de Pago</h2>
                    <img alt='tarjeta' className="tarjeta" src={tarjeta}/>
                    <Form.Group className="mb-3" controlId="formBasictarjeta">
                        <Form.Label>Número de la Tarjeta</Form.Label>
                        <Form.Control ref={numRef} type="number" placeholder="" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicnombre">
                        <Form.Label>Nombre de la Tarjeta</Form.Label>
                        <Form.Control ref={nomRef} type="text" placeholder="" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formexpiracion">
                        <Form.Label>Fecha de Expiración</Form.Label>
                        <Form.Control ref={expRef} type="date"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCVC">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control ref={cvcRef} type="number"
                        />
                    </Form.Group>
                    <Button
                        variant="success"
                        onClick={handleSubmit}
                    >Pagar
                    </Button>
                </Form>
            </div>
        </div>
    </div>
  );
}

export default Mora;
