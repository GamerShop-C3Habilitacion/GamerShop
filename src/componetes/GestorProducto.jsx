import React from 'react'
import {Button, Container} from 'react-bootstrap'

const GestorProducto = () => {
    return (
        <div>
            <Container>
                <h2>Bienvenido al gestor de Productos</h2>
                <Button href="/Compra.jsx" variant="success" size="lg">
                    Nuevo Producto
                </Button>{' '}
                <Button variant="secondary" size="lg">
                    Registros de productos.
                </Button>
            </Container>
        </div>
    )
}

export default GestorProducto