import { Navbar as NavBS, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartIcon } from "../utilities/CartIcon";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()

    return (
    <NavBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
          onClick={openCart}
        >
          <CartIcon cartQuantity={cartQuantity}/>
        </Button>
      </Container>
    </NavBS>
  );
}
