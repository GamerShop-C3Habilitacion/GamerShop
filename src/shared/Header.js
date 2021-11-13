import {Navbar, Container, Nav} from "react-bootstrap";
import HeaderButtons from "./components/HeaderButtons";


const Header = ({isLoggedIn, login, cantCarrito}) => {
    return (
        <Navbar  bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">GamerShop</Navbar.Brand>
                <Nav className="justify-content-end">
                    <HeaderButtons 
                    isLoggedIn={isLoggedIn} 
                    setLogin={login}
                    cantCarrito= {cantCarrito}
                    />
                </Nav>
            </Container>
        </Navbar>
    );

}

export default Header;