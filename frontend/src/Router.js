import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeCliente from './componentes/Cliente/Home';
import Acercade from './componentes/Cliente/Acercade'
import Login from './componentes/Login'
import Home from './componentes/Sistema/HomeServer'
import Clientes from './componentes/Sistema/Clientes/Clientes'
import CreateClientes from './componentes/Sistema/Clientes/Create'
import EditarClientes from './componentes/Sistema/Clientes/Editar'
import Detalles from './componentes/Cliente/Detalles'
import MyComponent from './componentes/locos.jsx'
import Tablaansaldos from './componentes/Reportes/Tabla_ansaldos';
import Reporteansaldos from './componentes/Reportes/Reporte_ansaldos';
import EDC from './componentes/Reportes/EDC';
import Pago from './componentes/Cliente/Pago';
import Mora from './componentes/Cliente/Mora';

import Empleados from './componentes/Sistema/Empleados/Empleados'
import CreateEmpleados from './componentes/Sistema/Empleados/Create'
import EditarEmpleados from './componentes/Sistema/Empleados/Editar'



import Rols from './componentes/Sistema/Rols/Rols'
import CreateRols from './componentes/Sistema/Rols/Create'
import EditarRols from './componentes/Sistema/Rols/Editar'




import Usuarios from './componentes/Sistema/Usuarios/Usuarios'
import CreateUsuarios from './componentes/Sistema/Usuarios/Create'
import EditarUsuarios from './componentes/Sistema/Usuarios/Editar'



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
                        
                        <Route path='/Clientes/create' element={<CreateClientes />} />
                        <Route path="/Clientes/edit/:id" element={<EditarClientes />} />
                        <Route path="/detalles/:id" element={<Detalles />} />
                        <Route path="/" element={<MyComponent />} />



                        <Route path='/Empleados' element={<Empleados />} />
                        <Route path='/Empleados/create' element={<CreateEmpleados />} />
                        <Route path="/Empleados/edit/:id" element={<EditarEmpleados />} />



                        <Route path='/Rols' element={<Rols />} />
                        <Route path='/Rols/create' element={<CreateRols />} />
                        <Route path="/Rols/edit/:id" element={<EditarRols />} />

                        <Route path='/Usuarios' element={<Usuarios />} />
                        <Route path='/Usuarios/create' element={<CreateUsuarios />} />
                        <Route path="/Usuarios/edit/:id" element={<EditarUsuarios />} />

                        <Route path ="/Tablaansaldos/:fechaInicio/:fechaFin" element= {<Tablaansaldos/>}/> 
                        <Route path ="/reportes/Antiguedad_saldos" element= {<Reporteansaldos />}/>
                        <Route path ="/Clientes/EDC/:id" element= {<EDC/>}/> 
                        <Route path ="/MORA/:id" element= {<Mora/>}/> 
                        <Route path ="/PAGO/:id" element= {<Pago/>}/>   
                    </Routes>
                </ BrowserRouter>
            </div>
        )
    }
}
