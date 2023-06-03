import React, { useState,useEffect} from 'react'
import logo from '../Imagenes/logo.png'
import { useNavigate} from 'react-router-dom';
import axios from "axios"
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Cookies from 'universal-cookie';

const Navbarif = () => {

    const [click, setClick] = useState(false)
    const cookies = new Cookies();
    const [rol, setrol]=useState('');
    
    useEffect(()=>{
        setrol(cookies.get('cliente'));
        },[])    
    const navigate = useNavigate();
    

    const actualizarmora=async()=>{
        await axios.get('http://localhost:4000/issolventemora/'+rol)
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                 cookies.set('moroso',1, {path: "/"});
                 console.log(cookies.get('moroso'));
              alert('Actualizado');
              window.location.href="./";
            }else{
                cookies.set('moroso',0, {path: "/"});
                
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }



    const actualizarpago=async()=>{
        await axios.get('http://localhost:4000/issolventepago/'+rol)
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                 cookies.set('solvente',0, {path: "/"});
                 console.log(cookies.get('moroso'));
              alert('Actualizado');
              window.location.href="./";
            }else{
                cookies.set('Solvente',1, {path: "/"});
                
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }


    const cerrarsesion=async()=>{
        

                cookies.set('id',0, {path: "/"});
                cookies.set('usuario',0, {path: "/"});
                cookies.set('ROL', 0, {path: "/"});
                cookies.set('cliente', 0, {path: "/"});
                alert('LOGOUT');
                window.location.href="./";

    }












    if(rol!=null && rol!=0){
    return (
        <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu> 
       <Dropdown.Item onClick={() =>{ navigate(`/PAGO/${rol}`)}}>Realizar Pago</Dropdown.Item>
       <Dropdown.Item onClick={() =>{ navigate(`/MORA/${rol}`)}}>Pagar Mora</Dropdown.Item>
        <Dropdown.Item onClick={() =>{ navigate(`Clientes/EDC/${rol}`)}}>Estado de Cuenta</Dropdown.Item>
     <Dropdown.Item onClick={() => actualizarmora()}>Actualizar datos</Dropdown.Item>
        <Dropdown.Item onClick={() =>{cerrarsesion()}}>Cerrar sesion</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>                      
    )
    }else{
        return(
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <a href='/Login' onClick={() =>{ navigate("/Login") }}>Logeo</a>
    </ul>
        )
    }
}

export default Navbarif