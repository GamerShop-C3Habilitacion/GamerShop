import React from 'react'
import GestorProducto from '../componetes/GestorProducto'
import GestorVenta from '../componetes/GestorVenta'

const Administrador = () => {
    return (
        <div>
            <GestorVenta />
            <GestorProducto />
        </div>
    )
}

export default Administrador
