// import { Container, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  //JavaScript
  return (
    //HTML
    <header>
      <Navbar variant='dark' expand="lg" className='bg-dark'>
        <Container fluid className=''>
          <Navbar.Brand href="#home">REACT Sneakers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex container-fluid justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </header>
  );
}

export default Header;