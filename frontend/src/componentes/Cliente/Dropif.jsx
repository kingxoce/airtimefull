import React, { useState,useEffect} from 'react'
import logo from '../Imagenes/logo.png'
import { useNavigate} from 'react-router-dom';
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Cookies from 'universal-cookie';

const Dropif= () => {

    const [click, setClick] = useState(false)
    const cookies = new Cookies();
    const [rol, setrol]=useState('');
    

    



    useEffect(()=>{
        setrol(cookies.get('cliente'));
        },[])    
    const navigate = useNavigate();
  
    /*
   



    if(){
    return (
        <Dropdown.Item onClick={() =>{ navigate(`/PAGO/${rol}`)}}>Realizar Pago</Dropdown.Item>
       
       
        <Dropdown.Item onClick={() =>{ navigate(`/MORA/${rol}`)}}>Pagar Mora</Dropdown.Item>
   
    )
    }else if() {
        return(
        
        )
    }else if(){


    }else{


    }

    */
}

export default Dropif