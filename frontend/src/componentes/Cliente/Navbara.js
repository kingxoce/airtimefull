import React, { useState } from 'react'
import logo from '../Imagenes/logo.png'
import { useNavigate} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const navigate = useNavigate();

    const [click, setClick] = useState(false)

    const [color , setColor] = useState (false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/'>
                    <img alt='logo' className="logo" src={logo}/>
                </a>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <a href='/' onClick={closeMenu}>Home</a>
                </ul>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <a href='/Acercade' onClick={() =>{ navigate("/Acercade") }}>Acerca de</a>
                </ul>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <a href='/' onClick={closeMenu}>Blog</a>
                </ul>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <a href='/' onClick={closeMenu}>Contactanos</a>
                </ul>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <a href='/Login' onClick={() =>{ navigate("/Login") }}>Logeo</a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar