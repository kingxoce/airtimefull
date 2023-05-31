import React, { useEffect, useState} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './Style.css'

function Create() {

    const [values, setValues] = useState({
        usuario: '',
        email: '',
        password: '',
        tipo: ''
    })

    const handleSubmit = (e)=> {
        e.preventDefault();
        axios.post('http://localhost:4000/usuarios-post', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
          return new Promise((resolve) => setTimeout(resolve, 2000));
        }
    
        if (isLoading) {
          simulateNetworkRequest().then(() => {
            setLoading(false);
          });
        }
      }, [isLoading]);
    
      const handleClick = () => setLoading(true);

  return (
    <div className="create">
        <Form onSubmit={handleSubmit}>
            <h2>Nuevo Usuario</h2>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" 
                onChange={e => setValues({...values, usuario: e.target.value})}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="ejemplo@gmail.com" 
                onChange={e => setValues({...values, email: e.target.value})}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPass">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="**********" 
                onChange={e => setValues({...values, password: e.target.value})}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTipo">
                <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Select aria-label="" onChange={e => setValues({...values, tipo: e.target.value})}>
                    <option>seleccionar una opcion</option>
                    <option value="A">Administrativo</option>
                    <option value="C">Cliente</option>
                </Form.Select>
            </Form.Group>
            <Button
                variant="success"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                >
                {isLoading ? 'Guardando…' : 'Guardar'}
            </Button>
        </Form>
    </div>
  );
}

export default Create;