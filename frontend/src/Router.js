import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeCliente from './componentes/Cliente/Home';
import Acercade from './componentes/Cliente/Acercade'
import Login from './componentes/Login'
import Home from './componentes/Sistema/HomeServer'
import Usuarios from './componentes/Sistema/Usuarios/Usuarios'
import CreateUser from './componentes/Sistema/Usuarios/Create'
import EditarUser from './componentes/Sistema/Usuarios/Editar'
import Clientes from './componentes/Sistema/Clientes/Clientes'
import CreateClientes from './componentes/Sistema/Clientes/Create'
import EditarClientes from './componentes/Sistema/Clientes/Editar'
import Detalles from './componentes/Cliente/Detalles'
import MyComponent from './componentes/locos.jsx'
import Tablaansaldos from './componentes/Reportes/Tabla_ansaldos';
import Reporteansaldos from './componentes/Reportes/Reporte_ansaldos';
import EDC from './componentes/Reportes/EDC';
export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomeCliente />} />
                        <Route path='/Acercade' element={<Acercade />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Airtime-Home' element={<Home />} />
                        <Route path='/Usuarios' element={<Usuarios />} />
                        <Route path='/Clientes' element={<Clientes />} />
                        <Route path='/Usuarios/create' element={<CreateUser />} />
                        <Route path='/Usuarios/edit' element={<EditarUser />} />
                        <Route path='/Clientes/create' element={<CreateClientes />} />
                        <Route path="/Clientes/edit/:id" element={<EditarClientes />} />
                        <Route path="/detalles/:id" element={<Detalles />} />
                        <Route path="/" element={<MyComponent />} />
                        <Route path ="/Tablaansaldos/:fechaInicio/:fechaFin" element= {<Tablaansaldos/>}/> 
                        <Route path ="/reportes/Antiguedad_saldos" element= {<Reporteansaldos />}/>
                        <Route path ="/Clientes/EDC/:id" element= {<EDC/>}/> 
                    </Routes>
                </ BrowserRouter>
            </div>
        )
    }
}
