import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="">Redux Toolkit</Navbar.Brand>
            <Nav>
                <Nav.Link to="/" as={Link}>Products</Nav.Link>
            </Nav>
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    <Nav.Link to="/cart" as={Link}>Cart <sup className='bg-secondary px-1 rounded-circle text-light'>0</sup></Nav.Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
