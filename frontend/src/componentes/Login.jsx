import React, { useState } from 'react'
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
import Button from 'react-bootstrap/esm/Button';
import { useNavigate} from 'react-router-dom';
import './Login.css';


const Login = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };

    const navigate = useNavigate();
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

                    <MDBInput wrapperClass='mb-4' label='Email' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Contraseña' type='password'/>

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recordar' />
                        <a href="!#">Olvidaste tu contraseña?</a>
                    </div>

                    <Button onClick={() =>{ navigate("/Airtime-Home") }} variant="primary">Ingresar</Button>
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