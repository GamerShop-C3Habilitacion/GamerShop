import React from 'react'
import { Container, FloatingLabel, Form, Row, Col, Button } from 'react-bootstrap';

const Venta = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                    <>
                        <h1 className="text-center">Registro De Ventas</h1>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre del Cliente"
                        className="mb-3"
                        >
                        <Form.Control  placeholder="Nombre del Cliente" />
                        </FloatingLabel>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Producto"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Producto" />
                        </FloatingLabel>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Cantidad"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Cantidad" />
                        </FloatingLabel>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Precio del Producto"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Precio del Producto" />
                        </FloatingLabel>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Precio Total"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Precio Total" />
                        </FloatingLabel>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre del Vendedor"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Nombre del Vendedor" />
                        <Button variant="primary my-3" type="submit">
                            Registrar venta
                        </Button>
                        </FloatingLabel>
                    </>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Venta
