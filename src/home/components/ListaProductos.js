import {Container, Row, Col}  from "react-bootstrap";
import Producto from "./Producto";

const ListaProductos = ({isLoggedIn, carrito, setCarrito}) => {
    const productos = [
        {
            id: 1,
            title: "Alienware M15",
            description: "Alienwate R3 Gaming Laptop 2020",
            price:"18.200.000",
            url:'https://http2.mlstatic.com/D_NQ_NP_2X_719802-MCO42199810648_062020-F.webp',
            category: "Equipo"
        },
        {
            id: 2,
            title:"Mouse de juego Logitech G, Series Lightsync G203 Negro",
            description:"El mouse de juego que te ofrecerá la posibilidad de marcar la diferencia y sacar ventaja en tus partidas",
            price:"88.000",
            url:'https://http2.mlstatic.com/D_NQ_NP_2X_875471-MLA45386898978_032021-F.webp',
            category:"Periferico"
        },
        {
            id: 3,
            title:"Audifonos gamer Kotion G2000 negro y azul con LED",
            description:"Experimenta la adrenalina de sumergirte en la escena de otra manera",
            price:"50.469",
            url:"https://http2.mlstatic.com/D_NQ_NP_2X_739748-MLA45260579840_032021-F.webp",
            category: "periferico",
        },
        {
            id: 4,
            title:"Torre Gamer AMD Ryzen 3",
            description:"Torre Gamer AMD Ryzen 3 3200g, SSD 240gb, RAM 8gb",
            price:"1.749.900",
            url:"https://http2.mlstatic.com/D_NQ_NP_2X_955102-MCO46022204833_052021-F.webp",
            category: "Equipos",
        },
        {
            id: 5,
            title:"Teclado gamer Redragon Kurama K552 QWERTY Outemu blue español latinoamérica color negro con lu roja.",
            description:"Este dispositivo tiene teclas antighosting.",
            price:"146.340",
            url:"https://http2.mlstatic.com/D_NQ_NP_2X_606118-MLA45324999317_032021-F.webp",
            category: "perifericos",
        },
        {
            id:6,
            title:"Logitech G640",
            description:"Pad Mouse Gaming de superficie grande, en tela.",
            price:"84.900",
            url:"https://http2.mlstatic.com/D_NQ_NP_2X_843426-MCO40492510478_012020-F.webp",
            category: "Accesorios",
        },
    ];

    return (
            <Container>
                <Row>
                    {productos.map((producto) => (
                        <Col xs={4}>
                            <Producto 
                            producto={producto} 
                            isLoggedIn={isLoggedIn}
                            productos = {productos}
                            carrito = {carrito}
                            setCarrito = {setCarrito}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
    );
};

export default ListaProductos;