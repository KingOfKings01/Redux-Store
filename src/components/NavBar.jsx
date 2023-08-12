import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="">Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>
            <b style={{ position: 'relative', left: '-50%' }}>Products</b>
          </Nav.Link>
        </Nav>
        {/* <Navbar.Collapse className="justify-content-end"> */}
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "55px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="rounded-circle px-1 position-absolute" style={{right:"28px", top:"25px"}}>
              <b>{cartProducts.length}</b>
              </span>
            </Nav.Link>
          </Navbar.Text>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
