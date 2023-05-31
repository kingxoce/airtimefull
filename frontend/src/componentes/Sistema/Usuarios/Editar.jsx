import React, { useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './Style.css'

function Editar() {

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
    <div className="editar">
        <Form>
            <h2>Editar Usuario</h2>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="ejemplo@gmail.com" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPass">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="**********" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTipo">
                <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Select aria-label="">
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

export default Editar;