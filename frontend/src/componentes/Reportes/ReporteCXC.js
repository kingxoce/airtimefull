import React from 'react';
import { Col, Form, Row, Button } from "react-bootstrap";
import './Reporte.css'

function Reporte() {

    return (
      <div className='reporte'>
        <h1>REPORTE DE CUENTAS POR COBRAR</h1>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Todos</option>
                        <option>Pendientes</option>
                        <option>Retrasados</option>
                        <option>Saldados</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Exportar</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>html</option>
                        <option>Exel</option>
                        <option>pdf</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Generar
            </Button>
        </Form>
      </div>
    );
}
  

export default Reporte