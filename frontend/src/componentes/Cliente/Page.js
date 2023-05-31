import React, { useEffect, useState } from "react";
import axios from "axios";
import './Page.css'

const Page = () => {

    const [productos, setProductos] = useState([])

    useEffect (() => {
        const obtenerProductos = async() =>{
            const url = 'http://localhost:4000/productos';
            const result = await axios.get(url);

            setProductos(result.data)
            
        }
        obtenerProductos()
    },[]);

    return (
        <div className='page'>
            <div className='content'>
                <p>Detalles del Tour</p>
                {
                    productos.map((producto, i)=>{
                        return(
                            <p key={i}>
                                {producto.producto}
                            </p>
                        )
                    })
                }
            </div>
            <div className='historia'>
                {
                    productos.map((producto, i)=>{
                        return(
                            <p key={i}>
                                {producto.historia}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page