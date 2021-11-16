import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';

const CrearProducto = () => {
    return (
        <Container>
            <h1 className=" text-center  mt-5 mb-5">Registro de producto</h1>

            <FloatingLabel
                controlId="floatingInput"
                label="Nombre del Producto"
                className="mb-3 mt-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />

                <Form.Group controlId="formFile" className="mt-3 mb-3">
                    <Form.Label>Cargar imagen</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <FloatingLabel className="mt-3 mb-3"controlId="floatingSelect" label="Categoria">
                    <Form.Select aria-label="Floating label select example">
                        <option>Ninguna</option>
                        <option value="1">Equipo</option>
                        <option value="2">Periferico</option>
                        <option value="3">Accesorios</option>
                    </Form.Select>
                </FloatingLabel>

            </FloatingLabel>
            <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary">Guardar</Button>



        </Container>
    );
}

export default CrearProducto;