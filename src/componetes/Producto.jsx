import React from 'react'
import { Container, FloatingLabel, Form, Row, Col, Button } from 'react-bootstrap';

const Producto = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                    <>
                        <h1 className="text-center">Registro De Productos</h1>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre del producto"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Dijite el nombre del producto" />
                        </FloatingLabel>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Lote"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Dijite el lote del producto" />
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
                        label="Descripcion"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Observaciones" />
                        </FloatingLabel>  
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Precio del Producto"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Precio del Producto" />
                        </FloatingLabel>
                        <Button variant="primary my-3" type="submit">
                            Registrar Producto
                        </Button>
                    </>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Producto