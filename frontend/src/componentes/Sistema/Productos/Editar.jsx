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
            <h2>Editar Producto</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre del Producto</Form.Label>
                <Form.Control type="text" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescripcion">
                <Form.Label>Descripción del Producto</Form.Label>
                <Form.Control type="text"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVuelo">
                <Form.Label>Incluye Vuelo?</Form.Label>
                <Form.Select aria-label="Seleccione una opción">
                    <option>Seleccione una opción</option>
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAlimento">
                <Form.Label>Incluye Alimento?</Form.Label>
                <Form.Select aria-label="Seleccione una opción">
                    <option>Seleccione una opción</option>
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAlojamiento">
                <Form.Label>Incluye Alojamiento?</Form.Label>
                <Form.Select aria-label="Seleccione una opción">
                    <option>Seleccione una opción</option>
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGuia">
                <Form.Label>Incluye Guía?</Form.Label>
                <Form.Select aria-label="Seleccione una opción">
                    <option>Seleccione una opción</option>
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTransporte">
                <Form.Label>Incluye Transporte?</Form.Label>
                <Form.Select aria-label="Seleccione una opción">
                    <option>Seleccione una opción</option>
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrecio">
                <Form.Label>Precio del Producto</Form.Label>
                <Form.Control type="number" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDuracion">
                <Form.Label>Duración de día</Form.Label>
                <Form.Control type="number" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCuotas">
                <Form.Label>Cuotas Disponibles</Form.Label>
                <Form.Control type="number" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFechaInicio">
                    <Form.Label>Fecha de Salida:</Form.Label>
                    <Form.Control type="date" placeholder="Fecha Salida"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFechaFin">
                    <Form.Label>Fecha de Llegada:</Form.Label>
                    <Form.Control type="date" placeholder="Fecha Llegada"/>
            </Form.Group>
            <Form.Group controlId="imagenProducto" className="mb-3">
                <Form.Label>Imagen del producto</Form.Label>
                <Form.Control type="file" />
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