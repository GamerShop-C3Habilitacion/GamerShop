import React from 'react'
import {Button, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const GestorVenta = () => {
    return (
        <div>
            <h2>Bienvenido al gestor de ventas</h2>
            <Container>
                <Router>
                    <Switch>
                        <Route>
                            <Link to="/Venta">
                            <Button variant="success" size="lg">
                                Nueva Venta
                            </Button>
                            </Link>
                            <Link>
                            <Button variant="secondary" size="lg">
                                Registros de ventas
                            </Button>
                            </Link>
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    )
}

export default GestorVenta
