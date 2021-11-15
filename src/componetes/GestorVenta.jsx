import React from 'react'
import {Button, Container} from 'react-bootstrap'

const GestorVenta = () => {
    return (
        <div>
            <Container>
                <h2>Bienvenido al gestor de ventas</h2>
                <Button href="/Venta.jsx" variant="success" size="lg">
                    Nueva Venta
                </Button>{' '}
                <Button variant="secondary" size="lg">
                    Registros de ventas.
                </Button>
            </Container>
        </div>
    )
}

export default GestorVenta
