import React from 'react'
import  './NavbarUser.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Imagenes/logoBlack.png';

function NavbarUser() {

    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/Airtime-Home"><img alt='logo' className="logo" src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Airtime-Home">Home</Nav.Link>
                <NavDropdown title="Catalogos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Productos</NavDropdown.Item>
                  <NavDropdown.Item href="/Clientes">Clientes</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Informes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">patito</NavDropdown.Item>
                  <NavDropdown.Item href="/">pitufo</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Reportes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/reportes/facturas">Facturas</NavDropdown.Item>
                  <NavDropdown.Item href="/reportes/cxc">Cuentas por Cobrar</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Gestiones" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Usuarios">Usuarios</NavDropdown.Item>
                  <NavDropdown.Item href="/">Configuracion</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
  

export default NavbarUser