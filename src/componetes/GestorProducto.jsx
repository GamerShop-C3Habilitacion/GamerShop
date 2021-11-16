import React from 'react'
import {Button, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const GestorProducto = () => {
    return (
        <div>
            <h2>Bienvenido al gestor de ventas</h2>
            <Container>
                <Router>
                    <Switch>
                        <Route>
                            <Link to="/Producto">
                            <Button variant="success" size="lg">
                                Nueva Producto
                            </Button>
                            </Link>
                            <Link>
                            <Button variant="secondary" size="lg">
                                Inventarios de Productos
                            </Button>
                            </Link>
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    )
}

export default GestorProducto