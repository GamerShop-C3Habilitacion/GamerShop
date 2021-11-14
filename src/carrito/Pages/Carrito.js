import Table from 'react-bootstrap/Table'; 
import Container from 'react-bootstrap/Container';

const Carrito = ({carrito}) => {
    return(
        <div>
        <h1 className=" text-center  mt-5 mb-5">Mi carrito</h1>
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((producto) =>{
                        return (
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.total}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Total</td>
                        <td>{carrito.reduce((total, producto) => total+producto.total, 0)}</td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
        </div>
    );
}
export default Carrito;