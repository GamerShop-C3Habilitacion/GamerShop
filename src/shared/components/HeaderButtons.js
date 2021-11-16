import { Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const HeaderButtons = ({ isLoggedIn, setLogin, cantCarrito }) => {

    

    const login = () => {
        setLogin(true);

    };

    const logout = () => {
        setLogin(false);

    }

    if (isLoggedIn) {
        return (
            <React.Fragment>
                      <Link to="-/Venta">
                    <Button variant="primary" className="me-3">
                        venta
                    </Button>
                </Link>
                <Link to="/CrearProducto">
                    <Button variant="primary" className="me-3">
                        Crear Producto
                    </Button>
                </Link>
                <Link to="/Carrito">
                    <Button variant="primary" className="me-3">
                        Carrito <Badge bg="secondary">{cantCarrito}</Badge>
                    </Button>
                </Link>
                <Button variant="outline-light" onClick={logout}>
                    Logout
                </Button>
          
            </React.Fragment>
        );
    } else {
        return (
            <div>
                <Button variant="light" onClick={login}>
                    Login
                </Button>
            </div>
        );
    };
};

export default HeaderButtons;