import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";


const CardFooter = ({id, price, category, isLoggedIn, productos, carrito, setCarrito}) => {
    
    const AddProducto = (e) => {
       const productoAgregar =  productos.find ((p) => p.id === e.target.id);
       const productoAgregado = carrito.find((p) => p.id === productoAgregar.id)
       if (productoAgregado){

           productoAgregado.cantidad ++;
           productoAgregado.total =
            productoAgregado.price * productoAgregado.cantidad;
           setCarrito([...carrito]);

       }else{

           const producto = {
               id: productoAgregar.id, 
               nombre: productoAgregar.title, 
               cantidad:1, precio: productoAgregar.price, 
               total: productoAgregar.price
            }
            setCarrito([...carrito, producto]);
       }
    };
       
    if (isLoggedIn){
        return<Button id ={id} variant="primary" onClick={AddProducto}>
            ${price}</Button>;
    }else{
        return(
            <Badge pill bg="secondary">
            {category}
            </Badge>
        );
    }
        
};
export default CardFooter;