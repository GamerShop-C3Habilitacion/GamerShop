import ListaProductos from "../components/ListaProductos";

const Home = ({ isLoggedIn, carrito, setCarrito }) => {
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Top productos Gamers</h1>
            <ListaProductos 
            isLoggedIn={isLoggedIn}
            carrito = {carrito}
            setCarrito = {setCarrito}
            />
        </div>
    );
}
export default Home;
