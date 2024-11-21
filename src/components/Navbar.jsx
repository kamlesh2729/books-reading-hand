import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
    return (
      <>
        <NavBar fixed="top" expand="lg" className="bg-body-tertiary mb-3 px-5">
          <Container fluid>
            <NavBar.Brand href="#">Navbar</NavBar.Brand>
            <NavBar.Toggle aria-controls="offcanvasNavbar-expand" />
            <NavBar.Offcanvas
              id="offcanvasNavbar-expand-expand"
              aria-labelledby="offcanvasNavbarLabel-expand-expand"
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id="offcanvasNavbarDropdown-expand-expand"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </NavBar.Offcanvas>
          </Container>
        </NavBar>
      </>
    );
};

export default Navbar;