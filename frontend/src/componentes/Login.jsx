import React, { useState,useEffect, useRef} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import './Login.css';


const Login = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };


    const cookies = new Cookies();
    const navigate = useNavigate();
    const userRef = useRef();
    const contRef = useRef();
    const tbRef = useRef();
    const [user1, setUser] = useState('');
    const [cont, setCont] = useState('');
    const [login, setLogin] = useState([]);

    const iniciarSesion=async()=>{
        await axios.get('http://localhost:4000/login/'+user1+'/'+cont)
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.idusuario, {path: "/"});
                cookies.set('usuario', respuesta.usuario, {path: "/"});
                cookies.set('ROL', respuesta.ROL_idrol, {path: "/"});
                cookies.set('cliente', respuesta.idcliente, {path: "/"});
                alert(`Bienvenido ${respuesta.usuario}` );
                window.location.href="./";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }


    return (
        <div className='login' id="login">
            <MDBContainer id="formulario" className="p-3 my-5 d-flex flex-column w-50">

                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                    <MDBTabsItem>
                    <MDBTabsLink id="bingresar" onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Ingresar
                    </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                    <MDBTabsLink id="bregistrarse" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Registrarse
                    </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>
                    <MDBInput wrapperClass='mb-4' label='Usuario' type='text' name='password' onChange={e => setUser(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Contraseña' type='password' ref={contRef} onChange={e => setCont(e.target.value)}/>

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recordar' />
                        <a href="!#">Olvidaste tu contraseña?</a>
                    </div>

                    <Button onClick={()=>iniciarSesion()} variant="primary">Ingresar</Button>
                    <p className="text-center">No eres miembro? <a href="#!">Registrate</a></p>

                    </MDBTabsPane>

                    <MDBTabsPane show={justifyActive === 'tab2'}>

                    <MDBInput wrapperClass='mb-4' label='Nombre' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Usuario' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Email' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Contraseña' type='password'/>

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' label='He leído y acepto los términos' />
                    </div>

                    <MDBBtn className="mb-4 w-100">Registrarse</MDBBtn>

                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBContainer>
        </div>
    )
}

export default Login